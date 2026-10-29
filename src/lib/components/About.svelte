<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { SvelteSet } from 'svelte/reactivity';
	import { achievements, yearsBC, yearsCoding, COFFEE } from '#lib/data/site.ts';
	import { L } from '#lib/i18n/index.svelte.ts';
	import { LANGS, langPath } from '#lib/i18n/locales.ts';
	import { ui } from '#lib/state/ui.svelte.ts';
	import Icon from './Icon.svelte';
	import Marquee from './Marquee.svelte';
	import type { IconName } from '#lib/icons.ts';

	// ---- principle carousel
	let idx = $state(0);
	let hover = $state(false);
	const principles = $derived(L.content.principles.map((p) => ({ ...p, quote: p.quote.replace('{bc}', String(yearsBC)) })));
	const go = (n: number) => (idx = (n + principles.length) % principles.length);

	// ---- count-up stats (years are computed from April 26th, 2010)
	let years = $state(yearsCoding());
	const stats = $derived([
		{ value: years, suffix: '+', label: L.ui.about.statYears(yearsBC) },
		{ value: 9, suffix: '', label: L.ui.about.statAge }
	]);
	let counts = $state([0, 0]);
	let statsEl: HTMLElement;

	// ---- achievements
	const claimed = new SvelteSet<number>();
	const xp = $derived(claimed.size * 10);
	let shown = $state(false);
	let gridEl: HTMLElement;

	function claim(i: number, e: MouseEvent) {
		if (claimed.has(i)) return;
		claimed.add(i);
		ui.toast(L.ui.about.toastXp(L.content.achievements[i].title), 'star');
		if (claimed.size === achievements.length) {
			ui.confetti(e.clientX, e.clientY);
			ui.dance();
			ui.toast(L.ui.about.toastAll);
			setTimeout(() => ui.flashHire(), 1200);
		} else if (claimed.size === 4) ui.say(L.ui.about.sayHalf);
	}

	onMount(() => {
		years = yearsCoding();
		const timer = setInterval(() => {
			if (!hover && !matchMedia('(prefers-reduced-motion: reduce)').matches) go(idx + 1);
		}, 7000);

		const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
		const io = new IntersectionObserver(
			(entries) => {
				for (const en of entries) {
					if (!en.isIntersecting) continue;
					if (en.target === statsEl) {
						io.unobserve(statsEl);
						if (reduce) counts = stats.map((s) => s.value);
						else {
							const t0 = performance.now();
							const step = (t: number) => {
								const p = Math.min(1, (t - t0) / 1400);
								const e = 1 - Math.pow(1 - p, 3);
								counts = stats.map((s) => Math.round(s.value * e));
								if (p < 1) requestAnimationFrame(step);
							};
							requestAnimationFrame(step);
						}
					}
					if (en.target === gridEl) {
						shown = true;
						io.unobserve(gridEl);
					}
				}
			},
			{ threshold: 0.25 }
		);
		io.observe(statsEl);
		io.observe(gridEl);
		return () => {
			clearInterval(timer);
			io.disconnect();
		};
	});
</script>

