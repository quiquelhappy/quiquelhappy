<script lang="ts">
	import Nav from '#lib/components/Nav.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import About from '#lib/components/About.svelte';
	import Experience from '#lib/components/Experience.svelte';
	import Projects from '#lib/components/Projects.svelte';
	import Graveyard from '#lib/components/Graveyard.svelte';
	import RetroCorner from '#lib/components/RetroCorner.svelte';
	import Hire from '#lib/components/Hire.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import { L } from '#lib/i18n/index.svelte.ts';
</script>

<svelte:head>
	<title>{L.ui.meta.title}</title>
	<meta name="description" content={L.ui.meta.description} />
	<meta property="og:title" content={L.ui.meta.title} />
	<meta property="og:description" content={L.ui.meta.og} />
</svelte:head>

<Nav />
<main class="frame">
	<Hero />
	<About />
	<Experience />
	<Projects />
	<Graveyard />
	<RetroCorner />
	<Hire />
	<Footer />
</main>
