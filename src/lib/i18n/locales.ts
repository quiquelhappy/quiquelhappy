export type LangCode = 'en' | 'es' | 'ca' | 'de' | 'fr';

/** The languages I speak. Names are written in the language itself. */
export const LANGS: { code: LangCode; native: string; hello: string }[] = [
	{ code: 'en', native: 'English', hello: 'Hello' },
	{ code: 'es', native: 'Español', hello: 'Hola' },
	{ code: 'ca', native: 'Català', hello: 'Hola' },
	{ code: 'de', native: 'Deutsch', hello: 'Hallo' },
	{ code: 'fr', native: 'Français', hello: 'Bonjour' }
];

export const DEFAULT_LANG: LangCode = 'en';
export const isLang = (v: unknown): v is LangCode => LANGS.some((l) => l.code === v);

/** Path of a page in a given language. English lives at the root: langPath('es', '/pro') is /es/pro, langPath('en', '/pro') is /pro. */
export const langPath = (code: LangCode, rest = '') => {
	const r = rest === '/' ? '' : rest;
	return code === DEFAULT_LANG ? r || '/' : `/${code}${r}`;
};

export type Mode = 'launcher' | 'pro' | 'personal';

/** Splits "/es/pro" into the language and the rest: { lang: 'es', rest: '/pro' }. */
export function splitPath(pathname: string): { lang: LangCode; rest: string; mode: Mode } {
	const m = pathname.match(/^\/(es|ca|de|fr)(?=\/|$)/);
	const lang = (m ? m[1] : DEFAULT_LANG) as LangCode;
	const rest = (m ? pathname.slice(m[0].length) : pathname).replace(/\/+$/, '');
	const mode: Mode = rest.startsWith('/pro') ? 'pro' : rest.startsWith('/personal') ? 'personal' : 'launcher';
	return { lang, rest, mode };
}

/** Best match from the browser's preferred languages. */
export function detectLang(preferred: readonly string[]): LangCode {
	for (const p of preferred) {
		const base = p.toLowerCase().split('-')[0];
		if (isLang(base)) return base;
	}
	return DEFAULT_LANG;
}
