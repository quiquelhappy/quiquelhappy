// Structure only. All text (titles, summaries, details) lives in src/lib/i18n/<lang>.ts.
export type AreaId =
	| 'backend'
	| 'infra'
	| 'frontend'
	| 'commerce'
	| 'data'
	| 'security'
	| 'devtools'
	| 'foundations'
	| 'ai'
	| 'aerospace'
	| 'robotics'
	| 'health';

export type Context = 'product' | 'industry' | 'education';

export type Area = { id: AreaId; icon: string };

export const areas: Area[] = [
	{ id: 'backend', icon: 'server' },
	{ id: 'infra', icon: 'cloud' },
	{ id: 'frontend', icon: 'window' },
	{ id: 'commerce', icon: 'cart' },
	{ id: 'data', icon: 'chart' },
	{ id: 'security', icon: 'shield' },
	{ id: 'devtools', icon: 'box' },
	{ id: 'foundations', icon: 'trophy' },
	{ id: 'ai', icon: 'bolt' },
	{ id: 'aerospace', icon: 'rocket' },
	{ id: 'robotics', icon: 'robot' },
	{ id: 'health', icon: 'heart' }
];

export const contexts: { id: Context }[] = [{ id: 'product' }, { id: 'industry' }, { id: 'education' }];

export type EntryMeta = {
	id: string;
	area: AreaId;
	context: Context;
	/** English name of where it happened; looked up in the dictionary when it needs translating */
	source: string;
	stack: string[];
};

/** Entry with its text for the current language merged in. */
export type Entry = EntryMeta & { title: string; summary: string; detail: string; highlights: string[] };

const LANGS = ['Go', 'TypeScript', 'JavaScript', 'PHP', 'Python', 'C', 'C++', 'CSS'];
const FRAMEWORKS = ['Svelte', 'Vue', 'Tailwind'];
export const techGroups = [
	{ items: LANGS },
	{ items: FRAMEWORKS },
	{ items: ['Docker', 'AWS', 'Linux', 'Android', 'PyTorch', 'WebSockets', 'Maven', 'Gradle', 'Git'] }
];

