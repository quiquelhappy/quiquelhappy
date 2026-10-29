<script lang="ts">
	import { EMAIL } from '#lib/data/site.ts';
	import { ui } from '#lib/state/ui.svelte.ts';
	import Mosaic from './Mosaic.svelte';
	import Icon from './Icon.svelte';

	let from = $state('');
	let msg = $state('');
	let copied = $state(false);
	let sent = $state(false);

	function submit(e: Event) {
		e.preventDefault();
		const subject = encodeURIComponent("Let's work together");
		const body = encodeURIComponent(`${msg || "Hi Quique, I'd like to talk about a project."}\n\n${from ? 'Reply to: ' + from : ''}`);
		location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
		sent = true;
		ui.confetti();
		ui.toast('Your mail app should be opening. If not, copy the address below.');
		ui.say('You did it! He will love this.');
	}

	async function copy() {
		try {
			await navigator.clipboard.writeText(EMAIL);
			copied = true;
			ui.toast('Copied! Paste it anywhere you like.');
			setTimeout(() => (copied = false), 1800);
		} catch {
			location.href = `mailto:${EMAIL}`;
		}
	}
</script>

<section id="hire" class="section" class:flash={ui.hireFlash > 0}>
	<Mosaic height={300} cell={110} density={1.25} seed={21} hint="every block is a project idea. pin yours." />
	<div class="split">
		<div class="l pad">
			<p class="eyebrow">Available for hire</p>
			<h2 class="h2">Got something hard to build? Let's talk.</h2>
			<p class="small">
				I'm open to new job offers. I like problems with sharp edges: distributed systems, hosting, developer tooling and
				software that has to be right the first time.
			</p>
		</div>
		<div class="r pad">
			<p class="lede">
				Tell me what you're building and what's in the way. A few lines is plenty. I read everything and I'll write back from
				<b>{EMAIL}</b>.
			</p>

			<form onsubmit={submit}>
				<label>
					<span class="sr-only">Your email</span>
					<input type="email" placeholder="your@email.com" bind:value={from} autocomplete="email" />
				</label>
				<label>
					<span class="sr-only">What are we building?</span>
					<textarea rows="3" placeholder="What are we building?" bind:value={msg}></textarea>
				</label>
				<div class="row">
					<button class="btn btn-primary btn-lg" type="submit">{sent ? 'Opening mail...' : 'Email Quique'} <Icon name="arrow" scale={2} /></button>
					<button class="btn btn-lg" type="button" onclick={copy}>
						<Icon name={copied ? 'check' : 'copy'} scale={2} />{copied ? 'Copied' : 'Copy ' + EMAIL}
					</button>
				</div>
			</form>
		</div>
	</div>
</section>

<style>
	.split {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		border-top: 1px solid var(--line);
	}
	.l {
		padding-block: clamp(40px, 6vw, 80px);
		display: grid;
		gap: 28px;
		align-content: start;
	}
	.r {
		border-left: 1px solid var(--line);
		padding-block: clamp(40px, 6vw, 80px);
		display: grid;
		gap: 26px;
		align-content: start;
	}
	.small {
		color: var(--ink-2);
		max-width: 46ch;
	}
	.lede b {
		color: var(--ink);
		font-family: var(--font-mono);
		font-size: 0.9em;
	}
	form {
		display: grid;
		gap: 12px;
	}
	input,
	textarea {
		width: 100%;
		font: inherit;
		font-size: 16px;
		padding: 13px 14px;
		border: 1px solid var(--line-strong);
		border-radius: var(--radius-sm);
		background: var(--bg-tile);
		color: var(--ink);
		resize: vertical;
	}
	input:focus,
	textarea:focus {
		outline: 2px solid var(--green-bright);
		outline-offset: 0;
		background: var(--bg);
	}
	.row {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
	}
	.flash {
		animation: glow 0.6s steps(2) 4;
	}
	@keyframes glow {
		50% {
			background: var(--green-wash);
		}
	}
	@media (max-width: 860px) {
		.split {
			grid-template-columns: minmax(0, 1fr);
		}
		.r {
			border-left: 0;
			border-top: 1px solid var(--line);
		}
	}
</style>
