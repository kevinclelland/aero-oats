import { c as create_ssr_component, e as escape, a as add_attribute, l as each, v as validate_component, m as missing_component } from "../../../chunks/index3.js";
import { f as formatDate } from "../../../chunks/utils.js";
import { A as Avatar } from "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `
${$$result.head += `<!-- HEAD_svelte-ylbs26_START -->${$$result.title = `<title>${escape(data.meta.title)}</title>`, ""}<meta property="og:type" content="article"><meta property="og:title"${add_attribute("content", data.meta.title, 0)}><!-- HEAD_svelte-ylbs26_END -->`, ""}



<header class="w-full"><nav class="flex flex-col md:flex-row gap-3 items-center justify-around py-5 px-4"><div class="md:w-2/12 text-center md:text-left"><p class="font-serif text-xl font-bold">By Aero Oats.</p>
        <p class="font-serif text-sm">Bi-weekly triathlon newsletter for you to chew through while you munch your morning oats.</p></div>
      <div><h1 class="font-serif text-4xl font-bold text-center">THE RACE REPORT ALMANAC</h1>
        <h1 class="text-center text-2xl">Global Distribution</h1></div>
      <div class="flex md:w-2/12 w-full flex-col items-center justify-center border border-black text-xl font-bold"><h1>COMMUNITY SUPPLIED</h1>
        <h1>AND TESTED!</h1></div></nav></header>
  
    <section class="mx-auto flex items-center justify-between border-t border-b border-black py-3 px-5 font-thin"><div>${each(data.meta.categories, (category) => {
    return `<span class="surface-4 px-2 mx-2 border border-black rounded-md">#${escape(category)}</span>`;
  })}</div>
      <span>Raced on ${escape(formatDate(data.meta.date))}</span>
      <div class="flex items-center">${validate_component(Avatar, "Avatar").$$render($$result, { src: data.meta.avatar, width: "w-10" }, {}, {})}<p class="px-2">Author: ${escape(data.meta.user)}</p></div></section>

	<section class="py-5"><h1 class="text-center font-serif text-7xl p-2">${escape(data.meta.title)}</h1>
		<h1 class="mt-5 text-center font-serif text-4xl italic p-2">${escape(data.meta.description)}</h1></section>


  
	<div class="p-10"><p>${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</p></div>`;
});
export {
  Page as default
};
