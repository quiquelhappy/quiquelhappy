<script lang="ts">
	import { ui } from '#lib/state/ui.svelte.ts';
	import { L } from '#lib/i18n/index.svelte.ts';
	import { langPath } from '#lib/i18n/locales.ts';
	import { GITHUB } from '#lib/data/site.ts';
	import Icon from './Icon.svelte';
</script>

<footer class="section pad">
	<div class="row">
		<div>
			<p class="thanks">{L.ui.pfooter.text}</p>
			<p class="small">&copy; {new Date().getFullYear()} Enrique Osuna Garc&iacute;a</p>
		</div>
		<div class="links">
			<a class="btn btn-primary" href={langPath(ui.lang, '/pro')} onclick={() => ui.rememberMode('pro')}>{L.ui.pfooter.hire} <b>{L.ui.pfooter.hireCta}</b> <Icon name="arrow" scale={2} /></a>
			<a href={langPath(ui.lang)}>{L.ui.pfooter.home}</a>
			<a href={GITHUB} rel="noopener">GitHub</a>
			<a href="#top" aria-label={L.ui.nav.home} onclick={(e) => (e.preventDefault(), ui.go('top'))}>&uarr;</a>
		</div>
	</div>
</footer>

<style>
	footer {
		padding-block: 36px;
	}
	.row {
		display: flex;
		flex-wrap: wrap;
		gap: 20px 32px;
		align-items: center;
		justify-content: space-between;
	}
	.thanks {
		margin: 0;
		font-family: var(--font-pixel);
		font-size: 26px;
		font-weight: 600;
	}
	.small {
		margin: 4px 0 0;
		font-size: 13px;
		color: var(--ink-3);
	}
	.links {
		display: flex;
		flex-wrap: wrap;
		gap: 12px 22px;
		align-items: center;
		font-family: var(--font-mono);
		font-size: 12.5px;
	}
	.links a:not(.btn) {
		color: var(--ink-2);
		text-underline-offset: 3px;
	}
	.btn {
		max-width: 100%;
		height: auto;
		min-height: 40px;
		padding-block: 8px;
		white-space: normal;
		text-align: left;
	}
	.btn b {
		font-weight: 700;
	}
</style>
