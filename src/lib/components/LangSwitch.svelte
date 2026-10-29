<script lang="ts">
	import { ui } from '#lib/state/ui.svelte.ts';
	import { L } from '#lib/i18n/index.svelte.ts';
	import { LANGS, langPath, type LangCode } from '#lib/i18n/locales.ts';

	let open = $state(false);
	let root: HTMLDivElement;

	function pick(code: LangCode) {
		ui.rememberLang(code);
		open = false;
	}

	function outside(e: PointerEvent) {
		if (open && root && !root.contains(e.target as Node)) open = false;
	}
</script>

<svelte:window onpointerdown={outside} onkeydown={(e) => e.key === 'Escape' && (open = false)} />

<div class="lang" bind:this={root}>
	<button class="tool" aria-haspopup="listbox" aria-expanded={open} aria-label={L.ui.nav.language} onclick={() => (open = !open)}>
		<span class="globe" aria-hidden="true"></span>{ui.lang.toUpperCase()}
	</button>
	{#if open}
		<ul role="listbox" aria-label={L.ui.nav.language}>
			{#each LANGS as l}
				<li role="option" aria-selected={l.code === ui.lang}>
					<a href={langPath(l.code)} hreflang={l.code} lang={l.code} data-sveltekit-reset="false" onclick={() => pick(l.code)} class:on={l.code === ui.lang}>
						<b>{l.code.toUpperCase()}</b>{l.native}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.lang {
		position: relative;
	}
	.tool {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		height: 36px;
		padding: 0 10px;
		border: 1px solid var(--line);
		border-radius: var(--radius-sm);
		background: var(--bg);
		cursor: pointer;
		font-family: var(--font-mono);
		font-size: 12px;
		font-weight: 600;
	}
	.tool:hover {
		background: var(--bg-tile);
	}
	.globe {
		width: 12px;
		height: 12px;
		border: 2px solid currentColor;
		border-radius: 50%;
		position: relative;
	}
	.globe::after {
		content: '';
		position: absolute;
		inset: 1px 3px;
		border-inline: 1px solid currentColor;
	}
	ul {
		position: absolute;
		right: 0;
		top: calc(100% + 8px);
		z-index: 60;
		margin: 0;
		padding: 4px;
		list-style: none;
		min-width: 180px;
		background: var(--bg);
		border: 2px solid var(--ink);
		box-shadow: 4px 4px 0 var(--green-bright);
	}
	a {
		display: flex;
		gap: 12px;
		align-items: center;
		padding: 9px 10px;
		text-decoration: none;
		font-size: 15px;
		font-weight: 500;
	}
	a b {
		font: 700 11px var(--font-mono);
		width: 22px;
		color: var(--ink-3);
	}
	a:hover,
	a.on {
		background: var(--green);
		color: var(--on-green);
	}
	a:hover b,
	a.on b {
		color: inherit;
	}
	:global([data-era='y2k']) .tool {
		background: #d4d0c8;
		color: #000;
		border: 2px outset #fff;
		border-radius: 0;
	}
	:global([data-era='y2k']) ul {
		background: #d4d0c8;
		border: 3px outset #fff;
		box-shadow: none;
	}
	:global([data-era='y2k']) a {
		color: #000;
		text-decoration: none;
	}
</style>
