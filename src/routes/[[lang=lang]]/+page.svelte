<script lang="ts">
	import Nav from '#lib/components/Nav.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import About from '#lib/components/About.svelte';
	import Experience from '#lib/components/Experience.svelte';
	import Projects from '#lib/components/Projects.svelte';
	import RetroCorner from '#lib/components/RetroCorner.svelte';
	import Hire from '#lib/components/Hire.svelte';
	import Footer from '#lib/components/Footer.svelte';
</script>

<Nav />
<main class="frame">
	<Hero />
	<About />
	<Experience />
	<Projects />
	<RetroCorner />
	<Hire />
	<Footer />
</main>
