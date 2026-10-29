export const en = {
	ui: {
		meta: {
			title: 'Quique Osuna | Software engineer, open to hire',
			description:
				'Quique (Happy) builds software that has to work: aerospace, robotics, health, hosting, commerce and developer tooling. Coding since age 9, based near Barcelona, open to new work.',
			og: "Software for space, robots and the internet's weirder corners. Open to new work: quique@osuna.dev"
		},
		nav: {
			top: 'Hello',
			about: 'About',
			experience: 'Experience',
			projects: 'Projects',
			hire: 'Hire me',
			sections: 'Sections',
			home: 'quique, back to top',
			palette: 'Open command palette',
			dark: 'Toggle dark mode',
			darkTitle: 'Dark / light',
			y2kTitle: 'Travel to the year 2000',
			language: 'Language'
		},
		hero: {
			eyebrow: "Hi, I'm Quique",
			h1a: 'I build software that',
			h1b: 'has to ',
			h1em: 'work',
			h1c: '.',
			retro: "Welcome to Quique's Homepage!!",
			ledeA:
				"I started writing code when I was nine and never really stopped. Today I build software for space, robots and health, plus a few weird, wonderful products of my own. I live near Barcelona, I go by ",
			ledeBold: 'Happy',
			ledeB: " online, and I'm open to new work.",
			rightNow: "right now i'm",
			cta: 'Hire me',
			copied: 'Copied',
			copyAria: 'Copy email address',
			toastCopied: 'Email copied. Now go write something nice.',
			years: (n: number) => `${n}+ years of code`,
			pressA: 'press',
			pressB: 'to explore',
			speaks: 'speaks',
			profileAria: 'Quick profile',
			open: 'Open',
			onBranch: 'on branch',
			availableNow: 'available now',
			codeAria: 'Profile as code',
			recommended: 'Recommended',
			alertTitle: 'Potential great collaboration',
			alertText: 'Review suggested: say hello before someone else does.',
			hireQL: 'Hire QL',
			workingOn: 'Working on',
			sideQuests: 'Side quests',
			currentBranch: 'Current branch',
			b1: 'mission-critical, satellite navigation',
			b2: 'industrial automation, automotive',
			b3: 'serverbench, grifpkg, purecore',
			construction: 'UNDER CONSTRUCTION',
			mosaic: 'hover to paint. click to pin a block.'
		},
		about: {
			eyebrow: 'About me',
			h2a: 'Problem solver,',
			h2b: 'by habit.',
			p1a: "I'm Quique, ",
			p1bold: 'Happy',
			p1b: " online. I've been coding since I can remember touching a computer, and I live near Barcelona. I have a pile of side projects that never made it into any bio, but at heart I'm trying to fix things that make life a little better, for other people and for myself.",
			p2: 'By day I work at a company that builds aerospace, defense and security systems, with deep roots in satellite navigation and mission-critical software, and at a robotics company doing industrial automation, mostly in automotive. By night I build tools for communities: a store, a host, a package manager and an analytics engine, mostly from scratch.',
			p3: 'I hold two degrees: Software Engineering (Computer Science) at UAB, and a Grado Superior in Robotics and Industrial Automation at Salesians Sarrià. It shows. I think about failure modes, latency and the physical world before I think about frameworks.',
			facts: 'Quick facts',
			alias: 'alias',
			base: 'base',
			baseV: 'near Barcelona',
			since: 'coding since',
			sinceV: 'age 9 (April 2010)',
			degrees: 'degrees',
			deg1: 'Software Eng. (UAB)',
			deg2: 'Robotics & Automation (Salesians Sarrià)',
			speaks: 'speaks',
			status: 'status',
			statusV: 'open to job offers',
			fuel: 'fuel',
			fuelV: 'coffee',
			carouselAria: 'Things I believe',
			prev: 'Previous',
			next: 'Next',
			goTo: (n: number) => `Go to quote ${n}`,
			statYears: (bc: number) => `years of coding, ${bc} of them B.C. (before ChatGPT)`,
			statAge: 'years old when I started writing code',
			achEyebrow: 'Achievements',
			achH2: 'Unlocked so far.',
			xp: 'XP',
			clickToClaim: 'click to claim',
			claimed: 'CLAIMED +10 XP',
			unlocked: 'ACHIEVEMENT UNLOCKED',
			toastXp: (title: string) => `+10 XP: ${title}`,
			toastAll: '100% completion. The only achievement left is hiring me.',
			sayHalf: 'Halfway there. Go on, collect them all.'
		},
		marquee: { aria: 'Things I work with', play: 'Play marquee', pause: 'Pause marquee' },
		exp: {
			eyebrow: 'Experience',
			h2a: "What I've actually",
			h2b: 'built and run.',
			lede: (areas: number, entries: number) =>
				`${areas} skill areas, ${entries} entries, zero buzzword padding. Slice it by skill, tech or context. Every card opens, and every tech tag is a filter.`,
			filters: 'Filters',
			searchPh: 'Search: docker, commerce, go...',
			searchLabel: 'Search experience',
			skillArea: 'Skill area',
			everything: 'Everything',
			context: 'Context',
			tech: 'Tech',
			matchMode: 'Match mode',
			any: 'any',
			all: 'all',
			gLang: 'Languages',
			gFrame: 'Frameworks',
			gTools: 'Tools & platforms',
			reset: 'Reset filters',
			showing: (n: number, total: number) => `Showing ${n} of ${total}`,
			filtered: 'filtered',
			expandAll: 'Expand all',
			collapseAll: 'Collapse all',
			details: 'Details',
			less: 'Less',
			filterBy: (t: string) => `Filter by ${t}`,
			emptyTitle: 'Nothing matches that.',
			emptyText: 'Not even Gandalf could sniff that one out. Try fewer filters, or ask me directly.',
			emptySay: "Nothing matches. Even I couldn't find that one."
		},
		projects: {
			eyebrow: 'Projects',
			h2a: 'Things I made',
			h2b: 'because I had to.',
			lede: 'Nothing off the shelf fit, so I built a store, a host, a package manager and an analytics engine.',
			visit: (d: string) => `Visit ${d}`,
			none: 'No public site'
		},
		hire: {
			eyebrow: 'Available for hire',
			h2: "Got something hard to build? Let's talk.",
			small:
				"I'm open to new job offers. I like problems with sharp edges: distributed systems, hosting, developer tooling and software that has to be right the first time.",
			ledeA: "Tell me what you're building and what's in the way. A few lines is plenty. I read everything and I'll write back from ",
			ledeB: '.',
			langs: 'You can write to me in English, Spanish, Catalan, German or French.',
			emailLabel: 'Your email',
			emailPh: 'your@email.com',
			buildLabel: 'What are we building?',
			buildPh: 'What are we building?',
			send: 'Email Quique',
			sending: 'Opening mail...',
			copy: (e: string) => `Copy ${e}`,
			copied: 'Copied',
			mosaic: 'every block is a project idea. pin yours.',
			subject: "Let's work together",
			defaultBody: "Hi Quique, I'd like to talk about a project.",
			replyTo: 'Reply to: ',
			toastSent: 'Your mail app should be opening. If not, copy the address below.',
			say: 'You did it! He will love this.',
			toastCopied: 'Copied! Paste it anywhere you like.'
		},
		retro: {
			company: 'A Happy Company',
			shortcuts: 'Site Shortcuts',
			home: 'Home',
			skills: 'Skills',
			hireLink: 'Hire',
			go2000: 'Go full 2000',
			back2026: 'Back to 2026',
			quickLinks: 'Quick Links',
			myGithub: 'My GitHub',
			service: 'Customer Service',
			contact247: 'Contact Quique 24/7',
			notReally: '(not literally 24/7, he sleeps)',
			guarantee: 'Security Guarantee',
			memberOf: 'Member of',
			b1: 'Made with Svelte 5',
			b2: 'Best viewed 800x600',
			b3: 'Powered by Docker',
			b4: 'Valid HTML 4.01 (lol)',
			finder: 'Fast Hire Finder',
			showMe: 'Show me the best engineer for:',
			anyEng: 'any engineer',
			onlyMe: 'specifically Quique',
			iNeed: 'I need:',
			needs: ['A web platform', 'A hosting backend', 'A package manager', 'Mission-critical software', 'Automation / robotics', 'Something weird'],
			starting: 'Starting:',
			whens: ['As soon as possible', 'Next month', 'Next quarter', 'When Y3K arrives'],
			size: 'Size:',
			sizes: ['Small', 'Medium', 'Large', 'Moon-sized'],
			go: 'Go!',
			news: 'Deals & News',
			newsItems: [
				'Save 40% on rewrites. Hire Quique before the legacy code finds you!',
				'New: zero-downtime deploys now available at participating terminals',
				'Get $50 or $100 cash back on your first bug fixed (not a real offer)',
				'Docker containers: Now with 30% more whale',
				'Experience big adventure in your own backlog'
			],
			corner: "Webmaster's Corner",
			visitor: 'You are visitor number',
			visitorNote: '(counted only in your own browser, like a very small honest guestbook)',
			fineA: 'All rights reserved. No animated GIFs were harmed in the making of this section.',
			guestbook: 'Sign my guestbook!',
			mailSubject: 'Fast Hire Finder request',
			mailBody: (project: string, start: string, size: string, mode: string) =>
				`Hi Quique,\n\nI used your Fast Hire Finder.\n\nProject type: ${project}\nStarting: ${start}\nSize: ${size}\nSearch mode: ${mode}\n\n`,
			modeAny: 'any engineer',
			modeMe: 'specifically you',
			toastDial: 'Dialing... *screeeeeeee-kshhhhh*'
		},
		footer: {
			made: 'Made near Barcelona with Svelte 5, an unreasonable amount of coffee and a blue merle Aussie called Gandalf.',
			elsewhere: 'Elsewhere',
			coffee: 'Buy me a coffee'
		},
		palette: {
			aria: 'Command palette',
			placeholder: 'Type a command or search...',
			label: 'Command',
			none: 'No command found. Try "hire".',
			navigate: 'navigate',
			run: 'run',
			go: 'Go to',
			actions: 'Actions',
			fun: 'Fun',
			retro: 'The 2000s corner',
			email: 'Email Quique',
			copy: 'Copy email address',
			github: 'Open GitHub',
			dark: 'Toggle dark mode',
			y2kOn: 'Travel to the year 2000',
			y2kOff: 'Leave the year 2000',
			summon: 'Summon Gandalf',
			summonSay: 'Woof! You rang?',
			trick: 'Make Gandalf do a trick',
			confetti: 'Confetti',
			sudoHint: 'permission granted',
			toastCopied: 'Email copied. Go on, write something.',
			sudo1: '[sudo] password for recruiter: ********',
			sudo2: 'Access granted. Opening the hire section...',
			language: 'Switch language'
		},
		mosaic: {
			t12: '12 blocks pinned. Is that a contribution graph or a Picasso?',
			say12: 'Ooh, are we painting? I love painting.',
			t36: '36 blocks. This is officially a gallery.'
		},
		mascot: {
			aria: 'Gandalf, a blue merle Australian Shepherd. Click for a surprise.',
			away: '(._.) Gandalf misses you. Come back',
			startle: ['Woof!', 'Whoa!', 'Too close!', 'Nope. Bye.'],
			confettiSay: 'Okay, okay! Who is a good boy? Me. Take the confetti!',
			clickToast: (n: number) => `You clicked Gandalf ${n} times. That's dedication. Hire Quique with it.`
		},
		eggs: {
			sudo1: 'quique is not in the sudoers file. This incident will be reported.',
			sudo2: 'Reported to: nobody. We have no one to report to.',
			hire: 'Wise choice. Wise, wise choice.',
			gandalf: 'You said my name! Woof!',
			woof: 'WOOF! Did someone say walk?',
			happy: 'That is my name, do not wear it out.',
			matrix: 'There is no spoon. There is only TypeScript.',
			rm: 'rm: cannot remove the future: permission denied',
			konami: 'KONAMI CODE ACCEPTED. +30 lives. Quique approves of your childhood.'
		},
		y2k: {
			on: 'Welcome to the year 2000. Your modem is dialing...',
			off: 'Back to the future. Welcome home.',
			sayOn: 'Whoa. Everything is beige now.',
			sayOff: 'Phew. Antialiasing!'
		}
	},
	content: {
	"roles": [
		"a problem solver",
		"a rocket-adjacent engineer",
		"a docker whisperer",
		"a robot wrangler",
		"a reformed PHP developer",
		"a package-manager inventor",
		"a person who reads the logs",
		"available for hire"
	],
	"principles": [
		{
			"quote": "I learned a lot of things the hard way.",
			"by": "me, in my own README"
		},
		{
			"quote": "At heart I'm a problem solver. I try to fix things that make life a little better, for others and for myself.",
			"by": "also me"
		},
		{
			"quote": "When nothing off the shelf was good enough, I built it from scratch: a store, a host, a package manager.",
			"by": "the git log"
		},
		{
			"quote": "Privacy is a design constraint. I linked sessions from connection data alone, with no device fingerprinting.",
			"by": "a socket, probably"
		},
		{
			"quote": "{bc} years of experience B.C. That stands for before ChatGPT.",
			"by": "my calendar"
		}
	],
	"achievements": [
		{
			"title": "Shopkeeper",
			"text": "Built my own e-commerce platform for digital goods, like Shopify but for in-game collectibles."
		},
		{
			"title": "Landlord",
			"text": "Built my own Docker-based hosting system. Game servers are the hungriest tenants."
		},
		{
			"title": "Dependency whisperer",
			"text": "Built package-manager logic from scratch, with caching and distribution layers."
		},
		{
			"title": "Trust no fingerprint",
			"text": "Built a socket-based analytics platform with strict session linking and zero device fingerprinting."
		},
		{
			"title": "Ground control",
			"text": "Worked on critical space projects pushing the next frontier of human exploration."
		},
		{
			"title": "First, do no harm",
			"text": "Worked on health applications that improve how clinical trials are understood and run."
		},
		{
			"title": "Double degree",
			"text": "Software Engineering (Computer Science) at UAB, plus a Grado Superior in Robotics and Industrial Automation at Salesians Sarrià, with an A+ in most of it."
		},
		{
			"title": "Scar tissue",
			"text": "Learned a lot of things the hard way. That one has no category."
		}
	],
	"marquee": [
		"TypeScript",
		"Go",
		"Svelte",
		"Docker",
		"Linux",
		"PHP",
		"C / C++",
		"WebSockets",
		"AWS",
		"Vue",
		"Maven / Gradle",
		"CSS",
		"Distributed systems",
		"Package managers",
		"Mission-critical software"
	],
	"quips": {
		"general": [
			"Woof. Don't mind me. I live in your viewport now.",
			"I herd things. Mostly deadlines.",
			"You shall not pass... without checking the hire button.",
			"Quique drew me in 24x24 pixels. I think he is proud.",
			"Good boy count: 1. Treat count: 0. Please advise.",
			"I know three tunnels. Do not ask me about the fourth.",
			"psst. the hire button works.",
			"A merle is never late. Nor is he early. He arrives precisely when he means to.",
			"Try pressing Ctrl+K. Or Cmd+K. I am not picky.",
			"There is a Konami code here somewhere. I did not say that."
		],
		"top": [
			"Woof! I'm Gandalf. Quique is a little shy, so I do the talking.",
			"Scroll down. The good stuff is not in the hero."
		],
		"about": [
			"Those achievements are real. The confetti is extra.",
			"He started coding at nine. I started at boot."
		],
		"experience": [
			"Try the filters. They are very satisfying.",
			"Filter by Go. Then fetch. Wait, fetch is not a filter.",
			"Every card opens. Every single one."
		],
		"projects": [
			"He built all of these. Yes, the package manager too.",
			"serverbench is a whole stack, not one project."
		],
		"hire": [
			"This is the part where you email him.",
			"Say hi. He replies. I have seen it.",
			"quique@osuna.dev. I will wait here. Good boys wait."
		]
	},
	"clickLines": [
		"Boop!",
		"Woof!",
		"I have a hitbox, you know.",
		"Belly rubs are extra.",
		"Click me 10 times. I dare you.",
		"Seven. You are committed.",
		"Nine. Ten is going to be great."
	],
	"areas": {
		"backend": {
			"label": "Backend & distributed systems",
			"blurb": "Services that stay up, scale out and do not wake anyone at 3am."
		},
		"infra": {
			"label": "Infrastructure & hosting",
			"blurb": "Containers, orchestration and running other people’s workloads safely."
		},
		"frontend": {
			"label": "Frontend & product",
			"blurb": "Interfaces people actually enjoy: dashboards, builders and storefronts."
		},
		"commerce": {
			"label": "Commerce, ads & growth",
			"blurb": "Selling digital goods, monetizing communities and getting found."
		},
		"data": {
			"label": "Data, analytics & statistics",
			"blurb": "Turning event streams into decisions, forecasts and moderation."
		},
		"security": {
			"label": "Security & trust",
			"blurb": "Privacy-respecting sessions, vulnerability detection and safe defaults."
		},
		"devtools": {
			"label": "Developer tooling",
			"blurb": "Package managers, build pipelines and tools for other engineers."
		},
		"foundations": {
			"label": "Computer science foundations",
			"blurb": "Formal training: the theory and engineering discipline underneath everything else."
		},
		"aerospace": {
			"label": "Aerospace & mission-critical",
			"blurb": "Software where failing is not an option and the stakes are orbital."
		},
		"robotics": {
			"label": "Robotics & automation",
			"blurb": "Industrial automation, mostly automotive, where software meets steel."
		},
		"health": {
			"label": "Health & clinical trials",
			"blurb": "Applications that help us understand and run clinical research."
		}
	},
	"contexts": {
		"product": "My own products",
		"industry": "Industry work",
		"education": "Education"
	},
	"sources": {
		"serverbench": "serverbench",
		"purecore": "purecore",
		"grifpkg": "grifpkg",
		"all of the above": "all of the above",
		"various": "various",
		"UAB": "UAB",
		"Aerospace, defense and security company": "Aerospace, defense and security company",
		"Robotics company": "Robotics company",
		"Salesians Sarrià": "Salesians Sarrià",
		"Health technology": "Health technology"
	},
	"entries": {
		"game-hosting": {
			"title": "Compute-intensive hosting",
			"summary": "A hosting service for game servers, some of the most resource-hungry and hardest workloads to manage well.",
			"detail": "Game servers are unforgiving: they eat CPU and memory, they are latency-sensitive, and players notice every hiccup. The hosting service had to schedule these workloads fairly, isolate them from one another, and recover quickly when something misbehaved. It was built across Go, JavaScript, TypeScript and PHP, with containers as the unit of isolation.",
			"highlights": [
				"Workload isolation per server",
				"Resource-aware scheduling",
				"Control plane in Go, dashboards in TypeScript"
			]
		},
		"permissions": {
			"title": "Role-based permissions",
			"summary": "High-granularity permissions so teams can split marketing, commerce, support and moderation.",
			"detail": "Communities are teams, and teams have roles. The permission system lets each community define who can touch what, so the moderation team never needs access to the store, and the marketing team never needs to see support tickets. It had to stay fast at check time, because every request asks the same question.",
			"highlights": [
				"Fine-grained, per-community roles",
				"Checked on every request",
				"Designed around real team structures"
			]
		},
		"tracking": {
			"title": "Cross-medium customer tracking",
			"summary": "Follows a customer across games, browsers and Discord to build one accurate interest profile.",
			"detail": "A single person shows up as a game account, a browser session and a Discord member. Stitching those identities into one profile is what makes upselling relevant instead of annoying. It feeds the webstore and creator studio so the right content reaches the right member.",
			"highlights": [
				"Identity stitching across three mediums",
				"Feeds store and creator recommendations",
				"Built with the privacy lessons from purecore"
			]
		},
		"realtime-ingest": {
			"title": "Real-time socket ingestion",
			"summary": "A socket-based analytics backend that keeps long-lived connections and turns them into sessions.",
			"detail": "purecore keeps connections open and reads the session directly from the connection, rather than from cookies or device identifiers. That keeps the data model simple and honest: if the socket is the same, the session is the same.",
			"highlights": [
				"Long-lived WebSocket connections",
				"Session identity from the connection",
				"Low overhead per event"
			]
		},
		"docker-hosting": {
			"title": "Docker-based hosting system",
			"summary": "My own container hosting system, built from scratch because nothing off the shelf fit.",
			"detail": "The hosting layer wraps Docker with the product logic a hosting business actually needs: provisioning, limits, lifecycle, billing hooks and a customer-facing panel. It is the foundation under serverbench, and it taught me more about Linux, cgroups and networking than any course.",
			"highlights": [
				"Provisioning and lifecycle management",
				"Per-container limits",
				"Customer panel on top"
			]
		},
		"byod": {
			"title": "Bring-your-own-device orchestrator",
			"summary": "Lets customers attach their own machines and run the same managed experience on them.",
			"detail": "Not everyone wants to rent capacity. The BYOD orchestrator lets a customer plug in their own hardware and get the same deployments, monitoring and controls, which means treating every machine as untrusted, remote and occasionally offline.",
			"highlights": [
				"Customer-owned machines as first-class nodes",
				"Same tooling as managed hosting",
				"Designed for flaky links"
			]
		},
		"cdn-edge": {
			"title": "Edge delivery and file caching",
			"summary": "Cached, edge-served downloads so dependencies resolve fast wherever the server is.",
			"detail": "A package manager lives or dies on download speed. grifpkg caches files with rich metadata and serves them from the edge, so installs stay quick and upstream sites are not hammered.",
			"highlights": [
				"File caching with metadata",
				"Edge delivery",
				"Gentle on upstream hosts"
			]
		},
		"linux-ops": {
			"title": "Linux operations",
			"summary": "Years of running real servers for real communities, where downtime has a Discord channel.",
			"detail": "Running PureVanilla and serverbench meant keeping Linux machines healthy for people who notice instantly when they are not. Monitoring, backups and incident response were part of the daily routine, not a separate team.",
			"highlights": [
				"Monitoring and backups",
				"Incident response with an audience",
				"Debugging in production with care"
			]
		},
		"creator-studio": {
			"title": "Creator studio",
			"summary": "A marketing dashboard for creators making videos and posts about the communities they love.",
			"detail": "The studio connects YouTube, TikTok and Twitch accounts, supports post monetization, and shows creators how their work performs. It had to feel like a creator tool, not an enterprise console.",
			"highlights": [
				"YouTube, TikTok and Twitch authentication",
				"Post monetization",
				"Creator-facing analytics"
			]
		},
		"cms": {
			"title": "CMS and website builder",
			"summary": "A CRM and website builder with a templating engine and a template marketplace.",
			"detail": "Communities build their own sites without touching code. Pages are composed from reusable modules, templates can be shared or sold in a marketplace, and the engine renders it all with predictable performance.",
			"highlights": [
				"Multi-page sites",
				"Reusable modules",
				"Integrated template marketplace"
			]
		},
		"storefronts": {
			"title": "Customizable webstores",
			"summary": "Each community gets a webstore it can make its own.",
			"detail": "The storefront has to look like the community that owns it, so theming goes deep while checkout stays consistent and trustworthy. It is the customer-facing half of the commerce platform.",
			"highlights": [
				"Per-community theming",
				"Consistent, trusted checkout",
				"Collectibles, badges and boosters"
			]
		},
		"modern-ui": {
			"title": "Modern component UIs",
			"summary": "Component-driven interfaces in Svelte and Vue, styled with Tailwind or plain CSS.",
			"detail": "I like small, fast interfaces. Svelte is my default, Vue when the team already lives there, and Tailwind or hand-written CSS depending on the project. This site is one example.",
			"highlights": [
				"Svelte first, Vue when it fits",
				"Tailwind or hand-written CSS",
				"Accessible by default"
			]
		},
		"commerce-platform": {
			"title": "E-commerce platform for digital goods",
			"summary": "My own Shopify-style platform, built for in-game collectibles, badges and boosters.",
			"detail": "Digital goods have different rules from physical ones: instant delivery, fraud, chargebacks and per-game integrations. The platform handles catalogs, checkout and delivery into the game, and gives each community its own webstore.",
			"highlights": [
				"Instant delivery into games",
				"Per-community webstores",
				"Built from scratch"
			]
		},
		"paid-plugins": {
			"title": "Paid plugins and purchase verification",
			"summary": "Sell dependencies, or authenticate with purchases made on other sites to authorize downloads.",
			"detail": "Developers can sell their work through the package manager, and buyers who already own a plugin elsewhere can prove it and download it. Authorizing downloads without breaking the install flow was the hard part.",
			"highlights": [
				"Selling dependencies",
				"Cross-site purchase verification",
				"Authorized downloads in the CLI"
			]
		},
		"ads": {
			"title": "Hosted download pages with ads",
			"summary": "Open-source developers earn revenue from hosted download pages, with ads served from our own pool.",
			"detail": "Open-source work should be able to pay for itself. Developers enable hosted download pages and earn from advertising served from the platform’s own ad pool, which kept quality high and tracking limited.",
			"highlights": [
				"Revenue for open-source developers",
				"First-party ad pool",
				"Opt-in per project"
			]
		},
		"promoted": {
			"title": "Promoted software",
			"summary": "Developers advertise paid plugins through the site and through text recommendations in the CLI.",
			"detail": "Discovery is the hard part of selling software. Promotions appear on the site and as quiet text suggestions in the command line, where developers are already looking for a solution.",
			"highlights": [
				"On-site promotion",
				"CLI text recommendations",
				"Respectful, non-intrusive placement"
			]
		},
		"seo-studio": {
			"title": "SEO studio and voting",
			"summary": "An SEO panel with a voting system, suggesting the sites where each member vote delivers the most.",
			"detail": "Communities list their sites and members vote for them. The studio suggests which third-party voting sites to use so every vote gets the most reach, which turns a loose chore into a measured growth loop.",
			"highlights": [
				"Integrated voting system",
				"Smart site suggestions",
				"Maximizes delivery per vote"
			]
		},
		"community-analytics": {
			"title": "Community analytics",
			"summary": "Everything a community needs to know about its growth, plus holiday prediction.",
			"detail": "Beyond the usual counts and charts, the analytics predict holiday effects and combine signals from the SEO and creator systems, so a community can see where its growth actually comes from.",
			"highlights": [
				"Standard growth metrics",
				"Holiday prediction",
				"Signals from SEO and creator tools"
			]
		},
		"automod": {
			"title": "Statistical auto-moderation",
			"summary": "High-ingest moderation using Perspective API that keeps recurring toxic members out of the conversation.",
			"detail": "Rather than judging each message alone, the system takes a statistical view of each member over time. Repeat offenders drift out of the conversation, while a one-off bad day does not get anyone banned.",
			"highlights": [
				"Perspective API scoring",
				"Per-member statistical history",
				"Built for high ingest"
			]
		},
		"interest-profiles": {
			"title": "Interest profiles and recommendations",
			"summary": "Builds an interest profile per customer to upsell webstore content or deliver creator media.",
			"detail": "Signals from games, browsers and Discord are merged into a profile that decides what to recommend. The goal was relevance: fewer, better suggestions.",
			"highlights": [
				"Profiles from multiple sources",
				"Store and creator recommendations",
				"Tuned for relevance over volume"
			]
		},
		"fingerprint-free": {
			"title": "Session linking without fingerprinting",
			"summary": "High-security session linking based purely on connection data, with no device fingerprinting.",
			"detail": "The easy way to track visitors is to fingerprint their devices. I did not want that. The platform ties sessions to properties of the connection itself, which keeps analytics useful and visitors unidentified.",
			"highlights": [
				"No device fingerprinting",
				"Connection-based identity",
				"High security standards"
			]
		},
		"vuln-detection": {
			"title": "Vulnerability detection",
			"summary": "Dependencies are fingerprinted and can be flagged as vulnerable, so developers learn about insecure code in use.",
			"detail": "Once files are fingerprinted, a known-bad version can be marked, and anyone depending on it gets a warning. It turns a package manager into an early warning system for the ecosystem.",
			"highlights": [
				"Fingerprinting of artifacts",
				"Flagging vulnerable versions",
				"Notifications for affected developers"
			]
		},
		"jar-pm": {
			"title": "JAR package manager",
			"summary": "A package manager that imports, updates and manages dependencies for Java software.",
			"detail": "Java plugin ecosystems often rely on manual downloads. grifpkg resolves, caches and updates dependencies automatically, with its own registry, CLI and distribution layer. Used mainly by the SpigotMC community.",
			"highlights": [
				"Registry, CLI and distribution layers",
				"Automatic updates",
				"Used in the SpigotMC community"
			]
		},
		"auto-index": {
			"title": "Automatic indexing",
			"summary": "Libraries and software are indexed automatically, with rich metadata and file caching.",
			"detail": "A registry is only as good as its coverage. Automatic indexing finds new releases, extracts metadata and caches the files, so the catalog stays current without maintainers doing the paperwork.",
			"highlights": [
				"Crawl and index new releases",
				"Rich metadata extraction",
				"File caching"
			]
		},
		"dep-compile": {
			"title": "Dependency compiling",
			"summary": "Some projects ship no .jar. grifpkg hooks into their git repositories and builds them with Maven or Gradle.",
			"detail": "When there is no precompiled artifact, the platform fetches the repository and builds it in a sandbox using Maven or Gradle, then serves the result like any other package.",
			"highlights": [
				"Git-driven builds",
				"Maven and Gradle support",
				"Sandboxed build environment"
			]
		},
		"local-import": {
			"title": "Automatic local importing",
			"summary": "Detects dependencies in an existing project and maps them to registry entries automatically.",
			"detail": "Adopting a package manager should not mean redoing your project by hand. The importer scans what is already there, matches it with registry identifiers and sets everything up.",
			"highlights": [
				"Scans existing projects",
				"Matches registry identifiers",
				"One command to adopt"
			]
		},
		"se-degree": {
			"title": "Software engineering degree (Computer Science)",
			"summary": "A degree in software engineering, with computer science at its core, at the Universitat Autònoma de Barcelona.",
			"detail": "Years of coding before the degree meant it landed differently: it put names, theory and discipline on things I had learned by breaking them. It sits alongside my robotics studies, so I have formal training on both the software and the hardware side of automation.",
			"highlights": [
				"Computer science fundamentals",
				"Software engineering practice",
				"Formal counterpart to years of self-taught building"
			]
		},
		"space": {
			"title": "Critical space projects",
			"summary": "Software for work that pushes the next frontier of human exploration.",
			"detail": "I work at a technology and engineering company specialized in aerospace, defense and security systems, with deep expertise in satellite navigation and mission-critical software. The details are not mine to share, but the standard is clear: rigorous, traceable and correct the first time.",
			"highlights": [
				"Mission-critical standards",
				"Satellite navigation context",
				"Correctness and traceability first"
			]
		},
		"robotics-work": {
			"title": "Industrial automation",
			"summary": "Software for a robotics company focused on industrial automation, mostly in the automotive industry.",
			"detail": "Factory-floor software is a different sport: the output moves real machines, uptime is money and cycle time is everything. It is where my robotics training and my software habits meet.",
			"highlights": [
				"Automotive industry",
				"Software that moves machines",
				"Cycle time and uptime matter"
			]
		},
		"degree": {
			"title": "Robotics and industrial automation (Grado Superior)",
			"summary": "A higher vocational degree (Grado Superior) in robotics and industrial automation, finished with an A+ in most subjects.",
			"detail": "Studied at Salesians Sarrià in Barcelona. Sensors, actuators, control and automation systems gave me a physical intuition for software. It is why I think about failure modes and latency before I write code, and why industrial automation feels like home.",
			"highlights": [
				"A+ in most subjects",
				"Control, sensing and automation",
				"Hardware intuition for software"
			]
		},
		"clinical": {
			"title": "Clinical trial applications",
			"summary": "Health applications that improve how we understand and run clinical trials.",
			"detail": "Clinical research depends on accurate data from real people. The applications make it easier to collect, understand and act on that data, where privacy and correctness are not negotiable.",
			"highlights": [
				"Better trial data",
				"Privacy and correctness first",
				"Software that helps medicine move faster"
			]
		}
	},
	"projects": {
		"serverbench": {
			"kind": "E-commerce, analytics and hosting",
			"blurb": "A full platform for online communities, especially game servers: an e-commerce platform for digital goods, an analytics tool for communities, and a bring-your-own-device hosting orchestrator.",
			"points": [
				"Store: communities sell collectibles, badges and boosters, with a customizable webstore for each one",
				"Hosting: a Docker-based orchestrator for resource-hungry game servers",
				"Studios: creator, SEO and CMS tools that share data with one analytics core"
			]
		},
		"grifpkg": {
			"kind": "Package manager",
			"blurb": "A package manager for Java plugins, server software and general-purpose code, used mostly by the SpigotMC community. It imports, updates and manages dependencies automatically.",
			"points": [
				"Custom caching and distribution layers for fast edge delivery",
				"Indexes libraries automatically and builds from source when no .jar exists",
				"Paid plugins, vulnerability detection and developer monetization built in"
			]
		},
		"purecore": {
			"kind": "Real-time analytics",
			"blurb": "A socket-based analytics platform with high security standards. Sessions are linked from connection data alone, with no device fingerprinting.",
			"points": [
				"Session linking built on the connection itself",
				"Privacy-first by design, with no fingerprinting shortcuts",
				"Real-time ingestion over WebSockets"
			]
		},
		"purevanilla": {
			"kind": "Community server",
			"blurb": "A vanilla Minecraft server project focused on a clean, true-to-original experience. Run like a product, with real infrastructure behind a game.",
			"points": [
				"Vanilla-first philosophy: fewer mods, more care",
				"A living community that needs uptime",
				"Where a lot of the hosting lessons started"
			]
		}
	}
}
};

export type Messages = typeof en;
