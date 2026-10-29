<script lang="ts">
	import { tick } from 'svelte';
	import { EMAIL, GITHUB } from '#lib/data/site.ts';
	import { ui } from '#lib/state/ui.svelte.ts';
	import { L } from '#lib/i18n/index.svelte.ts';
	import { LANGS, langPath } from '#lib/i18n/locales.ts';
	import { goto } from '$app/navigation';
	import Icon from './Icon.svelte';

	type Cmd = { label: string; group: string; hint?: string; words?: string; run: () => void };

	let q = $state('');
	let sel = $state(0);
	let input = $state<HTMLInputElement>();
	let list = $state<HTMLUListElement>();

	const close = () => (ui.paletteOpen = false);
	const jump = (id: string) => () => (close(), setTimeout(() => ui.go(id), 60));

	async function copyEmail() {
		close();
		try {
			await navigator.clipboard.writeText(EMAIL);
			ui.toast(L.ui.palette.toastCopied);
		} catch {
			location.href = `mailto:${EMAIL}`;
		}
	}

	const cmds: Cmd[] = $derived.by(() => {
		const P = L.ui.palette;
		const go = P.go, act = P.actions, fun = P.fun;
		return [
			{ group: go, label: L.ui.nav.top, run: jump('top'), words: 'home top hero' },
			{ group: go, label: L.ui.nav.about, run: jump('about'), words: 'story achievements about' },
			{ group: go, label: L.ui.nav.experience, run: jump('experience'), words: 'skills filters work experience' },
			{ group: go, label: L.ui.nav.projects, run: jump('projects'), words: 'serverbench grifpkg projects' },
			{ group: go, label: P.retro, run: jump('retro'), words: 'retro y2k webmaster' },
			{ group: go, label: L.ui.nav.hire, run: jump('hire'), words: 'contact email job hire' },
			{ group: act, label: P.email, hint: EMAIL, run: () => (close(), (location.href = `mailto:${EMAIL}`)), words: 'contact mail hire email' },
			{ group: act, label: P.copy, hint: EMAIL, run: copyEmail, words: 'copy email' },
			{ group: act, label: P.github, run: () => (close(), window.open(GITHUB, '_blank', 'noopener')), words: 'github code' },
			...LANGS.map((l) => ({
				group: act,
				label: `${P.language}: ${l.native}`,
				hint: l.code.toUpperCase(),
				words: `language idioma llengua sprache langue ${l.code} ${l.native}`,
				run: () => {
					close();
					ui.rememberLang(l.code);
					goto(langPath(l.code) + location.hash, { reset: false });
				}
			})),
			{ group: fun, label: P.dark, run: () => (close(), ui.toggleTheme()), words: 'light theme dark' },
			{ group: fun, label: ui.y2k ? P.y2kOff : P.y2kOn, run: () => (close(), ui.toggleY2k()), words: 'y2k retro time machine 2000' },
			{ group: fun, label: P.summon, run: () => (close(), ui.summon(P.summonSay)), words: 'mascot dog aussie buddy gandalf' },
			{ group: fun, label: P.trick, run: () => (close(), ui.dance()), words: 'dance trick gandalf' },
			{ group: fun, label: P.confetti, run: () => (close(), ui.confetti()), words: 'confetti party' },
			{
				group: fun,
				label: 'sudo hire quique',
				hint: P.sudoHint,
				run: () => {
					close();
					ui.toast(P.sudo1);
					setTimeout(() => ui.toast(P.sudo2), 900);
					setTimeout(() => (ui.go('hire'), ui.confetti(), ui.flashHire()), 1700);
				}
			}
		];
	});

	const results = $derived.by(() => {
		const s = q.trim().toLowerCase();
		if (!s) return cmds;
		return cmds.filter((c) => s.split(/\s+/).every((w) => `${c.label} ${c.group} ${c.words ?? ''}`.toLowerCase().includes(w)));
	});

	$effect(() => {
		if (ui.paletteOpen) {
			q = '';
			sel = 0;
			tick().then(() => input?.focus());
		}
	});
	$effect(() => {
		results;
		sel = 0;
	});

	function key(e: KeyboardEvent) {
		if (e.key === 'Escape') return close();
		if (e.key === 'ArrowDown') (e.preventDefault(), (sel = (sel + 1) % Math.max(1, results.length)));
		else if (e.key === 'ArrowUp') (e.preventDefault(), (sel = (sel - 1 + results.length) % Math.max(1, results.length)));
		else if (e.key === 'Enter') (e.preventDefault(), results[sel]?.run());
		else if (e.key === 'Tab') (e.preventDefault(), input?.focus());
		tick().then(() => list?.querySelector('[data-sel="true"]')?.scrollIntoView({ block: 'nearest' }));
	}
