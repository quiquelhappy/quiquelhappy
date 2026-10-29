<script lang="ts">
	import { onMount } from 'svelte';
	import { EMAIL } from '#lib/data/site.ts';
	import { ui } from '#lib/state/ui.svelte.ts';

	let visitors = $state(1);
	let kind = $state<'any' | 'specific'>('any');
	let what = $state('A web platform');
	let when = $state('As soon as possible');
	let size = $state('Medium');

	const news = [
		'Save 40% on rewrites. Hire Quique before the legacy code finds you!',
		'New: zero-downtime deploys now available at participating terminals',
		'Get $50 or $100 cash back on your first bug fixed (not a real offer)',
		'Docker containers: Now with 30% more whale',
		'Experience big adventure in your own backlog'
	];

	onMount(() => {
		try {
			const n = Number(localStorage.getItem('visits') ?? '0') + 1;
			localStorage.setItem('visits', String(n));
			visitors = n;
		} catch {
			visitors = 1;
		}
	});

	function go(e: Event) {
		e.preventDefault();
		const subject = encodeURIComponent('Fast Hire Finder request');
		const body = encodeURIComponent(
			`Hi Quique,\n\nI used your Fast Hire Finder.\n\nProject type: ${what}\nStarting: ${when}\nSize: ${size}\nSearch mode: ${kind === 'any' ? 'any engineer' : 'specifically you'}\n\n`
		);
		location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
		ui.toast('Dialing... *screeeeeeee-kshhhhh*');
	}
</script>

