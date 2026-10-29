<script lang="ts">
	import { onMount } from 'svelte';
	import { EMAIL } from '#lib/data/site.ts';
	import { ui } from '#lib/state/ui.svelte.ts';
	import { L } from '#lib/i18n/index.svelte.ts';

	let visitors = $state(1);
	let kind = $state<'any' | 'specific'>('any');
	// indexes, not strings, so the choice survives a language switch
	let what = $state(0);
	let when = $state(0);
	let size = $state(1);

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
		const r = L.ui.retro;
		const subject = encodeURIComponent(r.mailSubject);
		const body = encodeURIComponent(r.mailBody(r.needs[what], r.whens[when], r.sizes[size], kind === 'any' ? r.modeAny : r.modeMe));
		location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
		ui.toast(r.toastDial);
	}
</script>

<section id="retro" class="section">
	<div class="wrap">
		<div class="topbar">
			<b>Quique.osuna.dev</b>
			<span>{L.ui.retro.company}</span>
			<span class="sp"></span>
			<label>
				<span class="sr-only">{L.ui.retro.shortcuts}</span>
				<select onchange={(e) => { const v = e.currentTarget.value; if (v) ui.go(v); e.currentTarget.selectedIndex = 0; }}>
					<option value="">{L.ui.retro.shortcuts}</option>
					<option value="top">{L.ui.retro.home}</option>
					<option value="about">{L.ui.nav.about}</option>
					<option value="experience">{L.ui.nav.experience}</option>
					<option value="projects">{L.ui.nav.projects}</option>
					<option value="hire">{L.ui.nav.hire}</option>
				</select>
			</label>
		</div>

		<div class="icons">
			<a href="#experience" onclick={(e) => (e.preventDefault(), ui.go('experience'))}>{L.ui.retro.skills}</a>
			<a href="#projects" onclick={(e) => (e.preventDefault(), ui.go('projects'))}>{L.ui.nav.projects}</a>
			<a href="#about" onclick={(e) => (e.preventDefault(), ui.go('about'))}>{L.ui.nav.about}</a>
			<a href="#hire" onclick={(e) => (e.preventDefault(), ui.go('hire'))}>{L.ui.retro.hireLink}</a>
			<button class="bounce" onclick={() => ui.toggleY2k()}>{ui.y2k ? L.ui.retro.back2026 : L.ui.retro.go2000}</button>
		</div>

		<div class="cols">
			<aside>
				<h4>{L.ui.retro.quickLinks}</h4>
				<p>
					<a href="#experience" onclick={(e) => (e.preventDefault(), ui.go('experience'))}>{L.ui.nav.experience}</a><br />
					<a href="#projects" onclick={(e) => (e.preventDefault(), ui.go('projects'))}>{L.ui.nav.projects}</a><br />
					<a href="https://github.com/quiquelhappy" rel="noopener">{L.ui.retro.myGithub}</a>
				</p>
				<h4>{L.ui.retro.service}</h4>
				<p>
					<a href="mailto:{EMAIL}">{L.ui.retro.contact247}</a><br />
					<small>{L.ui.retro.notReally}</small><br />
					<a href="mailto:{EMAIL}?subject=Security%20concern">{L.ui.retro.guarantee}</a>
				</p>
				<h4>{L.ui.retro.memberOf}</h4>
				<div class="badges">
					<span class="b88 b1">{L.ui.retro.b1}</span>
					<span class="b88 b2">{L.ui.retro.b2}</span>
					<span class="b88 b3">{L.ui.retro.b3}</span>
					<span class="b88 b4">{L.ui.retro.b4}</span>
				</div>
			</aside>

			<div class="main">
				<h4 class="bar">{L.ui.retro.finder}</h4>
				<form onsubmit={go}>
					<p class="red">{L.ui.retro.showMe}</p>
					<div class="row">
						<label><input type="radio" bind:group={kind} value="any" /> {L.ui.retro.anyEng}</label>
						<label><input type="radio" bind:group={kind} value="specific" /> {L.ui.retro.onlyMe}</label>
					</div>
					<div class="row sel">
						<label>{L.ui.retro.iNeed}
							<select bind:value={what}>
								{#each L.ui.retro.needs as n, i}<option value={i}>{n}</option>{/each}
							</select>
						</label>
						<label>{L.ui.retro.starting}
							<select bind:value={when}>
								{#each L.ui.retro.whens as n, i}<option value={i}>{n}</option>{/each}
							</select>
						</label>
						<label>{L.ui.retro.size}
							<select bind:value={size}>
								{#each L.ui.retro.sizes as n, i}<option value={i}>{n}</option>{/each}
							</select>
						</label>
						<button class="go">{L.ui.retro.go}</button>
					</div>
				</form>

				<h4 class="bar">{L.ui.retro.news}</h4>
				<ul class="news">
					{#each L.ui.retro.newsItems as n}<li><a href="mailto:{EMAIL}">{n}</a></li>{/each}
				</ul>

				<h4 class="bar">{L.ui.retro.corner}</h4>
				<div class="counter">
					<p>{L.ui.retro.visitor}</p>
					<div class="digits" aria-label="{L.ui.retro.visitor} {visitors}">
						{#each String(visitors).padStart(6, '0') as d}<span>{d}</span>{/each}
					</div>
					<small>{L.ui.retro.visitorNote}</small>
				</div>
			</div>
		</div>

		<p class="fine">
			&copy; 2000&ndash;{new Date().getFullYear()} Quique. {L.ui.retro.fineA}
			<a href="mailto:{EMAIL}?subject=Guestbook">{L.ui.retro.guestbook}</a>
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
		flex-wrap: wrap;
		align-items: center;
		gap: 6px 14px;
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
	.topbar label {
		min-width: 0;
		max-width: 100%;
	}
	select {
		min-width: 0;
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
