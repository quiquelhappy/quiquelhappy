<script lang="ts">
	import { projects } from '#lib/data/projects.ts';
	import Icon from './Icon.svelte';
</script>

<section id="projects" class="section">
	<header class="head pad">
		<p class="eyebrow">Projects</p>
		<h2 class="h2">Things I made<br />because I had to.</h2>
		<p class="lede">Nothing off the shelf fit, so I built a store, a host, a package manager and an analytics engine.</p>
	</header>

	<div class="grid">
		{#each projects as p}
			<article style:--c="var(--{p.color})">
				<div class="preview" aria-hidden="true">
					<div class="panel">
						<header>
							<strong>{p.name}</strong>
							<span class="kind">{p.kind}</span>
						</header>
						<ul>
							{#each p.points as pt}
								<li><Icon name="check" scale={1.5} />{pt}</li>
							{/each}
						</ul>
					</div>
				</div>
				<div class="body pad">
					<h3>{p.name}</h3>
					<p class="blurb">{p.blurb}</p>
					<div class="stack">
						{#each p.stack as t}<span>{t}</span>{/each}
					</div>
					{#if p.url}
						<a class="btn" href={p.url} rel="noopener" target="_blank">Visit {p.url.replace('https://', '')} <Icon name="arrow" scale={2} /></a>
					{:else}
						<span class="btn ghost">No public site</span>
					{/if}
				</div>
			</article>
		{/each}
	</div>
</section>

<style>
	.head {
		padding-block: clamp(40px, 6vw, 80px) clamp(28px, 4vw, 48px);
		display: grid;
		gap: 22px;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		border-top: 1px solid var(--line);
	}
	article {
		display: flex;
		flex-direction: column;
		border-right: 1px solid var(--line);
		border-bottom: 1px solid var(--line);
	}
	article:nth-child(2n) {
		border-right: 0;
	}
	article:nth-last-child(-n + 2) {
		border-bottom: 0;
	}
	.preview {
		margin: clamp(20px, 3vw, 40px) var(--pad) 0;
		padding: 28px 0 0 28px;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		overflow: hidden;
		height: 240px;
		background:
			linear-gradient(var(--line) 1px, transparent 1px) 0 0 / 12px 12px,
			linear-gradient(90deg, var(--line) 1px, transparent 1px) 0 0 / 12px 12px,
			var(--bg-soft);
		transition: background-position 0.4s steps(6);
	}
	article:hover .preview {
		background-position: 12px 12px;
	}
	.panel {
		height: 100%;
		background: var(--bg);
		border: 1px solid var(--line);
		border-right: 0;
		border-bottom: 0;
		border-top: 4px solid var(--c);
		border-left: 4px solid var(--c);
		border-top-left-radius: var(--radius-sm);
		box-shadow: var(--shadow);
		transition: transform 0.25s steps(4);
	}
	article:hover .panel {
		transform: translate(-6px, -6px);
	}
	.panel header {
		padding: 14px 18px;
		border-bottom: 1px solid var(--line);
		display: flex;
		flex-direction: column;
		gap: 2px;
	}
	.panel header strong {
		font-size: 18px;
	}
	.kind {
		font-family: var(--font-mono);
		font-size: 11.5px;
		color: var(--ink-3);
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}
	.panel ul {
		list-style: none;
		margin: 0;
		padding: 8px 0;
	}
	.panel li {
		display: block;
		position: relative;
		padding: 7px 18px 7px 44px;
		font-size: 13.5px;
		color: var(--ink-2);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.panel li :global(svg) {
		position: absolute;
		left: 20px;
		top: 13px;
		color: var(--green-bright);
	}
	.body {
		padding-block: 26px 36px;
		display: grid;
		gap: 12px;
		align-content: start;
		flex: 1;
	}
	h3 {
		font-family: var(--font-pixel);
		font-size: 30px;
		font-weight: 600;
		line-height: 1.1;
	}
	.blurb {
		color: var(--ink-2);
		font-size: 16px;
	}
	.stack {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}
	.stack span {
		font-family: var(--font-mono);
		font-size: 11.5px;
		padding: 2px 8px;
		border: 1px solid var(--line-strong);
		border-radius: 4px;
	}
	.body .btn {
		width: fit-content;
		margin-top: 6px;
	}
	.ghost {
		opacity: 0.55;
		cursor: default;
		pointer-events: none;
	}
	@media (max-width: 900px) {
		.grid {
			grid-template-columns: minmax(0, 1fr);
		}
		article {
			border-right: 0;
			border-bottom: 1px solid var(--line) !important;
		}
		article:last-child {
			border-bottom: 0 !important;
		}
	}
	:global([data-era='y2k']) .panel {
		border: 2px solid #000066;
	}
	:global([data-era='y2k']) .preview {
		background: #ffffcc;
	}
</style>
