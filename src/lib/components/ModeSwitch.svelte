<script lang="ts">
	import { page } from '$app/state';
	import { ui } from '#lib/state/ui.svelte.ts';
	import { L } from '#lib/i18n/index.svelte.ts';
	import { langPath, splitPath } from '#lib/i18n/locales.ts';
	import Icon from './Icon.svelte';

	const mode = $derived(splitPath(page.url.pathname).mode);
</script>

<div class="modes" role="group" aria-label={L.ui.modes.switch}>
	<a class="home" href={langPath(ui.lang)} aria-label={L.ui.modes.home} title={L.ui.modes.home} onclick={() => ui.rememberMode('')}><Icon name="home" scale={2} /></a>
	<a href={langPath(ui.lang, '/personal')} aria-current={mode === 'personal' ? 'page' : undefined} class:on={mode === 'personal'} onclick={() => ui.rememberMode('personal')}>{L.ui.modes.personal}</a>
	<a href={langPath(ui.lang, '/pro')} aria-current={mode === 'pro' ? 'page' : undefined} class:on={mode === 'pro'} onclick={() => ui.rememberMode('pro')}>{L.ui.modes.pro}</a>
</div>

<style>
	.modes {
		display: inline-flex;
		height: 36px;
		border: 1px solid var(--line);
		border-radius: var(--radius-sm);
		overflow: hidden;
		background: var(--bg);
		font-family: var(--font-mono);
		font-size: 12px;
		font-weight: 600;
	}
	a {
		display: inline-flex;
		align-items: center;
		padding: 0 11px;
		text-decoration: none;
		color: var(--ink-2);
		border-left: 1px solid var(--line);
	}
	a:first-child {
		border-left: 0;
	}
	a:hover {
		background: var(--bg-tile);
		color: var(--ink);
	}
	a.on {
		background: var(--ink);
		color: var(--bg);
	}
	.home {
		padding: 0 9px;
	}
	/* phones: only offer the other side */
	@media (max-width: 700px) {
		a.on {
			display: none;
		}
		.home {
			display: none;
		}
		a {
			border-left: 0;
		}
	}
	:global([data-era='y2k']) .modes {
		border: 2px outset #fff;
		border-radius: 0;
		background: #d4d0c8;
	}
	:global([data-era='y2k']) a {
		color: #000;
		border-color: #888;
	}
	:global([data-era='y2k']) a.on {
		background: #000066;
		color: #ffcc33;
	}
</style>
