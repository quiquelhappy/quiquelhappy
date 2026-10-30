<script lang="ts">
	import { onMount, tick, untrack } from 'svelte';
	import { ui } from '#lib/state/ui.svelte.ts';
	import { L } from '#lib/i18n/index.svelte.ts';
	import { toRects, type Rect } from '#lib/pixel.ts';
	import { GANDALF_ART, GANDALF_COLORS, GANDALF_EYE, GANDALF_TONGUE, GANDALF_SPARK } from '#lib/gandalf.ts';
	import PixelSprite from './PixelSprite.svelte';

	type Corner = 'bl' | 'br' | 'tr' | 'tl';
	type Pose = 'hidden' | 'peek' | 'out';
	type Expr = 'smile' | 'happy' | 'scared' | 'wow';

	const RING: Corner[] = ['bl', 'br', 'tr', 'tl'];
	const XY: Record<Corner, [number, number]> = { bl: [0, 1], br: [1, 1], tr: [1, 0], tl: [0, 0] };

	const C = GANDALF_COLORS;
	const EYE = GANDALF_EYE;
	const TONGUE = GANDALF_TONGUE;
	const SPARK = GANDALF_SPARK;
	const base = toRects(GANDALF_ART, C);
	const rect = (x: number, y: number, w: number, h: number, c: string): Rect => ({ x, y, w, h, c });

	// tail, two wag frames, drawn behind the body on the right hand side
	const shift = (r: Rect): Rect => ({ ...r, x: r.x + 20, y: r.y + 15 });
	const TAIL = [
		toRects(['..oo', '.oWo', '.oBo', 'oBBo', 'oBo.', 'oo..'], C).map(shift),
		toRects(['....', '....', '..oo', 'oBWo', 'oBBo', 'ooo.'], C).map(shift)
	];
	let tailFrame = $state(0);

	let at = $state<Corner>('br');
	let pose = $state<Pose>('hidden');
	let expr = $state<Expr>('smile');
	let blink = $state(false);
	let dancing = $state(false);
	let look = $state({ x: 0, y: 0 });
	let speech = $state('');
	type Edge = 'b' | 't' | 'l' | 'r';
	type Trail = { id: number; from: Corner; to: Corner; edge: Edge; dur: number; from_: string; to_: string; axis: 'h' | 'v'; rev: boolean };
	let trail = $state<Trail | null>(null);
	let reduced = $state(false);
	let winEl: HTMLButtonElement;

	const top = $derived(at === 'tl' || at === 'tr');

	const rects = $derived.by(() => {
		const out = [...TAIL[tailFrame], ...base];
		const lx = look.x, ly = look.y;
		// eyes are always black. looking around moves the eyes inside the face, plus a glossy sparkle.
		const dx = lx < 0 ? -1 : lx > 0 ? 1 : 0;
		const dy = ly > 0 && dx === 0 ? 1 : ly < 0 ? -1 : 0;
		for (const side of [0, 1]) {
			const ex = (side === 0 ? 7 : 15) + dx;
			if (blink) {
				out.push(rect(ex, 8, 2, 1, EYE));
			} else if (expr === 'happy') {
				// happy closed eyes: ^ ^
				out.push(side === 0 ? rect(7, 8, 1, 1, EYE) : rect(16, 8, 1, 1, EYE), rect(side === 0 ? 8 : 15, 7, 1, 1, EYE));
			} else {
				out.push(rect(ex, 7 + dy, 2, 3, EYE));
				if (expr !== 'scared') out.push(rect(side === 0 ? ex : ex, 7 + dy, 1, 1, SPARK));
			}
		}
		// mouth: calm smile. open mouth and tongue only when happy
		if (expr === 'smile') out.push(rect(10, 12, 1, 1, C.N), rect(13, 12, 1, 1, C.N), rect(11, 13, 2, 1, C.N));
		else if (expr === 'happy') out.push(rect(10, 12, 4, 1, C.N), rect(11, 13, 2, 2, TONGUE));
		else out.push(rect(11, 12, 2, 2, C.N));
		return out;
	});

	// ----- helpers
	const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
	const rand = (a: number, b: number) => a + Math.random() * (b - a);
	let alive = true;
	let wake: (() => void) | null = null;
	const nap = (ms: number) =>
		new Promise<void>((res) => {
			const t = setTimeout(fin, ms);
			function fin() {
				clearTimeout(t);
				if (wake === fin) wake = null;
				res();
			}
			wake = fin;
		});
	let phase: 'rest' | 'trail' | 'visible' | 'retreat' = 'rest';
	let holdUntil = 0;
	let pendingSay: string | null = null;
	let pendingDance = false;
	let scaredNow = false;
	let lastQuip = '';
	let clicks = 0;

	let speechToken = 0;
	async function say(text: string) {
		const tok = ++speechToken;
		speech = '';
		for (let i = 1; i <= text.length; i++) {
			if (tok !== speechToken) return;
			speech = text.slice(0, i);
			await sleep(22);
		}
		holdUntil = Math.max(holdUntil, Date.now() + 1500);
		await sleep(2000 + text.length * 45);
		if (tok === speechToken) speech = '';
	}

	function quip() {
		const q_ = L.content.quips as Record<string, string[]>;
		const pool = q_[ui.section] ?? [];
		const from = pool.length && Math.random() < 0.6 ? pool : q_.general;
		let q = from[Math.floor(Math.random() * from.length)];
		if (q === lastQuip) q = from[(from.indexOf(q) + 1) % from.length];
		lastQuip = q;
		return q;
	}

	function doDance() {
		dancing = true;
		expr = 'happy';
		holdUntil = Math.max(holdUntil, Date.now() + 3600);
		setTimeout(() => {
			dancing = false;
			if (expr === 'happy') expr = 'smile';
		}, 3400);
	}

	// the move animation: a rainbow streak gliding along the edge of the screen
	const RB_LEN = 220;
	const INSET_X = 70;
	const INSET_Y = 34;

	function makeTrail(from: Corner, to: Corner): Trail {
		const [fx, fy] = XY[from];
		const [tx, ty] = XY[to];
		const horizontal = fy === ty;
		const edge: Edge = horizontal ? (fy === 1 ? 'b' : 't') : fx === 1 ? 'r' : 'l';
		const inset = horizontal ? INSET_X : INSET_Y;
		const start = `${inset}px`, end = `calc(100% - ${inset}px)`;
		const forward = horizontal ? tx > fx : ty > fy;
		const a = forward ? start : end;
		const b = forward ? end : start;
		// the head leads. going forward the streak trails behind it (to the left / above), going back it trails to the right / below
		const shift = (v: string) => (forward ? `calc(${v} - ${RB_LEN}px)` : v);
		return { id: Date.now(), from, to, edge, dur: horizontal ? 1700 : 1300, from_: shift(a), to_: shift(b), axis: horizontal ? 'h' : 'v', rev: !forward };
	}

	function adjacent(c: Corner): Corner {
		const i = RING.indexOf(c);
		return RING[(i + (Math.random() < 0.5 ? 1 : 3)) % 4];
	}

	async function loop() {
		await nap(2800);
		let first = true;
		while (alive) {
			if (!first) {
				const next = adjacent(at);
				const run = makeTrail(at, next);
				phase = 'trail';
				await nap(250);
				trail = run;
				await nap(run.dur);
				trail = null; // the rainbow has faded out before Gandalf comes out
				at = next;
				await tick();
				await nap(250);
			}
			first = false;
			if (!alive) break;

			// emerge
			phase = 'visible';
			scaredNow = false;
			expr = 'smile';
			pose = 'peek';
			await nap(700);
			if (pendingSay) {
				say(pendingSay);
				pendingSay = null;
			} else if (Math.random() < 0.65) say(quip());
			if (pendingDance) {
				pendingDance = false;
				pose = 'out';
				await nap(450);
				doDance();
			} else if (Math.random() < 0.7 && !scaredNow) {
				pose = 'out';
				await nap(400);
			}

			// linger
			holdUntil = Math.max(holdUntil, Date.now() + rand(4200, 9000));
			while (Date.now() < holdUntil && alive && !scaredNow) await nap(Math.min(500, holdUntil - Date.now()));

			// retreat
			phase = 'retreat';
			pose = 'hidden';
			speechToken++;
			speech = '';
			await nap(scaredNow ? 350 : 650);
			expr = 'smile';
			phase = 'rest';
			await nap(rand(900, 3200));
		}
	}

	// ----- pointer awareness
	let inside = false;
	let lastMove = 0;
	function onMove(e: PointerEvent) {
		const now = performance.now();
		if (now - lastMove < 60 || !winEl) return;
		lastMove = now;
		const r = winEl.getBoundingClientRect();
		const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
		let dx = e.clientX - cx, dy = e.clientY - cy;
		const dist = Math.hypot(dx, dy);
		if (top) {
			dx = -dx;
			dy = -dy;
		}
		look = { x: Math.abs(dx) < 36 ? 0 : Math.sign(dx), y: Math.abs(dy) < 30 ? 0 : Math.sign(dy) };

		if (pose === 'hidden' || e.pointerType === 'touch') {
			inside = false;
			return;
		}
		const near = dist < r.width * 0.95;
		if (near && !inside && !reduced) {
			inside = true;
			if (Math.random() < 0.5) startle();
			else if (expr === 'smile') {
				expr = 'wow';
				setTimeout(() => expr === 'wow' && (expr = 'smile'), 900);
			}
		} else if (!near) inside = false;
	}

	function startle() {
		scaredNow = true;
		expr = 'scared';
		const st = L.ui.mascot.startle;
		say(st[Math.floor(Math.random() * st.length)]);
		wake?.();
	}

	function clicked() {
		if (pose === 'hidden') return;
		clicks++;
		pose = 'out';
		holdUntil = Date.now() + 4200;
		expr = 'happy';
		setTimeout(() => expr === 'happy' && !dancing && (expr = 'smile'), 900);
		if (clicks % 10 === 0) {
			say(L.ui.mascot.confettiSay);
			ui.confetti(winEl.getBoundingClientRect().left + 40, winEl.getBoundingClientRect().top);
			doDance();
			ui.toast(L.ui.mascot.clickToast(clicks));
		} else if (clicks < 10) {
			// clicks 1 to 9 each have their own line, so the countdown to ten is accurate
			say(L.content.clickLines[clicks - 1]);
		} else {
			// after the first ten: lines without numbers, restarting after every multiple of ten
			const more = L.content.clickMore;
			say(more[((clicks % 10) - 1) % more.length]);
		}
	}

	// ----- cues from the rest of the site
	let lastCue = 0;
	$effect(() => {
		const c = ui.cue;
		if (!c || c.id === lastCue) return;
		lastCue = c.id;
		untrack(() => {
			if (c.kind === 'say' || c.kind === 'summon') {
				if (c.text) {
					if (pose !== 'hidden') say(c.text);
					else {
						pendingSay = c.text;
						if (phase === 'rest') wake?.();
					}
				} else if (phase === 'rest') wake?.();
			} else if (c.kind === 'dance') {
				if (pose !== 'hidden') {
					pose = 'out';
					doDance();
				} else {
					pendingDance = true;
					if (phase === 'rest') wake?.();
				}
			}
		});
	});

	onMount(() => {
		reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
		addEventListener('pointermove', onMove, { passive: true });
		const wag = setInterval(() => {
			if (pose !== 'hidden') tailFrame = tailFrame === 0 ? 1 : 0;
		}, 280);
		const blinker = setInterval(() => {
			if (pose === 'hidden' || Math.random() > 0.6) return;
			blink = true;
			setTimeout(() => (blink = false), 140);
		}, 2400);
		if (reduced) {
			pose = 'peek';
			at = 'br';
		} else loop();

		let title = document.title;
		const vis = () => {
			if (document.hidden) {
				title = document.title;
				document.title = L.ui.mascot.away;
			} else document.title = title;
		};
		document.addEventListener('visibilitychange', vis);

		return () => {
			alive = false;
			wake?.();
			removeEventListener('pointermove', onMove);
			clearInterval(blinker);
			clearInterval(wag);
			document.removeEventListener('visibilitychange', vis);
		};
	});
