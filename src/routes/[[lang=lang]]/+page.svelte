<script lang="ts">
	import Launcher from '#lib/components/Launcher.svelte';
	import { L } from '#lib/i18n/index.svelte.ts';
</script>

<svelte:head>
	<title>{L.ui.launcher.meta.title}</title>
	<meta name="description" content={L.ui.launcher.meta.description} />
	<meta property="og:title" content={L.ui.launcher.meta.title} />
	<meta property="og:description" content={L.ui.launcher.meta.og} />
</svelte:head>

<Launcher />
