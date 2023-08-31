<script>
	const listData = [
		{ avatar: 'YOErFW8AfkI', icon:'🧮', name: 'PTO Points', label: 'Calculate PTO points', link: 'pto' },
		{ avatar: 'YOErFW8AfkI', icon:'🤹', name: 'PTO Points Scenarios', label: 'Calc points for 3 scenarios', link: 'ptos' },
		{ avatar: 'YOErFW8AfkI', icon:'📈', name: 'Race ROI Calculator', label: 'Compare race finances', link: 'roi' },
		{ avatar: 'z_X0PxmBuIQ', icon:'📏', name: 'Time Distance Pace', label: 'Calculate running pace, distance or time', link: 'tdp' },
		{ avatar: '8vKVlNIbAc4', icon:'🎒', name: 'Packing Checklist', label: 'What to pack for race day', link: 'checklist' },
		{ avatar: '8vKVlNIbAc4', icon:'⏳️', name: 'Countdown', label: 'Days till next race', link: 'countdown' },
		{ avatar: '8vKVlNIbAc4', icon:'😜', name: 'Tri Match Game', label: 'Card matching game', link: 'match' }
	];
</script>

<dl class="list-dl">
	{#each listData as v}
		<div>
			<span class="p-2 text-2xl">{v.icon}</span>
			<a href="/{v.link}">
				<span class="flex-auto">
					<dt class="font-bold">{v.name}</dt>
					<dd class="text-sm opacity-50">{v.label}</dd>
				</span></a
			>
		</div>
	{/each}
</dl>
