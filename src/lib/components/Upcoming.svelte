<script>
	const listData = [
		{
			link: 'https://protriathletes.org/events/pto-tour/us-open/pro/',
			name: 'PTO US Open',
			label: '5 August - Milwaukee, USA'
		},
		{
			link: 'https://protriathletes.org/events/pto-tour/asian-open/pro/',
			name: 'PTO Asian Open',
			label: '20 August - Singapore'
		},
		{
			link: 'https://www.ironman.com/im703-world-championship-2023',
			name: 'Ironman 70.3 WC',
			label: '26/27 August - Lahti,Finland'
		},
		{
			link: 'https://www.ironman.com/im-world-championship-nice',
			name: 'Ironman WC Men',
			label: '10 September - Nice, France'
		},
		{
			link: 'https://www.ironman.com/im-world-championship-2023',
			name: 'Ironman WC Women',
			label: '14 October - Kona, Hawaii'
		}
	];
</script>

<dl class="list-dl">
	{#each listData as v}
		<div>
			<span class="badge-icon p-2 variant-soft-secondary"><i class="fas fa-calendar-alt" /></span>
			<a href="/{v.link}"
				><span class="flex-auto">
					<dt class="font-bold">{v.name}</dt>
					<dd class="text-sm opacity-50 text-ellipsis">{v.label}</dd>
				</span></a
			>
		</div>
	{/each}
</dl>
