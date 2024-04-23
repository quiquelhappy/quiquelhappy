<script lang="ts">
    import Badge from "$lib/components/ui/badge/badge.svelte";
    import * as Card from "$lib/components/ui/card/index.js";
    import { ToolIcons, type Snippet, LanguageIcons } from "$lib/data";
    export let snippet: Snippet, i: number;
    const groupDelay = i * 150;
</script>

<Card.Root class="aspect-square relative overflow-hidden">
    <div class="relative p-3 text-sm text-justify">
        <p
            class="font-bold text-ellipsis overflow-hidden whitespace-nowrap"
        >
            {snippet.name}
        </p>
        <hr class="my-2"/>
        {#each snippet.description.split(" ") as word, i}
            <span
                style:animation-delay={`${i * 25 + groupDelay}ms`}
                class="unblurIn"
                >{word}
            </span>
        {/each}
    </div>
    <div
        class="w-full h-1/2 bg-gradient-to-b from-transparent to-white absolute bottom-0"
    >
        <div class="h-full relative">
            <div class="absolute bottom-0 w-full p-3">
                <div class="flex flex-row gap-1">
                    {#each Object.keys(snippet.techniques) as technique}
                        <Badge>
                            {technique}
                        </Badge>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</Card.Root>

<style>
    @keyframes fadeIn {
        from {
            filter: blur(50px);
            opacity: 0;
        }
        to {
            filter: blur(0px);
            opacity: 1;
        }
    }
    .unblurIn {
        animation-fill-mode: forwards;
        animation: fadeIn 0.5s forwards;
        opacity: 0;
    }
</style>
