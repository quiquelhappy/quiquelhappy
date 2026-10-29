import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (param) => ['es', 'ca', 'de', 'fr'].includes(param);
