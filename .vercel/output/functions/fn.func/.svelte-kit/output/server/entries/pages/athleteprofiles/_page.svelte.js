import { c as create_ssr_component, l as each, e as escape, v as validate_component } from "../../../chunks/index3.js";
import { A as Avatar } from "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<main class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 movies p-4 max-w-7xl mx-auto items-center">${each(data.movies, (movie) => {
    return `<article class="col-span-1 mx-auto"><a href="${"/athleteprofiles/movie/" + escape(movie.id, true)}"><div class="poster">${validate_component(Avatar, "Avatar").$$render(
      $$result,
      {
        src: movie.avatar,
        width: "w-36",
        class: "flex-none",
        "data-flip-id": "cover-" + movie.title
      },
      {},
      {}
    )}
					
				</div></a>
			

			<p class="title p-2 text-center" data-flip-id="${"title-" + escape(movie.title, true)}">${escape(movie.title)}</p>
		</article>`;
  })}
</main>`;
});
export {
  Page as default
};
