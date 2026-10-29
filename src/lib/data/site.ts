export const EMAIL = 'quique@osuna.dev';
export const GITHUB = 'https://github.com/quiquelhappy';
export const COFFEE = 'https://www.buymeacoffee.com/happy';

export const nav = [
	{ id: 'top', label: 'Hello' },
	{ id: 'about', label: 'About' },
	{ id: 'experience', label: 'Experience' },
	{ id: 'projects', label: 'Projects' },
	{ id: 'hire', label: 'Hire me' }
] as const;

export const roles = [
	'a problem solver',
	'a rocket-adjacent engineer',
	'a docker whisperer',
	'a robot wrangler',
	'a reformed PHP developer',
	'a package-manager inventor',
	'a person who reads the logs',
	'available for hire'
];

/** Coding since April 26th, 2010. ChatGPT launched on November 30th, 2022. */
export const CODING_SINCE = new Date(2010, 3, 26);
export const CHATGPT_LAUNCH = new Date(2022, 10, 30);

export function fullYears(from: Date, to: Date = new Date()) {
	let y = to.getFullYear() - from.getFullYear();
	const beforeAnniversary = to.getMonth() < from.getMonth() || (to.getMonth() === from.getMonth() && to.getDate() < from.getDate());
	if (beforeAnniversary) y--;
	return y;
}

export const yearsCoding = (now: Date = new Date()) => fullYears(CODING_SINCE, now);
/** Years of experience before ChatGPT existed (a constant: 12). */
export const yearsBC = fullYears(CODING_SINCE, CHATGPT_LAUNCH);

export const statsFor = (years: number) => [
	{ value: years, suffix: '+', label: `years of coding, ${yearsBC} of them B.C. (before ChatGPT)` },
	{ value: 9, suffix: '', label: 'years old when I started writing code' }
];

export const principles = [
	{ quote: 'I learned a lot of things the hard way.', by: 'me, in my own README' },
	{
		quote: "At heart I'm a problem solver. I try to fix things that make life a little better, for others and for myself.",
		by: 'also me'
	},
	{
		quote: "When nothing off the shelf was good enough, I built it from scratch: a store, a host, a package manager.",
		by: 'the git log'
	},
	{
		quote: 'Privacy is a design constraint. I linked sessions from connection data alone, with no device fingerprinting.',
		by: 'a socket, probably'
	},
	{ quote: `${yearsBC} years of experience B.C. That stands for before ChatGPT.`, by: 'my calendar' }
];

export const achievements = [
	{ icon: 'cart', title: 'Shopkeeper', text: 'Built my own e-commerce platform for digital goods, like Shopify but for in-game collectibles.', tag: 'serverbench' },
	{ icon: 'cloud', title: 'Landlord', text: 'Built my own Docker-based hosting system. Game servers are the hungriest tenants.', tag: 'serverbench' },
	{ icon: 'box', title: 'Dependency whisperer', text: 'Built package-manager logic from scratch, with caching and distribution layers.', tag: 'grifpkg' },
	{ icon: 'shield', title: 'Trust no fingerprint', text: 'Built a socket-based analytics platform with strict session linking and zero device fingerprinting.', tag: 'purecore' },
	{ icon: 'rocket', title: 'Ground control', text: 'Worked on critical space projects pushing the next frontier of human exploration.', tag: 'aerospace' },
	{ icon: 'heart', title: 'First, do no harm', text: 'Worked on health applications that improve how clinical trials are understood and run.', tag: 'health' },
	{ icon: 'trophy', title: 'Double degree', text: 'Software Engineering (Computer Science) at UAB, plus a Grado Superior in Robotics and Industrial Automation at Salesians Sarri\u00e0, with an A+ in most of it.', tag: 'education' },
	{ icon: 'star', title: 'Scar tissue', text: 'Learned a lot of things the hard way. That one has no category.', tag: 'life' }
] as const;

export const marquee = [
	'TypeScript', 'Go', 'Svelte', 'Docker', 'Linux', 'PHP', 'C / C++', 'WebSockets', 'AWS',
	'Vue', 'Maven / Gradle', 'CSS', 'Distributed systems', 'Package managers', 'Mission-critical software'
];

/** Things Gandalf says. Keyed by the section that is on screen. */
export const quips: Record<string, string[]> = {
	general: [
		"Woof. Don't mind me. I live in your viewport now.",
		'I herd things. Mostly deadlines.',
		'You shall not pass... without checking the hire button.',
		'Quique drew me in 20x20 pixels. I think he is proud.',
		'Good boy count: 1. Treat count: 0. Please advise.',
		'I know three tunnels. Do not ask me about the fourth.',
		'psst. the hire button works.',
		'A merle is never late. Nor is he early. He arrives precisely when he means to.',
		'Try pressing Ctrl+K. Or Cmd+K. I am not picky.',
		'There is a Konami code here somewhere. I did not say that.'
	],
	top: ["Woof! I'm Gandalf. Quique is a little shy, so I do the talking.", 'Scroll down. The good stuff is not in the hero.'],
	about: ['Those achievements are real. The confetti is extra.', 'He started coding at nine. I started at boot.'],
	experience: ['Try the filters. They are very satisfying.', 'Filter by Go. Then fetch. Wait, fetch is not a filter.', 'Every card opens. Every single one.'],
	projects: ['He built all of these. Yes, the package manager too.', 'serverbench is a whole stack, not one project.'],
	hire: ['This is the part where you email him.', 'Say hi. He replies. I have seen it.', 'quique@osuna.dev. I will wait here. Good boys wait.']
};

export const clickLines = [
	'Boop!',
	'Woof!',
	'I have a hitbox, you know.',
	'Belly rubs are extra.',
	'Click me 10 times. I dare you.',
	'Seven. You are committed.',
	'Nine. Ten is going to be great.'
];
