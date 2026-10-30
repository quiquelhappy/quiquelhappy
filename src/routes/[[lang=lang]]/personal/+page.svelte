<script lang="ts">
	import Nav from '#lib/components/Nav.svelte';
	import PersonalHero from '#lib/components/PersonalHero.svelte';
	import Photos from '#lib/components/Photos.svelte';
	import Loves from '#lib/components/Loves.svelte';
	import Space from '#lib/components/Space.svelte';
	import SkinViewer from '#lib/components/SkinViewer.svelte';
	import TravelMap from '#lib/components/TravelMap.svelte';
	import PersonalFooter from '#lib/components/PersonalFooter.svelte';
	import { L } from '#lib/i18n/index.svelte.ts';
</script>

<svelte:head>
	<title>{L.ui.personal.meta.title}</title>
	<meta name="description" content={L.ui.personal.meta.description} />
	<meta property="og:title" content={L.ui.personal.meta.title} />
	<meta property="og:description" content={L.ui.personal.meta.og} />
</svelte:head>

<Nav mode="personal" />
<main class="frame">
	<PersonalHero />
	<Photos />
	<Loves />
	<Space />
	<SkinViewer />
	<TravelMap />
	<PersonalFooter />
</main>
