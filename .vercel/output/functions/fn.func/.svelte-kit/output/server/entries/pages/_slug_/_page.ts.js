import { e as error } from "../../../chunks/index.js";
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
async function load({ params }) {
  try {
    const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../posts/durban703.md": () => import("../../../chunks/durban703.js").then((n) => n._), "../../posts/frodeno-wins.md": () => import("../../../chunks/frodeno-wins.js").then((n) => n._), "../../posts/skipper-racing.md": () => import("../../../chunks/skipper-racing.js").then((n) => n._) }), `../../posts/${params.slug}.md`);
    return {
      content: post.default,
      meta: post.metadata
    };
  } catch (e) {
    throw error(404, `Could not find ${params.slug}`);
  }
}
export {
  load
};
