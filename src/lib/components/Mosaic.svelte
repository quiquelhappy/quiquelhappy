<script lang="ts">
	import { onMount } from 'svelte';
	import { ui } from '#lib/state/ui.svelte.ts';
	import { L } from '#lib/i18n/index.svelte.ts';

	let {
		height = 340,
		cell: cellTarget = 64,
		density = 1,
		seed = 7,
		hint = 'hover to paint. click to pin a block.',
		class: klass = ''
	}: { height?: number; cell?: number; density?: number; seed?: number; hint?: string; class?: string } = $props();

	const ACCENTS = ['#ff7ac6', '#c08cff', '#7ccfff', '#16b93a', '#26e04a', '#0f7c2b'];
	const EMPTY = 0, TILE = 1, TILE2 = 2, ACCENT = 3, GRAD = 4;

	let host: HTMLDivElement;
	let canvas: HTMLCanvasElement;
	let touched = $state(false);
	let pinnedCount = $state(0);

	let ctx: CanvasRenderingContext2D;
	let cols = 0, rows = 0, cell = 0, w = 0, h = 0;
	let kind = new Uint8Array(0), ci = new Uint8Array(0), pinned = new Uint8Array(0), pinC = new Uint8Array(0), hc = new Uint8Array(0);
	let alpha = new Float32Array(0);
	let pending: { i: number; at: number; c: number }[] = [];
	let colors = { bg: '#fff', tile: '#f1f3f2', tile2: '#dfe9e2', line: '#d9dfdb' };
	let raf = 0, last = 0, lastCell = -1, running = false;

	function rng(a: number) {
		return () => {
			a |= 0;
			a = (a + 0x6d2b79f5) | 0;
			let t = Math.imul(a ^ (a >>> 15), 1 | a);
			t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
			return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
		};
	}

	function build() {
		const r = rng(seed);
		kind = new Uint8Array(cols * rows);
		ci = new Uint8Array(cols * rows);
		pinned = new Uint8Array(cols * rows);
		pinC = new Uint8Array(cols * rows);
		hc = new Uint8Array(cols * rows);
		alpha = new Float32Array(cols * rows);
		for (let y = 0; y < rows; y++) {
			for (let x = 0; x < cols; x++) {
				const i = y * cols + x;
				// colour climbs a staircase toward the bottom right, like a contribution graph
				const t = (x / cols + (y / rows) * 0.7 - 0.7) * 1.5 * density;
				const roll = r();
				if (roll < Math.max(0, Math.min(0.78, t))) {
					if (r() < 0.2) kind[i] = GRAD;
					else {
						kind[i] = ACCENT;
						ci[i] = Math.floor(r() * ACCENTS.length);
					}
				} else {
					const g = r();
					kind[i] = g < 0.45 ? EMPTY : g < 0.78 ? TILE : TILE2;
				}
			}
		}
	}

	function readColors() {
		const s = getComputedStyle(host);
		const v = (n: string, f: string) => s.getPropertyValue(n).trim() || f;
		colors = { bg: v('--bg', '#fff'), tile: v('--bg-tile', '#f1f3f2'), tile2: v('--bg-tile-2', '#dfe9e2'), line: v('--line', '#d9dfdb') };
	}

	function resize() {
		const rect = host.getBoundingClientRect();
		// hidden (display: none in Y2K mode) means there is nothing to draw
		if (rect.width < 1) return;
		w = rect.width;
		h = height;
		const dpr = Math.min(2, devicePixelRatio || 1);
		canvas.width = Math.round(w * dpr);
		canvas.height = Math.round(h * dpr);
		canvas.style.width = w + 'px';
		canvas.style.height = h + 'px';
		ctx = canvas.getContext('2d')!;
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		const target = w < 560 ? Math.min(cellTarget, 44) : cellTarget;
		cols = Math.max(4, Math.round(w / target));
		cell = w / cols;
		rows = Math.max(2, Math.round(h / cell));
		build();
		draw();
	}

	function draw() {
		if (!ctx) return;
		ctx.clearRect(0, 0, w, h);
		for (let y = 0; y < rows; y++) {
			for (let x = 0; x < cols; x++) {
				const i = y * cols + x;
				const px = Math.round(x * cell), py = Math.round(y * cell);
				const pw = Math.round((x + 1) * cell) - px, ph = Math.round((y + 1) * cell) - py;
				const k = kind[i];
				if (k === GRAD) {
					const g = ctx.createLinearGradient(px, py, px + pw, py + ph);
					g.addColorStop(0, '#d79cf0');
					g.addColorStop(0.5, '#ff9fd6');
					g.addColorStop(1, '#ffc9a8');
					ctx.fillStyle = g;
				} else {
					ctx.fillStyle = k === ACCENT ? ACCENTS[ci[i]] : k === TILE ? colors.tile : k === TILE2 ? colors.tile2 : colors.bg;
				}
				ctx.fillRect(px, py, pw, ph);
				if (pinned[i]) {
					ctx.fillStyle = ACCENTS[pinC[i]];
					ctx.fillRect(px, py, pw, ph);
				}
				if (alpha[i] > 0) {
					ctx.globalAlpha = Math.min(1, alpha[i]);
					ctx.fillStyle = ACCENTS[hc[i]];
					ctx.fillRect(px, py, pw, ph);
					ctx.globalAlpha = 1;
				}
				ctx.strokeStyle = colors.line;
				ctx.globalAlpha = 0.55;
				ctx.strokeRect(px + 0.5, py + 0.5, pw - 1, ph - 1);
				ctx.globalAlpha = 1;
			}
		}
	}

	function frame(now: number) {
		const dt = Math.min(64, now - last);
		last = now;
		let active = false;
		for (let n = pending.length - 1; n >= 0; n--) {
			if (now >= pending[n].at) {
				alpha[pending[n].i] = 1;
				hc[pending[n].i] = pending[n].c;
				pending.splice(n, 1);
			} else active = true;
		}
		for (let i = 0; i < alpha.length; i++) {
			if (alpha[i] > 0) {
				alpha[i] = Math.max(0, alpha[i] - dt / 1300);
				active = true;
			}
		}
		draw();
		if (active) raf = requestAnimationFrame(frame);
		else running = false;
	}
	function kick() {
		if (running) return;
		running = true;
		last = performance.now();
		raf = requestAnimationFrame(frame);
	}

	function at(e: PointerEvent) {
		const rect = canvas.getBoundingClientRect();
		const x = Math.floor(((e.clientX - rect.left) / rect.width) * cols);
		const y = Math.floor(((e.clientY - rect.top) / rect.height) * rows);
		if (x < 0 || y < 0 || x >= cols || y >= rows) return -1;
		return y * cols + x;
	}

	function move(e: PointerEvent) {
		const i = at(e);
		if (i < 0 || i === lastCell) return;
		lastCell = i;
		alpha[i] = 1;
		hc[i] = Math.floor(Math.random() * ACCENTS.length);
		touched = true;
		kick();
	}

	function press(e: PointerEvent) {
		const i = at(e);
		if (i < 0) return;
		touched = true;
		const cx = i % cols, cy = Math.floor(i / cols);
		const base = Math.floor(Math.random() * ACCENTS.length);
		if (pinned[i]) {
			pinned[i] = 0;
			pinnedCount--;
		} else {
			pinned[i] = 1;
			pinC[i] = base;
			pinnedCount++;
		}
		const now = performance.now();
		for (let y = 0; y < rows; y++)
			for (let x = 0; x < cols; x++) {
				const d = Math.hypot(x - cx, y - cy);
				if (d > 0 && d < 5) pending.push({ i: y * cols + x, at: now + d * 55, c: (base + Math.round(d)) % ACCENTS.length });
			}
		kick();
		if (pinnedCount === 12) {
			ui.toast(L.ui.mosaic.t12);
			ui.say(L.ui.mosaic.say12);
		}
		if (pinnedCount === 36) {
			ui.toast(L.ui.mosaic.t36);
			ui.confetti(e.clientX, e.clientY);
			ui.dance();
		}
	}

	onMount(() => {
		readColors();
		resize();
		const ro = new ResizeObserver(() => {
			readColors();
			resize();
		});
		ro.observe(host);
		return () => {
			ro.disconnect();
			cancelAnimationFrame(raf);
		};
	});

	$effect(() => {
		ui.theme;
		ui.y2k;
		requestAnimationFrame(() => {
			if (!host) return;
			readColors();
			draw();
		});
	});
</script>

<div class={['mosaic', klass]} bind:this={host} style:height="{height}px">
	<canvas
		bind:this={canvas}
		aria-hidden="true"
		onpointermove={move}
		onpointerleave={() => (lastCell = -1)}
		onpointerdown={press}
	></canvas>
	<p class="hint" class:gone={touched}>{hint}</p>
</div>

<style>
	.mosaic {
		position: relative;
		overflow: hidden;
		border-top: 1px solid var(--line);
	}
	canvas {
		display: block;
		touch-action: pan-y;
		cursor: crosshair;
	}
	.hint {
		position: absolute;
		left: var(--pad);
		bottom: 14px;
		margin: 0;
		font-family: var(--font-mono);
		font-size: 12px;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--ink-2);
		background: var(--bg);
		padding: 4px 8px;
		border: 1px solid var(--line);
		pointer-events: none;
		transition: opacity 0.4s;
	}
	.hint.gone {
		opacity: 0;
	}
	:global([data-era='y2k']) .mosaic {
		display: none;
	}
</style>
