import type { Handle } from '@sveltejs/kit';
import { DEFAULT_LANG, isLang } from '#lib/i18n/locales.ts';

// Put the right <html lang> into every prerendered page.
export const handle: Handle = ({ event, resolve }) => {
	const lang = isLang(event.params.lang) ? event.params.lang : DEFAULT_LANG;
	return resolve(event, { transformPageChunk: ({ html }) => html.replace('%lang%', lang) });
};
