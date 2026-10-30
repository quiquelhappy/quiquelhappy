<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { ui } from '#lib/state/ui.svelte.ts';
	import { L } from '#lib/i18n/index.svelte.ts';
	import { langPath } from '#lib/i18n/locales.ts';
	import { gandalfPortrait } from '#lib/gandalf.ts';
	import { toRects } from '#lib/pixel.ts';
	import Nav from './Nav.svelte';
	import Mosaic from './Mosaic.svelte';
	import PixelSprite from './PixelSprite.svelte';
	import Icon from './Icon.svelte';

	const DOG = gandalfPortrait();
	const LAPTOP = toRects(
		[
			'.oooooooooooooooooooooo.',
			'.oKggggKpppppppKKKKKKKo.',
			'.oKKKbbbbbbbbKgggggKKKo.',
			'.oKKKpppppKbbbbbbKKKKKo.',
			'.oKKKKKggggggggggKKKKKo.',
			'.oKKKbbbbKppppppppKKKKo.',
			'.oKggggggKbbbbKKKKKKKKo.',
			'.oKggKKKKKKKKKKKKKKKKKo.',
			'.oKKKKKKKKKKKKKKKKKKKKo.',
			'.oooooooooooooooooooooo.',
			'oooooooooooooooooooooooo',
			'oSSSSSSSSSSSSSSSSSSSSSSo',
			'oooooooooooooooooooooooo'
		],
		{ o: '#262c40', K: '#141a2b', g: '#26e04a', p: '#ff7ac6', b: '#7ccfff', S: '#aab4c8' }
	);

	let last = $state('');
	let doors: HTMLAnchorElement[] = [];

	const go = (rest: string, mode: string) => {
		ui.rememberMode(mode);
		goto(langPath(ui.lang, rest));
	};

	function onKey(e: KeyboardEvent) {
		if (e.metaKey || e.ctrlKey || e.altKey || ui.paletteOpen) return;
		const t = e.target as HTMLElement | null;
		if (t && (t.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(t.tagName))) return;
		if (e.key === '1') go('/personal', 'personal');
		else if (e.key === '2') go('/pro', 'pro');
		else if (e.key === 'ArrowLeft') doors[0]?.focus();
		else if (e.key === 'ArrowRight') doors[1]?.focus();
	}

	onMount(() => {
		ui.section = 'launcher';
		last = ui.savedMode() ?? '';
	});
</script>

<svelte:window onkeydown={onKey} />

<Nav mode="launcher" />