</script>

{#if ui.paletteOpen}
	<div class="backdrop" onclick={close} role="presentation">
		<div class="dialog" role="dialog" aria-modal="true" aria-label={L.ui.palette.aria} onclick={(e) => e.stopPropagation()} onkeydown={key} tabindex="-1">
			<div class="in">
				<Icon name="search" scale={2} />
				<input
					bind:this={input}
					bind:value={q}
					placeholder={L.ui.palette.placeholder}
					role="combobox"
					aria-expanded="true"
					aria-controls="cmd-list"
					aria-label={L.ui.palette.label}
					autocomplete="off"
					spellcheck="false"
				/>
				<kbd>esc</kbd>
			</div>
			<ul id="cmd-list" role="listbox" bind:this={list}>
				{#each results as c, i}
					{#if i === 0 || results[i - 1].group !== c.group}
						<li class="group" role="presentation">{c.group}</li>
					{/if}
					<li role="option" aria-selected={i === sel} data-sel={i === sel}>
						<button onclick={() => c.run()} onmousemove={() => (sel = i)} tabindex="-1">
							<span>{c.label}</span>
							{#if c.hint}<small>{c.hint}</small>{/if}
						</button>
					</li>
				{:else}
					<li class="none">{L.ui.palette.none}</li>
				{/each}
			</ul>
			<div class="foot"><span><kbd>&uarr;</kbd><kbd>&darr;</kbd> {L.ui.palette.navigate}</span><span><kbd>enter</kbd> {L.ui.palette.run}</span></div>
		</div>
	</div>
{/if}

<style>
	.backdrop {
		position: fixed;
		inset: 0;
		z-index: 100;
		background: rgb(8 12 9 / 0.5);
		backdrop-filter: blur(3px);
		display: grid;
		justify-items: center;
		align-items: start;
		padding: 12vh 16px 16px;
	}
	.dialog {
		width: min(100%, 580px);
		background: var(--bg);
		border: 2px solid var(--ink);
		box-shadow: 8px 8px 0 var(--green-bright);
		display: grid;
		max-height: 70vh;
		grid-template-rows: auto minmax(0, 1fr) auto;
	}
	.in {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 0 16px;
		height: 56px;
		border-bottom: 1px solid var(--line);
		color: var(--ink-3);
	}
	input {
		all: unset;
		flex: 1;
		color: var(--ink);
		font-size: 17px;
		min-width: 0;
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 6px;
		overflow: auto;
	}
	.group {
		font: 600 11px var(--font-mono);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--ink-3);
		padding: 10px 10px 4px;
	}
	li button {
		all: unset;
		box-sizing: border-box;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 12px;
		padding: 10px;
		cursor: pointer;
		font-size: 15.5px;
		border-radius: var(--radius-sm);
	}
	li[aria-selected='true'] button {
		background: var(--green);
		color: var(--on-green);
	}
	small {
		font-family: var(--font-mono);
		font-size: 11.5px;
		opacity: 0.7;
	}
	.none {
		padding: 28px;
		text-align: center;
		color: var(--ink-3);
	}
	.foot {
		display: flex;
		gap: 18px;
		padding: 10px 16px;
		border-top: 1px solid var(--line);
		font: 12px var(--font-mono);
		color: var(--ink-3);
	}
	:global([data-era='y2k']) .dialog {
		border: 3px outset #fff;
		background: #d4d0c8;
		box-shadow: none;
	}
</style>
