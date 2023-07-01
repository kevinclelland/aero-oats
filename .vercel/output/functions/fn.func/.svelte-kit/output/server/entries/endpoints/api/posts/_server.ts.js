import { _ as __vite_glob_0_0 } from '../../../../chunks/durban703.js';
import { _ as __vite_glob_0_1 } from '../../../../chunks/frodeno-wins.js';
import { _ as __vite_glob_0_2 } from '../../../../chunks/skipper-racing.js';
import { j as json } from '../../../../chunks/index.js';
async function getPosts() {
	let posts = [];
	const paths = /* @__PURE__ */ Object.assign({
		'/src/posts/durban703.md': __vite_glob_0_0,
		'/src/posts/frodeno-wins.md': __vite_glob_0_1,
		'/src/posts/skipper-racing.md': __vite_glob_0_2
	});
	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata;
			const post = { ...metadata, slug };
			post.published && posts.push(post);
		}
	}
	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);
	return posts;
}
async function GET() {
	const posts = await getPosts();
	return json(posts);
}
export { GET };