<main class="frame">
	<section id="top" class="intro pad">
		<p class="eyebrow">{L.ui.launcher.eyebrow}</p>
		<h1>{L.ui.launcher.h1a}<br /><span>{L.ui.launcher.h1b}</span></h1>
		<p class="lede">{L.ui.launcher.lede}</p>
	</section>

	<section class="doors" aria-label={L.ui.launcher.h1b}>
		<a class="door personal" href={langPath(ui.lang, '/personal')} bind:this={doors[0]} onclick={() => ui.rememberMode('personal')}>
			<div class="preview" aria-hidden="true">
				<span class="key">1</span>
				<div class="art"><PixelSprite rects={DOG} width={24} height={24} scale={5} /></div>
			</div>
			<div class="body">
				{#if last === 'personal'}<span class="last">{L.ui.launcher.last}</span>{/if}
				<h2>{L.ui.launcher.personalTitle}</h2>
				<p>{L.ui.launcher.personalText}</p>
				<span class="cta">{L.ui.launcher.personalCta} <Icon name="arrow" scale={2} /></span>
			</div>
		</a>

		<a class="door pro" href={langPath(ui.lang, '/pro')} bind:this={doors[1]} onclick={() => ui.rememberMode('pro')}>
			<div class="preview" aria-hidden="true">
				<span class="key">2</span>
				<div class="art"><PixelSprite rects={LAPTOP} width={24} height={13} scale={6} /></div>
			</div>
			<div class="body">
				{#if last === 'pro'}<span class="last">{L.ui.launcher.last}</span>{/if}
				<h2>{L.ui.launcher.proTitle}</h2>
				<p>{L.ui.launcher.proText}</p>
				<span class="cta">{L.ui.launcher.proCta} <Icon name="arrow" scale={2} /></span>
			</div>
		</a>
	</section>

	<p class="hint pad">{L.ui.launcher.hint} &middot; {L.ui.launcher.switchHint}</p>
	<Mosaic height={220} hint={L.ui.hero.mosaic} seed={11} />
	<footer class="pad">&copy; {new Date().getFullYear()} Enrique Osuna Garc&iacute;a</footer>
</main>

<style>
	.intro {
		padding-block: clamp(28px, 4.5vw, 52px) clamp(20px, 3vw, 32px);
		display: grid;
		gap: 16px;
	}
	h1 {
		font-family: var(--font-pixel);
		font-weight: 600;
		font-size: clamp(38px, 5.4vw, 68px);
		line-height: 1;
		letter-spacing: -0.02em;
	}
	h1 span {
		background: linear-gradient(transparent 62%, var(--green-neon) 62% 92%, transparent 92%);
		padding-inline: 2px;
	}
	:global([data-theme='dark']) h1 span {
		background: var(--green-neon);
		color: #04120a;
		padding: 0 10px;
	}
	.doors {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		border-top: 1px solid var(--line);
	}
	.door {
		--c: var(--green-bright);
		display: grid;
		grid-template-rows: auto 1fr;
		text-decoration: none;
		color: inherit;
		border-right: 1px solid var(--line);
		position: relative;
	}
	.door.personal {
		--c: var(--pink);
	}
	.door:last-child {
		border-right: 0;
	}
	.door:focus-visible {
		outline: 2px dashed var(--ink);
		outline-offset: -6px;
	}
	.preview {
		position: relative;
		margin: clamp(16px, 2.4vw, 28px) var(--pad) 0;
		height: 190px;
		display: grid;
		place-items: center;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background:
			linear-gradient(var(--line) 1px, transparent 1px) 0 0 / 12px 12px,
			linear-gradient(90deg, var(--line) 1px, transparent 1px) 0 0 / 12px 12px,
			var(--bg-soft);
		overflow: hidden;
		transition: background-position 0.4s steps(6);
	}
	.preview::after {
		content: '';
		position: absolute;
		inset: auto 0 0 0;
		height: 6px;
		background: var(--c);
	}
	.art {
		line-height: 0;
		filter: drop-shadow(0 6px 0 rgb(0 0 0 / 0.14));
		transition: transform 0.25s steps(4);
	}
	.door:hover .preview,
	.door:focus-visible .preview {
		background-position: 12px 12px;
	}
	.door:hover .art,
	.door:focus-visible .art {
		transform: translateY(-8px) rotate(-2deg);
	}
	.key {
		position: absolute;
		top: 12px;
		left: 12px;
		font: 700 12px var(--font-mono);
		border: 1px solid var(--line-strong);
		border-radius: 4px;
		padding: 1px 7px;
		background: var(--bg);
		color: var(--ink-2);
	}
	.body {
		position: relative;
		padding: 20px var(--pad) 32px;
		display: grid;
		gap: 10px;
		align-content: start;
	}
	h2 {
		font-family: var(--font-pixel);
		font-weight: 600;
		font-size: clamp(30px, 3.4vw, 42px);
		line-height: 1;
	}
	.body p {
		color: var(--ink-2);
		max-width: 44ch;
	}
	.cta {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		width: fit-content;
		margin-top: 6px;
		height: 46px;
		padding: 0 20px;
		font-weight: 600;
		border: 1px solid var(--line-strong);
		border-radius: var(--radius-sm);
		background: var(--bg-tile);
		transition: background 0.15s, color 0.15s, transform 0.08s steps(2);
	}
	.door:hover .cta,
	.door:focus-visible .cta {
		background: var(--c);
		border-color: transparent;
		color: #0a0f0b;
	}
	.door.pro:hover .cta,
	.door.pro:focus-visible .cta {
		color: var(--on-green);
	}
	.last {
		position: absolute;
		top: 8px;
		right: var(--pad);
		font: 600 11px var(--font-mono);
		letter-spacing: 0.06em;
		text-transform: uppercase;
		padding: 2px 8px;
		border: 1px solid var(--c);
		color: var(--ink);
		border-radius: 999px;
	}
	.hint {
		margin: 0;
		padding-block: 18px 22px;
		font-family: var(--font-mono);
		font-size: 12.5px;
		color: var(--ink-3);
		border-top: 1px solid var(--line);
	}
	footer {
		padding-block: 20px;
		border-top: 1px solid var(--line);
		font-size: 13.5px;
		color: var(--ink-3);
	}
	@media (max-width: 860px) {
		.doors {
			grid-template-columns: minmax(0, 1fr);
		}
		.door {
			border-right: 0;
			border-bottom: 1px solid var(--line);
		}
		.door:last-child {
			border-bottom: 0;
		}
		.preview {
			height: 220px;
		}
	}
	:global([data-era='y2k']) .preview {
		background: #ffffcc;
	}
	:global([data-era='y2k']) h1 {
		font: bold 36px 'Times New Roman', serif;
		color: #cc0000;
	}
	:global([data-era='y2k']) h2 {
		font: bold 20px Arial, sans-serif;
		color: #000066;
	}
</style>
