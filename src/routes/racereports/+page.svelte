<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { Avatar } from '@skeletonlabs/skeleton';
	
	export let data;
</script>

<svelte:head>
	<title>The Race Report Almanac</title><!--{config.title}-->
	
</svelte:head>



<!-- Posts -->
<section>
	<div class="text-center text-6xl p-4">Race Report Almanac</div>

	<div class="mx-auto text-token grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
		<!-- Detailed -->
		{#each data.posts as post}
			<div class="col-span-1 card card-hover max-w-2xl overflow-hidden">
				<header class="flex justify-around">
					<img src={post.photo} class="bg-black/50 max-h-80" alt="Post" />
				</header>
				<div class="p-4 space-y-4">
					<h3 class="h3"><a href={post.slug} class="title">{post.title}</a></h3>

					<article>
						<p class="description">{post.description}</p>
					</article>
				</div>

				<hr class="opacity-50" />
				<footer class="p-4 flex justify-start items-center space-x-4">
					<Avatar src={post.avatar} width="w-8" />
					<div class="flex-auto flex justify-between items-center">
						<h6 class="font-bold">{post.user}</h6>
						<small class="date">On {formatDate(post.date)}</small>
					</div>
				</footer>
			</div>
		{/each}
	</div>
</section>
