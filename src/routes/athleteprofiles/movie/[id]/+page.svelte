<script lang="ts">
	import { page } from '$app/stores';

	export let data;

	$: movie = data.movies.find((movie) => movie.id === $page.params.id);
</script>



<a href="/athleteprofiles">
	<div class="text-center italic">Click to go back to athlete profiles</div></a>

{#if movie}
	<article>
		<div class="flex grid grid-cols-1 lg:grid-cols-3 max-w-7xl">
			
			<div class="poster p-4 col-span-1 lg:col-span-1">
				<a href="/athleteprofiles">
					
					<img class="cover rounded-2xl w-auto" src={movie.poster_path} alt={movie.title} />
				</a>
			</div>

			<div class="details col-span-1 lg:col-span-2 p-4">
				<h1 class="title text-7xl">{movie.title}</h1>
				<p class="overview py-4">{movie.overview}</p>
				<iframe class="w-full aspect-video p-4" src={movie.youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>
			</div>
		</div>
	</article>

	<div class="backdrop" style:--bg-image="url({movie.backdrop_path})" />
{/if}

<style>
	/*article {
		display: flex;
		gap: 2rem;
	}

	
	.poster {
		min-width: 300px;
		min-height: 450px;
	}

	.cover {
		width: 100%;
		height: 100%;
		aspect-ratio: 1;
		display: block;
		border-radius: 8px;
		box-shadow: 1px 1px 10px hsl(0 0% 0% / 40%);
	}*/

	.details {
		padding-block: 4rem;
	}

	.title {
		margin: 0;
	}

	.overview {
		max-width: 80ch;
	}

	.backdrop {
		position: fixed;
		inset: 0;
		background-image: var(--bg-image);
		background-size: cover;
		opacity: 0.04;
		z-index: -10;
	}





	
</style>
