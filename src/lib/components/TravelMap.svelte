<script lang="ts">
	import { onMount } from 'svelte';
	import { places, routes, type Place } from '#lib/data/places.ts';
	import { WORLD, WORLD_ROWS } from '#lib/data/worldgrid.ts';
	import { ui } from '#lib/state/ui.svelte.ts';
	import { L } from '#lib/i18n/index.svelte.ts';

	let wrap: HTMLDivElement;
	let canvas: HTMLCanvasElement;
	let selectedId = $state(places[0]?.id ?? '');

	// a view is a window onto the land grid (column and row indices), so zooming redraws bigger cells instead of stretching pixels
	const VIEWS = {
		world: { c0: 0, c1: WORLD.cols, r0: 0, r1: WORLD.rows },
		europe: { c0: 82, c1: 108, r0: 4, r1: 25 },
		atlantic: { c0: 74, c1: 100, r0: 19, r1: 30 }
	};
	let viewId = $state<'world' | 'europe' | 'atlantic'>('world');
	const view = $derived(VIEWS[viewId]);
	const bounds = $derived({
		lon0: -180 + view.c0 * WORLD.cell,
		lon1: -180 + view.c1 * WORLD.cell,
		top: WORLD.top - view.r0 * WORLD.cell,
		bottom: WORLD.top - view.r1 * WORLD.cell
	});
	const pos = (p: { lat: number; lon: number }) => ({
		x: ((p.lon - bounds.lon0) / (bounds.lon1 - bounds.lon0)) * 100,
		y: ((bounds.top - p.lat) / (bounds.top - bounds.bottom)) * 100
	});
	const inView = (p: { lat: number; lon: number }) => {
		const { x, y } = pos(p);
		return x >= 0 && x <= 100 && y >= 0 && y <= 100;
	};
	const byId = (id: string) => places.find((p) => p.id === id);
	const text = (p: Place) => (L.content.places as Record<string, { name: string; note: string }>)[p.id] ?? { name: p.id, note: '' };
	const selected = $derived(byId(selectedId));
	const visits = $derived(routes.filter((r) => selected && r.stops.includes(selected.id)));
	const soonOnly = (id: string) => routes.filter((r) => r.stops.includes(id)).every((r) => r.upcoming);
	const cruises = $derived(routes.filter((r) => r.kind === 'cruise').length);
	const trips = $derived(routes.filter((r) => r.kind === 'trip').length);
	const onlyHome = $derived(places.length <= 1 && routes.length === 0);

	/** A route is drawn as arcs between consecutive stops, bowed upwards like a flight path. */
	const arcs = $derived(
		routes.flatMap((r) =>
			r.stops.slice(1).map((id, i) => {
				const a = byId(r.stops[i]);
				const b = byId(id);
				if (!a || !b) return null;
				const pa = pos(a), pb = pos(b);
				const bow = Math.min(18, Math.hypot(pb.x - pa.x, (pb.y - pa.y) * 2.6) * 0.22);
				return { key: `${r.id}-${i}`, kind: r.kind, soon: !!r.upcoming, d: `M ${pa.x} ${pa.y} Q ${(pa.x + pb.x) / 2} ${(pa.y + pb.y) / 2 - bow} ${pb.x} ${pb.y}` };
			})
		).filter((a): a is { key: string; kind: 'cruise' | 'trip'; soon: boolean; d: string } => a !== null)
	);

	// ---- the pixel world, drawn once and again whenever the size or theme changes
	let colors = { land: ['#d6efdc', '#b6e5c1', '#8fd7a1'], grid: 'rgb(0 0 0 / 0.05)' };

	function readColors() {
		const s = getComputedStyle(wrap);
		const v = (n: string, f: string) => s.getPropertyValue(n).trim() || f;
		colors = { land: [v('--land-1', colors.land[0]), v('--land-2', colors.land[1]), v('--land-3', colors.land[2])], grid: v('--land-grid', colors.grid) };
	}

	function draw() {
		if (!canvas || !wrap) return;
		const w = wrap.clientWidth;
		const cols = view.c1 - view.c0, rows = view.r1 - view.r0;
		const cell = w / cols;
		const h = cell * rows;
		const dpr = Math.min(2, devicePixelRatio || 1);
		canvas.width = Math.round(w * dpr);
		canvas.height = Math.round(h * dpr);
		canvas.style.height = h + 'px';
		const ctx = canvas.getContext('2d')!;
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		ctx.clearRect(0, 0, w, h);
		for (let r = view.r0; r < view.r1; r++) {
			const row = WORLD_ROWS[r];
			for (let c = view.c0; c < view.c1; c++) {
				const x = Math.round((c - view.c0) * cell), y = Math.round((r - view.r0) * cell);
				const cw = Math.round((c - view.c0 + 1) * cell) - x, ch = Math.round((r - view.r0 + 1) * cell) - y;
				if (row[c] === '1') {
					// a little deterministic variation, like a contribution graph
					const n = ((Math.imul(c + 1, 73856093) ^ Math.imul(r + 1, 19349663)) >>> 0) % 7;
					ctx.fillStyle = colors.land[n < 3 ? 0 : n < 6 ? 1 : 2];
					ctx.fillRect(x, y, cw, ch);
				} else {
					ctx.fillStyle = colors.grid;
					ctx.fillRect(x, y, cw, ch);
				}
				ctx.clearRect(x + cw - 1, y, 1, ch);
				ctx.clearRect(x, y + ch - 1, cw, 1);
			}
		}
	}

	onMount(() => {
		readColors();
		draw();
		const ro = new ResizeObserver(() => {
			readColors();
			draw();
		});
		ro.observe(wrap);
		return () => ro.disconnect();
	});
	$effect(() => {
		ui.theme;
		ui.y2k;
		view;
		requestAnimationFrame(() => {
			if (!wrap) return;
			readColors();
			draw();
		});
	});
