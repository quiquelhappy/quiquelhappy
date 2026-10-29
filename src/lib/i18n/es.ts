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
			language: 'Idioma'
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
			b3: 'serverbench, grifpkg, purecore',
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
			p2: 'De día trabajo en una empresa que construye sistemas aeroespaciales, de defensa y seguridad, con profundas raíces en navegación por satélite y software de misión crítica, y en una empresa de robótica que hace automatización industrial, sobre todo en automoción. De noche construyo herramientas para comunidades: una tienda, un hosting, un gestor de paquetes y un motor de analítica, casi todo desde cero.',
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
			emptySay: 'Nada coincide. Ni yo lo he encontrado.'
		},
		projects: {
			eyebrow: 'Proyectos',
			h2a: 'Cosas que hice',
			h2b: 'porque no había otra.',
			lede: 'Nada de lo que había encajaba, así que construí una tienda, un hosting, un gestor de paquetes y un motor de analítica.',
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
			made: 'Hecho cerca de Barcelona con Svelte 5, una cantidad irrazonable de café y un pastor australiano blue merle llamado Gandalf.',
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
			language: 'Cambiar idioma'
		},
		mosaic: {
			t12: '12 bloques fijados. ¿Esto es un gráfico de contribuciones o un Picasso?',
			say12: 'Ooh, ¿estamos pintando? Me encanta pintar.',
			t36: '36 bloques. Esto ya es oficialmente una galería.'
		},
		mascot: {
			aria: 'Gandalf, un pastor australiano blue merle. Haz clic para una sorpresa.',
			away: '(._.) Gandalf te echa de menos. Vuelve',
			startle: ['¡Guau!', '¡Uy!', '¡Demasiado cerca!', 'Nop. Adiós.'],
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
			general: [
				'Guau. No me hagas caso. Ahora vivo en tu pantalla.',
				'Yo pastoreo cosas. Sobre todo plazos.',
				'No pasarás... sin mirar el botón de contratar.',
				'Quique me dibujó en 24x24 píxeles. Creo que está orgulloso.',
				'Buenos chicos: 1. Premios: 0. Por favor, aconsejad.',
				'Conozco tres túneles. No me preguntes por el cuarto.',
				'psst. el botón de contratar funciona.',
				'Un merle nunca llega tarde. Ni pronto. Llega justo cuando se propone.',
				'Prueba Ctrl+K. O Cmd+K. No soy exigente.',
				'Hay un código Konami por aquí. Yo no he dicho nada.'
			],
			top: ['¡Guau! Soy Gandalf. Quique es un poco tímido, así que hablo yo.', 'Baja. Lo bueno no está en la portada.'],
			about: ['Esos logros son reales. El confeti es extra.', 'Él empezó a programar a los nueve. Yo, al arrancar.'],
			experience: ['Prueba los filtros. Son muy satisfactorios.', 'Filtra por Go. Luego trae la pelota. Espera, eso no es un filtro.', 'Todas las tarjetas se abren. Todas.'],
			projects: ['Hizo todo esto. Sí, el gestor de paquetes también.', 'serverbench es una pila entera, no un solo proyecto.'],
			hire: ['Aquí es donde le escribes un correo.', 'Salúdale. Responde. Lo he visto.', 'quique@osuna.dev. Esperaré aquí. Los buenos chicos esperan.']
		},
		clickLines: ['¡Boop!', '¡Guau!', 'Tengo hitbox, ¿sabes?', 'Las caricias en la barriga son extra.', 'Haz clic 10 veces. Te reto.', 'Siete. Vas en serio.', 'Nueve. El diez va a estar genial.'],
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
			health: { label: 'Salud y ensayos clínicos', blurb: 'Aplicaciones que ayudan a entender y gestionar la investigación clínica.' }
		},
		contexts: { product: 'Mis propios productos', industry: 'Trabajo en la industria', education: 'Formación' },
		sources: {
			serverbench: 'serverbench',
			purecore: 'purecore',
			grifpkg: 'grifpkg',
			'all of the above': 'todo lo anterior',
			various: 'varios',
			UAB: 'UAB',
			'Aerospace, defense and security company': 'Empresa aeroespacial, de defensa y seguridad',
			'Robotics company': 'Empresa de robótica',
			'Salesians Sarrià': 'Salesians Sarrià',
			'Health technology': 'Tecnología sanitaria'
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
				highlights: ['Unión de identidades entre tres medios', 'Alimenta recomendaciones de tienda y creadores', 'Construido con las lecciones de privacidad de purecore']
			},
			'realtime-ingest': {
				title: 'Ingesta en tiempo real por sockets',
				summary: 'Un backend de analítica basado en sockets que mantiene conexiones largas y las convierte en sesiones.',
				detail:
					'purecore mantiene las conexiones abiertas y lee la sesión directamente de la conexión, en lugar de cookies o identificadores de dispositivo. Eso mantiene el modelo de datos simple y honesto: si el socket es el mismo, la sesión es la misma.',
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
			}
		},
		projects: {
			serverbench: {
				kind: 'E-commerce, analítica y hosting',
				blurb:
					'Una plataforma completa para comunidades en línea, especialmente servidores de juegos: una plataforma de comercio para bienes digitales, una herramienta de analítica para comunidades y un orquestador de hosting «trae tu propio dispositivo».',
				points: [
					'Tienda: las comunidades venden coleccionables, insignias y potenciadores, con una tienda web personalizable para cada una',
					'Hosting: un orquestador basado en Docker para servidores de juegos muy exigentes',
					'Estudios: herramientas de creadores, SEO y CMS que comparten datos con un único núcleo de analítica'
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
			purecore: {
				kind: 'Analítica en tiempo real',
				blurb:
					'Una plataforma de analítica basada en sockets con altos estándares de seguridad. Las sesiones se vinculan solo a partir de datos de la conexión, sin huella digital del dispositivo.',
				points: ['Vinculación de sesiones basada en la propia conexión', 'Privacidad por diseño, sin atajos de huella digital', 'Ingesta en tiempo real mediante WebSockets']
			},
			purevanilla: {
				kind: 'Servidor de comunidad',
				blurb:
					'Un proyecto de servidor de Minecraft vanilla centrado en una experiencia limpia y fiel al original. Gestionado como un producto, con infraestructura real detrás de un juego.',
				points: ['Filosofía vanilla primero: menos mods, más cuidado', 'Una comunidad viva que necesita disponibilidad', 'Donde empezaron muchas de las lecciones de hosting']
			}
		}
	}
};
