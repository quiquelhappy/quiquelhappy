// Structure only. Names, epitaphs and causes of death live in src/lib/i18n/<lang>.ts (content.graveyard).
// Oldest first.
export type GraveId = 'feed' | 'sodge' | 'slate' | 'openagv' | 'greenie';

export const graves: { id: GraveId; stack: string[]; moss: number; grade?: string }[] = [
	{ id: 'feed', stack: ['JavaScript'], moss: 3 },
	{ id: 'sodge', stack: ['PHP', 'Android', 'Neural networks'], moss: 2 },
	{ id: 'slate', stack: ['PHP', 'Android', 'Web'], moss: 1, grade: '10/10' },
	{ id: 'openagv', stack: ['C', 'Omniwheels', 'Radar', 'Bluetooth'], moss: 5 },
	{ id: 'greenie', stack: ['Python', 'Android', 'PyTorch'], moss: 4 }
];
