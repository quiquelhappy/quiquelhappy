import { ui } from '#lib/state/ui.svelte.ts';
import { all } from './all.ts';

/**
 * Reactive access to the current language: `L.ui.hero.cta`, `L.content.quips`.
 * Reading it inside a template or $derived re-runs when the language changes.
 */
export const L = {
	get ui() {
		return all[ui.lang].ui;
	},
	get content() {
		return all[ui.lang].content;
	}
};
