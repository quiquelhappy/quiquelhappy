import { toRects, sizeOf } from './pixel.ts';

// X = currentColor, a = accent, b = pink, c = blue
const art = {
	server: ['.XXXXXXX.', 'X.......X', 'X.a.....X', '.XXXXXXX.', 'X.......X', 'X.a.....X', '.XXXXXXX.', '...X.X...', '..XXXXX..'],
	cloud: ['...XXX.....', '..X...X.XX.', '.X.....X..X', 'X.........X', 'X.........X', '.XXXXXXXXX.'],
	window: ['XXXXXXXXXX', 'X........X', 'XXXXXXXXXX', 'X.aa.....X', 'X.aa.XXX.X', 'X........X', 'X.bbbbbb.X', 'X........X', 'XXXXXXXXXX'],
	cart: ['X.........', '.X........', '.XXXXXXXX.', '..X.....X.', '..X.aaa.X.', '..XXXXXXX.', '...X...X..', '..XX..XX..'],
	chart: ['X........', 'X......a.', 'X......a.', 'X..a...a.', 'X..a.a.a.', 'X..a.a.a.', 'X..a.a.a.', 'XXXXXXXXX'],
	shield: ['.XXXXXXX.', 'X...a...X', 'X..aaa..X', 'X.aaaaa.X', 'X..aaa..X', '.X..a..X.', '..X...X..', '...XXX...'],
	rocket: ['....XX...', '...XXXX..', '..XXaaXX.', '..XXaaXX.', '..XXXXXX.', '.XX.XX.XX', 'X...XX...', '....bb...', '...b..b..'],
	robot: ['....X....', '....X....', '.XXXXXXX.', 'X.......X', 'X.a...a.X', 'X.......X', 'X.XXXXX.X', '.XXXXXXX.'],
	heart: ['.XXX.XXX.', 'XaaaXaaaX', 'XaaaaaaaX', 'XaaaaaaaX', '.XaaaaaX.', '..XaaaX..', '...XaX...', '....X....'],
	box: ['XXXXXXXXX', 'X...a...X', 'XXXXXXXXX', 'X...a...X', 'X...a...X', 'X...a...X', 'X...a...X', 'XXXXXXXXX'],
	star: ['....X....', '....X....', '...XaX...', 'XXXXaXXXX', '.XaaaaaX.', '..XaaaX..', '..XaXaX..', '.XX...XX.'],
	trophy: ['XXXXXXXXX', 'X.aaaaa.X', 'XXaaaaaXX', '.XaaaaaX.', '..XaaaX..', '...XaX...', '....X....', '..XXXXX..', '.XXXXXXX.'],
	sun: ['....X....', '.X.....X.', '...aaa...', 'X.aaaaa.X', '..aaaaa..', 'X.aaaaa.X', '...aaa...', '.X.....X.', '....X....'],
	moon: ['...XXX...', '..XaaX...', '.XaaX....', '.XaaX....', '.XaaX....', '.XaaaXXX.', '..XaaaaaX', '...XXXXX.'],
	arrow: ['......X..', '.......X.', 'XXXXXXXXX', '.......X.', '......X..'],
	chevL: ['....X', '...X.', '..X..', '.X...', 'X....', '.X...', '..X..', '...X.', '....X'],
	chevR: ['X....', '.X...', '..X..', '...X.', '....X', '...X.', '..X..', '.X...', 'X....'],
	x: ['X.....X', '.X...X.', '..X.X..', '...X...', '..X.X..', '.X...X.', 'X.....X'],
	check: ['........X', '.......X.', 'X.....X..', '.X...X...', '..X.X....', '...X.....'],
	search: ['.XXXXX...', 'X.....X..', 'X.....X..', 'X.....X..', 'X.....X..', '.XXXXX...', '......XX.', '.......XX'],
	copy: ['XXXXXX...', 'X....X...', 'X..XXXXXX', 'X..X....X', 'X..X....X', 'XXXX....X', '...X....X', '...XXXXXX'],
	coffee: ['..X.X....', '...X.X...', '.XXXXXXX.', '.XaaaaaX.', '.XaaaaaXX', '.XaaaaaXX', '..XaaaX..', '...XXX...'],
	mail: ['XXXXXXXXX', 'XX.....XX', 'X.X...X.X', 'X..X.X..X', 'X...X...X', 'X.......X', 'XXXXXXXXX'],
	bolt: ['....XX.', '...XX..', '..XX...', '.XXXXX.', '...XX..', '..XX...', '.XX....'],
	pause: ['XX..XX', 'XX..XX', 'XX..XX', 'XX..XX', 'XX..XX', 'XX..XX', 'XX..XX'],
	home: ['....X....', '...XXX...', '..XXXXX..', '.XXXXXXX.', 'XXXXXXXXX', '.XX...XX.', '.XX.a.XX.', '.XX.a.XX.'],
	play: ['X.....', 'XX....', 'XXX...', 'XXXX..', 'XXXXX.', 'XXXX..', 'XXX...', 'XX....', 'X.....']
} satisfies Record<string, string[]>;

export type IconName = keyof typeof art;

const palette = {
	X: 'currentColor',
	a: 'var(--green-bright)',
	b: 'var(--pink)',
	c: 'var(--blue)'
};

export function icon(name: IconName) {
	const a = art[name];
	return { rects: toRects(a, palette), ...sizeOf(a) };
}