<section id="retro" class="section">
	<div class="wrap">
		<div class="topbar">
			<b>Quique.osuna.dev</b>
			<span>A Happy Company</span>
			<span class="sp"></span>
			<label>
				<span class="sr-only">Site shortcuts</span>
				<select onchange={(e) => { const v = e.currentTarget.value; if (v) ui.go(v); e.currentTarget.selectedIndex = 0; }}>
					<option value="">Site Shortcuts</option>
					<option value="top">Home</option>
					<option value="about">About</option>
					<option value="experience">Experience</option>
					<option value="projects">Projects</option>
					<option value="hire">Hire me</option>
				</select>
			</label>
		</div>

		<div class="icons">
			<a href="#experience" onclick={(e) => (e.preventDefault(), ui.go('experience'))}>Skills</a>
			<a href="#projects" onclick={(e) => (e.preventDefault(), ui.go('projects'))}>Projects</a>
			<a href="#about" onclick={(e) => (e.preventDefault(), ui.go('about'))}>About</a>
			<a href="#hire" onclick={(e) => (e.preventDefault(), ui.go('hire'))}>Hire</a>
			<button class="bounce" onclick={() => ui.toggleY2k()}>{ui.y2k ? 'Back to 2026' : 'Go full 2000'}</button>
		</div>

		<div class="cols">
			<aside>
				<h4>Quick Links</h4>
				<p>
					<a href="#experience" onclick={(e) => (e.preventDefault(), ui.go('experience'))}>Experience</a><br />
					<a href="#projects" onclick={(e) => (e.preventDefault(), ui.go('projects'))}>Projects</a><br />
					<a href="https://github.com/quiquelhappy" rel="noopener">My GitHub</a>
				</p>
				<h4>Customer Service</h4>
				<p>
					<a href="mailto:{EMAIL}">Contact Quique 24/7</a><br />
					<small>(not literally 24/7, he sleeps)</small><br />
					<a href="mailto:{EMAIL}?subject=Security%20concern">Security Guarantee</a>
				</p>
				<h4>Member of</h4>
				<div class="badges">
					<span class="b88 b1">Made with<br />Svelte 5</span>
					<span class="b88 b2">Best viewed<br />800x600</span>
					<span class="b88 b3">Powered by<br />Docker</span>
					<span class="b88 b4">Valid HTML<br />4.01 (lol)</span>
				</div>
			</aside>

			<div class="main">
				<h4 class="bar">Fast Hire Finder</h4>
				<form onsubmit={go}>
					<p class="red">Show me the best engineer for:</p>
					<div class="row">
						<label><input type="radio" bind:group={kind} value="any" /> any engineer</label>
						<label><input type="radio" bind:group={kind} value="specific" /> specifically Quique</label>
					</div>
					<div class="row sel">
						<label>I need:
							<select bind:value={what}>
								<option>A web platform</option>
								<option>A hosting backend</option>
								<option>A package manager</option>
								<option>Mission-critical software</option>
								<option>Automation / robotics</option>
								<option>Something weird</option>
							</select>
						</label>
						<label>Starting:
							<select bind:value={when}>
								<option>As soon as possible</option>
								<option>Next month</option>
								<option>Next quarter</option>
								<option>When Y3K arrives</option>
							</select>
						</label>
						<label>Size:
							<select bind:value={size}>
								<option>Small</option>
								<option>Medium</option>
								<option>Large</option>
								<option>Moon-sized</option>
							</select>
						</label>
						<button class="go">Go!</button>
					</div>
				</form>

				<h4 class="bar">Deals &amp; News</h4>
				<ul class="news">
					{#each news as n}<li><a href="mailto:{EMAIL}">{n}</a></li>{/each}
				</ul>

				<h4 class="bar">Webmaster's Corner</h4>
				<div class="counter">
					<p>You are visitor number</p>
					<div class="digits" aria-label="Visitor count {visitors}">
						{#each String(visitors).padStart(6, '0') as d}<span>{d}</span>{/each}
					</div>
					<small>(counted only in your own browser, like a very small honest guestbook)</small>
				</div>
			</div>
		</div>

		<p class="fine">
			&copy; 2000&ndash;{new Date().getFullYear()} Quique. All rights reserved. No animated GIFs were harmed in the making of this
			section. <a href="mailto:{EMAIL}?subject=Guestbook">Sign my guestbook!</a>
		</p>
	</div>
</section>

<style>
	/* This section is always 2000s, in every theme. */
	.section {
		background: #e8e8f4;
		border-top: 1px solid var(--line);
		padding: clamp(24px, 4vw, 48px) var(--pad);
	}
	.wrap {
		max-width: 800px;
		margin-inline: auto;
		background: #fff;
		color: #000;
		font: 13px Verdana, Arial, sans-serif;
		border: 2px solid #000066;
		box-shadow: 6px 6px 0 #000066;
	}
	.wrap :global(a) {
		color: #0000cc;
		text-decoration: underline;
	}
	.topbar {
		display: flex;
		align-items: center;
		gap: 14px;
		padding: 8px 10px;
		background: #000066;
		color: #fff;
	}
	.topbar b {
		font: bold italic 20px Georgia, serif;
	}
	.topbar span {
		font-size: 11px;
	}
	.sp {
		flex: 1;
	}
	select {
		font: 12px Arial, sans-serif;
		border: 2px inset #aaa;
		background: #fff;
		color: #000;
		max-width: 100%;
	}
	.icons {
		display: flex;
		flex-wrap: wrap;
		gap: 4px 22px;
		justify-content: center;
		padding: 10px;
		border-bottom: 2px solid #000066;
		font: bold 13px Arial, sans-serif;
	}
	.bounce {
		font: bold 13px Arial, sans-serif;
		color: #cc0000;
		background: none;
		border: 0;
		cursor: pointer;
		text-decoration: underline;
		animation: bounce 0.9s steps(2) infinite;
	}
	@keyframes bounce {
		50% {
			transform: translateY(-3px);
		}
	}
	.cols {
		display: grid;
		grid-template-columns: 190px minmax(0, 1fr);
	}
	aside {
		padding: 10px;
		border-right: 2px solid #000066;
		background: #fffbe6;
	}
	h4 {
		margin: 8px 0 4px;
		background: #ffcc33;
		color: #000066;
		font: bold 12px Arial, sans-serif;
		padding: 2px 6px;
		border: 1px solid #cc9900;
	}
	aside p {
		margin: 4px 0 10px;
		line-height: 1.5;
	}
	small {
		font-size: 10px;
		color: #555;
	}
	.badges {
		display: grid;
		gap: 6px;
		margin-top: 6px;
	}
	.b88 {
		display: block;
		width: 88px;
		height: 31px;
		font: bold 8px/1.15 Arial, sans-serif;
		text-align: center;
		padding-top: 4px;
		border: 2px outset #fff;
		color: #fff;
	}
	.b1 {
		background: linear-gradient(#ff7a3c, #c43c00);
	}
	.b2 {
		background: linear-gradient(#444, #000);
		color: #0f0;
	}
	.b3 {
		background: linear-gradient(#3b9cff, #0050b3);
	}
	.b4 {
		background: linear-gradient(#999, #555);
	}
	.main {
		padding: 0 0 10px;
		min-width: 0;
	}
	.bar {
		margin: 0;
		background: #000066;
		color: #fff;
		border: 0;
		padding: 4px 8px;
		font-size: 13px;
	}
	form {
		background: #ffffcc;
		padding: 8px 10px 12px;
	}
	.red {
		color: #cc0000;
		font-weight: bold;
		margin: 0 0 6px;
	}
	.row {
		display: flex;
		flex-wrap: wrap;
		gap: 6px 16px;
		margin-bottom: 8px;
		align-items: center;
	}
	.row.sel {
		align-items: flex-end;
	}
	.row label {
		display: flex;
		align-items: center;
		gap: 4px;
	}
	.sel label {
		flex-direction: column;
		align-items: flex-start;
		font-size: 11px;
	}
	.go {
		font: bold italic 14px Arial, sans-serif;
		color: #fff;
		background: linear-gradient(#4da3ff, #0044cc);
		border: 1px solid #002266;
		border-radius: 999px;
		padding: 3px 22px;
		cursor: pointer;
	}
	.go:hover {
		filter: brightness(1.15);
	}
	.news {
		margin: 8px 12px;
		padding-left: 18px;
		line-height: 1.7;
	}
	.counter {
		text-align: center;
		padding: 10px;
		display: grid;
		gap: 6px;
		justify-items: center;
	}
	.counter p {
		margin: 0;
	}
	.digits {
		display: inline-flex;
		gap: 2px;
		background: #000;
		padding: 4px;
		border: 2px inset #888;
	}
	.digits span {
		font: bold 22px 'Courier New', monospace;
		color: #0f0;
		background: #111;
		padding: 0 5px;
		text-shadow: 0 0 6px #0f0;
	}
	.fine {
		margin: 0;
		padding: 8px 12px;
		text-align: center;
		font-size: 10.5px;
		color: #444;
		border-top: 2px solid #000066;
		background: #f4f4ff;
	}
	@media (max-width: 640px) {
		.cols {
			grid-template-columns: minmax(0, 1fr);
		}
		aside {
			border-right: 0;
			border-bottom: 2px solid #000066;
		}
		.topbar span:not(.sp) {
			display: none;
		}
	}
</style>
