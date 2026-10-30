import type { Messages } from './en.ts';

export const de: Messages = {
	ui: {
		meta: {
			title: 'Quique Osuna | Softwareentwickler, offen für Angebote',
			description:
				'Quique (Happy) baut Software, die funktionieren muss: Luft- und Raumfahrt, Robotik, Gesundheit, Hosting, E-Commerce und Entwickler-Tools. Programmiert seit dem Alter von 9, lebt in der Nähe von Barcelona und ist offen für neue Aufgaben.',
			og: 'Software für den Weltraum, für Roboter und für die seltsameren Ecken des Internets. Offen für neue Aufgaben: quique@osuna.dev'
		},
		nav: {
			top: 'Hallo',
			about: 'Über mich',
			experience: 'Erfahrung',
			projects: 'Projekte',
			hire: 'Engagier mich',
			sections: 'Bereiche',
			home: 'quique, zurück nach oben',
			palette: 'Befehlspalette öffnen',
			dark: 'Dunkelmodus umschalten',
			darkTitle: 'Dunkel / hell',
			y2kTitle: 'Reise ins Jahr 2000',
			language: 'Sprache',
		},
		hero: {
			eyebrow: 'Hallo, ich bin Quique',
			h1a: 'Ich baue Software,',
			h1b: 'die ',
			h1em: 'funktionieren',
			h1c: ' muss.',
			retro: 'Willkommen auf Quiques Homepage!!',
			ledeA:
				'Ich habe mit neun angefangen zu programmieren und nie wirklich aufgehört. Heute baue ich Software für Raumfahrt, Roboter und Gesundheit, dazu ein paar seltsame, wunderbare eigene Produkte. Ich lebe in der Nähe von Barcelona, im Netz nennt man mich ',
			ledeBold: 'Happy',
			ledeB: ', und ich bin offen für neue Aufgaben.',
			rightNow: 'gerade bin ich',
			cta: 'Engagier mich',
			copied: 'Kopiert',
			copyAria: 'E-Mail-Adresse kopieren',
			toastCopied: 'E-Mail kopiert. Jetzt schreib etwas Nettes.',
			years: (n: number) => `${n}+ Jahre Code`,
			pressA: 'drück',
			pressB: 'zum Erkunden',
			speaks: 'spreche',
			profileAria: 'Kurzprofil',
			open: 'Offen',
			onBranch: 'auf Branch',
			availableNow: 'jetzt verfügbar',
			codeAria: 'Profil als Code',
			recommended: 'Empfohlen',
			alertTitle: 'Mögliche großartige Zusammenarbeit',
			alertText: 'Review empfohlen: Sag Hallo, bevor es jemand anderes tut.',
			hireQL: 'Hire QL',
			workingOn: 'Arbeite an',
			sideQuests: 'Nebenquests',
			currentBranch: 'Aktueller Branch',
			b1: 'geschäftskritisch, Satellitennavigation',
			b2: 'Industrieautomatisierung, Automobil',
			b3: "nominal.es, serverbench, grifpkg",
			construction: 'IM AUFBAU',
			mosaic: 'zum Malen drüberfahren. klicken, um einen Block zu fixieren.'
		},
		about: {
			eyebrow: 'Über mich',
			h2a: 'Problemlöser,',
			h2b: 'aus Gewohnheit.',
			p1a: 'Ich bin Quique, ',
			p1bold: 'Happy',
			p1b: ' im Netz. Ich programmiere, seit ich mich erinnern kann, einen Computer angefasst zu haben, und lebe in der Nähe von Barcelona. Ich habe einen Haufen Nebenprojekte, die es nie in eine Bio geschafft haben, aber im Kern versuche ich, Dinge zu reparieren, die das Leben ein bisschen besser machen, für andere und für mich.',
			p2: "Tagsüber arbeite ich bei einem Unternehmen, das Luft- und Raumfahrt-, Verteidigungs- und Sicherheitssysteme baut, mit tiefen Wurzeln in Satellitennavigation und geschäftskritischer Software, und bei einem Robotikunternehmen für Industrieautomatisierung, vor allem im Automobilbereich. Nachts baue ich nominal.es, eine Produktfamilie für Teams (Identität, Support, Abrechnung, Analytics und Hosting), dazu Werkzeuge für Communities wie einen Shop, einen Hoster und einen Paketmanager.",
			p3: 'Ich habe zwei Abschlüsse: Software Engineering (Informatik) an der UAB und ein Grado Superior (höhere Berufsausbildung) in Robotik und Industrieautomatisierung an der Salesians Sarrià. Das merkt man. Ich denke an Fehlerfälle, Latenz und die physische Welt, bevor ich an Frameworks denke.',
			facts: 'Kurzfakten',
			alias: 'Alias',
			base: 'Wohnort',
			baseV: 'nahe Barcelona',
			since: 'programmiert seit',
			sinceV: '9 Jahren (April 2010)',
			degrees: 'Abschlüsse',
			deg1: 'Software Engineering (UAB)',
			deg2: 'Robotik & Automatisierung (Salesians Sarrià)',
			speaks: 'spreche',
			status: 'Status',
			statusV: 'offen für Jobangebote',
			fuel: 'Treibstoff',
			fuelV: 'Kaffee',
			carouselAria: 'Woran ich glaube',
			prev: 'Zurück',
			next: 'Weiter',
			goTo: (n: number) => `Zu Zitat ${n}`,
			statYears: (bc: number) => `Jahre Programmiererfahrung, davon ${bc} v. Chr. (vor ChatGPT)`,
			statAge: 'Jahre alt, als ich anfing, Code zu schreiben',
			achEyebrow: 'Erfolge',
			achH2: 'Bisher freigeschaltet.',
			xp: 'XP',
			clickToClaim: 'zum Einlösen klicken',
			claimed: 'EINGELÖST +10 XP',
			unlocked: 'ERFOLG FREIGESCHALTET',
			toastXp: (title: string) => `+10 XP: ${title}`,
			toastAll: '100 % abgeschlossen. Der einzige Erfolg, der noch fehlt, ist mich zu engagieren.',
			sayHalf: 'Halbzeit. Los, sammle sie alle.'
		},
		marquee: { aria: 'Womit ich arbeite', play: 'Laufband abspielen', pause: 'Laufband anhalten' },
		exp: {
			eyebrow: 'Erfahrung',
			h2a: 'Was ich wirklich',
			h2b: 'gebaut und betrieben habe.',
			lede: (areas: number, entries: number) =>
				`${areas} Kompetenzbereiche, ${entries} Einträge, null Buzzword-Füllmaterial. Filtere nach Kompetenz, Technologie oder Kontext. Jede Karte lässt sich öffnen, und jedes Technologie-Tag ist ein Filter.`,
			filters: 'Filter',
			searchPh: 'Suchen: docker, commerce, go...',
			searchLabel: 'Erfahrung durchsuchen',
			skillArea: 'Kompetenzbereich',
			everything: 'Alles',
			context: 'Kontext',
			tech: 'Technik',
			matchMode: 'Übereinstimmungsmodus',
			any: 'eine',
			all: 'alle',
			gLang: 'Sprachen',
			gFrame: 'Frameworks',
			gTools: 'Tools & Plattformen',
			reset: 'Filter zurücksetzen',
			showing: (n: number, total: number) => `${n} von ${total} angezeigt`,
			filtered: 'gefiltert',
			expandAll: 'Alle aufklappen',
			collapseAll: 'Alle zuklappen',
			details: 'Details',
			less: 'Weniger',
			filterBy: (t: string) => `Nach ${t} filtern`,
			emptyTitle: 'Dazu passt nichts.',
			emptyText: 'Nicht mal Gandalf konnte das aufspüren. Probier weniger Filter oder frag mich direkt.',
			emptySay: "Nichts passt. Ich habe überall geschnüffelt."
		},
		projects: {
			eyebrow: 'Projekte',
			h2a: 'Dinge, die ich gebaut habe,',
			h2b: 'weil ich musste.',
			lede: "Nichts Fertiges passte, also habe ich meine eigenen Produkte gebaut: Identität, Support, Abrechnung, Analytics, Hosting, Zeiterfassung und einen Paketmanager.",
			visit: (d: string) => `${d} besuchen`,
			none: 'Keine öffentliche Website'
		},
		hire: {
			eyebrow: 'Verfügbar für Aufträge',
			h2: 'Etwas Schwieriges zu bauen? Lass uns reden.',
			small:
				'Ich bin offen für neue Jobangebote. Ich mag Probleme mit scharfen Kanten: verteilte Systeme, Hosting, Entwickler-Tools und Software, die auf Anhieb stimmen muss.',
			ledeA: 'Erzähl mir, was du baust und was im Weg steht. Ein paar Zeilen reichen. Ich lese alles und antworte dir von ',
			ledeB: '.',
			langs: 'Du kannst mir auf Deutsch, Englisch, Spanisch, Katalanisch oder Französisch schreiben.',
			emailLabel: 'Deine E-Mail',
			emailPh: 'deine@email.de',
			buildLabel: 'Was bauen wir?',
			buildPh: 'Was bauen wir?',
			send: 'Quique mailen',
			sending: 'Mail wird geöffnet...',
			copy: (e: string) => `${e} kopieren`,
			copied: 'Kopiert',
			mosaic: 'jeder Block ist eine Projektidee. fixiere deine.',
			subject: 'Lass uns zusammenarbeiten',
			defaultBody: 'Hallo Quique, ich würde gern über ein Projekt sprechen.',
			replyTo: 'Antwort an: ',
			toastSent: 'Deine Mail-App sollte sich gleich öffnen. Falls nicht, kopiere die Adresse unten.',
			say: 'Geschafft! Er wird es lieben.',
			toastCopied: 'Kopiert! Füge es ein, wo du willst.'
		},
		retro: {
			company: 'Ein Happy-Unternehmen',
			shortcuts: 'Seiten-Shortcuts',
			home: 'Start',
			skills: 'Fähigkeiten',
			hireLink: 'Engagieren',
			go2000: 'Ganz ins Jahr 2000',
			back2026: 'Zurück ins Jahr 2026',
			quickLinks: 'Schnellzugriff',
			myGithub: 'Mein GitHub',
			service: 'Kundenservice',
			contact247: 'Quique 24/7 kontaktieren',
			notReally: '(nicht wörtlich 24/7, er schläft)',
			guarantee: 'Sicherheitsgarantie',
			memberOf: 'Mitglied bei',
			b1: 'Gebaut mit Svelte 5',
			b2: 'Optimiert für 800x600',
			b3: 'Angetrieben von Docker',
			b4: 'Valides HTML 4.01 (lol)',
			finder: 'Schneller Entwickler-Finder',
			showMe: 'Zeig mir den besten Entwickler für:',
			anyEng: 'irgendeinen Entwickler',
			onlyMe: 'ganz speziell Quique',
			iNeed: 'Ich brauche:',
			needs: ['Eine Webplattform', 'Ein Hosting-Backend', 'Einen Paketmanager', 'Geschäftskritische Software', 'Automatisierung / Robotik', 'Etwas Seltsames'],
			starting: 'Start:',
			whens: ['So schnell wie möglich', 'Nächsten Monat', 'Nächstes Quartal', 'Wenn Y3K kommt'],
			size: 'Größe:',
			sizes: ['Klein', 'Mittel', 'Groß', 'Mondgroß'],
			go: 'Los!',
			news: 'Angebote & Neuigkeiten',
			newsItems: [
				'40 % sparen bei Neuentwicklungen. Engagiere Quique, bevor der Legacy-Code dich findet!',
				'Neu: Deployments ohne Ausfallzeit jetzt an teilnehmenden Terminals verfügbar',
				'50 oder 100 € Cashback auf deinen ersten behobenen Bug (kein echtes Angebot)',
				'Docker-Container: jetzt mit 30 % mehr Wal',
				'Erlebe ein großes Abenteuer in deinem eigenen Backlog'
			],
			corner: 'Webmasters Ecke',
			visitor: 'Du bist Besucher Nummer',
			visitorNote: '(nur in deinem eigenen Browser gezählt, wie ein sehr kleines, ehrliches Gästebuch)',
			fineA: 'Alle Rechte vorbehalten. Bei der Entstehung dieses Bereichs kam kein animiertes GIF zu Schaden.',
			guestbook: 'Trag dich in mein Gästebuch ein!',
			mailSubject: 'Anfrage über den Schnellen Entwickler-Finder',
			mailBody: (project: string, start: string, size: string, mode: string) =>
				`Hallo Quique,\n\nich habe deinen Schnellen Entwickler-Finder benutzt.\n\nProjektart: ${project}\nStart: ${start}\nGröße: ${size}\nSuchmodus: ${mode}\n\n`,
			modeAny: 'irgendein Entwickler',
			modeMe: 'ganz speziell du',
			toastDial: 'Wähle... *screeeeeeee-kshhhhh*'
		},
		footer: {
			made: 'Gebaut in der Nähe von Barcelona mit einer unvernünftigen Menge Kaffee und einem Blue-Merle-Australian-Shepherd namens Gandalf.',
			elsewhere: 'Anderswo',
			coffee: 'Spendier mir einen Kaffee'
		},
		palette: {
			aria: 'Befehlspalette',
			placeholder: 'Befehl eingeben oder suchen...',
			label: 'Befehl',
			none: 'Kein Befehl gefunden. Versuch „hire“.',
			navigate: 'navigieren',
			run: 'ausführen',
			go: 'Gehe zu',
			actions: 'Aktionen',
			fun: 'Spaß',
			retro: 'Die 2000er-Ecke',
			email: 'Quique mailen',
			copy: 'E-Mail-Adresse kopieren',
			github: 'GitHub öffnen',
			dark: 'Dunkelmodus umschalten',
			y2kOn: 'Reise ins Jahr 2000',
			y2kOff: 'Das Jahr 2000 verlassen',
			summon: 'Gandalf herbeirufen',
			summonSay: 'Wuff! Hast du gerufen?',
			trick: 'Gandalf einen Trick machen lassen',
			confetti: 'Konfetti',
			sudoHint: 'Zugriff gewährt',
			toastCopied: 'E-Mail kopiert. Los, schreib etwas.',
			sudo1: '[sudo] Passwort für Recruiter: ********',
			sudo2: 'Zugriff gewährt. Öffne den Bereich zum Engagieren...',
			language: 'Sprache wechseln',
			"graveyard": "Der Friedhof",
			"goPersonal": "Zur persönlichen Seite",
			"goPro": "Zur beruflichen Seite",
			"goHome": "Zurück zum Start"
		},
		mosaic: {
			t12: '12 Blöcke fixiert. Ist das ein Contribution-Graph oder ein Picasso?',
			say12: 'Ooh, malen wir? Ich liebe Malen.',
			t36: '36 Blöcke. Das ist jetzt offiziell eine Galerie.'
		},
		mascot: {
			aria: 'Gandalf, ein Blue-Merle-Australian-Shepherd. Klick für eine Überraschung.',
			away: '(._.) Gandalf vermisst dich. Komm zurück',
			startle: [
	"Wuff!",
	"Jaul!",
	"Ist das ein Eichhörnchen?!",
	"Zoomies! Tschüss."
],
			confettiSay: 'Okay, okay! Wer ist ein guter Junge? Ich. Hier, das Konfetti!',
			clickToast: (n: number) => `Du hast ${n}-mal auf Gandalf geklickt. Das ist Hingabe. Engagiere Quique damit.`
		},
		eggs: {
			sudo1: 'quique steht nicht in der sudoers-Datei. Dieser Vorfall wird gemeldet.',
			sudo2: 'Gemeldet an: niemanden. Wir haben niemanden, dem wir melden könnten.',
			hire: 'Kluge Wahl. Sehr kluge Wahl.',
			gandalf: 'Du hast meinen Namen gesagt! Wuff!',
			woof: 'WUFF! Hat jemand Gassi gesagt?',
			happy: 'Das ist mein Name, nutz ihn nicht ab.',
			matrix: 'Es gibt keinen Löffel. Es gibt nur TypeScript.',
			rm: 'rm: Die Zukunft kann nicht entfernt werden: Zugriff verweigert',
			konami: 'KONAMI-CODE AKZEPTIERT. +30 Leben. Quique heißt deine Kindheit gut.'
		},
		y2k: {
			on: 'Willkommen im Jahr 2000. Dein Modem wählt sich ein...',
			off: 'Zurück in die Zukunft. Willkommen zu Hause.',
			sayOn: 'Wow. Alles ist jetzt beige.',
			sayOff: 'Puh. Antialiasing!'
		},
			"graveyard": {
				"eyebrow": "Der Friedhof",
				"h2a": "Wo gute Projekte",
				"h2b": "zur Ruhe kommen.",
				"lede": "Jeder gute Entwickler hat aufgegebene Projekte. Meine haben ein paar Spinnweben und einen sehr guten Jungen, der sie bewacht. Zünde eine Kerze an, oder drück einfach F.",
				"rip": "R.I.P.",
				"cause": "Todesursache",
				"dig": "Details ausgraben",
				"rebury": "Wieder vergraben",
				"respects": "Respekt gezollt",
				"pay": "Respekt zollen",
				"pressF": "drück F, um Respekt zu zollen",
				"toastF": "F. Respekt gezollt.",
				"toast10": "10-mal Respekt. Sie haben es gespürt.",
				"toast25": "25-mal Respekt. Gandalf weint. Leise.",
				"noYear": "Jahr in der Geschichte verloren",
				"hint": "Klick auf einen Grabstein, um die Details auszugraben.",
				"aria": "Aufgegebene Projekte"
			},
			"modes": {
				"personal": "Persönlich",
				"pro": "Pro",
				"home": "Start",
				"switch": "Version wechseln"
			},
			"launcher": {
				"meta": {
					"title": "Quique Osuna",
					"description": "Wähle eine Tür: die persönliche Seite (Spiele, Reisen, ein sehr guter Hund) oder die berufliche Seite (Erfahrung, Projekte, Engagement).",
					"og": "Zwei Versionen einer Website: die persönliche und die berufliche Seite."
				},
				"eyebrow": "Willkommen",
				"h1a": "Hallo, ich bin Quique.",
				"h1b": "Wähle eine Tür.",
				"lede": "Diese Website gibt es in zwei Versionen, je nachdem, weshalb du gekommen bist.",
				"personalTitle": "Persönlich",
				"personalText": "Spiele, Reisen, ein sehr guter Hund und gelegentlich eine Biene. Der Mensch hinter dem Code.",
				"personalCta": "Komm vorbei",
				"proTitle": "Pro",
				"proText": "Erfahrung, Projekte und ein Engagieren-Button. Der Entwickler und was ich für dich bauen kann.",
				"proCta": "Reden wir über Arbeit",
				"last": "letztes Mal",
				"hint": "drück 1 oder 2, oder nimm die Pfeiltasten",
				"switchHint": "Du kannst jederzeit wechseln."
			},
			"pnav": {
				"top": "Hallo",
				"me": "Ich",
				"loves": "Mag ich",
				"skin": "Skin",
				"map": "Karte",
			"space": "Weltraum"
			},
			"personal": {
				"meta": {
					"title": "Quique Osuna | Die persönliche Seite",
					"description": "Spiele, Reisen, Kreuzfahrten, Klemmbausteine und ein Blue-Merle-Aussie. Der Mensch hinter dem Code, nahe Barcelona.",
					"og": "Die persönliche Seite von Quique: Spiele, Reisen und ein sehr guter Hund."
				},
				"eyebrow": "Persönlich",
				"h1a": "Hey, ich bin Quique.",
				"h1b": "Der Mensch hinter dem Code.",
				"lede": "Nach Feierabend bin ich Happy: Ich spiele zu viele Spiele, sammle Kreuzfahrten und Länder, baue Dinge aus Klemmbausteinen und teile das Sofa mit einem Blue-Merle-Aussie namens Gandalf. Ich lebe nahe Barcelona, habe mit neun angefangen zu programmieren und nie wirklich aufgehört.",
				"facts": [
					"Nahe Barcelona",
					"Gamer",
					"Kreuzfahrt-Fan",
					"Klemmbaustein-Bauer",
					"Hundemensch"
				],
				"ctaPics": "Fotos ansehen",
				"ctaMap": "Zur Karte",
				"proLinkA": "Suchst du die berufliche Seite?",
				"proLink": "Zur Pro-Seite",
				"heroAlt": "Quique auf einem Kreuzfahrtschiff bei Sonnenuntergang"
			},
			"me": {
				"eyebrow": "Fotos von mir",
				"h2a": "Der Mensch",
				"h2b": "hinter der Tastatur.",
				"lede": "Ein paar Fotos, meistens aus dem Urlaub, denn dann lasse ich die Tastatur los.",
				"open": "Foto öffnen",
				"close": "Schließen"
			},
			"loves": {
				"eyebrow": "Was ich liebe",
				"h2a": "Spiele und Gadgets,",
				"h2b": "die mich geprägt haben.",
				"lede": "Was ich auf eine einsame Insel mitnehmen würde, wenn es dort eine Steckdose gäbe."
			},
			"skin": {
				"eyebrow": "Minecraft",
				"h2a": "Das ist mein Skin.",
				"h2b": "Los, stups ihn an.",
				"lede": "Ich habe mehr Stunden in Minecraft verbracht, als ich zugeben möchte, und sogar einen Vanilla-Server für eine Community betrieben. Hier ist mein Skin in 3D: ziehen zum Drehen, oder lass ihn laufen.",
				"anims": {
					"idle": "Stehen",
					"walk": "Gehen",
					"run": "Rennen",
					"fly": "Fliegen",
					"wave": "Winken",
					"crouch": "Ducken",
					"hit": "Schlagen",
					"swim": "Schwimmen"
				},
				"animLabel": "Animation",
				"speed": "Tempo",
				"rotate": "Automatisch drehen",
				"pause": "Pause",
				"play": "Abspielen",
				"reset": "Ansicht zurücksetzen",
				"download": "Klau meinen Skin",
				"hint": "ziehen zum Drehen",
				"loading": "Der 3D-Viewer lädt...",
				"fail": "Der 3D-Viewer konnte auf diesem Gerät nicht starten.",
				"aria": "3D-Viewer für meinen Minecraft-Skin"
			},
			"map": {
				"eyebrow": "Reisen",
				"h2a": "Orte, an denen ich war,",
				"h2b": "und Orte, an die ich reise.",
				"lede": "Kreuzfahrten, Reisen und alles dazwischen. Diese Karte füllt sich, so wie ich mich fülle.",
				"legend": {
					"home": "Zuhause",
					"cruise": "Kreuzfahrt",
					"trip": "Reise"
				},
				"places": "Orte",
				"cruises": "Kreuzfahrten",
				"trips": "Reisen",
				"empty": "Vorerst nur die Basis. Die restlichen Pins sind unterwegs.",
				"pick": "Wähle einen Pin, um die Geschichte zu lesen.",
				"aria": "Weltkarte mit den Orten, die ich besucht habe",
				"list": "Orte",
			"visits": "Besucht auf",
			"soon": "Bald unterwegs",
			"view": "Kartenansicht",
			"viewWorld": "Welt",
			"viewEurope": "Europa",
			"viewAtlantic": "Atlantik"
			},
			"pfooter": {
				"text": "Danke für deinen Besuch.",
				"hire": "Willst du mich engagieren?",
				"hireCta": "Zur Pro-Seite",
				"home": "Zurück zum Start"
			},
			"space": {
				"eyebrow": "Weltraum",
				"h2a": "Ich schaue",
				"h2b": "oft nach oben.",
				"lede": "Astronomie, Raumfahrt und diese demütig machende Größenordnung. Bei einem Raketenstart, einer Finsternis oder klarem Nachthimmel schaue ich wahrscheinlich zu.",
				"sceneAria": "Der Blassblaue Punkt: die Erde als winziger Fleck in einem Sonnenstrahl",
				"dotAria": "Die Erde, der blassblaue Punkt",
				"here": "Du bist hier",
				"hint": "Finde den Punkt",
				"found": "Das sind wir",
				"paleEyebrow": "Blassblauer Punkt",
				"quote": "Schau noch einmal auf diesen Punkt. Das ist hier. Das ist unser Zuhause. Das sind wir.",
				"by": "Carl Sagan",
				"caption": "Am 14. Februar 1990 drehte Voyager 1 ihre Kamera um, aus rund 6 Milliarden Kilometern Entfernung. Die Erde ist kleiner als ein Pixel, gefangen in einem Strahl gestreuten Sonnenlichts. Mein liebstes Foto aller Zeiten.",
				"voyager": "Voyager 1 ist jetzt",
				"voyagerSub": "von der Sonne entfernt und fliegt mit etwa 17 km/s weiter. Eine Schätzung, aber nah dran.",
				"light": "Das Licht braucht",
				"lightSub": "von der Sonne bis Voyager 1. Im November 2026 überschreitet sie einen Lichttag.",
				"moon": "Der Mond heute Nacht",
				"lit": "beleuchtet",
				"phases": [
					"Neumond",
					"Zunehmende Sichel",
					"Erstes Viertel",
					"Zunehmender Mond",
					"Vollmond",
					"Abnehmender Mond",
					"Letztes Viertel",
					"Abnehmende Sichel"
				],
				"tagsAria": "Was ich am Weltraum liebe",
				"tags": [
					"Cosmos",
					"Apollo",
					"Voyager",
					"Hubble und JWST",
					"Mars-Rover",
					"Finsternisse",
					"Sternschnuppen",
					"Dunkle Himmel",
					"Starttage"
				]
			}
	},
	content: {
		roles: [
			'ein Problemlöser',
			'ein raketennaher Ingenieur',
			'ein Docker-Flüsterer',
			'ein Roboterbändiger',
			'ein geläuterter PHP-Entwickler',
			'ein Erfinder von Paketmanagern',
			'jemand, der die Logs liest',
			'verfügbar für Aufträge'
		],
		principles: [
			{ quote: 'Ich habe vieles auf die harte Tour gelernt.', by: 'ich, in meiner eigenen README' },
			{
				quote: 'Im Kern bin ich ein Problemlöser. Ich versuche, Dinge zu reparieren, die das Leben ein bisschen besser machen, für andere und für mich.',
				by: 'auch ich'
			},
			{
				quote: 'Wenn nichts Fertiges gut genug war, habe ich es von Grund auf gebaut: einen Shop, einen Hoster, einen Paketmanager.',
				by: 'das Git-Log'
			},
			{
				quote: 'Datenschutz ist eine Designvorgabe. Ich habe Sessions allein aus Verbindungsdaten verknüpft, ohne Geräte-Fingerprinting.',
				by: 'ein Socket, vermutlich'
			},
			{ quote: '{bc} Jahre Erfahrung v. Chr. Das heißt: vor ChatGPT.', by: 'mein Kalender' }
		],
		achievements: [
			{ title: 'Ladenbesitzer', text: 'Meine eigene E-Commerce-Plattform für digitale Güter gebaut, wie Shopify, nur für Sammelobjekte in Spielen.' },
			{ title: 'Vermieter', text: 'Mein eigenes Docker-basiertes Hosting-System gebaut. Spieleserver sind die hungrigsten Mieter.' },
			{ title: 'Abhängigkeits-Flüsterer', text: 'Die Logik eines Paketmanagers von Grund auf gebaut, mit Caching- und Verteilungsschichten.' },
			{ title: 'Kein Fingerabdruck, bitte', text: 'Eine Socket-basierte Analytics-Plattform mit strenger Session-Verknüpfung gebaut, ganz ohne Geräte-Fingerprinting.' },
			{ title: 'Bodenstation', text: 'An kritischen Raumfahrtprojekten gearbeitet, die die nächste Grenze der menschlichen Erforschung verschieben.' },
			{ title: 'Zuerst: nicht schaden', text: 'An Gesundheitsanwendungen gearbeitet, die verbessern, wie klinische Studien verstanden und durchgeführt werden.' },
			{ title: 'Doppelabschluss', text: 'Software Engineering (Informatik) an der UAB plus ein Grado Superior in Robotik und Industrieautomatisierung an der Salesians Sarrià, mit A+ in den meisten Fächern.' },
			{ title: 'Narben', text: 'Vieles auf die harte Tour gelernt. Dafür gibt es keine Kategorie.' }
		],
		marquee: [
			'TypeScript', 'Go', 'Svelte', 'Docker', 'Linux', 'PHP', 'C / C++', 'WebSockets', 'AWS',
			'Vue', 'Maven / Gradle', 'CSS', 'Verteilte Systeme', 'Paketmanager', 'Geschäftskritische Software'
		],
		quips: {
	"general": [
		"Wuff. Beachte mich nicht. Ich wohne jetzt auf deinem Bildschirm.",
		"Ich hüte Dinge. Meistens Deadlines.",
		"Du kommst nicht vorbei... ohne den Engagieren-Button zu prüfen.",
		"Quique hat mich in 24x24 Pixeln gezeichnet. Ich glaube, er ist stolz.",
		"Gute Jungs: 1. Leckerlis: 0. Bitte um Rat.",
		"Ich kenne drei Tunnel. Frag mich nicht nach dem vierten.",
		"psst. der Engagieren-Button funktioniert.",
		"Ein Merle kommt nie zu spät. Und nie zu früh. Er kommt genau dann, wenn er es vorhat.",
		"Drück Strg+K. Ich würde es tun, aber ich habe keine Daumen.",
		"Moment, habe ich das Wort Gassi gehört? Hat jemand Gassi gesagt?",
		"Hier gibt es irgendwo einen Konami-Code. Ich habe nichts gesagt.",
		"Ein Eichhörnchen! ...Entschuldigung. Wo waren wir?"
	],
	"top": [
		"Wuff! Ich bin Gandalf. Quique programmiert gerade, also übernehme ich die Begrüßung.",
		"Scroll runter. Die besten Leckerlis sind nicht im Hero."
	],
	"about": [
		"Diese Erfolge sind echt. Das Konfetti ist extra.",
		"Er hat mit neun angefangen zu programmieren. Ich mit neun Wochen, Schuhe zu kauen."
	],
	"experience": [
		"Probier die Filter. Ich habe daran geschnüffelt. Sehr befriedigend.",
		"Filtere nach Go. Dann apportiere. Moment, Apportieren ist kein Filter.",
		"Jede Karte lässt sich öffnen. Ich habe jede geprüft. Zweimal."
	],
	"projects": [
		"Er hat das alles gebaut, während ich vom Sofa aus beaufsichtigt habe.",
		"nominal hat fünf Produkte. Ich habe einen Ball. Prioritäten."
	],
	"hire": [
		"Hier schreibst du ihm eine Mail.",
		"Sag Hallo. Er antwortet. Ich habe es gesehen. Mit Schwanzwedeln.",
		"quique@osuna.dev. Ich warte hier. Gute Jungs warten."
	],
			"graveyard": [
				"Ich habe hier mal einen Knochen vergraben. Sag es den Projekten nicht.",
				"Jeder gute Entwickler hat einen Friedhof. Quiques wird von einem sehr guten Jungen bewacht.",
				"Weck sie nicht auf. Das letzte kompiliert noch."
			],
			"launcher": [
				"Zwei Türen. Tür Nummer eins hat den Hund. Tür Nummer zwei hat den Lebenslauf.",
				"Wähle klug. Oder wähle beide. Türen sind kostenlos."
			],
			"me": [
				"Das ist Quique auf einem Boot. Ich mache keine Boote. Zu viel Meer, zu wenig Sofa.",
				"Schau, wie er lächelt. Keins dieser Fotos stammt von mir. Ich habe geschlafen."
			],
			"loves": [
				"Sackboy und ich haben dieselbe Energie: weich, gestrickt, unaufhaltsam.",
				"Ich wäre großartig in Crash. Ein Wirbelangriff ist nur Zoomies mit Lizenz."
			],
			"skin": [
				"Lass den Skin rennen. So renne ich, wenn ich das Wort Gassi höre.",
				"In Minecraft besteht alles aus Quadraten. Wie ich, wenn du blinzelst."
			],
			"map": [
				"Kreuzfahrten haben Buffets. Bekomme ich einen Teller? Ich frage für einen Freund.",
				"Quique reist viel. Ich warte an der Tür. Das ist eine ganze Sache."
			]
},
		clickLines: [
	"Boop!",
	"Wuff!",
	"Ich bin ein sehr guter Junge, weißt du?",
	"Bauchkraulen kostet extra.",
	"Halbzeit bis zum Leckerli. Wahrscheinlich.",
	"Sechs. Ich zähle auch mit.",
	"Sieben. Du meinst es ernst.",
	"Acht. Ich sehe schon das Leckerli.",
	"Neun. Zehn wird großartig."
],
		areas: {
			backend: { label: 'Backend & verteilte Systeme', blurb: 'Dienste, die laufen, skalieren und niemanden um 3 Uhr nachts wecken.' },
			infra: { label: 'Infrastruktur & Hosting', blurb: 'Container, Orchestrierung und der sichere Betrieb fremder Workloads.' },
			frontend: { label: 'Frontend & Produkt', blurb: 'Oberflächen, die Leuten wirklich Spaß machen: Dashboards, Baukästen und Shops.' },
			commerce: { label: 'Commerce, Werbung & Wachstum', blurb: 'Digitale Güter verkaufen, Communities monetarisieren und gefunden werden.' },
			data: { label: 'Daten, Analytics & Statistik', blurb: 'Ereignisströme in Entscheidungen, Prognosen und Moderation verwandeln.' },
			security: { label: 'Sicherheit & Vertrauen', blurb: 'Datenschutzfreundliche Sessions, Schwachstellenerkennung und sichere Standardwerte.' },
			devtools: { label: 'Entwickler-Tools', blurb: 'Paketmanager, Build-Pipelines und Werkzeuge für andere Entwickler.' },
			foundations: { label: 'Informatik-Grundlagen', blurb: 'Formale Ausbildung: die Theorie und die Ingenieursdisziplin unter allem anderen.' },
			aerospace: { label: 'Luft- und Raumfahrt & geschäftskritisch', blurb: 'Software, bei der Versagen keine Option ist und der Einsatz orbital ist.' },
			robotics: { label: 'Robotik & Automatisierung', blurb: 'Industrieautomatisierung, vor allem Automobil, wo Software auf Stahl trifft.' },
			health: { label: 'Gesundheit & klinische Studien', blurb: 'Anwendungen, die helfen, klinische Forschung zu verstehen und durchzuführen.' },
			"ai": {
				"label": "KI-gestützte Produkte",
				"blurb": "Software, die entwirft, vorschlägt und beschleunigt, mit einem Menschen immer in der Schleife."
			}
		},
		contexts: { product: 'Meine eigenen Produkte', industry: 'Arbeit in der Industrie', education: 'Ausbildung' },
		sources: {
			serverbench: 'serverbench',
			grifpkg: 'grifpkg',
			'all of the above': 'alles oben Genannte',
			various: 'verschiedene',
			UAB: 'UAB',
			'Aerospace, defense and security company': 'Unternehmen für Luft- und Raumfahrt, Verteidigung und Sicherheit',
			'Robotics company': 'Robotikunternehmen',
			'Salesians Sarrià': 'Salesians Sarrià',
			'Health technology': 'Gesundheitstechnologie',
			"Confidential client": "Vertraulicher Kunde",
			"Professional work": "Berufliche Tätigkeit",
			"Graveyard \u00b7 Bachillerato TFG": "Friedhof · Bachillerato-TFG",
			"Graveyard \u00b7 personal experiment": "Friedhof · persönliches Experiment",
			"Graveyard \u00b7 academic project": "Friedhof · Studienprojekt"
		},
		entries: {
			'game-hosting': {
				title: 'Rechenintensives Hosting',
				summary: 'Ein Hosting-Dienst für Spieleserver, eine der ressourcenhungrigsten und am schwersten gut zu betreibenden Workloads.',
				detail:
					'Spieleserver sind unnachgiebig: Sie fressen CPU und Arbeitsspeicher, sind latenzempfindlich, und Spieler merken jeden Ruckler. Der Dienst musste diese Workloads fair verteilen, voneinander isolieren und sich schnell erholen, wenn etwas aus dem Ruder lief. Gebaut wurde er mit Go, JavaScript, TypeScript und PHP, mit Containern als Isolationseinheit.',
				highlights: ['Workload-Isolation pro Server', 'Ressourcenbewusste Planung', 'Control Plane in Go, Dashboards in TypeScript']
			},
			permissions: {
				title: 'Rollenbasierte Berechtigungen',
				summary: 'Fein abgestufte Berechtigungen, damit Teams Marketing, Commerce, Support und Moderation trennen können.',
				detail:
					'Communities sind Teams, und Teams haben Rollen. Das Berechtigungssystem lässt jede Community festlegen, wer was anfassen darf, sodass das Moderationsteam nie Zugriff auf den Shop braucht und das Marketingteam nie die Support-Tickets sehen muss. Die Prüfung musste schnell sein, weil jede Anfrage dieselbe Frage stellt.',
				highlights: ['Fein abgestufte Rollen pro Community', 'Wird bei jeder Anfrage geprüft', 'Entworfen nach echten Teamstrukturen']
			},
			tracking: {
				title: 'Medienübergreifendes Kunden-Tracking',
				summary: 'Verfolgt einen Kunden über Spiele, Browser und Discord hinweg und baut ein genaues Interessenprofil auf.',
				detail:
					'Eine Person taucht als Spielkonto, Browser-Session und Discord-Mitglied auf. Diese Identitäten zu einem Profil zusammenzuführen macht Empfehlungen relevant statt nervig. Es speist Shop und Creator-Studio, damit der richtige Inhalt die richtige Person erreicht.',
				highlights: ['Identitätszusammenführung über drei Medien', 'Speist Shop- und Creator-Empfehlungen', 'Mit den Datenschutz-Erkenntnissen aus serverbench gebaut']
			},
			'realtime-ingest': {
				title: 'Echtzeit-Socket-Ingestion',
				summary: 'Ein Socket-basiertes Analytics-Backend, das langlebige Verbindungen hält und daraus Sessions macht.',
				detail:
					'serverbench hält Verbindungen offen und liest die Session direkt aus der Verbindung, statt aus Cookies oder Geräte-IDs. Das hält das Datenmodell einfach und ehrlich: Ist der Socket derselbe, ist die Session dieselbe.',
				highlights: ['Langlebige WebSocket-Verbindungen', 'Session-Identität aus der Verbindung', 'Geringer Overhead pro Event']
			},
			'docker-hosting': {
				title: 'Docker-basiertes Hosting-System',
				summary: 'Mein eigenes Container-Hosting-System, von Grund auf gebaut, weil nichts Fertiges passte.',
				detail:
					'Die Hosting-Schicht umhüllt Docker mit der Produktlogik, die ein Hosting-Geschäft wirklich braucht: Bereitstellung, Limits, Lebenszyklus, Abrechnungs-Hooks und ein Kundenpanel. Sie ist das Fundament von serverbench und hat mir mehr über Linux, cgroups und Netzwerke beigebracht als jeder Kurs.',
				highlights: ['Bereitstellung und Lebenszyklusverwaltung', 'Limits pro Container', 'Kundenpanel obendrauf']
			},
			byod: {
				title: 'Bring-your-own-device-Orchestrator',
				summary: 'Lässt Kunden eigene Maschinen anbinden und dieselbe verwaltete Erfahrung darauf nutzen.',
				detail:
					'Nicht jeder will Kapazität mieten. Der BYOD-Orchestrator lässt Kunden ihre eigene Hardware anstecken und dieselben Deployments, dasselbe Monitoring und dieselben Steuerungen bekommen, was bedeutet, jede Maschine als nicht vertrauenswürdig, entfernt und gelegentlich offline zu behandeln.',
				highlights: ['Kundeneigene Maschinen als vollwertige Knoten', 'Dieselben Werkzeuge wie beim verwalteten Hosting', 'Für instabile Verbindungen entworfen']
			},
			'cdn-edge': {
				title: 'Edge-Auslieferung und Datei-Caching',
				summary: 'Gecachte, vom Edge ausgelieferte Downloads, damit Abhängigkeiten überall schnell aufgelöst werden.',
				detail:
					'Ein Paketmanager steht und fällt mit der Download-Geschwindigkeit. grifpkg cached Dateien mit reichhaltigen Metadaten und liefert sie vom Edge aus, damit Installationen schnell bleiben und die Upstream-Seiten nicht überlastet werden.',
				highlights: ['Datei-Caching mit Metadaten', 'Edge-Auslieferung', 'Schonend zu Upstream-Hosts']
			},
			'linux-ops': {
				title: 'Linux-Betrieb',
				summary: 'Jahre im Betrieb echter Server für echte Communities, wo ein Ausfall seinen eigenen Discord-Kanal hat.',
				detail:
					'PureVanilla und serverbench zu betreiben hieß, Linux-Maschinen gesund zu halten für Leute, die sofort merken, wenn sie es nicht sind. Monitoring, Backups und Incident Response gehörten zum Alltag, nicht zu einem separaten Team.',
				highlights: ['Monitoring und Backups', 'Incident Response vor Publikum', 'Debugging in Produktion mit Sorgfalt']
			},
			'creator-studio': {
				title: 'Creator-Studio',
				summary: 'Ein Marketing-Dashboard für Creator, die Videos und Beiträge über die Communities machen, die sie lieben.',
				detail:
					'Das Studio verbindet YouTube-, TikTok- und Twitch-Konten, unterstützt die Monetarisierung von Beiträgen und zeigt Creatorn, wie ihre Arbeit läuft. Es musste sich wie ein Creator-Tool anfühlen, nicht wie eine Enterprise-Konsole.',
				highlights: ['Authentifizierung für YouTube, TikTok und Twitch', 'Monetarisierung von Beiträgen', 'Analytics für Creator']
			},
			cms: {
				title: 'CMS und Website-Baukasten',
				summary: 'Ein CRM und Website-Baukasten mit Template-Engine und Template-Marktplatz.',
				detail:
					'Communities bauen ihre eigenen Seiten ohne Code. Seiten setzen sich aus wiederverwendbaren Modulen zusammen, Templates lassen sich teilen oder auf einem Marktplatz verkaufen, und die Engine rendert alles mit vorhersehbarer Leistung.',
				highlights: ['Mehrseitige Websites', 'Wiederverwendbare Module', 'Integrierter Template-Marktplatz']
			},
			storefronts: {
				title: 'Anpassbare Webshops',
				summary: 'Jede Community bekommt einen Shop, den sie zu ihrem eigenen machen kann.',
				detail:
					'Der Shop muss wie die Community aussehen, der er gehört, also geht das Theming tief, während der Checkout einheitlich und vertrauenswürdig bleibt. Es ist die kundenseitige Hälfte der Commerce-Plattform.',
				highlights: ['Theming pro Community', 'Einheitlicher, vertrauenswürdiger Checkout', 'Sammelobjekte, Abzeichen und Booster']
			},
			'modern-ui': {
				title: 'Moderne Komponenten-UIs',
				summary: 'Komponentenbasierte Oberflächen in Svelte und Vue, gestaltet mit Tailwind oder reinem CSS.',
				detail:
					'Ich mag kleine, schnelle Oberflächen. Svelte ist meine Standardwahl, Vue, wenn das Team schon dort lebt, und Tailwind oder handgeschriebenes CSS je nach Projekt. Diese Website ist ein Beispiel.',
				highlights: ['Svelte zuerst, Vue wenn es passt', 'Tailwind oder handgeschriebenes CSS', 'Standardmäßig barrierefrei']
			},
			'commerce-platform': {
				title: 'E-Commerce-Plattform für digitale Güter',
				summary: 'Meine eigene Shopify-artige Plattform für Sammelobjekte, Abzeichen und Booster in Spielen.',
				detail:
					'Digitale Güter folgen anderen Regeln als physische: sofortige Lieferung, Betrug, Rückbuchungen und Integrationen pro Spiel. Die Plattform verwaltet Kataloge, Checkout und Lieferung ins Spiel und gibt jeder Community einen eigenen Webshop.',
				highlights: ['Sofortige Lieferung in Spiele', 'Webshops pro Community', 'Von Grund auf gebaut']
			},
			'paid-plugins': {
				title: 'Bezahl-Plugins und Kaufverifizierung',
				summary: 'Abhängigkeiten verkaufen oder Käufe auf anderen Seiten bestätigen, um Downloads freizugeben.',
				detail:
					'Entwickler können ihre Arbeit über den Paketmanager verkaufen, und Käufer, die ein Plugin schon anderswo besitzen, können das nachweisen und herunterladen. Downloads zu autorisieren, ohne den Installationsablauf zu zerstören, war der schwierige Teil.',
				highlights: ['Verkauf von Abhängigkeiten', 'Seitenübergreifende Kaufverifizierung', 'Autorisierte Downloads in der CLI']
			},
			ads: {
				title: 'Gehostete Download-Seiten mit Werbung',
				summary: 'Open-Source-Entwickler verdienen mit gehosteten Download-Seiten, mit Werbung aus unserem eigenen Pool.',
				detail:
					'Open Source sollte sich selbst tragen können. Entwickler aktivieren gehostete Download-Seiten und verdienen mit Werbung aus dem plattformeigenen Werbepool, was die Qualität hoch und das Tracking begrenzt hielt.',
				highlights: ['Einnahmen für Open-Source-Entwickler', 'Eigener Werbepool', 'Opt-in pro Projekt']
			},
			promoted: {
				title: 'Beworbene Software',
				summary: 'Entwickler bewerben Bezahl-Plugins auf der Seite und über Textempfehlungen in der CLI.',
				detail:
					'Auffindbarkeit ist der schwierige Teil beim Verkauf von Software. Promotions erscheinen auf der Seite und als dezente Textvorschläge in der Kommandozeile, wo Entwickler ohnehin nach einer Lösung suchen.',
				highlights: ['Werbung auf der Seite', 'Textempfehlungen in der CLI', 'Respektvolle, unaufdringliche Platzierung']
			},
			'seo-studio': {
				title: 'SEO-Studio und Voting',
				summary: 'Ein SEO-Panel mit Voting-System, das Seiten vorschlägt, auf denen jede Mitgliederstimme am meisten bringt.',
				detail:
					'Communities listen ihre Seiten, und Mitglieder stimmen dafür ab. Das Studio schlägt vor, welche Voting-Seiten Dritter genutzt werden sollten, damit jede Stimme maximal wirkt, und macht aus einer losen Pflicht eine gemessene Wachstumsschleife.',
				highlights: ['Integriertes Voting-System', 'Intelligente Seitenvorschläge', 'Maximiert die Wirkung pro Stimme']
			},
			'community-analytics': {
				title: 'Community-Analytics',
				summary: 'Alles, was eine Community über ihr Wachstum wissen muss, plus Feiertagsprognose.',
				detail:
					'Über die üblichen Zahlen und Diagramme hinaus prognostiziert die Analytics Feiertagseffekte und kombiniert Signale aus den SEO- und Creator-Systemen, damit eine Community sieht, woher ihr Wachstum wirklich kommt.',
				highlights: ['Standard-Wachstumsmetriken', 'Feiertagsprognose', 'Signale aus SEO- und Creator-Tools']
			},
			automod: {
				title: 'Statistische Auto-Moderation',
				summary: 'Hochvolumige Moderation mit der Perspective API, die wiederkehrende toxische Mitglieder aus dem Gespräch heraushält.',
				detail:
					'Statt jede Nachricht einzeln zu bewerten, betrachtet das System jedes Mitglied statistisch über die Zeit. Wiederholungstäter driften aus dem Gespräch, während ein einzelner schlechter Tag niemanden den Bann kostet.',
				highlights: ['Bewertung mit der Perspective API', 'Statistische Historie pro Mitglied', 'Für hohes Aufkommen gebaut']
			},
			'interest-profiles': {
				title: 'Interessenprofile und Empfehlungen',
				summary: 'Baut pro Kunde ein Interessenprofil, um Shop-Inhalte oder Creator-Medien zu empfehlen.',
				detail:
					'Signale aus Spielen, Browsern und Discord werden zu einem Profil zusammengeführt, das entscheidet, was empfohlen wird. Das Ziel war Relevanz: weniger, bessere Vorschläge.',
				highlights: ['Profile aus mehreren Quellen', 'Shop- und Creator-Empfehlungen', 'Auf Relevanz statt Menge abgestimmt']
			},
			'fingerprint-free': {
				title: 'Session-Verknüpfung ohne Fingerprinting',
				summary: 'Hochsichere Session-Verknüpfung allein auf Basis von Verbindungsdaten, ohne Geräte-Fingerprinting.',
				detail:
					'Der einfache Weg, Besucher zu verfolgen, ist, ihre Geräte per Fingerprint zu erfassen. Das wollte ich nicht. Die Plattform bindet Sessions an Eigenschaften der Verbindung selbst, was die Analytics nützlich und die Besucher unidentifiziert hält.',
				highlights: ['Kein Geräte-Fingerprinting', 'Identität aus der Verbindung', 'Hohe Sicherheitsstandards']
			},
			'vuln-detection': {
				title: 'Schwachstellenerkennung',
				summary: 'Abhängigkeiten werden per Fingerprint erfasst und können als verwundbar markiert werden, sodass Entwickler von unsicherem Code erfahren.',
				detail:
					'Sobald Dateien einen Fingerprint haben, lässt sich eine bekannt schlechte Version markieren, und jeder, der davon abhängt, bekommt eine Warnung. So wird ein Paketmanager zum Frühwarnsystem für das Ökosystem.',
				highlights: ['Fingerprinting von Artefakten', 'Markierung verwundbarer Versionen', 'Benachrichtigungen für betroffene Entwickler']
			},
			'jar-pm': {
				title: 'JAR-Paketmanager',
				summary: 'Ein Paketmanager, der Abhängigkeiten für Java-Software importiert, aktualisiert und verwaltet.',
				detail:
					'Java-Plugin-Ökosysteme setzen oft auf manuelle Downloads. grifpkg löst Abhängigkeiten automatisch auf, cached und aktualisiert sie, mit eigener Registry, CLI und Verteilungsschicht. Genutzt vor allem von der SpigotMC-Community.',
				highlights: ['Registry, CLI und Verteilungsschichten', 'Automatische Updates', 'In der SpigotMC-Community im Einsatz']
			},
			'auto-index': {
				title: 'Automatische Indexierung',
				summary: 'Bibliotheken und Software werden automatisch indexiert, mit reichhaltigen Metadaten und Datei-Caching.',
				detail:
					'Eine Registry ist nur so gut wie ihre Abdeckung. Die automatische Indexierung findet neue Releases, extrahiert Metadaten und cached die Dateien, damit der Katalog aktuell bleibt, ohne dass Maintainer den Papierkram erledigen müssen.',
				highlights: ['Neue Releases crawlen und indexieren', 'Extraktion reichhaltiger Metadaten', 'Datei-Caching']
			},
			'dep-compile': {
				title: 'Kompilieren von Abhängigkeiten',
				summary: 'Manche Projekte liefern kein .jar. grifpkg klinkt sich in deren Git-Repositories ein und baut sie mit Maven oder Gradle.',
				detail:
					'Gibt es kein vorkompiliertes Artefakt, holt die Plattform das Repository, baut es in einer Sandbox mit Maven oder Gradle und liefert das Ergebnis wie jedes andere Paket aus.',
				highlights: ['Git-gesteuerte Builds', 'Maven- und Gradle-Unterstützung', 'Sandbox-Build-Umgebung']
			},
			'local-import': {
				title: 'Automatischer lokaler Import',
				summary: 'Erkennt Abhängigkeiten in einem bestehenden Projekt und ordnet sie automatisch Registry-Einträgen zu.',
				detail:
					'Einen Paketmanager einzuführen sollte nicht bedeuten, das Projekt von Hand umzubauen. Der Importer scannt, was schon da ist, gleicht es mit Registry-Kennungen ab und richtet alles ein.',
				highlights: ['Scannt bestehende Projekte', 'Gleicht Registry-Kennungen ab', 'Ein Befehl zur Einführung']
			},
			'se-degree': {
				title: 'Abschluss in Software Engineering (Informatik)',
				summary: 'Ein Abschluss in Software Engineering mit Informatik im Kern, an der Universitat Autònoma de Barcelona.',
				detail:
					'Jahre des Programmierens vor dem Studium ließen es anders ankommen: Es gab Dingen, die ich durch Kaputtmachen gelernt hatte, Namen, Theorie und Disziplin. Es steht neben meinen Robotik-Studien, sodass ich formale Ausbildung auf der Software- wie auf der Hardwareseite der Automatisierung habe.',
				highlights: ['Informatik-Grundlagen', 'Praxis des Software Engineering', 'Formales Gegenstück zu Jahren autodidaktischen Bauens']
			},
			space: {
				title: 'Kritische Raumfahrtprojekte',
				summary: 'Software für Arbeit, die die nächste Grenze der menschlichen Erforschung verschiebt.',
				detail:
					'Ich arbeite bei einem Technologie- und Ingenieurunternehmen, das auf Luft- und Raumfahrt-, Verteidigungs- und Sicherheitssysteme spezialisiert ist, mit tiefer Expertise in Satellitennavigation und geschäftskritischer Software. Die Details darf ich nicht teilen, aber der Maßstab ist klar: rigoros, nachvollziehbar und gleich beim ersten Mal korrekt.',
				highlights: ['Standards für geschäftskritische Systeme', 'Kontext Satellitennavigation', 'Korrektheit und Nachvollziehbarkeit zuerst']
			},
			'robotics-work': {
				title: 'Industrieautomatisierung',
				summary: 'Software für ein Robotikunternehmen mit Schwerpunkt Industrieautomatisierung, vor allem in der Automobilbranche.',
				detail:
					'Software für die Fabrikhalle ist eine andere Disziplin: Die Ausgabe bewegt echte Maschinen, Verfügbarkeit ist Geld und die Taktzeit ist alles. Hier treffen meine Robotik-Ausbildung und meine Software-Gewohnheiten aufeinander.',
				highlights: ['Automobilindustrie', 'Software, die Maschinen bewegt', 'Taktzeit und Verfügbarkeit zählen']
			},
			degree: {
				title: 'Robotik und Industrieautomatisierung (Grado Superior)',
				summary: 'Eine höhere Berufsausbildung (Grado Superior) in Robotik und Industrieautomatisierung, abgeschlossen mit A+ in den meisten Fächern.',
				detail:
					'Studiert an der Salesians Sarrià in Barcelona. Sensoren, Aktoren, Regelung und Automatisierungssysteme gaben mir ein körperliches Gespür für Software. Deshalb denke ich an Fehlerfälle und Latenz, bevor ich Code schreibe, und deshalb fühlt sich Industrieautomatisierung wie Zuhause an.',
				highlights: ['A+ in den meisten Fächern', 'Regelung, Sensorik und Automatisierung', 'Hardware-Gespür für Software']
			},
			clinical: {
				title: 'Anwendungen für klinische Studien',
				summary: 'Gesundheitsanwendungen, die verbessern, wie wir klinische Studien verstehen und durchführen.',
				detail:
					'Klinische Forschung hängt von genauen Daten echter Menschen ab. Die Anwendungen machen es leichter, diese Daten zu erfassen, zu verstehen und darauf zu reagieren, wo Datenschutz und Korrektheit nicht verhandelbar sind.',
				highlights: ['Bessere Studiendaten', 'Datenschutz und Korrektheit zuerst', 'Software, die der Medizin hilft, schneller voranzukommen']
			},
			"obex-identity": {
				"title": "Identität und Sessions (obex)",
				"summary": "Eine Identität für jede App: Eine einzige Session trägt eingegrenzte Berechtigungen durch alle nominal-Apps, plus verknüpften Drittzugriff wie GitHub-App-Installationen.",
				"detail": "obex ist die Identitätsschicht von nominal.es. Eine einzige Session trägt eingegrenzte Berechtigungen durch alle Apps und verknüpft Drittzugriffe wie GitHub-App-Installationen. Teams können jede Session sofort einsehen und widerrufen, statt auf den Ablauf des Tokens zu warten, jede Berechtigungsvergabe und jeden Login auditieren, SAML- und OIDC-SSO ohne zusätzliche Konfiguration pro App anbinden und ratenbegrenzte, ressourcenbezogene API-Schlüssel ausstellen, die am selben Identitätssystem hängen wie die Nutzer-Logins.",
				"highlights": [
					"Session-Inspektor mit sofortigem Widerruf",
					"Exportierbares Audit-Log",
					"SAML- und OIDC-SSO für Organisationen",
					"Eingegrenzte, ratenbegrenzte API-Schlüssel"
				]
			},
			"eris-support": {
				"title": "KI-gestützter Support (eris)",
				"summary": "Vorgeschlagene Antworten, noch bevor ein Ticket überhaupt erstellt wird. Die KI entwirft, ein Mensch sendet.",
				"detail": "eris liest jedes Ticket, gleicht es mit allen Lösungen ab, die das Team je angewendet hat, und entwirft eine Antwort. Das Team prüft, bearbeitet bei Bedarf und sendet, sodass Antworten schnell bleiben, ohne den persönlichen Ton zu verlieren. Beim Schließen eines Tickets werden Lösung und die dafür genutzten Daten gespeichert, damit das nächste ähnliche Ticket schneller und konsistent gelöst wird. Es funktioniert als Widget in deinem Produkt, im nominal-Dashboard oder direkt in Discord.",
				"highlights": [
					"Mensch in der Schleife, von Grund auf",
					"Wissen, das mit jedem geschlossenen Ticket wächst",
					"Widget, Dashboard oder Discord",
					"Jede Lösung an die auslösende Anfrage gebunden"
				]
			},
			"hermes-billing": {
				"title": "Globale Abrechnung und Steuerkonformität (hermes)",
				"summary": "Abos und Einmalzahlungen, mit pro Land berechneter und automatisch gemeldeter Steuer, einschließlich Verifactu.",
				"detail": "hermes verarbeitet wiederkehrende Abonnements und Einmalzahlungen mit demselben Abrechnungs-Setup. Es akzeptiert Zahlungen über Hunderte von Zahlungssystemen in Hunderten von Ländern, berechnet die Steuer pro Land und meldet sie automatisch, mit Schwerpunkt auf EU-Steuerkonformität und integrierter Verifactu-Unterstützung. Es skaliert vom kleinen Projekt, das in Minuten konfiguriert ist, bis zum Großkonzern, mit extrem konfigurierbaren Abrechnungs-Setups.",
				"highlights": [
					"Hunderte Länder und Zahlungssysteme",
					"EU-Steuerkonformität mit Verifactu",
					"Abos und Einmalzahlungen",
					"Vom Nebenprojekt bis zum Konzern"
				]
			},
			"kinesis-events": {
				"title": "Event-Analytics im großen Maßstab (kinesis)",
				"summary": "Über 1.000.000 verarbeitete Events pro Stunde, vom SDK-Event bis zum Dashboard in Millisekunden.",
				"detail": "kinesis nimmt Events über ein Ein-Zeilen-SDK aus Web, Mobile oder Backend entgegen, validiert sie gegen ein typisiertes, erweiterbares Schema, damit fehlerhafte Events die Daten nie verunreinigen, und aktualisiert Echtzeit-Dashboards (Portale) innerhalb von Millisekunden. Es lässt sich selbst hosten oder als Managed Service betreiben und unterstützt Event-Replay gegen neue Schemas, Aufbewahrungsregeln für Rohdaten und Schwellenwert-Alarme.",
				"highlights": [
					"1.000.000+ Events pro Stunde",
					"Typisierte, erweiterbare Schemas",
					"Selbst gehostet oder verwaltet",
					"Echtzeit-Dashboards, Replay und Alarme"
				]
			},
			"archon-deploys": {
				"title": "Deployments auf eigener Hardware (archon)",
				"summary": "In ein Repo pushen und auf der eigenen Hardware ausliefern, mit standardmäßig geplanten Backups.",
				"detail": "archon verwaltet entfernte Maschinen von einem einzigen Panel aus, egal wo sie stehen. Du pushst zu GitHub oder GitLab, und archon baut und versioniert den Container automatisch und deployt ihn auf deine Maschine, mit einem standardmäßig geplanten Backup. Backups lassen sich bei Bedarf erstellen und wiederherstellen, und der Zugriff auf Maschinen und Container wird mit dem Team geteilt, begrenzt auf genau das, was jede Person braucht.",
				"highlights": [
					"Fernverwaltung von Maschinen aus einem Panel",
					"Git-gesteuerte Container-Deployments",
					"Backups auf Abruf und standardmäßig",
					"Fein abgestufter Teamzugriff"
				]
			},
			"workhours-app": {
				"title": "Offline-first-Zeiterfassung (workhours)",
				"summary": "Zeiterfassung, made in Spain, konform mit dem spanischen Arbeitsrecht, als PWA auf jedem Gerät installierbar und offline nutzbar.",
				"detail": "workhours ist eine plattformübergreifende Zeiterfassungs-PWA, die das spanische Arbeitsrecht erfüllt. Sie läuft auf iOS, Android, Windows, macOS und Linux, wird aus dem Browser installiert, erfasst Zeit auch offline und synchronisiert automatisch, konfliktfrei und in Echtzeit, sobald wieder eine Verbindung besteht. Dazu kommen präzise Geolokalisierung von Ein- und Ausstempeln, ein Korrekturantrags-System mit klarem Audit-Verlauf, Urlaubs- und Krankmeldungsverwaltung sowie DSGVO-Konformität mit Daten in der EU und Ende-zu-Ende-Verschlüsselung.",
				"highlights": [
					"Plattformübergreifende PWA, die offline funktioniert",
					"Konfliktfreie Echtzeit-Synchronisierung",
					"Rechtskonformität und DSGVO",
					"Urlaub, Krankmeldungen und Korrekturanträge"
				]
			},
			"verifactu": {
				"title": "Verifactu-Rechnungskonformität",
				"summary": "Automatische Einhaltung der spanischen Verifactu-Vorgaben, in hermes und workhours.",
				"detail": "Verifactu ist Spaniens neuer Rahmen für Rechnungsstellung und Steuerkonformität, von der AEAT geschaffen, um die Rechnungsstellung zu modernisieren und Steuerbetrug zu bekämpfen. hermes bringt Verifactu-Unterstützung fest eingebaut mit, und workhours wird gerade aktualisiert, damit seine Rechnungsstellung die AEAT-Anforderungen automatisch erfüllt.",
				"highlights": [
					"Automatische Einhaltung der AEAT-Vorgaben",
					"Verifactu-Unterstützung fest in hermes",
					"workhours folgt"
				]
			},
			"opencti-threat-intel": {
				"title": "Analyse von Bedrohungsinformationen (OpenCTI)",
				"summary": "Cybersecurity-Analysesoftware, die Trends erkennt und automatisierte Berichte über die größten Bedrohungen der Welt schreibt. Der Kunde darf nicht genannt werden.",
				"detail": "Ich habe Cybersecurity-Analysesoftware mit OpenCTI gebaut, um Bedrohungstrends zu verstehen und automatisierte Berichte über die größten Bedrohungen der Welt zu schreiben. Sie verarbeitet jedes Jahr Millionen von Events und macht aus diesen Rohdaten Berichte, die Menschen wirklich lesen und auf die sie reagieren können. Der Kunde darf nicht genannt werden.",
				"highlights": [
					"Gebaut mit OpenCTI",
					"Millionen Events pro Jahr verarbeitet",
					"Automatisierte Berichte über die größten globalen Bedrohungen",
					"Vertraulicher Kunde"
				]
			},
			"hours-offers": {
				"title": "Zeiterfassung und Angebotsverwaltung",
				"summary": "Stempel-Software und ein Angebotsverwaltungssystem, das die Arbeitszeit von Menschen von Anfang bis Ende kontrolliert und jedes Angebot von der Anfrage bis zum Abschluss verfolgt.",
				"detail": "Ich habe ein Ein- und Ausstempel-System und ein Angebotsverwaltungssystem geschaffen, die die Arbeitszeit von Menschen von Anfang bis Ende kontrollieren und jedes Angebot vom Vorschlag bis zum Abschluss verfolgen. Es verwaltet Projekte, die Millionen von Euro abrechnen, also müssen Stunden, Angebote und Abrechnung auf den Cent genau zusammenpassen.",
				"highlights": [
					"Ein- und Ausstempeln für Arbeitszeiten",
					"Angebotsfluss vom Vorschlag bis zum Abschluss",
					"Projekte mit Abrechnungen in Millionenhöhe",
					"Stunden und Angebote an die Projektabrechnung gebunden"
				]
			},
			"national-data": {
				"title": "Nationale Datenplattform",
				"summary": "Ein nationales Projekt, das Daten von überall in einer einzigen Website zusammenführt, damit Menschen das Land aus vielen verschiedenen Perspektiven verstehen können.",
				"detail": "Ich habe an der Umsetzung und Wartung eines nationalen Projekts mitgearbeitet, das Daten von überall in einer einzigen Website zusammenführt, gemacht für Nerds (und für Nerds, die sich als Wissenschaftler und Forscher tarnen), die das Land aus allen möglichen Perspektiven verstehen wollen.",
				"highlights": [
					"Umsetzung und laufende Wartung",
					"Daten von überall auf einer einzigen Website",
					"Gemacht für Wissenschaftler, Forscher und neugierige Nerds"
				]
			},
			"slate": {
	"title": "Slate: eine lokale Klassenzimmer-Plattform",
	"summary": "Ein lokales „Google Classroom“ für die Schule: eine digitale Tafel, die sich mit den Heften der Schüler synchronisiert, dazu Notenverwaltung, Abgaben und Schulveranstaltungen. Mein Abschlussprojekt (TFG) im Bachillerato, mit 10/10 bewertet.",
	"detail": "Slate war mein Abschlussprojekt (TFG) im Bachillerato Tecnológico und wurde mit 10/10 bewertet. Es ist eine lokale Google-Classroom-Erfahrung für eine Schule. Die digitale Tafel synchronisiert sich automatisch mit den Heften der Schüler, und die Plattform verwaltet außerdem Noten und Abgaben und zeigt Schulveranstaltungen an. Es gab eine native Android-App und eine Web-Version, beide auf einem PHP-Backend. Heute ruht es auf dem Friedhof.",
	"highlights": [
		"Mit 10/10 bewertet",
		"Digitale Tafel, automatisch mit den Heften der Schüler synchronisiert",
		"Noten, Abgaben und Schulveranstaltungen",
		"Native Android-App plus Web-Version, PHP-Backend"
	]
},
			"sodge": {
				"title": "Sodge: soziales Netzwerk mit Interessen-Matching",
				"summary": "Ein soziales Netzwerk, das dir automatisch Leute mit ähnlichen Interessen zeigte, per Wortabgleich auf Basis neuronaler Netze, um 2017.",
				"detail": "Sodge war ein persönliches Experiment von etwa 2017, Jahre bevor KI Mainstream wurde: ein soziales Netzwerk, das per Wortabgleich auf Basis neuronaler Netze automatisch Leute mit ähnlichen Interessen zeigte. Es lief im Web und auf Android mit einem PHP-Backend. Heute ruht es auf dem Friedhof.",
				"highlights": [
					"Interessen-Matching per Wortabgleich auf neuronalen Netzen",
					"Um 2017 gebaut, vor dem KI-Boom",
					"Web und Android",
					"PHP-Backend"
				]
			},
			"vidfeed": {
				"title": "thememepage: endloser Video-Feed",
				"summary": "Eine TikTok-artige Seite zum endlosen Scrollen durch lustige Internetvideos, um 2014 gebaut, lange bevor vertikale Inhalte ein Ding waren.",
				"detail": "Um 2014 habe ich eine Seite gebaut, die dem heutigen TikTok sehr ähnelt: endloses Scrollen durch lustige Internetvideos, Jahre bevor vertikale Inhalte ein Ding waren. „Endlos“ ist ein großzügiges Wort: Die Liste war ziemlich kurz, und ich war der einzige Nutzer. Sie war in JavaScript geschrieben und ruht heute auf dem Friedhof.",
				"highlights": [
					"Video-Feed mit Endlos-Scrollen",
					"Um 2014 gebaut, dem vertikalen Video voraus",
					"JavaScript",
					"Ein sehr treuer Nutzer (ich)"
				]
			},
			"greenie": {
				"title": "Greenie: Pflanzengesundheit per Foto",
				"summary": "Eine Android-App mit Python-Backend, die dir anhand eines einzigen Fotos sagt, wie gesund eine Pflanze ist, mit einem lokal mit PyTorch trainierten Modell.",
				"detail": "Greenie war ein Studienprojekt: eine reine Android-App, mit der du ein Foto von irgendeiner Pflanze machst und ihre Gesundheit siehst. Das Backend war in Python geschrieben, und das Modell wurde lokal mit PyTorch trainiert. Heute ruht es auf dem Friedhof.",
				"highlights": [
					"Pflanzengesundheit aus einem einzigen Foto",
					"Lokal mit PyTorch trainiertes Modell",
					"Android-App, Python-Backend",
					"Studienprojekt"
				]
			},
			"openagv": {
				"title": "OpenAGV: ein Roboter mit Omniwheels",
				"summary": "Ein fahrerloses Transportfahrzeug auf Omniwheels, das selbstständig von A nach B navigiert, mit Radar, voll ausgestatteter Oberfläche und Bluetooth-Fernsteuerung mit automatischer Hindernisvermeidung.",
				"detail": "OpenAGV war ein Studienprojekt von 2021: ein AGV-System (fahrerloses Transportfahrzeug), das automatisch auf Omniwheels von A nach B navigierte. Es war in C geschrieben und enthielt ein Radar mit voll ausgestatteter Oberfläche sowie Bluetooth für die Fernsteuerung mit automatischer Hindernisvermeidung. Heute ruht es auf dem Friedhof.",
				"highlights": [
					"Automatische Navigation von A nach B auf Omniwheels",
					"Radar mit voll ausgestatteter Oberfläche",
					"Bluetooth-Fernsteuerung mit automatischer Hindernisvermeidung",
					"In C geschrieben"
				]
			}
		},
		projects: {
			serverbench: {
	"kind": "E-Commerce, Analytics und Hosting",
	"blurb": "Eine komplette Plattform für Online-Communities, besonders Spieleserver (früher purecore): eine E-Commerce-Plattform für digitale Güter, ein datenschutzfreundliches Analytics-Tool und ein Bring-your-own-device-Hosting-Orchestrator. Mehrere ihrer Funktionen leben heute als nominal.es-Produkte weiter.",
	"points": [
		"Shop: Communities verkaufen Sammelobjekte, Abzeichen und Booster, mit einem anpassbaren Webshop für jede",
		"Hosting: ein Docker-basierter Orchestrator für ressourcenhungrige Spieleserver",
		"Analytics: Socket-basiert, Session-Verknüpfung allein aus Verbindungsdaten, ohne Geräte-Fingerprinting",
		"Studios: Creator-, SEO- und CMS-Tools, die Daten mit einem einzigen Analytics-Kern teilen"
	]
},
			grifpkg: {
				kind: 'Paketmanager',
				blurb:
					'Ein Paketmanager für Java-Plugins, Serversoftware und allgemeinen Code, vor allem in der SpigotMC-Community genutzt. Er importiert, aktualisiert und verwaltet Abhängigkeiten automatisch.',
				points: [
					'Eigene Caching- und Verteilungsschichten für schnelle Edge-Auslieferung',
					'Indexiert Bibliotheken automatisch und baut aus dem Quellcode, wenn kein .jar existiert',
					'Bezahl-Plugins, Schwachstellenerkennung und Entwickler-Monetarisierung eingebaut'
				]
			},
			purevanilla: {
				kind: 'Community-Server',
				blurb:
					'Ein Vanilla-Minecraft-Serverprojekt mit Fokus auf ein sauberes, originalgetreues Erlebnis. Betrieben wie ein Produkt, mit echter Infrastruktur hinter einem Spiel.',
				points: ['Vanilla-first-Philosophie: weniger Mods, mehr Sorgfalt', 'Eine lebendige Community, die Verfügbarkeit braucht', 'Wo viele der Hosting-Lektionen begannen']
			},
			"workhours": {
				"kind": "Zeiterfassung, made in Spain",
				"blurb": "Mühelose Zeiterfassung, die das spanische Arbeitsrecht erfüllt. Eine plattformübergreifende PWA für Beschäftigte, die das Beste verdienen.",
				"points": [
					"Läuft auf jedem Gerät und offline, synchronisiert automatisch bei Wiederverbindung",
					"Geolokalisiertes Ein- und Ausstempeln, Korrekturanträge mit Audit-Verlauf, Urlaubs- und Krankmeldungsverwaltung",
					"DSGVO-konform: Daten bleiben in der EU, Ende-zu-Ende-verschlüsselt. Verifactu-Unterstützung folgt"
				]
			}
		},
			"notes": {
				"docker-hosting": "Es entstand in serverbench und lebt heute als archon bei nominal.es weiter.",
				"byod": "Heute lebt es als archon bei nominal.es weiter: in ein Repo pushen, auf der eigenen Hardware ausliefern.",
				"permissions": "Dieselbe Idee wuchs zu obex bei nominal.es: eine Identität, eingegrenzte Berechtigungen in jeder App.",
				"realtime-ingest": "Dieser Analytics-Kern lebt heute als kinesis bei nominal.es weiter.",
				"community-analytics": "Die Analytics-Seite lebt heute als kinesis bei nominal.es weiter.",
				"commerce-platform": "Die Abrechnungs- und Steuerseite lebt heute als hermes bei nominal.es weiter."
			},
			"nominal": {
	"obex": {
		"tagline": "Eine Identität für jede App, die du baust.",
		"summary": "Eine einzige obex-Session trägt eingegrenzte Berechtigungen durch alle nominal-Apps, plus verknüpften Drittzugriff wie GitHub-App-Installationen.",
		"stat": {
			"value": "",
			"label": ""
		},
		"points": [
			"Session-Inspektor",
			"Vollständiges Audit-Log",
			"Organisations-SSO",
			"Eingegrenzte API-Schlüssel"
		]
	},
	"eris": {
		"tagline": "Halte deine Nutzer automatisch zufrieden.",
		"summary": "Füge deinem Produkt ein Snippet hinzu. Nutzer bekommen Antwortvorschläge, noch bevor ein Ticket überhaupt erstellt wird. Die KI entwirft, ein Mensch sendet.",
		"stat": {
			"value": "",
			"label": ""
		},
		"points": [
			"Smarte Vorschläge, Mensch in der Schleife",
			"Wissen, das wächst",
			"Widget, Plattform oder Discord",
			"Konsistente Lösungen"
		]
	},
	"hermes": {
		"tagline": "Lass dich von überall bezahlen, konform.",
		"summary": "Dasselbe Abrechnungs-Setup verarbeitet wiederkehrende Abonnements oder Einmalzahlungen, berechnet die Steuer pro Land und meldet sie automatisch, einschließlich Verifactu.",
		"stat": {
			"value": "",
			"label": ""
		},
		"points": [
			"Hunderte Länder",
			"EU-Steuerkonformität",
			"Vom Nebenprojekt bis zum Konzern",
			"Flexible Abrechnung"
		]
	},
	"kinesis": {
		"tagline": "Verstehe dein Produkt in jeder Größenordnung.",
		"summary": "Events aus Web, Mobile oder Backend, gegen typisierte Schemas validiert und auf Echtzeit-Dashboards angezeigt.",
		"stat": {
			"value": "1.000.000+",
			"label": "verarbeitete Events pro Stunde"
		},
		"points": [
			"Extrem einfache Integration",
			"Selbst gehostet oder verwaltet",
			"Typisierte, erweiterbare Schemas",
			"Schöne, zuverlässige Portale"
		]
	},
	"archon": {
		"tagline": "Bring deine eigene Hardware mit. Den Rest übernehmen wir.",
		"summary": "Verwalte deine eigenen Maschinen aus der Ferne und deploye Container direkt aus GitHub oder GitLab, Backups inklusive.",
		"stat": {
			"value": "",
			"label": ""
		},
		"points": [
			"Fernverwaltung von Maschinen",
			"Git-gesteuerte Container",
			"Backups auf Abruf",
			"Fein abgestufter Teamzugriff"
		]
	}
},
			"graveyard": {
				"slate": {
	"name": "slate",
	"tag": "Bachillerato-TFG",
	"year": "2019",
	"epitaph": "Es hat die Hausaufgaben aller benotet. Die Jury benotete es mit 10/10.",
	"cause": "Der Abschluss (mit 10/10).",
	"summary": "Ein lokales „Google Classroom“ für die Schule: Die digitale Tafel synchronisierte sich automatisch mit den Heften der Schüler, dazu Notenverwaltung, Abgaben und sogar Schulveranstaltungen. Native Android-App und Web-Version, PHP-Backend. Note: 10/10."
},
				"sodge": {
					"name": "sodge",
					"tag": "Persönliches Experiment",
					"year": "ca. 2017",
					"epitaph": "Hat Leute per neuronalem Netz nach Interessen gematcht, bevor es cool war. Hat sich nie mit einem einzigen Nutzer gematcht.",
					"cause": "Natürliche Ursachen (keine Nutzer).",
					"summary": "Ein soziales Netzwerk, das dir automatisch Leute mit ähnlichen Interessen zeigte, per Wortabgleich auf Basis neuronaler Netze, lange bevor KI Mainstream wurde. Web und Android, PHP-Backend."
				},
				"feed": {
					"name": "thememepage",
					"tag": "Persönliches Experiment",
					"year": "ca. 2014",
					"epitaph": "Endlos-Scrollen. Endlos ist ein großzügiges Wort: Die Liste hatte ein Dutzend Videos und genau einen Nutzer.",
					"cause": "Die Videos gingen aus.",
					"summary": "Eine TikTok-artige Seite zum endlosen Scrollen durch lustige Internetvideos, Jahre bevor vertikale Inhalte ein Ding waren. Die Liste war kurz und ich war der einzige Nutzer. JavaScript."
				},
				"greenie": {
					"name": "greenie",
					"tag": "Studienprojekt",
					"year": "2023",
					"epitaph": "Es konnte dir sagen, dass deine Pflanze stirbt. Es konnte es nicht verhindern.",
					"cause": "Abschluss gemacht. Die Pflanzen nicht.",
					"summary": "Eine reine Android-App mit Python-Backend: Mach ein Foto von irgendeiner Pflanze und sieh, wie gesund sie ist, mit einem lokal mit PyTorch trainierten Modell."
				},
			"openagv": {
				"name": "openagv",
				"tag": "Studienprojekt",
				"year": "2021",
				"epitaph": "Es wich jedem Hindernis im Raum aus. Die Deadline war nicht auf dem Radar.",
				"cause": "Deadline (vom Radar nicht erkannt).",
				"summary": "Ein AGV, das automatisch auf Omniwheels von A nach B navigierte. In C geschrieben, mit einem Radar samt voll ausgestatteter Oberfläche und Bluetooth-Fernsteuerung mit automatischer Hindernisvermeidung."
			}
			},
			"clickMore": [
				"Schon wieder? Ich liebe es.",
				"Immer noch da? Respekt.",
				"Mir fällt gleich der Schwanz ab.",
				"Ist das ein Spiel? Ich mag dieses Spiel.",
				"Mehr Boops. Mehr Boops.",
				"Zehn weitere Klicks für ein Leckerli. Ich zähle mit."
			],
			"photos": {
				"cruise": {
					"caption": "Goldene Stunde, auf einer Kreuzfahrt",
					"alt": "Quique steht bei Sonnenuntergang auf dem Deck eines Kreuzfahrtschiffs"
				},
				"sister": {
					"caption": "Mit meiner Schwester, im Spiegel erwischt",
					"alt": "Quique und seine Schwester spiegeln sich in einem runden Spiegel in einem sonnigen Innenhof"
				},
				"gf": {
					"caption": "Ein Spaziergang mit meiner Freundin, dem Sonnenuntergang hinterher",
					"alt": "Quique und seine Freundin lächeln bei einem Spaziergang am Hang im Sonnenuntergang"
				},
				"bee": {
					"caption": "Nicht ich: eine Biene auf meinem Lavendel",
					"alt": "Eine Hummel auf Lavendelblüten im Garten"
				}
			},
			"loves": {
				"sackboy": {
					"name": "LittleBigPlanet",
					"tag": "Spielen. Erschaffen. Teilen.",
					"text": "Sackboy hat bewiesen, dass ein Spiel ein Werkzeugkasten sein kann. Level bauen und teilen war der halbe Spaß, und wahrscheinlich begann hier meine Angewohnheit „ich bau das einfach selbst“."
				},
				"tomb": {
					"name": "Tomb Raider",
					"tag": "Lara, in glorreichem Low-Poly",
					"text": "Ruinen, Rätsel und erstaunlich viel Geduld. Die originale Lara sieht noch immer aus wie eine Handvoll Dreiecke und fühlt sich noch immer wie ein Abenteuer an."
				},
				"mindstorms": {
					"name": "LEGO Mindstorms",
					"tag": "Wo die Roboter anfingen",
					"text": "Ein Baustein, der fahren konnte, und ein Sensor, der sehen konnte. Lange vor dem Robotik-Abschluss und vor einem AGV mit eigenem Radar lag ein LEGO-Roboter auf meinem Boden."
				},
				"crash": {
					"name": "Crash Bandicoot",
					"tag": "Drehen, springen, wiederholen",
					"text": "Pure 90er-Freude und Wut zu gleichen Teilen. Immer noch das beste Argument dafür, dass ein Wirbelangriff die meisten Probleme löst."
				}
			},
			"places": {
				"barcelona": {
					"name": "Barcelona",
					"note": "Die Basis. Wo jede Reise beginnt und endet."
				},
			"stockholm": {
				"name": "Stockholm",
				"note": ""
			},
			"lisbon": {
				"name": "Lissabon",
				"note": ""
			},
			"vigo": {
				"name": "Vigo",
				"note": ""
			},
			"valencia": {
				"name": "Valencia",
				"note": ""
			},
			"harwich": {
				"name": "Harwich",
				"note": ""
			},
			"copenhagen": {
				"name": "Kopenhagen",
				"note": ""
			},
			"warnemunde": {
				"name": "Warnemünde",
				"note": ""
			},
			"paris": {
				"name": "Paris",
				"note": ""
			},
			"bergen": {
				"name": "Bergen",
				"note": ""
			},
			"amsterdam": {
				"name": "Amsterdam",
				"note": ""
			},
			"bremerhaven": {
				"name": "Bremerhaven",
				"note": ""
			},
			"stavanger": {
				"name": "Stavanger",
				"note": ""
			},
			"olden": {
				"name": "Olden",
				"note": ""
			},
			"andalsnes": {
				"name": "Åndalsnes",
				"note": ""
			},
			"geiranger": {
				"name": "Geiranger",
				"note": ""
			},
			"kiel": {
				"name": "Kiel",
				"note": ""
			},
			"trondheim": {
				"name": "Trondheim",
				"note": ""
			},
			"leknes": {
				"name": "Leknes",
				"note": ""
			},
			"tromso": {
				"name": "Tromsø",
				"note": ""
			},
			"honningsvag": {
				"name": "Honningsvåg",
				"note": ""
			},
			"alesund": {
				"name": "Ålesund",
				"note": ""
			},
			"hamburg": {
				"name": "Hamburg",
				"note": ""
			},
			"ancona": {
				"name": "Ancona",
				"note": ""
			},
			"santorini": {
				"name": "Santorin (Fira)",
				"note": ""
			},
			"kotor": {
				"name": "Kotor",
				"note": ""
			},
			"mykonos": {
				"name": "Mykonos",
				"note": ""
			},
			"venice": {
				"name": "Venedig",
				"note": ""
			},
			"piraeus": {
				"name": "Piräus (Athen)",
				"note": ""
			},
			"ephesus": {
				"name": "Ephesos",
				"note": ""
			},
			"dubrovnik": {
				"name": "Dubrovnik",
				"note": ""
			},
			"split": {
				"name": "Split",
				"note": ""
			},
			"tunis": {
				"name": "Tunis",
				"note": ""
			},
			"rome": {
				"name": "Rom",
				"note": ""
			},
			"izmir": {
				"name": "Izmir",
				"note": ""
			},
			"istanbul": {
				"name": "Istanbul",
				"note": ""
			},
			"naples": {
				"name": "Neapel",
				"note": ""
			},
			"livorno": {
				"name": "Livorno (Florenz)",
				"note": ""
			},
			"toulon": {
				"name": "Toulon",
				"note": ""
			},
			"monaco": {
				"name": "Monaco",
				"note": ""
			},
			"ajaccio": {
				"name": "Ajaccio",
				"note": ""
			},
			"bari": {
				"name": "Bari",
				"note": ""
			},
			"corfu": {
				"name": "Korfu",
				"note": ""
			},
			"palermo": {
				"name": "Palermo",
				"note": ""
			},
			"marseille": {
				"name": "Marseille",
				"note": ""
			},
			"genoa": {
				"name": "Genua",
				"note": ""
			},
			"messina": {
				"name": "Messina",
				"note": ""
			},
			"valletta": {
				"name": "Valletta",
				"note": ""
			},
			"granada": {
				"name": "Granada",
				"note": ""
			},
			"cadiz": {
				"name": "Cádiz",
				"note": ""
			},
			"fuengirola": {
				"name": "Fuengirola",
				"note": ""
			},
			"cartagena": {
				"name": "Cartagena",
				"note": ""
			},
			"funchal": {
				"name": "Funchal (Madeira)",
				"note": ""
			},
			"san-juan": {
				"name": "San Juan",
				"note": ""
			},
			"port-canaveral": {
				"name": "Port Canaveral",
				"note": ""
			},
			"orlando": {
				"name": "Orlando",
				"note": ""
			},
			"tenerife": {
				"name": "Teneriffa",
				"note": ""
			},
			"lanzarote": {
				"name": "Lanzarote",
				"note": ""
			},
			"las-palmas": {
				"name": "Las Palmas (Gran Canaria)",
				"note": ""
			},
			"la-palma": {
				"name": "La Palma",
				"note": ""
			}
			}
	}
};
