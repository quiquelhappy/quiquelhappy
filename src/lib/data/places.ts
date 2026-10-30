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
	kind: 'cruise' | 'trip';
	stops: string[];
	year?: number;
};

export const places: Place[] = [{ id: 'barcelona', kind: 'home', lat: 41.3851, lon: 2.1734 }];

export const routes: Route[] = [];