export const entries: EntryMeta[] = [
	{ id: 'game-hosting', area: 'backend', context: 'product', source: 'serverbench', stack: ['Go','TypeScript','JavaScript','PHP','Docker'] },
	{ id: 'permissions', area: 'backend', context: 'product', source: 'nominal · obex', stack: ['TypeScript','JavaScript','PHP'] },
	{ id: 'tracking', area: 'backend', context: 'product', source: 'serverbench', stack: ['TypeScript','JavaScript','WebSockets'] },
	{ id: 'realtime-ingest', area: 'backend', context: 'product', source: 'nominal · kinesis', stack: ['JavaScript','WebSockets','Linux'] },
	{ id: 'docker-hosting', area: 'infra', context: 'product', source: 'nominal · archon', stack: ['Docker','Linux','Go'] },
	{ id: 'byod', area: 'infra', context: 'product', source: 'nominal · archon', stack: ['Go','Docker','Linux'] },
	{ id: 'cdn-edge', area: 'infra', context: 'product', source: 'grifpkg', stack: ['Go','Linux','Docker','AWS'] },
	{ id: 'linux-ops', area: 'infra', context: 'product', source: 'all of the above', stack: ['Linux','Docker','AWS'] },
	{ id: 'creator-studio', area: 'frontend', context: 'product', source: 'serverbench', stack: ['TypeScript','JavaScript','CSS'] },
	{ id: 'cms', area: 'frontend', context: 'product', source: 'serverbench', stack: ['TypeScript','JavaScript','PHP','CSS'] },
	{ id: 'storefronts', area: 'frontend', context: 'product', source: 'serverbench', stack: ['TypeScript','JavaScript','CSS','Vue'] },
	{ id: 'modern-ui', area: 'frontend', context: 'product', source: 'various', stack: ['Svelte','Vue','Tailwind','CSS','TypeScript'] },
	{ id: 'commerce-platform', area: 'commerce', context: 'product', source: 'nominal · hermes', stack: ['TypeScript','JavaScript','PHP','Docker'] },
	{ id: 'paid-plugins', area: 'commerce', context: 'product', source: 'grifpkg', stack: ['Go','TypeScript','PHP'] },
	{ id: 'ads', area: 'commerce', context: 'product', source: 'grifpkg', stack: ['TypeScript','PHP'] },
	{ id: 'promoted', area: 'commerce', context: 'product', source: 'grifpkg', stack: ['Go','TypeScript'] },
	{ id: 'seo-studio', area: 'commerce', context: 'product', source: 'serverbench', stack: ['TypeScript','JavaScript'] },
	{ id: 'community-analytics', area: 'data', context: 'product', source: 'nominal · kinesis', stack: ['TypeScript','JavaScript','Docker'] },
	{ id: 'automod', area: 'data', context: 'product', source: 'serverbench', stack: ['TypeScript','JavaScript','Docker'] },
	{ id: 'interest-profiles', area: 'data', context: 'product', source: 'serverbench', stack: ['TypeScript','JavaScript'] },
	{ id: 'fingerprint-free', area: 'security', context: 'product', source: 'serverbench', stack: ['JavaScript','WebSockets'] },
	{ id: 'vuln-detection', area: 'security', context: 'product', source: 'grifpkg', stack: ['Go','TypeScript'] },
	{ id: 'jar-pm', area: 'devtools', context: 'product', source: 'grifpkg', stack: ['Go','TypeScript','PHP','Docker'] },
	{ id: 'auto-index', area: 'devtools', context: 'product', source: 'grifpkg', stack: ['Go','Linux'] },
	{ id: 'dep-compile', area: 'devtools', context: 'product', source: 'grifpkg', stack: ['Go','Docker','Maven','Gradle','Git'] },
	{ id: 'local-import', area: 'devtools', context: 'product', source: 'grifpkg', stack: ['Go'] },
	{ id: 'se-degree', area: 'foundations', context: 'education', source: 'UAB', stack: [] },
	{ id: 'space', area: 'aerospace', context: 'industry', source: 'Aerospace, defense and security company', stack: [] },
	{ id: 'robotics-work', area: 'robotics', context: 'industry', source: 'Robotics company', stack: [] },
	{ id: 'degree', area: 'robotics', context: 'education', source: 'Salesians Sarrià', stack: ['C','C++'] },
	{ id: 'clinical', area: 'health', context: 'industry', source: 'Health technology', stack: [] },
	{ id: 'obex-identity', area: 'security', context: 'product', source: 'nominal · obex', stack: [] },
	{ id: 'eris-support', area: 'ai', context: 'product', source: 'nominal · eris', stack: [] },
	{ id: 'hermes-billing', area: 'commerce', context: 'product', source: 'nominal · hermes', stack: [] },
	{ id: 'kinesis-events', area: 'data', context: 'product', source: 'nominal · kinesis', stack: [] },
	{ id: 'archon-deploys', area: 'infra', context: 'product', source: 'nominal · archon', stack: ['Docker', 'Git'] },
	{ id: 'workhours-app', area: 'frontend', context: 'product', source: 'workhours', stack: [] },
	{ id: 'verifactu', area: 'commerce', context: 'product', source: 'nominal · hermes', stack: [] },
	{ id: 'opencti-threat-intel', area: 'security', context: 'industry', source: 'Confidential client', stack: [] },
	{ id: 'hours-offers', area: 'commerce', context: 'industry', source: 'Professional work', stack: [] },
	{ id: 'national-data', area: 'data', context: 'industry', source: 'Professional work', stack: [] },
	{ id: 'slate', area: 'frontend', context: 'education', source: 'Graveyard · Bachillerato TFG', stack: ['PHP', 'Android'] },
	{ id: 'sodge', area: 'ai', context: 'product', source: 'Graveyard · personal experiment', stack: ['PHP', 'Android'] },
	{ id: 'vidfeed', area: 'frontend', context: 'product', source: 'Graveyard · personal experiment', stack: ['JavaScript'] },
	{ id: 'greenie', area: 'ai', context: 'education', source: 'Graveyard · academic project', stack: ['Python', 'Android', 'PyTorch'] },
	{ id: 'openagv', area: 'robotics', context: 'education', source: 'Graveyard · academic project', stack: ['C'] }
];
