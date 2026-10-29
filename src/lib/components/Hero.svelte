<script lang="ts">
	import { onMount } from 'svelte';
	import { EMAIL, GITHUB, yearsCoding } from '#lib/data/site.ts';
	import { ui } from '#lib/state/ui.svelte.ts';
	import { L } from '#lib/i18n/index.svelte.ts';
	import { LANGS } from '#lib/i18n/locales.ts';
	import Mosaic from './Mosaic.svelte';
	import Icon from './Icon.svelte';

	let typed = $state(L.content.roles[0]);
	let years = $state(yearsCoding());
	let copied = $state(false);
	let flash = $state(false);

	async function copy() {
		try {
			await navigator.clipboard.writeText(EMAIL);
			copied = true;
			ui.toast(L.ui.hero.toastCopied);
			setTimeout(() => (copied = false), 1800);
		} catch {
			location.href = `mailto:${EMAIL}`;
		}
	}

	onMount(() => {
		years = yearsCoding(); // the prerendered HTML has the build-time value
		if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		let alive = true;
		let i = 0;
		const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
		(async () => {
			await sleep(1800);
			while (alive) {
				const roles = L.content.roles;
				const word = roles[i % roles.length];
				for (let c = word.length; c >= 0 && alive; c--) {
					typed = word.slice(0, c);
					await sleep(28);
				}
				i++;
				const next = L.content.roles[i % L.content.roles.length];
				for (let c = 1; c <= next.length && alive; c++) {
					typed = next.slice(0, c);
					await sleep(55);
				}
				await sleep(2100);
			}
		})();
		return () => (alive = false);
	});

	$effect(() => {
		if (ui.hireFlash) {
			flash = true;
			const t = setTimeout(() => (flash = false), 2200);
			return () => clearTimeout(t);
		}
	});
</script>

<section id="top" class="section hero">
	<div class="grid">
		<div class="copy pad">
			<p class="eyebrow">{L.ui.hero.eyebrow}</p>

			<h1 class="now-only">
				{L.ui.hero.h1a}<br />{L.ui.hero.h1b}<em>{L.ui.hero.h1em}</em>{L.ui.hero.h1c}
			</h1>
			<h1 class="y2k-only retro">{L.ui.hero.retro}</h1>

			<p class="lede">{L.ui.hero.ledeA}<b>{L.ui.hero.ledeBold}</b>{L.ui.hero.ledeB}</p>

			<p class="now">
				<span class="label">{L.ui.hero.rightNow}</span>
				<span class="typed">{typed}</span><span class="caret" aria-hidden="true"></span>
			</p>

			<div class="cta">
				<a class="btn btn-primary btn-lg" class:flash href="#hire" onclick={(e) => (e.preventDefault(), ui.go('hire'))}>
					{L.ui.hero.cta} <Icon name="arrow" scale={2} />
				</a>
				<button class="btn btn-lg" onclick={copy} aria-label={L.ui.hero.copyAria}>
					<Icon name={copied ? 'check' : 'copy'} scale={2} />{copied ? L.ui.hero.copied : EMAIL}
				</button>
			</div>

			<ul class="meta">
				<li><a href={GITHUB} rel="noopener">github/quiquelhappy</a></li>
				<li>{L.ui.hero.years(years)}</li>
				<li class="hide-sm">{L.ui.hero.speaks}: {LANGS.map((l) => l.code.toUpperCase()).join(' \u00b7 ')}</li>
				<li class="hide-sm">{L.ui.hero.pressA} <kbd>Ctrl</kbd> <kbd>K</kbd> {L.ui.hero.pressB}</li>
			</ul>
		</div>

		<aside class="cards" aria-label={L.ui.hero.profileAria}>
			<article class="issue">
				<header>
					<h2>Quique <span>#1</span></h2>
					<p><span class="badge"><Icon name="bolt" scale={1.5} />{L.ui.hero.open}</span> <small>{L.ui.hero.onBranch} <code>main</code> &middot; {L.ui.hero.availableNow}</small></p>
				</header>
				<div class="file">src/quique.ts:1</div>
				<pre aria-label={L.ui.hero.codeAria}><span class="ln">1</span><span class="k">const</span> quique = {'{'}
