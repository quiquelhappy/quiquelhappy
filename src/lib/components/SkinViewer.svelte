<script lang="ts">
	import { onMount } from 'svelte';
	import { SKIN } from '#lib/data/personal.ts';
	import { L } from '#lib/i18n/index.svelte.ts';
	import Icon from './Icon.svelte';

	type AnimId = 'idle' | 'walk' | 'run' | 'fly' | 'wave' | 'crouch' | 'hit' | 'swim';
	const ANIMS: AnimId[] = ['walk', 'run', 'idle', 'fly', 'wave', 'crouch', 'hit', 'swim'];

	let canvas: HTMLCanvasElement;
	let stage: HTMLDivElement;
	let status = $state<'loading' | 'ready' | 'failed'>('loading');
	let anim = $state<AnimId>('walk');
	let speed = $state(1);
	let rotate = $state(true);
	let paused = $state(false);

	// controls stay hidden until someone touches the viewer; until then (and after they go away again) it cycles on its own
	const CYCLE_MS = 4000;
	const CONTROLS_MS = 10000;
	let controls = $state(false);
	let hideTimer: ReturnType<typeof setTimeout> | undefined;
	let reduce = false;

	function touch() {
		controls = true;
		clearTimeout(hideTimer);
		hideTimer = setTimeout(() => (controls = false), CONTROLS_MS);
	}

	$effect(() => {
		if (controls || reduce || status !== 'ready') return;
		const t = setInterval(() => {
			if (document.hidden) return;
			anim = ANIMS[(ANIMS.indexOf(anim) + 1) % ANIMS.length];
		}, CYCLE_MS);
		return () => clearInterval(t);
	});

	// the viewer is loaded on demand, three.js is heavy and this section is far down the page
	let sv: typeof import('skinview3d') | undefined;
	let viewer: import('skinview3d').SkinViewer | undefined;

	function makeAnimation(id: AnimId) {
		if (!sv) return null;
		switch (id) {
			case 'idle': return new sv.IdleAnimation();
			case 'walk': return new sv.WalkingAnimation();
			case 'run': return new sv.RunningAnimation();
			case 'fly': return new sv.FlyingAnimation();
			case 'wave': return new sv.WaveAnimation('right');
			case 'crouch': return new sv.CrouchAnimation();
			case 'hit': return new sv.HitAnimation();
			case 'swim': return new sv.SwimAnimation();
		}
	}

	function applyAnimation() {
		if (!viewer) return;
		const a = makeAnimation(anim);
		if (!a) return;
		a.speed = speed;
		a.paused = paused;
		viewer.animation = a;
	}

	$effect(() => {
		anim; // switching animation builds a new one
		applyAnimation();
	});
	$effect(() => {
		if (viewer?.animation) viewer.animation.speed = speed;
	});
	$effect(() => {
		if (viewer?.animation) viewer.animation.paused = paused;
	});
	$effect(() => {
		if (viewer) viewer.autoRotate = rotate;
	});

	onMount(() => {
		reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduce) {
			anim = 'idle';
			rotate = false;
		}
		let ro: ResizeObserver | undefined;
		let dead = false;

		// start loading only when the section is about to be seen
		const io = new IntersectionObserver(
			async (es) => {
				if (!es[0].isIntersecting) return;
				io.disconnect();
				try {
					sv = await import('skinview3d');
					if (dead) return;
					const r = stage.getBoundingClientRect();
					viewer = new sv.SkinViewer({ canvas, width: Math.max(200, Math.round(r.width)), height: Math.max(260, Math.round(r.height)), skin: SKIN, enableControls: true });
					viewer.controls.enableZoom = false;
					viewer.controls.enablePan = false;
					viewer.zoom = 0.82;
					viewer.autoRotate = rotate;
					viewer.autoRotateSpeed = 1.2;
					applyAnimation();
					status = 'ready';
					ro = new ResizeObserver(() => {
						const b = stage.getBoundingClientRect();
						viewer?.setSize(Math.max(200, Math.round(b.width)), Math.max(260, Math.round(b.height)));
					});
					ro.observe(stage);
				} catch {
					status = 'failed';
				}
			},
			{ rootMargin: '300px' }
		);
		io.observe(stage);

		return () => {
			dead = true;
			clearTimeout(hideTimer);
			io.disconnect();
			ro?.disconnect();
			viewer?.dispose();
		};
	});
</script>

