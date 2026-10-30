<script lang="ts">
	import { flip } from 'svelte/animate';
	import { fade, slide } from 'svelte/transition';
	import { SvelteSet } from 'svelte/reactivity';
	import { areas as rawAreas, contexts, entries as rawEntries, techGroups, type AreaId, type Context, type Entry } from '#lib/data/experience.ts';
	import { L } from '#lib/i18n/index.svelte.ts';
	import { ui } from '#lib/state/ui.svelte.ts';
	import Icon from './Icon.svelte';
	import type { IconName } from '#lib/icons.ts';

	let q = $state('');
	let area = $state<AreaId | 'all'>('all');
	const ctxs = new SvelteSet<Context>();
	const techs = new SvelteSet<string>();
	let mode = $state<'any' | 'all'>('any');
	const open = new SvelteSet<string>();
	let mobileFilters = $state(false);
	let contentEl = $state<HTMLElement>();
	let finderEl = $state<HTMLElement>();
	// height of the full, collapsed list. filtering never shrinks the page below it, so the view stays put
	let baseline = $state(0);

	// text comes from the current language, structure (area, stack, context) from the data file
	const areas = $derived(rawAreas.map((a) => ({ ...a, ...L.content.areas[a.id] })));
	const entries = $derived(
		rawEntries.map((e) => {
			const t = L.content.entries[e.id as keyof typeof L.content.entries];
			const note = (L.content.notes as Record<string, string>)[e.id];
			return { ...e, ...t, detail: note ? `${t.detail} ${note}` : t.detail, source: (L.content.sources as Record<string, string>)[e.source] ?? e.source };
		})
	);
	const usedTech = new Set(rawEntries.flatMap((e) => e.stack));

	function matches(e: Entry, skip?: 'area') {
		if (skip !== 'area' && area !== 'all' && e.area !== area) return false;
		if (ctxs.size && !ctxs.has(e.context)) return false;
		if (techs.size) {
			const t = [...techs];
			const ok = mode === 'any' ? t.some((x) => e.stack.includes(x)) : t.every((x) => e.stack.includes(x));
			if (!ok) return false;
		}
		const s = q.trim().toLowerCase();
		if (s) {
			const hay = `${e.title} ${e.summary} ${e.detail} ${e.source} ${e.stack.join(' ')} ${e.highlights.join(' ')}`.toLowerCase();
			if (!s.split(/\s+/).every((w) => hay.includes(w))) return false;
		}
		return true;
	}

	const visible = $derived(entries.filter((e) => matches(e)));
	const groups = $derived(
		areas
			.map((a) => ({ area: a, items: visible.filter((e) => e.area === a.id) }))
			.filter((g) => g.items.length)
	);
	const areaCount = (id: AreaId) => entries.filter((e) => e.area === id && matches(e, 'area')).length;
	const allCount = $derived(entries.filter((e) => matches(e, 'area')).length);
	const filtered = $derived(area !== 'all' || ctxs.size > 0 || techs.size > 0 || q.trim() !== '');
	const techCount = (t: string) => entries.filter((e) => e.stack.includes(t)).length;

	function toggle<T>(set: SvelteSet<T>, v: T) {
		if (set.has(v)) set.delete(v);
		else set.add(v);
	}
	function reset() {
		q = '';
		area = 'all';
		ctxs.clear();
		techs.clear();
		mode = 'any';
	}
	function toggleOpen(id: string) {
		toggle(open, id);
	}
	const allOpen = $derived(visible.length > 0 && visible.every((e) => open.has(e.id)));
	function toggleAll() {
		if (allOpen) visible.forEach((e) => open.delete(e.id));
		else visible.forEach((e) => open.add(e.id));
	}

	$effect(() => {
		if (!contentEl) return;
		const ro = new ResizeObserver(() => {
			if (!filtered && open.size === 0 && contentEl) baseline = contentEl.offsetHeight;
		});
		ro.observe(contentEl);
		return () => ro.disconnect();
	});

	// when a filter shrinks the list and nothing is left on screen, go back to the start of the finder
	let firstRun = true;
	$effect(() => {
		area;
		mode;
		q;
		ctxs.size;
		techs.size;
		if (firstRun) {
			firstRun = false;
			return;
		}
		// wait for the old cards to finish fading out, they still count as "on screen" until then
		const timer = setTimeout(() => {
			if (!contentEl || !finderEl) return;
			const nav = 56;
			// phones: the filters are a panel above the results. if it is open and on screen, the user is using it, leave them there
			const panel = finderEl.querySelector('.filters.open');
			if (panel) {
				const pr = panel.getBoundingClientRect();
				if (pr.bottom > nav && pr.top < innerHeight) return;
			}
			const onScreen = [...contentEl.querySelectorAll('article, .empty')].some((el) => {
				const r = el.getBoundingClientRect();
				return r.bottom > nav + 8 && r.top < innerHeight - 8;
			});
			if (!onScreen) {
				const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
				const phone = matchMedia('(max-width: 1080px)').matches;
				(phone ? contentEl : finderEl).scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
			}
		}, 450);
		return () => clearTimeout(timer);
	});

	let emptyQuipped = false;
	$effect(() => {
		if (visible.length === 0 && !emptyQuipped) {
			emptyQuipped = true;
			ui.say(L.ui.exp.emptySay);
		}
		if (visible.length > 0) emptyQuipped = false;
	});
