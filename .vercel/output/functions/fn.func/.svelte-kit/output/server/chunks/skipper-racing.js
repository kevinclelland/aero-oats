import { c as create_ssr_component } from './index3.js';
const metadata = {
	title: 'Skipper Racing',
	description: 'Joe Skipper is seeking redemption this weekend.',
	date: '2022-4-16',
	categories: ['sveltekit', 'svelte'],
	published: true,
	avatar: 'https://i.pravatar.cc/',
	user: 'Dude Outrageous',
	photo: 'https://protriathletes.org/wp-content/uploads/2022/03/unnamed-682x1024.jpg'
};
const Skipper_racing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<h1>Svelte</h1>
<blockquote><p>Media inside the <strong>static</strong> folder is served from <code>/</code>.</p>
<br></blockquote>
<p><img src="favicon.ico" alt="Svelte"></p>`;
});
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(
	/* @__PURE__ */ Object.defineProperty(
		{
			__proto__: null,
			default: Skipper_racing,
			metadata
		},
		Symbol.toStringTag,
		{ value: 'Module' }
	)
);
export { __vite_glob_0_2 as _ };
