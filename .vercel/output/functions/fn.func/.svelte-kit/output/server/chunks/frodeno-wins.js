import { c as create_ssr_component } from './index3.js';
const metadata = {
	title: 'Frodeno wins Hamburg!',
	description: 'The GOAT is finally back to his winning ways at Ironman Hamburg.',
	date: '2022-4-14',
	categories: ['sveltekit', 'svelte'],
	published: true,
	avatar: 'https://source.unsplash.com/YOErFW8AfkI/128x128',
	user: 'Jack Sparrow',
	photo: 'https://protriathletes.org/wp-content/uploads/2022/07/IKT_7549.jpg'
};
const Frodeno_wins = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<h1>Markdown</h1>
<p>Hey <strong>friends</strong>! 👋</p>
<pre class="language-ts"><!-- HTML_TAG_START -->${`<code class="language-ts"></code>`}<!-- HTML_TAG_END --></pre>`;
});
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(
	/* @__PURE__ */ Object.defineProperty(
		{
			__proto__: null,
			default: Frodeno_wins,
			metadata
		},
		Symbol.toStringTag,
		{ value: 'Module' }
	)
);
export { __vite_glob_0_1 as _ };
