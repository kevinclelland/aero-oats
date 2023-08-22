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

<div class="justify-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto items-center">
{#each data.movies as movie}

	<div class="max-w-md rounded bg-gray-100 dark:bg-gray-500 shadow-lg transform duration-200 easy-in-out m-12 col-span-1 mx-auto">
	  <div class="h-2/4 sm:h-64 overflow-hidden">
		<img class="w-full rounded-t"
		  src={movie.poster_path}
		  alt="poster" />
	  </div>
	  <div class="flex justify-start px-5 -mt-12 mb-5">
		<span class="block relative h-32 w-32">
		  <img alt="avatar"
			src={movie.avatar}
			class="mx-auto object-cover rounded-full h-24 w-24 bg-white p-1" />
		</span>
	  </div>
	  <div class="">
		<div class="px-4 mb-8">
		  <h2 class="text-3xl font-bold ">{movie.title}</h2>
		  <p class="">{movie.release_date}</p>
		  
		  <div
			class="justify-center mx-auto">
			<iframe class="w-full aspect-video" src={movie.youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>
		  </div>
		  <div class="flex flex-wrap justify-center gap-1 sm:gap-4 mt-4">
			
			<button
			  class="p-1 sm:p-2 inline-flex items-center">
			  <svg class="w-7 h-7 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"/>
				</svg>
			</button>
			<button
			  class="p-1 sm:p-2  inline-flex items-center ">
			  <svg class="w-7 h-7 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path d="M15.246 17c-.927 3.701-2.547 6-3.246 7-.699-1-2.32-3.298-3.246-7h6.492zm7.664 0c-1.558 3.391-4.65 5.933-8.386 6.733 1.315-2.068 2.242-4.362 2.777-6.733h5.609zm-21.82 0h5.609c.539 2.386 1.47 4.678 2.777 6.733-3.736-.8-6.828-3.342-8.386-6.733zm14.55-2h-7.28c-.29-1.985-.29-4.014 0-6h7.281c.288 1.986.288 4.015-.001 6zm-9.299 0h-5.962c-.248-.958-.379-1.964-.379-3s.131-2.041.379-3h5.962c-.263 1.988-.263 4.012 0 6zm17.28 0h-5.963c.265-1.988.265-4.012.001-6h5.962c.247.959.379 1.964.379 3s-.132 2.042-.379 3zm-8.375-8h-6.492c.925-3.702 2.546-6 3.246-7 1.194 1.708 2.444 3.799 3.246 7zm-8.548-.001h-5.609c1.559-3.39 4.651-5.932 8.387-6.733-1.237 1.94-2.214 4.237-2.778 6.733zm16.212 0h-5.609c-.557-2.462-1.513-4.75-2.778-6.733 3.736.801 6.829 3.343 8.387 6.733z"/>
				</svg>
			</button>
			
			<button
			  class="p-1 sm:p-2  inline-flex items-center">
			  <svg class="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
				<path
				  d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
				</svg>
			</button>
		  </div>
		</div>
	  </div>
	</div>
  
  {/each}
</div>