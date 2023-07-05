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
				'https://content.protriathletes.org/content/images/2023/05/de470021-5e6d-4dc6-a008-7060dc46650b-w300.webp',
			name: 'Kristian Blummenfelt',
			label: 'Youtube, Instagram',
			link: './athleteprofiles/movie/kristian-blummenfelt'
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
				'https://content.protriathletes.org/content/images/2023/05/5ad53c5c-b684-42cb-8c49-f0aa8d910b42-w300.webp',
			name: 'Emma Pallant-Browne',
			label: 'Instagram',
			link: './athleteprofiles/movie/emma-pallant-browne'
		},
		{
			avatar:
				'',
			name: 'Laura Addie',
			label: 'Instagram',
			link: './athleteprofiles/movie/laura-addie'
		},
		{
			avatar:
				'https://content.protriathletes.org/content/images/2023/03/eeda5527-9eec-4e19-bfba-96cfec795419-w300.webp',
			name: 'Ruth Astle',
			label: 'Instagram',
			link: './athleteprofiles/movie/ruth-astle'
		},
		{
			avatar:
				'',
			name: 'Eloise Du Luart',
			label: 'Instagram',
			link: './athleteprofiles/movie/eloise-du-luart'
		},
		{
			avatar:
				'https://content.protriathletes.org/content/images/2023/06/8b5a4858-dfd4-4b4f-afef-b8087aa9a012-w300.webp',
			name: 'Natia van Heerden',
			label: 'Instagram',
			link: './athleteprofiles/movie/natia-van-heerden'
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