<span class="ln">2</span>  alias: <span class="s">'happy'</span>,
<span class="ln">3</span>  base: <span class="s">'near Barcelona'</span>,
<span class="ln">4</span>  codingSince: <span class="s">'age 9'</span>,
<span class="ln">5</span>  stack: [<span class="s">'TypeScript'</span>, <span class="s">'Go'</span>, <span class="s">'Svelte'</span>, <span class="s">'Docker'</span>],
<span class="ln">6</span>  <span class="hit">openTo: <span class="s">'new job offers'</span></span>,
<span class="ln">7</span>  email: <span class="s">'{EMAIL}'</span>
<span class="ln">8</span>{'}'}</pre>
				<div class="alert">
					<p class="sev"><Icon name="star" scale={1.5} /> {L.ui.hero.recommended}</p>
					<p><b>{L.ui.hero.alertTitle}</b></p>
					<p class="dim">{L.ui.hero.alertText}</p>
					<p class="ql">{L.ui.hero.hireQL}</p>
				</div>
			</article>

			<article class="branches">
				<div class="tabs"><span class="on">{L.ui.hero.workingOn}</span><span>{L.ui.hero.sideQuests}</span></div>
				<ul>
					<li><code>aerospace</code> <span class="pill">{L.ui.hero.currentBranch}</span><small>{L.ui.hero.b1}</small></li>
					<li><code>robotics</code><small>{L.ui.hero.b2}</small></li>
					<li><code>products</code><small>{L.ui.hero.b3}</small></li>
				</ul>
			</article>
		</aside>
	</div>

	<div class="y2k-only construction" aria-hidden="true">
		<span>{L.ui.hero.construction}</span> &#9632; <span>{L.ui.hero.construction}</span> &#9632; <span>{L.ui.hero.construction}</span>
	</div>
	<Mosaic height={352} hint={L.ui.hero.mosaic} />
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
	h1 em {
		font-style: normal;
		background: linear-gradient(transparent 62%, var(--green-neon) 62% 92%, transparent 92%);
		padding-inline: 2px;
	}
	/* dark mode: a full highlighter block with dark text, never dark text on a dark page */
	:global([data-theme='dark']) h1 em {
		background: var(--green-neon);
		color: #04120a;
		padding: 0 10px;
		margin-inline: -2px;
	}
	.retro {
		color: #cc0000;
		font: bold 30px 'Times New Roman', serif;
		letter-spacing: 0;
	}
	.now {
		font-family: var(--font-mono);
		font-size: 15px;
		display: flex;
		flex-wrap: wrap;
		gap: 0 10px;
		align-items: baseline;
	}
	.label {
		color: var(--ink-3);
	}
	.typed {
		color: var(--green);
		font-weight: 700;
	}
	.caret {
		width: 9px;
		height: 18px;
		background: var(--green-bright);
		align-self: center;
		animation: blink 1s steps(1) infinite;
	}
	.cta {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 4px;
	}
	.flash {
		animation: flash 0.5s steps(2) 4;
	}
	@keyframes flash {
		50% {
			background: var(--pink);
			transform: scale(1.06);
		}
	}
	.meta {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 6px 22px;
		font-family: var(--font-mono);
		font-size: 12.5px;
		color: var(--ink-2);
	}
	.meta li::before {
		content: '\25A0';
		color: var(--green-bright);
		margin-right: 8px;
		font-size: 9px;
	}
	.meta a {
		text-underline-offset: 3px;
	}

	.cards {
		border-left: 1px solid var(--line);
		padding: clamp(24px, 4vw, 48px) var(--pad);
		display: flex;
		flex-direction: column;
		gap: 20px;
		background:
			linear-gradient(var(--line) 1px, transparent 1px) 0 0 / 14px 14px,
			linear-gradient(90deg, var(--line) 1px, transparent 1px) 0 0 / 14px 14px,
			var(--bg-soft);
		background-blend-mode: normal;
	}
	article {
		background: var(--bg);
		border: 1px solid var(--line);
		border-radius: var(--radius);
		box-shadow: var(--shadow);
		overflow: hidden;
	}
	.issue {
		border-left: 5px solid var(--pink);
	}
	.issue header {
		padding: 16px 18px 14px;
	}
	.issue h2 {
		font-size: 20px;
		font-weight: 600;
	}
	.issue h2 span {
		color: var(--ink-3);
		font-weight: 400;
	}
	.issue header p {
		margin-top: 8px;
		display: flex;
		align-items: center;
		gap: 10px;
		flex-wrap: wrap;
	}
	.badge {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		background: var(--green);
		color: var(--on-green);
		font-size: 13px;
		font-weight: 600;
		padding: 2px 10px 2px 8px;
		border-radius: 999px;
	}
	small {
		font-size: 12.5px;
		color: var(--ink-3);
	}
	code {
		font-family: var(--font-mono);
		font-size: 0.9em;
		background: #d4ecff;
		color: #0a3c63;
		padding: 0 6px;
		border-radius: 4px;
	}
	:global([data-theme='dark']) code {
		background: #12324a;
		color: #bfe4ff;
	}
	.file {
		font-family: var(--font-mono);
		font-size: 12px;
		padding: 8px 18px;
		background: var(--bg-soft);
		border-block: 1px solid var(--line);
		color: var(--ink-2);
	}
	pre {
		margin: 0;
		padding: 12px 18px;
		font-family: var(--font-mono);
		font-size: 13px;
		line-height: 1.75;
		overflow-x: auto;
		background: var(--code-bg);
		color: var(--ink);
	}
	.ln {
		display: inline-block;
		width: 22px;
		color: var(--ink-3);
		user-select: none;
	}
	.k {
		color: #c2185b;
	}
	.s {
		color: #1a7f37;
	}
	:global([data-theme='dark']) .k {
		color: #ff7ac6;
	}
	:global([data-theme='dark']) .s {
		color: #7ee787;
	}
	.hit {
		background: var(--hit);
		padding: 1px 4px;
		margin-left: -4px;
	}
	.alert {
		border-top: 1px solid var(--line);
		border-left: 4px solid var(--red);
		padding: 12px 18px 14px;
		display: grid;
		gap: 4px;
		font-size: 14px;
	}
	.sev {
		color: var(--red);
		font-size: 13px;
		display: flex;
		gap: 6px;
		align-items: center;
	}
	.dim {
		color: var(--ink-2);
		font-size: 13px;
	}
	.ql {
		font-weight: 600;
		font-size: 13px;
		margin-top: 4px;
	}

	.tabs {
		display: flex;
		font-size: 14px;
		background: var(--bg-soft);
		border-bottom: 1px solid var(--line);
	}
	.tabs span {
		flex: 1;
		text-align: center;
		padding: 10px;
		color: var(--ink-3);
	}
	.tabs .on {
		background: var(--bg);
		color: var(--ink);
		border-right: 1px solid var(--line);
		font-weight: 600;
	}
	.branches ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.branches li {
		padding: 11px 18px;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 4px 10px;
		border-top: 1px solid var(--line);
		font-size: 14px;
	}
	.branches li:first-child {
		border-top: 0;
	}
	.branches li small {
		flex-basis: 100%;
	}
	.pill {
		border: 1px solid var(--line-strong);
		border-radius: 999px;
		padding: 0 8px;
		font-size: 12px;
	}

	.construction {
		overflow: hidden;
		white-space: nowrap;
		background: repeating-linear-gradient(-45deg, #ffcc00 0 14px, #111 14px 28px);
		color: #fff;
		font: bold 13px Arial, sans-serif;
		text-align: center;
		padding: 6px 0;
		border-block: 2px solid #000;
	}
	.construction span {
		background: #111;
		padding: 1px 10px;
	}

	@media (max-width: 940px) {
		.grid {
			grid-template-columns: minmax(0, 1fr);
		}
		.cards {
			border-left: 0;
			border-top: 1px solid var(--line);
		}
	}
	@media (max-width: 560px) {
		.hide-sm {
			display: none;
		}
	}
	:global([data-era='y2k']) .copy {
		align-items: flex-start;
	}
	:global([data-era='y2k']) .cards {
		background: #ffffcc;
	}
	:global([data-era='y2k']) article {
		border: 2px solid #000066;
	}
	:global([data-era='y2k']) .issue {
		border-left-width: 2px;
	}
</style>
