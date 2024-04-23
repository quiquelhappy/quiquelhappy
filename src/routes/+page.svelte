<script>
	import { projects } from "$lib/data";
	import Snippet from "./Snippet.svelte";
	import { Button } from "$lib/components/ui/button";
	import { onMount } from "svelte";
	let email = "@osuna.dev";
	onMount(() => {
		setTimeout(() => {
			if (email.length != "@osuna.dev".length) return;
			email = "quique" + email;
		}, 10);
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="text-4xl text-center py-20">
	<span class="font-bold"> Enrique </span>
	Osuna García
	<div>
		<Button class="mt-7" variant="outline" href="mailto:{email}"
			>Contact Me</Button
		>
	</div>
</div>
<div class="max-w-md w-full mx-auto flex flex-col gap-5 mb-20 text-center">
	<div class="relative max-h-56 overflow-hidden">
		<div>
			<!-- svelte-ignore a11y-missing-attribute -->
			<img
				src="https://github-readme-stats.vercel.app/api/wakatime?username=quiquelhappy&hide_border=true&hide_title=true&theme=github_light&range=all_time"
			/>
		</div>
	</div>
	<span class="text-xs opacity-60">
		Since January {new Date().getFullYear()}
	</span>
</div>
<div class="max-w-2xl w-full mx-auto flex flex-col gap-10 mb-20">
	{#each projects as project, j}
		<div>
			<h1 class="font-bold text-xl">
				{project.name}
			</h1>
			<hr class="my-2" />
			<div class="grid grid-cols-3 gap-3">
				{#each project.snippets as snippet, i}
					<Snippet {snippet} i={i + j * 7} />
				{/each}
			</div>
		</div>
	{/each}
</div>
