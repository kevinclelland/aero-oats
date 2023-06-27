import { c as create_ssr_component, d as subscribe, a as add_attribute, e as escape, n as add_styles } from "../../../../../chunks/index3.js";
import { p as page } from "../../../../../chunks/stores.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "article.svelte-wljf2l{display:flex;gap:2rem}.details.svelte-wljf2l{padding-block:4rem}.title.svelte-wljf2l{margin:0}.overview.svelte-wljf2l{max-width:80ch}.backdrop.svelte-wljf2l{position:fixed;inset:0;background-image:var(--bg-image);background-size:cover;opacity:0.04;z-index:-10}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let movie;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  movie = data.movies.find((movie2) => movie2.id === $page.params.id);
  $$unsubscribe_page();
  return `${movie ? `<article class="svelte-wljf2l"><div class="poster p-4"><a href="/athleteprofiles"><img class="cover rounded-2xl max-w-lg"${add_attribute("src", movie.poster_path, 0)}${add_attribute("alt", movie.title, 0)} data-flip-id="${"cover-" + escape(movie.title, true)}"></a></div>

		<div class="details svelte-wljf2l"><h1 class="title text-7xl svelte-wljf2l" data-flip-id="${"title-" + escape(movie.title, true)}">${escape(movie.title)}</h1>
			<p class="overview py-4 svelte-wljf2l">${escape(movie.overview)}</p>
			<iframe width="560" height="315"${add_attribute("src", movie.youtube, 0)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div></article>

	<div class="backdrop svelte-wljf2l"${add_styles({
    "--bg-image": `url(${movie.backdrop_path})`
  })}></div>` : ``}`;
});
export {
  Page as default
};
