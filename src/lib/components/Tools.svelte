<script>
	const listData = [
		{ avatar: 'YOErFW8AfkI', name: '🧮 PTO Points', label: 'Calculate PTO points', link: 'pto' },
		{ avatar: 'YOErFW8AfkI', name: '🤹 PTO Points Scenarios', label: 'Calc points for 3 scenarios', link: 'ptos' },
		{ avatar: 'YOErFW8AfkI', name: '📈 Race ROI Calculator', label: 'Compare race finances', link: 'roi' },
		{ avatar: 'z_X0PxmBuIQ', name: '📏 Time Distance Pace', label: 'Calculate running pace, distance or time', link: 'tdp' },
		{ avatar: '8vKVlNIbAc4', name: '🎒 Packing Checklist', label: 'What to pack for race day', link: 'checklist' },
		{ avatar: '8vKVlNIbAc4', name: '⏳️ Countdown', label: 'Days till next race', link: 'countdown' },
		{ avatar: '8vKVlNIbAc4', name: '😜 Tri Match Game', label: 'Card matching game', link: 'match' }
	];
</script>

<dl class="list-dl">
	{#each listData as v}
		<div>
			<span class="badge-icon p-4 variant-soft-secondary text-2xl">🛠️</span>
			<a href="/{v.link}">
				<span class="flex-auto">
					<dt class="font-bold">{v.name}</dt>
					<dd class="text-sm opacity-50">{v.label}</dd>
				</span></a
			>
		</div>
	{/each}
</dl>
