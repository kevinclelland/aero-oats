<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	export let data;
</script>

<div class="text-center text-6xl p-4">🏆️ Athletes</div>

<main class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto items-center">
	
	{#each data.movies as movie}
		<article class="col-span-1 mx-auto">
			<a href="/athleteprofiles/movie/{movie.id}">
				<div class="poster cover">
					<Avatar
						src={movie.avatar}
						width="w-36"
						class="flex-none"/>
				</div>
			</a>

			<p class="title p-2 text-center">
				{movie.title}
			</p>
		</article>
	{/each}
</main>

