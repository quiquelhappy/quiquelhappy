<script lang="ts">
	import { tick } from 'svelte';
	import { EMAIL, GITHUB } from '#lib/data/site.ts';
	import { ui } from '#lib/state/ui.svelte.ts';
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
			ui.toast('Email copied. Go on, write something.');
		} catch {
			location.href = `mailto:${EMAIL}`;
		}
	}

	const cmds: Cmd[] = [
		{ group: 'Go to', label: 'Hello', run: jump('top'), words: 'home top hero' },
		{ group: 'Go to', label: 'About', run: jump('about'), words: 'story achievements' },
		{ group: 'Go to', label: 'Experience', run: jump('experience'), words: 'skills filters work' },
		{ group: 'Go to', label: 'Projects', run: jump('projects'), words: 'serverbench grifpkg' },
		{ group: 'Go to', label: 'The 2000s corner', run: jump('retro'), words: 'retro y2k webmaster' },
		{ group: 'Go to', label: 'Hire me', run: jump('hire'), words: 'contact email job' },
		{ group: 'Actions', label: 'Email Quique', hint: EMAIL, run: () => (close(), (location.href = `mailto:${EMAIL}`)), words: 'contact mail hire' },
		{ group: 'Actions', label: 'Copy email address', hint: EMAIL, run: copyEmail },
		{ group: 'Actions', label: 'Open GitHub', run: () => (close(), window.open(GITHUB, '_blank', 'noopener')) },
		{ group: 'Fun', label: 'Toggle dark mode', run: () => (close(), ui.toggleTheme()), words: 'light theme' },
		{ group: 'Fun', label: ui.y2k ? 'Leave the year 2000' : 'Travel to the year 2000', run: () => (close(), ui.toggleY2k()), words: 'y2k retro time machine' },
		{ group: 'Fun', label: 'Summon Gandalf', run: () => (close(), ui.summon('Woof! You rang?')), words: 'mascot dog aussie buddy pix' },
		{ group: 'Fun', label: 'Make Gandalf do a trick', run: () => (close(), ui.dance()) },
		{ group: 'Fun', label: 'Confetti', run: () => (close(), ui.confetti()) },
		{
			group: 'Fun',
			label: 'sudo hire quique',
			hint: 'permission granted',
			run: () => {
				close();
				ui.toast('[sudo] password for recruiter: ********');
				setTimeout(() => ui.toast('Access granted. Opening the hire section...'), 900);
				setTimeout(() => (ui.go('hire'), ui.confetti(), ui.flashHire()), 1700);
			}
		}
	];

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
		<div class="dialog" role="dialog" aria-modal="true" aria-label="Command palette" onclick={(e) => e.stopPropagation()} onkeydown={key} tabindex="-1">
			<div class="in">
				<Icon name="search" scale={2} />
				<input
					bind:this={input}
					bind:value={q}
					placeholder="Type a command or search..."
					role="combobox"
					aria-expanded="true"
					aria-controls="cmd-list"
					aria-label="Command"
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
					<li class="none">No command found. Try "hire".</li>
				{/each}
			</ul>
			<div class="foot"><span><kbd>&uarr;</kbd><kbd>&darr;</kbd> navigate</span><span><kbd>enter</kbd> run</span></div>
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
