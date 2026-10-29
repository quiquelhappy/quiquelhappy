<script lang="ts">
	import { onMount } from 'svelte';
	import { ui } from '#lib/state/ui.svelte.ts';

	const COLORS = ['#ff7ac6', '#c08cff', '#7ccfff', '#16b93a', '#26e04a', '#ffcc33', '#ffffff'];
	type P = { x: number; y: number; vx: number; vy: number; s: number; c: string; life: number; rot: number };

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let parts: P[] = [];
	let raf = 0;
	let last = 0;
	let reduced = false;

	function resize() {
		const dpr = Math.min(2, devicePixelRatio || 1);
		canvas.width = innerWidth * dpr;
		canvas.height = innerHeight * dpr;
		ctx = canvas.getContext('2d')!;
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
	}

	function spawn(x: number, y: number) {
		for (let i = 0; i < 90; i++) {
			const a = Math.random() * Math.PI * 2;
			const v = 3 + Math.random() * 9;
			parts.push({
				x,
				y,
				vx: Math.cos(a) * v,
				vy: Math.sin(a) * v - 6,
				s: [6, 8, 10, 12][Math.floor(Math.random() * 4)],
				c: COLORS[Math.floor(Math.random() * COLORS.length)],
				life: 1,
				rot: 0
			});
		}
		if (!raf) {
			last = performance.now();
			raf = requestAnimationFrame(tick);
		}
	}

	function tick(now: number) {
		const dt = Math.min(2, (now - last) / 16.67);
		last = now;
		ctx.clearRect(0, 0, innerWidth, innerHeight);
		parts = parts.filter((p) => p.life > 0 && p.y < innerHeight + 20);
		for (const p of parts) {
			p.vy += 0.38 * dt;
			p.vx *= 0.992;
			p.x += p.vx * dt;
			p.y += p.vy * dt;
			p.life -= 0.0045 * dt;
			ctx.globalAlpha = Math.max(0, Math.min(1, p.life * 2));
			ctx.fillStyle = p.c;
			// snap to a pixel grid so it looks like pixel art
			ctx.fillRect(Math.round(p.x / 2) * 2, Math.round(p.y / 2) * 2, p.s, p.s);
		}
		ctx.globalAlpha = 1;
		if (parts.length) raf = requestAnimationFrame(tick);
		else {
			raf = 0;
			ctx.clearRect(0, 0, innerWidth, innerHeight);
		}
	}

	onMount(() => {
		reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
		resize();
		addEventListener('resize', resize);
		return () => {
			removeEventListener('resize', resize);
			cancelAnimationFrame(raf);
		};
	});

	let lastId = 0;
	$effect(() => {
		const b = ui.burst;
		if (!b || b.id === lastId || !ctx || reduced) return;
		lastId = b.id;
		spawn(b.x, b.y);
	});
</script>

<canvas bind:this={canvas} aria-hidden="true"></canvas>

<style>
	canvas {
		position: fixed;
		inset: 0;
		width: 100vw;
		height: 100vh;
		pointer-events: none;
		z-index: 95;
	}
</style>
