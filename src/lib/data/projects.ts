// Structure only. Text lives in src/lib/i18n/<lang>.ts.
export type Project = {
	id: string;
	name: string;
	color: 'pink' | 'orange' | 'blue' | 'purple';
	url?: string;
	stack: string[];
};

export const projects: Project[] = [
	{ id: 'workhours', name: 'workhours', color: 'blue', url: 'https://workhours.es', stack: ['PWA', 'Offline-first', 'Verifactu'] },
	{ id: 'serverbench', name: 'serverbench', color: 'pink', url: 'https://serverbench.io', stack: ['Go','TypeScript','JavaScript','PHP','Docker'] },
	{ id: 'grifpkg', name: 'grifpkg', color: 'orange', url: 'https://grifpkg.com', stack: ['Go','TypeScript','PHP','Docker'] },
	{ id: 'purevanilla', name: 'PureVanilla', color: 'purple', url: 'https://purevanilla.co', stack: ['Linux','Docker'] }
];
