<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { Avatar } from '@skeletonlabs/skeleton';
	
	export let data;
	

</script>

<svelte:head>
	<title>The Race Report Almanac</title><!--{config.title}-->
	
</svelte:head>



<header class="w-full">
	<nav class="flex flex-col md:flex-row gap-3 items-center justify-around py-5 px-4">
		<div class="flex md:w-2/12 w-full flex-col items-center justify-center border border-black text-xl font-bold">
			<h1>COMMUNITY SUPPLIED</h1>
			<h1>AND TESTED!</h1>
		</div>
		<div>
			<h1 class="font-serif text-4xl font-bold text-center">THE RACE REPORT ALMANAC</h1>
			<h1 class="text-center text-2xl">Global Distribution</h1>
		</div>
		
		<div class="md:w-2/12 text-center md:text-left">
			<p class="font-serif text-xl font-bold">By Aero Oats.</p>
			<p class="font-serif text-sm hidden sm:block">
				Bi-weekly triathlon newsletter for you to chew through while you munch your morning oats.
			</p>
		</div>
	</nav>
</header>

<section
	class="mx-auto flex items-center justify-between border-t border-b border-black py-3 px-5 font-thin"
>
	<div>
		
		<span>Athletes: 3</span>
		
	</div>
	<span>Updated: 11 Aug 23</span>
	<div class="flex items-center">
		
		<p class="px-2">Races: 3</p>
	</div>
</section>


<!--MAP-->





<!-- Post -->
<div class="p-10">
	
		<div class="mx-auto text-token grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
			<!-- Detailed -->
			{#each data.posts as post}
				<div class="col-span-1 card card-hover max-w-2xl overflow-hidden">
					<header class="flex justify-around">
						<a href={post.slug}><img src={post.photo} class="bg-black/50 max-h-80" alt="Post" /></a>
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
	
</div>

