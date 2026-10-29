export type Project = {
	id: string;
	name: string;
	kind: string;
	color: 'pink' | 'orange' | 'blue' | 'purple';
	url?: string;
	blurb: string;
	points: string[];
	stack: string[];
};

export const projects: Project[] = [
	{
		id: 'serverbench',
		name: 'serverbench',
		kind: 'E-commerce, analytics and hosting',
		color: 'pink',
		url: 'https://serverbench.io',
		blurb:
			'A full platform for online communities, especially game servers: an e-commerce platform for digital goods, an analytics tool for communities, and a bring-your-own-device hosting orchestrator.',
		points: [
			'Store: communities sell collectibles, badges and boosters, with a customizable webstore for each one',
			'Hosting: a Docker-based orchestrator for resource-hungry game servers',
			'Studios: creator, SEO and CMS tools that share data with one analytics core'
		],
		stack: ['Go', 'TypeScript', 'JavaScript', 'PHP', 'Docker']
	},
	{
		id: 'grifpkg',
		name: 'grifpkg',
		kind: 'Package manager',
		color: 'orange',
		url: 'https://grifpkg.com',
		blurb:
			'A package manager for Java plugins, server software and general-purpose code, used mostly by the SpigotMC community. It imports, updates and manages dependencies automatically.',
		points: [
			'Custom caching and distribution layers for fast edge delivery',
			'Indexes libraries automatically and builds from source when no .jar exists',
			'Paid plugins, vulnerability detection and developer monetization built in'
		],
		stack: ['Go', 'TypeScript', 'PHP', 'Docker']
	},
	{
		id: 'purecore',
		name: 'purecore',
		kind: 'Real-time analytics',
		color: 'blue',
		blurb:
			'A socket-based analytics platform with high security standards. Sessions are linked from connection data alone, with no device fingerprinting.',
		points: [
			'Session linking built on the connection itself',
			'Privacy-first by design, with no fingerprinting shortcuts',
			'Real-time ingestion over WebSockets'
		],
		stack: ['JavaScript', 'WebSockets', 'Linux']
	},
	{
		id: 'purevanilla',
		name: 'PureVanilla',
		kind: 'Community server',
		color: 'purple',
		blurb:
			'A vanilla Minecraft server project focused on a clean, true-to-original experience. Run like a product, with real infrastructure behind a game.',
		points: ['Vanilla-first philosophy: fewer mods, more care', 'A living community that needs uptime', 'Where a lot of the hosting lessons started'],
		stack: ['Linux', 'Docker']
	}
];
