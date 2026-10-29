<script lang="ts">
	import { onMount } from 'svelte';
	import { EMAIL } from '#lib/data/site.ts';
	import { ui } from '#lib/state/ui.svelte.ts';
	import { L } from '#lib/i18n/index.svelte.ts';

	const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
	let seq: string[] = [];
	let typed = '';

	const words: Record<string, () => void> = {
		sudo() {
			ui.toast(L.ui.eggs.sudo1);
			setTimeout(() => ui.toast(L.ui.eggs.sudo2), 1600);
		},
		hire() {
			ui.go('hire');
			ui.confetti();
			setTimeout(() => ui.flashHire(), 700);
			ui.say(L.ui.eggs.hire);
		},
		gandalf() {
			ui.summon(L.ui.eggs.gandalf);
		},
		woof() {
			ui.summon(L.ui.eggs.woof);
			ui.dance();
		},
		y2k() {
			ui.toggleY2k();
		},
		happy() {
			ui.toast(L.ui.eggs.happy);
			ui.dance();
		},
		matrix() {
			ui.toast(L.ui.eggs.matrix);
		},
		rm() {
			ui.toast(L.ui.eggs.rm);
		}
	};

	function editable(t: EventTarget | null) {
		const el = t as HTMLElement | null;
		return !!el && (el.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(el.tagName));
	}

	function onKey(e: KeyboardEvent) {
		if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
			e.preventDefault();
			ui.paletteOpen = !ui.paletteOpen;
			return;
		}
		if (e.key === 'Escape' && ui.paletteOpen) return void (ui.paletteOpen = false);
		if (editable(e.target) || e.metaKey || e.ctrlKey || e.altKey) return;
		if (e.key === '/' && !ui.paletteOpen) {
			e.preventDefault();
			ui.paletteOpen = true;
			return;
		}

		const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
		seq = [...seq, k].slice(-KONAMI.length);
		if (seq.join() === KONAMI.join()) {
			seq = [];
			ui.confetti(innerWidth / 2, innerHeight / 2);
			setTimeout(() => ui.confetti(innerWidth * 0.25, innerHeight / 3), 250);
			setTimeout(() => ui.confetti(innerWidth * 0.75, innerHeight / 3), 500);
			ui.dance();
			ui.toast(L.ui.eggs.konami);
		}

		if (/^[a-z0-9]$/.test(k)) {
			typed = (typed + k).slice(-8);
			for (const w of Object.keys(words)) {
				if (typed.endsWith(w)) {
					typed = '';
					words[w]();
					break;
				}
			}
		}
	}

	onMount(() => {
		addEventListener('keydown', onKey);
		console.log(
			'%c\n  ___  _   _ ___ ___ _   _ ___\n / _ \\| | | |_ _/ _ \\ | | | __|\n| (_) | |_| || | (_) | |_| | _| \n \\__\\_\\\\___/|___\\__\\_\\\\___/|___|\n',
			'color:#16b93a;font-family:monospace;font-weight:bold'
		);
		console.log(
			`%cHey, you opened the console. I like you already.\n%cTry the Konami code, type "sudo", or hire me: ${EMAIL}`,
			'font-size:14px;font-weight:bold;color:#0f7c2b',
			'font-size:12px;color:#666'
		);
		return () => removeEventListener('keydown', onKey);
	});
</script>
