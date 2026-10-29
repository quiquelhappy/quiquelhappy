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

<svelte:head>
	<title>Quique Osuna | Software engineer, open to hire</title>
	<meta
		name="description"
		content="Quique (Happy) builds software that has to work: aerospace, robotics, health, hosting, commerce and developer tooling. Coding since age 9, based near Barcelona, open to new work."
	/>
	<meta property="og:title" content="Quique Osuna | Software engineer, open to hire" />
	<meta property="og:description" content="Software for space, robots and the internet's weirder corners. Open to new work: quique@osuna.dev" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
</svelte:head>

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
