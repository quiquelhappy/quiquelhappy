<script lang="ts">
	import { L } from '#lib/i18n/index.svelte.ts';
	import Icon from './Icon.svelte';

	let paused = $state(false);
</script>

<div class="strip" aria-label={L.ui.marquee.aria}>
	<div class="track" class:paused>
		{#each [0, 1] as copy}
			<ul aria-hidden={copy === 1}>
				{#each L.content.marquee as item}
					<li>{item}</li>
				{/each}
			</ul>
		{/each}
	</div>
	<button class="pause" onclick={() => (paused = !paused)} aria-label={paused ? L.ui.marquee.play : L.ui.marquee.pause}>
		<Icon name={paused ? 'play' : 'pause'} scale={2} />
	</button>
</div>

<style>
	.strip {
		position: relative;
		overflow: hidden;
		border-top: 1px solid var(--line);
		height: 96px;
		display: flex;
		align-items: center;
	}
	.strip::before,
	.strip::after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		width: 90px;
		z-index: 1;
		pointer-events: none;
	}
	.strip::before {
		left: 0;
		background: linear-gradient(90deg, var(--bg), transparent);
	}
	.strip::after {
		right: 0;
		background: linear-gradient(270deg, var(--bg), transparent);
	}
	.track {
		display: flex;
		width: max-content;
		animation: slide 38s linear infinite;
	}
	.track.paused {
		animation-play-state: paused;
	}
	ul {
		display: flex;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	li {
		font-family: var(--font-pixel);
		font-size: 28px;
		font-weight: 600;
		white-space: nowrap;
		padding-inline: 28px;
		color: var(--ink-2);
		display: flex;
		align-items: center;
		gap: 56px;
	}
	li::after {
		content: '';
		width: 10px;
		height: 10px;
		background: var(--green-bright);
	}
	li:nth-child(3n + 1)::after {
		background: var(--pink);
	}
	li:nth-child(3n + 2)::after {
		background: var(--blue);
	}
	@keyframes slide {
		to {
			transform: translateX(-50%);
		}
	}
	.pause {
		position: absolute;
		right: 18px;
		z-index: 2;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		border: 1px solid var(--line-strong);
		background: var(--bg);
		cursor: pointer;
		display: grid;
		place-items: center;
	}
	.pause:hover {
		background: var(--bg-tile);
	}
	:global([data-era='y2k']) .strip {
		background: #ffffcc;
		border-block: 2px solid #000066;
		height: 40px;
	}
	:global([data-era='y2k']) li {
		font: bold 14px Arial, sans-serif;
		color: #cc0000;
	}
	:global([data-era='y2k']) .strip::before,
	:global([data-era='y2k']) .strip::after {
		display: none;
	}
</style>
