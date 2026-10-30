<script lang="ts">
	import { tick } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { photos } from '#lib/data/personal.ts';
	import { L } from '#lib/i18n/index.svelte.ts';
	import Icon from './Icon.svelte';

	let openId = $state<string | null>(null);
	let box = $state<HTMLElement>();
	let opener: HTMLElement | null = null;

	const idx = $derived(photos.findIndex((p) => p.id === openId));
	const cur = $derived(idx >= 0 ? photos[idx] : null);

	function show(id: string, e: MouseEvent) {
		opener = e.currentTarget as HTMLElement;
		openId = id;
	}
	const close = () => (openId = null);
	const step = (d: number) => (openId = photos[(idx + d + photos.length) % photos.length].id);

	$effect(() => {
		if (!openId) return;
		const prev = document.documentElement.style.overflow;
		document.documentElement.style.overflow = 'hidden';
		tick().then(() => box?.querySelector<HTMLElement>('.x')?.focus());
		return () => {
			document.documentElement.style.overflow = prev;
			opener?.focus();
		};
	});

	function onKey(e: KeyboardEvent) {
		if (!openId || e.metaKey || e.ctrlKey || e.altKey) return;
		if (e.key === 'Escape') return void close();
		if (e.key === 'ArrowLeft') return void (e.preventDefault(), step(-1));
		if (e.key === 'ArrowRight') return void (e.preventDefault(), step(1));
		if (e.key === 'Tab' && box) {
			const f = [...box.querySelectorAll<HTMLElement>('button')];
			const i = f.indexOf(document.activeElement as HTMLElement);
			e.preventDefault();
			f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length]?.focus();
		}
	}
</script>

<svelte:window onkeydown={onKey} />

<section id="me" class="section">
	<header class="pad">
		<p class="eyebrow">{L.ui.me.eyebrow}</p>
		<h2 class="h2">{L.ui.me.h2a}<br />{L.ui.me.h2b}</h2>
		<p class="lede">{L.ui.me.lede}</p>
	</header>

	<ul class="wall pad">
		{#each photos as p}
			{@const t = L.content.photos[p.id]}
			<li style:--r="{p.tilt}deg" style:--ar="{p.w} / {p.h}">
				<button class="polaroid" onclick={(e) => show(p.id, e)} aria-haspopup="dialog" aria-label="{L.ui.me.open}: {t.caption}">
					<span class="tape" aria-hidden="true"></span>
					<img src={p.src} width={p.w} height={p.h} alt={t.alt} loading="lazy" decoding="async" />
					<span class="cap">{t.caption}</span>
				</button>
			</li>
		{/each}
	</ul>

	{#if cur}
		{@const t = L.content.photos[cur.id]}
		<div class="backdrop" role="presentation" onclick={(e) => e.target === e.currentTarget && close()} transition:fade={{ duration: 150 }}>
			<div class="lightbox" role="dialog" aria-modal="true" aria-label={t.caption} bind:this={box} transition:fly={{ y: 16, duration: 200 }}>
				<button class="x" aria-label={L.ui.me.close} onclick={close}><Icon name="x" scale={2} /></button>
				<img src={cur.src} width={cur.w} height={cur.h} alt={t.alt} />
				<div class="bar">
					<button class="nv" onclick={() => step(-1)} aria-label={L.ui.about.prev}><Icon name="chevL" scale={2} /></button>
					<p>{t.caption} <small>{idx + 1} / {photos.length}</small></p>
					<button class="nv" onclick={() => step(1)} aria-label={L.ui.about.next}><Icon name="chevR" scale={2} /></button>
				</div>
			</div>
		</div>
	{/if}
</section>

<style>
	header {
		padding-block: clamp(40px, 6vw, 80px) 24px;
		display: grid;
		gap: 22px;
	}
	.wall {
		list-style: none;
		margin: 0;
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 28px;
		align-items: start;
		padding-block: 20px 56px;
	}
	.polaroid {
		all: unset;
		box-sizing: border-box;
		position: relative;
		cursor: pointer;
		display: grid;
		gap: 10px;
		width: 100%;
		padding: 12px 12px 14px;
		background: #fff;
		color: #3a4254;
		border: 1px solid var(--line-strong);
		box-shadow: 5px 5px 0 var(--line-strong);
		transform: rotate(var(--r));
		transition: transform 0.2s steps(3), box-shadow 0.2s;
	}
	.polaroid:hover,
	.polaroid:focus-visible {
		transform: rotate(0deg) translateY(-6px);
		box-shadow: 5px 11px 0 var(--pink);
	}
	.polaroid:focus-visible {
		outline: 2px dashed var(--ink);
		outline-offset: 4px;
	}
	img {
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: var(--ar);
		object-fit: cover;
		background: var(--bg-tile);
	}
	.cap {
		font-family: var(--font-mono);
		font-size: 12px;
		line-height: 1.4;
		text-align: center;
	}
	.tape {
		position: absolute;
		top: -11px;
		left: 50%;
		width: 64px;
		height: 20px;
		margin-left: -32px;
		background: rgb(255 214 120 / 0.8);
		border: 1px dashed rgb(0 0 0 / 0.15);
		transform: rotate(2deg);
		z-index: 1;
	}

	.backdrop {
		position: fixed;
		inset: 0;
		z-index: 85;
		display: grid;
		place-items: center;
		padding: 16px;
		background: rgb(10 14 28 / 0.78);
		backdrop-filter: blur(3px);
	}
	.lightbox {
		position: relative;
		max-width: min(100%, 880px);
		max-height: 94vh;
		display: grid;
		grid-template-rows: minmax(0, 1fr) auto;
		background: var(--bg);
		border: 2px solid var(--ink);
		box-shadow: 8px 8px 0 var(--pink);
	}
	.lightbox img {
		max-width: 100%;
		max-height: calc(94vh - 80px);
		width: auto;
		height: auto;
		margin: 0 auto;
		object-fit: contain;
		aspect-ratio: auto;
		background: #111;
	}
	.bar {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 12px 14px;
	}
	.bar p {
		margin: 0;
		flex: 1;
		text-align: center;
		font-size: 15px;
		color: var(--ink);
	}
	.bar small {
		display: block;
		font: 12px var(--font-mono);
		color: var(--ink-3);
	}
	.nv,
	.x {
		all: unset;
		cursor: pointer;
		display: grid;
		place-items: center;
		width: 38px;
		height: 38px;
		border: 1px solid var(--line-strong);
		background: var(--bg);
		color: var(--ink);
	}
	.nv:hover,
	.x:hover {
		background: var(--bg-tile);
	}
	.x {
		position: absolute;
		top: 10px;
		right: 10px;
		z-index: 2;
	}
	.nv:focus-visible,
	.x:focus-visible {
		outline: 2px dashed var(--ink);
		outline-offset: 2px;
	}

	@media (max-width: 1000px) {
		.wall {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (max-width: 520px) {
		.wall {
			gap: 22px 14px;
		}
	}
	:global([data-era='y2k']) .polaroid {
		box-shadow: none;
		border: 2px outset #fff;
	}
</style>
