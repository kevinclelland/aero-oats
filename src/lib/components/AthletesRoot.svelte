<script>
	import { Avatar } from '@skeletonlabs/skeleton';

	const listData = [
		{
			avatar:
				'https://content.protriathletes.org/content/images/2023/03/2731d991-06b4-47d9-8f7c-fa18ee7f48e7-w300.webp',
			name: 'Lionel Sanders',
			label: 'Youtube, Instagram, Discord',
			link: './athleteprofiles/movie/lionel-sanders'
		},
		{
			avatar:
				'https://content.protriathletes.org/content/images/2023/03/149331e4-8827-461e-bf88-bd5b48b56987-w300.webp',
			name: 'Sarah True',
			label: 'Youtube, Instagram, Discord',
			link: './athleteprofiles/movie/sarah-true'
		},
		{
			avatar:
				'https://content.protriathletes.org/content/images/2023/05/8d56b74b-7c86-484a-8cbb-363661797c45-w300.webp',
			name: 'Kat Matthews',
			label: 'Youtube, Instagram',
			link: './athleteprofiles/movie/kat-matthews'
		},
		{
			avatar:
				'https://content.protriathletes.org/content/images/2023/03/eeda5527-9eec-4e19-bfba-96cfec795419-w300.webp',
			name: 'Ruth Astle',
			label: 'Youtube, Instagram, Podcast',
			link: './athleteprofiles/movie/ruth-astle'
		},
		{
			avatar:
				'https://content.protriathletes.org/content/images/2023/05/e02d2ea4-707b-419b-b64b-9f5a5d702f73-w300.webp',
			name: 'Kyle Smith',
			label: 'Youtube, Instagram, Podcast',
			link: './athleteprofiles/movie/kyle-smith'
		},
		{
			avatar:
				'https://content.protriathletes.org/content/images/2023/03/efa7f753-6a3d-4027-b118-b066f2377493-w300.webp',
			name: 'Joe Skipper',
			label: 'Youtube, Instagram, Podcast',
			link: './athleteprofiles/movie/joe-skipper'
		},
		{
			avatar:
				'https://content.protriathletes.org/content/images/2021/03/f994056a-2a7f-4672-b4f4-d3b5081fb873-w300.webp',
			name: 'Javier Gomez',
			label: 'Instagram',
			link: './athleteprofiles/movie/javier-gomez'
		},
		{
			avatar:
				'https://content.protriathletes.org/content/images/2023/05/5ad53c5c-b684-42cb-8c49-f0aa8d910b42-w300.webp',
			name: 'Emma Pallant-Browne',
			label: 'Instagram',
			link: './athleteprofiles/movie/emma-pallant-browne'
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
