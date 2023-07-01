<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	export let data;
</script>

<main
	class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 movies p-4 max-w-7xl mx-auto items-center"
>
	{#each data.movies as movie}
		<article class="col-span-1 mx-auto">
			<a href="/athleteprofiles/movie/{movie.id}">
				<div class="poster">
					<Avatar
						src={movie.avatar}
						width="w-36"
						class="flex-none"
						data-flip-id="cover-{movie.title}"
					/>
				</div>
			</a>

			<p class="title p-2 text-center" data-flip-id="title-{movie.title}">
				{movie.title}
			</p>
		</article>
	{/each}
</main>

<style>
	/*.movies {
		display: grid;
		gap: 2rem;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	}

	.poster {
		position: relative;
		box-shadow: 1px 1px 10px hsl(0 0% 0% / 40%);
	}

	.cover {
		width: 100%;
		display: block;
		border-radius: 8px;
	}

	.score {
		display: flex;
		place-items: center;
		position: absolute;
		bottom: -24px;
		left: 10px;
		padding: 0.5rem;
		color: hsl(0 0% 98%);
		background-color: hsl(0 0% 0%);
		border: 2px solid hsl(0 0% 80%);
		border-radius: 50%;
		aspect-ratio: 1;
	}

	.title {
		margin-top: 3rem;
	}*/
</style>
