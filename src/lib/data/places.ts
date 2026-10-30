// The travel map reads from here. Text (name, note) lives in src/lib/i18n/<lang>.ts under content.places, keyed by id.
export type PlaceKind = 'home' | 'cruise' | 'trip';

export type Place = {
	id: string;
	kind: PlaceKind;
	lat: number;
	lon: number;
	year?: number;
};

/** A line on the map: the places a cruise or a trip went through, in order (ids from `places`). */
export type Route = {
	id: string;
	/** ship or trip name, shown as is in every language */
	name: string;
	kind: 'cruise' | 'trip';
	stops: string[];
	year?: number;
	/** not done yet */
	upcoming?: boolean;
};

export const places: Place[] = [
	{ id: 'barcelona', kind: 'home', lat: 41.3851, lon: 2.1734 },
	{ id: 'stockholm', kind: 'cruise', lat: 59.3293, lon: 18.0686 },
	{ id: 'lisbon', kind: 'cruise', lat: 38.7223, lon: -9.1393 },
	{ id: 'vigo', kind: 'cruise', lat: 42.2406, lon: -8.7207 },
	{ id: 'valencia', kind: 'cruise', lat: 39.4699, lon: -0.3763 },
	{ id: 'harwich', kind: 'cruise', lat: 51.944, lon: 1.287 },
	{ id: 'copenhagen', kind: 'cruise', lat: 55.6761, lon: 12.5683 },
	{ id: 'warnemunde', kind: 'cruise', lat: 54.1773, lon: 12.0846 },
	{ id: 'paris', kind: 'trip', lat: 48.8566, lon: 2.3522 },
	{ id: 'bergen', kind: 'cruise', lat: 60.3913, lon: 5.3221 },
	{ id: 'amsterdam', kind: 'cruise', lat: 52.3676, lon: 4.9041 },
	{ id: 'bremerhaven', kind: 'cruise', lat: 53.5396, lon: 8.5809 },
	{ id: 'stavanger', kind: 'cruise', lat: 58.97, lon: 5.7331 },
	{ id: 'olden', kind: 'cruise', lat: 61.835, lon: 6.8097 },
	{ id: 'andalsnes', kind: 'cruise', lat: 62.5675, lon: 7.687 },
	{ id: 'geiranger', kind: 'cruise', lat: 62.1008, lon: 7.2056 },
	{ id: 'kiel', kind: 'cruise', lat: 54.3233, lon: 10.1228 },
	{ id: 'trondheim', kind: 'cruise', lat: 63.4305, lon: 10.3951 },
	{ id: 'leknes', kind: 'cruise', lat: 68.147, lon: 13.613 },
	{ id: 'tromso', kind: 'cruise', lat: 69.6492, lon: 18.9553 },
	{ id: 'honningsvag', kind: 'cruise', lat: 70.9827, lon: 25.97 },
	{ id: 'alesund', kind: 'cruise', lat: 62.4722, lon: 6.1549 },
	{ id: 'hamburg', kind: 'cruise', lat: 53.5511, lon: 9.9937 },
	{ id: 'ancona', kind: 'cruise', lat: 43.6158, lon: 13.5189 },
	{ id: 'santorini', kind: 'cruise', lat: 36.4166, lon: 25.432 },
	{ id: 'kotor', kind: 'cruise', lat: 42.4247, lon: 18.7712 },
	{ id: 'mykonos', kind: 'cruise', lat: 37.4467, lon: 25.3289 },
	{ id: 'venice', kind: 'cruise', lat: 45.4408, lon: 12.3155 },
	{ id: 'piraeus', kind: 'cruise', lat: 37.942, lon: 23.6465 },
	{ id: 'ephesus', kind: 'cruise', lat: 37.9411, lon: 27.3419 },
	{ id: 'dubrovnik', kind: 'cruise', lat: 42.6507, lon: 18.0944 },
	{ id: 'split', kind: 'cruise', lat: 43.5081, lon: 16.4402 },
	{ id: 'tunis', kind: 'cruise', lat: 36.8065, lon: 10.1815 },
	{ id: 'rome', kind: 'cruise', lat: 41.9028, lon: 12.4964 },
	{ id: 'izmir', kind: 'cruise', lat: 38.4237, lon: 27.1428 },
	{ id: 'istanbul', kind: 'cruise', lat: 41.0082, lon: 28.9784 },
	{ id: 'naples', kind: 'cruise', lat: 40.8518, lon: 14.2681 },
	{ id: 'livorno', kind: 'cruise', lat: 43.5485, lon: 10.3106 },
	{ id: 'toulon', kind: 'cruise', lat: 43.1242, lon: 5.928 },
	{ id: 'monaco', kind: 'cruise', lat: 43.7384, lon: 7.4246 },
	{ id: 'ajaccio', kind: 'cruise', lat: 41.9192, lon: 8.7386 },
	{ id: 'bari', kind: 'cruise', lat: 41.1171, lon: 16.8719 },
	{ id: 'corfu', kind: 'cruise', lat: 39.6243, lon: 19.9217 },
	{ id: 'palermo', kind: 'cruise', lat: 38.1157, lon: 13.3615 },
	{ id: 'marseille', kind: 'cruise', lat: 43.2965, lon: 5.3698 },
	{ id: 'genoa', kind: 'cruise', lat: 44.4056, lon: 8.9463 },
	{ id: 'messina', kind: 'cruise', lat: 38.1938, lon: 15.554 },
	{ id: 'valletta', kind: 'cruise', lat: 35.8989, lon: 14.5146 },
	{ id: 'granada', kind: 'trip', lat: 37.1773, lon: -3.5986 },
	{ id: 'cadiz', kind: 'trip', lat: 36.5271, lon: -6.2886 },
	{ id: 'fuengirola', kind: 'trip', lat: 36.54, lon: -4.6247 },
	{ id: 'cartagena', kind: 'trip', lat: 37.6257, lon: -0.9966 },
	{ id: 'funchal', kind: 'cruise', lat: 32.6669, lon: -16.9241 },
	{ id: 'san-juan', kind: 'cruise', lat: 18.4655, lon: -66.1057 },
	{ id: 'port-canaveral', kind: 'cruise', lat: 28.4108, lon: -80.6188 },
	{ id: 'orlando', kind: 'trip', lat: 28.5383, lon: -81.3792 },
];