</script>

<div class="trail" aria-hidden="true">
	{#if trail}
		{#key trail.id}
			<span class="rainbow {trail.axis} {trail.edge}" class:rev={trail.rev} style="--dur:{trail.dur}ms;--from:{trail.from_};--to:{trail.to_};--len:{RB_LEN}px"></span>
		{/key}
	{/if}
</div>

<div class="mascot {at}" class:top class:vis={pose !== 'hidden'}>
	{#if speech}
		<div class="bubble" role="status">{speech}</div>
	{/if}
	<button
		bind:this={winEl}
		class="win"
		class:flip={top}
		disabled={pose === 'hidden'}
		onclick={clicked}
		aria-label={L.ui.mascot.aria}
		tabindex={pose === 'hidden' ? -1 : 0}
	>
		<span class="sprite {pose}" class:dancing class:wiggle={pose === 'out' && !dancing}>
			<PixelSprite {rects} width={24} height={24} scale={1} />
		</span>
		<span class="hole" class:open={pose !== 'hidden'}></span>
	</button>
</div>

<style>
	.mascot,
	.trail {
		position: fixed;
		z-index: 60;
		pointer-events: none;
		--px: 4px;
	}
	@media (max-width: 640px) {
		.mascot {
			--px: 3px;
		}
	}
	.mascot {
		width: calc(var(--px) * 24);
		height: calc(var(--px) * 24);
	}
	.mascot.bl {
		left: 22px;
		bottom: 0;
	}
	.mascot.br {
		right: 22px;
		bottom: 0;
	}
	.mascot.tl {
		left: 22px;
		top: var(--nav-h);
	}
	.mascot.tr {
		right: 22px;
		top: var(--nav-h);
	}
	.win {
		all: unset;
		box-sizing: border-box;
		position: absolute;
		inset: 0;
		overflow: hidden;
		cursor: pointer;
		pointer-events: none;
	}
	.mascot.vis .win {
		pointer-events: auto;
	}
	.win.flip {
		transform: rotate(180deg);
	}
	.win:focus-visible {
		outline: 2px dashed var(--green-bright);
	}
	.sprite {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		transition: transform 0.5s steps(7);
		filter: drop-shadow(0 calc(var(--px) * 0.5) 0 rgb(0 0 0 / 0.18));
	}
	.sprite.hidden {
		transform: translateY(105%);
		transition-duration: 0.45s;
	}
	.sprite.peek {
		transform: translateY(56%);
	}
	.sprite.out {
		transform: translateY(0);
	}
	.sprite :global(svg) {
		width: 100%;
		height: 100%;
		display: block;
	}
	.sprite.wiggle :global(svg) {
		animation: bob 1.6s steps(1) infinite;
	}
	.sprite.dancing :global(svg) {
		animation: dance 0.5s steps(1) infinite;
	}
	@keyframes bob {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(calc(var(--px) * -0.6));
		}
	}
	@keyframes dance {
		0% {
			transform: translateY(0) rotate(-6deg);
		}
		25% {
			transform: translateY(calc(var(--px) * -2.5)) rotate(0);
		}
		50% {
			transform: translateY(0) rotate(6deg);
		}
		75% {
			transform: translateY(calc(var(--px) * -2.5)) rotate(0);
		}
	}
	.hole {
		position: absolute;
		left: -6%;
		right: -6%;
		bottom: 0;
		height: calc(var(--px) * 2.4);
		background: #1a0f08;
		clip-path: polygon(0 100%, 0 70%, 6% 70%, 6% 35%, 14% 35%, 14% 0, 86% 0, 86% 35%, 94% 35%, 94% 70%, 100% 70%, 100% 100%);
		border-bottom: calc(var(--px) * 0.6) solid #6b4423;
		transform: scaleX(0);
		transition: transform 0.3s steps(5) 0.5s;
	}
	.hole.open {
		transform: scaleX(1);
		transition-delay: 0s;
	}
	.bubble {
		position: absolute;
		width: max-content;
		max-width: min(240px, 60vw);
		padding: 9px 12px;
		background: var(--bg);
		color: var(--ink);
		border: 2px solid var(--ink);
		font: 600 12.5px/1.4 var(--font-mono);
		box-shadow: 3px 3px 0 var(--ink);
		bottom: calc(var(--px) * 24 + 8px);
	}
	.mascot.br .bubble,
	.mascot.tr .bubble {
		right: 0;
	}
	.mascot.bl .bubble,
	.mascot.tl .bubble {
		left: 0;
	}
	.mascot.top .bubble {
		bottom: auto;
		top: calc(var(--px) * 24 + 8px);
	}

	/* ------------------------------------------------ the move: a rainbow gliding along the edge */
	.trail {
		inset: var(--nav-h) 0 0 0;
		z-index: 45;
		overflow: hidden;
	}
	.rainbow {
		position: absolute;
		--t: 12px;
		opacity: 0;
		--bands: #ff4d6d 0 16.66%, #ff9f1c 0 33.33%, #ffe14d 0 50%, #4ade80 0 66.66%, #38bdf8 0 83.33%, #a78bfa 0 100%;
	}
	.rainbow.h {
		width: var(--len);
		height: var(--t);
		background: linear-gradient(180deg, var(--bands));
		animation:
			slideX var(--dur) cubic-bezier(0.45, 0.05, 0.55, 0.95) both,
			glow var(--dur) linear both;
	}
	.rainbow.v {
		width: var(--t);
		height: var(--len);
		background: linear-gradient(90deg, var(--bands));
		animation:
			slideY var(--dur) cubic-bezier(0.45, 0.05, 0.55, 0.95) both,
			glow var(--dur) linear both;
	}
	/* the tail fades away behind the bright head */
	.rainbow.h:not(.rev) {
		-webkit-mask-image: linear-gradient(90deg, transparent, #000 85%);
		mask-image: linear-gradient(90deg, transparent, #000 85%);
	}
	.rainbow.h.rev {
		-webkit-mask-image: linear-gradient(270deg, transparent, #000 85%);
		mask-image: linear-gradient(270deg, transparent, #000 85%);
	}
	.rainbow.v:not(.rev) {
		-webkit-mask-image: linear-gradient(180deg, transparent, #000 85%);
		mask-image: linear-gradient(180deg, transparent, #000 85%);
	}
	.rainbow.v.rev {
		-webkit-mask-image: linear-gradient(0deg, transparent, #000 85%);
		mask-image: linear-gradient(0deg, transparent, #000 85%);
	}
	.rainbow.b {
		bottom: 0;
	}
	.rainbow.t {
		top: 0;
	}
	.rainbow.l {
		left: 0;
	}
	.rainbow.r {
		right: 0;
	}
	@keyframes slideX {
		from {
			left: var(--from);
		}
		to {
			left: var(--to);
		}
	}
	@keyframes slideY {
		from {
			top: var(--from);
		}
		to {
			top: var(--to);
		}
	}
	@keyframes glow {
		0% {
			opacity: 0;
		}
		12%,
		86% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
	@media print {
		.mascot,
		.trail {
			display: none;
		}
	}
</style>
