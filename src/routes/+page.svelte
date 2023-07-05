<script lang="ts">
	import Upcoming from '$lib/components/Upcoming.svelte';
	import Subscribe from '$lib/components/Subscribe.svelte';
	import Tools from '$lib/components/Tools.svelte';
	import Athletes from '$lib/components/Athletes.svelte';
	import RSS from '$lib/components/RSS.svelte';
	import { Avatar, TabGroup, Tab } from '@skeletonlabs/skeleton';

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
	<div class="mx-auto max-w-7xl text-token grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
		<!-- Main -->
		<div class="col-span-3 card card-hover overflow-hidden">
			<header>
				<img src="/images/banner2.jpg" class="bg-black/50 w-full" alt="Post" />
			</header>
			<div class="p-4 space-y-4">
				<TabGroup>
					<!-- Tabs -->
					<Tab bind:group={tabsBasic} name="books" value={0}>Newsletter Posts</Tab>
					<Tab bind:group={tabsBasic} name="movies" value={1}>Race Reports</Tab>
					<Tab bind:group={tabsBasic} name="tv" value={2}>Blog</Tab>
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
												{newsletter.title}
											  </a>
											</li>
										  {/each}
										  </div>
										
									</div>

									
								</section>
							</article>
						{:else if tabsBasic === 1}
						<div class="h3">Read Race Reports</div>
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
							<p>{desc.following}</p>
							Coming soon
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

			<h3 class="p-4 h3">Athlete Profiles</h3>
			<hr />
			<Athletes />

			<h3 class="p-4 h3">Upcoming Races</h3>
			<hr />
			<Upcoming />
		</div>
	</div>
</div>
