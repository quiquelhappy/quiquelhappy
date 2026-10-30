<script lang="ts">
	import { loves } from '#lib/data/personal.ts';
	import { L } from '#lib/i18n/index.svelte.ts';
</script>

<section id="loves" class="section">
	<header class="pad">
		<p class="eyebrow">{L.ui.loves.eyebrow}</p>
		<h2 class="h2">{L.ui.loves.h2a}<br />{L.ui.loves.h2b}</h2>
		<p class="lede">{L.ui.loves.lede}</p>
	</header>

	<div class="grid">
		{#each loves as l}
			{@const t = L.content.loves[l.id]}
			<article style:--c="var(--{l.color})">
				<div class="preview">
					<img src={l.src} width={l.w} height={l.h} alt={t.name} loading="lazy" decoding="async" />
				</div>
				<div class="body pad">
					<h3>{t.name}</h3>
					<p class="tag">{t.tag}</p>
					<p class="text">{t.text}</p>
				</div>
			</article>
		{/each}
	</div>
</section>

<style>
	header {
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
	article:last-child,
	article:nth-last-child(2):nth-child(odd) {
		border-bottom: 0;
	}
	.preview {
		margin: clamp(20px, 3vw, 40px) var(--pad) 0;
		height: 290px;
		display: block;
		padding: 18px;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		border-bottom: 5px solid var(--c);
		overflow: hidden;
		background:
			linear-gradient(var(--line) 1px, transparent 1px) 0 0 / 12px 12px,
			linear-gradient(90deg, var(--line) 1px, transparent 1px) 0 0 / 12px 12px,
			var(--bg-soft);
		transition: background-position 0.4s steps(6);
	}
	article:hover .preview {
		background-position: 12px 12px;
	}
	img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: contain;
		filter: drop-shadow(0 6px 0 rgb(0 0 0 / 0.16));
		transition: transform 0.25s steps(4);
	}
	article:hover img {
		transform: translateY(-8px) rotate(-3deg) scale(1.03);
	}
	.body {
		padding-block: 24px 36px;
		display: grid;
		gap: 8px;
		align-content: start;
	}
	h3 {
		font-family: var(--font-pixel);
		font-weight: 600;
		font-size: 30px;
		line-height: 1.1;
	}
	.tag {
		margin: 0;
		font-family: var(--font-mono);
		font-size: 12px;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--ink-3);
	}
	.text {
		margin: 4px 0 0;
		color: var(--ink-2);
		max-width: 52ch;
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
	:global([data-era='y2k']) .preview {
		background: #ffffcc;
	}
</style>
