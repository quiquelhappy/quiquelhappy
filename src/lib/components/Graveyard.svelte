<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { graves } from '#lib/data/graveyard.ts';
	import { ui } from '#lib/state/ui.svelte.ts';
	import { L } from '#lib/i18n/index.svelte.ts';
	import { toRects } from '#lib/pixel.ts';
	import PixelSprite from './PixelSprite.svelte';
	import Cobweb from './Cobweb.svelte';
	import Icon from './Icon.svelte';

	let openId = $state<string | null>(null);
	let respects = $state(0);
	let particles = $state<{ id: number; x: number }[]>([]);
	let inView = false;
	let section: HTMLElement;
	let modalEl = $state<HTMLElement>();
	let opener: HTMLElement | null = null;
	let n = 0;

	const idx = $derived(graves.findIndex((g) => g.id === openId));
	const cur = $derived(idx >= 0 ? graves[idx] : null);
	const t = $derived(cur ? L.content.graveyard[cur.id] : null);

	// a small pixel tombstone with R.I.P. engraved on it
	const STONE = toRects(
		[
		'....ooooooo....',
		'..ooLGGGGGSoo..',
		'.oLGGGGGGGGGSo.',
		'oLGGGGGGGGGGGSo',
		'oLGGGGGGGGGGGSo',
		'oLXXGGXXXGXXGSo',
		'oLXGXGGXGGXGXSo',
		'oLXXGGGXGGXXGSo',
		'oLXGXGGXGGXGGSo',
		'oLXGXGXXXGXGGSo',
		'oLGGGGGGGGGGGSo',
		'oLGGGGGGGGGGGSo',
		'oLMMGGGGGGGGGSo',
		'oLMMMGGGGGGGMSo',
		'oMMMMGGGGGGMMMo',
		'ooooooooooooooo'
		],
		{ o: '#262c40', G: '#a3acc0', L: '#c3cbdc', S: '#848ea5', X: '#3a4254', M: '#4aa347' }
	);
	const TILT = [-3, 2, -1, 3, -2];

	const SPIDER = toRects(['k.....k', '.k.k.k.', '..kkk..', '.kkkkk.', 'k.k.k.k'], { k: 'currentColor' });

	function show(id: string, e: MouseEvent) {
		opener = e.currentTarget as HTMLElement;
		openId = id;
	}
	function close() {
		openId = null;
	}
	function step(d: number) {
		openId = graves[(idx + d + graves.length) % graves.length].id;
	}

	// while the dialog is open: no page scroll behind it, focus goes in, and back to the tombstone afterwards
	$effect(() => {
		if (!openId) return;
		const prev = document.documentElement.style.overflow;
		document.documentElement.style.overflow = 'hidden';
		tick().then(() => modalEl?.querySelector<HTMLElement>('.x')?.focus());
		return () => {
			document.documentElement.style.overflow = prev;
			opener?.focus();
		};
	});

	function pay() {
		respects++;
		const id = ++n;
		particles = [...particles, { id, x: 20 + Math.random() * 60 }];
		setTimeout(() => (particles = particles.filter((p) => p.id !== id)), 1100);
		if (respects === 1) ui.toast(L.ui.graveyard.toastF);
		else if (respects === 10) {
			ui.toast(L.ui.graveyard.toast10);
			ui.say(L.content.quips.graveyard[0]);
		} else if (respects === 25) {
			ui.toast(L.ui.graveyard.toast25);
			ui.dance();
		}
	}

	function onKey(e: KeyboardEvent) {
		if (e.metaKey || e.ctrlKey || e.altKey) return;
		if (openId) {
			if (e.key === 'Escape') return void close();
			if (e.key === 'ArrowLeft') return void (e.preventDefault(), step(-1));
			if (e.key === 'ArrowRight') return void (e.preventDefault(), step(1));
			if (e.key === 'Tab' && modalEl) {
				const f = [...modalEl.querySelectorAll<HTMLElement>('button')];
				const i = f.indexOf(document.activeElement as HTMLElement);
				e.preventDefault();
				f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length]?.focus();
			}
			return;
		}
		if (!inView || e.key.toLowerCase() !== 'f') return;
		const tg = e.target as HTMLElement | null;
		if (tg && (tg.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(tg.tagName))) return;
		pay();
	}

	onMount(() => {
		const io = new IntersectionObserver((es) => (inView = es[0].isIntersecting), { threshold: 0.25 });
		io.observe(section);
		return () => io.disconnect();
	});
