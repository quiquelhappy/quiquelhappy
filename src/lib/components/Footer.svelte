<script lang="ts">
	import { COFFEE, EMAIL, GITHUB } from '#lib/data/site.ts';
	import { ui } from '#lib/state/ui.svelte.ts';
	import { L } from '#lib/i18n/index.svelte.ts';
</script>

<footer class="section pad">
	<div class="row">
		<p>
			&copy; {new Date().getFullYear()} Enrique Osuna Garc&iacute;a. {L.ui.footer.made}
		</p>
		<nav aria-label={L.ui.footer.elsewhere}>
			<a href="mailto:{EMAIL}">{EMAIL}</a>
			<a href={GITHUB} rel="noopener">GitHub</a>
			<a href={COFFEE} rel="noopener">{L.ui.footer.coffee}</a>
			<button onclick={() => (ui.paletteOpen = true)}>&#8984;K</button>
		</nav>
	</div>
</footer>

<style>
	footer {
		padding-block: 26px;
		font-size: 13.5px;
		color: var(--ink-2);
	}
	.row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 16px 32px;
		flex-wrap: wrap;
	}
	p {
		max-width: 60ch;
	}
	nav {
		display: flex;
		gap: 20px;
		flex-wrap: wrap;
		font-family: var(--font-mono);
		font-size: 12.5px;
	}
	nav a,
	nav button {
		all: unset;
		cursor: pointer;
		text-decoration: underline;
		text-underline-offset: 3px;
	}
	nav a:hover,
	nav button:hover {
		color: var(--green);
	}
	nav button:focus-visible {
		outline: 2px solid var(--green-bright);
	}
</style>
