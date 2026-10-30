import type { Messages } from './en.ts';

export const fr: Messages = {
	ui: {
		meta: {
			title: 'Quique Osuna | Ingénieur logiciel, ouvert aux propositions',
			description:
				"Quique (Happy) construit des logiciels qui doivent fonctionner : aérospatial, robotique, santé, hébergement, e-commerce et outils pour développeurs. Il programme depuis l'âge de 9 ans, vit près de Barcelone et est ouvert à de nouvelles missions.",
			og: "Des logiciels pour l'espace, les robots et les recoins les plus étranges d'internet. Ouvert à de nouvelles missions : quique@osuna.dev"
		},
		nav: {
			top: 'Bonjour',
			about: 'À propos',
			experience: 'Expérience',
			projects: 'Projets',
			hire: 'Embauchez-moi',
			sections: 'Sections',
			home: 'quique, retour en haut',
			palette: 'Ouvrir la palette de commandes',
			dark: 'Basculer en mode sombre',
			darkTitle: 'Sombre / clair',
			y2kTitle: "Voyager jusqu'à l'an 2000",
			language: 'Langue',
		},
		hero: {
			eyebrow: 'Bonjour, je suis Quique',
			h1a: 'Je construis des logiciels',
			h1b: 'qui doivent ',
			h1em: 'fonctionner',
			h1c: '.',
			retro: 'Bienvenue sur la page de Quique !!',
			ledeA:
				"J'ai commencé à programmer à neuf ans et je n'ai jamais vraiment arrêté. Aujourd'hui, je construis des logiciels pour l'espace, les robots et la santé, ainsi que quelques produits à moi, étranges et merveilleux. J'habite près de Barcelone, on m'appelle ",
			ledeBold: 'Happy',
			ledeB: " en ligne, et je suis ouvert à de nouvelles missions.",
			rightNow: 'en ce moment je suis',
			cta: 'Embauchez-moi',
			copied: 'Copié',
			copyAria: "Copier l'adresse e-mail",
			toastCopied: 'E-mail copié. Allez écrire quelque chose de sympa.',
			years: (n: number) => `${n}+ ans de code`,
			pressA: 'appuyez sur',
			pressB: 'pour explorer',
			speaks: 'je parle',
			profileAria: 'Profil rapide',
			open: 'Ouvert',
			onBranch: 'sur la branche',
			availableNow: 'disponible maintenant',
			codeAria: 'Profil sous forme de code',
			recommended: 'Recommandé',
			alertTitle: 'Belle collaboration potentielle',
			alertText: "Revue suggérée : dites bonjour avant que quelqu'un d'autre ne le fasse.",
			hireQL: 'Hire QL',
			workingOn: 'En cours',
			sideQuests: 'Quêtes annexes',
			currentBranch: 'Branche actuelle',
			b1: 'systèmes critiques, navigation par satellite',
			b2: 'automatisation industrielle, automobile',
			b3: "nominal.es, serverbench, grifpkg",
			construction: 'EN CONSTRUCTION',
			mosaic: 'survolez pour peindre. cliquez pour fixer un bloc.'
		},
		about: {
			eyebrow: 'À propos',
			h2a: 'Résolveur de problèmes,',
			h2b: "par habitude.",
			p1a: 'Je suis Quique, ',
			p1bold: 'Happy',
			p1b: " en ligne. Je programme depuis que je me souviens avoir touché un ordinateur, et j'habite près de Barcelone. J'ai un tas de projets personnels qui ne sont jamais entrés dans aucune bio, mais au fond, j'essaie de réparer des choses qui rendent la vie un peu meilleure, pour les autres et pour moi.",
			p2: "Le jour, je travaille dans une entreprise qui construit des systèmes aérospatiaux, de défense et de sécurité, avec de profondes racines dans la navigation par satellite et les logiciels critiques, et dans une entreprise de robotique spécialisée en automatisation industrielle, surtout dans l'automobile. La nuit, je construis nominal.es, une famille de produits pour les équipes (identité, support, facturation, analytique et hébergement), ainsi que des outils pour des communautés comme une boutique, un hébergeur et un gestionnaire de paquets.",
			p3: "J'ai deux diplômes : Génie logiciel (Informatique) à l'UAB, et un Grado Superior (formation professionnelle supérieure) en Robotique et Automatisation industrielle à Salesians Sarrià. Ça se voit. Je pense aux modes de défaillance, à la latence et au monde physique avant de penser aux frameworks.",
			facts: 'En bref',
			alias: 'pseudo',
			base: 'lieu',
			baseV: 'près de Barcelone',
			since: 'code depuis',
			sinceV: "l'âge de 9 ans (avril 2010)",
			degrees: 'diplômes',
			deg1: 'Génie logiciel (UAB)',
			deg2: 'Robotique et Automatisation (Salesians Sarrià)',
			speaks: 'je parle',
			status: 'statut',
			statusV: "ouvert aux offres d'emploi",
			fuel: 'carburant',
			fuelV: 'café',
			carouselAria: 'Ce en quoi je crois',
			prev: 'Précédent',
			next: 'Suivant',
			goTo: (n: number) => `Aller à la citation ${n}`,
			statYears: (bc: number) => `ans de code, dont ${bc} av. J.-C. (avant ChatGPT)`,
			statAge: "ans quand j'ai commencé à écrire du code",
			achEyebrow: 'Succès',
			achH2: 'Débloqués jusqu’ici.',
			xp: 'XP',
			clickToClaim: 'cliquez pour réclamer',
			claimed: 'RÉCLAMÉ +10 XP',
			unlocked: 'SUCCÈS DÉBLOQUÉ',
			toastXp: (title: string) => `+10 XP : ${title}`,
			toastAll: "100 % terminé. Le seul succès restant est de m'embaucher.",
			sayHalf: 'À mi-chemin. Allez, collectionnez-les tous.'
		},
		marquee: { aria: 'Avec quoi je travaille', play: 'Relancer le défilement', pause: 'Mettre le défilement en pause' },
		exp: {
			eyebrow: 'Expérience',
			h2a: "Ce que j'ai vraiment",
			h2b: 'construit et exploité.',
			lede: (areas: number, entries: number) =>
				`${areas} domaines de compétence, ${entries} entrées, zéro remplissage de mots à la mode. Filtrez par compétence, technologie ou contexte. Chaque carte s'ouvre et chaque étiquette technologique est un filtre.`,
			filters: 'Filtres',
			searchPh: 'Rechercher : docker, commerce, go...',
			searchLabel: "Rechercher dans l'expérience",
			skillArea: 'Domaine de compétence',
			everything: 'Tout',
			context: 'Contexte',
			tech: 'Technologie',
			matchMode: 'Mode de correspondance',
			any: 'une',
			all: 'toutes',
			gLang: 'Langages',
			gFrame: 'Frameworks',
			gTools: 'Outils et plateformes',
			reset: 'Réinitialiser les filtres',
			showing: (n: number, total: number) => `${n} sur ${total} affichés`,
			filtered: 'filtré',
			expandAll: 'Tout déplier',
			collapseAll: 'Tout replier',
			details: 'Détails',
			less: 'Moins',
			filterBy: (t: string) => `Filtrer par ${t}`,
			emptyTitle: 'Rien ne correspond.',
			emptyText: "Même Gandalf n'a pas pu le flairer. Essayez avec moins de filtres, ou demandez-moi directement.",
			emptySay: "Rien ne correspond. J'ai reniflé partout."
		},
		projects: {
			eyebrow: 'Projets',
			h2a: "Des choses que j'ai faites",
			h2b: 'parce que je devais.',
			lede: "Rien de ce qui existait ne convenait, alors j'ai construit mes propres produits : identité, support, facturation, analytique, hébergement, suivi du temps de travail et un gestionnaire de paquets.",
			visit: (d: string) => `Visiter ${d}`,
			none: 'Pas de site public'
		},
		hire: {
			eyebrow: 'Disponible pour une mission',
			h2: 'Quelque chose de difficile à construire ? Parlons-en.',
			small:
				"Je suis ouvert à de nouvelles offres d'emploi. J'aime les problèmes avec des arêtes vives : systèmes distribués, hébergement, outils pour développeurs et logiciels qui doivent être justes du premier coup.",
			ledeA: "Dites-moi ce que vous construisez et ce qui coince. Quelques lignes suffisent. Je lis tout et je vous répondrai depuis ",
			ledeB: '.',
			langs: 'Vous pouvez m’écrire en français, anglais, espagnol, catalan ou allemand.',
			emailLabel: 'Votre e-mail',
			emailPh: 'vous@email.fr',
			buildLabel: 'Que construisons-nous ?',
			buildPh: 'Que construisons-nous ?',
			send: 'Écrire à Quique',
			sending: "Ouverture de l'e-mail...",
			copy: (e: string) => `Copier ${e}`,
			copied: 'Copié',
			mosaic: 'chaque bloc est une idée de projet. fixez la vôtre.',
			subject: 'Travaillons ensemble',
			defaultBody: "Bonjour Quique, j'aimerais parler d'un projet.",
			replyTo: 'Répondre à : ',
			toastSent: "Votre application de messagerie devrait s'ouvrir. Sinon, copiez l'adresse ci-dessous.",
			say: "Vous l'avez fait ! Il va adorer.",
			toastCopied: 'Copié ! Collez-le où vous voulez.'
		},
		retro: {
			company: 'Une entreprise Happy',
			shortcuts: 'Raccourcis du site',
			home: 'Accueil',
			skills: 'Compétences',
			hireLink: 'Embaucher',
			go2000: "Passer à l'an 2000",
			back2026: 'Retour en 2026',
			quickLinks: 'Liens rapides',
			myGithub: 'Mon GitHub',
			service: 'Service client',
			contact247: 'Contacter Quique 24h/24',
			notReally: "(pas littéralement 24h/24, il dort)",
			guarantee: 'Garantie de sécurité',
			memberOf: 'Membre de',
			b1: 'Fait avec Svelte 5',
			b2: 'Optimisé pour 800x600',
			b3: 'Propulsé par Docker',
			b4: 'HTML 4.01 valide (mdr)',
			finder: "Chercheur d'ingénieur express",
			showMe: "Montrez-moi le meilleur ingénieur pour :",
			anyEng: "n'importe quel ingénieur",
			onlyMe: 'Quique en particulier',
			iNeed: "J'ai besoin de :",
			needs: ['Une plateforme web', "Un backend d'hébergement", 'Un gestionnaire de paquets', 'Un logiciel critique', 'Automatisation / robotique', 'Quelque chose de bizarre'],
			starting: 'Début :',
			whens: ['Dès que possible', 'Le mois prochain', 'Le trimestre prochain', "Quand l'an 3000 arrivera"],
			size: 'Taille :',
			sizes: ['Petit', 'Moyen', 'Grand', 'Taille lunaire'],
			go: 'Go !',
			news: 'Offres et actualités',
			newsItems: [
				"Économisez 40 % sur les réécritures. Embauchez Quique avant que le code legacy ne vous trouve !",
				'Nouveau : déploiements sans interruption disponibles sur les terminaux participants',
				"Recevez 50 ou 100 € de remboursement sur votre premier bug corrigé (offre fictive)",
				'Conteneurs Docker : maintenant avec 30 % de baleine en plus',
				'Vivez une grande aventure dans votre propre backlog'
			],
			corner: 'Le coin du webmaster',
			visitor: 'Vous êtes le visiteur numéro',
			visitorNote: '(compté uniquement dans votre navigateur, comme un tout petit livre d’or honnête)',
			fineA: "Tous droits réservés. Aucun GIF animé n'a été blessé lors de la création de cette section.",
			guestbook: "Signez mon livre d'or !",
			mailSubject: "Demande via le Chercheur d'ingénieur express",
			mailBody: (project: string, start: string, size: string, mode: string) =>
				`Bonjour Quique,\n\nJ'ai utilisé votre Chercheur d'ingénieur express.\n\nType de projet : ${project}\nDébut : ${start}\nTaille : ${size}\nMode de recherche : ${mode}\n\n`,
			modeAny: "n'importe quel ingénieur",
			modeMe: 'vous en particulier',
			toastDial: 'Connexion... *screeeeeeee-kshhhhh*'
		},
		footer: {
			made: "Fait près de Barcelone avec une quantité déraisonnable de café et un berger australien blue merle nommé Gandalf.",
			elsewhere: 'Ailleurs',
			coffee: 'Offrez-moi un café'
		},
		palette: {
			aria: 'Palette de commandes',
			placeholder: 'Tapez une commande ou cherchez...',
			label: 'Commande',
			none: 'Aucune commande trouvée. Essayez « embaucher ».',
			navigate: 'naviguer',
			run: 'exécuter',
			go: 'Aller à',
			actions: 'Actions',
			fun: 'Amusement',
			retro: "Le coin des années 2000",
			email: 'Écrire à Quique',
			copy: "Copier l'adresse e-mail",
			github: 'Ouvrir GitHub',
			dark: 'Basculer en mode sombre',
			y2kOn: "Voyager jusqu'à l'an 2000",
			y2kOff: "Quitter l'an 2000",
			summon: 'Invoquer Gandalf',
			summonSay: 'Ouaf ! Vous avez sonné ?',
			trick: 'Faire faire un tour à Gandalf',
			confetti: 'Confettis',
			sudoHint: 'permission accordée',
			toastCopied: 'E-mail copié. Allez, écrivez quelque chose.',
			sudo1: '[sudo] mot de passe pour le recruteur : ********',
			sudo2: "Accès accordé. Ouverture de la section d'embauche...",
			language: 'Changer de langue',
			"graveyard": "Le cimetière",
			"goPersonal": "Aller au côté perso",
			"goPro": "Aller au côté pro",
			"goHome": "Retour à l'accueil"
		},
		mosaic: {
			t12: '12 blocs fixés. Graphique de contributions ou Picasso ?',
			say12: "Ooh, on peint ? J'adore peindre.",
			t36: '36 blocs. Ceci est officiellement une galerie.'
		},
		mascot: {
			aria: 'Gandalf, un berger australien blue merle. Cliquez pour une surprise.',
			away: '(._.) Gandalf vous attend. Revenez',
			startle: [
	"Ouaf !",
	"Aïe !",
	"C'est un écureuil ?!",
	"Zoomies ! Au revoir."
],
			confettiSay: "D'accord, d'accord ! Qui est un bon garçon ? Moi. Tenez, les confettis !",
			clickToast: (n: number) => `Vous avez cliqué ${n} fois sur Gandalf. Voilà de la détermination. Embauchez Quique avec.`
		},
		eggs: {
			sudo1: "quique n'est pas dans le fichier sudoers. Cet incident sera signalé.",
			sudo2: "Signalé à : personne. Nous n'avons personne à qui signaler.",
			hire: 'Sage décision. Très sage décision.',
			gandalf: "Vous avez dit mon nom ! Ouaf !",
			woof: 'OUAF ! Quelqu’un a dit promenade ?',
			happy: "C'est mon nom, ne l'usez pas.",
			matrix: "Il n'y a pas de cuillère. Il n'y a que du TypeScript.",
			rm: "rm : impossible de supprimer le futur : permission refusée",
			konami: "CODE KONAMI ACCEPTÉ. +30 vies. Quique approuve votre enfance."
		},
		y2k: {
			on: "Bienvenue en l'an 2000. Votre modem compose le numéro...",
			off: 'Retour vers le futur. Bienvenue à la maison.',
			sayOn: "Oh là là. Tout est beige maintenant.",
			sayOff: "Ouf. L'antialiasing !"
		},
			"graveyard": {
				"eyebrow": "Le cimetière",
				"h2a": "Là où les bons projets",
				"h2b": "vont se reposer.",
				"lede": "Tout bon développeur a des projets abandonnés. Les miens ont quelques toiles d'araignée et un très bon garçon pour les garder. Allumez une bougie, ou appuyez simplement sur F.",
				"rip": "R.I.P.",
				"cause": "Cause du décès",
				"dig": "Déterrer les détails",
				"rebury": "Réenterrer",
				"respects": "Hommages rendus",
				"pay": "Rendre hommage",
				"pressF": "appuyez sur F pour rendre hommage",
				"toastF": "F. Hommage rendu.",
				"toast10": "10 hommages. Ils l'ont senti.",
				"toast25": "25 hommages. Gandalf pleure. Discrètement.",
				"noYear": "année perdue dans l'histoire",
				"hint": "Cliquez sur une pierre tombale pour déterrer les détails.",
				"aria": "Projets abandonnés"
			},
			"modes": {
				"personal": "Perso",
				"pro": "Pro",
				"home": "Accueil",
				"switch": "Changer de version"
			},
			"launcher": {
				"meta": {
					"title": "Quique Osuna",
					"description": "Choisissez une porte : le côté perso (jeux, voyages, un très bon chien) ou le côté pro (expérience, projets, embauche).",
					"og": "Deux versions d’un même site : le côté perso et le côté pro."
				},
				"eyebrow": "Bienvenue",
				"h1a": "Bonjour, je suis Quique.",
				"h1b": "Choisissez une porte.",
				"lede": "Ce site existe en deux versions, selon la raison de votre visite.",
				"personalTitle": "Perso",
				"personalText": "Jeux, voyages, un très bon chien et parfois une abeille. L'humain derrière le code.",
				"personalCta": "Venez traîner",
				"proTitle": "Pro",
				"proText": "Expérience, projets et un bouton d'embauche. L'ingénieur et ce que je peux construire pour vous.",
				"proCta": "Parlons travail",
				"last": "la dernière fois",
				"hint": "appuyez sur 1 ou 2, ou utilisez les flèches",
				"switchHint": "Vous pouvez changer à tout moment."
			},
			"pnav": {
				"top": "Bonjour",
				"me": "Moi",
				"loves": "J'aime",
				"skin": "Skin",
				"map": "Carte"
			},
			"personal": {
				"meta": {
					"title": "Quique Osuna | Le côté perso",
					"description": "Jeux, voyages, croisières, briques et un berger australien blue merle. L'humain derrière le code, près de Barcelone.",
					"og": "Le côté perso de Quique : jeux, voyages et un très bon chien."
				},
				"eyebrow": "Perso",
				"h1a": "Salut, je suis Quique.",
				"h1b": "L'humain derrière le code.",
				"lede": "En dehors du travail, je suis Happy : je joue à trop de jeux, je collectionne les croisières et les pays, je construis des choses avec des briques et je partage le canapé avec un berger australien blue merle nommé Gandalf. J'habite près de Barcelone, j'ai commencé à coder à neuf ans et je n'ai jamais vraiment arrêté.",
				"facts": [
					"Près de Barcelone",
					"Joueur",
					"Fan de croisières",
					"Bâtisseur de briques",
					"Ami des chiens"
				],
				"ctaPics": "Voir les photos",
				"ctaMap": "Aller à la carte",
				"proLinkA": "Vous cherchez le côté professionnel ?",
				"proLink": "Visiter la page pro",
				"heroAlt": "Quique sur un bateau de croisière au coucher du soleil"
			},
			"me": {
				"eyebrow": "Photos de moi",
				"h2a": "L'humain",
				"h2b": "derrière le clavier.",
				"lede": "Quelques photos, surtout en vacances, parce que c'est là que je lâche le clavier.",
				"open": "Ouvrir la photo",
				"close": "Fermer"
			},
			"loves": {
				"eyebrow": "Ce que j'aime",
				"h2a": "Des jeux et des gadgets",
				"h2b": "qui m’ont façonné.",
				"lede": "Ce que j'emporterais sur une île déserte, si l'île avait une prise."
			},
			"skin": {
				"eyebrow": "Minecraft",
				"h2a": "Voici mon skin.",
				"h2b": "Allez, touchez-le.",
				"lede": "J'ai passé plus d'heures sur Minecraft que je ne voudrais l'admettre, et j'ai même géré un serveur vanilla pour une communauté. Voici mon skin en 3D : faites-le pivoter, ou faites-le marcher.",
				"anims": {
					"idle": "Immobile",
					"walk": "Marcher",
					"run": "Courir",
					"fly": "Voler",
					"wave": "Saluer",
					"crouch": "S'accroupir",
					"hit": "Frapper",
					"swim": "Nager"
				},
				"animLabel": "Animation",
				"speed": "Vitesse",
				"rotate": "Rotation auto",
				"pause": "Pause",
				"play": "Lecture",
				"reset": "Réinitialiser la vue",
				"download": "Volez mon skin",
				"hint": "faites glisser pour pivoter",
				"loading": "Chargement du visualiseur 3D...",
				"fail": "Le visualiseur 3D n'a pas pu démarrer sur cet appareil.",
				"aria": "Visualiseur 3D de mon skin Minecraft"
			},
			"map": {
				"eyebrow": "Voyages",
				"h2a": "Les endroits où j'ai été",
				"h2b": "et ceux où je vais.",
				"lede": "Croisières, voyages et tout ce qu'il y a entre les deux. Cette carte se remplit à mesure que je me remplis.",
				"legend": {
					"home": "Maison",
					"cruise": "Croisière",
					"trip": "Voyage"
				},
				"places": "lieux",
				"cruises": "croisières",
				"trips": "voyages",
				"empty": "Pour l'instant, juste la base. Les autres épingles arrivent.",
				"pick": "Sélectionnez une épingle pour lire l'histoire.",
				"aria": "Carte du monde avec les endroits que j'ai visités",
				"list": "Lieux",
			"visits": "Visité lors de",
			"soon": "Bientôt",
			"view": "Vue de la carte",
			"viewWorld": "Monde",
			"viewEurope": "Europe"
			},
			"pfooter": {
				"text": "Merci de votre passage.",
				"hire": "Vous voulez m’embaucher ?",
				"hireCta": "Visiter la page pro",
				"home": "Retour à l'accueil"
			}
	},
	content: {
		roles: [
			'un résolveur de problèmes',
			'un ingénieur presque de fusées',
			'un chuchoteur de Docker',
			'un dompteur de robots',
			'un développeur PHP repenti',
			'un inventeur de gestionnaires de paquets',
			'quelqu’un qui lit les logs',
			'disponible pour une mission'
		],
		principles: [
			{ quote: "J'ai appris beaucoup de choses à la dure.", by: 'moi, dans mon propre README' },
			{
				quote: "Au fond, je suis un résolveur de problèmes. J'essaie de réparer des choses qui rendent la vie un peu meilleure, pour les autres et pour moi.",
				by: 'encore moi'
			},
			{
				quote: "Quand rien de ce qui existait n'était assez bien, je l'ai construit de zéro : une boutique, un hébergeur, un gestionnaire de paquets.",
				by: 'le git log'
			},
			{
				quote: "La vie privée est une contrainte de conception. J'ai lié des sessions uniquement à partir des données de connexion, sans empreinte d'appareil.",
				by: 'un socket, sans doute'
			},
			{ quote: "{bc} ans d'expérience av. J.-C. Comprenez : avant ChatGPT.", by: 'mon calendrier' }
		],
		achievements: [
			{ title: 'Commerçant', text: "J'ai construit ma propre plateforme e-commerce pour biens numériques, comme Shopify mais pour des objets de collection dans les jeux." },
			{ title: 'Propriétaire', text: "J'ai construit mon propre système d'hébergement sous Docker. Les serveurs de jeux sont les locataires les plus gourmands." },
			{ title: 'Chuchoteur de dépendances', text: "J'ai construit de zéro la logique d'un gestionnaire de paquets, avec couches de cache et de distribution." },
			{ title: "Pas d'empreinte, merci", text: "J'ai construit une plateforme d'analytique à base de sockets avec une liaison de sessions stricte, sans aucune empreinte d'appareil." },
			{ title: 'Centre de contrôle', text: "J'ai travaillé sur des projets spatiaux critiques qui repoussent la prochaine frontière de l'exploration humaine." },
			{ title: "D'abord, ne pas nuire", text: "J'ai travaillé sur des applications de santé qui améliorent la compréhension et la conduite des essais cliniques." },
			{ title: 'Double diplôme', text: "Génie logiciel (Informatique) à l'UAB, plus un Grado Superior en Robotique et Automatisation industrielle à Salesians Sarrià, avec A+ dans la plupart des matières." },
			{ title: 'Cicatrices', text: "J'ai appris beaucoup de choses à la dure. Celle-là n'a pas de catégorie." }
		],
		marquee: [
			'TypeScript', 'Go', 'Svelte', 'Docker', 'Linux', 'PHP', 'C / C++', 'WebSockets', 'AWS',
			'Vue', 'Maven / Gradle', 'CSS', 'Systèmes distribués', 'Gestionnaires de paquets', 'Logiciels critiques'
		],
		quips: {
	"general": [
		"Ouaf. Ne faites pas attention à moi. J'habite sur votre écran maintenant.",
		"Je rassemble des troupeaux. Surtout des échéances.",
		"Vous ne passerez pas... sans regarder le bouton Embauchez-moi.",
		"Quique m'a dessiné en 24x24 pixels. Je crois qu'il en est fier.",
		"Bons garçons : 1. Friandises : 0. Merci de conseiller.",
		"Je connais trois tunnels. Ne me parlez pas du quatrième.",
		"psst. le bouton Embauchez-moi fonctionne.",
		"Un merle n'est jamais en retard. Ni en avance. Il arrive précisément quand il l'a décidé.",
		"Appuyez sur Ctrl+K. Je le ferais bien, mais je n'ai pas de pouces.",
		"Attendez, j'ai entendu le mot promenade ? Quelqu'un a dit promenade ?",
		"Il y a un code Konami quelque part ici. Je n'ai rien dit.",
		"Un écureuil ! ...Pardon. Où en étions-nous ?"
	],
	"top": [
		"Ouaf ! Je suis Gandalf. Quique est occupé à coder, alors c'est moi qui accueille.",
		"Faites défiler. Les meilleures friandises ne sont pas dans l'en-tête."
	],
	"about": [
		"Ces succès sont réels. Les confettis sont en supplément.",
		"Il a commencé à coder à neuf ans. Moi, à mâchouiller des chaussures à neuf semaines."
	],
	"experience": [
		"Essayez les filtres. Je les ai reniflés. Très satisfaisants.",
		"Filtrez par Go. Puis rapportez la balle. Attendez, ce n’est pas un filtre.",
		"Chaque carte s'ouvre. Je les ai toutes vérifiées. Deux fois."
	],
	"projects": [
		"Il a construit tout ça pendant que je supervisais depuis le canapé.",
		"nominal a cinq produits. J'ai une balle. Priorités."
	],
	"hire": [
		"C'est ici que vous lui écrivez un e-mail.",
		"Dites bonjour. Il répond. Je l'ai vu. Avec frétillement de queue.",
		"quique@osuna.dev. J'attends ici. Les bons garçons attendent."
	],
			"graveyard": [
				"J'ai enterré un os ici un jour. Ne le dites pas aux projets.",
				"Tout bon développeur a un cimetière. Celui de Quique est gardé par un très bon garçon.",
				"Ne les réveillez pas. Le dernier est encore en train de compiler."
			],
			"launcher": [
				"Deux portes. La porte numéro un a le chien. La porte numéro deux a le CV.",
				"Choisissez bien. Ou choisissez les deux. Les portes sont gratuites."
			],
			"me": [
				"Ça, c'est Quique sur un bateau. Moi, je ne fais pas les bateaux. Trop de mer, pas assez de canapé.",
				"Regardez-le sourire. Je n'ai pris aucune de ces photos. Je dormais."
			],
			"loves": [
				"Sackboy et moi, on a la même énergie : doux, tricoté, imparable.",
				"Je serais génial dans Crash. Une attaque tournoyante, c'est juste des zoomies avec un permis."
			],
			"skin": [
				"Faites courir le skin. C'est comme ça que je cours quand j'entends le mot promenade.",
				"Tout dans Minecraft est fait de carrés. Comme moi, si vous plissez les yeux."
			],
			"map": [
				"Les croisières ont des buffets. J'ai droit à une assiette ? Je demande pour un ami.",
				"Quique voyage beaucoup. Moi, j'attends à la porte. C'est toute une histoire."
			]
},
		clickLines: [
	"Boop !",
	"Ouaf !",
	"Je suis un très bon garçon, vous savez.",
	"Les câlins sur le ventre sont en supplément.",
	"À mi-chemin de la friandise. Probablement.",
	"Six. Je compte aussi.",
	"Sept. Vous êtes décidé.",
	"Huit. Je vois déjà la friandise.",
	"Neuf. Le dix va être génial."
],
		areas: {
			backend: { label: 'Backend et systèmes distribués', blurb: 'Des services qui tiennent, passent à l’échelle et ne réveillent personne à 3 h du matin.' },
			infra: { label: 'Infrastructure et hébergement', blurb: "Conteneurs, orchestration et exécution sûre des charges de travail des autres." },
			frontend: { label: 'Frontend et produit', blurb: "Des interfaces que les gens aiment vraiment utiliser : tableaux de bord, éditeurs et boutiques." },
			commerce: { label: 'Commerce, publicité et croissance', blurb: 'Vendre des biens numériques, monétiser des communautés et se faire trouver.' },
			data: { label: 'Données, analytique et statistiques', blurb: "Transformer des flux d'événements en décisions, prévisions et modération." },
			security: { label: 'Sécurité et confiance', blurb: "Sessions respectueuses de la vie privée, détection de vulnérabilités et valeurs sûres par défaut." },
			devtools: { label: 'Outils pour développeurs', blurb: "Gestionnaires de paquets, pipelines de build et outils pour d'autres ingénieurs." },
			foundations: { label: "Fondamentaux de l'informatique", blurb: "Formation académique : la théorie et la discipline d'ingénierie sous tout le reste." },
			aerospace: { label: 'Aérospatial et systèmes critiques', blurb: "Des logiciels où l'échec n'est pas une option et où les enjeux sont orbitaux." },
			robotics: { label: 'Robotique et automatisation', blurb: "Automatisation industrielle, surtout automobile, là où le logiciel rencontre l'acier." },
			health: { label: 'Santé et essais cliniques', blurb: "Des applications qui aident à comprendre et à mener la recherche clinique." },
			"ai": {
				"label": "Produits assistés par IA",
				"blurb": "Des logiciels qui rédigent, suggèrent et accélèrent, avec toujours un humain dans la boucle."
			}
		},
		contexts: { product: 'Mes propres produits', industry: "Travail en entreprise", education: 'Formation' },
		sources: {
			serverbench: 'serverbench',
			grifpkg: 'grifpkg',
			'all of the above': 'tout ce qui précède',
			various: 'divers',
			UAB: 'UAB',
			'Aerospace, defense and security company': 'Entreprise aérospatiale, de défense et de sécurité',
			'Robotics company': 'Entreprise de robotique',
			'Salesians Sarrià': 'Salesians Sarrià',
			'Health technology': 'Technologie de santé',
			"Confidential client": "Client confidentiel",
			"Professional work": "Travail professionnel",
			"Graveyard \u00b7 Bachillerato TFG": "Cimetière · TFG de Bachillerato",
			"Graveyard \u00b7 personal experiment": "Cimetière · expérience personnelle",
			"Graveyard \u00b7 academic project": "Cimetière · projet académique"
		},
		entries: {
			'game-hosting': {
				title: 'Hébergement à forte intensité de calcul',
				summary: "Un service d'hébergement pour serveurs de jeux, parmi les charges les plus gourmandes et les plus difficiles à bien gérer.",
				detail:
					"Les serveurs de jeux ne pardonnent pas : ils dévorent CPU et mémoire, sont sensibles à la latence, et les joueurs remarquent le moindre accroc. Le service devait répartir ces charges équitablement, les isoler les unes des autres et se rétablir vite quand quelque chose déraillait. Il a été construit avec Go, JavaScript, TypeScript et PHP, avec les conteneurs comme unité d'isolation.",
				highlights: ['Isolation des charges par serveur', 'Ordonnancement selon les ressources', 'Plan de contrôle en Go, tableaux de bord en TypeScript']
			},
			permissions: {
				title: 'Permissions basées sur les rôles',
				summary: 'Des permissions très fines pour que les équipes séparent marketing, commerce, support et modération.',
				detail:
					"Les communautés sont des équipes, et les équipes ont des rôles. Le système de permissions laisse chaque communauté définir qui peut toucher à quoi, de sorte que l'équipe de modération n'a jamais besoin d'accéder à la boutique et que le marketing n'a jamais à voir les tickets de support. La vérification devait être rapide, car chaque requête pose la même question.",
				highlights: ['Rôles fins par communauté', 'Vérifié à chaque requête', "Conçu autour de vraies structures d'équipe"]
			},
			tracking: {
				title: 'Suivi des clients entre supports',
				summary: 'Suit un client à travers les jeux, les navigateurs et Discord pour construire un profil d’intérêts précis.',
				detail:
					"Une même personne apparaît comme compte de jeu, session de navigateur et membre Discord. Fusionner ces identités en un seul profil rend les recommandations pertinentes plutôt qu'agaçantes. Il alimente la boutique et le studio de créateurs pour que le bon contenu atteigne la bonne personne.",
				highlights: ['Fusion des identités sur trois supports', 'Alimente les recommandations boutique et créateurs', 'Construit avec les leçons de vie privée de serverbench']
			},
			'realtime-ingest': {
				title: 'Ingestion temps réel par sockets',
				summary: 'Un backend d’analytique à base de sockets qui garde des connexions longues et les transforme en sessions.',
				detail:
					"serverbench garde les connexions ouvertes et lit la session directement dans la connexion, plutôt que dans des cookies ou des identifiants d'appareil. Cela garde le modèle de données simple et honnête : si le socket est le même, la session est la même.",
				highlights: ['Connexions WebSocket de longue durée', 'Identité de session issue de la connexion', 'Faible surcharge par événement']
			},
			'docker-hosting': {
				title: "Système d'hébergement basé sur Docker",
				summary: "Mon propre système d'hébergement de conteneurs, construit de zéro parce que rien d'existant ne convenait.",
				detail:
					"La couche d'hébergement enveloppe Docker avec la logique produit dont un métier d'hébergeur a vraiment besoin : provisionnement, limites, cycle de vie, crochets de facturation et panneau client. C'est le socle de serverbench, et il m'a appris plus sur Linux, les cgroups et les réseaux que n'importe quel cours.",
				highlights: ['Provisionnement et gestion du cycle de vie', 'Limites par conteneur', 'Panneau client par-dessus']
			},
			byod: {
				title: 'Orchestrateur « apportez votre propre appareil »',
				summary: 'Permet aux clients de brancher leurs propres machines et de retrouver la même expérience gérée.',
				detail:
					"Tout le monde ne veut pas louer de la capacité. L'orchestrateur BYOD permet à un client de brancher son propre matériel et d'obtenir les mêmes déploiements, la même supervision et les mêmes contrôles, ce qui implique de traiter chaque machine comme non fiable, distante et parfois hors ligne.",
				highlights: ['Machines du client comme nœuds à part entière', "Les mêmes outils que l'hébergement géré", 'Conçu pour les liaisons instables']
			},
			'cdn-edge': {
				title: "Distribution en périphérie et mise en cache de fichiers",
				summary: 'Des téléchargements mis en cache et servis depuis la périphérie pour que les dépendances se résolvent vite où que soit le serveur.',
				detail:
					"Un gestionnaire de paquets vit ou meurt par sa vitesse de téléchargement. grifpkg met en cache les fichiers avec des métadonnées riches et les sert depuis la périphérie, ce qui garde les installations rapides et ménage les sites en amont.",
				highlights: ['Cache de fichiers avec métadonnées', 'Distribution en périphérie', 'Ménage les hôtes en amont']
			},
			'linux-ops': {
				title: 'Exploitation Linux',
				summary: "Des années à faire tourner de vrais serveurs pour de vraies communautés, où une panne a son propre canal Discord.",
				detail:
					"Faire tourner PureVanilla et serverbench signifiait garder des machines Linux en bonne santé pour des gens qui remarquent instantanément quand elles ne le sont pas. Supervision, sauvegardes et réponse aux incidents faisaient partie du quotidien, pas d'une équipe à part.",
				highlights: ['Supervision et sauvegardes', 'Réponse aux incidents devant public', 'Débogage en production avec soin']
			},
			'creator-studio': {
				title: 'Studio de créateurs',
				summary: 'Un tableau de bord marketing pour des créateurs qui font des vidéos et des publications sur les communautés qu’ils aiment.',
				detail:
					"Le studio connecte des comptes YouTube, TikTok et Twitch, permet de monétiser les publications et montre aux créateurs comment leur travail performe. Il devait ressembler à un outil de créateurs, pas à une console d'entreprise.",
				highlights: ['Authentification YouTube, TikTok et Twitch', 'Monétisation des publications', 'Analytique pour créateurs']
			},
			cms: {
				title: 'CMS et créateur de sites web',
				summary: "Un CRM et créateur de sites avec moteur de modèles et place de marché de modèles.",
				detail:
					"Les communautés construisent leurs propres sites sans toucher au code. Les pages se composent de modules réutilisables, les modèles peuvent être partagés ou vendus sur une place de marché, et le moteur rend le tout avec des performances prévisibles.",
				highlights: ['Sites multi-pages', 'Modules réutilisables', 'Place de marché de modèles intégrée']
			},
			storefronts: {
				title: 'Boutiques en ligne personnalisables',
				summary: "Chaque communauté a une boutique qu'elle peut faire sienne.",
				detail:
					"La boutique doit ressembler à la communauté qui la possède : la personnalisation va donc loin, tandis que le paiement reste cohérent et digne de confiance. C'est la moitié côté client de la plateforme de commerce.",
				highlights: ['Thèmes par communauté', 'Paiement cohérent et de confiance', 'Objets de collection, badges et boosters']
			},
			'modern-ui': {
				title: 'Interfaces modernes par composants',
				summary: 'Des interfaces à base de composants en Svelte et Vue, stylées avec Tailwind ou du CSS écrit à la main.',
				detail:
					"J'aime les interfaces petites et rapides. Svelte est mon choix par défaut, Vue quand l'équipe y vit déjà, et Tailwind ou du CSS écrit à la main selon le projet. Ce site en est un exemple.",
				highlights: ["Svelte d'abord, Vue quand ça convient", 'Tailwind ou CSS écrit à la main', 'Accessible par défaut']
			},
			'commerce-platform': {
				title: 'Plateforme e-commerce de biens numériques',
				summary: "Ma propre plateforme façon Shopify, faite pour les objets de collection, badges et boosters dans les jeux.",
				detail:
					"Les biens numériques obéissent à d'autres règles que les biens physiques : livraison instantanée, fraude, rétrofacturations et intégrations par jeu. La plateforme gère catalogues, paiement et livraison dans le jeu, et donne à chaque communauté sa propre boutique en ligne.",
				highlights: ['Livraison instantanée dans les jeux', 'Boutiques en ligne par communauté', 'Construite de zéro']
			},
			'paid-plugins': {
				title: 'Plugins payants et vérification des achats',
				summary: "Vendez des dépendances, ou authentifiez des achats faits ailleurs pour autoriser les téléchargements.",
				detail:
					"Les développeurs peuvent vendre leur travail via le gestionnaire de paquets, et les acheteurs qui possèdent déjà un plugin ailleurs peuvent le prouver et le télécharger. Autoriser les téléchargements sans casser le parcours d'installation était la partie difficile.",
				highlights: ['Vente de dépendances', "Vérification d'achat entre sites", 'Téléchargements autorisés dans la CLI']
			},
			ads: {
				title: 'Pages de téléchargement hébergées avec publicité',
				summary: "Les développeurs open source gagnent de l'argent grâce à des pages de téléchargement hébergées, avec des publicités issues de notre propre réserve.",
				detail:
					"L'open source devrait pouvoir se financer. Les développeurs activent des pages de téléchargement hébergées et gagnent grâce à la publicité servie depuis la réserve publicitaire de la plateforme, ce qui a gardé la qualité élevée et le suivi limité.",
				highlights: ['Revenus pour les développeurs open source', 'Réserve publicitaire en propre', 'Opt-in par projet']
			},
			promoted: {
				title: 'Logiciels mis en avant',
				summary: 'Les développeurs font la promotion de plugins payants sur le site et via des recommandations textuelles dans la CLI.',
				detail:
					"La découverte est la partie difficile quand on vend un logiciel. Les promotions apparaissent sur le site et sous forme de suggestions textuelles discrètes en ligne de commande, là où les développeurs cherchent déjà une solution.",
				highlights: ['Promotion sur le site', 'Recommandations textuelles dans la CLI', 'Placement respectueux et non intrusif']
			},
			'seo-studio': {
				title: 'Studio SEO et votes',
				summary: 'Un panneau SEO avec système de vote qui suggère les sites où chaque vote de membre rapporte le plus.',
				detail:
					"Les communautés listent leurs sites et les membres votent pour eux. Le studio suggère quels sites de vote tiers utiliser pour que chaque vote porte le plus loin, transformant une corvée éparse en boucle de croissance mesurée.",
				highlights: ['Système de vote intégré', 'Suggestions intelligentes de sites', "Maximise la portée par vote"]
			},
			'community-analytics': {
				title: 'Analytique de communautés',
				summary: "Tout ce qu'une communauté doit savoir sur sa croissance, plus une prévision des jours fériés.",
				detail:
					"Au-delà des compteurs et graphiques habituels, l'analytique prédit les effets des jours fériés et combine les signaux des systèmes SEO et créateurs, pour qu'une communauté voie d'où vient vraiment sa croissance.",
				highlights: ['Métriques de croissance standard', 'Prévision des jours fériés', 'Signaux des outils SEO et créateurs']
			},
			automod: {
				title: 'Automodération statistique',
				summary: "Modération à fort volume avec Perspective API, qui tient à l'écart de la conversation les membres toxiques récurrents.",
				detail:
					"Plutôt que de juger chaque message isolément, le système adopte une vue statistique de chaque membre dans le temps. Les récidivistes s'éloignent de la conversation, alors qu'une mauvaise journée isolée ne mène personne au bannissement.",
				highlights: ['Notation via Perspective API', 'Historique statistique par membre', "Conçu pour un fort débit d'ingestion"]
			},
			'interest-profiles': {
				title: "Profils d'intérêts et recommandations",
				summary: "Construit un profil d'intérêts par client pour recommander du contenu de la boutique ou des médias de créateurs.",
				detail:
					"Les signaux des jeux, des navigateurs et de Discord sont fusionnés en un profil qui décide quoi recommander. L'objectif était la pertinence : moins de suggestions, mais meilleures.",
				highlights: ['Profils issus de plusieurs sources', 'Recommandations boutique et créateurs', 'Réglé pour la pertinence plutôt que le volume']
			},
			'fingerprint-free': {
				title: "Liaison de sessions sans empreinte d'appareil",
				summary: "Liaison de sessions très sécurisée basée uniquement sur les données de connexion, sans empreinte d'appareil.",
				detail:
					"La méthode facile pour suivre les visiteurs est de prendre l'empreinte de leurs appareils. Je ne voulais pas de ça. La plateforme lie les sessions aux propriétés de la connexion elle-même, ce qui garde l'analytique utile et les visiteurs non identifiés.",
				highlights: ["Aucune empreinte d'appareil", 'Identité basée sur la connexion', 'Normes de sécurité élevées']
			},
			'vuln-detection': {
				title: 'Détection de vulnérabilités',
				summary: "Les dépendances sont identifiées par empreinte et peuvent être marquées comme vulnérables, prévenant les développeurs de l'usage de code non sûr.",
				detail:
					"Une fois les fichiers identifiés par empreinte, une version connue comme mauvaise peut être marquée, et quiconque en dépend reçoit un avertissement. Cela transforme un gestionnaire de paquets en système d'alerte précoce pour l'écosystème.",
				highlights: ["Empreinte des artefacts", 'Marquage des versions vulnérables', 'Notifications aux développeurs concernés']
			},
			'jar-pm': {
				title: 'Gestionnaire de paquets JAR',
				summary: 'Un gestionnaire de paquets qui importe, met à jour et gère les dépendances de logiciels Java.',
				detail:
					"Les écosystèmes de plugins Java reposent souvent sur des téléchargements manuels. grifpkg résout, met en cache et met à jour les dépendances automatiquement, avec son propre registre, sa CLI et sa couche de distribution. Utilisé surtout par la communauté SpigotMC.",
				highlights: ['Registre, CLI et couches de distribution', 'Mises à jour automatiques', 'Utilisé dans la communauté SpigotMC']
			},
			'auto-index': {
				title: 'Indexation automatique',
				summary: 'Bibliothèques et logiciels sont indexés automatiquement, avec des métadonnées riches et un cache de fichiers.',
				detail:
					"Un registre vaut ce que vaut sa couverture. L'indexation automatique trouve les nouvelles versions, extrait les métadonnées et met les fichiers en cache, pour que le catalogue reste à jour sans que les mainteneurs fassent la paperasse.",
				highlights: ['Exploration et indexation des nouvelles versions', 'Extraction de métadonnées riches', 'Cache de fichiers']
			},
			'dep-compile': {
				title: 'Compilation des dépendances',
				summary: "Certains projets ne fournissent aucun .jar. grifpkg se branche sur leurs dépôts git et les construit avec Maven ou Gradle.",
				detail:
					"Quand il n'existe pas d'artefact précompilé, la plateforme récupère le dépôt, le construit dans un bac à sable avec Maven ou Gradle, puis sert le résultat comme n'importe quel autre paquet.",
				highlights: ['Builds pilotés par git', 'Prise en charge de Maven et Gradle', 'Environnement de build isolé']
			},
			'local-import': {
				title: 'Import local automatique',
				summary: "Détecte les dépendances d'un projet existant et les associe automatiquement aux entrées du registre.",
				detail:
					"Adopter un gestionnaire de paquets ne devrait pas obliger à refaire son projet à la main. L'importeur analyse ce qui existe déjà, le fait correspondre aux identifiants du registre et met tout en place.",
				highlights: ['Analyse les projets existants', 'Fait correspondre les identifiants du registre', 'Une commande pour adopter']
			},
			'se-degree': {
				title: 'Diplôme de génie logiciel (Informatique)',
				summary: "Un diplôme de génie logiciel, avec l'informatique au cœur, à l'Universitat Autònoma de Barcelona.",
				detail:
					"Des années de code avant le diplôme l'ont fait atterrir autrement : il a mis des noms, de la théorie et de la discipline sur des choses que j'avais apprises en les cassant. Il côtoie mes études de robotique, si bien que j'ai une formation formelle côté logiciel comme côté matériel de l'automatisation.",
				highlights: ["Fondamentaux de l'informatique", 'Pratique du génie logiciel', "Pendant formel à des années de construction en autodidacte"]
			},
			space: {
				title: 'Projets spatiaux critiques',
				summary: "Des logiciels pour un travail qui repousse la prochaine frontière de l'exploration humaine.",
				detail:
					"Je travaille dans une entreprise de technologie et d'ingénierie spécialisée dans les systèmes aérospatiaux, de défense et de sécurité, avec une solide expertise en navigation par satellite et en logiciels critiques. Les détails ne m'appartiennent pas, mais le niveau d'exigence est clair : rigoureux, traçable et correct du premier coup.",
				highlights: ['Normes des systèmes critiques', 'Contexte de navigation par satellite', "Exactitude et traçabilité d'abord"]
			},
			'robotics-work': {
				title: 'Automatisation industrielle',
				summary: "Des logiciels pour une entreprise de robotique axée sur l'automatisation industrielle, surtout dans l'automobile.",
				detail:
					"Le logiciel d'atelier, c'est un autre sport : la sortie fait bouger de vraies machines, la disponibilité, c'est de l'argent et le temps de cycle est tout. C'est là que se rencontrent ma formation en robotique et mes habitudes de logiciel.",
				highlights: ["Industrie automobile", 'Des logiciels qui font bouger des machines', 'Temps de cycle et disponibilité comptent']
			},
			degree: {
				title: 'Robotique et automatisation industrielle (Grado Superior)',
				summary: "Une formation professionnelle supérieure (Grado Superior) en robotique et automatisation industrielle, terminée avec A+ dans la plupart des matières.",
				detail:
					"Étudiée à Salesians Sarrià, à Barcelone. Capteurs, actionneurs, régulation et systèmes d'automatisation m'ont donné une intuition physique pour le logiciel. C'est pourquoi je pense aux modes de défaillance et à la latence avant d'écrire du code, et pourquoi l'automatisation industrielle me fait me sentir chez moi.",
				highlights: ['A+ dans la plupart des matières', 'Régulation, capteurs et automatisation', 'Intuition matérielle pour le logiciel']
			},
			clinical: {
				title: 'Applications pour essais cliniques',
				summary: 'Des applications de santé qui améliorent la compréhension et la conduite des essais cliniques.',
				detail:
					"La recherche clinique dépend de données exactes issues de vraies personnes. Les applications facilitent la collecte, la compréhension et l'exploitation de ces données, là où vie privée et exactitude ne sont pas négociables.",
				highlights: ["De meilleures données d'essais", "Vie privée et exactitude d'abord", 'Des logiciels qui aident la médecine à avancer plus vite']
			},
			"obex-identity": {
				"title": "Identité et sessions (obex)",
				"summary": "Une identité pour chaque application : une seule session porte des permissions délimitées à travers toutes les applications nominal, plus l'accès tiers lié, comme les installations de GitHub App.",
				"detail": "obex est la couche d'identité de nominal.es. Une seule session porte des permissions délimitées à travers toutes les applications et lie des accès tiers, comme les installations de GitHub App. Les équipes peuvent inspecter et révoquer n'importe quelle session instantanément au lieu d'attendre l'expiration du jeton, auditer chaque permission accordée et chaque connexion, brancher le SSO SAML et OIDC sans configuration supplémentaire par application, et émettre des clés d'API limitées en débit et par ressource, liées au même système d'identité que les connexions des utilisateurs.",
				"highlights": [
					"Inspecteur de sessions avec révocation instantanée",
					"Journal d'audit exportable",
					"SSO d'organisation SAML et OIDC",
					"Clés d'API délimitées et limitées en débit"
				]
			},
			"eris-support": {
				"title": "Support assisté par IA (eris)",
				"summary": "Des réponses suggérées avant même qu'un ticket soit ouvert. L'IA le rédige, un humain l'envoie.",
				"detail": "eris lit chaque ticket, le compare à toutes les résolutions que l'équipe a appliquées, et rédige une solution. L'équipe relit, modifie si besoin et envoie, ce qui garde les réponses rapides sans perdre la touche personnelle. À la fermeture d'un ticket, la résolution et les données utilisées pour y arriver sont enregistrées, si bien que le prochain ticket similaire se résout plus vite et de façon cohérente. Il fonctionne comme widget dans votre produit, depuis le tableau de bord nominal, ou directement depuis Discord.",
				"highlights": [
					"Un humain dans la boucle, par conception",
					"Un savoir qui s'accumule à chaque ticket fermé",
					"Widget, tableau de bord ou Discord",
					"Chaque correctif lié à la demande qui l'a produit"
				]
			},
			"hermes-billing": {
				"title": "Facturation mondiale et conformité fiscale (hermes)",
				"summary": "Abonnements et paiements uniques, avec la taxe de chaque pays calculée et déclarée automatiquement, y compris Verifactu.",
				"detail": "hermes gère abonnements récurrents et paiements uniques avec la même configuration de facturation. Il accepte des paiements via des centaines de systèmes de paiement dans des centaines de pays, calcule la taxe pays par pays et la déclare automatiquement, avec un accent sur la conformité fiscale de l'UE et la prise en charge de Verifactu intégrée. Il passe du petit projet configuré en quelques minutes à la grande entreprise, avec des configurations de facturation extrêmement flexibles.",
				"highlights": [
					"Des centaines de pays et de systèmes de paiement",
					"Conformité fiscale UE avec Verifactu",
					"Abonnements et paiements uniques",
					"Du projet perso à l'entreprise"
				]
			},
			"kinesis-events": {
				"title": "Analytique d'événements à grande échelle (kinesis)",
				"summary": "Plus de 1 000 000 d'événements traités par heure, de l'événement du SDK au tableau de bord en millisecondes.",
				"detail": "kinesis reçoit des événements via un SDK d'une seule ligne depuis le web, le mobile ou le backend, les valide contre un schéma typé et extensible pour que les événements malformés ne polluent jamais les données, et met à jour des tableaux de bord en temps réel (portails) en quelques millisecondes. Il peut être auto-hébergé ou géré, et prend en charge la relecture d'événements sur de nouveaux schémas, des politiques de rétention des événements bruts et des alertes par seuil.",
				"highlights": [
					"Plus de 1 000 000 d'événements par heure",
					"Schémas typés et extensibles",
					"Auto-hébergé ou géré",
					"Tableaux de bord en temps réel, relecture et alertes"
				]
			},
			"archon-deploys": {
				"title": "Déploiements sur votre propre matériel (archon)",
				"summary": "Poussez vers un dépôt et livrez sur votre propre matériel, avec des sauvegardes planifiées par défaut.",
				"detail": "archon gère des machines distantes depuis un seul panneau, où qu'elles soient. Vous poussez vers GitHub ou GitLab, et archon construit et versionne le conteneur automatiquement puis le déploie sur votre machine, avec une sauvegarde planifiée par défaut. Les sauvegardes peuvent être créées et restaurées à la demande, et l'accès aux machines et aux conteneurs se partage avec l'équipe, limité à ce dont chaque personne a besoin.",
				"highlights": [
					"Gestion à distance des machines depuis un seul panneau",
					"Déploiements de conteneurs pilotés par git",
					"Sauvegardes à la demande et par défaut",
					"Accès d'équipe granulaire"
				]
			},
			"workhours-app": {
				"title": "Suivi du temps offline-first (workhours)",
				"summary": "Suivi du temps de travail fait en Espagne, conforme à la loi du travail espagnole, installable en PWA sur tout appareil et fonctionnel hors ligne.",
				"detail": "workhours est une PWA multiplateforme de suivi du temps de travail qui respecte la loi du travail espagnole. Elle fonctionne sur iOS, Android, Windows, macOS et Linux, s'installe depuis le navigateur, enregistre le temps même hors ligne et se synchronise automatiquement, sans conflit et en temps réel, au retour de la connexion. Elle ajoute une géolocalisation précise des pointages, un système de demandes d'ajustement avec un historique d'audit clair, la gestion des congés et des arrêts maladie, et la conformité RGPD avec des données dans l'UE et un chiffrement de bout en bout.",
				"highlights": [
					"PWA multiplateforme qui fonctionne hors ligne",
					"Synchronisation en temps réel et sans conflit",
					"Conformité légale et RGPD",
					"Congés, arrêts maladie et demandes d'ajustement"
				]
			},
			"verifactu": {
				"title": "Conformité de facturation Verifactu",
				"summary": "Conformité automatique à la réglementation espagnole Verifactu, dans hermes et workhours.",
				"detail": "Verifactu est le nouveau cadre espagnol de facturation et de conformité fiscale, créé par l'AEAT pour moderniser la facturation et lutter contre la fraude fiscale. hermes intègre la prise en charge de Verifactu en natif, et workhours est en cours de mise à jour pour que sa facturation respecte automatiquement les exigences de l'AEAT.",
				"highlights": [
					"Conformité automatique avec l'AEAT",
					"Prise en charge de Verifactu intégrée à hermes",
					"workhours bientôt"
				]
			},
			"opencti-threat-intel": {
				"title": "Analyse du renseignement sur les menaces (OpenCTI)",
				"summary": "Un logiciel d'analyse de cybersécurité qui repère les tendances et rédige des rapports automatiques sur les plus grandes menaces du monde. Le client ne peut pas être divulgué.",
				"detail": "J'ai construit un logiciel d'analyse de cybersécurité avec OpenCTI pour comprendre les tendances des menaces et rédiger des rapports automatiques sur les plus grandes menaces du monde. Il traite des millions d'événements chaque année et transforme ces données brutes en rapports que les gens peuvent vraiment lire et sur lesquels ils peuvent agir. Le client ne peut pas être divulgué.",
				"highlights": [
					"Construit avec OpenCTI",
					"Des millions d'événements traités chaque année",
					"Rapports automatiques sur les plus grandes menaces mondiales",
					"Client confidentiel"
				]
			},
			"hours-offers": {
				"title": "Suivi du temps et gestion des offres",
				"summary": "Un logiciel de pointage et un système de gestion des offres qui contrôle les heures de travail de bout en bout et suit chaque offre de la proposition à la conclusion.",
				"detail": "J'ai créé un système de pointage et un système de gestion des offres qui contrôlent les heures de travail de bout en bout et suivent chaque offre de la proposition à la conclusion. Il gère des projets qui facturent des millions d'euros, si bien que les heures, les offres et la facturation doivent concorder au centime près.",
				"highlights": [
					"Pointage pour les heures de travail",
					"Flux d'offres de la proposition à la conclusion",
					"Projets facturant des millions d'euros",
					"Heures et offres liées à la facturation du projet"
				]
			},
			"national-data": {
				"title": "Plateforme nationale de données",
				"summary": "Un projet national qui réunit les données de tous les endroits sur un seul site, pour que chacun comprenne le pays sous de nombreuses perspectives différentes.",
				"detail": "J'ai collaboré à la mise en œuvre et à la maintenance d'un projet national qui réunit les données de tous les endroits sur un seul site, conçu pour les geeks (et pour les geeks déguisés en scientifiques et en chercheurs) qui veulent comprendre le pays sous toutes sortes de perspectives.",
				"highlights": [
					"Mise en œuvre et maintenance continue",
					"Les données de tous les endroits sur un seul site",
					"Conçu pour les scientifiques, les chercheurs et les geeks curieux"
				]
			},
			"slate": {
	"title": "Slate : une plateforme de classe locale",
	"summary": "Un « Google Classroom » local pour le lycée : un tableau numérique qui se synchronise avec les cahiers des élèves, plus suivi des notes, rendus de devoirs et événements de l'établissement. Mon TFG de Bachillerato, noté 10/10.",
	"detail": "Slate était mon projet de fin d'études (TFG) du Bachillerato Tecnológico, et il a été noté 10/10. C'est une expérience façon Google Classroom locale pour un lycée. Le tableau numérique se synchronise automatiquement avec les cahiers des élèves, et la plateforme suit aussi les notes et les rendus et affiche les événements de l'établissement. Il y avait une appli Android native et une version web, toutes deux sur un backend en PHP. Aujourd'hui, il repose au cimetière.",
	"highlights": [
		"Noté 10/10",
		"Tableau numérique synchronisé automatiquement avec les cahiers des élèves",
		"Notes, rendus et événements de l'établissement",
		"Appli Android native et version web, backend en PHP"
	]
},
			"sodge": {
				"title": "Sodge : réseau social par centres d'intérêt",
				"summary": "Un réseau social qui vous montrait automatiquement des gens aux centres d'intérêt proches, par association de mots sur des réseaux de neurones, vers 2017.",
				"detail": "Sodge était une expérience personnelle d'environ 2017, des années avant que l'IA devienne courante : un réseau social qui utilisait une association de mots construite sur des réseaux de neurones pour vous montrer automatiquement des gens aux centres d'intérêt proches. Il tournait sur le web et sur Android avec un backend en PHP. Aujourd'hui, il repose au cimetière.",
				"highlights": [
					"Association par centres d'intérêt via des réseaux de neurones",
					"Construit vers 2017, avant l'essor de l'IA",
					"Web et Android",
					"Backend en PHP"
				]
			},
			"vidfeed": {
				"title": "thememepage : flux vidéo infini",
				"summary": "Une page façon TikTok pour faire défiler sans fin des vidéos drôles d'internet, construite vers 2014, bien avant que le contenu vertical existe.",
				"detail": "Vers 2014, j'ai construit une page très proche du TikTok d'aujourd'hui : un défilement infini de vidéos drôles d'internet, des années avant que le contenu vertical existe. « Infini » est un mot généreux : la liste était plutôt courte, et j'étais le seul utilisateur. Elle était écrite en JavaScript et repose aujourd'hui au cimetière.",
				"highlights": [
					"Flux vidéo à défilement infini",
					"Construit vers 2014, en avance sur la vidéo verticale",
					"JavaScript",
					"Un utilisateur très fidèle (moi)"
				]
			},
			"greenie": {
				"title": "Greenie : la santé d'une plante par la photo",
				"summary": "Une appli Android avec backend en Python qui vous dit si une plante est en bonne santé à partir d'une seule photo, grâce à un modèle entraîné en local avec PyTorch.",
				"detail": "Greenie était un projet académique : une appli uniquement Android où l'on prend en photo n'importe quelle plante pour voir sa santé. Le backend était écrit en Python, et le modèle a été entraîné en local avec PyTorch. Aujourd'hui, il repose au cimetière.",
				"highlights": [
					"La santé d'une plante à partir d'une seule photo",
					"Modèle entraîné en local avec PyTorch",
					"Appli Android, backend en Python",
					"Projet académique"
				]
			},
			"openagv": {
				"title": "OpenAGV : un robot à roues omnidirectionnelles",
				"summary": "Un véhicule à guidage automatique sur roues omnidirectionnelles qui navigue seul de A à B, avec radar, interface complète et télécommande Bluetooth avec évitement automatique des obstacles.",
				"detail": "OpenAGV était un projet académique de 2021 : un système AGV (véhicule à guidage automatique) qui naviguait automatiquement de A à B sur des roues omnidirectionnelles. Il était écrit en C et intégrait un radar avec une interface complète, ainsi que le Bluetooth pour la télécommande avec évitement automatique des obstacles. Aujourd'hui, il repose au cimetière.",
				"highlights": [
					"Navigation automatique de A à B sur roues omnidirectionnelles",
					"Radar avec une interface complète",
					"Télécommande Bluetooth avec évitement automatique des obstacles",
					"Écrit en C"
				]
			}
		},
		projects: {
			serverbench: {
	"kind": "E-commerce, analytique et hébergement",
	"blurb": "Une plateforme complète pour les communautés en ligne, en particulier les serveurs de jeux (anciennement purecore) : une plateforme e-commerce de biens numériques, un outil d'analytique respectueux de la vie privée et un orchestrateur d'hébergement « apportez votre propre appareil ». Plusieurs de ses fonctions vivent désormais dans les produits de nominal.es.",
	"points": [
		"Boutique : les communautés vendent objets de collection, badges et boosters, avec une boutique en ligne personnalisable pour chacune",
		"Hébergement : un orchestrateur basé sur Docker pour des serveurs de jeux très gourmands",
		"Analytique : à base de sockets, liaison des sessions uniquement à partir des données de connexion, sans empreinte d'appareil",
		"Studios : outils de créateurs, SEO et CMS qui partagent leurs données avec un seul cœur d'analytique"
	]
},
			grifpkg: {
				kind: 'Gestionnaire de paquets',
				blurb:
					"Un gestionnaire de paquets pour plugins Java, logiciels serveur et code généraliste, utilisé surtout par la communauté SpigotMC. Il importe, met à jour et gère les dépendances automatiquement.",
				points: [
					'Couches de cache et de distribution maison pour une livraison rapide en périphérie',
					"Indexe les bibliothèques automatiquement et compile depuis les sources quand aucun .jar n'existe",
					'Plugins payants, détection de vulnérabilités et monétisation pour développeurs intégrés'
				]
			},
			purevanilla: {
				kind: 'Serveur communautaire',
				blurb:
					"Un projet de serveur Minecraft vanilla centré sur une expérience propre et fidèle à l'original. Géré comme un produit, avec une vraie infrastructure derrière un jeu.",
				points: ["Philosophie vanilla d'abord : moins de mods, plus de soin", "Une communauté vivante qui a besoin de disponibilité", "Là où ont commencé bien des leçons d'hébergement"]
			},
			"workhours": {
				"kind": "Suivi du temps fait en Espagne",
				"blurb": "Un suivi du temps de travail sans effort qui respecte la loi du travail espagnole. Une PWA multiplateforme pour des travailleurs qui méritent le meilleur.",
				"points": [
					"Fonctionne sur tout appareil et hors ligne, avec synchronisation automatique au retour de la connexion",
					"Pointages géolocalisés, demandes d'ajustement avec historique d'audit, gestion des congés et des arrêts maladie",
					"Conforme RGPD : données dans l'UE, chiffrement de bout en bout. Prise en charge de Verifactu bientôt"
				]
			}
		},
			"notes": {
				"docker-hosting": "Il est né dans serverbench et vit aujourd'hui sous le nom d'archon, chez nominal.es.",
				"byod": "Aujourd'hui, il vit sous le nom d'archon, chez nominal.es : poussez vers un dépôt, livrez sur votre propre matériel.",
				"permissions": "La même idée a grandi pour devenir obex, chez nominal.es : une identité, des permissions délimitées dans chaque application.",
				"realtime-ingest": "Ce cœur d'analytique vit aujourd'hui sous le nom de kinesis, chez nominal.es.",
				"community-analytics": "Son volet analytique vit aujourd'hui sous le nom de kinesis, chez nominal.es.",
				"commerce-platform": "Son volet facturation et taxes vit aujourd'hui sous le nom d'hermes, chez nominal.es."
			},
			"nominal": {
	"obex": {
		"tagline": "Une identité pour chaque application que vous construisez.",
		"summary": "Une seule session obex porte des permissions délimitées à travers toutes les applications nominal, plus l'accès tiers lié, comme les installations de GitHub App.",
		"stat": {
			"value": "",
			"label": ""
		},
		"points": [
			"Inspecteur de sessions",
			"Journal d'audit complet",
			"SSO d'organisation",
			"Clés d'API délimitées"
		]
	},
	"eris": {
		"tagline": "Gardez vos utilisateurs satisfaits, automatiquement.",
		"summary": "Ajoutez un extrait de code à votre produit. Les utilisateurs reçoivent des réponses suggérées avant même qu'un ticket soit ouvert. L'IA le rédige, un humain l'envoie.",
		"stat": {
			"value": "",
			"label": ""
		},
		"points": [
			"Suggestions intelligentes, humain dans la boucle",
			"Un savoir qui s'accumule",
			"Widget, plateforme ou Discord",
			"Résolutions cohérentes"
		]
	},
	"hermes": {
		"tagline": "Soyez payé de n'importe où, en toute conformité.",
		"summary": "La même configuration de facturation gère abonnements récurrents ou paiements uniques, calcule la taxe de chaque pays et la déclare, y compris Verifactu, automatiquement.",
		"stat": {
			"value": "",
			"label": ""
		},
		"points": [
			"Des centaines de pays",
			"Conformité fiscale UE",
			"Du projet perso à l'entreprise",
			"Facturation flexible"
		]
	},
	"kinesis": {
		"tagline": "Comprenez votre produit à toute échelle.",
		"summary": "Des événements du web, du mobile ou du backend, validés contre des schémas typés et affichés sur des tableaux de bord en temps réel.",
		"stat": {
			"value": "1 000 000+",
			"label": "événements traités par heure"
		},
		"points": [
			"Une mise en œuvre extrêmement simple",
			"Auto-hébergé ou géré",
			"Schémas typés et extensibles",
			"Des portails beaux et fiables"
		]
	},
	"archon": {
		"tagline": "Apportez votre propre matériel. Nous gérons le reste.",
		"summary": "Gérez vos propres machines à distance et déployez des conteneurs directement depuis GitHub ou GitLab, sauvegardes incluses.",
		"stat": {
			"value": "",
			"label": ""
		},
		"points": [
			"Gestion des machines à distance",
			"Conteneurs pilotés par git",
			"Sauvegardes à la demande",
			"Accès d'équipe granulaire"
		]
	}
},
			"graveyard": {
				"slate": {
	"name": "slate",
	"tag": "TFG de Bachillerato",
	"year": "2019",
	"epitaph": "Il a noté les devoirs de tout le monde. Le jury lui a mis 10/10.",
	"cause": "Le diplôme (avec 10/10).",
	"summary": "Un « Google Classroom » local pour le lycée : le tableau numérique se synchronisait automatiquement avec les cahiers des élèves, avec suivi des notes, rendus de devoirs et même événements de l'établissement. Une appli Android native et une version web, backend en PHP. Note : 10/10."
},
				"sodge": {
					"name": "sodge",
					"tag": "Expérience personnelle",
					"year": "vers 2017",
					"epitaph": "Il associait les gens par centres d'intérêt grâce aux réseaux de neurones avant que ce soit à la mode. Il ne s'est jamais associé à un seul utilisateur.",
					"cause": "Causes naturelles (aucun utilisateur).",
					"summary": "Un réseau social qui vous montrait automatiquement des gens aux centres d'intérêt proches, par association de mots sur des réseaux de neurones, bien avant que l'IA devienne courante. Web et Android, backend en PHP."
				},
				"feed": {
					"name": "thememepage",
					"tag": "Expérience personnelle",
					"year": "vers 2014",
					"epitaph": "Défilement infini. Infini est un mot généreux : la liste comptait une douzaine de vidéos et exactement un utilisateur.",
					"cause": "Plus de vidéos.",
					"summary": "Une page façon TikTok pour faire défiler sans fin des vidéos drôles d'internet, des années avant que le contenu vertical existe. La liste était courte et j'étais le seul utilisateur. JavaScript."
				},
				"greenie": {
					"name": "greenie",
					"tag": "Projet académique",
					"year": "2023",
					"epitaph": "Il pouvait vous dire que votre plante mourait. Il ne pouvait pas l'en empêcher.",
					"cause": "Diplômé. Pas les plantes.",
					"summary": "Une appli uniquement Android avec backend en Python : prenez en photo n'importe quelle plante et voyez sa santé, grâce à un modèle entraîné en local avec PyTorch."
				},
			"openagv": {
				"name": "openagv",
				"tag": "Projet académique",
				"year": "2021",
				"epitaph": "Il évitait tous les obstacles de la pièce. L'échéance n'apparaissait pas sur le radar.",
				"cause": "Échéance (non détectée par le radar).",
				"summary": "Un AGV qui naviguait automatiquement de A à B sur des roues omnidirectionnelles. Écrit en C, avec un radar doté d'une interface complète et une télécommande Bluetooth avec évitement automatique des obstacles."
			}
			},
			"clickMore": [
				"Encore ? J'adore.",
				"Toujours là ? Respect.",
				"Ma queue va tomber.",
				"C'est un jeu ? J'aime ce jeu.",
				"Encore des boops. Encore des boops.",
				"Dix clics de plus pour une autre friandise. Je compte."
			],
			"photos": {
				"cruise": {
					"caption": "Heure dorée, en croisière",
					"alt": "Quique debout sur le pont d'un bateau de croisière au coucher du soleil"
				},
				"sister": {
					"caption": "Avec ma sœur, surpris dans un miroir",
					"alt": "Quique et sa sœur reflétés dans un miroir rond dans une cour ensoleillée"
				},
				"gf": {
					"caption": "Une balade avec ma copine, à la poursuite du coucher de soleil",
					"alt": "Quique et sa copine souriants lors d’une balade sur une colline au coucher du soleil"
				},
				"bee": {
					"caption": "Pas moi : une abeille sur ma lavande",
					"alt": "Un bourdon sur des fleurs de lavande dans le jardin"
				}
			},
			"loves": {
				"sackboy": {
					"name": "LittleBigPlanet",
					"tag": "Jouer. Créer. Partager.",
					"text": "Sackboy a prouvé qu'un jeu peut être une boîte à outils. Construire des niveaux et les partager, c'était la moitié du plaisir, et c'est sans doute là que mon réflexe « je vais le construire moi-même » est né."
				},
				"tomb": {
					"name": "Tomb Raider",
					"tag": "Lara, en glorieux low-poly",
					"text": "Des ruines, des énigmes et une patience étonnante. La Lara originale ressemble toujours à une poignée de triangles et ressemble toujours à une aventure."
				},
				"mindstorms": {
					"name": "LEGO Mindstorms",
					"tag": "Là où les robots ont commencé",
					"text": "Une brique qui roulait et un capteur qui voyait. Bien avant le diplôme de robotique, et avant un AGV avec son propre radar, il y avait un robot LEGO par terre chez moi."
				},
				"crash": {
					"name": "Crash Bandicoot",
					"tag": "Tourner, sauter, recommencer",
					"text": "De la joie et de la rage des années 90, à parts égales. Toujours le meilleur argument pour dire qu'une attaque tournoyante règle la plupart des problèmes."
				}
			},
			"places": {
				"barcelona": {
					"name": "Barcelone",
					"note": "La base. Là où chaque voyage commence et finit."
				},
			"stockholm": {
				"name": "Stockholm",
				"note": ""
			},
			"lisbon": {
				"name": "Lisbonne",
				"note": ""
			},
			"vigo": {
				"name": "Vigo",
				"note": ""
			},
			"valencia": {
				"name": "Valence",
				"note": ""
			},
			"harwich": {
				"name": "Harwich",
				"note": ""
			},
			"copenhagen": {
				"name": "Copenhague",
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
				"name": "Hambourg",
				"note": ""
			},
			"ancona": {
				"name": "Ancône",
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
				"name": "Venise",
				"note": ""
			},
			"piraeus": {
				"name": "Le Pirée (Athènes)",
				"note": ""
			},
			"ephesus": {
				"name": "Éphèse",
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
				"name": "Rome",
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
				"name": "Naples",
				"note": ""
			},
			"livorno": {
				"name": "Livourne (Florence)",
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
				"name": "Corfou",
				"note": ""
			},
			"palermo": {
				"name": "Palerme",
				"note": ""
			},
			"marseille": {
				"name": "Marseille",
				"note": ""
			},
			"genoa": {
				"name": "Gênes",
				"note": ""
			},
			"messina": {
				"name": "Messine",
				"note": ""
			},
			"valletta": {
				"name": "La Valette",
				"note": ""
			},
			"granada": {
				"name": "Grenade",
				"note": ""
			},
			"cadiz": {
				"name": "Cadix",
				"note": ""
			},
			"fuengirola": {
				"name": "Fuengirola",
				"note": ""
			},
			"cartagena": {
				"name": "Carthagène",
				"note": ""
			},
			"funchal": {
				"name": "Funchal (Madère)",
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
			}
			}
	}
};
