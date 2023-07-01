<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { Avatar } from '@skeletonlabs/skeleton';

	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<header class="w-full">
	<nav class="flex flex-col md:flex-row gap-3 items-center justify-around py-5 px-4">
		<div class="md:w-2/12 text-center md:text-left">
			<p class="font-serif text-xl font-bold">By Aero Oats.</p>
			<p class="font-serif text-sm">
				Bi-weekly triathlon newsletter for you to chew through while you munch your morning oats.
			</p>
		</div>
		<div>
			<h1 class="font-serif text-4xl font-bold text-center">THE RACE REPORT ALMANAC</h1>
			<h1 class="text-center text-2xl">Global Distribution</h1>
		</div>
		<div
			class="flex md:w-2/12 w-full flex-col items-center justify-center border border-black text-xl font-bold"
		>
			<h1>COMMUNITY SUPPLIED</h1>
			<h1>AND TESTED!</h1>
		</div>
	</nav>
</header>

<section
	class="mx-auto flex items-center justify-between border-t border-b border-black py-3 px-5 font-thin"
>
	<div>
		{#each data.meta.categories as category}
			<span class="surface-4 px-2 mx-2 border border-black rounded-md">&num;{category}</span>
		{/each}
	</div>
	<span>Raced on {formatDate(data.meta.date)}</span>
	<div class="flex items-center">
		<Avatar src={data.meta.avatar} width="w-10" />
		<p class="px-2">Author: {data.meta.user}</p>
	</div>
</section>

<section class="py-5">
	<h1 class="text-center font-serif text-7xl p-2">{data.meta.title}</h1>
	<h1 class="mt-5 text-center font-serif text-4xl italic p-2">{data.meta.description}</h1>
</section>

<!-- Post -->
<div class="p-10">
	<p>
		<svelte:component this={data.content} />
	</p>
</div>
