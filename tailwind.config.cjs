import { join } from 'path';
import skeleton from '@skeletonlabs/skeleton/tailwind/skeleton.cjs';

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			colors: {
				'ao-pink': '#D92344',
				'ao-orange': '#F2A516',
				'ao-newpink': '#F263E9',
				'ao-teal': '#11D9D9'
			},

			


		}
	},
	plugins: [require('@tailwindcss/forms'), ...skeleton()]
};
