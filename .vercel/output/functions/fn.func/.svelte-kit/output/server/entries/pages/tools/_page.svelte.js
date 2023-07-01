import { c as create_ssr_component, v as validate_component } from '../../../chunks/index3.js';
import { T as Tools } from '../../../chunks/Tools.js';
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<div class="flex mx-auto grid grid-cols-1 p-4 justify-items-center"><div class="col-span-1 text-7xl p-4">Tools</div>

    <div class="col-span-1 p-4">${validate_component(Tools, 'Tools').$$render(
			$$result,
			{},
			{},
			{}
		)}</div></div>`;
});
export { Page as default };
