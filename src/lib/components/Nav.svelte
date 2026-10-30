<script lang="ts">
	import { onMount } from 'svelte';
	import { nav } from '#lib/data/site.ts';
	import { ui } from '#lib/state/ui.svelte.ts';
	import { L } from '#lib/i18n/index.svelte.ts';
	import Icon from './Icon.svelte';
	import LangSwitch from './LangSwitch.svelte';

	let clicks = 0;
	let timer: ReturnType<typeof setTimeout>;
	let scrolled = $state(false);
	const isMac = $derived(typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform));

	function logo(e: MouseEvent) {
		e.preventDefault();
		ui.go('top');
		clicks++;
		clearTimeout(timer);
		timer = setTimeout(() => (clicks = 0), 900);
		if (clicks >= 5) {
			clicks = 0;
			ui.toggleY2k();
			ui.confetti(e.clientX, e.clientY);
		}
	}

	onMount(() => {
		const io = new IntersectionObserver(
			(entries) => {
				for (const en of entries) if (en.isIntersecting) ui.section = en.target.id;
			},
			{ rootMargin: '-45% 0px -50% 0px' }
		);
		for (const id of [...nav.map((n) => n.id), 'graveyard', 'retro']) {
			const el = document.getElementById(id);
			if (el) io.observe(el);
		}
		const onScroll = () => (scrolled = scrollY > 8);
		onScroll();
		addEventListener('scroll', onScroll, { passive: true });
		return () => {
			io.disconnect();
			removeEventListener('scroll', onScroll);
		};
	});
</script>

<header class="nav" class:scrolled>
	<div class="bar">
		<a class="logo" href="#top" onclick={logo} aria-label={L.ui.nav.home}>
			<span class="mark" aria-hidden="true"></span>
			<span class="word">quique</span><span class="dot">.</span>
		</a>

		<nav aria-label={L.ui.nav.sections}>
			{#each nav.filter((n) => n.id !== 'hire') as n}
				<a href="#{n.id}" class:active={ui.section === n.id} onclick={(e) => (e.preventDefault(), ui.go(n.id))}>{L.ui.nav[n.id]}</a>
			{/each}
		</nav>

		<div class="tools">
			<button class="tool k" onclick={() => (ui.paletteOpen = true)} aria-label={L.ui.nav.palette}>
				<Icon name="search" scale={2} />
				<span class="kk"><kbd>{isMac ? '⌘' : 'Ctrl'}</kbd><kbd>K</kbd></span>
			</button>
			<button class="tool" onclick={() => ui.toggleTheme()} aria-label={L.ui.nav.dark} title={L.ui.nav.darkTitle}>
				<Icon name={ui.theme === 'dark' ? 'sun' : 'moon'} scale={2} />
			</button>
			<LangSwitch />
			<button class="tool y2k" aria-pressed={ui.y2k} onclick={() => ui.toggleY2k()} title={L.ui.nav.y2kTitle}>
				<span class="sw" aria-hidden="true"></span>Y2K
			</button>
			<a class="btn btn-primary hire" href="#hire" onclick={(e) => (e.preventDefault(), ui.go('hire'))}>{L.ui.nav.hire}</a>
		</div>
	</div>
</header>

<style>
	.nav {
		position: sticky;
		top: 0;
		z-index: 40;
		height: var(--nav-h);
		background: color-mix(in srgb, var(--bg) 88%, transparent);
		backdrop-filter: blur(10px);
		border-bottom: 1px solid var(--line);
	}
	.bar {
		max-width: var(--frame-w);
		height: 100%;
		margin-inline: auto;
		padding-inline: var(--pad);
		display: flex;
		align-items: center;
		gap: 24px;
		border-inline: 1px solid var(--line);
	}
	.logo {
		display: inline-flex;
		align-items: center;
		text-decoration: none;
		font-family: var(--font-pixel);
		font-weight: 700;
		font-size: 24px;
		letter-spacing: -0.02em;
		gap: 2px;
	}
	.mark {
		width: 14px;
		height: 14px;
		margin-right: 8px;
		background: var(--green-bright);
		box-shadow: 4px 4px 0 var(--pink), -0px 0 0 0 transparent;
		animation: bob 2.4s steps(2) infinite;
	}
	@keyframes bob {
		50% {
			transform: translateY(-2px);
		}
	}
	.dot {
		color: var(--green-bright);
	}
	nav {
		display: flex;
		gap: 4px;
		margin-left: 8px;
	}
	nav a {
		padding: 6px 12px;
		text-decoration: none;
		font-size: 15px;
		font-weight: 500;
		color: var(--ink-2);
		border-radius: var(--radius-sm);
		position: relative;
	}
	nav a:hover {
		color: var(--ink);
		background: var(--bg-tile);
	}
	nav a.active {
		color: var(--ink);
	}
	nav a.active::after {
		content: '';
		position: absolute;
		left: 12px;
		right: 12px;
		bottom: 0;
		height: 3px;
		background: var(--green-bright);
	}
	.tools {
		margin-left: auto;
		display: flex;
		align-items: center;
		gap: 8px;
	}
	.tool {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		height: 36px;
		padding: 0 10px;
		border: 1px solid var(--line);
		border-radius: var(--radius-sm);
		background: var(--bg);
		cursor: pointer;
		font-family: var(--font-mono);
		font-size: 12px;
		font-weight: 600;
	}
	.tool:hover {
		background: var(--bg-tile);
	}
	.kk {
		display: inline-flex;
		gap: 2px;
	}
	.y2k .sw {
		width: 22px;
		height: 12px;
		border: 1px solid var(--line-strong);
		background: var(--bg-tile);
		position: relative;
	}
	.y2k .sw::after {
		content: '';
		position: absolute;
		inset: 1px auto 1px 1px;
		width: 8px;
		background: var(--ink-3);
		transition: transform 0.2s steps(3);
	}
	.y2k[aria-pressed='true'] .sw::after {
		transform: translateX(10px);
		background: #ffcc33;
	}
	.hire {
		height: 36px;
		font-size: 14px;
		padding: 0 14px;
	}
	@media (max-width: 1040px) {
		nav,
		.k {
			display: none;
		}
	}
	@media (max-width: 520px) {
		.y2k {
			display: none;
		}
		.logo {
			font-size: 21px;
		}
		.tools {
			gap: 6px;
		}
	}
	/* longer translations ("Embauchez-moi") need the room: keep just the logo mark on phones */
	@media (max-width: 440px) {
		.word,
		.dot {
			display: none;
		}
		.bar {
			gap: 10px;
		}
		.hire {
			padding: 0 12px;
			font-size: 13px;
		}
	}
	:global([data-era='y2k']) .nav {
		background: #000066;
		border-bottom: 2px solid #ffcc33;
		backdrop-filter: none;
	}
	:global([data-era='y2k']) .bar,
	:global([data-era='y2k']) .logo,
	:global([data-era='y2k']) nav a,
	:global([data-era='y2k']) nav a:visited {
		color: #fff;
		border-color: transparent;
	}
	:global([data-era='y2k']) nav a:hover {
		background: #000099;
		color: #ffcc33;
	}
	:global([data-era='y2k']) nav a.active::after {
		background: #ffcc33;
	}
	:global([data-era='y2k']) .tool {
		background: #d4d0c8;
		color: #000;
		border: 2px outset #fff;
		border-radius: 0;
	}
</style>
