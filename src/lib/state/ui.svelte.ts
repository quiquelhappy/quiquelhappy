import { browser } from '$app/env';

type Theme = 'light' | 'dark';
export type Toast = { id: number; text: string; icon?: string };
export type Cue = { id: number; kind: 'say' | 'dance' | 'summon'; text?: string };

const read = (key: string) => {
	try {
		return localStorage.getItem(key);
	} catch {
		return null;
	}
};
const write = (key: string, value: string) => {
	try {
		localStorage.setItem(key, value);
	} catch {
		/* private mode, ignore */
	}
};

let n = 0;

class UI {
	theme = $state<Theme>('light');
	y2k = $state(false);
	section = $state('top');
	paletteOpen = $state(false);
	toasts = $state<Toast[]>([]);
	cue = $state<Cue | null>(null);
	burst = $state<{ id: number; x: number; y: number } | null>(null);
	hireFlash = $state(0);
	ready = $state(false);

	init() {
		if (!browser) return;
		const saved = read('theme') as Theme | null;
		this.theme = saved ?? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
		this.y2k = read('y2k') === '1';
		this.ready = true;
	}

	apply() {
		if (!browser) return;
		const root = document.documentElement;
		root.dataset.theme = this.theme;
		root.dataset.era = this.y2k ? 'y2k' : 'now';
	}

	toggleTheme() {
		this.theme = this.theme === 'dark' ? 'light' : 'dark';
		write('theme', this.theme);
	}

	toggleY2k(announce = true) {
		this.y2k = !this.y2k;
		write('y2k', this.y2k ? '1' : '0');
		if (announce) {
			this.toast(this.y2k ? 'Welcome to the year 2000. Your modem is dialing...' : 'Back to the future. Welcome home.');
			this.say(this.y2k ? 'Whoa. Everything is beige now.' : 'Phew. Antialiasing!');
		}
	}

	toast(text: string, icon?: string) {
		const t = { id: ++n, text, icon };
		this.toasts = [...this.toasts.slice(-2), t];
		setTimeout(() => (this.toasts = this.toasts.filter((x) => x.id !== t.id)), 3800);
	}

	say(text: string) {
		this.cue = { id: ++n, kind: 'say', text };
	}
	dance() {
		this.cue = { id: ++n, kind: 'dance' };
	}
	summon(text?: string) {
		this.cue = { id: ++n, kind: 'summon', text };
	}

	confetti(x = innerWidth / 2, y = innerHeight / 3) {
		this.burst = { id: ++n, x, y };
	}

	flashHire() {
		this.hireFlash++;
	}

	go(id: string) {
		const el = document.getElementById(id);
		if (!el) return;
		const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
		el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
	}
}

export const ui = new UI();
