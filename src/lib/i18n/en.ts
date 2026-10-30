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
			language: 'Language',
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
			b3: "nominal.es, serverbench, grifpkg",
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
			p2: "By day I work at a company that builds aerospace, defense and security systems, with deep roots in satellite navigation and mission-critical software, and at a robotics company doing industrial automation, mostly in automotive. By night I build nominal.es, a suite of products for teams (identity, support, billing, analytics and hosting), plus tools for communities like a store, a host and a package manager.",
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
			emptySay: "Nothing matches. I sniffed everywhere."
		},
		projects: {
			eyebrow: 'Projects',
			h2a: 'Things I made',
			h2b: 'because I had to.',
			lede: "Nothing off the shelf fit, so I built my own: identity, support, billing, analytics, hosting, time tracking and a package manager.",
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
			made: 'Made near Barcelona with an unreasonable amount of coffee and a blue merle Aussie called Gandalf.',
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
			language: 'Switch language',
			"graveyard": "The graveyard",
			"goPersonal": "Go to the personal side",
			"goPro": "Go to the pro side",
			"goHome": "Back to the launcher"
		},
		mosaic: {
			t12: '12 blocks pinned. Is that a contribution graph or a Picasso?',
			say12: 'Ooh, are we painting? I love painting.',
			t36: '36 blocks. This is officially a gallery.'
		},
		mascot: {
			aria: 'Gandalf, a blue merle Australian Shepherd. Click for a surprise.',
			away: '(._.) Gandalf misses you. Come back',
			startle: [
	"Woof!",
	"Yip!",
	"Is that a squirrel?!",
	"Zoomies! Bye."
],
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
		},
			"graveyard": {
				"eyebrow": "The graveyard",
				"h2a": "Where good projects",
				"h2b": "go to rest.",
				"lede": "Every good developer has abandoned projects. Mine have a few cobwebs and a very good boy guarding them. Light a candle, or just press F.",
				"rip": "R.I.P.",
				"cause": "Cause of death",
				"dig": "Dig up the details",
				"rebury": "Rebury",
				"respects": "Respects paid",
				"pay": "Pay respects",
				"pressF": "press F to pay respects",
				"toastF": "F. Respects paid.",
				"toast10": "10 respects. They felt that.",
				"toast25": "25 respects. Gandalf is crying. Quietly.",
				"noYear": "year lost to history",
				"hint": "Click a tombstone to dig up the details.",
				"aria": "Abandoned projects"
			},
			"modes": {
				"personal": "Personal",
				"pro": "Pro",
				"home": "Home",
				"switch": "Switch version"
			},
			"launcher": {
				"meta": {
					"title": "Quique Osuna",
					"description": "Pick a door: the personal side (games, travel, a very good dog) or the pro side (experience, projects, hiring).",
					"og": "Two versions of one site: the personal side and the pro side."
				},
				"eyebrow": "Welcome",
				"h1a": "Hi, I'm Quique.",
				"h1b": "Pick a door.",
				"lede": "This site comes in two versions, depending on why you came.",
				"personalTitle": "Personal",
				"personalText": "Games, trips, a very good dog and the occasional bee. The human behind the code.",
				"personalCta": "Come hang out",
				"proTitle": "Pro",
				"proText": "Experience, projects and a hire button. The engineer, and what I can build for you.",
				"proCta": "Let's talk work",
				"last": "last time",
				"hint": "press 1 or 2, or use the arrow keys",
				"switchHint": "You can switch any time."
			},
			"pnav": {
				"top": "Hello",
				"me": "Me",
				"loves": "Loves",
				"skin": "Skin",
				"map": "Map"
			},
			"personal": {
				"meta": {
					"title": "Quique Osuna | The personal side",
					"description": "Games, travel, cruises, bricks and a blue merle Aussie. The human behind the code, near Barcelona.",
					"og": "The personal side of Quique: games, travel and a very good dog."
				},
				"eyebrow": "Personal",
				"h1a": "Hey, I'm Quique.",
				"h1b": "The human behind the code.",
				"lede": "Off the clock I'm Happy: I play too many games, collect cruises and countries, build things out of bricks and share the couch with a blue merle Aussie called Gandalf. I live near Barcelona, and I started coding at nine and never really stopped.",
				"facts": [
					"Near Barcelona",
					"Gamer",
					"Cruise lover",
					"Brick builder",
					"Dog person"
				],
				"ctaPics": "See the pics",
				"ctaMap": "Jump to the map",
				"proLinkA": "Looking for the professional side?",
				"proLink": "Visit the pro page",
				"heroAlt": "Quique on a cruise ship at sunset"
			},
			"me": {
				"eyebrow": "Pics of me",
				"h2a": "The person",
				"h2b": "behind the keyboard.",
				"lede": "A few photos, mostly on holiday, because that is when I leave the keyboard.",
				"open": "Open photo",
				"close": "Close"
			},
			"loves": {
				"eyebrow": "Things I love",
				"h2a": "Games and gadgets",
				"h2b": "that shaped me.",
				"lede": "The things I would take to a desert island, if the island had a power socket."
			},
			"skin": {
				"eyebrow": "Minecraft",
				"h2a": "This is my skin.",
				"h2b": "Go on, poke it.",
				"lede": "I have spent more hours in Minecraft than I would like to admit, and I even ran a vanilla server for a community. Here is my skin in 3D: drag to rotate, or make it walk.",
				"anims": {
					"idle": "Idle",
					"walk": "Walk",
					"run": "Run",
					"fly": "Fly",
					"wave": "Wave",
					"crouch": "Crouch",
					"hit": "Hit",
					"swim": "Swim"
				},
				"animLabel": "Animation",
				"speed": "Speed",
				"rotate": "Auto-rotate",
				"pause": "Pause",
				"play": "Play",
				"reset": "Reset view",
				"download": "Steal my skin",
				"hint": "drag to rotate",
				"loading": "Loading the 3D viewer...",
				"fail": "The 3D viewer could not start on this device.",
				"aria": "3D viewer of my Minecraft skin"
			},
			"map": {
				"eyebrow": "Travel",
				"h2a": "Places I have been",
				"h2b": "and places I am going.",
				"lede": "Cruises, trips and everywhere in between. This map fills up as I do.",
				"legend": {
					"home": "Home",
					"cruise": "Cruise",
					"trip": "Trip"
				},
				"places": "places",
				"cruises": "cruises",
				"trips": "trips",
				"empty": "Home base for now. The rest of the pins are on their way.",
				"pick": "Select a pin to read the story.",
				"aria": "World map with the places I have visited",
				"list": "Places"
			},
			"pfooter": {
				"text": "Thanks for stopping by.",
				"hire": "Looking to hire me?",
				"hireCta": "Visit the pro page",
				"home": "Back to the launcher"
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
		"Woof. Don't mind me. I live on your screen now.",
		"I herd things. Mostly deadlines.",
		"You shall not pass... without checking the hire button.",
		"Quique drew me in 24x24 pixels. I think he is proud.",
		"Good boy count: 1. Treat count: 0. Please advise.",
		"I know three tunnels. Do not ask me about the fourth.",
		"psst. the hire button works.",
		"A merle is never late. Nor is he early. He arrives precisely when he means to.",
		"Press Ctrl+K. I would, but I have no thumbs.",
		"Wait, did I hear the word walk? Did someone say walk?",
		"There is a Konami code here somewhere. I did not say that.",
		"Squirrel! ...Sorry. Where were we?"
	],
	"top": [
		"Woof! I'm Gandalf. Quique is busy coding, so I do the greeting.",
		"Scroll down. The best treats are not in the hero."
	],
	"about": [
		"Those achievements are real. The confetti is extra.",
		"He started coding at nine. I started chewing shoes at nine weeks."
	],
	"experience": [
		"Try the filters. I sniffed them. Very satisfying.",
		"Filter by Go. Then fetch. Wait, fetch is not a filter.",
		"Every card opens. I checked every single one. Twice."
	],
	"projects": [
		"He built all of these while I supervised from the couch.",
		"nominal has five products. I have one ball. Priorities."
	],
	"hire": [
		"This is the part where you email him.",
		"Say hi. He replies. I have seen it. Tail wags included.",
		"quique@osuna.dev. I will wait here. Good boys wait."
	],
			"graveyard": [
				"I buried a bone here once. Do not tell the projects.",
				"Every good developer has a graveyard. Quique's has a very good boy guarding it.",
				"Do not wake them. The last one is still compiling."
			],
			"launcher": [
				"Two doors. Door number one has the dog. Door number two has the CV.",
				"Pick wisely. Or pick both. Doors are free."
			],
			"me": [
				"That is Quique on a boat. I do not do boats. Too much sea, not enough couch.",
				"Look at him smiling. I took none of these photos. I was napping."
			],
			"loves": [
				"Sackboy and I have the same energy: soft, knitted, unstoppable.",
				"I would be great at Crash. A spin attack is just zoomies with a license."
			],
			"skin": [
				"Make the skin run. That is how I run when I hear the word walk.",
				"Everything in Minecraft is made of squares. Same as me, if you squint."
			],
			"map": [
				"Cruises have buffets. Do I get a plate? Asking for a friend.",
				"Quique travels a lot. I wait by the door. It is a whole thing."
			]
},
	"clickLines": [
	"Boop!",
	"Woof!",
	"I am a very good boy, you know.",
	"Belly rubs are extra.",
	"Halfway to a treat. Probably.",
	"Six. I am counting too.",
	"Seven. You are committed.",
	"Eight. I can see the treat.",
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
		},
			"ai": {
				"label": "AI-assisted products",
				"blurb": "Software that drafts, suggests and speeds things up, with a human always in the loop."
			}
	},
	"contexts": {
		"product": "My own products",
		"industry": "Industry work",
		"education": "Education"
	},
	"sources": {
		"serverbench": "serverbench",
		"grifpkg": "grifpkg",
		"all of the above": "all of the above",
		"various": "various",
		"UAB": "UAB",
		"Aerospace, defense and security company": "Aerospace, defense and security company",
		"Robotics company": "Robotics company",
		"Salesians Sarrià": "Salesians Sarrià",
		"Health technology": "Health technology",
			"Confidential client": "Confidential client",
			"Professional work": "Professional work",
			"Graveyard \u00b7 Bachillerato TFG": "Graveyard · Bachillerato TFG",
			"Graveyard \u00b7 personal experiment": "Graveyard · personal experiment",
			"Graveyard \u00b7 academic project": "Graveyard · academic project"
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
				"Built with the privacy lessons from serverbench"
			]
		},
		"realtime-ingest": {
			"title": "Real-time socket ingestion",
			"summary": "A socket-based analytics backend that keeps long-lived connections and turns them into sessions.",
			"detail": "serverbench keeps connections open and reads the session directly from the connection, rather than from cookies or device identifiers. That keeps the data model simple and honest: if the socket is the same, the session is the same.",
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
		},
			"obex-identity": {
				"title": "Identity and sessions (obex)",
				"summary": "One identity for every app: a single session carries scoped permissions across every nominal app, plus linked third-party access like GitHub App installations.",
				"detail": "obex is the identity layer of nominal.es. A single session carries scoped permissions across every app and links third-party access such as GitHub App installations. Teams can inspect and revoke any session instantly instead of waiting on token expiry, audit every permission grant and login, plug in SAML and OIDC single sign-on without per-app config, and issue rate-limited, resource-scoped API keys tied to the same identity system as user logins.",
				"highlights": [
					"Session inspector with instant revocation",
					"Exportable audit log",
					"SAML and OIDC org SSO",
					"Scoped, rate-limited API keys"
				]
			},
			"eris-support": {
				"title": "AI-assisted support (eris)",
				"summary": "Suggested answers before a ticket is even filed. AI drafts it, a human sends it.",
				"detail": "eris reads each ticket, matches it against every resolution the team has ever applied and drafts a fix. The team reviews, edits if needed and sends, so replies stay fast without losing the personal touch. When a ticket closes, the resolution and the data behind it are saved, so similar tickets resolve faster and more consistently. It works as a widget in your product, from the nominal dashboard, or straight from Discord.",
				"highlights": [
					"Human in the loop by design",
					"Knowledge that compounds with every closed ticket",
					"Widget, dashboard or Discord",
					"Every fix tied to the request that produced it"
				]
			},
			"hermes-billing": {
				"title": "Global billing and tax compliance (hermes)",
				"summary": "Subscriptions and one-time charges, with tax per country calculated and reported automatically, including Verifactu.",
				"detail": "hermes handles recurring subscriptions and one-time charges with the same billing setup. It accepts payments through hundreds of payment systems across hundreds of countries, calculates tax per country and reports it automatically, with a focus on EU tax compliance and built-in Verifactu support. It scales from a small side project configured in minutes to a large corporation, with extremely configurable billing setups.",
				"highlights": [
					"Hundreds of countries and payment systems",
					"EU tax compliance with Verifactu",
					"Subscriptions and one-time payments",
					"Side project to enterprise"
				]
			},
			"kinesis-events": {
				"title": "Event analytics at scale (kinesis)",
				"summary": "Over 1,000,000 events processed per hour, from SDK event to dashboard in milliseconds.",
				"detail": "kinesis takes events from a one-line SDK on web, mobile or backend, validates them against a typed, extensible schema so malformed events never pollute the data, and updates real-time dashboards (portals) within milliseconds. It can be self-hosted or managed, and supports event replay against new schemas, retention policies for raw events and threshold alerting.",
				"highlights": [
					"1,000,000+ events per hour",
					"Typed, extensible schemas",
					"Self-hosted or managed",
					"Real-time dashboards, replay and alerting"
				]
			},
			"archon-deploys": {
				"title": "Bring-your-own-hardware deploys (archon)",
				"summary": "Push to a repo and ship to your own hardware, with backups scheduled by default.",
				"detail": "archon manages remote machines from one panel, wherever they live. Push to GitHub or GitLab, and archon builds and versions the container automatically and deploys it to your machine, with a backup scheduled by default. Backups can be taken and restored on demand, and access to machines and containers can be shared with a team, scoped to exactly what each person needs.",
				"highlights": [
					"Remote machine management from one panel",
					"Git-driven container deploys",
					"Backups on demand and by default",
					"Granular team access"
				]
			},
			"workhours-app": {
				"title": "Offline-first time tracking (workhours)",
				"summary": "Time tracking made in Spain, compliant with Spanish labor law, installable as a PWA on any device and working offline.",
				"detail": "workhours is a cross-platform PWA for time tracking that complies with Spanish labor law. It works on iOS, Android, Windows, macOS and Linux, installs from the browser, records time even offline and syncs automatically, conflict-free and in real time, when connectivity returns. It adds precise geolocation of clock-ins and outs, an adjustment request system with a clear audit trail, vacation and sick leave management, and GDPR compliance with data kept in the EU and end-to-end encryption.",
				"highlights": [
					"Cross-platform PWA that works offline",
					"Real-time, conflict-free sync",
					"Legal compliance and GDPR",
					"Vacation, sick leave and adjustment requests"
				]
			},
			"verifactu": {
				"title": "Verifactu invoicing compliance",
				"summary": "Automated invoicing compliance with Spain's Verifactu regulation, across hermes and workhours.",
				"detail": "Verifactu is Spain's new framework for invoicing and tax compliance, created by the AEAT to modernize invoicing and fight tax fraud. hermes ships Verifactu support built in, and workhours is being updated so that its invoicing meets AEAT requirements automatically.",
				"highlights": [
					"Automatic compliance with the AEAT",
					"Verifactu support built into hermes",
					"workhours is on the way"
				]
			},
			"opencti-threat-intel": {
				"title": "Threat intelligence analysis (OpenCTI)",
				"summary": "Cybersecurity analysis software that spots trends and writes automated reports on the biggest threats in the world. The client cannot be disclosed.",
				"detail": "Built cybersecurity analysis software with OpenCTI to understand threat trends and write automated reports about the biggest threats in the world. It processes millions of events every year and turns that raw threat data into reports people can actually read and act on. The client cannot be disclosed.",
				"highlights": [
					"Built with OpenCTI",
					"Millions of events processed every year",
					"Automated reports on the biggest global threats",
					"Confidential client"
				]
			},
			"hours-offers": {
				"title": "Time tracking and offer management",
				"summary": "Clock in / clock out software and an offer management system that controls human hours from beginning to end and tracks every offer from proposal to conclusion.",
				"detail": "Created a clock in / clock out system and an offer management system that control human hours from beginning to end, and follow every offer from proposal to conclusion. It manages projects that bill millions of euros, so hours, offers and billing have to line up exactly.",
				"highlights": [
					"Clock in / clock out for human hours",
					"Offer flow from proposal to conclusion",
					"Projects billing millions of euros",
					"Hours and offers tied to project billing"
				]
			},
			"national-data": {
				"title": "National data platform",
				"summary": "A national project that brings data from all places together into a single site, so people can understand the country from many different perspectives.",
				"detail": "Collaborated on the implementation and maintenance of a national project that brings data from all places together into a single site, made for nerds (and for nerds disguised as scientists and researchers) to understand the country from all sorts of different perspectives.",
				"highlights": [
					"Implementation and ongoing maintenance",
					"Data from all places in a single site",
					"Built for scientists, researchers and curious nerds"
				]
			},
			"slate": {
	"title": "Slate: a local classroom platform",
	"summary": "A local 'Google Classroom' for school: a digital blackboard that syncs to students' notebooks, plus grade tracking, deliveries and school events. My Bachillerato final project (TFG), graded 10/10.",
	"detail": "Slate was my final project (TFG) for the Bachillerato Tecnológico, and it was graded 10/10. It is a local Google Classroom experience for a school. The digital blackboard syncs automatically to students' notebooks, and the platform also tracks grades and deliveries and shows school events. It had a native Android app and a web version, both on a PHP backend. It now rests in the graveyard.",
	"highlights": [
		"Graded 10/10",
		"Digital blackboard synced automatically to students' notebooks",
		"Grades, deliveries and school events",
		"Native Android app plus web version, PHP backend"
	]
},
			"sodge": {
				"title": "Sodge: interest-matching social network",
				"summary": "A social network that automatically showed you people with similar interests, using word matching built on neural networks, around 2017.",
				"detail": "Sodge was a personal experiment from around 2017, years before AI went mainstream: a social network that used word matching built upon neural networks to automatically show you people with similar interests. It ran on web and Android with a PHP backend. It now rests in the graveyard.",
				"highlights": [
					"Interest matching with neural-network-based word matching",
					"Built around 2017, before AI went mainstream",
					"Web and Android",
					"PHP backend"
				]
			},
			"vidfeed": {
				"title": "thememepage: infinite video feed",
				"summary": "A TikTok-style page for endlessly scrolling funny internet videos, built around 2014, long before vertical content was a thing.",
				"detail": "Around 2014 I built a page much like today's TikTok: infinite scrolling through funny internet videos, years before vertical content was a thing. 'Infinite' is a generous word: the list was pretty short, and I was the only user. It was written in JavaScript and now rests in the graveyard.",
				"highlights": [
					"Infinite-scroll video feed",
					"Built around 2014, ahead of vertical video",
					"JavaScript",
					"One very loyal user (me)"
				]
			},
			"greenie": {
				"title": "Greenie: plant health from a photo",
				"summary": "An Android app with a Python backend that tells you how healthy a plant is from a single picture, using a model trained locally with PyTorch.",
				"detail": "Greenie was an academic project: an Android-only app where you take a picture of any plant and see its health. The backend was written in Python, and the model was trained locally with PyTorch. It now rests in the graveyard.",
				"highlights": [
					"Plant health from a single photo",
					"Model trained locally with PyTorch",
					"Android app, Python backend",
					"Academic project"
				]
			},
			"openagv": {
				"title": "OpenAGV: an omniwheel robot",
				"summary": "An automated guided vehicle on omniwheels that navigates from A to B by itself, with a radar, a fully featured UI, and Bluetooth remote control with automated obstacle avoidance.",
				"detail": "OpenAGV was an academic project from 2021: an AGV (automated guided vehicle) system that automatically navigated from A to B on omniwheels. It was written in C and incorporated a radar with a fully featured UI, plus Bluetooth for remote control with automated obstacle avoidance. It now rests in the graveyard.",
				"highlights": [
					"Automatic navigation from A to B on omniwheels",
					"Radar with a fully featured UI",
					"Bluetooth remote control with automated obstacle avoidance",
					"Written in C"
				]
			}
	},
	"projects": {
		"serverbench": {
	"kind": "E-commerce, analytics and hosting",
	"blurb": "A full platform for online communities, especially game servers (formerly purecore): an e-commerce platform for digital goods, a privacy-first analytics tool and a bring-your-own-device hosting orchestrator. Several of its features now live on as nominal.es products.",
	"points": [
		"Store: communities sell collectibles, badges and boosters, with a customizable webstore for each one",
		"Hosting: a Docker-based orchestrator for resource-hungry game servers",
		"Analytics: socket-based, linking sessions from connection data alone, with no device fingerprinting",
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
		"purevanilla": {
			"kind": "Community server",
			"blurb": "A vanilla Minecraft server project focused on a clean, true-to-original experience. Run like a product, with real infrastructure behind a game.",
			"points": [
				"Vanilla-first philosophy: fewer mods, more care",
				"A living community that needs uptime",
				"Where a lot of the hosting lessons started"
			]
		},
			"workhours": {
				"kind": "Time tracking made in Spain",
				"blurb": "Effortless time tracking that complies with Spanish labor law. A cross-platform PWA for workers who deserve the best.",
				"points": [
					"Works on any device and offline, syncing automatically when you reconnect",
					"Geolocated clock-ins, adjustment requests with a clear audit trail, vacation and sick leave management",
					"GDPR compliant: data stays in the EU, end-to-end encrypted. Verifactu invoicing support on the way"
				]
			}
	},
			"notes": {
				"docker-hosting": "It started inside serverbench and lives on today as archon at nominal.es.",
				"byod": "Today it lives on as archon at nominal.es: push to a repo, ship to your own hardware.",
				"permissions": "The same idea grew into obex at nominal.es: one identity, scoped permissions across every app.",
				"realtime-ingest": "That analytics core now lives on as kinesis at nominal.es.",
				"community-analytics": "Its analytics side now lives on as kinesis at nominal.es.",
				"commerce-platform": "Its billing and tax side now lives on as hermes at nominal.es."
			},
			"nominal": {
	"obex": {
		"tagline": "One identity for every app you build.",
		"summary": "A single obex session carries scoped permissions across every nominal app, plus linked third-party access like GitHub App installations.",
		"stat": {
			"value": "",
			"label": ""
		},
		"points": [
			"Session inspector",
			"Full audit log",
			"Org SSO",
			"Scoped API keys"
		]
	},
	"eris": {
		"tagline": "Keep your users happy, automatically.",
		"summary": "Drop a snippet into your product. Users get suggested answers before a ticket is even filed. AI drafts it, a human sends it.",
		"stat": {
			"value": "",
			"label": ""
		},
		"points": [
			"Smart suggestions, human in the loop",
			"Knowledge that compounds",
			"Widget, platform, or Discord",
			"Consistent resolutions"
		]
	},
	"hermes": {
		"tagline": "Get paid from anywhere, compliantly.",
		"summary": "The same billing setup handles recurring subscriptions or one-time charges, calculates tax per country, and reports it, including Verifactu, automatically.",
		"stat": {
			"value": "",
			"label": ""
		},
		"points": [
			"Hundreds of countries",
			"EU tax compliance",
			"From side project to enterprise",
			"Flexible billing"
		]
	},
	"kinesis": {
		"tagline": "Understand your product at any scale.",
		"summary": "Events from web, mobile or backend, validated against typed schemas and shown on real-time dashboards.",
		"stat": {
			"value": "1,000,000+",
			"label": "events processed per hour"
		},
		"points": [
			"Extreme ease of implementation",
			"Self-hosted or managed",
			"Typed, extensible schemas",
			"Beautiful, reliable portals"
		]
	},
	"archon": {
		"tagline": "Bring your own hardware. We handle the rest.",
		"summary": "Manage your own machines remotely and deploy containers straight from GitHub or GitLab, with backups included.",
		"stat": {
			"value": "",
			"label": ""
		},
		"points": [
			"Remote machine management",
			"Git-driven containers",
			"Backups, on demand",
			"Granular team access"
		]
	}
},
			"graveyard": {
				"slate": {
	"name": "slate",
	"tag": "Bachillerato TFG",
	"year": "2019",
	"epitaph": "It graded everyone's homework. The jury graded it 10/10.",
	"cause": "Graduation (with a 10/10).",
	"summary": "A local 'Google Classroom' for school: the digital blackboard synced automatically to students' notebooks, with grade tracking, deliveries and even school events. A native Android app and a web version, PHP backend. Graded 10/10."
},
				"sodge": {
					"name": "sodge",
					"tag": "Personal experiment",
					"year": "c. 2017",
					"epitaph": "Matched people by interests with neural networks before it was cool. Never matched itself with a single user.",
					"cause": "Natural causes (no users).",
					"summary": "A social network that automatically showed you people with similar interests, using word matching built on neural networks, long before AI went mainstream. Web and Android, PHP backend."
				},
				"feed": {
					"name": "thememepage",
					"tag": "Personal experiment",
					"year": "c. 2014",
					"epitaph": "Infinite scroll. Infinite is a generous word: the list had a dozen videos and exactly one user.",
					"cause": "Ran out of videos.",
					"summary": "A TikTok-style page for endlessly scrolling funny internet videos, years before vertical content was a thing. The list was short and I was the only user. JavaScript."
				},
				"greenie": {
					"name": "greenie",
					"tag": "Academic project",
					"year": "2023",
					"epitaph": "It could tell you your plant was dying. It could not stop it.",
					"cause": "Graduated. The plants did not.",
					"summary": "An Android-only app with a Python backend: take a picture of any plant and see how healthy it is, using a model trained locally with PyTorch."
				},
			"openagv": {
				"name": "openagv",
				"tag": "Academic project",
				"year": "2021",
				"epitaph": "It avoided every obstacle in the room. The deadline was not on the radar.",
				"cause": "Deadline (not detected by radar).",
				"summary": "An AGV that automatically navigated from A to B on omniwheels. Written in C, with a radar and a fully featured UI, plus Bluetooth remote control with automated obstacle avoidance."
			}
			},
			"clickMore": [
				"Again? I love it.",
				"Still here? Respect.",
				"My tail is going to fall off.",
				"Is this a game? I like this game.",
				"More boops. More boops.",
				"Ten more clicks for another treat. I am keeping count."
			],
			"photos": {
				"cruise": {
					"caption": "Golden hour, on a cruise",
					"alt": "Quique standing on a cruise ship deck at sunset"
				},
				"sister": {
					"caption": "With my sister, caught in a mirror",
					"alt": "Quique and his sister reflected in a round mirror in a sunny courtyard"
				},
				"gf": {
					"caption": "A walk with my girlfriend, chasing the sunset",
					"alt": "Quique and his girlfriend smiling on a hillside walk at sunset"
				},
				"bee": {
					"caption": "Not me: a bee on my lavender",
					"alt": "A bumblebee on lavender flowers in the garden"
				}
			},
			"loves": {
				"sackboy": {
					"name": "LittleBigPlanet",
					"tag": "Play. Create. Share.",
					"text": "Sackboy proved that a game can be a toolbox. Building levels and sharing them was half the fun, and probably where my \"I will just build it myself\" habit started."
				},
				"tomb": {
					"name": "Tomb Raider",
					"tag": "Lara, in glorious low-poly",
					"text": "Ruins, puzzles and an astonishing amount of patience. The original Lara still looks like a handful of triangles and still feels like an adventure."
				},
				"mindstorms": {
					"name": "LEGO Mindstorms",
					"tag": "Where the robots started",
					"text": "A brick that could drive and a sensor that could see. Long before the robotics degree, and before an AGV with its own radar, there was a LEGO robot on my floor."
				},
				"crash": {
					"name": "Crash Bandicoot",
					"tag": "Spin, jump, repeat",
					"text": "Pure 90s joy and rage in equal parts. Still the best argument that a spin attack solves most problems."
				}
			},
			"places": {
				"barcelona": {
					"name": "Barcelona",
					"note": "Home base. Where every trip starts and ends."
				}
			}
}
};

export type Messages = typeof en;
