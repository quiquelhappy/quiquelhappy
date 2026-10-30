<script lang="ts">
	import '../../app.css';
	import favicon from '#lib/assets/favicon.svg';
	import { onMount, untrack } from 'svelte';
	import { goto } from '$app/navigation';
	import { ui } from '#lib/state/ui.svelte.ts';
	import { page } from '$app/state';
	import { DEFAULT_LANG, detectLang, isLang, langPath, splitPath } from '#lib/i18n/locales.ts';
	import Mascot from '#lib/components/Mascot.svelte';
	import Toasts from '#lib/components/Toasts.svelte';
	import Confetti from '#lib/components/Confetti.svelte';
	import Palette from '#lib/components/Palette.svelte';
	import Eggs from '#lib/components/Eggs.svelte';
	import type { LayoutProps } from './$types';

	let { children, data }: LayoutProps = $props();

	// the URL decides the language. set it before first render so SSR and hydration agree.
	ui.lang = untrack(() => data.lang);
	$effect.pre(() => {
		ui.lang = data.lang;
	});

	onMount(() => {
		ui.init();
		if (data.explicit) {
			ui.rememberLang(data.lang);
		} else {
			// no language in the URL: follow the saved choice, else the browser language, and keep the page (/pro, /personal)
			const saved = ui.savedLang();
			const pref = isLang(saved) ? saved : detectLang(navigator.languages ?? [navigator.language]);
			if (pref !== DEFAULT_LANG) goto(langPath(pref, splitPath(page.url.pathname).rest) + location.hash, { replace: true, reset: false });
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
