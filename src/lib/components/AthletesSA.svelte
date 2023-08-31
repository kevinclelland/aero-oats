<script>
	import { Avatar } from '@skeletonlabs/skeleton';

	const listData = [
		{
			avatar:
				'https://content.protriathletes.org/content/images/2023/05/2e0a6641-3289-438a-97a6-b324b60e79f1-w300.webp',
			name: 'Brad Weiss',
			label: 'Youtube, Instagram, Discord',
			link: './athleteprofiles/movie/brad-weiss'
		},
		{
			avatar:
				'/images/mnsm.png',
			name: 'Magda Nieuwoudt',
			label: 'Youtube, Instagram',
			link: './athleteprofiles/movie/magda-nieuwoudt'
		},
		{
			avatar:
				'https://content.protriathletes.org/content/images/2021/05/c5d14d82-5c2e-4f87-9e9c-748fa8fb0403-w300.webp',
			name: 'Matt Trautman',
			label: 'Youtube, Instagram',
			link: './athleteprofiles/movie/matt-trautman'
		},
		{
			avatar:
				'https://content.protriathletes.org/content/images/2022/01/1a360abd-2b07-4120-88c3-5dfd2b81a1b2-w300.webp',
			name: 'Jeanni Metzler',
			label: 'Youtube, Instagram, Podcast',
			link: './athleteprofiles/movie/jeanni-metzler'
		},
		{
			avatar:
				'https://content.protriathletes.org/content/images/2021/05/aa5e5fd7-bcb1-476b-bdfa-82ef1a1d547a-w300.webp',
			name: 'Cameron Macnair',
			label: 'Youtube, Instagram, Podcast',
			link: './athleteprofiles/movie/cameron-macnair'
		},
		{
			avatar:
				'https://content.protriathletes.org/content/images/2023/06/8b5a4858-dfd4-4b4f-afef-b8087aa9a012-w300.webp',
			name: 'Natia van Heerden',
			label: 'Instagram',
			link: './athleteprofiles/movie/natia-van-heerden'
		},
		{
			avatar:
				'https://content.protriathletes.org/content/images/2021/05/3f3dedb4-5151-4d0e-9013-768a1777b4ca-w300.webp',
			name: 'Henri Schoeman',
			label: 'Instagram',
			link: './athleteprofiles/movie/henri-schoeman'
		},
		{
			avatar:
				'https://content.protriathletes.org/content/images/2021/05/3e241918-33d6-475b-8fb9-7c830aaff46b-w300.webp',
			name: 'Mariella Sawyer',
			label: 'Instagram',
			link: './athleteprofiles/movie/mariella-sawyer'
		}
		
	];
</script>

<div class="flex grid grid-cols-3 md:grid-cols-4 gap-4">
	{#each listData as v}
		<div class="col-span-1">
			<a href="/{v.link}"><img src={v.avatar} alt="profile" /></a>
		</div>
	{/each}
</div>