</script>

<section id="map" class="section">
	<header class="pad">
		<p class="eyebrow">{L.ui.map.eyebrow}</p>
		<h2 class="h2">{L.ui.map.h2a}<br />{L.ui.map.h2b}</h2>
		<p class="lede">{L.ui.map.lede}</p>
	</header>

	<div class="mapbox pad">
		<div class="world" bind:this={wrap} style:aspect-ratio="{view.c1 - view.c0} / {view.r1 - view.r0}" role="group" aria-label={L.ui.map.aria}>
			<canvas bind:this={canvas} aria-hidden="true"></canvas>

			<svg class="routes" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
				{#each arcs as a (a.key)}<path d={a.d} class="{a.kind}{a.soon ? ' soon' : ''}" />{/each}
			</svg>

			{#each places.filter(inView) as p (p.id)}
				{@const xy = pos(p)}
				<button
					class="pin {p.kind}"
					class:soon={soonOnly(p.id)}
					class:on={selectedId === p.id}
					style:left="{xy.x}%"
					style:top="{xy.y}%"
					aria-label={text(p).name}
					aria-pressed={selectedId === p.id}
					onclick={() => (selectedId = p.id)}
				>
					<i aria-hidden="true"></i>
					<span class="tip">{text(p).name}</span>
				</button>
			{/each}
		</div>

		<div class="side">
			<div class="meta">
			<div class="stats">
				<p><b>{places.length}</b><span>{L.ui.map.places}</span></p>
				<p><b>{cruises}</b><span>{L.ui.map.cruises}</span></p>
				<p><b>{trips}</b><span>{L.ui.map.trips}</span></p>
			</div>

			<div class="views" role="group" aria-label={L.ui.map.view}>
				<button class="chip" aria-pressed={viewId === 'world'} onclick={() => (viewId = 'world')}>{L.ui.map.viewWorld}</button>
				<button class="chip" aria-pressed={viewId === 'europe'} onclick={() => (viewId = 'europe')}>{L.ui.map.viewEurope}</button>
				<button class="chip" aria-pressed={viewId === 'atlantic'} onclick={() => (viewId = 'atlantic')}>{L.ui.map.viewAtlantic}</button>
			</div>

			<ul class="legend" aria-label="Legend">
				<li class="home"><i></i>{L.ui.map.legend.home}</li>
				<li class="cruise"><i></i>{L.ui.map.legend.cruise}</li>
				<li class="trip"><i></i>{L.ui.map.legend.trip}</li>
			</ul>
			</div>

			<div class="card" aria-live="polite">
				{#if selected}
					<p class="kind {selected.kind}">{L.ui.map.legend[selected.kind]}{selected.year ? ` · ${selected.year}` : ''}</p>
					<h3>{text(selected).name}</h3>
					{#if text(selected).note}<p>{text(selected).note}</p>{/if}
					{#if visits.length}
						<p class="visits">{L.ui.map.visits}:</p>
						<ul class="trips">
							{#each visits as v (v.id)}<li>{v.name}{v.year ? ` · ${v.year}` : ''}{#if v.upcoming} <b class="soonb">{L.ui.map.soon}</b>{/if}</li>{/each}
						</ul>
					{/if}
				{:else}
					<p>{L.ui.map.pick}</p>
				{/if}
				{#if onlyHome}<p class="soon">{L.ui.map.empty}</p>{/if}
			</div>

			{#if places.length > 1}
				<ul class="list" aria-label={L.ui.map.list}>
					{#each places as p (p.id)}
						<li><button class="chip" aria-pressed={selectedId === p.id} onclick={() => (selectedId = p.id)}>{text(p).name}</button></li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
</section>

<style>
	section {
		--land-1: #c4ebcf;
		--land-2: #9bdcad;
		--land-3: #6fca8c;
		--land-grid: rgb(10 15 11 / 0.06);
		--pin-home: var(--green-bright);
		--pin-cruise: var(--pink);
		--pin-trip: var(--blue);
	}
	:global([data-theme='dark']) section {
		--land-1: #17452a;
		--land-2: #1f5c38;
		--land-3: #2a7a49;
		--land-grid: rgb(255 255 255 / 0.05);
	}
	header {
		padding-block: clamp(40px, 6vw, 80px) 24px;
		display: grid;
		gap: 22px;
	}
	.mapbox {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 24px;
		padding-block: 8px 56px;
		align-items: start;
	}
	.world {
		position: relative;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--bg-soft);
		overflow: hidden;
	}
	canvas {
		display: block;
		width: 100%;
	}
	.routes {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}
	.routes path {
		fill: none;
		stroke-width: 2px;
		vector-effect: non-scaling-stroke;
		stroke-dasharray: 6 5;
		animation: dash 1.4s linear infinite;
	}
	.routes .cruise {
		stroke: var(--pin-cruise);
	}
	.routes .soon {
		opacity: 0.55;
	}
	.pin.on,
	.pin:hover {
		z-index: 3;
	}
	.pin.soon i {
		opacity: 0.6;
		border-style: dashed;
	}
	.trips {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 2px;
		font: 13px var(--font-mono);
	}
	.visits {
		margin: 8px 0 2px;
		font: 11.5px var(--font-mono);
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--ink-3);
	}
	.soonb {
		margin-left: 6px;
		font-size: 11px;
		color: var(--pink);
		text-transform: uppercase;
	}
	.routes .trip {
		stroke: var(--pin-trip);
	}
	@keyframes dash {
		to {
			stroke-dashoffset: -22;
		}
	}
	.pin {
		all: unset;
		position: absolute;
		width: 20px;
		height: 20px;
		margin: -10px 0 0 -10px;
		cursor: pointer;
		display: grid;
		place-items: center;
		z-index: 1;
	}
	.pin i {
		width: 8px;
		height: 8px;
		background: var(--pin);
		border: 1.5px solid var(--ink);
		box-shadow: 2px 2px 0 rgb(0 0 0 / 0.25);
		transition: transform 0.12s steps(2);
	}
	.pin.home {
		--pin: var(--pin-home);
	}
	.pin.cruise {
		--pin: var(--pin-cruise);
	}
	.pin.trip {
		--pin: var(--pin-trip);
	}
	.pin::before {
		content: '';
		position: absolute;
		inset: 3px;
		border: 2px solid var(--pin);
		opacity: 0;
		animation: ping 2s steps(6) infinite;
	}
	.pin.on::before,
	.pin:hover::before {
		opacity: 0.8;
	}
	@keyframes ping {
		to {
			transform: scale(1.9);
			opacity: 0;
		}
	}
	.pin:hover i,
	.pin.on i {
		transform: scale(1.35);
	}
	.pin:focus-visible {
		outline: 2px dashed var(--ink);
		outline-offset: 2px;
	}
	.tip {
		position: absolute;
		bottom: calc(100% - 2px);
		left: 50%;
		transform: translateX(-50%);
		white-space: nowrap;
		font: 600 11px var(--font-mono);
		padding: 2px 7px;
		background: var(--ink);
		color: var(--bg);
		opacity: 0;
		pointer-events: none;
	}
	.pin:hover .tip,
	.pin:focus-visible .tip {
		opacity: 1;
	}

	.side {
		display: grid;
		grid-template-columns: 280px minmax(0, 1fr);
		gap: 18px 28px;
		align-items: start;
	}
	.meta {
		display: grid;
		gap: 18px;
	}
	.list {
		grid-column: 1 / -1;
	}
	.stats {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		border: 1px solid var(--line);
	}
	.stats p {
		margin: 0;
		display: grid;
		gap: 2px;
		padding: 12px 10px;
		text-align: center;
		border-right: 1px solid var(--line);
	}
	.stats p:last-child {
		border-right: 0;
	}
	.stats b {
		font: 500 28px var(--font-mono);
		color: var(--green);
		line-height: 1;
	}
	.stats span {
		font: 11px var(--font-mono);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--ink-3);
	}
	.legend {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 8px 16px;
		font: 12px var(--font-mono);
		color: var(--ink-2);
	}
	.legend li {
		display: flex;
		align-items: center;
		gap: 7px;
	}
	.legend i {
		width: 10px;
		height: 10px;
		border: 2px solid var(--ink);
		background: var(--pin);
	}
	.legend .home {
		--pin: var(--pin-home);
	}
	.legend .cruise {
		--pin: var(--pin-cruise);
	}
	.legend .trip {
		--pin: var(--pin-trip);
	}
	.card {
		border: 1px solid var(--line);
		border-left: 5px solid var(--green-bright);
		background: var(--bg-soft);
		padding: 16px 18px;
		display: grid;
		gap: 6px;
	}
	.card h3 {
		font-family: var(--font-pixel);
		font-size: 26px;
		font-weight: 600;
		line-height: 1.1;
	}
	.card p {
		margin: 0;
		font-size: 15px;
		color: var(--ink-2);
	}
	.card .kind {
		font: 700 11px var(--font-mono);
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--ink-3);
	}
	.card .soon {
		margin-top: 8px;
		padding-top: 10px;
		border-top: 1px dashed var(--line-strong);
		font: 12.5px var(--font-mono);
		color: var(--ink-3);
	}
	.views {
		display: flex;
		gap: 6px;
	}
	.list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}
	@media (max-width: 1000px) {
		.side {
			grid-template-columns: minmax(0, 1fr);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.routes path,
		.pin::before {
			animation: none;
		}
	}
	:global([data-era='y2k']) .world {
		background: #ffffcc;
	}
</style>
