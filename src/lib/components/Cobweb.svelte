<script lang="ts">
	import { toRects } from '#lib/pixel.ts';
	import PixelSprite from './PixelSprite.svelte';

	// Pixel art cobwebs for the top left corner. flip mirrors them for the right hand side.
	const BIG = [
		'XXXXXXXXXXXXXXXXXXXXXXXXXX',
		'XXX...X.....XX....XX...XX.',
		'XX.XX.X....X.....X...XX...',
		'X.X..XXX..X....XX...X.....',
		'X.X.XXXXX.X...X...XX......',
		'X..XX....X.X..X..X........',
		'XXXXX.....XX...X..X.......',
		'XX.XX..XXXXXXX.X..X.......',
		'X...X..X......XXX..X......',
		'X....X.X........X...X.....',
		'X..X..XX..XXXXXXXXX..X....',
		'X.X.XXXX..X........XXX....',
		'X.X...XX..X.......XXXXX...',
		'XX.....X..X..XXXXX.....XX.',
		'X...X...X.X..X...........X',
		'X..X.XX.X.X..X............',
		'X..X...XXXX..X............',
		'X.X..X...XX..X............',
		'XX..X.XX..X..X............',
		'XX..X...X..X.X............',
		'X..X.....XXX.X............',
		'X..X.......XXX............',
		'X.X.........XX............',
		'XX...........X............',
		'XX...........X............',
		'X.............X...........'
	];
	const SMALL = [
		'XXXXXXXXXXXXXX',
		'XX...X...XX...',
		'X.X.X...X.....',
		'X..XX..X......',
		'X.XXX..X......',
		'XX...X.X......',
		'X.....X.X.....',
		'X..XXX.XX.....',
		'X.X...XXX.....',
		'X.X......X....',
		'XX........X...',
		'X..........X..',
		'X...........X.',
		'X............X'
	];
	const PALETTE = { X: 'currentColor' };
	const art = { big: toRects(BIG, PALETTE), small: toRects(SMALL, PALETTE) };

	let { size = 120, small = false, flip = false, class: klass = '' }: { size?: number; small?: boolean; flip?: boolean; class?: string } = $props();
	const n = $derived(small ? SMALL.length : BIG.length);
</script>

<span class={['web', klass]} class:flip>
	<PixelSprite rects={small ? art.small : art.big} width={n} height={n} scale={size / n} />
</span>

<style>
	.web {
		display: block;
		line-height: 0;
		pointer-events: none;
	}
	.web.flip {
		transform: scaleX(-1);
	}
</style>
