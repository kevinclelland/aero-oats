import * as universal from '../entries/pages/athleteprofiles/_layout.ts.js';

export const index = 2;
export const component = async () =>
	(await import('../entries/pages/athleteprofiles/_layout.svelte.js')).default;
export { universal };
export const universal_id = 'src/routes/athleteprofiles/+layout.ts';
export const imports = [
	'_app/immutable/nodes/2.9916775f.js',
	'_app/immutable/chunks/index.460b5f26.js',
	'_app/immutable/chunks/singletons.a0a9b8d0.js',
	'_app/immutable/chunks/index.8bec3548.js'
];
export const stylesheets = [];
export const fonts = [];
