<script lang="ts">
	import { onMount, tick, untrack } from 'svelte';
	import { ui } from '#lib/state/ui.svelte.ts';
	import { quips, clickLines } from '#lib/data/site.ts';
	import { toRects, type Rect } from '#lib/pixel.ts';
	import PixelSprite from './PixelSprite.svelte';

	type Corner = 'bl' | 'br' | 'tr' | 'tl';
	type Pose = 'hidden' | 'peek' | 'out';
	type Expr = 'smile' | 'happy' | 'scared' | 'wow';

	const RING: Corner[] = ['bl', 'br', 'tr', 'tl'];
	const XY: Record<Corner, [number, number]> = { bl: [0, 1], br: [1, 1], tr: [1, 0], tl: [0, 0] };

	// 24x24 blue merle Australian Shepherd, sitting, chibi proportions (big head, big eyes).
	// o outline, B merle, M darker merle patch, D speckle, W white, S paw shade,
	// T tan, P blush, N nose. Eyes, mouth and tail are drawn dynamically.
	const ART = [
		'........................',
		'........................',
		'...oo..............oo...',
		'..oMBo............oBMo..',
		'..oBBMo.oooooooo.oMBBo..',
		'..oMBMooDBBWWBDDooMBMo..',
		'...oooMMBBBWWBBMMMooo...',
		'....oMTMMBWWWWBMMTMo....',
		'...oBMMMMBWWWWBBMMMBo...',
		'..oBBBMMBBWWWWBBBBBBBo..',
		'..oMMBBBBBBBBBBBBBBMMo..',
		'..oMMBBBBBWWWWBBBBBBMo..',
		'...oMBBBWWWWWWWWBBBBo...',
		'...oPBBWWWWNNWWWWBBPo...',
		'....oBBWWWWWWWWWWBBo....',
		'.....oBWWWWWWWWWWBo.....',
		'......ooWWWWWWWWoo......',
		'......oWWWWWWWWWWo......',
		'.....oMWWWWWWWWWWMo.....',
		'.....oMMWWWWWWWWMMo.....',
		'.....oMBWWTWWTWWWBMo....',
		'.....oBWWWTooTWWWBo.....',
		'.....oSSSSSooSSSSSo.....',
		'.....oooooooooooooo.....'
	];

	const C = { o: '#262c40', B: '#9aaabf', M: '#6f7d95', D: '#4a5368', W: '#fbfaf6', S: '#dfe3ec', T: '#d9a066', P: '#ff9fb8', N: '#232838' };
	const EYE = '#1c2b57';
	const IRIS = '#58b6ff';
	const TONGUE = '#ff7aa2';
	const SPARK = '#ffffff';
	const base = toRects(ART, C);
	const rect = (x: number, y: number, w: number, h: number, c: string): Rect => ({ x, y, w, h, c });

	// tail, two wag frames, drawn behind the body on the right hand side
	const shift = (r: Rect): Rect => ({ ...r, x: r.x + 18, y: r.y + 15 });
	const TAIL = [
		toRects(['...oo', '..oWo', '..oBo', '.oBBo', '.oBo.', 'oBo..', 'oo...'], C).map(shift),
		toRects(['......', '......', '....oo', '..ooWWo', '.oBBBWo', 'oBBBoo.', 'ooo...'].map((r) => r.slice(0, 6)), C).map(shift)
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
	type Trail = { id: number; from: Corner; to: Corner; edge: Edge; dur: number; a: string; b: string };
	let trail = $state<Trail | null>(null);
	let spray = $state<{ id: number; corner: Corner } | null>(null);
	let reduced = $state(false);
	let winEl: HTMLButtonElement;

	const top = $derived(at === 'tl' || at === 'tr');

	const rects = $derived.by(() => {
		const out = [...TAIL[tailFrame], ...base];
		const lx = look.x, ly = look.y;
		for (const ex of [5, 15]) {
			if (blink) {
				out.push(rect(ex, 11, 4, 1, EYE));
			} else if (expr === 'happy') {
				// happy closed eyes: ^ ^
				out.push(rect(ex, 11, 1, 1, EYE), rect(ex + 1, 10, 2, 1, EYE), rect(ex + 3, 11, 1, 1, EYE));
			} else {
				// big round eye: dark rim, bright iris that looks where you look, glossy sparkle
				out.push(rect(ex + 1, 9, 2, 1, EYE), rect(ex, 10, 4, 2, EYE), rect(ex + 1, 12, 2, 1, EYE));
				if (expr === 'scared' || expr === 'wow') {
					out.push(rect(ex + 1, 10, 1, 1, SPARK));
				} else {
					const vertical = ly !== 0;
					const ix = vertical ? ex + 1 : ex + 1 + (lx < 0 ? -1 : lx > 0 ? 1 : 0);
					const iy = ly < 0 ? 9 : ly > 0 ? 11 : 10;
					out.push(rect(ix, iy, 2, 2, IRIS), rect(ix, iy, 1, 1, SPARK));
				}
			}
		}
		// mouth: little w-smile with a tongue peeking out
		if (expr === 'smile') out.push(rect(10, 14, 1, 1, C.N), rect(13, 14, 1, 1, C.N), rect(11, 15, 2, 1, C.N), rect(11, 16, 2, 1, TONGUE));
		else if (expr === 'happy') out.push(rect(10, 14, 4, 1, C.N), rect(11, 15, 2, 2, TONGUE));
		else out.push(rect(11, 14, 2, 2, C.N));
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
		const pool = quips[ui.section] ?? [];
		const from = pool.length && Math.random() < 0.6 ? pool : quips.general;
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

	const DIRT = ['#b98a55', '#8a5a2b', '#6b4423', '#5e3b1c'];
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
		return { id: Date.now(), from, to, edge, dur: horizontal ? 2200 : 1600, a: forward ? start : end, b: forward ? end : start };
	}

	function burst(corner: Corner) {
		const run = { id: Date.now() + Math.random(), corner };
		spray = run;
		setTimeout(() => spray === run && (spray = null), 1100);
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
				burst(at); // dirt flies as the hole we are leaving gets filled in
				await nap(450);
				trail = run;
				setTimeout(() => trail === run && (trail = null), run.dur + 650);
				await nap(run.dur);
				at = next;
				await tick();
				burst(at); // and again where we are about to pop up
				await nap(500);
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
		say(['Woof!', 'Whoa!', 'Too close!', 'Nope. Bye.'][Math.floor(Math.random() * 4)]);
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
			say('Okay, okay! Who is a good boy? Me. Take the confetti!');
			ui.confetti(winEl.getBoundingClientRect().left + 40, winEl.getBoundingClientRect().top);
			doDance();
			ui.toast(`You clicked Gandalf ${clicks} times. That's dedication. Hire Quique with it.`);
		} else say(clickLines[Math.min(clicks - 1, clickLines.length - 1)] ?? quip());
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

	// ----- tunnel: the ridge of earth the digger leaves behind, and the clods it flings
	const r = (a: number, b: number) => Math.round(a + Math.random() * (b - a));
	const clodVec = (edge: Edge, lateral: number, h: number) =>
		edge === 'b' ? [lateral, -h, lateral * 1.5, -2]
		: edge === 't' ? [lateral, h, lateral * 1.5, 2]
		: edge === 'l' ? [h, lateral, 2, lateral * 1.5]
		: [-h, lateral, -2, lateral * 1.5];

	const dots = $derived.by(() => {
		if (!trail) return [];
		const [fx, fy] = XY[trail.from];
		const [tx, ty] = XY[trail.to];
		const horizontal = fy === ty;
		const n = horizontal ? 22 : 14;
		const inset = horizontal ? INSET_X : INSET_Y;
		return Array.from({ length: n }, (_, i) => {
			const t = (i + 0.5) / n;
			const pos = horizontal ? fx + (tx - fx) * t : fy + (ty - fy) * t;
			const style = horizontal
				? `left: calc(${inset}px + ${pos} * (100% - ${2 * inset}px));`
				: `top: calc(${inset}px + ${pos} * (100% - ${2 * inset}px));`;
			const clods = Array.from({ length: 3 }, () => {
				const [x1, y1, x2, y2] = clodVec(trail!.edge, r(-18, 18), r(14, 34));
				return { v: `--x1:${x1}px;--y1:${y1}px;--x2:${x2}px;--y2:${y2}px;background:${DIRT[r(0, 3)]};--cd:${r(0, 120)}ms;`, s: r(0, 1) ? 4 : 6 };
			});
			return { i, edge: trail!.edge, style: `${style}--dl:${Math.round(t * trail!.dur * 0.92)}ms;`, clods };
		});
	});

	const SPRAY = Array.from({ length: 12 }, () => ({
		v: `--x1:${r(-54, 54)}px;--y1:${-r(26, 74)}px;--x2:${r(-80, 80)}px;--y2:-2px;background:${DIRT[r(0, 3)]};--cd:${r(0, 90)}ms;`,
		s: r(0, 1) ? 4 : 6
	}));

	// the digger: a tiny mound of earth with two merle ears sticking out of it
	const MOUND = toRects(
		['...DD....DD...', '..DDDo..oDDD..', '....llllll....', '...llllllll...', '..llmmmmmmll..', '.llmmmmmmmmll.', '.mmmmmmmmmmmm.', 'dddddddddddddd'],
		{ D: '#3b4254', o: '#1b2030', l: '#b98a55', m: '#8a5a2b', d: '#5e3b1c' }
	);

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

		const title = document.title;
		const vis = () => (document.title = document.hidden ? '(._.) come back, I’m lonely' : title);
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

<div class="trail" aria-hidden="true" style:--px="4px">
	{#if trail}
		{#key trail.id}
			<div class="digger {trail.edge}" style="--dur:{trail.dur}ms;--a:{trail.a};--b:{trail.b};--steps:{Math.round(trail.dur / 55)}">
				<span class="bob"><PixelSprite rects={MOUND} width={14} height={8} scale={2} /></span>
			</div>
			{#each dots as d}
				<span class="dot {d.edge}" style={d.style}>
					<i></i>
					{#each d.clods as c}<b class="clod" style="{c.v}width:{c.s}px;height:{c.s}px"></b>{/each}
				</span>
			{/each}
		{/key}
	{/if}
</div>

{#if spray}
	{#key spray.id}
		<div class="spray {spray.corner}" aria-hidden="true">
			{#each SPRAY as c}<b class="clod" style="{c.v}width:{c.s}px;height:{c.s}px"></b>{/each}
		</div>
	{/key}
{/if}

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
		aria-label="Gandalf, a blue merle Australian Shepherd. Click for a surprise."
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

	/* ------------------------------------------------ tunnel along the screen edges */
	.trail {
		inset: var(--nav-h) 0 0 0;
		z-index: 45;
	}

	/* the digger: a mound with ears, travelling along the edge */
	.digger {
		position: absolute;
		width: 0;
		height: 0;
		animation-duration: var(--dur);
		animation-timing-function: steps(var(--steps));
		animation-fill-mode: forwards;
	}
	.digger.b,
	.digger.t {
		animation-name: runX;
	}
	.digger.l,
	.digger.r {
		animation-name: runY;
	}
	.digger.b {
		bottom: 0;
		--n: 0 -2px;
	}
	.digger.t {
		top: 0;
		--n: 0 2px;
	}
	.digger.l {
		left: 0;
		--n: 2px 0;
	}
	.digger.r {
		right: 0;
		--n: -2px 0;
	}
	/* the digger sinks out of sight at the end of the run, it never lingers once Gandalf is out */
	@keyframes runX {
		from {
			left: var(--a);
			opacity: 1;
		}
		92% {
			opacity: 1;
		}
		to {
			left: var(--b);
			opacity: 0;
		}
	}
	@keyframes runY {
		from {
			top: var(--a);
			opacity: 1;
		}
		92% {
			opacity: 1;
		}
		to {
			top: var(--b);
			opacity: 0;
		}
	}
	.bob {
		position: absolute;
		animation: wob 0.28s steps(1) infinite;
	}
	.bob :global(svg) {
		position: absolute;
		left: 50%;
		top: 50%;
	}
	.digger.b .bob {
		left: -14px;
		bottom: 0;
		width: 28px;
		height: 16px;
	}
	.digger.t .bob {
		left: -14px;
		top: 0;
		width: 28px;
		height: 16px;
	}
	.digger.l .bob {
		left: 0;
		top: -14px;
		width: 16px;
		height: 28px;
	}
	.digger.r .bob {
		right: 0;
		top: -14px;
		width: 16px;
		height: 28px;
	}
	.digger.b .bob :global(svg) {
		transform: translate(-50%, -50%);
	}
	.digger.t .bob :global(svg) {
		transform: translate(-50%, -50%) rotate(180deg);
	}
	.digger.l .bob :global(svg) {
		transform: translate(-50%, -50%) rotate(90deg);
	}
	.digger.r .bob :global(svg) {
		transform: translate(-50%, -50%) rotate(-90deg);
	}
	@keyframes wob {
		50% {
			translate: var(--n);
		}
	}

	/* the ridge of earth left behind: pops up as the digger passes, then settles away */
	.dot {
		position: absolute;
		opacity: 0;
		animation: ridge 0.7s steps(7) both;
		animation-delay: var(--dl);
	}
	.dot i {
		position: absolute;
		display: block;
		width: 18px;
		height: 9px;
		left: 50%;
		top: 50%;
		background: linear-gradient(#a8794a 0 50%, #6e4624 50% 100%);
		clip-path: polygon(0 100%, 0 60%, 20% 60%, 20% 30%, 35% 30%, 35% 0, 65% 0, 65% 30%, 80% 30%, 80% 60%, 100% 60%, 100% 100%);
	}
	.dot.b {
		bottom: 0;
		width: 18px;
		height: 9px;
	}
	.dot.b i {
		transform: translate(-50%, -50%);
	}
	.dot.t {
		top: 0;
		width: 18px;
		height: 9px;
	}
	.dot.t i {
		transform: translate(-50%, -50%) rotate(180deg);
	}
	.dot.l {
		left: 0;
		width: 9px;
		height: 18px;
	}
	.dot.l i {
		transform: translate(-50%, -50%) rotate(90deg);
	}
	.dot.r {
		right: 0;
		width: 9px;
		height: 18px;
	}
	.dot.r i {
		transform: translate(-50%, -50%) rotate(-90deg);
	}
	@keyframes ridge {
		0% {
			opacity: 0;
		}
		12%,
		60% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}

	/* flying clods of dirt, used by the digger and by the hole sprays */
	.clod {
		position: absolute;
		left: 50%;
		top: 50%;
		opacity: 0;
		animation: fling 0.7s steps(8) both;
		animation-delay: calc(var(--dl, 0ms) + var(--cd, 0ms));
	}
	@keyframes fling {
		0% {
			opacity: 1;
			translate: 0 0;
		}
		50% {
			opacity: 1;
			translate: var(--x1) var(--y1);
		}
		100% {
			opacity: 0;
			translate: var(--x2) var(--y2);
		}
	}

	.spray {
		position: fixed;
		z-index: 61;
		pointer-events: none;
		width: calc(var(--px, 4px) * 24);
		height: 0;
		--px: 4px;
	}
	@media (max-width: 640px) {
		.spray {
			--px: 3px;
		}
	}
	.spray.bl {
		left: 22px;
		bottom: 0;
	}
	.spray.br {
		right: 22px;
		bottom: 0;
	}
	.spray.tl {
		left: 22px;
		top: var(--nav-h);
		transform: rotate(180deg);
	}
	.spray.tr {
		right: 22px;
		top: var(--nav-h);
		transform: rotate(180deg);
	}
	.spray .clod {
		top: 0;
		animation-duration: 1s;
	}
	@media print {
		.mascot,
		.trail {
			display: none;
		}
	}
</style>