</script>

<section id="experience" class="section">
	<header class="head pad">
		<p class="eyebrow">{L.ui.exp.eyebrow}</p>
		<h2 class="h2">{L.ui.exp.h2a}<br />{L.ui.exp.h2b}</h2>
		<p class="lede">{L.ui.exp.lede(areas.length, entries.length)}</p>
	</header>

	<div class="layout" bind:this={finderEl}>
		<aside class="filters" class:open={mobileFilters} aria-label={L.ui.exp.filters}>
			<button class="mtoggle" onclick={() => (mobileFilters = !mobileFilters)} aria-expanded={mobileFilters}>
				<Icon name="search" scale={2} /> {L.ui.exp.filters}
				{#if filtered}<span class="dot"></span>{/if}
				<span class="count">{visible.length}/{entries.length}</span>
			</button>

			<div class="inner">
				<label class="search">
					<Icon name="search" scale={2} />
					<span class="sr-only">{L.ui.exp.searchLabel}</span>
					<input type="search" placeholder={L.ui.exp.searchPh} bind:value={q} />
				</label>

				<fieldset>
					<legend>{L.ui.exp.skillArea}</legend>
					<ul class="areas">
						<li>
							<button class:on={area === 'all'} aria-pressed={area === 'all'} onclick={() => (area = 'all')}>
								<span class="ic"><Icon name="star" scale={2} /></span>
								<span class="nm">{L.ui.exp.everything}</span>
								<span class="n">{allCount}</span>
							</button>
						</li>
						{#each areas as a}
							{@const c = areaCount(a.id)}
							<li>
								<button class:on={area === a.id} class:zero={c === 0} aria-pressed={area === a.id} onclick={() => (area = area === a.id ? 'all' : a.id)}>
									<span class="ic"><Icon name={a.icon as IconName} scale={2} /></span>
									<span class="nm">{a.label}</span>
									<span class="n">{c}</span>
								</button>
							</li>
						{/each}
					</ul>
				</fieldset>

				<fieldset>
					<legend>{L.ui.exp.context}</legend>
					<div class="chips">
						{#each contexts as c}
							<button class="chip" aria-pressed={ctxs.has(c.id)} onclick={() => toggle(ctxs, c.id)}>{L.content.contexts[c.id]}</button>
						{/each}
					</div>
				</fieldset>

				<fieldset>
					<legend>
						{L.ui.exp.tech}
						<span class="seg" role="group" aria-label={L.ui.exp.matchMode}>
							<button aria-pressed={mode === 'any'} onclick={() => (mode = 'any')}>{L.ui.exp.any}</button>
							<button aria-pressed={mode === 'all'} onclick={() => (mode = 'all')}>{L.ui.exp.all}</button>
						</span>
					</legend>
					{#each techGroups as g, gi}
						<p class="gl">{[L.ui.exp.gLang, L.ui.exp.gFrame, L.ui.exp.gTools][gi]}</p>
						<div class="chips">
							{#each g.items.filter((t) => usedTech.has(t)) as t}
								<button class="chip" aria-pressed={techs.has(t)} onclick={() => toggle(techs, t)}>
									{t}<span class="n">{techCount(t)}</span>
								</button>
							{/each}
						</div>
					{/each}
				</fieldset>

				<button class="btn reset" onclick={reset} disabled={!filtered}>{L.ui.exp.reset}</button>
			</div>
		</aside>

		<div class="results" style:min-height={baseline ? baseline + 'px' : undefined}>
			<div class="content" bind:this={contentEl}>
			<div class="bar">
				<p class="status" aria-live="polite">
					{L.ui.exp.showing(visible.length, entries.length)}
					{#if filtered}<span>&middot; {L.ui.exp.filtered}</span>{/if}
				</p>
				<button class="btn small" onclick={toggleAll} disabled={!visible.length}>{allOpen ? L.ui.exp.collapseAll : L.ui.exp.expandAll}</button>
			</div>

			{#each groups as g (g.area.id)}
				<section class="group" aria-labelledby="g-{g.area.id}" animate:flip={{ duration: 260 }} transition:fade={{ duration: 160 }}>
					<header>
						<span class="gic"><Icon name={g.area.icon as IconName} scale={3} /></span>
						<div>
							<h3 id="g-{g.area.id}">{g.area.label}</h3>
							<p>{g.area.blurb}</p>
						</div>
						<span class="gn">{String(g.items.length).padStart(2, '0')}</span>
					</header>

					<div class="cards">
						{#each g.items as e (e.id)}
							{@const isOpen = open.has(e.id)}
							<article class:isOpen animate:flip={{ duration: 260 }} in:fade={{ duration: 200 }} out:fade={{ duration: 120 }}>
								<button class="head2" onclick={() => toggleOpen(e.id)} aria-expanded={isOpen} aria-controls="d-{e.id}">
									<span class="src"><i class={e.context}></i>{e.source}</span>
									<strong>{e.title}</strong>
									<span class="sum">{e.summary}</span>
									<span class="more">{isOpen ? L.ui.exp.less : L.ui.exp.details} <Icon name={isOpen ? 'x' : 'arrow'} scale={1.5} /></span>
								</button>

								{#if isOpen}
									<div class="detail" id="d-{e.id}" transition:slide={{ duration: 220 }}>
										<p>{e.detail}</p>
										<ul>
											{#each e.highlights as h}<li>{h}</li>{/each}
										</ul>
									</div>
								{/if}

								{#if e.stack.length}
									<div class="stack">
										{#each e.stack as t}
											<button class="tag" class:on={techs.has(t)} onclick={() => toggle(techs, t)} aria-pressed={techs.has(t)} title={L.ui.exp.filterBy(t)}>{t}</button>
										{/each}
									</div>
								{/if}
							</article>
						{/each}
					</div>
				</section>
			{/each}

			{#if !visible.length}
				<div class="empty" in:fade>
					<div class="ghost" aria-hidden="true"><Icon name="search" scale={6} /></div>
					<h3>{L.ui.exp.emptyTitle}</h3>
					<p>{L.ui.exp.emptyText}</p>
					<button class="btn btn-primary" onclick={reset}>{L.ui.exp.reset}</button>
				</div>
			{/if}
			</div>
		</div>
	</div>
</section>

<style>
	.head {
		padding-block: clamp(40px, 6vw, 80px) clamp(28px, 4vw, 48px);
		display: grid;
		gap: 22px;
	}
	.layout {
		display: grid;
		grid-template-columns: 320px minmax(0, 1fr);
		border-top: 1px solid var(--line);
		align-items: start;
	}
	.filters {
		border-right: 1px solid var(--line);
		position: sticky;
		top: var(--nav-h);
		max-height: calc(100vh - var(--nav-h));
		overflow: auto;
		background: var(--bg-soft);
		scrollbar-width: thin;
	}
	.mtoggle {
		display: none;
	}
	.inner {
		padding: 22px 22px 28px;
		display: grid;
		gap: 22px;
	}
	.search {
		display: flex;
		align-items: center;
		gap: 10px;
		height: 44px;
		padding: 0 12px;
		border: 1px solid var(--line-strong);
		border-radius: var(--radius-sm);
		background: var(--bg);
		color: var(--ink-3);
	}
	.search:focus-within {
		border-color: var(--green-bright);
		outline: 2px solid color-mix(in srgb, var(--green-bright) 35%, transparent);
	}
	.search input {
		all: unset;
		flex: 1;
		min-width: 0;
		color: var(--ink);
		font-size: 15px;
	}
	fieldset {
		border: 0;
		padding: 0;
		margin: 0;
		display: grid;
		gap: 8px;
	}
	legend {
		padding: 0;
		margin-bottom: 8px;
		font-family: var(--font-mono);
		font-size: 11.5px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--ink-3);
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
	}
	.areas {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 2px;
	}
	.areas button {
		all: unset;
		box-sizing: border-box;
		width: 100%;
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 8px 10px;
		border-radius: var(--radius-sm);
		cursor: pointer;
		font-size: 14.5px;
		font-weight: 500;
	}
	.areas button:hover {
		background: var(--bg-tile);
	}
	.areas button:focus-visible {
		outline: 2px solid var(--green-bright);
	}
	.areas button.on {
		background: var(--green);
		color: var(--on-green);
	}
	.areas button.zero:not(.on) {
		opacity: 0.4;
	}
	.ic {
		width: 22px;
		display: grid;
		place-items: center;
		flex: none;
	}
	.nm {
		flex: 1;
		line-height: 1.2;
	}
	.n {
		font-family: var(--font-mono);
		font-size: 11px;
		opacity: 0.7;
	}
	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}
	.gl {
		font-size: 12px;
		color: var(--ink-3);
		margin-top: 4px;
	}
	.seg {
		display: inline-flex;
		border: 1px solid var(--line-strong);
		border-radius: 999px;
		overflow: hidden;
		letter-spacing: 0;
		text-transform: none;
	}
	.seg button {
		all: unset;
		cursor: pointer;
		padding: 1px 10px;
		font-size: 11px;
	}
	.seg button[aria-pressed='true'] {
		background: var(--ink);
		color: var(--bg);
	}
	.reset {
		width: 100%;
	}
	.reset:disabled,
	.small:disabled {
		opacity: 0.45;
		cursor: not-allowed;
	}

	.results {
		min-width: 0;
	}
	.bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 12px;
		padding: 14px var(--pad);
		border-bottom: 1px solid var(--line);
		position: sticky;
		top: var(--nav-h);
		z-index: 5;
		background: color-mix(in srgb, var(--bg) 92%, transparent);
		backdrop-filter: blur(8px);
	}
	.status {
		font-family: var(--font-mono);
		font-size: 13px;
		color: var(--ink-2);
	}
	.small {
		height: 32px;
		font-size: 13px;
		padding: 0 12px;
	}

	.group {
		border-bottom: 1px solid var(--line);
	}
	.group > header {
		display: flex;
		align-items: center;
		gap: 16px;
		padding: 28px var(--pad) 22px;
	}
	.gic {
		width: 56px;
		height: 56px;
		display: grid;
		place-items: center;
		border: 1px solid var(--line-strong);
		border-radius: var(--radius);
		background: var(--green-wash);
		color: var(--green);
		flex: none;
	}
	.group h3 {
		font-family: var(--font-pixel);
		font-size: 28px;
		font-weight: 600;
		line-height: 1.1;
	}
	.group header p {
		font-size: 14.5px;
		color: var(--ink-2);
		margin-top: 2px;
	}
	.gn {
		margin-left: auto;
		font-family: var(--font-mono);
		font-size: 13px;
		color: var(--ink-3);
	}
	.cards {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		border-top: 1px solid var(--line);
	}
	article {
		border-right: 1px solid var(--line);
		border-bottom: 1px solid var(--line);
		display: flex;
		flex-direction: column;
		min-width: 0;
		background: var(--bg);
		transition: background 0.15s;
	}
	article:nth-child(2n) {
		border-right: 0;
	}
	article:hover,
	article.isOpen {
		background: var(--bg-soft);
	}
	.cards article:nth-last-child(-n + 2):nth-child(odd),
	.cards article:last-child {
		border-bottom: 0;
	}
	.head2 {
		all: unset;
		box-sizing: border-box;
		cursor: pointer;
		display: grid;
		gap: 8px;
		padding: 22px var(--pad) 12px;
		width: 100%;
	}
	.head2:focus-visible {
		outline: 2px solid var(--green-bright);
		outline-offset: -3px;
	}
	.src {
		font-family: var(--font-mono);
		font-size: 11.5px;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--ink-3);
		display: flex;
		align-items: center;
		gap: 8px;
	}
	.src i {
		width: 8px;
		height: 8px;
		display: block;
	}
	.src i.product {
		background: var(--pink);
	}
	.src i.industry {
		background: var(--blue);
	}
	.src i.education {
		background: var(--purple);
	}
	.head2 strong {
		font-size: 20px;
		line-height: 1.2;
		font-weight: 650;
		letter-spacing: -0.01em;
	}
	.sum {
		color: var(--ink-2);
		font-size: 15.5px;
		line-height: 1.5;
	}
	.more {
		font-family: var(--font-mono);
		font-size: 12px;
		color: var(--green);
		display: inline-flex;
		gap: 6px;
		align-items: center;
		margin-top: 2px;
		font-weight: 600;
	}
	.detail {
		padding: 4px var(--pad) 8px;
		display: grid;
		gap: 12px;
		font-size: 15px;
		color: var(--ink-2);
	}
	.detail ul {
		margin: 0;
		padding: 0;
		list-style: none;
		display: grid;
		gap: 6px;
		color: var(--ink);
	}
	.detail li {
		padding-left: 18px;
		position: relative;
		font-size: 14.5px;
	}
	.detail li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.55em;
		width: 7px;
		height: 7px;
		background: var(--green-bright);
	}
	.stack {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		padding: 8px var(--pad) 22px;
		margin-top: auto;
	}
	.tag {
		font-family: var(--font-mono);
		font-size: 11.5px;
		padding: 2px 8px;
		border: 1px solid var(--line-strong);
		border-radius: 4px;
		background: var(--bg);
		cursor: pointer;
	}
	.tag:hover {
		border-color: var(--green-bright);
	}
	.tag.on {
		background: var(--green);
		color: var(--on-green);
		border-color: var(--green);
	}

	.empty {
		min-height: min(60vh, 520px);
		align-content: center;
		padding: 80px var(--pad);
		text-align: center;
		display: grid;
		gap: 14px;
		justify-items: center;
	}
	.empty h3 {
		font-family: var(--font-pixel);
		font-size: 34px;
	}
	.empty p {
		color: var(--ink-2);
	}
	.ghost {
		color: var(--ink-3);
		animation: float 2s steps(4) infinite;
	}
	@keyframes float {
		50% {
			transform: translateY(-6px);
		}
	}

	@media (max-width: 1080px) {
		.layout {
			grid-template-columns: minmax(0, 1fr);
		}
		.filters {
			position: relative;
			top: 0;
			max-height: none;
			border-right: 0;
			border-bottom: 1px solid var(--line);
		}
		.mtoggle {
			all: unset;
			box-sizing: border-box;
			width: 100%;
			display: flex;
			align-items: center;
			gap: 10px;
			padding: 14px var(--pad);
			cursor: pointer;
			font-weight: 600;
		}
		.mtoggle .count {
			margin-left: auto;
			font-family: var(--font-mono);
			font-size: 12px;
			color: var(--ink-3);
		}
		.mtoggle .dot {
			width: 8px;
			height: 8px;
			background: var(--green-bright);
		}
		.inner {
			display: none;
			padding-inline: var(--pad);
		}
		.filters.open .inner {
			display: grid;
		}
		.bar {
			top: var(--nav-h);
		}
	}
	@media (max-width: 760px) {
		.cards {
			grid-template-columns: minmax(0, 1fr);
		}
		article {
			border-right: 0 !important;
			border-bottom: 1px solid var(--line) !important;
		}
		.cards article:last-child {
			border-bottom: 0 !important;
		}
		.group h3 {
			font-size: 23px;
		}
		.gic {
			width: 44px;
			height: 44px;
		}
		.group header p {
			display: none;
		}
	}
	:global([data-era='y2k']) .filters {
		background: #ffffcc;
	}
	:global([data-era='y2k']) legend {
		background: #ffcc33;
		color: #000066;
		font: bold 12px Arial, sans-serif;
		padding: 2px 6px;
		letter-spacing: 0;
		text-transform: none;
	}
	:global([data-era='y2k']) .areas button.on {
		background: #000066;
		color: #ffcc33;
	}
	:global([data-era='y2k']) .group > header {
		background: #000066;
		color: #fff;
		padding-block: 8px;
	}
	:global([data-era='y2k']) .group h3 {
		font: bold 15px Arial, sans-serif;
	}
	:global([data-era='y2k']) .group header p {
		display: none;
	}
	:global([data-era='y2k']) .gic {
		display: none;
	}
	:global([data-era='y2k']) .gn {
		color: #ffcc33;
	}
	:global([data-era='y2k']) .head2 strong {
		font: bold 14px Arial, sans-serif;
		color: #0000cc;
		text-decoration: underline;
	}
	:global([data-era='y2k']) .more {
		color: #0000cc;
	}
	:global([data-era='y2k']) .search {
		border: 2px inset #999;
	}
</style>
