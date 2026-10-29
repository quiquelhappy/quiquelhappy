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

/** Path of the page in a given language. English lives at the root. */
export const langPath = (code: LangCode) => (code === DEFAULT_LANG ? '/' : `/${code}`);

/** Best match from the browser's preferred languages. */
export function detectLang(preferred: readonly string[]): LangCode {
	for (const p of preferred) {
		const base = p.toLowerCase().split('-')[0];
		if (isLang(base)) return base;
	}
	return DEFAULT_LANG;
}
