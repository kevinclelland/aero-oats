<script lang="ts">
	import { TabGroup, Tab} from '@skeletonlabs/skeleton';
	let tabSet: number = 0;
	let tabsBasic = 0;


</script>

<div class="mx-auto max-w-2xl text-token grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
	<!-- Main -->
	<div class="col-span-2 card card-hover overflow-hidden">

<div class="p-4 space-y-4">
	<TabGroup>
		<!-- Tabs -->
		<Tab bind:group={tabsBasic} name="youtube" value={0}>Youtube</Tab>
		<Tab bind:group={tabsBasic} name="podcasts" value={1}>Podcasts</Tab>
		<Tab bind:group={tabsBasic} name="newsletters" value={2}>Newsletters</Tab>
		<Tab bind:group={tabsBasic} name="websites" value={3}>Websites</Tab>
		<Tab bind:group={tabsBasic} name="discord" value={4}>Discord</Tab>
		<!-- Panel -->
		<svelte:fragment slot="panel">
			{#if tabsBasic === 0}
			

			<ul>
				<li class="p-2">
					<a href="https://www.youtube.com/@Lionel.Sanders">
						<span class="badge bg-primary-500">📺</span>
						<span class="flex-auto">Lionel Sanders</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.youtube.com/@thedailytri">
						<span class="badge bg-primary-500">📺</span>
						<span class="flex-auto">The Daily Tri</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.youtube.com/@gtn">
						<span class="badge bg-primary-500">📺</span>
						<span class="flex-auto">GTN</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.youtube.com/@Harry-Palmer">
						<span class="badge bg-primary-500">📺</span>
						<span class="flex-auto">Harry Palmer</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.youtube.com/@lauraaddietriathlon/featured">
						<span class="badge bg-primary-500">📺</span>
						<span class="flex-auto">Laura Addie</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.youtube.com/@Reastle1">
						<span class="badge bg-primary-500">📺</span>
						<span class="flex-auto">Ruth Astle</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.youtube.com/@joeskipper91">
						<span class="badge bg-primary-500">📺</span>
						<span class="flex-auto">Joe Skipper</span>
					</a>
				</li>
				<!-- ... -->
			</ul>




			{:else if tabsBasic === 1}
													
			<ul>
				<li class="p-2">
					<a href="https://shows.acast.com/triathlon-mockery">
						<span class="badge bg-primary-500">🎧</span>
						<span class="flex-auto">Triathlon Mockery</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.fitter.co.nz/listen-radio">
						<span class="badge bg-primary-500">🎧</span>
						<span class="flex-auto">Fitter Radio</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://thattriathlonlife.com/products/podcast?selling_plan=645464203&variant=40850061361291">
						<span class="badge bg-primary-500">🎧</span>
						<span class="flex-auto">That Triathlon Life</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://protrinews.buzzsprout.com/">
						<span class="badge bg-primary-500">🎧</span>
						<span class="flex-auto">Pro Tri News</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://podcasts.apple.com/us/podcast/the-triathlon-hour/id1595443343">
						<span class="badge bg-primary-500">🎧</span>
						<span class="flex-auto">The Triathlon Hour</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://podcasts.apple.com/us/podcast/the-greg-bennett-show/id1492933135">
						<span class="badge bg-primary-500">🎧</span>
						<span class="flex-auto">One Moment Longer</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://podcasts.apple.com/us/podcast/the-triathlon-age-group-journey/id1652784090">
						<span class="badge bg-primary-500">🎧</span>
						<span class="flex-auto">Triathlon Age Group Journey</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.insidetrishow.com/">
						<span class="badge bg-primary-500">🎧</span>
						<span class="flex-auto">Inside Tri Show</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.purplepatchfitness.com/podcast">
						<span class="badge bg-primary-500">🎧</span>
						<span class="flex-auto">Purple Patch Podcast</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.thebricksession.com/">
						<span class="badge bg-primary-500">🎧</span>
						<span class="flex-auto">Brick Session Media</span>
					</a>
				</li>
				<!-- ... -->
			</ul>
			
			{:else if tabsBasic === 2}
				
			<ul>
				<li class="p-2">
					<a href="https://www.triathlonish.com/">
						<span class="badge bg-primary-500">💌</span>
						<span class="flex-auto">Triathlon-ish</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://aerooats.beehiiv.com/">
						<span class="badge bg-primary-500">💌</span>
						<span class="flex-auto">Aero Oats</span>
					</a>
				</li>
				<!-- ... -->
			</ul>

			{:else if tabsBasic === 3}

			<ul>
				<li class="p-2">
					<a href="https://www.obstri.com/">
						<span class="badge bg-primary-500">💻</span>
						<span class="flex-auto">Obsessed Triathlete</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.tri247.com/">
						<span class="badge bg-primary-500">💻</span>
						<span class="flex-auto">Tri 247</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.precisionhydration.com/">
						<span class="badge bg-primary-500">💻</span>
						<span class="flex-auto">Precision Hydration</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://protriathletes.org/">
						<span class="badge bg-primary-500">💻</span>
						<span class="flex-auto">PTO</span>
					</a>
				</li>
				<!-- ... -->
			</ul>
			
			{:else if tabsBasic === 4}
			
			<ul>
				<li class="p-2">
					<a href="https://discord.com/channels/877956839373959168/930139386182516788">
						<span class="badge bg-primary-500">💀</span>
						<span class="flex-auto">Lionel Sanders Racing</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://discord.com/channels/1049394664303763468/1049394664752550019">
						<span class="badge bg-primary-500">💀</span>
						<span class="flex-auto">The Daily Tri</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://discord.com/channels/1111341317696536627/1111341318535393371">
						<span class="badge bg-primary-500">💀</span>
						<span class="flex-auto">The Athlete Penthouse</span>
					</a>
				</li>
				<!-- ... -->
			</ul>

			{/if}
		</svelte:fragment>
	</TabGroup>
</div>

</div>
</div>

