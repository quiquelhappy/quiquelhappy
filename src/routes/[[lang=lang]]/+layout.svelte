<script lang="ts">
	import '../../app.css';
	import favicon from '#lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { ui } from '#lib/state/ui.svelte.ts';
	import { DEFAULT_LANG, detectLang, langPath } from '#lib/i18n/locales.ts';
	import { L } from '#lib/i18n/index.svelte.ts';
	import Mascot from '#lib/components/Mascot.svelte';
	import Toasts from '#lib/components/Toasts.svelte';
	import Confetti from '#lib/components/Confetti.svelte';
	import Palette from '#lib/components/Palette.svelte';
	import Eggs from '#lib/components/Eggs.svelte';
	import type { LayoutProps } from './$types';

	let { children, data }: LayoutProps = $props();

	// the URL decides the language. set it before first render so SSR and hydration agree.
	ui.lang = data.lang;
	$effect.pre(() => {
		ui.lang = data.lang;
	});

	onMount(() => {
		ui.init();
		if (data.explicit) {
			ui.rememberLang(data.lang);
		} else {
			// plain "/": follow the saved choice, else the browser language
			const saved = ui.savedLang();
			const pref = saved && saved !== DEFAULT_LANG ? (saved as typeof data.lang) : saved ? DEFAULT_LANG : detectLang(navigator.languages ?? [navigator.language]);
			if (pref !== DEFAULT_LANG) goto(langPath(pref) + location.hash, { replaceState: true, noScroll: true, keepFocus: true });
		}
	});
	$effect(() => {
		ui.theme;
		ui.y2k;
		ui.lang;
		ui.apply();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{L.ui.meta.title}</title>
	<meta name="description" content={L.ui.meta.description} />
	<meta property="og:title" content={L.ui.meta.title} />
	<meta property="og:description" content={L.ui.meta.og} />
	<meta property="og:locale" content={ui.lang} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
</svelte:head>

{@render children()}

<Mascot />
<Toasts />
<Confetti />
<Palette />
<Eggs />
