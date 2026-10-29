export type Rect = { x: number; y: number; w: number; h: number; c: string };

/** Turns an ASCII grid into SVG rects, merging horizontal runs of the same colour. */
export function toRects(art: string[], palette: Record<string, string>): Rect[] {
	const out: Rect[] = [];
	art.forEach((row, y) => {
		let x = 0;
		while (x < row.length) {
			const ch = row[x];
			if (ch === '.' || !palette[ch]) {
				x++;
				continue;
			}
			let w = 1;
			while (x + w < row.length && row[x + w] === ch) w++;
			out.push({ x, y, w, h: 1, c: palette[ch] });
			x += w;
		}
	});
	return out;
}

export function sizeOf(art: string[]) {
	return { w: Math.max(...art.map((r) => r.length)), h: art.length };
}
