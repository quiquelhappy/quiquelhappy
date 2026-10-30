<script lang="ts">
	import { ui } from '#lib/state/ui.svelte.ts';
	import { L } from '#lib/i18n/index.svelte.ts';
	import { langPath } from '#lib/i18n/locales.ts';
	import { photos } from '#lib/data/personal.ts';
	import Mosaic from './Mosaic.svelte';
	import Icon from './Icon.svelte';

	const hero = photos[0];
</script>

<section id="top" class="section hero">
	<div class="grid">
		<div class="copy pad">
			<p class="eyebrow">{L.ui.personal.eyebrow}</p>
			<h1>{L.ui.personal.h1a}<br /><span>{L.ui.personal.h1b}</span></h1>
			<p class="lede">{L.ui.personal.lede}</p>

			<ul class="facts">
				{#each L.ui.personal.facts as f}<li>{f}</li>{/each}
			</ul>

			<div class="cta">
				<a class="btn btn-primary btn-lg" href="#me" onclick={(e) => (e.preventDefault(), ui.go('me'))}>{L.ui.personal.ctaPics} <Icon name="arrow" scale={2} /></a>
				<a class="btn btn-lg" href="#map" onclick={(e) => (e.preventDefault(), ui.go('map'))}>{L.ui.personal.ctaMap}</a>
			</div>

			<p class="pro">{L.ui.personal.proLinkA} <a href={langPath(ui.lang, '/pro')} onclick={() => ui.rememberMode('pro')}>{L.ui.personal.proLink}</a></p>
		</div>

		<aside class="stage" aria-hidden="false">
			<figure style:--r="{hero.tilt}deg">
				<span class="tape" aria-hidden="true"></span>
				<img src={hero.src} width={hero.w} height={hero.h} alt={L.ui.personal.heroAlt} decoding="async" fetchpriority="high" />
				<figcaption>{L.content.photos.cruise.caption}</figcaption>
			</figure>
		</aside>
	</div>
	<Mosaic height={200} hint={L.ui.hero.mosaic} seed={5} />
</section>

<style>
	.hero {
		border-top: 0;
	}
	.grid {
		display: grid;
		grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
	}
	.copy {
		padding-block: clamp(40px, 7vw, 88px) clamp(32px, 5vw, 56px);
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 24px;
	}
	h1 {
		font-family: var(--font-pixel);
		font-weight: 600;
		font-size: clamp(38px, 4.9vw, 64px);
		line-height: 0.98;
		letter-spacing: -0.02em;
	}
	h1 span {
		background: linear-gradient(transparent 62%, var(--pink) 62% 92%, transparent 92%);
		padding-inline: 2px;
	}
	:global([data-theme='dark']) h1 span {
		background: var(--pink);
		color: #1a0a13;
		padding: 0 10px;
	}
	.facts {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
	.facts li {
		font-family: var(--font-mono);
		font-size: 12.5px;
		padding: 4px 11px;
		border: 1px solid var(--line-strong);
		border-radius: 999px;
		background: var(--bg);
		color: var(--ink-2);
	}
	.facts li::before {
		content: '\25A0';
		color: var(--pink);
		margin-right: 8px;
		font-size: 9px;
	}
	.cta {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
	}
	.pro {
		margin: 0;
		font-family: var(--font-mono);
		font-size: 12.5px;
		color: var(--ink-3);
	}
	.pro a {
		color: var(--ink);
		text-underline-offset: 3px;
	}

	.stage {
		border-left: 1px solid var(--line);
		padding: clamp(28px, 4vw, 56px) var(--pad);
		display: grid;
		place-items: center;
		background:
			linear-gradient(var(--line) 1px, transparent 1px) 0 0 / 14px 14px,
			linear-gradient(90deg, var(--line) 1px, transparent 1px) 0 0 / 14px 14px,
			var(--bg-soft);
	}
	figure {
		position: relative;
		margin: 0;
		width: min(100%, 340px);
		padding: 14px 14px 18px;
		background: #fff;
		border: 1px solid var(--line-strong);
		box-shadow: 8px 8px 0 var(--pink);
		transform: rotate(var(--r));
		transition: transform 0.25s steps(4);
	}
	figure:hover {
		transform: rotate(0deg) translateY(-4px);
	}
	img {
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: 1148 / 1600;
		object-fit: cover;
	}
	figcaption {
		margin-top: 12px;
		font-family: var(--font-mono);
		font-size: 12.5px;
		color: #3a4254;
		text-align: center;
	}
	.tape {
		position: absolute;
		top: -12px;
		left: 50%;
		width: 84px;
		height: 24px;
		margin-left: -42px;
		background: rgb(255 214 120 / 0.8);
		border: 1px dashed rgb(0 0 0 / 0.15);
		transform: rotate(-3deg);
	}

	@media (max-width: 940px) {
		.grid {
			grid-template-columns: minmax(0, 1fr);
		}
		.stage {
			border-left: 0;
			border-top: 1px solid var(--line);
		}
	}
	:global([data-era='y2k']) h1 {
		font: bold 30px 'Times New Roman', serif;
		color: #cc0000;
	}
	:global([data-era='y2k']) .stage {
		background: #ffffcc;
	}
</style>
