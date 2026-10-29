<script lang="ts">
	import '../app.css';
	import favicon from '#lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import { ui } from '#lib/state/ui.svelte.ts';
	import Mascot from '#lib/components/Mascot.svelte';
	import Toasts from '#lib/components/Toasts.svelte';
	import Confetti from '#lib/components/Confetti.svelte';
	import Palette from '#lib/components/Palette.svelte';
	import Eggs from '#lib/components/Eggs.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	onMount(() => ui.init());
	$effect(() => {
		ui.theme;
		ui.y2k;
		ui.apply();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<Mascot />
<Toasts />
<Confetti />
<Palette />
<Eggs />
