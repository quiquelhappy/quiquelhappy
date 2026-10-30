// Structure only. Captions and descriptions live in src/lib/i18n/<lang>.ts (content.photos, content.loves).
export type PhotoId = 'cruise' | 'sister' | 'gf' | 'bee';

export const photos: { id: PhotoId; src: string; w: number; h: number; tilt: number }[] = [
	{ id: 'cruise', src: '/personal/meonacruise.webp', w: 1148, h: 1600, tilt: -2 },
	{ id: 'sister', src: '/personal/mewithmysister.webp', w: 1200, h: 1600, tilt: 1.5 },
	{ id: 'gf', src: '/personal/meonawalkwithmygf.webp', w: 1600, h: 1200, tilt: -1 },
	{ id: 'bee', src: '/personal/abeeonmygarden.webp', w: 1200, h: 1600, tilt: 2.5 }
];

export type LoveId = 'sackboy' | 'tomb' | 'mindstorms' | 'crash';

export const loves: { id: LoveId; src: string; w: number; h: number; color: 'pink' | 'orange' | 'blue' | 'purple' | 'green' }[] = [
	{ id: 'sackboy', src: '/personal/sackboy.webp', w: 783, h: 1075, color: 'orange' },
	{ id: 'tomb', src: '/personal/tomb-raider.png', w: 298, h: 468, color: 'blue' },
	{ id: 'mindstorms', src: '/personal/lego-mindstorms.webp', w: 1300, h: 884, color: 'pink' },
	{ id: 'crash', src: '/personal/crashbandicoot.webp', w: 617, h: 1176, color: 'purple' }
];

export const SKIN = '/personal/minecraft-skin.png';
