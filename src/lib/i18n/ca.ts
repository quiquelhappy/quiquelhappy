import type { Messages } from './en.ts';

export const ca: Messages = {
	ui: {
		meta: {
			title: 'Quique Osuna | Enginyer de programari, disponible per contractar',
			description:
				"Quique (Happy) construeix programari que ha de funcionar: aeroespacial, robòtica, salut, hosting, comerç i eines per a desenvolupadors. Programa des dels 9 anys, viu a prop de Barcelona i està obert a nova feina.",
			og: "Programari per a l'espai, els robots i els racons més estranys d'internet. Obert a nova feina: quique@osuna.dev"
		},
		nav: {
			top: 'Hola',
			about: 'Sobre mi',
			experience: 'Experiència',
			projects: 'Projectes',
			hire: 'Contracta’m',
			sections: 'Seccions',
			home: 'quique, torna a dalt',
			palette: 'Obre la paleta d’ordres',
			dark: 'Canvia al mode fosc',
			darkTitle: 'Fosc / clar',
			y2kTitle: 'Viatja a l’any 2000',
			language: 'Llengua',
		},
		hero: {
			eyebrow: 'Hola, sóc el Quique',
			h1a: 'Construeixo programari',
			h1b: 'que ha de ',
			h1em: 'funcionar',
			h1c: '.',
			retro: 'Benvingut a la pàgina del Quique!!',
			ledeA:
				"Vaig començar a programar als nou anys i no he parat mai del tot. Avui construeixo programari per a l'espai, els robots i la salut, a més d'alguns productes propis, estranys i meravellosos. Visc a prop de Barcelona, a internet em diuen ",
			ledeBold: 'Happy',
			ledeB: ' i estic obert a nova feina.',
			rightNow: 'ara mateix sóc',
			cta: 'Contracta’m',
			copied: 'Copiat',
			copyAria: 'Copia l’adreça de correu',
			toastCopied: 'Correu copiat. Ara ves a escriure alguna cosa maca.',
			years: (n: number) => `${n}+ anys programant`,
			pressA: 'prem',
			pressB: 'per explorar',
			speaks: 'parlo',
			profileAria: 'Perfil ràpid',
			open: 'Obert',
			onBranch: 'a la branca',
			availableNow: 'disponible ara',
			codeAria: 'Perfil en forma de codi',
			recommended: 'Recomanat',
			alertTitle: 'Possible gran col·laboració',
			alertText: 'Revisió suggerida: saluda abans que ho faci algú altre.',
			hireQL: 'Hire QL',
			workingOn: 'Treballant en',
			sideQuests: 'Missions secundàries',
			currentBranch: 'Branca actual',
			b1: 'missió crítica, navegació per satèl·lit',
			b2: 'automatització industrial, automoció',
			b3: "nominal.es, serverbench, grifpkg",
			construction: 'EN CONSTRUCCIÓ',
			mosaic: 'passa el cursor per pintar. fes clic per fixar un bloc.'
		},
		about: {
			eyebrow: 'Sobre mi',
			h2a: 'Solucionador de problemes,',
			h2b: 'per costum.',
			p1a: 'Sóc el Quique, ',
			p1bold: 'Happy',
			p1b: " a internet. Programo des que tinc memòria de tocar un ordinador i visc a prop de Barcelona. Tinc un munt de projectes personals que mai van arribar a cap biografia, però en el fons intento arreglar coses que facin la vida una mica millor, per als altres i per a mi.",
			p2: "De dia treballo en una empresa que construeix sistemes aeroespacials, de defensa i seguretat, amb arrels profundes en navegació per satèl·lit i programari de missió crítica, i en una empresa de robòtica que fa automatització industrial, sobretot en automoció. De nit construeixo nominal.es, una família de productes per a equips (identitat, suport, facturació, analítica i hosting), a més d'eines per a comunitats com una botiga, un hosting i un gestor de paquets.",
			p3: "Tinc dues titulacions: Enginyeria del Programari (Informàtica) a la UAB, i un Cicle Formatiu de Grau Superior (Grado Superior) en Robòtica i Automatització Industrial a Salesians Sarrià. Es nota. Penso en modes de fallada, latència i el món físic abans de pensar en frameworks.",
			facts: 'Dades ràpides',
			alias: 'àlies',
			base: 'base',
			baseV: 'a prop de Barcelona',
			since: 'programant des dels',
			sinceV: '9 anys (abril de 2010)',
			degrees: 'titulacions',
			deg1: 'Eng. del Programari (UAB)',
			deg2: 'Robòtica i Automatització (Salesians Sarrià)',
			speaks: 'parlo',
			status: 'estat',
			statusV: 'obert a ofertes de feina',
			fuel: 'combustible',
			fuelV: 'cafè',
			carouselAria: 'Coses en les quals crec',
			prev: 'Anterior',
			next: 'Següent',
			goTo: (n: number) => `Ves a la cita ${n}`,
			statYears: (bc: number) => `anys programant, ${bc} d'ells a. C. (abans de ChatGPT)`,
			statAge: "anys tenia quan vaig començar a escriure codi",
			achEyebrow: 'Assoliments',
			achH2: 'Desbloquejats fins ara.',
			xp: 'XP',
			clickToClaim: 'fes clic per reclamar',
			claimed: 'RECLAMAT +10 XP',
			unlocked: 'ASSOLIMENT DESBLOQUEJAT',
			toastXp: (title: string) => `+10 XP: ${title}`,
			toastAll: '100 % completat. L’únic assoliment que queda és contractar-me.',
			sayHalf: 'Ja som a la meitat. Au, aconsegueix-los tots.'
		},
		marquee: { aria: 'Amb què treballo', play: 'Reprèn el desplaçament', pause: 'Pausa el desplaçament' },
		exp: {
			eyebrow: 'Experiència',
			h2a: 'El que de debò',
			h2b: 'he construït i operat.',
			lede: (areas: number, entries: number) =>
				`${areas} àrees d'habilitat, ${entries} entrades, zero farciment de paraules de moda. Filtra per habilitat, tecnologia o context. Cada targeta s'obre i cada etiqueta de tecnologia és un filtre.`,
			filters: 'Filtres',
			searchPh: 'Cerca: docker, comerç, go...',
			searchLabel: 'Cerca en l’experiència',
			skillArea: 'Àrea d’habilitat',
			everything: 'Tot',
			context: 'Context',
			tech: 'Tecnologia',
			matchMode: 'Mode de coincidència',
			any: 'alguna',
			all: 'totes',
			gLang: 'Llenguatges',
			gFrame: 'Frameworks',
			gTools: 'Eines i plataformes',
			reset: 'Restableix els filtres',
			showing: (n: number, total: number) => `Mostrant ${n} de ${total}`,
			filtered: 'filtrat',
			expandAll: 'Expandeix-ho tot',
			collapseAll: 'Contreu-ho tot',
			details: 'Detalls',
			less: 'Menys',
			filterBy: (t: string) => `Filtra per ${t}`,
			emptyTitle: 'Res coincideix amb això.',
			emptyText: 'Ni tan sols el Gandalf ho ha pogut ensumar. Prova amb menys filtres o pregunta-m’ho directament.',
			emptySay: "Res coincideix. He ensumat per tot arreu."
		},
		projects: {
			eyebrow: 'Projectes',
			h2a: 'Coses que vaig fer',
			h2b: 'perquè no hi havia més remei.',
			lede: "Res del que hi havia encaixava, així que vaig construir els meus propis productes: identitat, suport, facturació, analítica, hosting, control horari i un gestor de paquets.",
			visit: (d: string) => `Visita ${d}`,
			none: 'Sense web pública'
		},
		hire: {
			eyebrow: 'Disponible per contractar',
			h2: 'Tens alguna cosa difícil de construir? Parlem-ne.',
			small:
				"Estic obert a noves ofertes de feina. M'agraden els problemes amb arestes: sistemes distribuïts, hosting, eines per a desenvolupadors i programari que ha de sortir bé a la primera.",
			ledeA: "Explica'm què estàs construint i què hi ha pel mig. Amb unes poques línies n'hi ha prou. Ho llegeixo tot i et respondré des de ",
			ledeB: '.',
			langs: 'Pots escriure’m en català, castellà, anglès, alemany o francès.',
			emailLabel: 'El teu correu',
			emailPh: 'tu@correu.com',
			buildLabel: 'Què estem construint?',
			buildPh: 'Què estem construint?',
			send: 'Escriu al Quique',
			sending: 'Obrint el correu...',
			copy: (e: string) => `Copia ${e}`,
			copied: 'Copiat',
			mosaic: 'cada bloc és una idea de projecte. fixa la teva.',
			subject: 'Treballem junts',
			defaultBody: 'Hola Quique, m’agradaria parlar d’un projecte.',
			replyTo: 'Respon a: ',
			toastSent: "L'aplicació de correu s'hauria d'estar obrint. Si no, copia l'adreça de sota.",
			say: 'Ho has fet! Li encantarà.',
			toastCopied: 'Copiat! Enganxa-ho on vulguis.'
		},
		retro: {
			company: 'Una empresa Happy',
			shortcuts: 'Accessos del web',
			home: 'Inici',
			skills: 'Habilitats',
			hireLink: 'Contractar',
			go2000: 'Anar al 2000 del tot',
			back2026: 'Tornar al 2026',
			quickLinks: 'Enllaços ràpids',
			myGithub: 'El meu GitHub',
			service: 'Atenció al client',
			contact247: 'Contacta amb el Quique 24/7',
			notReally: '(no literalment 24/7, dorm)',
			guarantee: 'Garantia de seguretat',
			memberOf: 'Membre de',
			b1: 'Fet amb Svelte 5',
			b2: 'Millor vist a 800x600',
			b3: 'Amb tecnologia Docker',
			b4: 'HTML 4.01 vàlid (jeje)',
			finder: 'Cercador Ràpid d’Enginyer',
			showMe: 'Mostra’m el millor enginyer per a:',
			anyEng: 'qualsevol enginyer',
			onlyMe: 'específicament el Quique',
			iNeed: 'Necessito:',
			needs: ['Una plataforma web', 'Un backend d’hosting', 'Un gestor de paquets', 'Programari de missió crítica', 'Automatització / robòtica', 'Alguna cosa estranya'],
			starting: 'Començant:',
			whens: ['Com més aviat millor', 'El mes que ve', 'El proper trimestre', 'Quan arribi el Y3K'],
			size: 'Mida:',
			sizes: ['Petit', 'Mitjà', 'Gran', 'De la mida de la Lluna'],
			go: 'Endavant!',
			news: 'Ofertes i notícies',
			newsItems: [
				'Estalvia un 40 % en reescriptures. Contracta el Quique abans que el codi heretat et trobi!',
				'Novetat: desplegaments sense caigudes ja disponibles en terminals participants',
				'Rep 50 o 100 € de reemborsament pel teu primer bug corregit (no és una oferta real)',
				'Contenidors Docker: ara amb un 30 % més de balena',
				'Viu una gran aventura al teu propi backlog'
			],
			corner: 'El racó del webmàster',
			visitor: 'Ets el visitant número',
			visitorNote: '(comptat només al teu navegador, com un llibre de visites molt petit i honest)',
			fineA: 'Tots els drets reservats. Cap GIF animat va resultar ferit en la creació d’aquesta secció.',
			guestbook: 'Signa el meu llibre de visites!',
			mailSubject: 'Sol·licitud del Cercador Ràpid d’Enginyer',
			mailBody: (project: string, start: string, size: string, mode: string) =>
				`Hola Quique,\n\nHe fet servir el teu Cercador Ràpid d'Enginyer.\n\nTipus de projecte: ${project}\nInici: ${start}\nMida: ${size}\nMode de cerca: ${mode}\n\n`,
			modeAny: 'qualsevol enginyer',
			modeMe: 'específicament tu',
			toastDial: 'Marcant... *screeeeeeee-kshhhhh*'
		},
		footer: {
			made: 'Fet a prop de Barcelona amb una quantitat irracional de cafè i un pastor australià blue merle anomenat Gandalf.',
			elsewhere: 'En altres llocs',
			coffee: 'Convida’m a un cafè'
		},
		palette: {
			aria: 'Paleta d’ordres',
			placeholder: 'Escriu una ordre o cerca...',
			label: 'Ordre',
			none: 'No s’ha trobat cap ordre. Prova amb «contractar».',
			navigate: 'navegar',
			run: 'executar',
			go: 'Ves a',
			actions: 'Accions',
			fun: 'Diversió',
			retro: 'El racó dels 2000',
			email: 'Escriu al Quique',
			copy: 'Copia l’adreça de correu',
			github: 'Obre GitHub',
			dark: 'Canvia al mode fosc',
			y2kOn: 'Viatja a l’any 2000',
			y2kOff: 'Surt de l’any 2000',
			summon: 'Invoca el Gandalf',
			summonSay: 'Bup! Em cridaves?',
			trick: 'Fes que el Gandalf faci un truc',
			confetti: 'Confeti',
			sudoHint: 'permís concedit',
			toastCopied: 'Correu copiat. Au, escriu alguna cosa.',
			sudo1: '[sudo] contrasenya per al reclutador: ********',
			sudo2: 'Accés concedit. Obrint la secció de contractar...',
			language: 'Canvia de llengua',
			"graveyard": "El cementiri",
			"goPersonal": "Anar al costat personal",
			"goPro": "Anar al costat professional",
			"goHome": "Tornar a l’inici"
		},
		mosaic: {
			t12: '12 blocs fixats. Això és un gràfic de contribucions o un Picasso?',
			say12: 'Ooh, estem pintant? M’encanta pintar.',
			t36: '36 blocs. Això ja és oficialment una galeria.'
		},
		mascot: {
			aria: 'Gandalf, un pastor australià blue merle. Fes clic per a una sorpresa.',
			away: '(._.) El Gandalf et troba a faltar. Torna',
			startle: [
	"Bup!",
	"Yip!",
	"Això és un esquirol?!",
	"Zoomies! Adéu."
],
			confettiSay: 'Vale, vale! Qui és un bon noi? Jo. Pren el confeti!',
			clickToast: (n: number) => `Has fet clic al Gandalf ${n} cops. Això és dedicació. Contracta el Quique amb ella.`
		},
		eggs: {
			sudo1: 'quique no és al fitxer sudoers. Aquest incident serà reportat.',
			sudo2: 'Reportat a: ningú. No tenim a qui reportar.',
			hire: 'Bona decisió. Molt bona decisió.',
			gandalf: 'Has dit el meu nom! Bup!',
			woof: 'BUP! Algú ha dit passejada?',
			happy: 'Aquest és el meu nom, no el gastis.',
			matrix: 'No hi ha cullera. Només hi ha TypeScript.',
			rm: 'rm: no es pot eliminar el futur: permís denegat',
			konami: 'CODI KONAMI ACCEPTAT. +30 vides. El Quique aprova la teva infantesa.'
		},
		y2k: {
			on: 'Benvingut a l’any 2000. El teu mòdem està marcant...',
			off: 'Tornada al futur. Benvingut a casa.',
			sayOn: 'Ostres. Ara tot és beix.',
			sayOff: 'Uf! Antialiasing!'
		},
			"graveyard": {
				"eyebrow": "El cementiri",
				"h2a": "On els bons projectes",
				"h2b": "van a descansar.",
				"lede": "Tot bon desenvolupador té projectes abandonats. Els meus tenen unes quantes teranyines i un bon noi que els vigila. Encén una espelma, o simplement prem F.",
				"rip": "D.E.P.",
				"cause": "Causa de la mort",
				"dig": "Desenterrar els detalls",
				"rebury": "Tornar a enterrar",
				"respects": "Respectes rendits",
				"pay": "Rendir respectes",
				"pressF": "prem F per rendir respectes",
				"toastF": "F. Respectes rendits.",
				"toast10": "10 respectes. Ho han notat.",
				"toast25": "25 respectes. El Gandalf està plorant. En silenci.",
				"noYear": "any perdut en la història",
				"hint": "Fes clic en una làpida per desenterrar els detalls.",
				"aria": "Projectes abandonats"
			},
			"modes": {
				"personal": "Personal",
				"pro": "Pro",
				"home": "Inici",
				"switch": "Canvia de versió"
			},
			"launcher": {
				"meta": {
					"title": "Quique Osuna",
					"description": "Tria una porta: el costat personal (jocs, viatges, un gos molt bo) o el costat professional (experiència, projectes, contractació).",
					"og": "Dues versions d’un mateix web: el costat personal i el professional."
				},
				"eyebrow": "Benvingut",
				"h1a": "Hola, sóc el Quique.",
				"h1b": "Tria una porta.",
				"lede": "Aquest web té dues versions, segons per a què hi hagis vingut.",
				"personalTitle": "Personal",
				"personalText": "Jocs, viatges, un gos molt bo i alguna abella. La persona darrere del codi.",
				"personalCta": "Vine a passar l’estona",
				"proTitle": "Pro",
				"proText": "Experiència, projectes i un botó de contractar. L’enginyer i el que puc construir per a tu.",
				"proCta": "Parlem de feina",
				"last": "l’última vegada",
				"hint": "prem 1 o 2, o fes servir les fletxes",
				"switchHint": "Pots canviar quan vulguis."
			},
			"pnav": {
				"top": "Hola",
				"me": "Jo",
				"loves": "M’agrada",
				"skin": "Skin",
				"map": "Mapa",
			"space": "Espai"
			},
			"personal": {
				"meta": {
					"title": "Quique Osuna | El costat personal",
					"description": "Jocs, viatges, creuers, maons i un pastor australià blue merle. La persona darrere del codi, a prop de Barcelona.",
					"og": "El costat personal del Quique: jocs, viatges i un gos molt bo."
				},
				"eyebrow": "Personal",
				"h1a": "Hola, sóc el Quique.",
				"h1b": "La persona darrere del codi.",
				"lede": "Fora de la feina sóc Happy: jugo a massa videojocs, col·lecciono creuers i països, construeixo coses amb maons i comparteixo el sofà amb un pastor australià blue merle anomenat Gandalf. Visc a prop de Barcelona, vaig començar a programar als nou anys i no he parat mai del tot.",
				"facts": [
					"A prop de Barcelona",
					"Jugador",
					"Fan dels creuers",
					"Constructor de maons",
					"Amant dels gossos"
				],
				"ctaPics": "Veure les fotos",
				"ctaMap": "Anar al mapa",
				"proLinkA": "Busques el costat professional?",
				"proLink": "Visita la pàgina pro",
				"heroAlt": "El Quique en un creuer en una posta de sol"
			},
			"me": {
				"eyebrow": "Fotos meves",
				"h2a": "La persona",
				"h2b": "darrere del teclat.",
				"lede": "Unes quantes fotos, gairebé totes de vacances, perquè és quan deixo el teclat.",
				"open": "Obrir foto",
				"close": "Tancar"
			},
			"loves": {
				"eyebrow": "Coses que m’encanten",
				"h2a": "Jocs i trastos",
				"h2b": "que em van marcar.",
				"lede": "El que m’enduria a una illa deserta, si l’illa tingués endoll."
			},
			"skin": {
				"eyebrow": "Minecraft",
				"h2a": "Aquesta és la meva skin.",
				"h2b": "Au, toca-la.",
				"lede": "He passat més hores a Minecraft de les que m’agradaria admetre, i fins i tot vaig portar un servidor vanilla per a una comunitat. Aquí tens la meva skin en 3D: arrossega per girar-la, o fes-la caminar.",
				"anims": {
					"idle": "Quiet",
					"walk": "Caminar",
					"run": "Córrer",
					"fly": "Volar",
					"wave": "Saludar",
					"crouch": "Ajupir-se",
					"hit": "Colpejar",
					"swim": "Nedar"
				},
				"animLabel": "Animació",
				"speed": "Velocitat",
				"rotate": "Gir automàtic",
				"pause": "Pausa",
				"play": "Represa",
				"reset": "Restableix la vista",
				"download": "Roba’m la skin",
				"hint": "arrossega per girar",
				"loading": "Carregant el visor 3D...",
				"fail": "El visor 3D no ha pogut arrencar en aquest dispositiu.",
				"aria": "Visor 3D de la meva skin de Minecraft"
			},
			"map": {
				"eyebrow": "Viatges",
				"h2a": "Llocs on he estat",
				"h2b": "i on vaig.",
				"lede": "Creuers, viatges i tot el que hi ha pel mig. Aquest mapa s’omple a mesura que m’omplo jo.",
				"legend": {
					"home": "Casa",
					"cruise": "Creuer",
					"trip": "Viatge"
				},
				"places": "llocs",
				"cruises": "creuers",
				"trips": "viatges",
				"empty": "De moment, només la base. La resta de xinxetes estan en camí.",
				"pick": "Selecciona una xinxeta per llegir la història.",
				"aria": "Mapa del món amb els llocs que he visitat",
				"list": "Llocs",
			"visits": "Visitat a",
			"soon": "Properament",
			"view": "Vista del mapa",
			"viewWorld": "Món",
			"viewEurope": "Europa"
			},
			"pfooter": {
				"text": "Gràcies per passar-hi.",
				"hire": "Vols contractar-me?",
				"hireCta": "Visita la pàgina pro",
				"home": "Tornar a l’inici"
			},
			"space": {
				"eyebrow": "Espai",
				"h2a": "Miro cap amunt",
				"h2b": "moltíssim.",
				"lede": "Astronomia, exploració espacial i l'escala que ens fa sentir petits. Si hi ha un llançament, un eclipsi o un cel net, probablement ho estic mirant.",
				"sceneAria": "El Pàl·lid Punt Blau: la Terra com un diminut punt en un raig de sol",
				"dotAria": "La Terra, el pàl·lid punt blau",
				"here": "Ets aquí",
				"hint": "Troba el punt",
				"found": "Aquest som nosaltres",
				"paleEyebrow": "Pàl·lid Punt Blau",
				"quote": "Mira de nou aquest punt. És aquí. És casa nostra. Som nosaltres.",
				"by": "Carl Sagan",
				"caption": "El 14 de febrer de 1990, la Voyager 1 va girar la càmera des d'uns 6.000 milions de quilòmetres. La Terra ocupa menys d'un píxel, atrapada en un raig de llum solar dispersa. És la meva foto preferida de la història.",
				"voyager": "La Voyager 1 és ara a",
				"voyagerSub": "del Sol, i continua a uns 17 km/s. És una estimació, però ajustada.",
				"light": "La llum triga",
				"lightSub": "a viatjar del Sol a la Voyager 1. Superarà el dia llum el novembre de 2026.",
				"moon": "La Lluna aquesta nit",
				"lit": "il·luminada",
				"phases": [
					"Lluna nova",
					"Creixent",
					"Quart creixent",
					"Gibosa creixent",
					"Lluna plena",
					"Gibosa minvant",
					"Quart minvant",
					"Minvant"
				],
				"tagsAria": "El que m'agrada de l'espai",
				"tags": [
					"Cosmos",
					"Apol·lo",
					"Voyager",
					"Hubble i JWST",
					"Rovers de Mart",
					"Eclipsis",
					"Pluges d'estels",
					"Cels foscos",
					"Dies de llançament"
				]
			}
	},
	content: {
		roles: [
			'un solucionador de problemes',
			'un enginyer gairebé de coets',
			'un xiuxiuejador de Docker',
			'un domador de robots',
			'un desenvolupador de PHP reformat',
			'un inventor de gestors de paquets',
			'una persona que llegeix els logs',
			'disponible per contractar'
		],
		principles: [
			{ quote: 'Vaig aprendre moltes coses a les dures.', by: 'jo, al meu propi README' },
			{
				quote: 'En el fons sóc un solucionador de problemes. Intento arreglar coses que facin la vida una mica millor, per als altres i per a mi.',
				by: 'també jo'
			},
			{
				quote: 'Quan res del que hi havia era prou bo, ho vaig construir des de zero: una botiga, un hosting, un gestor de paquets.',
				by: 'el git log'
			},
			{
				quote: 'La privadesa és una restricció de disseny. Vaig vincular sessions només amb dades de la connexió, sense empremta digital del dispositiu.',
				by: 'un socket, probablement'
			},
			{ quote: '{bc} anys d’experiència a. C. Això vol dir abans de ChatGPT.', by: 'el meu calendari' }
		],
		achievements: [
			{ title: 'Botiguer', text: 'Vaig construir la meva pròpia plataforma de comerç per a béns digitals, com Shopify però per a col·leccionables dins de jocs.' },
			{ title: 'Propietari', text: 'Vaig construir el meu propi sistema d’hosting amb Docker. Els servidors de jocs són els llogaters més afamats.' },
			{ title: 'Xiuxiuejador de dependències', text: 'Vaig construir des de zero la lògica d’un gestor de paquets, amb capes de memòria cau i distribució.' },
			{ title: 'Sense empremtes, si us plau', text: 'Vaig construir una plataforma d’analítica amb sockets i vinculació estricta de sessions, sense empremta digital del dispositiu.' },
			{ title: 'Control de missió', text: 'Vaig treballar en projectes espacials crítics que empenyen la propera frontera de l’exploració humana.' },
			{ title: 'Primer, no fer mal', text: 'Vaig treballar en aplicacions de salut que milloren com s’entenen i es gestionen els assaigs clínics.' },
			{ title: 'Doble titulació', text: 'Enginyeria del Programari (Informàtica) a la UAB, més un Grau Superior en Robòtica i Automatització Industrial a Salesians Sarrià, amb A+ en la majoria.' },
			{ title: 'Cicatrius', text: 'Vaig aprendre moltes coses a les dures. Aquesta no té categoria.' }
		],
		marquee: [
			'TypeScript', 'Go', 'Svelte', 'Docker', 'Linux', 'PHP', 'C / C++', 'WebSockets', 'AWS',
			'Vue', 'Maven / Gradle', 'CSS', 'Sistemes distribuïts', 'Gestors de paquets', 'Programari de missió crítica'
		],
		quips: {
	"general": [
		"Bup. No em facis cas. Ara visc a la teva pantalla.",
		"Jo pastoro coses. Sobretot terminis.",
		"No passaràs... sense mirar el botó de contractar.",
		"El Quique em va dibuixar en 24x24 píxels. Crec que n’està orgullós.",
		"Bons nois: 1. Premis: 0. Si us plau, aconselleu.",
		"Conec tres túnels. No em preguntis pel quart.",
		"psst. el botó de contractar funciona.",
		"Un merle mai arriba tard. Ni d’hora. Arriba just quan es proposa.",
		"Prem Ctrl+K. Ho faria, però no tinc polzes.",
		"Espera, he sentit la paraula passejada? Algú ha dit passejada?",
		"Hi ha un codi Konami per aquí. Jo no he dit res.",
		"Un esquirol! ...Perdó. On érem?"
	],
	"top": [
		"Bup! Sóc el Gandalf. El Quique està ocupat programant, així que saludo jo.",
		"Baixa. Els millors premis no són a la portada."
	],
	"about": [
		"Aquests assoliments són reals. El confeti és extra.",
		"Ell va començar a programar als nou. Jo, a mastegar sabates a les nou setmanes."
	],
	"experience": [
		"Prova els filtres. Els he ensumat. Molt satisfactoris.",
		"Filtra per Go. Després porta la pilota. Espera, això no és un filtre.",
		"Totes les targetes s’obren. Les he comprovat totes. Dues vegades."
	],
	"projects": [
		"Va fer tot això mentre jo supervisava des del sofà.",
		"nominal té cinc productes. Jo tinc una pilota. Prioritats."
	],
	"hire": [
		"Aquí és on li escrius un correu.",
		"Saluda’l. Respon. Ho he vist. Amb remenada de cua inclosa.",
		"quique@osuna.dev. Esperaré aquí. Els bons nois esperen."
	],
			"graveyard": [
				"Vaig enterrar un os per aquí una vegada. No ho diguis als projectes.",
				"Tot bon desenvolupador té un cementiri. El del Quique té un bon noi vigilant.",
				"No els despertis. L’últim encara s’està compilant."
			],
			"launcher": [
				"Dues portes. La número u té el gos. La número dos té el CV.",
				"Tria bé. O tria-les totes dues. Les portes són gratis."
			],
			"me": [
				"Aquest és el Quique en un vaixell. Jo no faig vaixells. Molt mar i poc sofà.",
				"Mira’l somrient. Jo no vaig fer cap d’aquestes fotos. Estava dormint."
			],
			"loves": [
				"Sackboy i jo tenim la mateixa energia: suaus, de punt i imparables.",
				"Jo seria genial a Crash. Un gir és només un atac de zoomies amb llicència."
			],
			"skin": [
				"Fes córrer la skin. Així corro jo quan sento la paraula passejada.",
				"Tot a Minecraft està fet de quadrats. Igual que jo, si entretanques els ulls."
			],
			"map": [
				"Els creuers tenen bufet. Me’n toca un plat? Ho pregunto per un amic.",
				"El Quique viatja molt. Jo espero a la porta. És tot un tema."
			]
},
		clickLines: [
	"Bup!",
	"Guau!",
	"Sóc un bon noi, saps?",
	"Les carícies a la panxa són extra.",
	"A mig camí del premi. Probablement.",
	"Sis. Jo també estic comptant.",
	"Set. Vas de debò.",
	"Vuit. Ja veig el premi.",
	"Nou. El deu serà genial."
],
		areas: {
			backend: { label: 'Backend i sistemes distribuïts', blurb: 'Serveis que es mantenen drets, escalen i no desperten ningú a les 3 de la matinada.' },
			infra: { label: 'Infraestructura i hosting', blurb: 'Contenidors, orquestració i executar amb seguretat les càrregues d’altres persones.' },
			frontend: { label: 'Frontend i producte', blurb: 'Interfícies que a la gent li agrada fer servir: panells, constructors i botigues.' },
			commerce: { label: 'Comerç, anuncis i creixement', blurb: 'Vendre béns digitals, monetitzar comunitats i fer-se trobar.' },
			data: { label: 'Dades, analítica i estadística', blurb: 'Convertir fluxos d’esdeveniments en decisions, previsions i moderació.' },
			security: { label: 'Seguretat i confiança', blurb: 'Sessions que respecten la privadesa, detecció de vulnerabilitats i valors segurs per defecte.' },
			devtools: { label: 'Eines per a desenvolupadors', blurb: 'Gestors de paquets, pipelines de compilació i eines per a altres enginyers.' },
			foundations: { label: 'Fonaments d’informàtica', blurb: 'Formació reglada: la teoria i la disciplina d’enginyeria que hi ha sota tota la resta.' },
			aerospace: { label: 'Aeroespacial i missió crítica', blurb: 'Programari on fallar no és una opció i el que està en joc és orbital.' },
			robotics: { label: 'Robòtica i automatització', blurb: 'Automatització industrial, sobretot automoció, on el programari es troba amb l’acer.' },
			health: { label: 'Salut i assaigs clínics', blurb: 'Aplicacions que ajuden a entendre i gestionar la recerca clínica.' },
			"ai": {
				"label": "Productes assistits per IA",
				"blurb": "Programari que redacta, suggereix i agilitza, amb una persona sempre al circuit."
			}
		},
		contexts: { product: 'Els meus propis productes', industry: 'Feina a la indústria', education: 'Formació' },
		sources: {
			serverbench: 'serverbench',
			grifpkg: 'grifpkg',
			'all of the above': 'tot l’anterior',
			various: 'diversos',
			UAB: 'UAB',
			'Aerospace, defense and security company': 'Empresa aeroespacial, de defensa i seguretat',
			'Robotics company': 'Empresa de robòtica',
			'Salesians Sarrià': 'Salesians Sarrià',
			'Health technology': 'Tecnologia sanitària',
			"Confidential client": "Client confidencial",
			"Professional work": "Feina professional",
			"Graveyard \u00b7 Bachillerato TFG": "Cementiri · TFG de Batxillerat",
			"Graveyard \u00b7 personal experiment": "Cementiri · experiment personal",
			"Graveyard \u00b7 academic project": "Cementiri · projecte acadèmic"
		},
		entries: {
			'game-hosting': {
				title: 'Hosting d’alt consum de còmput',
				summary: 'Un servei d’hosting per a servidors de jocs, de les càrregues més voraces i difícils de gestionar bé.',
				detail:
					'Els servidors de jocs no perdonen: devoren CPU i memòria, són sensibles a la latència i els jugadors noten qualsevol entrebanc. El servei havia de repartir aquestes càrregues amb justícia, aïllar-les entre si i recuperar-se ràpid quan alguna cosa fallava. Es va construir amb Go, JavaScript, TypeScript i PHP, amb els contenidors com a unitat d’aïllament.',
				highlights: ['Aïllament de càrregues per servidor', 'Planificació segons recursos', 'Pla de control en Go, panells en TypeScript']
			},
			permissions: {
				title: 'Permisos basats en rols',
				summary: 'Permisos d’alta granularitat perquè els equips separin màrqueting, comerç, suport i moderació.',
				detail:
					'Les comunitats són equips i els equips tenen rols. El sistema de permisos deixa que cada comunitat defineixi qui pot tocar què, de manera que l’equip de moderació mai necessita accés a la botiga ni el de màrqueting veure els tiquets de suport. Havia de ser ràpid en comprovar, perquè cada petició fa la mateixa pregunta.',
				highlights: ['Rols granulars per comunitat', 'Es comprova a cada petició', 'Dissenyat a partir d’estructures d’equip reals']
			},
			tracking: {
				title: 'Seguiment de clients entre mitjans',
				summary: 'Segueix un client entre jocs, navegadors i Discord per construir un únic perfil d’interessos fiable.',
				detail:
					'Una mateixa persona apareix com a compte de joc, sessió de navegador i membre de Discord. Unir aquestes identitats en un sol perfil és el que fa que les recomanacions siguin rellevants en lloc de molestes. Alimenta la botiga i l’estudi de creadors perquè el contingut adequat arribi a la persona adequada.',
				highlights: ['Unió d’identitats entre tres mitjans', 'Alimenta recomanacions de botiga i creadors', 'Construït amb les lliçons de privadesa de serverbench']
			},
			'realtime-ingest': {
				title: 'Ingesta en temps real per sockets',
				summary: 'Un backend d’analítica basat en sockets que manté connexions llargues i les converteix en sessions.',
				detail:
					'serverbench manté les connexions obertes i llegeix la sessió directament de la connexió, en lloc de galetes o identificadors de dispositiu. Això manté el model de dades simple i honest: si el socket és el mateix, la sessió és la mateixa.',
				highlights: ['Connexions WebSocket de llarga durada', 'Identitat de sessió a partir de la connexió', 'Poc cost per esdeveniment']
			},
			'docker-hosting': {
				title: 'Sistema d’hosting basat en Docker',
				summary: 'El meu propi sistema d’hosting de contenidors, construït des de zero perquè res d’existent encaixava.',
				detail:
					'La capa d’hosting embolcalla Docker amb la lògica de producte que necessita un negoci d’hosting: aprovisionament, límits, cicle de vida, ganxos de facturació i un panell per al client. És la base de serverbench i em va ensenyar més sobre Linux, cgroups i xarxes que qualsevol curs.',
				highlights: ['Aprovisionament i gestió del cicle de vida', 'Límits per contenidor', 'Panell de client a sobre']
			},
			byod: {
				title: 'Orquestrador «porta el teu propi dispositiu»',
				summary: 'Permet als clients connectar les seves pròpies màquines i tenir la mateixa experiència gestionada en elles.',
				detail:
					'No tothom vol llogar capacitat. L’orquestrador BYOD deixa que un client connecti el seu propi maquinari i obtingui els mateixos desplegaments, monitoratge i controls, cosa que implica tractar cada màquina com a no fiable, remota i de vegades desconnectada.',
				highlights: ['Màquines del client com a nodes de primera classe', 'Les mateixes eines que l’hosting gestionat', 'Pensat per a connexions inestables']
			},
			'cdn-edge': {
				title: 'Lliurament a la vora i memòria cau d’arxius',
				summary: 'Descàrregues en memòria cau i servides des de la vora perquè les dependències es resolguin ràpid allà on sigui el servidor.',
				detail:
					'Un gestor de paquets viu o mor per la velocitat de descàrrega. grifpkg desa arxius en memòria cau amb metadades riques i els serveix des de la vora, així les instal·lacions són ràpides i no es maltracta els llocs d’origen.',
				highlights: ['Memòria cau d’arxius amb metadades', 'Lliurament a la vora', 'Amable amb els hosts d’origen']
			},
			'linux-ops': {
				title: 'Operacions Linux',
				summary: 'Anys gestionant servidors reals per a comunitats reals, on una caiguda té el seu propi canal de Discord.',
				detail:
					'Gestionar PureVanilla i serverbench significava mantenir màquines Linux sanes per a gent que nota a l’instant quan no ho estan. Monitoratge, còpies de seguretat i resposta a incidents formaven part de la rutina diària, no d’un equip a part.',
				highlights: ['Monitoratge i còpies de seguretat', 'Resposta a incidents amb públic', 'Depurar en producció amb cura']
			},
			'creator-studio': {
				title: 'Estudi de creadors',
				summary: 'Un panell de màrqueting per a creadors que fan vídeos i publicacions sobre les comunitats que estimen.',
				detail:
					'L’estudi connecta comptes de YouTube, TikTok i Twitch, permet monetitzar publicacions i mostra als creadors com rendeix la seva feina. Havia de semblar una eina de creadors, no una consola empresarial.',
				highlights: ['Autenticació amb YouTube, TikTok i Twitch', 'Monetització de publicacions', 'Analítica per a creadors']
			},
			cms: {
				title: 'CMS i constructor de llocs web',
				summary: 'Un CRM i constructor web amb motor de plantilles i un mercat de plantilles.',
				detail:
					'Les comunitats construeixen els seus propis llocs sense tocar codi. Les pàgines es componen amb mòduls reutilitzables, les plantilles es poden compartir o vendre en un mercat i el motor ho renderitza tot amb un rendiment predictible.',
				highlights: ['Llocs de diverses pàgines', 'Mòduls reutilitzables', 'Mercat de plantilles integrat']
			},
			storefronts: {
				title: 'Botigues web personalitzables',
				summary: 'Cada comunitat té una botiga que pot fer seva.',
				detail:
					'La botiga ha de semblar-se a la comunitat que la posseeix, així que el tema arriba fons mentre el pagament es manté coherent i de confiança. És la meitat de cara al client de la plataforma de comerç.',
				highlights: ['Temes per comunitat', 'Pagament coherent i fiable', 'Col·leccionables, insígnies i potenciadors']
			},
			'modern-ui': {
				title: 'Interfícies modernes per components',
				summary: 'Interfícies per components en Svelte i Vue, amb Tailwind o CSS a mà.',
				detail:
					'M’agraden les interfícies petites i ràpides. Svelte és la meva opció per defecte, Vue quan l’equip ja hi viu, i Tailwind o CSS escrit a mà segons el projecte. Aquesta web n’és un exemple.',
				highlights: ['Primer Svelte, Vue quan encaixa', 'Tailwind o CSS a mà', 'Accessible per defecte']
			},
			'commerce-platform': {
				title: 'Plataforma de comerç per a béns digitals',
				summary: 'La meva pròpia plataforma estil Shopify, feta per a col·leccionables, insígnies i potenciadors dins de jocs.',
				detail:
					'Els béns digitals tenen regles diferents de les dels físics: lliurament instantani, frau, devolucions de rebuts i integracions per joc. La plataforma gestiona catàlegs, pagament i lliurament dins del joc, i dona a cada comunitat la seva pròpia botiga web.',
				highlights: ['Lliurament instantani dins dels jocs', 'Botigues web per comunitat', 'Construïda des de zero']
			},
			'paid-plugins': {
				title: 'Plugins de pagament i verificació de compres',
				summary: 'Ven dependències o autentica compres fetes en altres llocs per autoritzar descàrregues.',
				detail:
					'Els desenvolupadors poden vendre la seva feina a través del gestor de paquets, i qui ja posseeix un plugin en un altre lloc pot demostrar-ho i descarregar-lo. Autoritzar descàrregues sense trencar el flux d’instal·lació va ser el difícil.',
				highlights: ['Venda de dependències', 'Verificació de compres entre llocs', 'Descàrregues autoritzades des de la CLI']
			},
			ads: {
				title: 'Pàgines de descàrrega allotjades amb anuncis',
				summary: 'Els desenvolupadors de codi obert obtenen ingressos de pàgines de descàrrega allotjades, amb anuncis del nostre propi fons.',
				detail:
					'El codi obert hauria de poder pagar-se sol. Els desenvolupadors activen pàgines de descàrrega allotjades i guanyen amb publicitat servida des del fons d’anuncis de la plataforma, cosa que va mantenir la qualitat alta i el seguiment limitat.',
				highlights: ['Ingressos per a desenvolupadors de codi obert', 'Fons d’anuncis propi', 'Opcional per projecte']
			},
			promoted: {
				title: 'Programari promocionat',
				summary: 'Els desenvolupadors anuncien plugins de pagament al web i mitjançant recomanacions de text a la CLI.',
				detail:
					'Descobrir és el difícil quan es ven programari. Les promocions apareixen al web i com a suggeriments discrets de text a la línia d’ordres, on els desenvolupadors ja busquen una solució.',
				highlights: ['Promoció al web', 'Recomanacions de text a la CLI', 'Ubicació respectuosa i poc intrusiva']
			},
			'seo-studio': {
				title: 'Estudi SEO i votacions',
				summary: 'Un panell SEO amb sistema de vots que suggereix els llocs on cada vot d’un membre rendeix més.',
				detail:
					'Les comunitats llisten els seus llocs i els membres hi voten. L’estudi suggereix quins llocs de votació de tercers fer servir perquè cada vot arribi tan lluny com sigui possible, convertint una tasca solta en un cicle de creixement mesurat.',
				highlights: ['Sistema de votació integrat', 'Suggeriments intel·ligents de llocs', 'Maximitza l’abast per vot']
			},
			'community-analytics': {
				title: 'Analítica de comunitats',
				summary: 'Tot el que una comunitat necessita saber sobre el seu creixement, més predicció de festius.',
				detail:
					'Més enllà dels recomptes i gràfiques habituals, l’analítica prediu els efectes dels festius i combina senyals dels sistemes de SEO i creadors, perquè una comunitat vegi d’on ve realment el seu creixement.',
				highlights: ['Mètriques de creixement estàndard', 'Predicció de festius', 'Senyals de les eines de SEO i creadors']
			},
			automod: {
				title: 'Automoderació estadística',
				summary: 'Moderació d’alt volum amb Perspective API que manté fora de la conversa els membres tòxics recurrents.',
				detail:
					'En lloc de jutjar cada missatge per separat, el sistema pren una visió estadística de cada membre al llarg del temps. Els reincidents s’aniran allunyant de la conversa, mentre que un mal dia puntual no envia ningú al bàn.',
				highlights: ['Puntuació amb Perspective API', 'Historial estadístic per membre', 'Pensat per a alt volum d’ingesta']
			},
			'interest-profiles': {
				title: 'Perfils d’interessos i recomanacions',
				summary: 'Construeix un perfil d’interessos per client per recomanar contingut de la botiga o mitjans de creadors.',
				detail:
					'Senyals de jocs, navegadors i Discord es fusionen en un perfil que decideix què recomanar. L’objectiu era la rellevància: menys suggeriments, però millors.',
				highlights: ['Perfils a partir de diverses fonts', 'Recomanacions de botiga i creadors', 'Ajustat per a rellevància abans que volum']
			},
			'fingerprint-free': {
				title: 'Vinculació de sessions sense empremta digital',
				summary: 'Vinculació de sessions d’alta seguretat basada només en dades de la connexió, sense empremta digital del dispositiu.',
				detail:
					'La manera fàcil de seguir visitants és prendre l’empremta dels seus dispositius. Jo no volia això. La plataforma lliga les sessions a propietats de la mateixa connexió, cosa que manté útil l’analítica i els visitants sense identificar.',
				highlights: ['Sense empremta digital del dispositiu', 'Identitat basada en la connexió', 'Alts estàndards de seguretat']
			},
			'vuln-detection': {
				title: 'Detecció de vulnerabilitats',
				summary: 'Les dependències s’identifiquen per empremta i es poden marcar com a vulnerables, avisant els desenvolupadors de l’ús de codi insegur.',
				detail:
					'Un cop identificats els arxius per empremta, una versió coneguda com a dolenta es pot marcar, i qui en depengui rep un avís. Converteix un gestor de paquets en un sistema d’alerta primerenca per a l’ecosistema.',
				highlights: ['Empremta digital d’artefactes', 'Marcatge de versions vulnerables', 'Avisos als desenvolupadors afectats']
			},
			'jar-pm': {
				title: 'Gestor de paquets JAR',
				summary: 'Un gestor de paquets que importa, actualitza i gestiona dependències de programari Java.',
				detail:
					'Els ecosistemes de plugins Java sovint depenen de descàrregues manuals. grifpkg resol, desa en memòria cau i actualitza dependències automàticament, amb el seu propi registre, CLI i capa de distribució. L’utilitza sobretot la comunitat de SpigotMC.',
				highlights: ['Registre, CLI i capes de distribució', 'Actualitzacions automàtiques', 'Utilitzat a la comunitat de SpigotMC']
			},
			'auto-index': {
				title: 'Indexació automàtica',
				summary: 'Biblioteques i programari s’indexen automàticament, amb metadades riques i memòria cau d’arxius.',
				detail:
					'Un registre és tan bo com la seva cobertura. La indexació automàtica troba noves versions, extreu metadades i desa els arxius en memòria cau, així el catàleg es manté al dia sense que els mantenidors facin el paperam.',
				highlights: ['Rastreig i indexació de noves versions', 'Extracció de metadades riques', 'Memòria cau d’arxius']
			},
			'dep-compile': {
				title: 'Compilació de dependències',
				summary: 'Alguns projectes no publiquen .jar. grifpkg s’enganxa als seus repositoris git i els compila amb Maven o Gradle.',
				detail:
					'Quan no hi ha un artefacte precompilat, la plataforma obté el repositori i el compila en un entorn aïllat amb Maven o Gradle, i serveix el resultat com qualsevol altre paquet.',
				highlights: ['Compilacions guiades per git', 'Suport per a Maven i Gradle', 'Entorn de compilació aïllat']
			},
			'local-import': {
				title: 'Importació local automàtica',
				summary: 'Detecta dependències en un projecte existent i les associa amb entrades del registre automàticament.',
				detail:
					'Adoptar un gestor de paquets no hauria de significar refer el teu projecte a mà. L’importador escaneja el que ja hi ha, ho emparella amb identificadors del registre i ho deixa tot configurat.',
				highlights: ['Escaneja projectes existents', 'Emparella identificadors del registre', 'Una sola ordre per adoptar-lo']
			},
			'se-degree': {
				title: 'Grau en Enginyeria del Programari (Informàtica)',
				summary: 'Un grau en enginyeria del programari, amb la informàtica al nucli, a la Universitat Autònoma de Barcelona.',
				detail:
					'Anys programant abans del grau van fer que arribés d’una altra manera: va posar noms, teoria i disciplina a coses que havia après trencant-les. Conviu amb els meus estudis de robòtica, així que tinc formació formal tant del costat programari com del maquinari de l’automatització.',
				highlights: ['Fonaments d’informàtica', 'Pràctica d’enginyeria del programari', 'Contrapunt formal a anys de construir pel meu compte']
			},
			space: {
				title: 'Projectes espacials crítics',
				summary: 'Programari per a feina que empeny la propera frontera de l’exploració humana.',
				detail:
					'Treballo en una empresa de tecnologia i enginyeria especialitzada en sistemes aeroespacials, de defensa i seguretat, amb profunda experiència en navegació per satèl·lit i programari de missió crítica. Els detalls no em correspon compartir-los, però l’estàndard és clar: rigorós, traçable i correcte a la primera.',
				highlights: ['Estàndards de missió crítica', 'Context de navegació per satèl·lit', 'Correcció i traçabilitat primer']
			},
			'robotics-work': {
				title: 'Automatització industrial',
				summary: 'Programari per a una empresa de robòtica centrada en automatització industrial, sobretot al sector de l’automòbil.',
				detail:
					'El programari de planta és un altre esport: la sortida mou màquines reals, el temps d’activitat és diners i el temps de cicle ho és tot. És on es troben la meva formació en robòtica i els meus hàbits de programari.',
				highlights: ['Indústria de l’automòbil', 'Programari que mou màquines', 'Importen el temps de cicle i la disponibilitat']
			},
			degree: {
				title: 'Robòtica i automatització industrial (Grau Superior)',
				summary: 'Un cicle formatiu de grau superior en robòtica i automatització industrial, acabat amb A+ en la majoria d’assignatures.',
				detail:
					'Estudiat a Salesians Sarrià, a Barcelona. Sensors, actuadors, control i sistemes d’automatització em van donar una intuïció física per al programari. Per això penso en modes de fallada i latència abans d’escriure codi, i per això l’automatització industrial em fa sentir a casa.',
				highlights: ['A+ en la majoria d’assignatures', 'Control, sensors i automatització', 'Intuïció de maquinari per al programari']
			},
			clinical: {
				title: 'Aplicacions per a assaigs clínics',
				summary: 'Aplicacions de salut que milloren com entenem i gestionem els assaigs clínics.',
				detail:
					'La recerca clínica depèn de dades precises de persones reals. Les aplicacions faciliten recollir, entendre i actuar sobre aquestes dades, on la privadesa i la correcció no són negociables.',
				highlights: ['Millors dades d’assaigs', 'Privadesa i correcció primer', 'Programari que ajuda que la medicina avanci més ràpid']
			},
			"obex-identity": {
				"title": "Identitat i sessions (obex)",
				"summary": "Una identitat per a cada app: una sola sessió porta permisos acotats a totes les apps de nominal, més accés de tercers enllaçat, com les instal·lacions de GitHub App.",
				"detail": "obex és la capa d'identitat de nominal.es. Una sola sessió porta permisos acotats a través de totes les apps i enllaça accessos de tercers, com les instal·lacions de GitHub App. Els equips poden inspeccionar i revocar qualsevol sessió a l'instant en lloc d'esperar que el token caduqui, auditar cada permís concedit i cada inici de sessió, connectar SSO amb SAML i OIDC sense configuració extra per app i emetre claus d'API acotades per recurs i amb límit de taxa, lligades al mateix sistema d'identitat que els inicis de sessió d'usuari.",
				"highlights": [
					"Inspector de sessions amb revocació instantània",
					"Registre d’auditoria exportable",
					"SSO d’organització amb SAML i OIDC",
					"Claus d’API acotades i amb límit de taxa"
				]
			},
			"eris-support": {
				"title": "Suport assistit per IA (eris)",
				"summary": "Respostes suggerides abans que s’obri ni tan sols un tiquet. La IA l’esborrana, una persona l’envia.",
				"detail": "eris llegeix cada tiquet, el compara amb totes les resolucions que l'equip ha aplicat mai i redacta una solució. L'equip la revisa, l'edita si cal i l'envia, així les respostes continuen sent ràpides sense perdre el toc personal. Quan es tanca un tiquet es desen la resolució i les dades usades per arribar-hi, de manera que el següent cas similar es resol més ràpid i amb coherència. Funciona com a widget al teu producte, des del tauler de nominal o directament des de Discord.",
				"highlights": [
					"Una persona al circuit, per disseny",
					"Coneixement que s’acumula amb cada tiquet tancat",
					"Widget, tauler o Discord",
					"Cada solució lligada a la petició que la va originar"
				]
			},
			"hermes-billing": {
				"title": "Facturació global i compliment fiscal (hermes)",
				"summary": "Subscripcions i cobraments únics, amb l’impost de cada país calculat i declarat automàticament, inclòs Verifactu.",
				"detail": "hermes gestiona subscripcions recurrents i cobraments únics amb la mateixa configuració de facturació. Accepta pagaments a través de centenars de sistemes de pagament en centenars de països, calcula l'impost de cada país i el declara automàticament, amb focus en el compliment fiscal de la UE i suport de Verifactu integrat. Escala des d'un petit projecte configurat en minuts fins a una gran corporació, amb configuracions de facturació extremadament flexibles.",
				"highlights": [
					"Centenars de països i sistemes de pagament",
					"Compliment fiscal de la UE amb Verifactu",
					"Subscripcions i pagaments únics",
					"De projecte personal a empresa"
				]
			},
			"kinesis-events": {
				"title": "Analítica d’esdeveniments a escala (kinesis)",
				"summary": "Més d’1.000.000 d’esdeveniments processats per hora, de l’esdeveniment de l’SDK al tauler en mil·lisegons.",
				"detail": "kinesis rep esdeveniments d'un SDK d'una sola línia a web, mòbil o backend, els valida contra un esquema tipat i extensible perquè els esdeveniments malformats mai contaminin les dades, i actualitza taulers en temps real (portals) en mil·lisegons. Es pot autoallotjar o ser gestionat, i admet repetició d'esdeveniments contra nous esquemes, polítiques de retenció d'esdeveniments en brut i alertes per llindar.",
				"highlights": [
					"Més d’1.000.000 d’esdeveniments per hora",
					"Esquemes tipats i extensibles",
					"Autoallotjat o gestionat",
					"Taulers en temps real, repetició i alertes"
				]
			},
			"archon-deploys": {
				"title": "Desplegaments al teu propi maquinari (archon)",
				"summary": "Fes push a un repositori i desplega al teu propi maquinari, amb còpies de seguretat programades per defecte.",
				"detail": "archon gestiona màquines remotes des d'un sol tauler, siguin on siguin. Fas push a GitHub o GitLab, i archon construeix i versiona el contenidor automàticament i el desplega a la teva màquina, amb una còpia de seguretat programada per defecte. Les còpies es poden crear i restaurar sota demanda, i l'accés a màquines i contenidors es comparteix amb l'equip, acotat al que cada persona necessita.",
				"highlights": [
					"Gestió remota de màquines des d’un sol tauler",
					"Desplegaments de contenidors guiats per git",
					"Còpies de seguretat sota demanda i per defecte",
					"Accés granular per a l’equip"
				]
			},
			"workhours-app": {
				"title": "Control horari offline-first (workhours)",
				"summary": "Registre horari fet a Espanya, conforme a la llei laboral espanyola, instal·lable com a PWA en qualsevol dispositiu i funcional sense connexió.",
				"detail": "workhours és una PWA multiplataforma de control horari que compleix la llei laboral espanyola. Funciona a iOS, Android, Windows, macOS i Linux, s'instal·la des del navegador, registra el temps fins i tot sense connexió i se sincronitza automàticament, sense conflictes i en temps real, en tornar a estar en línia. Hi afegeix geolocalització precisa d'entrades i sortides, un sistema de sol·licituds d'ajust amb historial d'auditoria clar, gestió de vacances i baixes, i compliment del RGPD amb les dades a la UE i xifratge d'extrem a extrem.",
				"highlights": [
					"PWA multiplataforma que funciona sense connexió",
					"Sincronització en temps real i sense conflictes",
					"Compliment legal i RGPD",
					"Vacances, baixes i sol·licituds d’ajust"
				]
			},
			"verifactu": {
				"title": "Compliment de facturació Verifactu",
				"summary": "Compliment automàtic de la normativa Verifactu d’Espanya, a hermes i workhours.",
				"detail": "Verifactu és el nou marc regulador espanyol per a la facturació i el compliment fiscal, creat per l'AEAT per modernitzar la facturació i combatre el frau fiscal. hermes inclou suport de Verifactu de sèrie, i workhours s'està actualitzant perquè la seva facturació compleixi automàticament els requisits de l'AEAT.",
				"highlights": [
					"Compliment automàtic amb l’AEAT",
					"Suport de Verifactu integrat a hermes",
					"workhours, en camí"
				]
			},
			"opencti-threat-intel": {
				"title": "Anàlisi d’intel·ligència d’amenaces (OpenCTI)",
				"summary": "Programari d’anàlisi de ciberseguretat que detecta tendències i redacta informes automàtics sobre les majors amenaces del món. El client no es pot revelar.",
				"detail": "Vaig construir programari d’anàlisi de ciberseguretat amb OpenCTI per entendre les tendències de les amenaces i redactar informes automàtics sobre les majors amenaces del món. Processa milions d’esdeveniments cada any i converteix aquestes dades en brut en informes que la gent pot llegir i sobre els quals pot actuar. El client no es pot revelar.",
				"highlights": [
					"Construït amb OpenCTI",
					"Milions d’esdeveniments processats cada any",
					"Informes automàtics sobre les majors amenaces globals",
					"Client confidencial"
				]
			},
			"hours-offers": {
				"title": "Control horari i gestió d’ofertes",
				"summary": "Programari de fitxatge i un sistema de gestió d’ofertes que controla les hores de les persones de principi a fi i segueix cada oferta des de la proposta fins a la conclusió.",
				"detail": "Vaig crear un sistema de fitxatge i un sistema de gestió d’ofertes que controlen les hores de les persones de principi a fi i segueixen cada oferta des de la proposta fins a la conclusió. Gestiona projectes que facturen milions d’euros, així que les hores, les ofertes i la facturació han de quadrar al cèntim.",
				"highlights": [
					"Fitxatge per controlar les hores de les persones",
					"Flux d’ofertes de la proposta a la conclusió",
					"Projectes que facturen milions d’euros",
					"Hores i ofertes lligades a la facturació del projecte"
				]
			},
			"national-data": {
				"title": "Plataforma nacional de dades",
				"summary": "Un projecte nacional que reuneix dades de tots els llocs en un únic lloc web, perquè la gent entengui el país des de moltes perspectives diferents.",
				"detail": "Vaig col·laborar en la implementació i el manteniment d’un projecte nacional que reuneix dades de tots els llocs en un únic lloc web, fet per a frikis (i per a frikis disfressats de científics i investigadors) que volen entendre el país des de tota mena de perspectives.",
				"highlights": [
					"Implementació i manteniment continu",
					"Dades de tots els llocs en un únic lloc web",
					"Fet per a científics, investigadors i frikis curiosos"
				]
			},
			"slate": {
	"title": "Slate: una plataforma d’aula local",
	"summary": "Un «Google Classroom» local per a l'institut: una pissarra digital que se sincronitza amb les llibretes dels alumnes, a més de seguiment de notes, lliuraments i esdeveniments del centre. El meu TFG de Batxillerat, amb un 10/10.",
	"detail": "Slate va ser el meu treball final (TFG) del Batxillerat Tecnològic, i va treure un 10/10. És una experiència tipus Google Classroom local per a un institut. La pissarra digital se sincronitza automàticament amb les llibretes dels alumnes, i la plataforma també porta el seguiment de notes i lliuraments i mostra els esdeveniments del centre. Tenia una app nativa d'Android i una versió web, totes dues sobre un backend en PHP. Avui descansa al cementiri.",
	"highlights": [
		"Qualificat amb un 10/10",
		"Pissarra digital sincronitzada automàticament amb les llibretes dels alumnes",
		"Notes, lliuraments i esdeveniments del centre",
		"App nativa d’Android i versió web, backend en PHP"
	]
},
			"sodge": {
				"title": "Sodge: xarxa social que aparella per interessos",
				"summary": "Una xarxa social que et mostrava automàticament gent amb interessos semblants, amb aparellament de paraules sobre xarxes neuronals, cap al 2017.",
				"detail": "Sodge va ser un experiment personal de cap al 2017, anys abans que la IA es fes popular: una xarxa social que feia servir aparellament de paraules construït sobre xarxes neuronals per mostrar-te automàticament gent amb interessos semblants. Funcionava a web i Android amb un backend en PHP. Avui descansa al cementiri.",
				"highlights": [
					"Aparellament per interessos amb paraules sobre xarxes neuronals",
					"Fet cap al 2017, abans de la febre de la IA",
					"Web i Android",
					"Backend en PHP"
				]
			},
			"vidfeed": {
				"title": "thememepage: feed infinit de vídeos",
				"summary": "Una pàgina estil TikTok per fer scroll sense fi per vídeos divertits d'internet, feta cap al 2014, molt abans que el contingut vertical existís.",
				"detail": "Cap al 2014 vaig fer una pàgina molt semblant al TikTok d'avui: scroll infinit per vídeos divertits d'internet, anys abans que el contingut vertical existís. «Infinit» és una paraula generosa: la llista era força curta i jo era l'únic usuari. Estava escrita en JavaScript i avui descansa al cementiri.",
				"highlights": [
					"Feed de vídeos amb scroll infinit",
					"Fet cap al 2014, avançat al vídeo vertical",
					"JavaScript",
					"Un usuari molt fidel (jo)"
				]
			},
			"greenie": {
				"title": "Greenie: la salut d’una planta amb una foto",
				"summary": "Una app d'Android amb backend en Python que et diu com de sana està una planta a partir d'una sola foto, amb un model entrenat en local amb PyTorch.",
				"detail": "Greenie va ser un projecte acadèmic: una app només per a Android on fas una foto a qualsevol planta i en veus la salut. El backend estava escrit en Python i el model es va entrenar en local amb PyTorch. Avui descansa al cementiri.",
				"highlights": [
					"Salut de la planta a partir d’una sola foto",
					"Model entrenat en local amb PyTorch",
					"App d’Android, backend en Python",
					"Projecte acadèmic"
				]
			},
			"openagv": {
				"title": "OpenAGV: un robot amb rodes omnidireccionals",
				"summary": "Un vehicle de guiatge automàtic sobre rodes omnidireccionals que navega sol d'A a B, amb radar, una interfície completa i control remot per Bluetooth amb evitació automàtica d'obstacles.",
				"detail": "OpenAGV va ser un projecte acadèmic de 2021: un sistema AGV (vehicle de guiatge automàtic) que navegava automàticament d'A a B sobre rodes omnidireccionals. Estava escrit en C i incorporava un radar amb una interfície completa, a més de Bluetooth per al control remot amb evitació automàtica d'obstacles. Avui descansa al cementiri.",
				"highlights": [
					"Navegació automàtica d’A a B sobre rodes omnidireccionals",
					"Radar amb una interfície completa",
					"Control remot per Bluetooth amb evitació automàtica d’obstacles",
					"Escrit en C"
				]
			}
		},
		projects: {
			serverbench: {
	"kind": "E-commerce, analítica i hosting",
	"blurb": "Una plataforma completa per a comunitats en línia, sobretot servidors de jocs (abans purecore): una plataforma de comerç per a béns digitals, una eina d’analítica que prioritza la privadesa i un orquestrador d’hosting «porta el teu propi dispositiu». Diverses de les seves funcions viuen ara als productes de nominal.es.",
	"points": [
		"Botiga: les comunitats venen col·leccionables, insígnies i potenciadors, amb una botiga web personalitzable per a cadascuna",
		"Hosting: un orquestrador basat en Docker per a servidors de jocs molt exigents",
		"Analítica: basada en sockets, vincula sessions només amb dades de la connexió, sense empremta digital del dispositiu",
		"Estudis: eines de creadors, SEO i CMS que comparteixen dades amb un únic nucli d’analítica"
	]
},
			grifpkg: {
				kind: 'Gestor de paquets',
				blurb:
					'Un gestor de paquets per a plugins de Java, programari de servidor i codi de propòsit general, utilitzat sobretot per la comunitat de SpigotMC. Importa, actualitza i gestiona dependències automàticament.',
				points: [
					'Capes pròpies de memòria cau i distribució per a lliurament ràpid a la vora',
					'Indexa biblioteques automàticament i compila des del codi font quan no existeix .jar',
					'Plugins de pagament, detecció de vulnerabilitats i monetització per a desenvolupadors integrats'
				]
			},
			purevanilla: {
				kind: 'Servidor de comunitat',
				blurb:
					'Un projecte de servidor de Minecraft vanilla centrat en una experiència neta i fidel a l’original. Gestionat com un producte, amb infraestructura real darrere d’un joc.',
				points: ['Filosofia vanilla primer: menys mods, més cura', 'Una comunitat viva que necessita disponibilitat', 'On van començar moltes de les lliçons d’hosting']
			},
			"workhours": {
				"kind": "Registre horari fet a Espanya",
				"blurb": "Control horari sense esforç que compleix la llei laboral espanyola. Una PWA multiplataforma per a treballadors que mereixen el millor.",
				"points": [
					"Funciona en qualsevol dispositiu i sense connexió, i se sincronitza en tornar a estar en línia",
					"Fitxatges amb geolocalització, sol·licituds d’ajust amb historial d’auditoria, gestió de vacances i baixes",
					"Compliment del RGPD: dades a la UE i xifratge d’extrem a extrem. Suport de Verifactu en camí"
				]
			}
		},
			"notes": {
				"docker-hosting": "Va començar dins de serverbench i avui continua viu com a archon, a nominal.es.",
				"byod": "Avui continua viu com a archon, a nominal.es: fes push a un repo i desplega al teu propi maquinari.",
				"permissions": "La mateixa idea va créixer fins a convertir-se en obex, a nominal.es: una identitat i permisos acotats a totes les apps.",
				"realtime-ingest": "Aquest nucli d’analítica continua viu avui com a kinesis, a nominal.es.",
				"community-analytics": "La seva part d’analítica continua viva avui com a kinesis, a nominal.es.",
				"commerce-platform": "La seva part de facturació i impostos continua viva avui com a hermes, a nominal.es."
			},
			"nominal": {
	"obex": {
		"tagline": "Una identitat per a cada app que construeixis.",
		"summary": "Una sola sessió d’obex porta permisos acotats a través de totes les apps de nominal, a més d’accés de tercers enllaçat, com les instal·lacions de GitHub App.",
		"stat": {
			"value": "",
			"label": ""
		},
		"points": [
			"Inspector de sessions",
			"Registre d’auditoria complet",
			"SSO d’organització",
			"Claus d’API acotades"
		]
	},
	"eris": {
		"tagline": "Mantén contents els teus usuaris, automàticament.",
		"summary": "Afegeix un fragment de codi al teu producte. Els usuaris reben respostes suggerides abans que s’obri ni tan sols un tiquet. La IA l’esborrana, una persona l’envia.",
		"stat": {
			"value": "",
			"label": ""
		},
		"points": [
			"Suggeriments intel·ligents, amb una persona al comandament",
			"Coneixement que s’acumula",
			"Widget, plataforma o Discord",
			"Resolucions coherents"
		]
	},
	"hermes": {
		"tagline": "Cobra des de qualsevol lloc, complint la normativa.",
		"summary": "La mateixa configuració de facturació gestiona subscripcions recurrents o cobraments únics, calcula l’impost de cada país i el declara, inclòs Verifactu, automàticament.",
		"stat": {
			"value": "",
			"label": ""
		},
		"points": [
			"Centenars de països",
			"Compliment fiscal de la UE",
			"De projecte personal a empresa",
			"Facturació flexible"
		]
	},
	"kinesis": {
		"tagline": "Entén el teu producte a qualsevol escala.",
		"summary": "Esdeveniments des de web, mòbil o backend, validats contra esquemes tipats i mostrats en taulers en temps real.",
		"stat": {
			"value": "1.000.000+",
			"label": "esdeveniments processats per hora"
		},
		"points": [
			"Implementació facilíssima",
			"Autoallotjat o gestionat",
			"Esquemes tipats i extensibles",
			"Portals bonics i fiables"
		]
	},
	"archon": {
		"tagline": "Porta el teu propi maquinari. Nosaltres fem la resta.",
		"summary": "Gestiona les teves pròpies màquines de forma remota i desplega contenidors directament des de GitHub o GitLab, amb còpies de seguretat incloses.",
		"stat": {
			"value": "",
			"label": ""
		},
		"points": [
			"Gestió remota de màquines",
			"Contenidors guiats per git",
			"Còpies de seguretat sota demanda",
			"Accés granular per a l’equip"
		]
	}
},
			"graveyard": {
				"slate": {
	"name": "slate",
	"tag": "TFG de Batxillerat",
	"year": "2019",
	"epitaph": "Va posar nota als deures de tothom. El tribunal li va posar un 10.",
	"cause": "La graduació (amb un 10).",
	"summary": "Un «Google Classroom» local per a l'institut: la pissarra digital se sincronitzava automàticament amb les llibretes dels alumnes, amb seguiment de notes, lliuraments i fins i tot esdeveniments del centre. App nativa d'Android i versió web, backend en PHP. Nota: 10/10."
},
				"sodge": {
					"name": "sodge",
					"tag": "Experiment personal",
					"year": "c. 2017",
					"epitaph": "Aparellava la gent per interessos amb xarxes neuronals abans que fos moda. Mai es va aparellar amb cap usuari.",
					"cause": "Causes naturals (sense usuaris).",
					"summary": "Una xarxa social que et mostrava automàticament gent amb interessos semblants, amb aparellament de paraules sobre xarxes neuronals, molt abans que la IA es fes popular. Web i Android, backend en PHP."
				},
				"feed": {
					"name": "thememepage",
					"tag": "Experiment personal",
					"year": "c. 2014",
					"epitaph": "Scroll infinit. Infinit és una paraula generosa: la llista tenia una dotzena de vídeos i exactament un usuari.",
					"cause": "Es va quedar sense vídeos.",
					"summary": "Una pàgina estil TikTok per fer scroll sense fi per vídeos divertits d'internet, anys abans que el contingut vertical existís. La llista era curta i jo era l'únic usuari. JavaScript."
				},
				"greenie": {
					"name": "greenie",
					"tag": "Projecte acadèmic",
					"year": "2023",
					"epitaph": "Sabia dir-te que la teva planta es moria. No sabia evitar-ho.",
					"cause": "Em vaig graduar. Les plantes no.",
					"summary": "Una app només per a Android amb backend en Python: fes una foto a qualsevol planta i mira com de sana està, amb un model entrenat en local amb PyTorch."
				},
			"openagv": {
				"name": "openagv",
				"tag": "Projecte acadèmic",
				"year": "2021",
				"epitaph": "Esquivava tots els obstacles de la sala. La data de lliurament no sortia al radar.",
				"cause": "Data de lliurament (no detectada pel radar).",
				"summary": "Un AGV que navegava automàticament d'A a B sobre rodes omnidireccionals. Escrit en C, amb un radar amb una interfície completa i control remot per Bluetooth amb evitació automàtica d'obstacles."
			}
			},
			"clickMore": [
				"Una altra vegada? M’encanta.",
				"Encara aquí? Respecte.",
				"Se m’arrencarà la cua.",
				"Això és un joc? M’agrada aquest joc.",
				"Més bups. Més bups.",
				"Deu clics més per a un altre premi. Porto el compte."
			],
			"photos": {
				"cruise": {
					"caption": "L’hora daurada, en un creuer",
					"alt": "El Quique dempeus a la coberta d’un creuer en una posta de sol"
				},
				"sister": {
					"caption": "Amb la meva germana, atrapats en un mirall",
					"alt": "El Quique i la seva germana reflectits en un mirall rodó en un pati assolellat"
				},
				"gf": {
					"caption": "Una passejada amb la meva xicota, perseguint la posta de sol",
					"alt": "El Quique i la seva xicota somrient en una passejada per un turó a la posta de sol"
				},
				"bee": {
					"caption": "No sóc jo: una abella a la meva lavanda",
					"alt": "Un borinot sobre flors de lavanda al jardí"
				}
			},
			"loves": {
				"sackboy": {
					"name": "LittleBigPlanet",
					"tag": "Juga. Crea. Comparteix.",
					"text": "Sackboy va demostrar que un joc pot ser una caixa d’eines. Construir nivells i compartir-los era la meitat de la gràcia, i probablement d’aquí ve la meva manía del «ja ho construeixo jo»."
				},
				"tomb": {
					"name": "Tomb Raider",
					"tag": "Lara, en gloriós low-poly",
					"text": "Ruïnes, trencaclosques i una paciència sorprenent. La Lara original encara sembla un grapat de triangles i encara se sent com una aventura."
				},
				"mindstorms": {
					"name": "LEGO Mindstorms",
					"tag": "On van començar els robots",
					"text": "Un maó que conduïa i un sensor que hi veia. Molt abans del grau de robòtica, i abans d’un AGV amb el seu propi radar, hi va haver un robot de LEGO pel terra de casa."
				},
				"crash": {
					"name": "Crash Bandicoot",
					"tag": "Gira, salta, repeteix",
					"text": "Alegria i ràbia dels noranta a parts iguals. Encara el millor argument que un gir resol gairebé tots els problemes."
				}
			},
			"places": {
				"barcelona": {
					"name": "Barcelona",
					"note": "La base. On comença i acaba cada viatge."
				},
			"stockholm": {
				"name": "Estocolm",
				"note": ""
			},
			"lisbon": {
				"name": "Lisboa",
				"note": ""
			},
			"vigo": {
				"name": "Vigo",
				"note": ""
			},
			"valencia": {
				"name": "València",
				"note": ""
			},
			"harwich": {
				"name": "Harwich",
				"note": ""
			},
			"copenhagen": {
				"name": "Copenhaguen",
				"note": ""
			},
			"warnemunde": {
				"name": "Warnemünde",
				"note": ""
			},
			"paris": {
				"name": "París",
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
				"name": "Santorini (Fira)",
				"note": ""
			},
			"kotor": {
				"name": "Kotor",
				"note": ""
			},
			"mykonos": {
				"name": "Míkonos",
				"note": ""
			},
			"venice": {
				"name": "Venècia",
				"note": ""
			},
			"piraeus": {
				"name": "El Pireu (Atenes)",
				"note": ""
			},
			"ephesus": {
				"name": "Efes",
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
				"name": "Roma",
				"note": ""
			},
			"izmir": {
				"name": "Esmirna",
				"note": ""
			},
			"istanbul": {
				"name": "Istanbul",
				"note": ""
			},
			"naples": {
				"name": "Nàpols",
				"note": ""
			},
			"livorno": {
				"name": "Livorn (Florència)",
				"note": ""
			},
			"toulon": {
				"name": "Tolon",
				"note": ""
			},
			"monaco": {
				"name": "Mònaco",
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
				"name": "Corfú",
				"note": ""
			},
			"palermo": {
				"name": "Palerm",
				"note": ""
			},
			"marseille": {
				"name": "Marsella",
				"note": ""
			},
			"genoa": {
				"name": "Gènova",
				"note": ""
			},
			"messina": {
				"name": "Messina",
				"note": ""
			},
			"valletta": {
				"name": "La Valletta",
				"note": ""
			},
			"granada": {
				"name": "Granada",
				"note": ""
			},
			"cadiz": {
				"name": "Cadis",
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
				"name": "Orlàndo",
				"note": ""
			}
			}
	}
};
