import type { Messages } from './en.ts';

export const es: Messages = {
	ui: {
		meta: {
			title: 'Quique Osuna | Ingeniero de software, disponible para contratar',
			description:
				'Quique (Happy) construye software que tiene que funcionar: aeroespacial, robótica, salud, hosting, comercio y herramientas para desarrolladores. Programa desde los 9 años, vive cerca de Barcelona y está abierto a nuevo trabajo.',
			og: 'Software para el espacio, los robots y los rincones más raros de internet. Abierto a nuevo trabajo: quique@osuna.dev'
		},
		nav: {
			top: 'Hola',
			about: 'Sobre mí',
			experience: 'Experiencia',
			projects: 'Proyectos',
			hire: 'Contrátame',
			sections: 'Secciones',
			home: 'quique, volver arriba',
			palette: 'Abrir la paleta de comandos',
			dark: 'Cambiar a modo oscuro',
			darkTitle: 'Oscuro / claro',
			y2kTitle: 'Viaja al año 2000',
			language: 'Idioma',
		},
		hero: {
			eyebrow: 'Hola, soy Quique',
			h1a: 'Construyo software',
			h1b: 'que tiene que ',
			h1em: 'funcionar',
			h1c: '.',
			retro: '¡¡Bienvenido a la página de Quique!!',
			ledeA:
				'Empecé a programar a los nueve años y nunca he parado del todo. Hoy construyo software para el espacio, los robots y la salud, además de algunos productos propios, raros y maravillosos. Vivo cerca de Barcelona, en internet me llaman ',
			ledeBold: 'Happy',
			ledeB: ' y estoy abierto a nuevo trabajo.',
			rightNow: 'ahora mismo soy',
			cta: 'Contrátame',
			copied: 'Copiado',
			copyAria: 'Copiar la dirección de correo',
			toastCopied: 'Correo copiado. Ahora ve a escribir algo bonito.',
			years: (n: number) => `${n}+ años programando`,
			pressA: 'pulsa',
			pressB: 'para explorar',
			speaks: 'hablo',
			profileAria: 'Perfil rápido',
			open: 'Abierto',
			onBranch: 'en la rama',
			availableNow: 'disponible ahora',
			codeAria: 'Perfil en forma de código',
			recommended: 'Recomendado',
			alertTitle: 'Posible gran colaboración',
			alertText: 'Revisión sugerida: saluda antes de que lo haga otro.',
			hireQL: 'Hire QL',
			workingOn: 'Trabajando en',
			sideQuests: 'Misiones secundarias',
			currentBranch: 'Rama actual',
			b1: 'misión crítica, navegación por satélite',
			b2: 'automatización industrial, automoción',
			b3: "nominal.es, serverbench, grifpkg",
			construction: 'EN CONSTRUCCIÓN',
			mosaic: 'pasa el cursor para pintar. haz clic para fijar un bloque.'
		},
		about: {
			eyebrow: 'Sobre mí',
			h2a: 'Solucionador de problemas,',
			h2b: 'por costumbre.',
			p1a: 'Soy Quique, ',
			p1bold: 'Happy',
			p1b: ' en internet. Programo desde que recuerdo tocar un ordenador y vivo cerca de Barcelona. Tengo un montón de proyectos personales que nunca llegaron a ninguna biografía, pero en el fondo intento arreglar cosas que hagan la vida un poco mejor, para los demás y para mí.',
			p2: "De día trabajo en una empresa que construye sistemas aeroespaciales, de defensa y seguridad, con profundas raíces en navegación por satélite y software de misión crítica, y en una empresa de robótica que hace automatización industrial, sobre todo en automoción. De noche construyo nominal.es, una familia de productos para equipos (identidad, soporte, facturación, analítica y hosting), además de herramientas para comunidades como una tienda, un hosting y un gestor de paquetes.",
			p3: 'Tengo dos titulaciones: Ingeniería del Software (Informática) en la UAB, y un Grado Superior en Robótica y Automatización Industrial en Salesians Sarrià. Se nota. Pienso en modos de fallo, latencia y el mundo físico antes de pensar en frameworks.',
			facts: 'Datos rápidos',
			alias: 'alias',
			base: 'base',
			baseV: 'cerca de Barcelona',
			since: 'programando desde',
			sinceV: 'los 9 años (abril de 2010)',
			degrees: 'titulaciones',
			deg1: 'Ing. del Software (UAB)',
			deg2: 'Robótica y Automatización (Salesians Sarrià)',
			speaks: 'hablo',
			status: 'estado',
			statusV: 'abierto a ofertas de trabajo',
			fuel: 'combustible',
			fuelV: 'café',
			carouselAria: 'Cosas en las que creo',
			prev: 'Anterior',
			next: 'Siguiente',
			goTo: (n: number) => `Ir a la cita ${n}`,
			statYears: (bc: number) => `años programando, ${bc} de ellos a. C. (antes de ChatGPT)`,
			statAge: 'años tenía cuando empecé a escribir código',
			achEyebrow: 'Logros',
			achH2: 'Desbloqueados hasta ahora.',
			xp: 'XP',
			clickToClaim: 'haz clic para reclamar',
			claimed: 'RECLAMADO +10 XP',
			unlocked: 'LOGRO DESBLOQUEADO',
			toastXp: (title: string) => `+10 XP: ${title}`,
			toastAll: '100 % completado. El único logro que queda es contratarme.',
			sayHalf: 'Vamos por la mitad. Venga, consíguelos todos.'
		},
		marquee: { aria: 'Con qué trabajo', play: 'Reanudar el desplazamiento', pause: 'Pausar el desplazamiento' },
		exp: {
			eyebrow: 'Experiencia',
			h2a: 'Lo que de verdad',
			h2b: 'he construido y operado.',
			lede: (areas: number, entries: number) =>
				`${areas} áreas de habilidad, ${entries} entradas, cero relleno de palabras de moda. Filtra por habilidad, tecnología o contexto. Cada tarjeta se abre y cada etiqueta de tecnología es un filtro.`,
			filters: 'Filtros',
			searchPh: 'Buscar: docker, comercio, go...',
			searchLabel: 'Buscar en la experiencia',
			skillArea: 'Área de habilidad',
			everything: 'Todo',
			context: 'Contexto',
			tech: 'Tecnología',
			matchMode: 'Modo de coincidencia',
			any: 'alguna',
			all: 'todas',
			gLang: 'Lenguajes',
			gFrame: 'Frameworks',
			gTools: 'Herramientas y plataformas',
			reset: 'Restablecer filtros',
			showing: (n: number, total: number) => `Mostrando ${n} de ${total}`,
			filtered: 'filtrado',
			expandAll: 'Expandir todo',
			collapseAll: 'Contraer todo',
			details: 'Detalles',
			less: 'Menos',
			filterBy: (t: string) => `Filtrar por ${t}`,
			emptyTitle: 'Nada coincide con eso.',
			emptyText: 'Ni siquiera Gandalf pudo olfatearlo. Prueba con menos filtros o pregúntame directamente.',
			emptySay: "Nada coincide. He olfateado por todas partes."
		},
		projects: {
			eyebrow: 'Proyectos',
			h2a: 'Cosas que hice',
			h2b: 'porque no había otra.',
			lede: "Nada de lo que había encajaba, así que construí mis propios productos: identidad, soporte, facturación, analítica, hosting, control horario y un gestor de paquetes.",
			visit: (d: string) => `Visitar ${d}`,
			none: 'Sin sitio público'
		},
		hire: {
			eyebrow: 'Disponible para contratar',
			h2: '¿Tienes algo difícil de construir? Hablemos.',
			small:
				'Estoy abierto a nuevas ofertas de trabajo. Me gustan los problemas con aristas: sistemas distribuidos, hosting, herramientas para desarrolladores y software que tiene que salir bien a la primera.',
			ledeA: 'Cuéntame qué estás construyendo y qué se interpone. Con unas pocas líneas basta. Lo leo todo y te responderé desde ',
			ledeB: '.',
			langs: 'Puedes escribirme en español, catalán, inglés, alemán o francés.',
			emailLabel: 'Tu correo',
			emailPh: 'tu@correo.com',
			buildLabel: '¿Qué estamos construyendo?',
			buildPh: '¿Qué estamos construyendo?',
			send: 'Escribir a Quique',
			sending: 'Abriendo el correo...',
			copy: (e: string) => `Copiar ${e}`,
			copied: 'Copiado',
			mosaic: 'cada bloque es una idea de proyecto. fija la tuya.',
			subject: 'Trabajemos juntos',
			defaultBody: 'Hola Quique, me gustaría hablar de un proyecto.',
			replyTo: 'Responder a: ',
			toastSent: 'Tu aplicación de correo debería abrirse. Si no, copia la dirección de abajo.',
			say: '¡Lo has hecho! Le va a encantar.',
			toastCopied: '¡Copiado! Pégalo donde quieras.'
		},
		retro: {
			company: 'Una empresa Happy',
			shortcuts: 'Accesos del sitio',
			home: 'Inicio',
			skills: 'Habilidades',
			hireLink: 'Contratar',
			go2000: 'Ir al 2000 del todo',
			back2026: 'Volver a 2026',
			quickLinks: 'Enlaces rápidos',
			myGithub: 'Mi GitHub',
			service: 'Atención al cliente',
			contact247: 'Contacta con Quique 24/7',
			notReally: '(no literalmente 24/7, duerme)',
			guarantee: 'Garantía de seguridad',
			memberOf: 'Miembro de',
			b1: 'Hecho con Svelte 5',
			b2: 'Mejor visto a 800x600',
			b3: 'Con tecnología Docker',
			b4: 'HTML 4.01 válido (jaja)',
			finder: 'Buscador Rápido de Ingeniero',
			showMe: 'Muéstrame al mejor ingeniero para:',
			anyEng: 'cualquier ingeniero',
			onlyMe: 'específicamente Quique',
			iNeed: 'Necesito:',
			needs: ['Una plataforma web', 'Un backend de hosting', 'Un gestor de paquetes', 'Software de misión crítica', 'Automatización / robótica', 'Algo raro'],
			starting: 'Empezando:',
			whens: ['Cuanto antes', 'El mes que viene', 'El próximo trimestre', 'Cuando llegue el Y3K'],
			size: 'Tamaño:',
			sizes: ['Pequeño', 'Mediano', 'Grande', 'Del tamaño de la Luna'],
			go: '¡Ir!',
			news: 'Ofertas y noticias',
			newsItems: [
				'Ahorra un 40 % en reescrituras. ¡Contrata a Quique antes de que el código heredado te encuentre!',
				'Novedad: despliegues sin caídas ya disponibles en terminales participantes',
				'Recibe 50 o 100 € de reembolso por tu primer bug corregido (no es una oferta real)',
				'Contenedores Docker: ahora con un 30 % más de ballena',
				'Vive una gran aventura en tu propio backlog'
			],
			corner: 'El rincón del webmaster',
			visitor: 'Eres el visitante número',
			visitorNote: '(contado solo en tu propio navegador, como un libro de visitas muy pequeño y honrado)',
			fineA: 'Todos los derechos reservados. Ningún GIF animado resultó herido en la creación de esta sección.',
			guestbook: '¡Firma mi libro de visitas!',
			mailSubject: 'Solicitud del Buscador Rápido de Ingeniero',
			mailBody: (project: string, start: string, size: string, mode: string) =>
				`Hola Quique,\n\nHe usado tu Buscador Rápido de Ingeniero.\n\nTipo de proyecto: ${project}\nInicio: ${start}\nTamaño: ${size}\nModo de búsqueda: ${mode}\n\n`,
			modeAny: 'cualquier ingeniero',
			modeMe: 'específicamente tú',
			toastDial: 'Marcando... *screeeeeeee-kshhhhh*'
		},
		footer: {
			made: 'Hecho cerca de Barcelona con una cantidad irrazonable de café y un pastor australiano blue merle llamado Gandalf.',
			elsewhere: 'En otros sitios',
			coffee: 'Invítame a un café'
		},
		palette: {
			aria: 'Paleta de comandos',
			placeholder: 'Escribe un comando o busca...',
			label: 'Comando',
			none: 'No se encontró ningún comando. Prueba con «contratar».',
			navigate: 'navegar',
			run: 'ejecutar',
			go: 'Ir a',
			actions: 'Acciones',
			fun: 'Diversión',
			retro: 'El rincón de los 2000',
			email: 'Escribir a Quique',
			copy: 'Copiar la dirección de correo',
			github: 'Abrir GitHub',
			dark: 'Cambiar a modo oscuro',
			y2kOn: 'Viajar al año 2000',
			y2kOff: 'Salir del año 2000',
			summon: 'Invocar a Gandalf',
			summonSay: '¡Guau! ¿Me llamabas?',
			trick: 'Hacer que Gandalf haga un truco',
			confetti: 'Confeti',
			sudoHint: 'permiso concedido',
			toastCopied: 'Correo copiado. Venga, escribe algo.',
			sudo1: '[sudo] contraseña para el reclutador: ********',
			sudo2: 'Acceso concedido. Abriendo la sección de contratar...',
			language: 'Cambiar idioma',
			"graveyard": "El cementerio",
			"goPersonal": "Ir al lado personal",
			"goPro": "Ir al lado profesional",
			"goHome": "Volver al inicio"
		},
		mosaic: {
			t12: '12 bloques fijados. ¿Esto es un gráfico de contribuciones o un Picasso?',
			say12: 'Ooh, ¿estamos pintando? Me encanta pintar.',
			t36: '36 bloques. Esto ya es oficialmente una galería.'
		},
		mascot: {
			aria: 'Gandalf, un pastor australiano blue merle. Haz clic para una sorpresa.',
			away: '(._.) Gandalf te echa de menos. Vuelve',
			startle: [
	"¡Guau!",
	"¡Yip!",
	"¡¿Eso es una ardilla?!",
	"¡Zoomies! Adiós."
],
			confettiSay: '¡Vale, vale! ¿Quién es un buen chico? Yo. ¡Toma el confeti!',
			clickToast: (n: number) => `Has hecho clic en Gandalf ${n} veces. Eso es dedicación. Contrata a Quique con ella.`
		},
		eggs: {
			sudo1: 'quique no está en el archivo sudoers. Este incidente será reportado.',
			sudo2: 'Reportado a: nadie. No tenemos a quién reportar.',
			hire: 'Buena decisión. Muy buena decisión.',
			gandalf: '¡Has dicho mi nombre! ¡Guau!',
			woof: '¡GUAU! ¿Alguien ha dicho paseo?',
			happy: 'Ese es mi nombre, no lo gastes.',
			matrix: 'No hay cuchara. Solo hay TypeScript.',
			rm: 'rm: no se puede eliminar el futuro: permiso denegado',
			konami: 'CÓDIGO KONAMI ACEPTADO. +30 vidas. Quique aprueba tu infancia.'
		},
		y2k: {
			on: 'Bienvenido al año 2000. Tu módem está marcando...',
			off: 'De vuelta al futuro. Bienvenido a casa.',
			sayOn: 'Vaya. Todo es beige ahora.',
			sayOff: '¡Uf! ¡Antialiasing!'
		},
			"graveyard": {
				"eyebrow": "El cementerio",
				"h2a": "Donde los buenos proyectos",
				"h2b": "van a descansar.",
				"lede": "Todo buen desarrollador tiene proyectos abandonados. Los míos tienen unas cuantas telarañas y un buen chico que los vigila. Enciende una vela, o simplemente pulsa F.",
				"rip": "D.E.P.",
				"cause": "Causa de la muerte",
				"dig": "Desenterrar los detalles",
				"rebury": "Volver a enterrar",
				"respects": "Respetos rendidos",
				"pay": "Rendir respetos",
				"pressF": "pulsa F para rendir respetos",
				"toastF": "F. Respetos rendidos.",
				"toast10": "10 respetos. Lo han notado.",
				"toast25": "25 respetos. Gandalf está llorando. En silencio.",
				"noYear": "año perdido en la historia",
				"hint": "Haz clic en una lápida para desenterrar los detalles.",
				"aria": "Proyectos abandonados"
			},
			"modes": {
				"personal": "Personal",
				"pro": "Pro",
				"home": "Inicio",
				"switch": "Cambiar de versión"
			},
			"launcher": {
				"meta": {
					"title": "Quique Osuna",
					"description": "Elige una puerta: el lado personal (juegos, viajes, un perro muy bueno) o el lado profesional (experiencia, proyectos, contratación).",
					"og": "Dos versiones de una misma web: el lado personal y el profesional."
				},
				"eyebrow": "Bienvenido",
				"h1a": "Hola, soy Quique.",
				"h1b": "Elige una puerta.",
				"lede": "Esta web tiene dos versiones, según para qué hayas venido.",
				"personalTitle": "Personal",
				"personalText": "Juegos, viajes, un perro muy bueno y alguna abeja. La persona detrás del código.",
				"personalCta": "Ven a pasar el rato",
				"proTitle": "Pro",
				"proText": "Experiencia, proyectos y un botón de contratar. El ingeniero y lo que puedo construir para ti.",
				"proCta": "Hablemos de trabajo",
				"last": "la última vez",
				"hint": "pulsa 1 o 2, o usa las flechas",
				"switchHint": "Puedes cambiar cuando quieras."
			},
			"pnav": {
				"top": "Hola",
				"me": "Yo",
				"loves": "Me gusta",
				"skin": "Skin",
				"map": "Mapa",
			"space": "Espacio"
			},
			"personal": {
				"meta": {
					"title": "Quique Osuna | El lado personal",
					"description": "Juegos, viajes, cruceros, ladrillos y un pastor australiano blue merle. La persona detrás del código, cerca de Barcelona.",
					"og": "El lado personal de Quique: juegos, viajes y un perro muy bueno."
				},
				"eyebrow": "Personal",
				"h1a": "Hola, soy Quique.",
				"h1b": "La persona detrás del código.",
				"lede": "Fuera del trabajo soy Happy: juego a demasiados videojuegos, colecciono cruceros y países, construyo cosas con ladrillos y comparto el sofá con un pastor australiano blue merle llamado Gandalf. Vivo cerca de Barcelona, empecé a programar a los nueve años y nunca he parado del todo.",
				"facts": [
					"Cerca de Barcelona",
					"Jugador",
					"Fan de los cruceros",
					"Constructor de ladrillos",
					"Amante de los perros"
				],
				"ctaPics": "Ver las fotos",
				"ctaMap": "Ir al mapa",
				"proLinkA": "¿Buscas el lado profesional?",
				"proLink": "Visita la página pro",
				"heroAlt": "Quique en un crucero al atardecer"
			},
			"me": {
				"eyebrow": "Fotos mías",
				"h2a": "La persona",
				"h2b": "detrás del teclado.",
				"lede": "Unas cuantas fotos, casi todas de vacaciones, porque es cuando suelto el teclado.",
				"open": "Abrir foto",
				"close": "Cerrar"
			},
			"loves": {
				"eyebrow": "Cosas que me encantan",
				"h2a": "Juegos y cacharros",
				"h2b": "que me marcaron.",
				"lede": "Lo que me llevaría a una isla desierta, si la isla tuviera enchufe."
			},
			"skin": {
				"eyebrow": "Minecraft",
				"h2a": "Esta es mi skin.",
				"h2b": "Venga, tócala.",
				"lede": "He pasado más horas en Minecraft de las que me gustaría admitir, e incluso llevé un servidor vanilla para una comunidad. Aquí está mi skin en 3D: arrastra para girarla, o haz que ande.",
				"anims": {
					"idle": "Quieto",
					"walk": "Andar",
					"run": "Correr",
					"fly": "Volar",
					"wave": "Saludar",
					"crouch": "Agacharse",
					"hit": "Golpear",
					"swim": "Nadar"
				},
				"animLabel": "Animación",
				"speed": "Velocidad",
				"rotate": "Giro automático",
				"pause": "Pausa",
				"play": "Reanudar",
				"reset": "Restablecer vista",
				"download": "Róbame la skin",
				"hint": "arrastra para girar",
				"loading": "Cargando el visor 3D...",
				"fail": "El visor 3D no pudo arrancar en este dispositivo.",
				"aria": "Visor 3D de mi skin de Minecraft"
			},
			"map": {
				"eyebrow": "Viajes",
				"h2a": "Lugares donde he estado",
				"h2b": "y adonde voy.",
				"lede": "Cruceros, viajes y todo lo de en medio. Este mapa se llena a medida que me lleno yo.",
				"legend": {
					"home": "Casa",
					"cruise": "Crucero",
					"trip": "Viaje"
				},
				"places": "lugares",
				"cruises": "cruceros",
				"trips": "viajes",
				"empty": "Por ahora, solo la base. El resto de chinchetas están en camino.",
				"pick": "Selecciona una chincheta para leer la historia.",
				"aria": "Mapa del mundo con los lugares que he visitado",
				"list": "Lugares",
			"visits": "Visitado en",
			"soon": "Próximamente",
			"view": "Vista del mapa",
			"viewWorld": "Mundo",
			"viewEurope": "Europa",
			"viewAtlantic": "Atlántico"
			},
			"pfooter": {
				"text": "Gracias por pasarte.",
				"hire": "¿Quieres contratarme?",
				"hireCta": "Visita la página pro",
				"home": "Volver al inicio"
			},
			"space": {
				"eyebrow": "Espacio",
				"h2a": "Miro hacia arriba",
				"h2b": "muchísimo.",
				"lede": "Astronomía, exploración espacial y la escala que nos deja pequeños. Si hay un lanzamiento, un eclipse o un cielo despejado, probablemente lo estoy mirando.",
				"sceneAria": "El Pálido Punto Azul: la Tierra como un diminuto punto en un rayo de sol",
				"dotAria": "La Tierra, el pálido punto azul",
				"here": "Estás aquí",
				"hint": "Encuentra el punto",
				"found": "Ese somos nosotros",
				"paleEyebrow": "Pálido Punto Azul",
				"quote": "Mira de nuevo ese punto. Es aquí. Es nuestro hogar. Somos nosotros.",
				"by": "Carl Sagan",
				"caption": "El 14 de febrero de 1990, la Voyager 1 giró su cámara desde unos 6.000 millones de kilómetros. La Tierra ocupa menos de un píxel, atrapada en un rayo de luz solar dispersa. Es mi foto favorita de la historia.",
				"voyager": "La Voyager 1 está ahora a",
				"voyagerSub": "del Sol, y sigue a unos 17 km/s. Es una estimación, pero cercana.",
				"light": "La luz tarda",
				"lightSub": "en viajar del Sol a la Voyager 1. Superará el día luz en noviembre de 2026.",
				"moon": "La Luna esta noche",
				"lit": "iluminada",
				"phases": [
					"Luna nueva",
					"Creciente",
					"Cuarto creciente",
					"Gibosa creciente",
					"Luna llena",
					"Gibosa menguante",
					"Cuarto menguante",
					"Menguante"
				],
				"tagsAria": "Lo que me gusta del espacio",
				"tags": [
					"Cosmos",
					"Apolo",
					"Voyager",
					"Hubble y JWST",
					"Rovers de Marte",
					"Eclipses",
					"Lluvias de estrellas",
					"Cielos oscuros",
					"Días de lanzamiento"
				]
			}
	},
	content: {
		roles: [
			'un solucionador de problemas',
			'un ingeniero casi de cohetes',
			'un susurrador de Docker',
			'un domador de robots',
			'un desarrollador de PHP reformado',
			'un inventor de gestores de paquetes',
			'una persona que lee los logs',
			'disponible para contratar'
		],
		principles: [
			{ quote: 'Aprendí muchas cosas por las malas.', by: 'yo, en mi propio README' },
			{
				quote: 'En el fondo soy un solucionador de problemas. Intento arreglar cosas que hagan la vida un poco mejor, para los demás y para mí.',
				by: 'también yo'
			},
			{
				quote: 'Cuando nada de lo que había era lo bastante bueno, lo construí desde cero: una tienda, un hosting, un gestor de paquetes.',
				by: 'el git log'
			},
			{
				quote: 'La privacidad es una restricción de diseño. Vinculé sesiones solo con datos de la conexión, sin huella digital del dispositivo.',
				by: 'un socket, probablemente'
			},
			{ quote: '{bc} años de experiencia a. C. Eso significa antes de ChatGPT.', by: 'mi calendario' }
		],
		achievements: [
			{ title: 'Tendero', text: 'Construí mi propia plataforma de comercio para bienes digitales, como Shopify pero para coleccionables dentro de juegos.' },
			{ title: 'Casero', text: 'Construí mi propio sistema de hosting con Docker. Los servidores de juegos son los inquilinos más hambrientos.' },
			{ title: 'Susurrador de dependencias', text: 'Construí desde cero la lógica de un gestor de paquetes, con capas de caché y distribución.' },
			{ title: 'Sin huellas, por favor', text: 'Construí una plataforma de analítica con sockets y vinculación estricta de sesiones, sin huella digital del dispositivo.' },
			{ title: 'Control de misión', text: 'Trabajé en proyectos espaciales críticos que empujan la próxima frontera de la exploración humana.' },
			{ title: 'Primero, no hacer daño', text: 'Trabajé en aplicaciones de salud que mejoran cómo se entienden y gestionan los ensayos clínicos.' },
			{ title: 'Doble titulación', text: 'Ingeniería del Software (Informática) en la UAB, más un Grado Superior en Robótica y Automatización Industrial en Salesians Sarrià, con A+ en la mayoría.' },
			{ title: 'Cicatrices', text: 'Aprendí muchas cosas por las malas. Esa no tiene categoría.' }
		],
		marquee: [
			'TypeScript', 'Go', 'Svelte', 'Docker', 'Linux', 'PHP', 'C / C++', 'WebSockets', 'AWS',
			'Vue', 'Maven / Gradle', 'CSS', 'Sistemas distribuidos', 'Gestores de paquetes', 'Software de misión crítica'
		],
		quips: {
	"general": [
		"Guau. No me hagas caso. Ahora vivo en tu pantalla.",
		"Yo pastoreo cosas. Sobre todo plazos.",
		"No pasarás... sin mirar el botón de contratar.",
		"Quique me dibujó en 24x24 píxeles. Creo que está orgulloso.",
		"Buenos chicos: 1. Premios: 0. Por favor, aconsejad.",
		"Conozco tres túneles. No me preguntes por el cuarto.",
		"psst. el botón de contratar funciona.",
		"Un merle nunca llega tarde. Ni pronto. Llega justo cuando se propone.",
		"Pulsa Ctrl+K. Yo lo haría, pero no tengo pulgares.",
		"Espera, ¿he oído la palabra paseo? ¿Alguien ha dicho paseo?",
		"Hay un código Konami por aquí. Yo no he dicho nada.",
		"¡Una ardilla! ...Perdón. ¿Por dónde íbamos?"
	],
	"top": [
		"¡Guau! Soy Gandalf. Quique está ocupado programando, así que saludo yo.",
		"Baja. Los mejores premios no están en la portada."
	],
	"about": [
		"Esos logros son reales. El confeti es extra.",
		"Él empezó a programar a los nueve. Yo, a morder zapatos a las nueve semanas."
	],
	"experience": [
		"Prueba los filtros. Los he olfateado. Muy satisfactorios.",
		"Filtra por Go. Luego trae la pelota. Espera, eso no es un filtro.",
		"Todas las tarjetas se abren. Las he comprobado todas. Dos veces."
	],
	"projects": [
		"Hizo todo esto mientras yo supervisaba desde el sofá.",
		"nominal tiene cinco productos. Yo tengo una pelota. Prioridades."
	],
	"hire": [
		"Aquí es donde le escribes un correo.",
		"Salúdale. Responde. Lo he visto. Con meneo de cola incluido.",
		"quique@osuna.dev. Esperaré aquí. Los buenos chicos esperan."
	],
			"graveyard": [
				"Enterré un hueso por aquí una vez. No se lo digas a los proyectos.",
				"Todo buen desarrollador tiene un cementerio. El de Quique tiene a un buen chico vigilando.",
				"No los despiertes. El último todavía se está compilando."
			],
			"launcher": [
				"Dos puertas. La número uno tiene al perro. La número dos tiene el CV.",
				"Elige bien. O elige las dos. Las puertas son gratis."
			],
			"me": [
				"Ese es Quique en un barco. Yo no hago barcos. Mucho mar y poco sofá.",
				"Míralo sonriendo. Yo no hice ninguna de estas fotos. Estaba durmiendo."
			],
			"loves": [
				"Sackboy y yo tenemos la misma energía: suaves, de punto e imparables.",
				"Yo sería genial en Crash. Un giro es solo un ataque de zoomies con licencia."
			],
			"skin": [
				"Haz correr a la skin. Así corro yo cuando oigo la palabra paseo.",
				"Todo en Minecraft está hecho de cuadrados. Igual que yo, si entrecierras los ojos."
			],
			"map": [
				"Los cruceros tienen buffet. ¿Me toca plato? Lo pregunto por un amigo.",
				"Quique viaja mucho. Yo espero en la puerta. Es todo un tema."
			]
},
		clickLines: [
	"¡Boop!",
	"¡Guau!",
	"Soy un buen chico, ¿sabes?",
	"Las caricias en la barriga son extra.",
	"A mitad de camino del premio. Probablemente.",
	"Seis. Yo también estoy contando.",
	"Siete. Vas en serio.",
	"Ocho. Ya veo el premio.",
	"Nueve. El diez va a estar genial."
],
		areas: {
			backend: { label: 'Backend y sistemas distribuidos', blurb: 'Servicios que se mantienen en pie, escalan y no despiertan a nadie a las 3 de la madrugada.' },
			infra: { label: 'Infraestructura y hosting', blurb: 'Contenedores, orquestación y ejecutar con seguridad las cargas de otras personas.' },
			frontend: { label: 'Frontend y producto', blurb: 'Interfaces que a la gente le gusta usar: paneles, constructores y tiendas.' },
			commerce: { label: 'Comercio, anuncios y crecimiento', blurb: 'Vender bienes digitales, monetizar comunidades y hacerse encontrar.' },
			data: { label: 'Datos, analítica y estadística', blurb: 'Convertir flujos de eventos en decisiones, previsiones y moderación.' },
			security: { label: 'Seguridad y confianza', blurb: 'Sesiones que respetan la privacidad, detección de vulnerabilidades y valores seguros por defecto.' },
			devtools: { label: 'Herramientas para desarrolladores', blurb: 'Gestores de paquetes, pipelines de compilación y herramientas para otros ingenieros.' },
			foundations: { label: 'Fundamentos de informática', blurb: 'Formación reglada: la teoría y la disciplina de ingeniería que hay debajo de todo lo demás.' },
			aerospace: { label: 'Aeroespacial y misión crítica', blurb: 'Software donde fallar no es una opción y lo que está en juego es orbital.' },
			robotics: { label: 'Robótica y automatización', blurb: 'Automatización industrial, sobre todo automoción, donde el software se encuentra con el acero.' },
			health: { label: 'Salud y ensayos clínicos', blurb: 'Aplicaciones que ayudan a entender y gestionar la investigación clínica.' },
			"ai": {
				"label": "Productos asistidos por IA",
				"blurb": "Software que redacta, sugiere y agiliza, con una persona siempre en el circuito."
			}
		},
		contexts: { product: 'Mis propios productos', industry: 'Trabajo en la industria', education: 'Formación' },
		sources: {
			serverbench: 'serverbench',
			grifpkg: 'grifpkg',
			'all of the above': 'todo lo anterior',
			various: 'varios',
			UAB: 'UAB',
			'Aerospace, defense and security company': 'Empresa aeroespacial, de defensa y seguridad',
			'Robotics company': 'Empresa de robótica',
			'Salesians Sarrià': 'Salesians Sarrià',
			'Health technology': 'Tecnología sanitaria',
			"Confidential client": "Cliente confidencial",
			"Professional work": "Trabajo profesional",
			"Graveyard \u00b7 Bachillerato TFG": "Cementerio · TFG de Bachillerato",
			"Graveyard \u00b7 personal experiment": "Cementerio · experimento personal",
			"Graveyard \u00b7 academic project": "Cementerio · proyecto académico"
		},
		entries: {
			'game-hosting': {
				title: 'Hosting de alto consumo de cómputo',
				summary: 'Un servicio de hosting para servidores de juegos, de las cargas más voraces y difíciles de gestionar bien.',
				detail:
					'Los servidores de juegos no perdonan: devoran CPU y memoria, son sensibles a la latencia y los jugadores notan cualquier tirón. El servicio tenía que repartir esas cargas con justicia, aislarlas entre sí y recuperarse rápido cuando algo fallaba. Se construyó con Go, JavaScript, TypeScript y PHP, con los contenedores como unidad de aislamiento.',
				highlights: ['Aislamiento de cargas por servidor', 'Planificación según recursos', 'Plano de control en Go, paneles en TypeScript']
			},
			permissions: {
				title: 'Permisos basados en roles',
				summary: 'Permisos de alta granularidad para que los equipos separen marketing, comercio, soporte y moderación.',
				detail:
					'Las comunidades son equipos y los equipos tienen roles. El sistema de permisos deja que cada comunidad defina quién puede tocar qué, de modo que el equipo de moderación nunca necesita acceso a la tienda ni el de marketing ver los tickets de soporte. Tenía que ser rápido al comprobar, porque cada petición hace la misma pregunta.',
				highlights: ['Roles granulares por comunidad', 'Se comprueba en cada petición', 'Diseñado en torno a estructuras de equipo reales']
			},
			tracking: {
				title: 'Seguimiento de clientes entre medios',
				summary: 'Sigue a un cliente entre juegos, navegadores y Discord para construir un único perfil de intereses fiable.',
				detail:
					'Una misma persona aparece como cuenta de juego, sesión de navegador y miembro de Discord. Unir esas identidades en un solo perfil es lo que hace que las recomendaciones sean relevantes en vez de molestas. Alimenta la tienda y el estudio de creadores para que el contenido adecuado llegue a la persona adecuada.',
				highlights: ['Unión de identidades entre tres medios', 'Alimenta recomendaciones de tienda y creadores', 'Construido con las lecciones de privacidad de serverbench']
			},
			'realtime-ingest': {
				title: 'Ingesta en tiempo real por sockets',
				summary: 'Un backend de analítica basado en sockets que mantiene conexiones largas y las convierte en sesiones.',
				detail:
					'serverbench mantiene las conexiones abiertas y lee la sesión directamente de la conexión, en lugar de cookies o identificadores de dispositivo. Eso mantiene el modelo de datos simple y honesto: si el socket es el mismo, la sesión es la misma.',
				highlights: ['Conexiones WebSocket de larga duración', 'Identidad de sesión a partir de la conexión', 'Poco coste por evento']
			},
			'docker-hosting': {
				title: 'Sistema de hosting basado en Docker',
				summary: 'Mi propio sistema de hosting de contenedores, construido desde cero porque nada existente encajaba.',
				detail:
					'La capa de hosting envuelve Docker con la lógica de producto que necesita un negocio de hosting: aprovisionamiento, límites, ciclo de vida, enganches de facturación y un panel para el cliente. Es la base de serverbench y me enseñó más sobre Linux, cgroups y redes que cualquier curso.',
				highlights: ['Aprovisionamiento y gestión del ciclo de vida', 'Límites por contenedor', 'Panel de cliente encima']
			},
			byod: {
				title: 'Orquestador «trae tu propio dispositivo»',
				summary: 'Permite a los clientes conectar sus propias máquinas y tener la misma experiencia gestionada en ellas.',
				detail:
					'No todo el mundo quiere alquilar capacidad. El orquestador BYOD deja que un cliente conecte su propio hardware y obtenga los mismos despliegues, monitorización y controles, lo que implica tratar cada máquina como no fiable, remota y a veces desconectada.',
				highlights: ['Máquinas del cliente como nodos de primera clase', 'Las mismas herramientas que el hosting gestionado', 'Pensado para conexiones inestables']
			},
			'cdn-edge': {
				title: 'Entrega en el borde y caché de archivos',
				summary: 'Descargas cacheadas y servidas desde el borde para que las dependencias se resuelvan rápido allá donde esté el servidor.',
				detail:
					'Un gestor de paquetes vive o muere por la velocidad de descarga. grifpkg cachea archivos con metadatos ricos y los sirve desde el borde, así las instalaciones son rápidas y no se machaca a los sitios de origen.',
				highlights: ['Caché de archivos con metadatos', 'Entrega en el borde', 'Amable con los hosts de origen']
			},
			'linux-ops': {
				title: 'Operaciones Linux',
				summary: 'Años gestionando servidores reales para comunidades reales, donde una caída tiene su propio canal de Discord.',
				detail:
					'Gestionar PureVanilla y serverbench significaba mantener máquinas Linux sanas para gente que nota al instante cuando no lo están. Monitorización, copias de seguridad y respuesta a incidentes eran parte de la rutina diaria, no de un equipo aparte.',
				highlights: ['Monitorización y copias de seguridad', 'Respuesta a incidentes con público', 'Depurar en producción con cuidado']
			},
			'creator-studio': {
				title: 'Estudio de creadores',
				summary: 'Un panel de marketing para creadores que hacen vídeos y publicaciones sobre las comunidades que aman.',
				detail:
					'El estudio conecta cuentas de YouTube, TikTok y Twitch, permite monetizar publicaciones y muestra a los creadores cómo rinde su trabajo. Tenía que parecer una herramienta de creadores, no una consola empresarial.',
				highlights: ['Autenticación con YouTube, TikTok y Twitch', 'Monetización de publicaciones', 'Analítica para creadores']
			},
			cms: {
				title: 'CMS y constructor de sitios web',
				summary: 'Un CRM y constructor web con motor de plantillas y un mercado de plantillas.',
				detail:
					'Las comunidades construyen sus propios sitios sin tocar código. Las páginas se componen con módulos reutilizables, las plantillas se pueden compartir o vender en un mercado y el motor lo renderiza todo con un rendimiento predecible.',
				highlights: ['Sitios de varias páginas', 'Módulos reutilizables', 'Mercado de plantillas integrado']
			},
			storefronts: {
				title: 'Tiendas web personalizables',
				summary: 'Cada comunidad tiene una tienda que puede hacer suya.',
				detail:
					'La tienda tiene que parecerse a la comunidad que la posee, así que el tema llega hondo mientras el pago se mantiene coherente y de confianza. Es la mitad de cara al cliente de la plataforma de comercio.',
				highlights: ['Temas por comunidad', 'Pago coherente y fiable', 'Coleccionables, insignias y potenciadores']
			},
			'modern-ui': {
				title: 'Interfaces modernas por componentes',
				summary: 'Interfaces por componentes en Svelte y Vue, con Tailwind o CSS a mano.',
				detail:
					'Me gustan las interfaces pequeñas y rápidas. Svelte es mi opción por defecto, Vue cuando el equipo ya vive ahí, y Tailwind o CSS escrito a mano según el proyecto. Esta web es un ejemplo.',
				highlights: ['Primero Svelte, Vue cuando encaja', 'Tailwind o CSS a mano', 'Accesible por defecto']
			},
			'commerce-platform': {
				title: 'Plataforma de comercio para bienes digitales',
				summary: 'Mi propia plataforma estilo Shopify, hecha para coleccionables, insignias y potenciadores dentro de juegos.',
				detail:
					'Los bienes digitales tienen reglas distintas a los físicos: entrega instantánea, fraude, contracargos e integraciones por juego. La plataforma gestiona catálogos, pago y entrega dentro del juego, y da a cada comunidad su propia tienda web.',
				highlights: ['Entrega instantánea dentro de los juegos', 'Tiendas web por comunidad', 'Construida desde cero']
			},
			'paid-plugins': {
				title: 'Plugins de pago y verificación de compras',
				summary: 'Vende dependencias o autentica compras hechas en otros sitios para autorizar descargas.',
				detail:
					'Los desarrolladores pueden vender su trabajo a través del gestor de paquetes, y quien ya posee un plugin en otro sitio puede demostrarlo y descargarlo. Autorizar descargas sin romper el flujo de instalación fue lo difícil.',
				highlights: ['Venta de dependencias', 'Verificación de compras entre sitios', 'Descargas autorizadas desde la CLI']
			},
			ads: {
				title: 'Páginas de descarga alojadas con anuncios',
				summary: 'Los desarrolladores de código abierto obtienen ingresos de páginas de descarga alojadas, con anuncios de nuestro propio fondo.',
				detail:
					'El código abierto debería poder pagarse solo. Los desarrolladores activan páginas de descarga alojadas y ganan con publicidad servida desde el fondo de anuncios de la plataforma, lo que mantuvo la calidad alta y el seguimiento limitado.',
				highlights: ['Ingresos para desarrolladores de código abierto', 'Fondo de anuncios propio', 'Opcional por proyecto']
			},
			promoted: {
				title: 'Software promocionado',
				summary: 'Los desarrolladores anuncian plugins de pago en el sitio y mediante recomendaciones de texto en la CLI.',
				detail:
					'Descubrir es lo difícil al vender software. Las promociones aparecen en el sitio y como sugerencias discretas de texto en la línea de comandos, donde los desarrolladores ya buscan una solución.',
				highlights: ['Promoción en el sitio', 'Recomendaciones de texto en la CLI', 'Ubicación respetuosa y poco intrusiva']
			},
			'seo-studio': {
				title: 'Estudio SEO y votaciones',
				summary: 'Un panel SEO con sistema de votos que sugiere los sitios donde cada voto de un miembro rinde más.',
				detail:
					'Las comunidades listan sus sitios y los miembros votan por ellos. El estudio sugiere qué sitios de votación de terceros usar para que cada voto llegue lo más lejos posible, convirtiendo una tarea suelta en un ciclo de crecimiento medido.',
				highlights: ['Sistema de votación integrado', 'Sugerencias inteligentes de sitios', 'Maximiza el alcance por voto']
			},
			'community-analytics': {
				title: 'Analítica de comunidades',
				summary: 'Todo lo que una comunidad necesita saber sobre su crecimiento, más predicción de festivos.',
				detail:
					'Más allá de los recuentos y gráficas habituales, la analítica predice los efectos de los festivos y combina señales de los sistemas de SEO y creadores, para que una comunidad vea de dónde viene realmente su crecimiento.',
				highlights: ['Métricas de crecimiento estándar', 'Predicción de festivos', 'Señales de las herramientas de SEO y creadores']
			},
			automod: {
				title: 'Automoderación estadística',
				summary: 'Moderación de alto volumen con Perspective API que mantiene fuera de la conversación a los miembros tóxicos recurrentes.',
				detail:
					'En lugar de juzgar cada mensaje por separado, el sistema toma una visión estadística de cada miembro a lo largo del tiempo. Los reincidentes se van alejando de la conversación, mientras que un mal día puntual no manda a nadie al baneo.',
				highlights: ['Puntuación con Perspective API', 'Historial estadístico por miembro', 'Pensado para alto volumen de ingesta']
			},
			'interest-profiles': {
				title: 'Perfiles de intereses y recomendaciones',
				summary: 'Construye un perfil de intereses por cliente para recomendar contenido de la tienda o medios de creadores.',
				detail:
					'Señales de juegos, navegadores y Discord se fusionan en un perfil que decide qué recomendar. El objetivo era la relevancia: menos sugerencias, pero mejores.',
				highlights: ['Perfiles a partir de varias fuentes', 'Recomendaciones de tienda y creadores', 'Ajustado para relevancia antes que volumen']
			},
			'fingerprint-free': {
				title: 'Vinculación de sesiones sin huella digital',
				summary: 'Vinculación de sesiones de alta seguridad basada solo en datos de la conexión, sin huella digital del dispositivo.',
				detail:
					'La forma fácil de rastrear visitantes es tomar la huella de sus dispositivos. Yo no quería eso. La plataforma ata las sesiones a propiedades de la propia conexión, lo que mantiene útil la analítica y a los visitantes sin identificar.',
				highlights: ['Sin huella digital del dispositivo', 'Identidad basada en la conexión', 'Altos estándares de seguridad']
			},
			'vuln-detection': {
				title: 'Detección de vulnerabilidades',
				summary: 'Las dependencias se identifican por huella y pueden marcarse como vulnerables, avisando a los desarrolladores del uso de código inseguro.',
				detail:
					'Una vez identificados los archivos por huella, una versión conocida como mala puede marcarse, y quien dependa de ella recibe un aviso. Convierte un gestor de paquetes en un sistema de alerta temprana para el ecosistema.',
				highlights: ['Huella digital de artefactos', 'Marcado de versiones vulnerables', 'Avisos a los desarrolladores afectados']
			},
			'jar-pm': {
				title: 'Gestor de paquetes JAR',
				summary: 'Un gestor de paquetes que importa, actualiza y gestiona dependencias de software Java.',
				detail:
					'Los ecosistemas de plugins Java suelen depender de descargas manuales. grifpkg resuelve, cachea y actualiza dependencias automáticamente, con su propio registro, CLI y capa de distribución. Lo usa sobre todo la comunidad de SpigotMC.',
				highlights: ['Registro, CLI y capas de distribución', 'Actualizaciones automáticas', 'Usado en la comunidad de SpigotMC']
			},
			'auto-index': {
				title: 'Indexación automática',
				summary: 'Bibliotecas y software se indexan automáticamente, con metadatos ricos y caché de archivos.',
				detail:
					'Un registro es tan bueno como su cobertura. La indexación automática encuentra nuevas versiones, extrae metadatos y cachea los archivos, así el catálogo se mantiene al día sin que los mantenedores hagan el papeleo.',
				highlights: ['Rastreo e indexación de nuevas versiones', 'Extracción de metadatos ricos', 'Caché de archivos']
			},
			'dep-compile': {
				title: 'Compilación de dependencias',
				summary: 'Algunos proyectos no publican .jar. grifpkg se engancha a sus repositorios git y los compila con Maven o Gradle.',
				detail:
					'Cuando no hay un artefacto precompilado, la plataforma obtiene el repositorio y lo compila en un entorno aislado con Maven o Gradle, y sirve el resultado como cualquier otro paquete.',
				highlights: ['Compilaciones guiadas por git', 'Soporte para Maven y Gradle', 'Entorno de compilación aislado']
			},
			'local-import': {
				title: 'Importación local automática',
				summary: 'Detecta dependencias en un proyecto existente y las asocia con entradas del registro automáticamente.',
				detail:
					'Adoptar un gestor de paquetes no debería significar rehacer tu proyecto a mano. El importador escanea lo que ya hay, lo empareja con identificadores del registro y lo deja todo configurado.',
				highlights: ['Escanea proyectos existentes', 'Empareja identificadores del registro', 'Un solo comando para adoptarlo']
			},
			'se-degree': {
				title: 'Grado en Ingeniería del Software (Informática)',
				summary: 'Un grado en ingeniería del software, con la informática en su núcleo, en la Universitat Autònoma de Barcelona.',
				detail:
					'Años programando antes del grado hicieron que cayera de otra manera: puso nombres, teoría y disciplina a cosas que había aprendido rompiéndolas. Convive con mis estudios de robótica, así que tengo formación formal tanto en el lado software como en el hardware de la automatización.',
				highlights: ['Fundamentos de informática', 'Práctica de ingeniería del software', 'Contrapunto formal a años de construir por cuenta propia']
			},
			space: {
				title: 'Proyectos espaciales críticos',
				summary: 'Software para trabajo que empuja la próxima frontera de la exploración humana.',
				detail:
					'Trabajo en una empresa de tecnología e ingeniería especializada en sistemas aeroespaciales, de defensa y seguridad, con profunda experiencia en navegación por satélite y software de misión crítica. Los detalles no me corresponde compartirlos, pero el estándar es claro: riguroso, trazable y correcto a la primera.',
				highlights: ['Estándares de misión crítica', 'Contexto de navegación por satélite', 'Corrección y trazabilidad primero']
			},
			'robotics-work': {
				title: 'Automatización industrial',
				summary: 'Software para una empresa de robótica centrada en automatización industrial, sobre todo en el sector del automóvil.',
				detail:
					'El software de planta es otro deporte: la salida mueve máquinas reales, el tiempo de actividad es dinero y el tiempo de ciclo lo es todo. Es donde se juntan mi formación en robótica y mis hábitos de software.',
				highlights: ['Industria del automóvil', 'Software que mueve máquinas', 'Importan el tiempo de ciclo y la disponibilidad']
			},
			degree: {
				title: 'Robótica y automatización industrial (Grado Superior)',
				summary: 'Un grado superior de formación profesional en robótica y automatización industrial, terminado con A+ en la mayoría de asignaturas.',
				detail:
					'Estudiado en Salesians Sarrià, en Barcelona. Sensores, actuadores, control y sistemas de automatización me dieron una intuición física para el software. Por eso pienso en modos de fallo y latencia antes de escribir código, y por eso la automatización industrial me hace sentir en casa.',
				highlights: ['A+ en la mayoría de asignaturas', 'Control, sensores y automatización', 'Intuición de hardware para el software']
			},
			clinical: {
				title: 'Aplicaciones para ensayos clínicos',
				summary: 'Aplicaciones de salud que mejoran cómo entendemos y gestionamos los ensayos clínicos.',
				detail:
					'La investigación clínica depende de datos precisos de personas reales. Las aplicaciones facilitan recoger, entender y actuar sobre esos datos, donde la privacidad y la corrección no son negociables.',
				highlights: ['Mejores datos de ensayos', 'Privacidad y corrección primero', 'Software que ayuda a que la medicina avance más rápido']
			},
			"obex-identity": {
				"title": "Identidad y sesiones (obex)",
				"summary": "Una identidad para cada app: una sola sesión lleva permisos acotados a todas las apps de nominal, más acceso de terceros enlazado, como las instalaciones de GitHub App.",
				"detail": "obex es la capa de identidad de nominal.es. Una sola sesión lleva permisos acotados a través de todas las apps y enlaza accesos de terceros, como las instalaciones de GitHub App. Los equipos pueden inspeccionar y revocar cualquier sesión al instante en lugar de esperar a que caduque el token, auditar cada permiso concedido y cada inicio de sesión, conectar SSO con SAML y OIDC sin configuración extra por app y emitir claves de API acotadas por recurso y con límite de tasa, ligadas al mismo sistema de identidad que los inicios de sesión de usuario.",
				"highlights": [
					"Inspector de sesiones con revocación instantánea",
					"Registro de auditoría exportable",
					"SSO de organización con SAML y OIDC",
					"Claves de API acotadas y con límite de tasa"
				]
			},
			"eris-support": {
				"title": "Soporte asistido por IA (eris)",
				"summary": "Respuestas sugeridas antes de que se abra siquiera un ticket. La IA lo redacta, una persona lo envía.",
				"detail": "eris lee cada ticket, lo compara con todas las resoluciones que el equipo ha aplicado alguna vez y redacta una solución. El equipo la revisa, la edita si hace falta y la envía, así las respuestas siguen siendo rápidas sin perder el toque personal. Al cerrarse un ticket se guardan la resolución y los datos usados para llegar a ella, de modo que el siguiente caso parecido se resuelve más rápido y con coherencia. Funciona como widget en tu producto, desde el panel de nominal o directamente desde Discord.",
				"highlights": [
					"Una persona en el circuito, por diseño",
					"Conocimiento que se acumula con cada ticket cerrado",
					"Widget, panel o Discord",
					"Cada solución ligada a la petición que la originó"
				]
			},
			"hermes-billing": {
				"title": "Facturación global y cumplimiento fiscal (hermes)",
				"summary": "Suscripciones y cobros únicos, con el impuesto de cada país calculado y declarado automáticamente, incluido Verifactu.",
				"detail": "hermes gestiona suscripciones recurrentes y cobros únicos con la misma configuración de facturación. Acepta pagos a través de cientos de sistemas de pago en cientos de países, calcula el impuesto de cada país y lo declara automáticamente, con foco en el cumplimiento fiscal de la UE y soporte de Verifactu integrado. Escala desde un pequeño proyecto configurado en minutos hasta una gran corporación, con configuraciones de facturación extremadamente flexibles.",
				"highlights": [
					"Cientos de países y sistemas de pago",
					"Cumplimiento fiscal de la UE con Verifactu",
					"Suscripciones y pagos únicos",
					"De proyecto personal a empresa"
				]
			},
			"kinesis-events": {
				"title": "Analítica de eventos a escala (kinesis)",
				"summary": "Más de 1.000.000 de eventos procesados por hora, del evento del SDK al panel en milisegundos.",
				"detail": "kinesis recibe eventos de un SDK de una sola línea en web, móvil o backend, los valida contra un esquema tipado y extensible para que los eventos malformados nunca contaminen los datos, y actualiza paneles en tiempo real (portales) en milisegundos. Puede autoalojarse o ser gestionado, y admite repetición de eventos contra nuevos esquemas, políticas de retención de eventos en bruto y alertas por umbral.",
				"highlights": [
					"Más de 1.000.000 de eventos por hora",
					"Esquemas tipados y extensibles",
					"Autoalojado o gestionado",
					"Paneles en tiempo real, repetición y alertas"
				]
			},
			"archon-deploys": {
				"title": "Despliegues en tu propio hardware (archon)",
				"summary": "Haz push a un repositorio y despliega en tu propio hardware, con copias de seguridad programadas por defecto.",
				"detail": "archon gestiona máquinas remotas desde un solo panel, estén donde estén. Haces push a GitHub o GitLab, y archon construye y versiona el contenedor automáticamente y lo despliega en tu máquina, con una copia de seguridad programada por defecto. Las copias se pueden crear y restaurar bajo demanda, y el acceso a máquinas y contenedores se comparte con el equipo, acotado a lo que cada persona necesita.",
				"highlights": [
					"Gestión remota de máquinas desde un solo panel",
					"Despliegues de contenedores guiados por git",
					"Copias de seguridad bajo demanda y por defecto",
					"Acceso granular para el equipo"
				]
			},
			"workhours-app": {
				"title": "Control horario offline-first (workhours)",
				"summary": "Registro horario hecho en España, conforme a la ley laboral española, instalable como PWA en cualquier dispositivo y funcional sin conexión.",
				"detail": "workhours es una PWA multiplataforma de control horario que cumple la ley laboral española. Funciona en iOS, Android, Windows, macOS y Linux, se instala desde el navegador, registra el tiempo incluso sin conexión y se sincroniza automáticamente, sin conflictos y en tiempo real, al volver a estar en línea. Añade geolocalización precisa de entradas y salidas, un sistema de solicitudes de ajuste con historial de auditoría claro, gestión de vacaciones y bajas, y cumplimiento del RGPD con los datos en la UE y cifrado de extremo a extremo.",
				"highlights": [
					"PWA multiplataforma que funciona sin conexión",
					"Sincronización en tiempo real y sin conflictos",
					"Cumplimiento legal y RGPD",
					"Vacaciones, bajas y solicitudes de ajuste"
				]
			},
			"verifactu": {
				"title": "Cumplimiento de facturación Verifactu",
				"summary": "Cumplimiento automático de la normativa Verifactu de España, en hermes y workhours.",
				"detail": "Verifactu es el nuevo marco regulatorio español para la facturación y el cumplimiento fiscal, creado por la AEAT para modernizar la facturación y combatir el fraude fiscal. hermes incluye soporte de Verifactu de serie, y workhours se está actualizando para que su facturación cumpla automáticamente los requisitos de la AEAT.",
				"highlights": [
					"Cumplimiento automático con la AEAT",
					"Soporte de Verifactu integrado en hermes",
					"workhours, en camino"
				]
			},
			"opencti-threat-intel": {
				"title": "Análisis de inteligencia de amenazas (OpenCTI)",
				"summary": "Software de análisis de ciberseguridad que detecta tendencias y redacta informes automáticos sobre las mayores amenazas del mundo. El cliente no puede revelarse.",
				"detail": "Construí software de análisis de ciberseguridad con OpenCTI para entender las tendencias de las amenazas y redactar informes automáticos sobre las mayores amenazas del mundo. Procesa millones de eventos cada año y convierte esos datos en bruto en informes que la gente puede leer y en los que puede actuar. El cliente no puede revelarse.",
				"highlights": [
					"Construido con OpenCTI",
					"Millones de eventos procesados cada año",
					"Informes automáticos sobre las mayores amenazas globales",
					"Cliente confidencial"
				]
			},
			"hours-offers": {
				"title": "Control horario y gestión de ofertas",
				"summary": "Software de fichaje y un sistema de gestión de ofertas que controla las horas de las personas de principio a fin y sigue cada oferta desde la propuesta hasta su conclusión.",
				"detail": "Creé un sistema de fichaje y un sistema de gestión de ofertas que controlan las horas de las personas de principio a fin y siguen cada oferta desde la propuesta hasta su conclusión. Gestiona proyectos que facturan millones de euros, así que las horas, las ofertas y la facturación tienen que cuadrar al céntimo.",
				"highlights": [
					"Fichaje para controlar las horas de las personas",
					"Flujo de ofertas de la propuesta a la conclusión",
					"Proyectos que facturan millones de euros",
					"Horas y ofertas ligadas a la facturación del proyecto"
				]
			},
			"national-data": {
				"title": "Plataforma nacional de datos",
				"summary": "Un proyecto nacional que reúne datos de todos los lugares en un único sitio, para que la gente entienda el país desde muchas perspectivas distintas.",
				"detail": "Colaboré en la implementación y el mantenimiento de un proyecto nacional que reúne datos de todos los lugares en un único sitio, hecho para frikis (y para frikis disfrazados de científicos e investigadores) que quieren entender el país desde todo tipo de perspectivas.",
				"highlights": [
					"Implementación y mantenimiento continuo",
					"Datos de todos los lugares en un único sitio",
					"Hecho para científicos, investigadores y frikis curiosos"
				]
			},
			"slate": {
	"title": "Slate: una plataforma de aula local",
	"summary": "Un «Google Classroom» local para el instituto: una pizarra digital que se sincroniza con los cuadernos de los alumnos, además de seguimiento de notas, entregas y eventos del centro. Mi TFG de Bachillerato, con un 10/10.",
	"detail": "Slate fue mi trabajo final (TFG) del Bachillerato Tecnológico, y sacó un 10/10. Es una experiencia tipo Google Classroom local para un instituto. La pizarra digital se sincroniza automáticamente con los cuadernos de los alumnos, y la plataforma también lleva el seguimiento de notas y entregas y muestra los eventos del centro. Tenía una app nativa de Android y una versión web, ambas sobre un backend en PHP. Hoy descansa en el cementerio.",
	"highlights": [
		"Calificado con un 10/10",
		"Pizarra digital sincronizada automáticamente con los cuadernos de los alumnos",
		"Notas, entregas y eventos del centro",
		"App nativa de Android y versión web, backend en PHP"
	]
},
			"sodge": {
				"title": "Sodge: red social que empareja por intereses",
				"summary": "Una red social que te mostraba automáticamente gente con intereses parecidos, con emparejamiento de palabras sobre redes neuronales, hacia 2017.",
				"detail": "Sodge fue un experimento personal de hacia 2017, años antes de que la IA se hiciera popular: una red social que usaba emparejamiento de palabras construido sobre redes neuronales para mostrarte automáticamente gente con intereses parecidos. Funcionaba en web y Android con un backend en PHP. Hoy descansa en el cementerio.",
				"highlights": [
					"Emparejamiento por intereses con palabras sobre redes neuronales",
					"Hecho hacia 2017, antes de la fiebre de la IA",
					"Web y Android",
					"Backend en PHP"
				]
			},
			"vidfeed": {
				"title": "thememepage: feed infinito de vídeos",
				"summary": "Una página estilo TikTok para hacer scroll sin fin por vídeos graciosos de internet, hecha hacia 2014, mucho antes de que el contenido vertical existiera.",
				"detail": "Hacia 2014 hice una página muy parecida al TikTok de hoy: scroll infinito por vídeos graciosos de internet, años antes de que el contenido vertical existiera. «Infinito» es una palabra generosa: la lista era bastante corta y yo era el único usuario. Estaba escrita en JavaScript y hoy descansa en el cementerio.",
				"highlights": [
					"Feed de vídeos con scroll infinito",
					"Hecho hacia 2014, adelantado al vídeo vertical",
					"JavaScript",
					"Un usuario muy fiel (yo)"
				]
			},
			"greenie": {
				"title": "Greenie: la salud de una planta con una foto",
				"summary": "Una app de Android con backend en Python que te dice lo sana que está una planta a partir de una sola foto, con un modelo entrenado en local con PyTorch.",
				"detail": "Greenie fue un proyecto académico: una app solo para Android donde haces una foto a cualquier planta y ves su salud. El backend estaba escrito en Python y el modelo se entrenó en local con PyTorch. Hoy descansa en el cementerio.",
				"highlights": [
					"Salud de la planta a partir de una sola foto",
					"Modelo entrenado en local con PyTorch",
					"App de Android, backend en Python",
					"Proyecto académico"
				]
			},
			"openagv": {
				"title": "OpenAGV: un robot con ruedas omnidireccionales",
				"summary": "Un vehículo de guiado automático sobre ruedas omnidireccionales que navega solo de A a B, con radar, una interfaz completa y control remoto por Bluetooth con evitación automática de obstáculos.",
				"detail": "OpenAGV fue un proyecto académico de 2021: un sistema AGV (vehículo de guiado automático) que navegaba automáticamente de A a B sobre ruedas omnidireccionales. Estaba escrito en C e incorporaba un radar con una interfaz completa, además de Bluetooth para el control remoto con evitación automática de obstáculos. Hoy descansa en el cementerio.",
				"highlights": [
					"Navegación automática de A a B sobre ruedas omnidireccionales",
					"Radar con una interfaz completa",
					"Control remoto por Bluetooth con evitación automática de obstáculos",
					"Escrito en C"
				]
			}
		},
		projects: {
			serverbench: {
	"kind": "E-commerce, analítica y hosting",
	"blurb": "Una plataforma completa para comunidades en línea, sobre todo servidores de juegos (antes purecore): una plataforma de comercio para bienes digitales, una herramienta de analítica que prioriza la privacidad y un orquestador de hosting «trae tu propio dispositivo». Varias de sus funciones viven ahora en los productos de nominal.es.",
	"points": [
		"Tienda: las comunidades venden coleccionables, insignias y potenciadores, con una tienda web personalizable para cada una",
		"Hosting: un orquestador basado en Docker para servidores de juegos muy exigentes",
		"Analítica: basada en sockets, vincula sesiones solo con datos de la conexión, sin huella digital del dispositivo",
		"Estudios: herramientas de creadores, SEO y CMS que comparten datos con un único núcleo de analítica"
	]
},
			grifpkg: {
				kind: 'Gestor de paquetes',
				blurb:
					'Un gestor de paquetes para plugins de Java, software de servidor y código de propósito general, usado sobre todo por la comunidad de SpigotMC. Importa, actualiza y gestiona dependencias automáticamente.',
				points: [
					'Capas propias de caché y distribución para entrega rápida en el borde',
					'Indexa bibliotecas automáticamente y compila desde el código fuente cuando no existe .jar',
					'Plugins de pago, detección de vulnerabilidades y monetización para desarrolladores integrados'
				]
			},
			purevanilla: {
				kind: 'Servidor de comunidad',
				blurb:
					'Un proyecto de servidor de Minecraft vanilla centrado en una experiencia limpia y fiel al original. Gestionado como un producto, con infraestructura real detrás de un juego.',
				points: ['Filosofía vanilla primero: menos mods, más cuidado', 'Una comunidad viva que necesita disponibilidad', 'Donde empezaron muchas de las lecciones de hosting']
			},
			"workhours": {
				"kind": "Registro horario hecho en España",
				"blurb": "Control horario sin esfuerzo que cumple con la ley laboral española. Una PWA multiplataforma para trabajadores que merecen lo mejor.",
				"points": [
					"Funciona en cualquier dispositivo y sin conexión, y se sincroniza al volver a estar en línea",
					"Fichajes con geolocalización, solicitudes de ajuste con historial de auditoría, gestión de vacaciones y bajas",
					"Cumplimiento del RGPD: datos en la UE y cifrado de extremo a extremo. Soporte de Verifactu en camino"
				]
			}
		},
			"notes": {
				"docker-hosting": "Empezó dentro de serverbench y hoy sigue vivo como archon, en nominal.es.",
				"byod": "Hoy sigue vivo como archon, en nominal.es: haz push a un repo y despliega en tu propio hardware.",
				"permissions": "La misma idea creció hasta convertirse en obex, en nominal.es: una identidad y permisos acotados en todas las apps.",
				"realtime-ingest": "Ese núcleo de analítica sigue vivo hoy como kinesis, en nominal.es.",
				"community-analytics": "Su parte de analítica sigue viva hoy como kinesis, en nominal.es.",
				"commerce-platform": "Su parte de facturación e impuestos sigue viva hoy como hermes, en nominal.es."
			},
			"nominal": {
	"obex": {
		"tagline": "Una identidad para cada app que construyas.",
		"summary": "Una sola sesión de obex lleva permisos acotados a través de todas las apps de nominal, además de acceso de terceros enlazado, como las instalaciones de GitHub App.",
		"stat": {
			"value": "",
			"label": ""
		},
		"points": [
			"Inspector de sesiones",
			"Registro de auditoría completo",
			"SSO de organización",
			"Claves de API acotadas"
		]
	},
	"eris": {
		"tagline": "Mantén contentos a tus usuarios, automáticamente.",
		"summary": "Añade un fragmento de código a tu producto. Los usuarios reciben respuestas sugeridas antes de que se abra siquiera un ticket. La IA lo redacta, una persona lo envía.",
		"stat": {
			"value": "",
			"label": ""
		},
		"points": [
			"Sugerencias inteligentes, con una persona al mando",
			"Conocimiento que se acumula",
			"Widget, plataforma o Discord",
			"Resoluciones coherentes"
		]
	},
	"hermes": {
		"tagline": "Cobra desde cualquier lugar, cumpliendo la normativa.",
		"summary": "La misma configuración de facturación gestiona suscripciones recurrentes o cobros únicos, calcula el impuesto de cada país y lo declara, incluido Verifactu, automáticamente.",
		"stat": {
			"value": "",
			"label": ""
		},
		"points": [
			"Cientos de países",
			"Cumplimiento fiscal de la UE",
			"De proyecto personal a empresa",
			"Facturación flexible"
		]
	},
	"kinesis": {
		"tagline": "Entiende tu producto a cualquier escala.",
		"summary": "Eventos desde web, móvil o backend, validados contra esquemas tipados y mostrados en paneles en tiempo real.",
		"stat": {
			"value": "1.000.000+",
			"label": "eventos procesados por hora"
		},
		"points": [
			"Implementación facilísima",
			"Autoalojado o gestionado",
			"Esquemas tipados y extensibles",
			"Portales bonitos y fiables"
		]
	},
	"archon": {
		"tagline": "Trae tu propio hardware. Nosotros nos encargamos del resto.",
		"summary": "Gestiona tus propias máquinas de forma remota y despliega contenedores directamente desde GitHub o GitLab, con copias de seguridad incluidas.",
		"stat": {
			"value": "",
			"label": ""
		},
		"points": [
			"Gestión remota de máquinas",
			"Contenedores guiados por git",
			"Copias de seguridad bajo demanda",
			"Acceso granular para el equipo"
		]
	}
},
			"graveyard": {
				"slate": {
	"name": "slate",
	"tag": "TFG de Bachillerato",
	"year": "2019",
	"epitaph": "Puso nota a los deberes de todos. El tribunal le puso un 10.",
	"cause": "La graduación (con un 10).",
	"summary": "Un «Google Classroom» local para el instituto: la pizarra digital se sincronizaba automáticamente con los cuadernos de los alumnos, con seguimiento de notas, entregas e incluso eventos del centro. App nativa de Android y versión web, backend en PHP. Nota: 10/10."
},
				"sodge": {
					"name": "sodge",
					"tag": "Experimento personal",
					"year": "c. 2017",
					"epitaph": "Emparejaba a la gente por intereses con redes neuronales antes de que estuviera de moda. Nunca se emparejó con un solo usuario.",
					"cause": "Causas naturales (sin usuarios).",
					"summary": "Una red social que te mostraba automáticamente gente con intereses parecidos, con emparejamiento de palabras sobre redes neuronales, mucho antes de que la IA se hiciera popular. Web y Android, backend en PHP."
				},
				"feed": {
					"name": "thememepage",
					"tag": "Experimento personal",
					"year": "c. 2014",
					"epitaph": "Scroll infinito. Infinito es una palabra generosa: la lista tenía una docena de vídeos y exactamente un usuario.",
					"cause": "Se quedó sin vídeos.",
					"summary": "Una página estilo TikTok para hacer scroll sin fin por vídeos graciosos de internet, años antes de que el contenido vertical existiera. La lista era corta y yo era el único usuario. JavaScript."
				},
				"greenie": {
					"name": "greenie",
					"tag": "Proyecto académico",
					"year": "2023",
					"epitaph": "Sabía decirte que tu planta se moría. No sabía evitarlo.",
					"cause": "Me gradué. Las plantas no.",
					"summary": "Una app solo para Android con backend en Python: haz una foto a cualquier planta y mira lo sana que está, con un modelo entrenado en local con PyTorch."
				},
			"openagv": {
				"name": "openagv",
				"tag": "Proyecto académico",
				"year": "2021",
				"epitaph": "Esquivaba todos los obstáculos de la sala. La fecha de entrega no salía en el radar.",
				"cause": "Fecha de entrega (no detectada por el radar).",
				"summary": "Un AGV que navegaba automáticamente de A a B sobre ruedas omnidireccionales. Escrito en C, con un radar con una interfaz completa y control remoto por Bluetooth con evitación automática de obstáculos."
			}
			},
			"clickMore": [
				"¿Otra vez? Me encanta.",
				"¿Sigues ahí? Respeto.",
				"Se me va a caer la cola.",
				"¿Esto es un juego? Me gusta este juego.",
				"Más boops. Más boops.",
				"Diez clics más para otro premio. Llevo la cuenta."
			],
			"photos": {
				"cruise": {
					"caption": "La hora dorada, en un crucero",
					"alt": "Quique de pie en la cubierta de un crucero al atardecer"
				},
				"sister": {
					"caption": "Con mi hermana, atrapados en un espejo",
					"alt": "Quique y su hermana reflejados en un espejo redondo en un patio soleado"
				},
				"gf": {
					"caption": "Un paseo con mi novia, persiguiendo el atardecer",
					"alt": "Quique y su novia sonriendo en un paseo por una colina al atardecer"
				},
				"bee": {
					"caption": "No soy yo: una abeja en mi lavanda",
					"alt": "Un abejorro sobre flores de lavanda en el jardín"
				}
			},
			"loves": {
				"sackboy": {
					"name": "LittleBigPlanet",
					"tag": "Juega. Crea. Comparte.",
					"text": "Sackboy demostró que un juego puede ser una caja de herramientas. Construir niveles y compartirlos era la mitad de la diversión, y probablemente de ahí viene mi manía de «ya lo construyo yo»."
				},
				"tomb": {
					"name": "Tomb Raider",
					"tag": "Lara, en glorioso low-poly",
					"text": "Ruinas, puzles y una paciencia asombrosa. La Lara original sigue pareciendo un puñado de triángulos y sigue sintiéndose como una aventura."
				},
				"mindstorms": {
					"name": "LEGO Mindstorms",
					"tag": "Donde empezaron los robots",
					"text": "Un ladrillo que conducía y un sensor que veía. Mucho antes del grado de robótica, y antes de un AGV con su propio radar, hubo un robot de LEGO por el suelo de mi casa."
				},
				"crash": {
					"name": "Crash Bandicoot",
					"tag": "Gira, salta, repite",
					"text": "Alegría y rabia noventeras a partes iguales. Sigue siendo el mejor argumento de que un giro resuelve casi todos los problemas."
				}
			},
			"places": {
				"barcelona": {
					"name": "Barcelona",
					"note": "La base. Donde empieza y acaba cada viaje."
				},
			"stockholm": {
				"name": "Estocolmo",
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
				"name": "Valencia",
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
				"name": "París",
				"note": ""
			},
			"bergen": {
				"name": "Bergen",
				"note": ""
			},
			"amsterdam": {
				"name": "Ámsterdam",
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
				"name": "Hamburgo",
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
				"name": "Míconos",
				"note": ""
			},
			"venice": {
				"name": "Venecia",
				"note": ""
			},
			"piraeus": {
				"name": "El Pireo (Atenas)",
				"note": ""
			},
			"ephesus": {
				"name": "Éfeso",
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
				"name": "Túnez",
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
				"name": "Estambul",
				"note": ""
			},
			"naples": {
				"name": "Nápoles",
				"note": ""
			},
			"livorno": {
				"name": "Livorno (Florencia)",
				"note": ""
			},
			"toulon": {
				"name": "Tolón",
				"note": ""
			},
			"monaco": {
				"name": "Mónaco",
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
				"name": "Palermo",
				"note": ""
			},
			"marseille": {
				"name": "Marsella",
				"note": ""
			},
			"genoa": {
				"name": "Génova",
				"note": ""
			},
			"messina": {
				"name": "Mesina",
				"note": ""
			},
			"valletta": {
				"name": "La Valeta",
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
				"name": "Puerto Cañaveral",
				"note": ""
			},
			"orlando": {
				"name": "Orlando",
				"note": ""
			},
			"tenerife": {
				"name": "Tenerife",
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
