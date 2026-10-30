export const EMAIL = 'quique@osuna.dev';
export const GITHUB = 'https://github.com/quiquelhappy';
export const COFFEE = 'https://www.buymeacoffee.com/happy';

/** Section ids. Labels come from the dictionary (ui.nav). */
export const nav = [{ id: 'top' }, { id: 'about' }, { id: 'experience' }, { id: 'projects' }, { id: 'hire' }] as const;

/** Sections of the personal page. Labels come from the dictionary (ui.pnav). */
export const pnav = [{ id: 'top' }, { id: 'me' }, { id: 'loves' }, { id: 'skin' }, { id: 'map' }] as const;

/** Coding since April 26th, 2010. ChatGPT launched on November 30th, 2022. */
export const CODING_SINCE = new Date(2010, 3, 26);
export const CHATGPT_LAUNCH = new Date(2022, 10, 30);

export function fullYears(from: Date, to: Date = new Date()) {
	let y = to.getFullYear() - from.getFullYear();
	const beforeAnniversary = to.getMonth() < from.getMonth() || (to.getMonth() === from.getMonth() && to.getDate() < from.getDate());
	if (beforeAnniversary) y--;
	return y;
}

export const yearsCoding = (now: Date = new Date()) => fullYears(CODING_SINCE, now);
/** Years of experience before ChatGPT existed (a constant: 12). */
export const yearsBC = fullYears(CODING_SINCE, CHATGPT_LAUNCH);

/** Icon and tag per achievement. Titles and texts live in the dictionary, in the same order. */
export const achievements = [
	{ icon: 'cart', tag: 'serverbench' },
	{ icon: 'cloud', tag: 'serverbench' },
	{ icon: 'box', tag: 'grifpkg' },
	{ icon: 'shield', tag: 'serverbench' },
	{ icon: 'rocket', tag: 'aerospace' },
	{ icon: 'heart', tag: 'health' },
	{ icon: 'trophy', tag: 'education' },
	{ icon: 'star', tag: 'life' }
] as const;
