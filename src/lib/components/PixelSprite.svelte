<script lang="ts">
	import type { Rect } from '#lib/pixel.ts';

	let {
		rects,
		width,
		height,
		scale = 4,
		class: klass = '',
		title
	}: {
		rects: Rect[];
		width: number;
		height: number;
		scale?: number;
		class?: string;
		title?: string;
	} = $props();
</script>

<svg
	class={['pixel', klass]}
	viewBox="0 0 {width} {height}"
	width={width * scale}
	height={height * scale}
	shape-rendering="crispEdges"
	role={title ? 'img' : 'presentation'}
	aria-label={title}
	aria-hidden={title ? undefined : true}
>
	{#each rects as r}
		<rect x={r.x} y={r.y} width={r.w} height={r.h} style="fill:{r.c}" />
	{/each}
</svg>

<style>
	svg {
		display: inline-block;
		vertical-align: middle;
		flex: none;
		overflow: visible;
	}
</style>
