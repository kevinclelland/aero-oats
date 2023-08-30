import { join } from 'path';
import type { Config } from 'tailwindcss';

// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';

const config = {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		extend: {
            colors: {
				'ao-pink': '#D92344',
				'ao-orange': '#F2A516',
				'ao-newpink': '#F263E9',
				'ao-teal': '#11D9D9'
			},
        },
	},
	plugins: [
		skeleton({
            themes: {
                // Register each theme within this array:
                preset: [ { name: "skeleton", enhancements: true }, { name: "modern", enhancements: true }, { name: "crimson", enhancements: true }, { name: "wintry", enhancements: false }, { name: "vintage", enhancements: true } ] 
            }
        })
	]
} satisfies Config;

export default config;