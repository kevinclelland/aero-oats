import { c as create_ssr_component, l as each, a as add_attribute, e as escape, v as validate_component } from "../../../chunks/index3.js";
import { f as formatDate } from "../../../chunks/utils.js";
import { A as Avatar } from "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1rbe4e4_START -->${$$result.title = `<title>The Blog</title>`, ""}<!-- HEAD_svelte-1rbe4e4_END -->`, ""}


<section><h1 class="text-2xl">All Posts</h1>

	<div class="mx-auto text-token grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
		${each(data.posts, (post) => {
    return `<div class="col-span-1 card card-hover max-w-2xl overflow-hidden"><header class="flex justify-around"><img${add_attribute("src", post.photo, 0)} class="bg-black/50 max-h-80" alt="Post"></header>
			<div class="p-4 space-y-4"><h3 class="h3"><a${add_attribute("href", post.slug, 0)} class="title">${escape(post.title)}</a></h3>
				
				<article><p class="description">${escape(post.description)}</p>
	
			</article></div>
			
			<hr class="opacity-50">
			<footer class="p-4 flex justify-start items-center space-x-4">${validate_component(Avatar, "Avatar").$$render($$result, { src: post.avatar, width: "w-8" }, {}, {})}
				<div class="flex-auto flex justify-between items-center"><h6 class="font-bold">${escape(post.user)}</h6>
					<small class="date">On ${escape(formatDate(post.date))}</small>
				</div></footer>
		</div>`;
  })}</div></section>`;
});
export {
  Page as default
};