<section id="skin" class="section">
	<div class="split">
		<div class="stagewrap">
			<!-- svelte-ignore a11y_no_noninteractive_tabindex, a11y_no_noninteractive_element_interactions -->
			<div
					class="stage"
					bind:this={stage}
					role="application"
					tabindex="0"
					aria-label={L.ui.skin.aria}
					onpointerdown={touch}
					onkeydown={touch}
				>
				<canvas bind:this={canvas} class:ready={status === 'ready'}></canvas>
				{#if status === 'loading'}<p class="msg">{L.ui.skin.loading}</p>{/if}
				{#if status === 'failed'}<p class="msg">{L.ui.skin.fail}</p>{/if}
				{#if status === 'ready' && !controls}<span class="hint">{L.ui.skin.hint}</span>{/if}
			</div>
		</div>

		<div class="info pad">
			<p class="eyebrow">{L.ui.skin.eyebrow}</p>
			<h2 class="h2">{L.ui.skin.h2a}<br />{L.ui.skin.h2b}</h2>
			<p class="lede">{L.ui.skin.lede}</p>

			<div class="panel" class:open={controls} inert={!controls} onpointerdown={touch} onpointermove={touch} oninput={touch} onkeydown={touch} onfocusin={touch} role="presentation">
			<div class="ctl" role="group" aria-label={L.ui.skin.animLabel}>
				<p class="lab">{L.ui.skin.animLabel}</p>
				<div class="anims">
					{#each ANIMS as a}
						<button class="chip" aria-pressed={anim === a} onclick={() => (anim = a)}>{L.ui.skin.anims[a]}</button>
					{/each}
				</div>
			</div>

			<div class="row">
				<label class="speed">
					<span class="lab">{L.ui.skin.speed}</span>
					<input type="range" min="0.2" max="3" step="0.1" bind:value={speed} />
					<output>{speed.toFixed(1)}x</output>
				</label>
			</div>

			<div class="row btns">
				<button class="btn" onclick={() => (paused = !paused)} aria-pressed={paused}>
					<Icon name={paused ? 'play' : 'pause'} scale={2} />{paused ? L.ui.skin.play : L.ui.skin.pause}
				</button>
				<button class="btn" aria-pressed={rotate} onclick={() => (rotate = !rotate)}>{L.ui.skin.rotate}: {rotate ? 'on' : 'off'}</button>
				<button class="btn" onclick={() => viewer?.resetCameraPose()}>{L.ui.skin.reset}</button>
				<a class="btn btn-primary" href={SKIN} download="quique-minecraft-skin.png">{L.ui.skin.download} <Icon name="arrow" scale={2} /></a>
			</div>
			</div>
		</div>
	</div>
</section>

<style>
	.split {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		min-height: 520px;
	}
	.stagewrap {
		border-right: 1px solid var(--line);
		background:
			linear-gradient(var(--line) 1px, transparent 1px) 0 0 / 14px 14px,
			linear-gradient(90deg, var(--line) 1px, transparent 1px) 0 0 / 14px 14px,
			var(--bg-soft);
	}
	.stage {
		position: relative;
		height: 100%;
		min-height: 460px;
		overflow: hidden;
	}
	canvas {
		display: block;
		width: 100%;
		height: 100%;
		opacity: 0;
		transition: opacity 0.4s;
		cursor: grab;
		touch-action: pan-y;
	}
	canvas.ready {
		opacity: 1;
	}
	canvas:active {
		cursor: grabbing;
	}
	.msg {
		position: absolute;
		inset: 0;
		display: grid;
		place-items: center;
		margin: 0;
		padding: 24px;
		text-align: center;
		font-family: var(--font-mono);
		font-size: 13px;
		color: var(--ink-3);
	}
	.hint {
		position: absolute;
		left: 14px;
		bottom: 12px;
		font: 12px var(--font-mono);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		padding: 3px 8px;
		background: var(--bg);
		border: 1px solid var(--line);
		color: var(--ink-3);
		pointer-events: none;
	}
	.info {
		padding-block: clamp(40px, 6vw, 72px);
		display: grid;
		gap: 22px;
		align-content: center;
	}
	.panel {
		display: grid;
		gap: 22px;
		opacity: 0;
		transform: translateY(8px);
		transition: opacity 0.3s, transform 0.3s;
		pointer-events: none;
	}
	.panel.open {
		opacity: 1;
		transform: none;
		pointer-events: auto;
	}
	.lab {
		margin: 0 0 8px;
		font: 11.5px var(--font-mono);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--ink-3);
	}
	.anims {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}
	.speed {
		display: grid;
		grid-template-columns: auto minmax(120px, 260px) auto;
		align-items: center;
		gap: 14px;
	}
	.speed .lab {
		margin: 0;
	}
	.speed output {
		font: 600 13px var(--font-mono);
		min-width: 38px;
	}
	input[type='range'] {
		accent-color: var(--green-bright);
		width: 100%;
	}
	.btns {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}
	.btns .btn {
		height: 40px;
		font-size: 14px;
	}
	@media (max-width: 900px) {
		.split {
			grid-template-columns: minmax(0, 1fr);
		}
		.stagewrap {
			border-right: 0;
			border-bottom: 1px solid var(--line);
		}
		.stage {
			min-height: 380px;
			height: 380px;
		}
	}
	:global([data-era='y2k']) .stagewrap {
		background: #ffffcc;
	}
</style>
