<script>
	import { Avatar } from '@skeletonlabs/skeleton';

	const listData = [
		{
			avatar:
				'https://content.protriathletes.org/content/images/2023/07/f42714f5-fcf9-44fb-9c7f-a55841d65d3e-w300.webp',
			name: 'Daniela Ryf',
			label: 'Youtube, Instagram, Discord',
			link: './athleteprofiles/movie/daniela-ryf'
		},
		{
			avatar:
				'https://content.protriathletes.org/content/images/2023/05/de470021-5e6d-4dc6-a008-7060dc46650b-w300.webp',
			name: 'Kristian Blummenfelt',
			label: 'Youtube, Instagram',
			link: './athleteprofiles/movie/kristian-blummenfelt'
		},
		{
			avatar:
				'https://content.protriathletes.org/content/images/2023/05/70692734-0a71-40b2-aa77-fb0fc32d4a0a-w300.webp',
			name: 'Max Neumann',
			label: 'Youtube, Instagram, Podcast',
			link: './athleteprofiles/movie/max-neumann'
		},
		{
			avatar:
				'https://content.protriathletes.org/content/images/2023/05/427e6abb-0bb0-4135-bf79-c00e422ae11d-w300.webp',
			name: 'Paula Findlay',
			label: 'Youtube, Instagram, Podcast',
			link: './athleteprofiles/movie/paula-findlay'
		},
		{
			avatar:
				'https://content.protriathletes.org/content/images/2023/05/6ba37123-6332-46eb-97de-3c13f30d19cb-w300.webp',
			name: 'Anne Haug',
			label: 'Instagram',
			link: './athleteprofiles/movie/anne-haug'
		},
		{
			avatar:
				'https://content.protriathletes.org/content/images/2023/03/91dc01ce-696c-4840-b54c-67c0186924f6-w300.webp',
			name: 'Gustav Iden',
			label: 'Instagram',
			link: './athleteprofiles/movie/gustav-iden'
		},
		{
			avatar:
				'https://content.protriathletes.org/content/images/2023/05/95a00981-61ff-4356-bb81-2874a89a0c00-w300.webp',
			name: 'Magnus Ditlev',
			label: 'Instagram',
			link: './athleteprofiles/movie/magnus-ditlev'
		},
		{
			avatar:
				'https://content.protriathletes.org/content/images/2023/03/ceee36f5-6532-4299-a0c8-3cba69d69429-w300.webp',
			name: 'Sam Laidlow',
			label: 'Instagram',
			link: './athleteprofiles/movie/sam-laidlow'
		},
		{
			avatar:
				'https://content.protriathletes.org/content/images/2023/05/dd4130db-bbbb-41c4-a125-07bd10a430ac-w300.webp',
			name: 'Ashleigh Gentle',
			label: 'Instagram',
			link: './athleteprofiles/movie/ashleigh-gentle'
		},
		{
			avatar:
				'https://content.protriathletes.org/content/images/2023/05/31ed8c21-2d5f-45ae-8b97-5e109be0228f-w300.webp',
			name: 'Lucy Charles-Barclay',
			label: 'Instagram',
			link: './athleteprofiles/movie/lucy-charles-barclay'
		},
		{
			avatar:
				'https://content.protriathletes.org/content/images/2023/03/5a9de8a7-3877-44bd-953b-361992721dbd-w300.webp',
			name: 'Taylor Knibb',
			label: 'Instagram',
			link: './athleteprofiles/movie/taylor-knibb'
		},
		{
			avatar:
				'https://content.protriathletes.org/content/images/2023/05/76ecee89-4618-4d5a-978c-a13a93e92689-w300.webp',
			name: 'Chelsea Sodaro',
			label: 'Instagram',
			link: './athleteprofiles/movie/chelsea-sodaro'
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
