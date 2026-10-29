import { DEFAULT_LANG, isLang } from '#lib/i18n/locales.ts';

export const prerender = true;

export const load = ({ params }) => {
	const lang = isLang(params.lang) ? params.lang : DEFAULT_LANG;
	return { lang, explicit: Boolean(params.lang) };
};
