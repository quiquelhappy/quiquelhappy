<script lang="ts">
	import { icon, type IconName } from '#lib/icons.ts';
	import PixelSprite from './PixelSprite.svelte';

	let { name, scale = 2, class: klass = '' }: { name: IconName; scale?: number; class?: string } = $props();
	const i = $derived(icon(name));
</script>

<PixelSprite rects={i.rects} width={i.w} height={i.h} {scale} class={klass} />
