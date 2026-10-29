<script lang="ts">
	import { fly } from 'svelte/transition';
	import { ui } from '#lib/state/ui.svelte.ts';
</script>

<div class="toasts" role="status" aria-live="polite">
	{#each ui.toasts as t (t.id)}
		<div class="toast" in:fly={{ y: 16, duration: 220 }} out:fly={{ y: 8, duration: 160 }}>
			<span class="sq" aria-hidden="true"></span>{t.text}
		</div>
	{/each}
</div>

<style>
	.toasts {
		position: fixed;
		left: 50%;
		bottom: 22px;
		transform: translateX(-50%);
		z-index: 90;
		display: grid;
		gap: 8px;
		width: min(92vw, 460px);
		pointer-events: none;
	}
	.toast {
		display: flex;
		gap: 12px;
		align-items: center;
		background: var(--ink);
		color: var(--bg);
		padding: 12px 16px;
		font: 500 13.5px/1.4 var(--font-mono);
		border: 2px solid var(--ink);
		box-shadow: 4px 4px 0 var(--green-bright);
	}
	.sq {
		width: 10px;
		height: 10px;
		flex: none;
		background: var(--green-neon);
		animation: blink 1s steps(1) infinite;
	}
	:global([data-era='y2k']) .toast {
		background: #ffffcc;
		color: #000;
		border: 2px outset #fff;
		box-shadow: none;
		font-family: Verdana, sans-serif;
	}
</style>
