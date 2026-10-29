export type AreaId =
	| 'backend'
	| 'infra'
	| 'frontend'
	| 'commerce'
	| 'data'
	| 'security'
	| 'devtools'
	| 'foundations'
	| 'aerospace'
	| 'robotics'
	| 'health';

export type Context = 'product' | 'industry' | 'education';

export type Area = { id: AreaId; label: string; icon: string; blurb: string };

export const areas: Area[] = [
	{ id: 'backend', label: 'Backend & distributed systems', icon: 'server', blurb: 'Services that stay up, scale out and do not wake anyone at 3am.' },
	{ id: 'infra', label: 'Infrastructure & hosting', icon: 'cloud', blurb: 'Containers, orchestration and running other people’s workloads safely.' },
	{ id: 'frontend', label: 'Frontend & product', icon: 'window', blurb: 'Interfaces people actually enjoy: dashboards, builders and storefronts.' },
	{ id: 'commerce', label: 'Commerce, ads & growth', icon: 'cart', blurb: 'Selling digital goods, monetizing communities and getting found.' },
	{ id: 'data', label: 'Data, analytics & statistics', icon: 'chart', blurb: 'Turning event streams into decisions, forecasts and moderation.' },
	{ id: 'security', label: 'Security & trust', icon: 'shield', blurb: 'Privacy-respecting sessions, vulnerability detection and safe defaults.' },
	{ id: 'devtools', label: 'Developer tooling', icon: 'box', blurb: 'Package managers, build pipelines and tools for other engineers.' },
	{ id: 'foundations', label: 'Computer science foundations', icon: 'trophy', blurb: 'Formal training: the theory and engineering discipline underneath everything else.' },
	{ id: 'aerospace', label: 'Aerospace & mission-critical', icon: 'rocket', blurb: 'Software where failing is not an option and the stakes are orbital.' },
	{ id: 'robotics', label: 'Robotics & automation', icon: 'robot', blurb: 'Industrial automation, mostly automotive, where software meets steel.' },
	{ id: 'health', label: 'Health & clinical trials', icon: 'heart', blurb: 'Applications that help us understand and run clinical research.' }
];

export type Entry = {
	id: string;
	area: AreaId;
	title: string;
	context: Context;
	source: string; // where it happened
	summary: string;
	detail: string;
	highlights: string[];
	stack: string[];
};

export const contexts: { id: Context; label: string }[] = [
	{ id: 'product', label: 'My own products' },
	{ id: 'industry', label: 'Industry work' },
	{ id: 'education', label: 'Education' }
];

const LANGS = ['Go', 'TypeScript', 'JavaScript', 'PHP', 'C', 'C++', 'CSS'];
const FRAMEWORKS = ['Svelte', 'Vue', 'Tailwind'];
export const techGroups = [
	{ label: 'Languages', items: LANGS },
	{ label: 'Frameworks', items: FRAMEWORKS },
	{ label: 'Tools & platforms', items: ['Docker', 'AWS', 'Linux', 'WebSockets', 'Maven', 'Gradle', 'Git'] }
];