export const routes: Route[] = [
	{ id: 'pullmantur-2009', name: 'Pullmantur Sovereign', kind: 'cruise', year: 2009, stops: ['barcelona', 'monaco', 'livorno', 'rome', 'tunis'] },
	{ id: 'jade-2012', name: 'Norwegian Jade', kind: 'cruise', year: 2012, stops: ['venice', 'split', 'dubrovnik', 'piraeus', 'ephesus'] },
	{ id: 'spirit-2013', name: 'Norwegian Spirit', kind: 'cruise', year: 2013, stops: ['barcelona', 'toulon', 'livorno', 'rome', 'naples', 'tunis', 'venice', 'piraeus', 'mykonos', 'izmir', 'istanbul'] },
	{ id: 'pullmantur-2014', name: 'Pullmantur Sovereign', kind: 'cruise', year: 2014, stops: ['barcelona', 'ajaccio', 'naples', 'palermo', 'corfu', 'kotor', 'bari', 'venice'] },
	{ id: 'luminosa-2015', name: 'Costa Luminosa', kind: 'cruise', year: 2015, stops: ['barcelona', 'valencia', 'lisbon', 'vigo', 'paris', 'harwich', 'copenhagen', 'warnemunde', 'stockholm'] },
	{ id: 'xmas-2015', name: 'Christmas trip', kind: 'trip', year: 2015, stops: ['barcelona', 'valencia', 'granada'] },
	{ id: 'magica-2017', name: 'Costa Magica', kind: 'cruise', year: 2017, stops: ['barcelona', 'amsterdam', 'bremerhaven', 'stavanger', 'bergen', 'olden', 'geiranger', 'andalsnes'] },
	{ id: 'pacifica-2018', name: 'Costa Pacifica', kind: 'cruise', year: 2018, stops: ['kiel', 'bergen', 'andalsnes', 'trondheim', 'leknes', 'tromso', 'honningsvag', 'alesund', 'hamburg'] },
	{ id: 'xmas-2018', name: 'Christmas trip', kind: 'trip', year: 2018, stops: ['barcelona', 'cartagena', 'fuengirola', 'cadiz'] },
	{ id: 'lirica-2025', name: 'MSC Lírica', kind: 'cruise', year: 2025, stops: ['venice', 'ancona', 'mykonos', 'santorini', 'kotor', 'venice'] },
	{ id: 'europa-2025', name: 'MSC World Europa', kind: 'cruise', year: 2025, stops: ['barcelona', 'marseille', 'genoa', 'rome', 'messina', 'valletta', 'barcelona'] },
	{ id: 'grandiosa-2026', name: 'MSC Grandiosa', kind: 'cruise', year: 2026, stops: ['barcelona', 'funchal', 'san-juan', 'port-canaveral'], upcoming: true },
	{ id: 'orlando-2026', name: 'Orlando', kind: 'trip', year: 2026, stops: ['port-canaveral', 'orlando'], upcoming: true },
];
