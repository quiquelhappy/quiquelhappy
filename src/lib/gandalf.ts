import { toRects, type Rect } from './pixel.ts';

// 24x24 blue merle Australian Shepherd, adult proportions, sitting.
// o outline, B merle, M darker merle patch, D speckle, W white, S paw shade, T tan, N nose.
// Eyes, mouth and tail are drawn on top of this (see the mascot), because they move.
export const GANDALF_ART = [
		'........................',
		'....oo............oo....',
		'...oMMo..........oMMo...',
		'..oMMMMooooooooooMMMMo..',
		'..oMMMMBBBBBBBBBBMMMMo..',
		'...oMMBBBDBWWBDBBBMMo...',
		'...oBBBBTBBWWBBTBBMBo...',
		'...oBMBBBBBWWBBDBBMBo...',
		'...oBMMBBBBWWBBBBMBBo...',
		'...oBBBBBBWWWWBBMBBBo...',
		'....oBBBBWWWWWWBBBBo....',
		'.....oBBWWWNNWWWBBo.....',
		'......oBWWWWWWWWBo......',
		'.......oWWWWWWWWo.......',
		'......oSMWWWWWWMSo......',
		'.....oMMMWWWWWWMMMo.....',
		'.....oMMBWWWWWWBMMo.....',
		'....oMDMBWWWWWWBMMMo....',
		'....oMMBBWWWWWWBBMMo....',
		'....oMBBTWWWWWWTBBMo....',
		'....oBBBTWWooWWTBBBo....',
		'....oDBBTWWooWWTBBBo....',
		'....oBSSSSSooSSSSSBo....',
		'.....oooooooooooooo.....'
];

export const GANDALF_COLORS = { o: '#262c40', B: '#9aaabf', M: '#6f7d95', D: '#4a5368', W: '#fbfaf6', S: '#dfe3ec', T: '#d9a066', N: '#232838' };
export const GANDALF_EYE = '#10131c';
export const GANDALF_TONGUE = '#ff7aa2';
export const GANDALF_SPARK = '#ffffff';

const r = (x: number, y: number, w: number, h: number, c: string): Rect => ({ x, y, w, h, c });

/** Gandalf with his eyes open, looking at you, with a small smile. For places that don't need him to move. */
export function gandalfPortrait(): Rect[] {
	const out = toRects(GANDALF_ART, GANDALF_COLORS);
	for (const ex of [7, 15]) out.push(r(ex, 7, 2, 3, GANDALF_EYE), r(ex, 7, 1, 1, GANDALF_SPARK));
	out.push(r(10, 12, 1, 1, GANDALF_COLORS.N), r(13, 12, 1, 1, GANDALF_COLORS.N), r(11, 13, 2, 1, GANDALF_COLORS.N));
	return out;
}
