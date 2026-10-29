<script lang="ts">
	import { EMAIL } from '#lib/data/site.ts';
	import { ui } from '#lib/state/ui.svelte.ts';
	import { L } from '#lib/i18n/index.svelte.ts';
	import Mosaic from './Mosaic.svelte';
	import Icon from './Icon.svelte';

	let from = $state('');
	let msg = $state('');
	let copied = $state(false);
	let sent = $state(false);

	function submit(e: Event) {
		e.preventDefault();
		const subject = encodeURIComponent(L.ui.hire.subject);
		const body = encodeURIComponent(`${msg || L.ui.hire.defaultBody}\n\n${from ? L.ui.hire.replyTo + from : ''}`);
		location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
		sent = true;
		ui.confetti();
		ui.toast(L.ui.hire.toastSent);
		ui.say(L.ui.hire.say);
	}

	async function copy() {
		try {
			await navigator.clipboard.writeText(EMAIL);
			copied = true;
			ui.toast(L.ui.hire.toastCopied);
			setTimeout(() => (copied = false), 1800);
		} catch {
			location.href = `mailto:${EMAIL}`;
		}
	}
</script>

<section id="hire" class="section" class:flash={ui.hireFlash > 0}>
	<Mosaic height={300} cell={110} density={1.25} seed={21} hint={L.ui.hire.mosaic} />
	<div class="split">
		<div class="l pad">
			<p class="eyebrow">{L.ui.hire.eyebrow}</p>
			<h2 class="h2">{L.ui.hire.h2}</h2>
			<p class="small">{L.ui.hire.small}</p>
			<p class="langs">{L.ui.hire.langs}</p>
		</div>
		<div class="r pad">
			<p class="lede">{L.ui.hire.ledeA}<b>{EMAIL}</b>{L.ui.hire.ledeB}</p>

			<form onsubmit={submit}>
				<label>
					<span class="sr-only">{L.ui.hire.emailLabel}</span>
					<input type="email" placeholder={L.ui.hire.emailPh} bind:value={from} autocomplete="email" />
				</label>
				<label>
					<span class="sr-only">{L.ui.hire.buildLabel}</span>
					<textarea rows="3" placeholder={L.ui.hire.buildPh} bind:value={msg}></textarea>
				</label>
				<div class="row">
					<button class="btn btn-primary btn-lg" type="submit">{sent ? L.ui.hire.sending : L.ui.hire.send} <Icon name="arrow" scale={2} /></button>
					<button class="btn btn-lg" type="button" onclick={copy}>
						<Icon name={copied ? 'check' : 'copy'} scale={2} />{copied ? L.ui.hire.copied : L.ui.hire.copy(EMAIL)}
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
	.langs {
		font-family: var(--font-mono);
		font-size: 13px;
		color: var(--green);
		font-weight: 600;
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
