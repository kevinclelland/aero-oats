import { c as create_ssr_component } from '../../../chunks/index3.js';
import { gsap } from 'gsap/dist/gsap.js';
import { Flip } from 'gsap/dist/Flip.js';
function client_method(key) {
	{
		if (key === 'before_navigate' || key === 'after_navigate') {
			return () => {};
		} else {
			const name_lookup = {
				disable_scroll_handling: 'disableScrollHandling',
				preload_data: 'preloadData',
				preload_code: 'preloadCode',
				invalidate_all: 'invalidateAll'
			};
			return () => {
				throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
			};
		}
	}
}
const beforeNavigate = /* @__PURE__ */ client_method('before_navigate');
const afterNavigate = /* @__PURE__ */ client_method('after_navigate');
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	gsap.registerPlugin(Flip);
	let state;
	beforeNavigate(async () => {
		state = Flip.getState('.cover, .title');
	});
	afterNavigate(async () => {
		Flip.from(state, {
			targets: '.cover, .title',
			duration: 0.3,
			scale: true,
			ease: 'power1.easeOut'
		});
	});
	return `${slots.default ? slots.default({}) : ``}`;
});
export { Layout as default };