export const entries: Entry[] = [
	// ---------------------------------------------------------------- backend
	{
		id: 'game-hosting',
		area: 'backend',
		title: 'Compute-intensive hosting',
		context: 'product',
		source: 'serverbench',
		summary: 'A hosting service for game servers, some of the most resource-hungry and hardest workloads to manage well.',
		detail:
			'Game servers are unforgiving: they eat CPU and memory, they are latency-sensitive, and players notice every hiccup. The hosting service had to schedule these workloads fairly, isolate them from one another, and recover quickly when something misbehaved. It was built across Go, JavaScript, TypeScript and PHP, with containers as the unit of isolation.',
		highlights: ['Workload isolation per server', 'Resource-aware scheduling', 'Control plane in Go, dashboards in TypeScript'],
		stack: ['Go', 'TypeScript', 'JavaScript', 'PHP', 'Docker']
	},
	{
		id: 'permissions',
		area: 'backend',
		title: 'Role-based permissions',
		context: 'product',
		source: 'serverbench',
		summary: 'High-granularity permissions so teams can split marketing, commerce, support and moderation.',
		detail:
			'Communities are teams, and teams have roles. The permission system lets each community define who can touch what, so the moderation team never needs access to the store, and the marketing team never needs to see support tickets. It had to stay fast at check time, because every request asks the same question.',
		highlights: ['Fine-grained, per-community roles', 'Checked on every request', 'Designed around real team structures'],
		stack: ['TypeScript', 'JavaScript', 'PHP']
	},
	{
		id: 'tracking',
		area: 'backend',
		title: 'Cross-medium customer tracking',
		context: 'product',
		source: 'serverbench',
		summary: 'Follows a customer across games, browsers and Discord to build one accurate interest profile.',
		detail:
			'A single person shows up as a game account, a browser session and a Discord member. Stitching those identities into one profile is what makes upselling relevant instead of annoying. It feeds the webstore and creator studio so the right content reaches the right member.',
		highlights: ['Identity stitching across three mediums', 'Feeds store and creator recommendations', 'Built with the privacy lessons from purecore'],
		stack: ['TypeScript', 'JavaScript', 'WebSockets']
	},
	{
		id: 'realtime-ingest',
		area: 'backend',
		title: 'Real-time socket ingestion',
		context: 'product',
		source: 'purecore',
		summary: 'A socket-based analytics backend that keeps long-lived connections and turns them into sessions.',
		detail:
			'purecore keeps connections open and reads the session directly from the connection, rather than from cookies or device identifiers. That keeps the data model simple and honest: if the socket is the same, the session is the same.',
		highlights: ['Long-lived WebSocket connections', 'Session identity from the connection', 'Low overhead per event'],
		stack: ['JavaScript', 'WebSockets', 'Linux']
	},
	// ------------------------------------------------------------------ infra
	{
		id: 'docker-hosting',
		area: 'infra',
		title: 'Docker-based hosting system',
		context: 'product',
		source: 'serverbench',
		summary: 'My own container hosting system, built from scratch because nothing off the shelf fit.',
		detail:
			'The hosting layer wraps Docker with the product logic a hosting business actually needs: provisioning, limits, lifecycle, billing hooks and a customer-facing panel. It is the foundation under serverbench, and it taught me more about Linux, cgroups and networking than any course.',
		highlights: ['Provisioning and lifecycle management', 'Per-container limits', 'Customer panel on top'],
		stack: ['Docker', 'Linux', 'Go']
	},
	{
		id: 'byod',
		area: 'infra',
		title: 'Bring-your-own-device orchestrator',
		context: 'product',
		source: 'serverbench',
		summary: 'Lets customers attach their own machines and run the same managed experience on them.',
		detail:
			'Not everyone wants to rent capacity. The BYOD orchestrator lets a customer plug in their own hardware and get the same deployments, monitoring and controls, which means treating every machine as untrusted, remote and occasionally offline.',
		highlights: ['Customer-owned machines as first-class nodes', 'Same tooling as managed hosting', 'Designed for flaky links'],
		stack: ['Go', 'Docker', 'Linux']
	},
	{
		id: 'cdn-edge',
		area: 'infra',
		title: 'Edge delivery and file caching',
		context: 'product',
		source: 'grifpkg',
		summary: 'Cached, edge-served downloads so dependencies resolve fast wherever the server is.',
		detail:
			'A package manager lives or dies on download speed. grifpkg caches files with rich metadata and serves them from the edge, so installs stay quick and upstream sites are not hammered.',
		highlights: ['File caching with metadata', 'Edge delivery', 'Gentle on upstream hosts'],
		stack: ['Go', 'Linux', 'Docker', 'AWS']
	},
	{
		id: 'linux-ops',
		area: 'infra',
		title: 'Linux operations',
		context: 'product',
		source: 'all of the above',
		summary: 'Years of running real servers for real communities, where downtime has a Discord channel.',
		detail:
			'Running PureVanilla and serverbench meant keeping Linux machines healthy for people who notice instantly when they are not. Monitoring, backups and incident response were part of the daily routine, not a separate team.',
		highlights: ['Monitoring and backups', 'Incident response with an audience', 'Debugging in production with care'],
		stack: ['Linux', 'Docker', 'AWS']
	},
	// --------------------------------------------------------------- frontend
	{
		id: 'creator-studio',
		area: 'frontend',
		title: 'Creator studio',
		context: 'product',
		source: 'serverbench',
		summary: 'A marketing dashboard for creators making videos and posts about the communities they love.',
		detail:
			'The studio connects YouTube, TikTok and Twitch accounts, supports post monetization, and shows creators how their work performs. It had to feel like a creator tool, not an enterprise console.',
		highlights: ['YouTube, TikTok and Twitch authentication', 'Post monetization', 'Creator-facing analytics'],
		stack: ['TypeScript', 'JavaScript', 'CSS']
	},
	{
		id: 'cms',
		area: 'frontend',
		title: 'CMS and website builder',
		context: 'product',
		source: 'serverbench',
		summary: 'A CRM and website builder with a templating engine and a template marketplace.',
		detail:
			'Communities build their own sites without touching code. Pages are composed from reusable modules, templates can be shared or sold in a marketplace, and the engine renders it all with predictable performance.',
		highlights: ['Multi-page sites', 'Reusable modules', 'Integrated template marketplace'],
		stack: ['TypeScript', 'JavaScript', 'PHP', 'CSS']
	},
	{
		id: 'storefronts',
		area: 'frontend',
		title: 'Customizable webstores',
		context: 'product',
		source: 'serverbench',
		summary: 'Each community gets a webstore it can make its own.',
		detail:
			'The storefront has to look like the community that owns it, so theming goes deep while checkout stays consistent and trustworthy. It is the customer-facing half of the commerce platform.',
		highlights: ['Per-community theming', 'Consistent, trusted checkout', 'Collectibles, badges and boosters'],
		stack: ['TypeScript', 'JavaScript', 'CSS', 'Vue']
	},
	{
		id: 'modern-ui',
		area: 'frontend',
		title: 'Modern component UIs',
		context: 'product',
		source: 'various',
		summary: 'Component-driven interfaces in Svelte and Vue, styled with Tailwind or plain CSS.',
		detail:
			'I like small, fast interfaces. Svelte is my default, Vue when the team already lives there, and Tailwind or hand-written CSS depending on the project. This site is one example.',
		highlights: ['Svelte first, Vue when it fits', 'Tailwind or hand-written CSS', 'Accessible by default'],
		stack: ['Svelte', 'Vue', 'Tailwind', 'CSS', 'TypeScript']
	},
	// --------------------------------------------------------------- commerce
	{
		id: 'commerce-platform',
		area: 'commerce',
		title: 'E-commerce platform for digital goods',
		context: 'product',
		source: 'serverbench',
		summary: 'My own Shopify-style platform, built for in-game collectibles, badges and boosters.',
		detail:
			'Digital goods have different rules from physical ones: instant delivery, fraud, chargebacks and per-game integrations. The platform handles catalogs, checkout and delivery into the game, and gives each community its own webstore.',
		highlights: ['Instant delivery into games', 'Per-community webstores', 'Built from scratch'],
		stack: ['TypeScript', 'JavaScript', 'PHP', 'Docker']
	},
	{
		id: 'paid-plugins',
		area: 'commerce',
		title: 'Paid plugins and purchase verification',
		context: 'product',
		source: 'grifpkg',
		summary: 'Sell dependencies, or authenticate with purchases made on other sites to authorize downloads.',
		detail:
			'Developers can sell their work through the package manager, and buyers who already own a plugin elsewhere can prove it and download it. Authorizing downloads without breaking the install flow was the hard part.',
		highlights: ['Selling dependencies', 'Cross-site purchase verification', 'Authorized downloads in the CLI'],
		stack: ['Go', 'TypeScript', 'PHP']
	},
	{
		id: 'ads',
		area: 'commerce',
		title: 'Hosted download pages with ads',
		context: 'product',
		source: 'grifpkg',
		summary: 'Open-source developers earn revenue from hosted download pages, with ads served from our own pool.',
		detail:
			'Open-source work should be able to pay for itself. Developers enable hosted download pages and earn from advertising served from the platform’s own ad pool, which kept quality high and tracking limited.',
		highlights: ['Revenue for open-source developers', 'First-party ad pool', 'Opt-in per project'],
		stack: ['TypeScript', 'PHP']
	},
	{
		id: 'promoted',
		area: 'commerce',
		title: 'Promoted software',
		context: 'product',
		source: 'grifpkg',
		summary: 'Developers advertise paid plugins through the site and through text recommendations in the CLI.',
		detail:
			'Discovery is the hard part of selling software. Promotions appear on the site and as quiet text suggestions in the command line, where developers are already looking for a solution.',
		highlights: ['On-site promotion', 'CLI text recommendations', 'Respectful, non-intrusive placement'],
		stack: ['Go', 'TypeScript']
	},
	{
		id: 'seo-studio',
		area: 'commerce',
		title: 'SEO studio and voting',
		context: 'product',
		source: 'serverbench',
		summary: 'An SEO panel with a voting system, suggesting the sites where each member vote delivers the most.',
		detail:
			'Communities list their sites and members vote for them. The studio suggests which third-party voting sites to use so every vote gets the most reach, which turns a loose chore into a measured growth loop.',
		highlights: ['Integrated voting system', 'Smart site suggestions', 'Maximizes delivery per vote'],
		stack: ['TypeScript', 'JavaScript']
	},
	// ------------------------------------------------------------------- data
	{
		id: 'community-analytics',
		area: 'data',
		title: 'Community analytics',
		context: 'product',
		source: 'serverbench',
		summary: 'Everything a community needs to know about its growth, plus holiday prediction.',
		detail:
			'Beyond the usual counts and charts, the analytics predict holiday effects and combine signals from the SEO and creator systems, so a community can see where its growth actually comes from.',
		highlights: ['Standard growth metrics', 'Holiday prediction', 'Signals from SEO and creator tools'],
		stack: ['TypeScript', 'JavaScript', 'Docker']
	},
	{
		id: 'automod',
		area: 'data',
		title: 'Statistical auto-moderation',
		context: 'product',
		source: 'serverbench',
		summary: 'High-ingest moderation using Perspective API that keeps recurring toxic members out of the conversation.',
		detail:
			'Rather than judging each message alone, the system takes a statistical view of each member over time. Repeat offenders drift out of the conversation, while a one-off bad day does not get anyone banned.',
		highlights: ['Perspective API scoring', 'Per-member statistical history', 'Built for high ingest'],
		stack: ['TypeScript', 'JavaScript', 'Docker']
	},
	{
		id: 'interest-profiles',
		area: 'data',
		title: 'Interest profiles and recommendations',
		context: 'product',
		source: 'serverbench',
		summary: 'Builds an interest profile per customer to upsell webstore content or deliver creator media.',
		detail:
			'Signals from games, browsers and Discord are merged into a profile that decides what to recommend. The goal was relevance: fewer, better suggestions.',
		highlights: ['Profiles from multiple sources', 'Store and creator recommendations', 'Tuned for relevance over volume'],
		stack: ['TypeScript', 'JavaScript']
	},
	// --------------------------------------------------------------- security
	{
		id: 'fingerprint-free',
		area: 'security',
		title: 'Session linking without fingerprinting',
		context: 'product',
		source: 'purecore',
		summary: 'High-security session linking based purely on connection data, with no device fingerprinting.',
		detail:
			'The easy way to track visitors is to fingerprint their devices. I did not want that. The platform ties sessions to properties of the connection itself, which keeps analytics useful and visitors unidentified.',
		highlights: ['No device fingerprinting', 'Connection-based identity', 'High security standards'],
		stack: ['JavaScript', 'WebSockets']
	},
	{
		id: 'vuln-detection',
		area: 'security',
		title: 'Vulnerability detection',
		context: 'product',
		source: 'grifpkg',
		summary: 'Dependencies are fingerprinted and can be flagged as vulnerable, so developers learn about insecure code in use.',
		detail:
			'Once files are fingerprinted, a known-bad version can be marked, and anyone depending on it gets a warning. It turns a package manager into an early warning system for the ecosystem.',
		highlights: ['Fingerprinting of artifacts', 'Flagging vulnerable versions', 'Notifications for affected developers'],
		stack: ['Go', 'TypeScript']
	},
	// --------------------------------------------------------------- devtools
	{
		id: 'jar-pm',
		area: 'devtools',
		title: 'JAR package manager',
		context: 'product',
		source: 'grifpkg',
		summary: 'A package manager that imports, updates and manages dependencies for Java software.',
		detail:
			'Java plugin ecosystems often rely on manual downloads. grifpkg resolves, caches and updates dependencies automatically, with its own registry, CLI and distribution layer. Used mainly by the SpigotMC community.',
		highlights: ['Registry, CLI and distribution layers', 'Automatic updates', 'Used in the SpigotMC community'],
		stack: ['Go', 'TypeScript', 'PHP', 'Docker']
	},
	{
		id: 'auto-index',
		area: 'devtools',
		title: 'Automatic indexing',
		context: 'product',
		source: 'grifpkg',
		summary: 'Libraries and software are indexed automatically, with rich metadata and file caching.',
		detail:
			'A registry is only as good as its coverage. Automatic indexing finds new releases, extracts metadata and caches the files, so the catalog stays current without maintainers doing the paperwork.',
		highlights: ['Crawl and index new releases', 'Rich metadata extraction', 'File caching'],
		stack: ['Go', 'Linux']
	},
	{
		id: 'dep-compile',
		area: 'devtools',
		title: 'Dependency compiling',
		context: 'product',
		source: 'grifpkg',
		summary: 'Some projects ship no .jar. grifpkg hooks into their git repositories and builds them with Maven or Gradle.',
		detail:
			'When there is no precompiled artifact, the platform fetches the repository and builds it in a sandbox using Maven or Gradle, then serves the result like any other package.',
		highlights: ['Git-driven builds', 'Maven and Gradle support', 'Sandboxed build environment'],
		stack: ['Go', 'Docker', 'Maven', 'Gradle', 'Git']
	},
	{
		id: 'local-import',
		area: 'devtools',
		title: 'Automatic local importing',
		context: 'product',
		source: 'grifpkg',
		summary: 'Detects dependencies in an existing project and maps them to registry entries automatically.',
		detail:
			'Adopting a package manager should not mean redoing your project by hand. The importer scans what is already there, matches it with registry identifiers and sets everything up.',
		highlights: ['Scans existing projects', 'Matches registry identifiers', 'One command to adopt'],
		stack: ['Go']
	},
	// ------------------------------------------------------------- foundations
	{
		id: 'se-degree',
		area: 'foundations',
		title: 'Software engineering degree (Computer Science)',
		context: 'education',
		source: 'UAB',
		summary: 'A degree in software engineering, with computer science at its core, at the Universitat Aut\u00f2noma de Barcelona.',
		detail:
			'Years of coding before the degree meant it landed differently: it put names, theory and discipline on things I had learned by breaking them. It sits alongside my robotics studies, so I have formal training on both the software and the hardware side of automation.',
		highlights: ['Computer science fundamentals', 'Software engineering practice', 'Formal counterpart to years of self-taught building'],
		stack: []
	},
	// -------------------------------------------------------------- aerospace
	{
		id: 'space',
		area: 'aerospace',
		title: 'Critical space projects',
		context: 'industry',
		source: 'Aerospace, defense and security company',
		summary: 'Software for work that pushes the next frontier of human exploration.',
		detail:
			'I work at a technology and engineering company specialized in aerospace, defense and security systems, with deep expertise in satellite navigation and mission-critical software. The details are not mine to share, but the standard is clear: rigorous, traceable and correct the first time.',
		highlights: ['Mission-critical standards', 'Satellite navigation context', 'Correctness and traceability first'],
		stack: []
	},
	// --------------------------------------------------------------- robotics
	{
		id: 'robotics-work',
		area: 'robotics',
		title: 'Industrial automation',
		context: 'industry',
		source: 'Robotics company',
		summary: 'Software for a robotics company focused on industrial automation, mostly in the automotive industry.',
		detail:
			'Factory-floor software is a different sport: the output moves real machines, uptime is money and cycle time is everything. It is where my robotics training and my software habits meet.',
		highlights: ['Automotive industry', 'Software that moves machines', 'Cycle time and uptime matter'],
		stack: []
	},
	{
		id: 'degree',
		area: 'robotics',
		title: 'Robotics and industrial automation (Grado Superior)',
		context: 'education',
		source: 'Salesians Sarri\u00e0',
		summary: 'A higher vocational degree (Grado Superior) in robotics and industrial automation, finished with an A+ in most subjects.',
		detail:
			'Studied at Salesians Sarri\u00e0 in Barcelona. Sensors, actuators, control and automation systems gave me a physical intuition for software. It is why I think about failure modes and latency before I write code, and why industrial automation feels like home.',
		highlights: ['A+ in most subjects', 'Control, sensing and automation', 'Hardware intuition for software'],
		stack: ['C', 'C++']
	},
	// ----------------------------------------------------------------- health
	{
		id: 'clinical',
		area: 'health',
		title: 'Clinical trial applications',
		context: 'industry',
		source: 'Health technology',
		summary: 'Health applications that improve how we understand and run clinical trials.',
		detail:
			'Clinical research depends on accurate data from real people. The applications make it easier to collect, understand and act on that data, where privacy and correctness are not negotiable.',
		highlights: ['Better trial data', 'Privacy and correctness first', 'Software that helps medicine move faster'],
		stack: []
	}
];
