<script lang="ts">
	import Upcoming from '$lib/components/Upcoming.svelte';
	import Subscribe from '$lib/components/Subscribe.svelte';
	import Tools from '$lib/components/Tools.svelte';
	import Athletes from '$lib/components/Athletes.svelte';
	import AthletesSA from '$lib/components/AthletesSA.svelte';
	import AthletesRoot from '$lib/components/AthletesRoot.svelte';
	import RSS from '$lib/components/RSS.svelte';
	import { Avatar, TabGroup, Tab } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/Navigation.svelte';
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';
	import Forumsmall from '$lib/components/Forumsmall.svelte';
	
	export let data: any;

	let tabSet: number = 0;
	let tabsBasic = 0;
	let desc = {
		popular: 'Right now in Triathlon.',
		newest: 'Race Reviews by You.',
		following: 'Posts by users you follow.'
	};

	/** @type {import('./$types').PageData} */
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<div>
	<div class="mx-auto max-w-7xl xl:max-w-screen-2xl text-token grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4">

		<div class="hidden xl:block col-span-1 overflow-hidden">
			<div class="card card-hover mb-4">
			<h3 class="p-4 h3">Menu</h3>
			<hr />
			<Navigation />
		</div>
		<div class="card card-hover">
			<h3 class="p-4 h3">Upcoming Races</h3>
			<hr />
			<Upcoming />
		</div>
		</div>


		<!-- Main -->
		<div class="col-span-3 card card-hover overflow-hidden">
			<header>
				<img src="/images/banner2.jpg" class="bg-black/50 w-full" alt="Post" />
			</header>
			<div class="p-4 space-y-4">
				<TabGroup>
					<!-- Tabs -->
					<Tab bind:group={tabsBasic} name="books" value={0}>Newsletter</Tab>
					<Tab bind:group={tabsBasic} name="movies" value={1}>Race Reports</Tab>
					<Tab bind:group={tabsBasic} name="tv" value={2}>PTO News</Tab>
					<Tab bind:group={tabsBasic} name="tv" value={3}>TRI247 News</Tab>
					
					<!-- Panel -->
					<svelte:fragment slot="panel">
						{#if tabsBasic === 0}
							<article>
								<!-- Posts -->
								<section>
									<div class="h3">Recent newsletter posts</div>
									<div class="p-4 h4">
										
										<div class="">
											{#each data.newsletters as newsletter}
											<li>
											  <a target="_blank" href={newsletter.link} rel="noreferrer">
												{newsletter.title} - 
												{newsletter.description}
											  </a>
											</li>
										  {/each}
										  </div>
										
									</div>

									
								</section>
							</article>
						{:else if tabsBasic === 1}
						<div class="h3">Recent Race Reports</div>
						{#each data.posts as post}
										<div class="p-4">
											<span class="flex justify-between"
												><h3 class="h3" data-toc-ignore>
													<a href={post.slug} class="title">{post.title}</a>
												</h3>
												<div class="justify-around">
													<Avatar src={post.avatar} width="w-10" />
												</div></span
											>
											<p class="date">{formatDate(post.date)}</p>
											<p class="description">{post.description}</p>
											<br />
											<hr class="opacity-90" />
										</div>
									{/each}

						{:else if tabsBasic === 2}
						<article>
							<!-- Posts -->
							
							<div class="h3">Recent News from <a href="https://protriathletes.org/">The PTO</a> </div>
							{#each data.ptoitems as ptoitem}
										<div class="p-4">
											<span class="flex justify-between"><h3 class="h3" data-toc-ignore>
													<a href={ptoitem.link} class="title" target="_blank">{ptoitem.title}</a>
												</h3>
												</span>
											<p class="date">{formatDate(ptoitem.pubDate)}</p>
											
											<br />
											<hr class="opacity-90" />
										</div>
									{/each}


						</article>

						{:else if tabsBasic === 3}
						<article>
							<!-- Posts -->
							
							<div class="h3">Recent News from <a href="https://www.tri247.com/">Tri247</a> </div>
							{#each data.newsitems as newsitem}
										<div class="p-4">
											<span class="flex justify-between"><h3 class="h3" data-toc-ignore>
													<a href={newsitem.link} class="title" target="_blank">{newsitem.title}</a>
												</h3>
												</span>
											<p class="date">{formatDate(newsitem.pubDate)}</p>
											
											<br />
											<hr class="opacity-90" />
										</div>
									{/each}


						</article>

					

						{/if}
					</svelte:fragment>
				</TabGroup>
			</div>
		</div>

		<!-- Right Bar -->
		<div class="col-span-2 card card-hover overflow-hidden">
			<h3 class="p-4 h3">Newsletter</h3>
			<hr />
			<h6 class="h6 p-4">
				Bi-weekly bullet point triathlon newsletter for you to chew through while you munch your
				morning oats.
			</h6>
			<div class="flex justify-center"><Subscribe /></div>

			<h3 class="p-4 h3">Tools</h3>
			<hr />
			<h6 class="h6 p-4">Some useful triathlon calculators.</h6>
			<Tools />

			<h3 class="p-4 h3">Athletes - Big Dogs 🐶</h3>
			<hr />
			<Athletes />

			<h3 class="p-4 h3 flex items-center"><div class="pr-2">Athletes - The Saffas</div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36"><path fill="#DE3830" d="M32 5H6.5L19 13.5h17V9a4 4 0 0 0-4-4z"/><path fill="#002395" d="M6.5 31H32a4 4 0 0 0 4-4v-4.5H19L6.5 31z"/><path fill="#141414" d="M0 11v14l10.5-7z"/><path fill="#FFB611" d="M0 9v2l10.5 7L0 25v2l13.5-9z"/><path fill="#007A4D" d="M3.541 5.028A4 4 0 0 0 0 9l13.5 9L0 27a4 4 0 0 0 3.541 3.972L18.5 20.5H36v-5H18.5L3.541 5.028z"/><path fill="#EEE" d="M6.5 5H4c-.156 0-.308.011-.459.028L18.5 15.5H36v-2H19L6.5 5zM3.541 30.972c.151.017.303.028.459.028h2.5L19 22.5h17v-2H18.5L3.541 30.972z"/></svg></h3>
			<hr />
			<AthletesSA />

			<h3 class="p-4 h3">Athletes - Our Faves ❤️</h3>
			<hr />
			<AthletesRoot />

			<div class="xl:hidden">
			<h3 class="p-4 h3">Upcoming Races</h3>
			<hr />
			<Upcoming />
			</div>
		</div>
	</div>
</div>
