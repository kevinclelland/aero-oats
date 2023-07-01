import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = 'src/routes/+layout.ts';
export const imports = [
	'_app/immutable/nodes/0.6cd5574b.js',
	'_app/immutable/chunks/index.460b5f26.js',
	'_app/immutable/chunks/index.8bec3548.js',
	'_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.a411719e.js'
];
export const stylesheets = [
	'_app/immutable/assets/0.aa796471.css',
	'_app/immutable/assets/ProgressBar.4f1e9ba5.css'
];
export const fonts = [];
