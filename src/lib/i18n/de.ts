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
			language: 'Sprache'
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
			b3: 'serverbench, grifpkg, purecore',
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
			p2: 'Tagsüber arbeite ich bei einem Unternehmen, das Luft- und Raumfahrt-, Verteidigungs- und Sicherheitssysteme baut, mit tiefen Wurzeln in Satellitennavigation und geschäftskritischer Software, und bei einem Robotikunternehmen für Industrieautomatisierung, vor allem im Automobilbereich. Nachts baue ich Werkzeuge für Communities: einen Shop, einen Hoster, einen Paketmanager und eine Analytics-Engine, das meiste von Grund auf.',
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
			emptySay: 'Nichts passt. Nicht mal ich habe es gefunden.'
		},
		projects: {
			eyebrow: 'Projekte',
			h2a: 'Dinge, die ich gebaut habe,',
			h2b: 'weil ich musste.',
			lede: 'Nichts Fertiges passte, also habe ich einen Shop, einen Hoster, einen Paketmanager und eine Analytics-Engine gebaut.',
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
			made: 'Gebaut in der Nähe von Barcelona mit Svelte 5, einer unvernünftigen Menge Kaffee und einem Blue-Merle-Australian-Shepherd namens Gandalf.',
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
			language: 'Sprache wechseln'
		},
		mosaic: {
			t12: '12 Blöcke fixiert. Ist das ein Contribution-Graph oder ein Picasso?',
			say12: 'Ooh, malen wir? Ich liebe Malen.',
			t36: '36 Blöcke. Das ist jetzt offiziell eine Galerie.'
		},
		mascot: {
			aria: 'Gandalf, ein Blue-Merle-Australian-Shepherd. Klick für eine Überraschung.',
			away: '(._.) Gandalf vermisst dich. Komm zurück',
			startle: ['Wuff!', 'Huch!', 'Zu nah!', 'Nö. Tschüss.'],
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
			general: [
				'Wuff. Beachte mich nicht. Ich wohne jetzt in deinem Viewport.',
				'Ich hüte Dinge. Meistens Deadlines.',
				'Du kommst nicht vorbei... ohne den Engagieren-Button zu prüfen.',
				'Quique hat mich in 24x24 Pixeln gezeichnet. Ich glaube, er ist stolz.',
				'Gute Jungs: 1. Leckerlis: 0. Bitte um Rat.',
				'Ich kenne drei Tunnel. Frag mich nicht nach dem vierten.',
				'psst. der Engagieren-Button funktioniert.',
				'Ein Merle kommt nie zu spät. Und nie zu früh. Er kommt genau dann, wenn er es vorhat.',
				'Probier Strg+K. Oder Cmd+K. Ich bin nicht wählerisch.',
				'Hier gibt es irgendwo einen Konami-Code. Ich habe nichts gesagt.'
			],
			top: ['Wuff! Ich bin Gandalf. Quique ist ein bisschen schüchtern, also rede ich.', 'Scroll runter. Das Beste steht nicht im Hero.'],
			about: ['Diese Erfolge sind echt. Das Konfetti ist extra.', 'Er hat mit neun angefangen zu programmieren. Ich beim Booten.'],
			experience: ['Probier die Filter. Sie sind sehr befriedigend.', 'Filtere nach Go. Dann apportiere. Moment, Apportieren ist kein Filter.', 'Jede Karte lässt sich öffnen. Jede einzelne.'],
			projects: ['Er hat das alles gebaut. Ja, den Paketmanager auch.', 'serverbench ist ein ganzer Stack, kein einzelnes Projekt.'],
			hire: ['Hier schreibst du ihm eine Mail.', 'Sag Hallo. Er antwortet. Ich habe es gesehen.', 'quique@osuna.dev. Ich warte hier. Gute Jungs warten.']
		},
		clickLines: ['Boop!', 'Wuff!', 'Ich habe eine Hitbox, weißt du?', 'Bauchkraulen kostet extra.', 'Klick mich 10-mal. Ich trau dich.', 'Sieben. Du meinst es ernst.', 'Neun. Zehn wird großartig.'],
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
			health: { label: 'Gesundheit & klinische Studien', blurb: 'Anwendungen, die helfen, klinische Forschung zu verstehen und durchzuführen.' }
		},
		contexts: { product: 'Meine eigenen Produkte', industry: 'Arbeit in der Industrie', education: 'Ausbildung' },
		sources: {
			serverbench: 'serverbench',
			purecore: 'purecore',
			grifpkg: 'grifpkg',
			'all of the above': 'alles oben Genannte',
			various: 'verschiedene',
			UAB: 'UAB',
			'Aerospace, defense and security company': 'Unternehmen für Luft- und Raumfahrt, Verteidigung und Sicherheit',
			'Robotics company': 'Robotikunternehmen',
			'Salesians Sarrià': 'Salesians Sarrià',
			'Health technology': 'Gesundheitstechnologie'
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
				highlights: ['Identitätszusammenführung über drei Medien', 'Speist Shop- und Creator-Empfehlungen', 'Mit den Datenschutz-Erkenntnissen aus purecore gebaut']
			},
			'realtime-ingest': {
				title: 'Echtzeit-Socket-Ingestion',
				summary: 'Ein Socket-basiertes Analytics-Backend, das langlebige Verbindungen hält und daraus Sessions macht.',
				detail:
					'purecore hält Verbindungen offen und liest die Session direkt aus der Verbindung, statt aus Cookies oder Geräte-IDs. Das hält das Datenmodell einfach und ehrlich: Ist der Socket derselbe, ist die Session dieselbe.',
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
			}
		},
		projects: {
			serverbench: {
				kind: 'E-Commerce, Analytics und Hosting',
				blurb:
					'Eine komplette Plattform für Online-Communities, besonders Spieleserver: eine E-Commerce-Plattform für digitale Güter, ein Analytics-Tool für Communities und ein Bring-your-own-device-Hosting-Orchestrator.',
				points: [
					'Shop: Communities verkaufen Sammelobjekte, Abzeichen und Booster, mit einem anpassbaren Webshop für jede',
					'Hosting: ein Docker-basierter Orchestrator für ressourcenhungrige Spieleserver',
					'Studios: Creator-, SEO- und CMS-Tools, die Daten mit einem einzigen Analytics-Kern teilen'
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
			purecore: {
				kind: 'Echtzeit-Analytics',
				blurb:
					'Eine Socket-basierte Analytics-Plattform mit hohen Sicherheitsstandards. Sessions werden allein aus Verbindungsdaten verknüpft, ohne Geräte-Fingerprinting.',
				points: ['Session-Verknüpfung auf Basis der Verbindung selbst', 'Datenschutz von Grund auf, keine Fingerprinting-Abkürzungen', 'Echtzeit-Ingestion über WebSockets']
			},
			purevanilla: {
				kind: 'Community-Server',
				blurb:
					'Ein Vanilla-Minecraft-Serverprojekt mit Fokus auf ein sauberes, originalgetreues Erlebnis. Betrieben wie ein Produkt, mit echter Infrastruktur hinter einem Spiel.',
				points: ['Vanilla-first-Philosophie: weniger Mods, mehr Sorgfalt', 'Eine lebendige Community, die Verfügbarkeit braucht', 'Wo viele der Hosting-Lektionen begannen']
			}
		}
	}
};
