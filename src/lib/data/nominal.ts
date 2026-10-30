// Structure only. Taglines and features live in src/lib/i18n/<lang>.ts (content.nominal).
export type NominalId = 'obex' | 'eris' | 'hermes' | 'kinesis' | 'archon';

export const nominal: { id: NominalId; url: string; color: 'pink' | 'orange' | 'blue' | 'purple' | 'green' }[] = [
	{ id: 'obex', url: 'https://nominal.es/obex', color: 'blue' },
	{ id: 'eris', url: 'https://nominal.es/eris', color: 'pink' },
	{ id: 'hermes', url: 'https://nominal.es/hermes', color: 'orange' },
	{ id: 'kinesis', url: 'https://nominal.es/kinesis', color: 'purple' },
	{ id: 'archon', url: 'https://nominal.es/archon', color: 'green' }
];
