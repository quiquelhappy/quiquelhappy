<script lang="ts">
	import { onMount } from 'svelte';
	import { ui } from '#lib/state/ui.svelte.ts';
	import { L } from '#lib/i18n/index.svelte.ts';

	// ---- Voyager 1: anchored on the nominal "one light-day from the Sun" date (15 Nov 2026), moving at ~16.95 km/s
	const LIGHT_DAY_KM = 299792.458 * 86400;
	const ANCHOR = Date.UTC(2026, 10, 15);
	const SPEED = 16.95;
	const C = 299792.458;
	let now = $state(Date.now());
	const km = $derived(LIGHT_DAY_KM + ((now - ANCHOR) / 1000) * SPEED);
	const lightHours = $derived(km / C / 3600);
	const lightH = $derived(Math.floor(lightHours));
	const lightM = $derived(Math.floor((lightHours - lightH) * 60));

	// ---- the Moon tonight, from the mean synodic month
	const SYNODIC = 29.530588853;
	const NEW_MOON = Date.UTC(2000, 0, 6, 18, 14);
	const phase = $derived((((now - NEW_MOON) / 86400000 / SYNODIC) % 1 + 1) % 1);
	const illum = $derived(Math.round(((1 - Math.cos(2 * Math.PI * phase)) / 2) * 100));
	const phaseName = $derived(L.ui.space.phases[Math.round(phase * 8) % 8]);
	const moon = $derived.by(() => {
		const k = Math.cos(2 * Math.PI * phase);
		const waxing = phase < 0.5;
		const px: { x: number; y: number; lit: boolean }[] = [];
		const R = 6;
		for (let y = -R; y < R; y++)
			for (let x = -R; x < R; x++) {
				const nx = (x + 0.5) / R, ny = (y + 0.5) / R;
				if (nx * nx + ny * ny > 1) continue;
				const w = Math.sqrt(1 - ny * ny);
				px.push({ x: x + R, y: y + R, lit: waxing ? nx > k * w : nx < -k * w });
			}
		return px;
	});

	// ---- a deterministic sky
	function sky(n: number) {
		let s = 7;
		const rnd = () => ((s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296);
		return Array.from({ length: n }, () => ({ x: rnd() * 100, y: rnd() * 100, s: rnd() < 0.15 ? 3 : 2, d: rnd() * 4, b: 0.35 + rnd() * 0.65 }));
	}
	const stars = sky(110);
	let found = $state(false);

	onMount(() => {
		const t = setInterval(() => (now = Date.now()), 1000);
		return () => clearInterval(t);
	});
</script>

<section id="space" class="section">
	<header class="pad">
		<p class="eyebrow">{L.ui.space.eyebrow}</p>
		<h2 class="h2">{L.ui.space.h2a}<br />{L.ui.space.h2b}</h2>
		<p class="lede">{L.ui.space.lede}</p>
	</header>

	<div class="dot pad">
		<div class="scene" role="group" aria-label={L.ui.space.sceneAria}>
			{#each stars as st}
				<i class="star" style:left="{st.x}%" style:top="{st.y}%" style:width="{st.s}px" style:height="{st.s}px" style:animation-delay="{st.d}s" style:--b={st.b}></i>
			{/each}
			<div class="beam" aria-hidden="true"></div>
			<button class="earth" class:found onclick={() => (found = !found)} aria-pressed={found} aria-label={L.ui.space.dotAria}>
				<i aria-hidden="true"></i>
				{#if found}<span class="you">{L.ui.space.here}</span>{/if}
			</button>
			<span class="hint">{found ? L.ui.space.found : L.ui.space.hint}</span>
		</div>

		<figure>
			<p class="eyebrow">{L.ui.space.paleEyebrow}</p>
			<blockquote>{L.ui.space.quote}</blockquote>
			<p class="cap">{L.ui.space.caption}</p>
			<figcaption>&mdash; {L.ui.space.by}</figcaption>
		</figure>
	</div>

	<div class="stats">
		<article>
			<p class="lab">{L.ui.space.voyager}</p>
			<p class="big">{Math.floor(km).toLocaleString(ui.lang)}<small> km</small></p>
			<p class="sub">{L.ui.space.voyagerSub}</p>
		</article>
		<article>
			<p class="lab">{L.ui.space.light}</p>
			<p class="big">{lightH}<small> h </small>{lightM}<small> min</small></p>
			<p class="sub">{L.ui.space.lightSub}</p>
		</article>
		<article class="moonc">
			<svg viewBox="0 0 12 12" width="60" height="60" shape-rendering="crispEdges" aria-hidden="true">
				<circle cx="6" cy="6" r="6" fill="var(--moon-dark)" />
				{#each moon as p}<rect x={p.x} y={p.y} width="1" height="1" fill={p.lit ? 'var(--moon-lit)' : 'var(--moon-dark)'} />{/each}
			</svg>
			<div>
				<p class="lab">{L.ui.space.moon}</p>
				<p class="big">{phaseName}</p>
				<p class="sub">{illum}% {L.ui.space.lit}</p>
			</div>
		</article>
	</div>

	<ul class="tags pad" aria-label={L.ui.space.tagsAria}>
		{#each L.ui.space.tags as t}<li>{t}</li>{/each}
	</ul>
</section>

<style>
	section {
		--moon-lit: #e9e6d6;
		--moon-dark: #2a2f45;
	}
	figure .eyebrow::after {
		display: none;
	}
	header {
		padding-block: clamp(40px, 6vw, 80px) clamp(28px, 4vw, 48px);
		display: grid;
		gap: 22px;
	}
	.dot {
		display: grid;
		grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
		gap: 28px;
		align-items: stretch;
		padding-bottom: 28px;
	}
	.scene {
		position: relative;
		min-height: 340px;
		overflow: hidden;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: #05060f;
	}
	.star {
		position: absolute;
		background: #fff;
		opacity: var(--b);
		animation: twinkle 3.6s steps(3) infinite;
	}
	@keyframes twinkle {
		50% {
			opacity: calc(var(--b) * 0.2);
		}
	}
	/* a ray of scattered sunlight, in hard pixel steps like everything else here */
	.beam {
		position: absolute;
		inset: -20% -10%;
		transform: rotate(-24deg);
		background: repeating-linear-gradient(0deg, rgb(255 236 200 / 0.16) 0 10px, rgb(255 236 200 / 0.07) 10px 20px);
		clip-path: polygon(0 38%, 100% 30%, 100% 56%, 0 64%);
		pointer-events: none;
	}
	.earth {
		all: unset;
		position: absolute;
		left: 62%;
		top: 47%;
		width: 36px;
		height: 36px;
		margin: -18px 0 0 -18px;
		display: grid;
		place-items: center;
		cursor: pointer;
	}
	.earth i {
		width: 4px;
		height: 4px;
		background: #9fc5ff;
		box-shadow: 0 0 0 1px rgb(159 197 255 / 0.25);
	}
	.earth:hover i,
	.earth:focus-visible i,
	.earth.found i {
		outline: 1px dashed #9fc5ff;
		outline-offset: 7px;
	}
	.you {
		position: absolute;
		left: 50%;
		top: calc(100% + 2px);
		transform: translateX(-50%);
		white-space: nowrap;
		font: 12px var(--font-mono);
		text-transform: uppercase;
		letter-spacing: 0.08em;
		padding: 3px 8px;
		background: #9fc5ff;
		color: #05060f;
	}
	.hint {
		position: absolute;
		left: 14px;
		bottom: 12px;
		font: 12px var(--font-mono);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: rgb(255 255 255 / 0.55);
		pointer-events: none;
	}
	figure {
		margin: 0;
		display: grid;
		gap: 14px;
		align-content: center;
	}
	blockquote {
		margin: 0;
		font-family: var(--font-pixel);
		font-size: clamp(22px, 2.4vw, 30px);
		line-height: 1.25;
		letter-spacing: -0.01em;
	}
	figcaption {
		font: 12.5px var(--font-mono);
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--ink-3);
	}
	.cap {
		margin: 0;
		color: var(--ink-2);
		line-height: 1.55;
	}
	.stats {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		border-top: 1px solid var(--line);
		border-bottom: 1px solid var(--line);
	}
	.stats article {
		padding: 24px clamp(16px, 2.4vw, 32px);
		display: grid;
		gap: 6px;
		align-content: start;
		min-width: 0;
	}
	.stats article + article {
		border-left: 1px solid var(--line);
	}
	.lab {
		margin: 0;
		font: 11.5px var(--font-mono);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--ink-3);
	}
	.big {
		margin: 0;
		font: 600 clamp(18px, 2vw, 26px) var(--font-mono);
		font-variant-numeric: tabular-nums;
		overflow-wrap: anywhere;
	}
	.big small {
		font-size: 0.6em;
		color: var(--ink-3);
	}
	.sub {
		margin: 0;
		font-size: 13.5px;
		color: var(--ink-2);
		line-height: 1.45;
	}
	.moonc {
		grid-template-columns: auto minmax(0, 1fr);
		align-items: center;
		gap: 16px;
	}
	.moonc div {
		display: grid;
		gap: 6px;
	}
	.tags {
		list-style: none;
		margin: 0;
		padding-block: 28px 56px;
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
	.tags li {
		font: 13px var(--font-mono);
		padding: 6px 12px;
		border: 1px solid var(--line);
		border-radius: 999px;
		background: var(--bg-soft);
	}
	@media (max-width: 900px) {
		.dot {
			grid-template-columns: minmax(0, 1fr);
		}
		.scene {
			min-height: 280px;
		}
		.stats {
			grid-template-columns: minmax(0, 1fr);
		}
		.stats article + article {
			border-left: 0;
			border-top: 1px solid var(--line);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.star {
			animation: none;
		}
	}
</style>
