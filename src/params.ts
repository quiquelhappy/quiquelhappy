import { defineParams } from '@sveltejs/kit/params';

// `[[lang=lang]]` matches the extra languages. English lives at the root.
export const params = defineParams({
	lang: (param) => (['es', 'ca', 'de', 'fr'].includes(param) ? param : undefined)
});