<section id="about" class="section">
	<div class="story">
		<div class="pad left">
			<p class="eyebrow">{L.ui.about.eyebrow}</p>
			<h2 class="h2">{L.ui.about.h2a}<br />{L.ui.about.h2b}</h2>
			<div class="prose">
				<p>{L.ui.about.p1a}<b>{L.ui.about.p1bold}</b>{L.ui.about.p1b}</p>
				<p>{L.ui.about.p2}</p>
				<p>{L.ui.about.p3}</p>
			</div>
		</div>

		<aside class="facts">
			<h3 class="eyebrow">{L.ui.about.facts}</h3>
			<dl>
				<div><dt>{L.ui.about.alias}</dt><dd>Happy</dd></div>
				<div><dt>{L.ui.about.base}</dt><dd>{L.ui.about.baseV}</dd></div>
				<div><dt>{L.ui.about.since}</dt><dd>{L.ui.about.sinceV}</dd></div>
				<div class="deg"><dt>{L.ui.about.degrees}</dt><dd>{L.ui.about.deg1}<br />{L.ui.about.deg2}</dd></div>
				<div class="spk">
					<dt>{L.ui.about.speaks}</dt>
					<dd>
						<span class="langs">
							{#each LANGS as l}
								<a
									href={langPath(l.code)}
									hreflang={l.code}
									lang={l.code}
									data-sveltekit-reset="false"
									class:on={ui.lang === l.code}
									onclick={() => {
										ui.rememberLang(l.code);
										ui.say(l.hello + '!');
									}}>{l.native}</a
								>
							{/each}
						</span>
					</dd>
				</div>
				<div><dt>{L.ui.about.status}</dt><dd class="open">{L.ui.about.statusV}</dd></div>
				<div><dt>{L.ui.about.fuel}</dt><dd><a href={COFFEE} rel="noopener"><Icon name="coffee" scale={1.5} /> {L.ui.about.fuelV}</a></dd></div>
			</dl>
		</aside>
	</div>

	<div class="quote-row">
		<div
			class="carousel pad"
			role="group"
			aria-roledescription="carousel"
			aria-label={L.ui.about.carouselAria}
			onmouseenter={() => (hover = true)}
			onmouseleave={() => (hover = false)}
		>
			<span class="qmark" aria-hidden="true">&ldquo;</span>
			<div class="slide" aria-live="polite">
				{#key idx}
					<blockquote in:fly={{ y: 14, duration: 320, delay: 120 }} out:fade={{ duration: 120 }}>
						<p>{principles[idx].quote}</p>
						<footer><span class="av" aria-hidden="true"></span><cite>{principles[idx].by}</cite></footer>
					</blockquote>
				{/key}
			</div>
			<div class="ctrl">
				<button onclick={() => go(idx - 1)} aria-label={L.ui.about.prev}><Icon name="chevL" scale={2} /></button>
				<div class="dots">
					{#each principles as _, i}
						<button class:on={i === idx} onclick={() => go(i)} aria-label={L.ui.about.goTo(i + 1)} aria-current={i === idx}></button>
					{/each}
				</div>
				<button onclick={() => go(idx + 1)} aria-label={L.ui.about.next}><Icon name="chevR" scale={2} /></button>
			</div>
		</div>

		<div class="stats" bind:this={statsEl}>
			{#each stats as s, i}
				<div class="stat">
					<strong>{counts[i]}{s.suffix}</strong>
					<span>{s.label}</span>
				</div>
			{/each}
		</div>
	</div>

	<div class="ach" bind:this={gridEl}>
		<header class="pad">
			<div>
				<p class="eyebrow">{L.ui.about.achEyebrow}</p>
				<h2 class="h2">{L.ui.about.achH2}</h2>
			</div>
			<div class="xp" aria-live="polite">
				<span>{L.ui.about.xp} {xp}/{achievements.length * 10}</span>
				<i><b style:width="{(xp / (achievements.length * 10)) * 100}%"></b></i>
				<small>{L.ui.about.clickToClaim}</small>
			</div>
		</header>
		<ul>
			{#each achievements as a, i}
				<li class:shown style:--d="{i * 70}ms">
					<button class:done={claimed.has(i)} onclick={(e) => claim(i, e)} aria-pressed={claimed.has(i)}>
						<span class="top">
							<Icon name={a.icon as IconName} scale={3} />
							<span class="tag">{a.tag}</span>
						</span>
						<span class="lab">{claimed.has(i) ? L.ui.about.claimed : L.ui.about.unlocked}</span>
						<strong>{L.content.achievements[i].title}</strong>
						<span class="txt">{L.content.achievements[i].text}</span>
					</button>
				</li>
			{/each}
		</ul>
	</div>

	<Marquee />
</section>

<style>
	.story {
		display: grid;
		grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
	}
	.left {
		padding-block: clamp(40px, 6vw, 80px);
		display: grid;
		gap: 22px;
		align-content: start;
	}
	.prose {
		display: grid;
		gap: 16px;
		color: var(--ink-2);
		max-width: 62ch;
	}
	.prose b {
		color: var(--ink);
	}
	.facts .eyebrow::after {
		display: none;
	}
	.facts {
		border-left: 1px solid var(--line);
		padding: clamp(32px, 5vw, 64px) var(--pad);
		background: var(--bg-soft);
	}
	dl {
		margin: 20px 0 0;
		font-family: var(--font-mono);
		font-size: 14px;
	}
	dl div {
		display: flex;
		justify-content: space-between;
		gap: 16px;
		padding: 12px 0;
		border-bottom: 1px dashed var(--line-strong);
	}
	dt {
		color: var(--ink-3);
	}
	dd {
		margin: 0;
		text-align: right;
		font-weight: 600;
	}
	dd a {
		display: inline-flex;
		gap: 6px;
		align-items: center;
	}
	.open {
		color: var(--green);
	}
	.spk dd {
		text-align: right;
	}
	.langs {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		gap: 6px;
	}
	.langs a {
		display: inline-block;
		padding: 2px 10px;
		border: 1px solid var(--line-strong);
		border-radius: 999px;
		background: var(--bg);
		font-weight: 600;
		font-size: 13px;
		text-decoration: none;
	}
	.langs a:hover {
		background: var(--bg-tile-2);
	}
	.langs a.on {
		background: var(--green);
		border-color: var(--green);
		color: var(--on-green);
	}

	.quote-row {
		display: grid;
		grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
		border-top: 1px solid var(--line);
	}
	.carousel {
		position: relative;
		padding-block: clamp(40px, 6vw, 72px);
		display: grid;
		gap: 28px;
		align-content: start;
	}
	.qmark {
		width: 56px;
		height: 56px;
		border-radius: 14px;
		background: var(--green-wash);
		color: var(--green);
		font-family: var(--font-pixel);
		font-size: 64px;
		line-height: 1;
		display: grid;
		place-items: center;
		padding-top: 18px;
		font-weight: 700;
	}
	.slide {
		min-height: 250px;
		position: relative;
	}
	blockquote {
		margin: 0;
		position: absolute;
		inset: 0 0 auto 0;
	}
	blockquote p {
		font-size: clamp(22px, 2.6vw, 32px);
		line-height: 1.22;
		font-weight: 600;
		letter-spacing: -0.015em;
		text-wrap: balance;
	}
	footer {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-top: 22px;
	}
	.av {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		border: 2px solid var(--green);
		background:
			radial-gradient(circle at 35% 40%, #fff 0 4px, transparent 5px),
			radial-gradient(circle at 65% 40%, #fff 0 4px, transparent 5px), var(--green-bright);
	}
	cite {
		font-style: normal;
		color: var(--ink-2);
		font-size: 15px;
	}
	.ctrl {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		padding: 5px;
		background: var(--bg-tile);
		border-radius: 999px;
		width: fit-content;
	}
	.ctrl > button {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		border: 1px solid var(--line-strong);
		background: var(--bg);
		cursor: pointer;
		display: grid;
		place-items: center;
	}
	.dots {
		display: flex;
		gap: 6px;
	}
	.dots button {
		width: 7px;
		height: 7px;
		border-radius: 4px;
		border: 0;
		padding: 0;
		background: var(--ink-3);
		cursor: pointer;
		transition: width 0.2s;
	}
	.dots button.on {
		width: 22px;
		background: var(--ink);
	}
	.stats {
		border-left: 1px solid var(--line);
		display: grid;
		grid-template-rows: 1fr 1fr;
	}
	.stat {
		padding: 32px var(--pad);
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 8px;
	}
	.stat + .stat {
		border-top: 1px solid var(--line);
	}
	.stat strong {
		font-family: var(--font-mono);
		font-weight: 500;
		font-size: clamp(44px, 6vw, 72px);
		line-height: 1;
		color: var(--green);
		letter-spacing: -0.04em;
	}
	.stat span {
		font-family: var(--font-mono);
		font-size: 13px;
		color: var(--ink-2);
		max-width: 28ch;
	}

	.ach {
		border-top: 1px solid var(--line);
	}
	.ach header {
		display: flex;
		justify-content: space-between;
		align-items: end;
		gap: 24px;
		flex-wrap: wrap;
		padding-block: clamp(32px, 5vw, 56px) 28px;
	}
	.ach header > div {
		display: grid;
		gap: 14px;
	}
	.xp {
		font-family: var(--font-mono);
		font-size: 12px;
		display: grid;
		gap: 6px;
		min-width: 220px;
	}
	.xp i {
		display: block;
		height: 14px;
		border: 2px solid var(--ink);
		background: var(--bg);
		padding: 1px;
	}
	.xp b {
		display: block;
		height: 100%;
		background: repeating-linear-gradient(90deg, var(--green-bright) 0 6px, var(--green) 6px 8px);
		transition: width 0.5s steps(8);
	}
	.xp small {
		color: var(--ink-3);
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		border-top: 1px solid var(--line);
	}
	li {
		border-right: 1px solid var(--line);
		border-bottom: 1px solid var(--line);
		opacity: 0;
		transform: translateY(12px);
		transition:
			opacity 0.5s var(--d),
			transform 0.5s steps(5) var(--d);
	}
	li:nth-child(4n) {
		border-right: 0;
	}
	li:nth-last-child(-n + 4) {
		border-bottom: 0;
	}
	li.shown {
		opacity: 1;
		transform: none;
	}
	li button {
		all: unset;
		box-sizing: border-box;
		cursor: pointer;
		display: grid;
		gap: 10px;
		align-content: start;
		width: 100%;
		height: 100%;
		padding: 24px 22px 26px;
		transition: background 0.15s;
	}
	li button:hover {
		background: var(--bg-soft);
	}
	li button:focus-visible {
		outline: 2px solid var(--green-bright);
		outline-offset: -3px;
	}
	.top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: var(--green);
	}
	.tag {
		font-family: var(--font-mono);
		font-size: 11px;
		padding: 2px 8px;
		border: 1px solid var(--line-strong);
		color: var(--ink-2);
		border-radius: 999px;
	}
	.lab {
		font-family: var(--font-mono);
		font-size: 10.5px;
		letter-spacing: 0.08em;
		color: var(--ink-3);
		margin-top: 8px;
	}
	li strong {
		font-family: var(--font-pixel);
		font-size: 24px;
		font-weight: 600;
		line-height: 1.1;
	}
	.txt {
		font-size: 14.5px;
		color: var(--ink-2);
		line-height: 1.5;
	}
	.done {
		background: var(--green-wash);
	}
	.done .lab {
		color: var(--green);
		font-weight: 700;
	}

	@media (max-width: 1000px) {
		ul {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
		li:nth-child(4n) {
			border-right: 1px solid var(--line);
		}
		li:nth-child(2n) {
			border-right: 0;
		}
		li:nth-last-child(-n + 4) {
			border-bottom: 1px solid var(--line);
		}
		li:nth-last-child(-n + 2) {
			border-bottom: 0;
		}
	}
	@media (max-width: 860px) {
		.story,
		.quote-row {
			grid-template-columns: minmax(0, 1fr);
		}
		.facts,
		.stats {
			border-left: 0;
			border-top: 1px solid var(--line);
		}
		.stats {
			grid-template-rows: none;
			grid-template-columns: 1fr 1fr;
		}
		.stat + .stat {
			border-top: 0;
			border-left: 1px solid var(--line);
		}
	}
	@media (max-width: 560px) {
		ul {
			grid-template-columns: minmax(0, 1fr);
		}
		li {
			border-right: 0 !important;
			border-bottom: 1px solid var(--line) !important;
		}
		li:last-child {
			border-bottom: 0 !important;
		}
		.stats {
			grid-template-columns: minmax(0, 1fr);
		}
		.stat + .stat {
			border-left: 0;
			border-top: 1px solid var(--line);
		}
	}
	:global([data-era='y2k']) .facts {
		background: #ffffcc;
	}
	:global([data-era='y2k']) .stat strong {
		color: #cc0000;
		font-family: 'Courier New', monospace;
	}
	:global([data-era='y2k']) .qmark {
		background: #ffcc33;
		color: #000066;
		border-radius: 0;
	}
	:global([data-era='y2k']) .av {
		border-radius: 0;
	}
	:global([data-era='y2k']) blockquote p {
		font: italic 20px 'Times New Roman', serif;
	}
	:global([data-era='y2k']) li strong {
		font: bold 16px Arial, sans-serif;
		color: #000066;
	}
</style>
