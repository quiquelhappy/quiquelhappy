export type Snippet = {
    name: string
    description: string
    article: string
    languages: Language[]
    techniques: Record<Technique | string, string>
    tools: Record<Tool | string, string>
    frameworks: Record<Tool | string, string>
}

type Project = {
    name: string,
    description: string
    snippets: Snippet[]
}

export type Language = 'typescript' | 'go' | 'c' | 'c++' | 'css' | 'javascript' | 'php'
export type Technique = 'sharding' | 'microservices' | 'statistics' | 'hosting' | 'ai' | 'commerce'
export type Framework = 'svelte' | 'vue' | 'tailwind'
export type Tool = 'docker' | 'aws' | 'linux'

export const projects: Project[] = [
    {
        name: 'serverbench.io',
        description: '',
        snippets: [
            {
                name: 'compute-intensive hosting',
                description: 'offers a hosting service for running game servers, which are known to be resource intensive, and among the most difficult to manage correctly',
                article: 'compute-intensive-hosting',
                languages: ['go', 'javascript', 'typescript', 'php'],
                techniques: {
                    hosting: '',
                },
                tools: {
                    docker: ''
                },
                frameworks: {}
            },
            {
                name: 'community automoderation',
                description: 'automatically moderates conversations on communities using perspectiveapi.com. high ingest capacity. statistical approach, keeping recurring toxic participants out of the conversation',
                article: 'compute-intensive-hosting',
                languages: ['javascript', 'typescript'],
                techniques: {
                    statistics: '',
                    ai: '',
                },
                tools: {
                    docker: ''
                },
                frameworks: {}
            },
            {
                name: 'creator studio',
                description: 'marketing dashboard focused on creators, creating videos and posts, about the communities they love. YouTube, TikTok and Twitch authentication, post monetization, and analytics',
                article: 'compute-intensive-hosting',
                languages: ['javascript', 'typescript'],
                techniques: {
                    marketing: '',
                    ads: '',
                },
                tools: {
                    docker: ''
                },
                frameworks: {}
            },
            {
                name: 'SEO studio',
                description: 'seo panel with integrated voting system (listing websites) for members to vote on, with intelligent voting site suggestion to maximize delivery per member vote on third party sites',
                article: 'compute-intensive-hosting',
                languages: ['javascript', 'typescript'],
                techniques: {
                    marketing: '',
                    statistics: '',
                },
                tools: {
                    docker: ''
                },
                frameworks: {}
            },
            {
                name: 'CMS/website builder',
                description: 'CRM/website builder with templating engine. integrated template marketplace. ability to create multiple pages, with module reusability',
                article: 'compute-intensive-hosting',
                languages: ['javascript', 'typescript'],
                techniques: {
                    cms: '',
                    commerce: '',
                },
                tools: {
                    docker: ''
                },
                frameworks: {}
            },
            {
                name: 'commerce platform',
                description: 'online multiplayer games can use the commerce platform to sell in-game collectible, badges, boosters, and more. each community can customize their webstore.',
                article: 'compute-intensive-hosting',
                languages: ['javascript', 'typescript'],
                techniques: {
                    commerce: '',
                },
                tools: {
                    docker: ''
                },
                frameworks: {}
            },
            {
                name: 'role-based permissions',
                description: 'teams can manage communities with high permission granularity. this allows communities to have roles for the marketing, commerce, support and moderation teams.',
                article: 'compute-intensive-hosting',
                languages: ['javascript', 'typescript'],
                techniques: {
                    commerce: '',
                },
                tools: {
                    docker: ''
                },
                frameworks: {}
            },
            {
                name: 'community analytics',
                description: 'allows communities to understand how their community is evolving. it has all expected statistics, plus holiday prediction, and data infered by the SEO and creator systems.',
                article: 'compute-intensive-hosting',
                languages: ['javascript', 'typescript'],
                techniques: {
                    statistics: '',
                },
                tools: {
                    docker: ''
                },
                frameworks: {}
            },
            {
                name: 'customer tracking',
                description: 'tracks customers across different mediums (games, browser, discord servers) in order to build an accurate customer representation and interest profile to upsell webstore content or deliver creator studio media.',
                article: 'compute-intensive-hosting',
                languages: ['javascript', 'typescript'],
                techniques: {
                    tracking: '',
                    ads: '',
                },
                tools: {
                    docker: ''
                },
                frameworks: {}
            },
        ]
    },
    {
        name: 'grifpkg.com',
        description: '',
        snippets: [
            {
                name: 'jar package manager',
                description: 'package manager focused on automatically importing, updating, and managing dependencies for java software',
                article: 'compute-intensive-hosting',
                languages: ['go', 'javascript', 'typescript', 'php'],
                techniques: {
                    cdn: '',
                },
                tools: {
                    docker: ''
                },
                frameworks: {}
            },
            {
                name: 'paid plugins',
                description: 'ability to sell dependencies, or authenticate on previous dependency sites with existing purchases to authorize downloads',
                article: 'compute-intensive-hosting',
                languages: ['go', 'javascript', 'typescript', 'php'],
                techniques: {
                    cdn: '',
                    commerce: '',
                },
                tools: {
                    docker: ''
                },
                frameworks: {}
            },
            {
                name: 'automatic indexing',
                description: 'automatically indexes libraries and software onto our package manager, with rich metadata and file caching for fast edge delivery.',
                article: 'compute-intensive-hosting',
                languages: ['go', 'javascript', 'typescript', 'php'],
                techniques: {
                    cdn: '',
                    scraping: '',
                },
                tools: {
                    docker: ''
                },
                frameworks: {}
            },
            {
                name: 'dependency compiling',
                description: 'some dependencies don\'t provide a precompiled .jar. the package manager automatically hooks into git repositories, and builds them accordingly using maven or gradle.',
                article: 'compute-intensive-hosting',
                languages: ['go', 'javascript', 'typescript', 'php'],
                techniques: {
                    git: '',
                },
                tools: {
                    docker: ''
                },
                frameworks: {}
            },
            {
                name: 'hosted download pages',
                description: 'OSS develoepers are able to get revenue by enabling hosted download pages with advertising. The advertisting comes from our own ad pool.',
                article: 'compute-intensive-hosting',
                languages: ['go', 'javascript', 'typescript', 'php'],
                techniques: {
                    ads: '',
                },
                tools: {
                    docker: ''
                },
                frameworks: {}
            },
            {
                name: 'promoted software',
                description: 'developers are able to advertise their paid plugins on our site from in-site advertising and text recommendations on the cli.',
                article: 'compute-intensive-hosting',
                languages: ['go', 'javascript', 'typescript', 'php'],
                techniques: {
                    ads: '',
                },
                tools: {
                    docker: ''
                },
                frameworks: {}
            },
            {
                name: 'vulnerability detection',
                description: 'dependencies are fingerprinted and can be marked as vunerable, notifying developers the use of insecure dependencies.',
                article: 'compute-intensive-hosting',
                languages: ['go', 'javascript', 'typescript', 'php'],
                techniques: {
                    cybersecurity: '',
                },
                tools: {
                    docker: ''
                },
                frameworks: {}
            },
            {
                name: 'automatic local importing',
                description: 'automatically detect used dependencies on a local project to match the registry identifier, quickly setting up the dependencies for existing projects',
                article: 'compute-intensive-hosting',
                languages: ['go', 'javascript', 'typescript', 'php'],
                techniques: {},
                tools: {
                    docker: ''
                },
                frameworks: {}
            },
        ]
    },
]

export function getTechniques() {
    const arrayOfArraysOfArrays = projects.map(p => p.snippets.map(s => Object.keys(s.techniques)))
    const techniques: string[] = []
    for (const arrayOfArrays of arrayOfArraysOfArrays) {
        for (const arrayOfStrings of arrayOfArrays) {
            for (const string of arrayOfStrings) {
                if (!techniques.includes(string)) {
                    techniques.push(string)
                }
            }
        }
    }
}

export const ToolIcons: Record<Tool | string, string> = {
    docker: 'docker',
    aws: 'amazonwebservices',
    linux: 'linux'
}

export const FrameworkIcons: Record<Framework | string, string> = {
    svelte: 'svelte',
    vue: 'vuejs',
    tailwind: 'tailwindcss'
}

export const LanguageIcons: Record<Language | string, string> = {
    go: 'go',
    c: 'c',
    'c++': 'cplusplus',
    javascript: 'javascript',
    typescript: 'typescript',
    php: 'php',
    css: 'css'
}