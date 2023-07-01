import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async (event) => {
	return new Response('Hello');
};