</script>

<svelte:window onkeydown={onKey} />

<section id="graveyard" class="section" bind:this={section} aria-labelledby="gy-title">
	<div class="sky" aria-hidden="true">
		<div class="web tl">
			<Cobweb size={130} />
			<span class="thread"><span class="spider"><PixelSprite rects={SPIDER} width={7} height={5} scale={3} /></span></span>
		</div>
		<div class="web tr"><Cobweb size={104} flip /></div>
	</div>

	<header class="pad">
		<p class="eyebrow">{L.ui.graveyard.eyebrow}</p>
		<h2 class="h2" id="gy-title">{L.ui.graveyard.h2a}<br />{L.ui.graveyard.h2b}</h2>
		<p class="lede">{L.ui.graveyard.lede}</p>
	</header>

	<ul class="stones pad" aria-label={L.ui.graveyard.aria}>
		{#each graves as g, i}
			{@const gt = L.content.graveyard[g.id]}
			<li>
				<button class="stone" aria-haspopup="dialog" onclick={(e) => show(g.id, e)} style:--tilt="{TILT[i % TILT.length]}deg">
					<span class="ico">
						<PixelSprite rects={STONE} width={15} height={16} scale={5} />
						<span class="cw" aria-hidden="true"><Cobweb size={28} small flip /></span>
						{#if g.grade}<span class="grade">{g.grade}</span>{/if}
					</span>
					<strong>{gt.name}</strong>
					<span class="yr">&dagger; {gt.year || L.ui.graveyard.noYear}</span>
				</button>
			</li>
		{/each}
	</ul>

	<p class="hint pad">{L.ui.graveyard.hint}</p>

	<div class="respects pad">
		<button class="pay" onclick={pay} aria-label={L.ui.graveyard.pay}><span aria-hidden="true">F</span></button>
		<p><b>{respects}</b> {L.ui.graveyard.respects}<span class="hide-sm">&nbsp;&middot; {L.ui.graveyard.pressF}</span></p>
		{#each particles as p (p.id)}<span class="fp" style:left="{p.x}%" aria-hidden="true">F</span>{/each}
	</div>

	{#if cur && t}
		<div class="backdrop" role="presentation" onclick={(e) => e.target === e.currentTarget && close()} transition:fade={{ duration: 150 }}>
			<div class="modal" role="dialog" aria-modal="true" aria-labelledby="gy-mt" tabindex="-1" bind:this={modalEl} transition:fly={{ y: 18, duration: 200 }}>
				<button class="x" aria-label={L.ui.graveyard.rebury} onclick={close}><Icon name="x" scale={2} /></button>

				<div class="plate">
					<span class="mico"><PixelSprite rects={STONE} width={15} height={16} scale={5} /></span>
					{#if cur.grade}<span class="grade big">{cur.grade}</span>{/if}
					<h3 id="gy-mt">{t.name}</h3>
					<span class="yr">&dagger; {t.year || L.ui.graveyard.noYear}</span>
					<em>{t.epitaph}</em>
				</div>

				<div class="info">
					<p class="tag">{t.tag}</p>
					<p><b>{L.ui.graveyard.cause}:</b> {t.cause}</p>
					<p class="sum">{t.summary}</p>
					<p class="stk">{#each cur.stack as s}<span>{s}</span>{/each}</p>
				</div>

				<footer>
					<button class="nv" onclick={() => step(-1)} aria-label={L.ui.about.prev}><Icon name="chevL" scale={2} /></button>
					<span class="pos">{idx + 1} / {graves.length}</span>
					<button class="nv" onclick={() => step(1)} aria-label={L.ui.about.next}><Icon name="chevR" scale={2} /></button>
					<button class="done" onclick={close}>{L.ui.graveyard.rebury}</button>
				</footer>
			</div>
		</div>
	{/if}
</section>

<style>
	/* quiet on purpose: it uses the site's own colours in both themes */
	section {
		position: relative;
		overflow: hidden;
		background: var(--bg-soft);
		color: var(--ink-2);
		border-top: 1px solid var(--line);
	}
	.sky {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}
	.web {
		position: absolute;
		top: 0;
		color: var(--ink-3);
		opacity: 0.55;
	}
	.web.tl {
		left: 0;
	}
	.web.tr {
		right: 0;
	}
	.thread {
		position: absolute;
		left: 44px;
		top: 0;
		width: 2px;
		height: 40px;
		background: var(--ink-3);
		animation: dangle 5s steps(10) infinite alternate;
	}
	.spider {
		position: absolute;
		left: -10px;
		bottom: -14px;
		color: var(--ink-2);
	}
	@keyframes dangle {
		to {
			height: 84px;
		}
	}

	header {
		position: relative;
		padding-block: clamp(40px, 6vw, 72px) 12px;
		display: grid;
		gap: 16px;
	}
	.h2 {
		font-size: clamp(28px, 3.6vw, 40px);
	}
	.lede {
		max-width: 60ch;
	}

	.stones {
		position: relative;
		list-style: none;
		margin: 0;
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		gap: 16px 16px;
		padding-block: 28px 20px;
	}
	.stone {
		all: unset;
		box-sizing: border-box;
		width: 100%;
		cursor: pointer;
		display: grid;
		justify-items: center;
		gap: 4px;
		text-align: center;
		padding: 8px 4px;
		color: var(--ink);
	}
	.ico {
		position: relative;
		line-height: 0;
		margin-bottom: 8px;
		transform: rotate(var(--tilt));
		transition: transform 0.2s steps(3);
		filter: drop-shadow(0 3px 0 rgb(0 0 0 / 0.14));
	}
	.stone:hover .ico,
	.stone:focus-visible .ico {
		transform: rotate(0deg) translateY(-6px);
	}
	.stone:focus-visible {
		outline: 2px dashed var(--ink-3);
		outline-offset: 4px;
	}
	.cw {
		position: absolute;
		top: -2px;
		right: -2px;
		color: var(--ink);
		opacity: 0.5;
	}
	.stone strong {
		font-family: var(--font-pixel);
		font-size: 24px;
		font-weight: 600;
		line-height: 1.1;
		overflow-wrap: anywhere;
	}
	.yr {
		font-family: var(--font-mono);
		font-size: 12px;
		color: var(--ink-3);
	}
	/* a small gold "10/10" sticker */
	.grade {
		position: absolute;
		top: -6px;
		left: -26px;
		z-index: 1;
		font: 700 11px var(--font-mono);
		line-height: 1.3;
		color: #3d2a00;
		background: #f2c94c;
		border: 2px solid #3d2a00;
		padding: 1px 5px;
		transform: rotate(-10deg);
		box-shadow: 2px 2px 0 rgb(0 0 0 / 0.2);
	}

	.hint {
		position: relative;
		margin: 0;
		font-family: var(--font-mono);
		font-size: 12px;
		color: var(--ink-3);
	}
	.respects {
		position: relative;
		display: flex;
		align-items: center;
		gap: 12px;
		flex-wrap: wrap;
		padding-block: 8px 44px;
		font-family: var(--font-mono);
		font-size: 12.5px;
		color: var(--ink-3);
	}
	.respects p {
		margin: 0;
	}
	.respects b {
		color: var(--ink);
		font-size: 14px;
	}
	.pay {
		all: unset;
		cursor: pointer;
		display: grid;
		place-items: center;
		width: 28px;
		height: 28px;
		border: 1px solid var(--line-strong);
		border-radius: var(--radius-sm);
		background: var(--bg);
		color: var(--ink);
		font: 700 13px var(--font-mono);
		transition: transform 0.08s steps(2);
	}
	.pay:hover {
		background: var(--bg-tile);
	}
	.pay:active {
		transform: translateY(2px);
	}
	.pay:focus-visible {
		outline: 2px dashed var(--ink-3);
		outline-offset: 2px;
	}
	.fp {
		position: absolute;
		bottom: 30px;
		font: 700 24px var(--font-pixel);
		color: var(--ink);
		pointer-events: none;
		animation: floatup 1.1s steps(11) forwards;
	}
	@keyframes floatup {
		to {
			transform: translateY(-100px);
			opacity: 0;
		}
	}

	/* ------------------------------------------------ the details dialog */
	.backdrop {
		position: fixed;
		inset: 0;
		z-index: 85;
		display: grid;
		place-items: center;
		padding: 20px;
		background: rgb(10 14 28 / 0.55);
		backdrop-filter: blur(3px);
	}
	.modal {
		position: relative;
		width: min(100%, 540px);
		max-height: min(92vh, 760px);
		overflow: auto;
		display: grid;
		background: var(--bg);
		color: var(--ink-2);
		border: 2px solid var(--ink);
		box-shadow: 8px 8px 0 var(--green-bright);
	}
	.plate {
		position: relative;
		display: grid;
		justify-items: center;
		gap: 6px;
		text-align: center;
		padding: 36px 28px 24px;
		background: var(--bg-soft);
		border-bottom: 1px solid var(--line);
		color: var(--ink);
	}
	.mico {
		line-height: 0;
		margin-bottom: 8px;
		filter: drop-shadow(0 3px 0 rgb(0 0 0 / 0.14));
	}
	.plate h3 {
		font-family: var(--font-pixel);
		font-size: clamp(30px, 6vw, 40px);
		font-weight: 600;
		line-height: 1.05;
		overflow-wrap: anywhere;
	}
	.plate em {
		font-size: 16px;
		line-height: 1.45;
		max-width: 40ch;
		color: var(--ink-2);
	}
	.plate .grade.big {
		top: 20px;
		left: 20px;
		font-size: 15px;
		padding: 2px 9px;
	}
	.x {
		all: unset;
		position: absolute;
		top: 10px;
		right: 10px;
		z-index: 3;
		width: 34px;
		height: 34px;
		display: grid;
		place-items: center;
		cursor: pointer;
		background: var(--bg);
		color: var(--ink);
		border: 1px solid var(--line-strong);
	}
	.x:hover {
		background: var(--bg-tile);
	}
	.x:focus-visible,
	.nv:focus-visible,
	.done:focus-visible {
		outline: 2px dashed var(--ink-3);
		outline-offset: 2px;
	}
	.info {
		display: grid;
		gap: 14px;
		padding: 22px 28px 6px;
		font-size: 16.5px;
		line-height: 1.55;
	}
	.info p {
		margin: 0;
	}
	.info b {
		color: var(--ink);
	}
	.info .tag {
		font-family: var(--font-mono);
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--green);
		font-weight: 700;
	}
	.info .sum {
		color: var(--ink);
	}
	.stk {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}
	.stk span {
		font-family: var(--font-mono);
		font-size: 12px;
		padding: 2px 9px;
		border: 1px solid var(--line-strong);
		border-radius: 4px;
		color: var(--ink-2);
	}
	.modal footer {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 18px 28px 24px;
	}
	.nv {
		all: unset;
		width: 36px;
		height: 36px;
		display: grid;
		place-items: center;
		cursor: pointer;
		border: 1px solid var(--line-strong);
		color: var(--ink);
	}
	.nv:hover {
		background: var(--bg-tile);
	}
	.pos {
		font: 600 13px var(--font-mono);
		color: var(--ink-2);
		min-width: 52px;
		text-align: center;
	}
	.done {
		all: unset;
		margin-left: auto;
		cursor: pointer;
		height: 36px;
		padding: 0 18px;
		display: inline-flex;
		align-items: center;
		font: 700 13px var(--font-mono);
		background: var(--ink);
		color: var(--bg);
	}
	.done:active {
		transform: translateY(2px);
	}

	@media (max-width: 1000px) {
		.stones {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
	@media (max-width: 760px) {
		.stones {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 20px 12px;
		}
		.hide-sm {
			display: none;
		}
		.plate {
			padding-inline: 18px;
		}
		.info,
		.modal footer {
			padding-inline: 18px;
		}
	}
</style>
