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
		<Tab bind:group={tabsBasic} name="discord" value={4}>Spotify</Tab>
		<Tab bind:group={tabsBasic} name="discord" value={5}>Books</Tab>
		<Tab bind:group={tabsBasic} name="discord" value={6}>Discord</Tab>
		<!-- Panel -->
		<svelte:fragment slot="panel">
			{#if tabsBasic === 0}
			
		
			<ul>
				<li class="p-2">
					<a href="https://www.youtube.com/@Lionel.Sanders">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"/></svg></span>
						<span class="flex-auto">Lionel Sanders</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.youtube.com/@thedailytri">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"/></svg></span>
						<span class="flex-auto">The Daily Tri</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.youtube.com/@gtn">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"/></svg></span>
						<span class="flex-auto">GTN</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.youtube.com/@Harry-Palmer">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"/></svg></span>
						<span class="flex-auto">Harry Palmer</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.youtube.com/@lauraaddietriathlon/featured">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"/></svg></span>
						<span class="flex-auto">Laura Addie</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.youtube.com/@Reastle1">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"/></svg></span>
						<span class="flex-auto">Ruth Astle</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.youtube.com/@joeskipper91">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"/></svg></span>
						<span class="flex-auto">Joe Skipper</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.youtube.com/@passionprojecttriathlon">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"/></svg></span>
						<span class="flex-auto">Holly Lawrence</span>
					</a>
				</li>
				<!-- ... -->
			</ul>




			{:else if tabsBasic === 1}
													
			<ul>
				<li class="p-2">
					<a href="https://shows.acast.com/triathlon-mockery">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17 18.25v3.25H7v-3.25c0-1.38 2.24-2.5 5-2.5s5 1.12 5 2.5M12 5.5a6.5 6.5 0 0 1 6.5 6.5c0 1.25-.35 2.42-.96 3.41L16 14.04c.32-.61.5-1.31.5-2.04c0-2.5-2-4.5-4.5-4.5s-4.5 2-4.5 4.5c0 .73.18 1.43.5 2.04l-1.54 1.37c-.61-.99-.96-2.16-.96-3.41A6.5 6.5 0 0 1 12 5.5m0-4A10.5 10.5 0 0 1 22.5 12c0 2.28-.73 4.39-1.96 6.11l-1.5-1.35c.92-1.36 1.46-3 1.46-4.76A8.5 8.5 0 0 0 12 3.5A8.5 8.5 0 0 0 3.5 12c0 1.76.54 3.4 1.46 4.76l-1.5 1.35A10.473 10.473 0 0 1 1.5 12A10.5 10.5 0 0 1 12 1.5m0 8a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 12A2.5 2.5 0 0 1 12 9.5Z"/></svg></span>
						<span class="flex-auto">Triathlon Mockery</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.fitter.co.nz/listen-radio">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17 18.25v3.25H7v-3.25c0-1.38 2.24-2.5 5-2.5s5 1.12 5 2.5M12 5.5a6.5 6.5 0 0 1 6.5 6.5c0 1.25-.35 2.42-.96 3.41L16 14.04c.32-.61.5-1.31.5-2.04c0-2.5-2-4.5-4.5-4.5s-4.5 2-4.5 4.5c0 .73.18 1.43.5 2.04l-1.54 1.37c-.61-.99-.96-2.16-.96-3.41A6.5 6.5 0 0 1 12 5.5m0-4A10.5 10.5 0 0 1 22.5 12c0 2.28-.73 4.39-1.96 6.11l-1.5-1.35c.92-1.36 1.46-3 1.46-4.76A8.5 8.5 0 0 0 12 3.5A8.5 8.5 0 0 0 3.5 12c0 1.76.54 3.4 1.46 4.76l-1.5 1.35A10.473 10.473 0 0 1 1.5 12A10.5 10.5 0 0 1 12 1.5m0 8a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 12A2.5 2.5 0 0 1 12 9.5Z"/></svg></span>
						<span class="flex-auto">Fitter Radio</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://thattriathlonlife.com/products/podcast?selling_plan=645464203&variant=40850061361291">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17 18.25v3.25H7v-3.25c0-1.38 2.24-2.5 5-2.5s5 1.12 5 2.5M12 5.5a6.5 6.5 0 0 1 6.5 6.5c0 1.25-.35 2.42-.96 3.41L16 14.04c.32-.61.5-1.31.5-2.04c0-2.5-2-4.5-4.5-4.5s-4.5 2-4.5 4.5c0 .73.18 1.43.5 2.04l-1.54 1.37c-.61-.99-.96-2.16-.96-3.41A6.5 6.5 0 0 1 12 5.5m0-4A10.5 10.5 0 0 1 22.5 12c0 2.28-.73 4.39-1.96 6.11l-1.5-1.35c.92-1.36 1.46-3 1.46-4.76A8.5 8.5 0 0 0 12 3.5A8.5 8.5 0 0 0 3.5 12c0 1.76.54 3.4 1.46 4.76l-1.5 1.35A10.473 10.473 0 0 1 1.5 12A10.5 10.5 0 0 1 12 1.5m0 8a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 12A2.5 2.5 0 0 1 12 9.5Z"/></svg></span>
						<span class="flex-auto">That Triathlon Life</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://protrinews.buzzsprout.com/">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17 18.25v3.25H7v-3.25c0-1.38 2.24-2.5 5-2.5s5 1.12 5 2.5M12 5.5a6.5 6.5 0 0 1 6.5 6.5c0 1.25-.35 2.42-.96 3.41L16 14.04c.32-.61.5-1.31.5-2.04c0-2.5-2-4.5-4.5-4.5s-4.5 2-4.5 4.5c0 .73.18 1.43.5 2.04l-1.54 1.37c-.61-.99-.96-2.16-.96-3.41A6.5 6.5 0 0 1 12 5.5m0-4A10.5 10.5 0 0 1 22.5 12c0 2.28-.73 4.39-1.96 6.11l-1.5-1.35c.92-1.36 1.46-3 1.46-4.76A8.5 8.5 0 0 0 12 3.5A8.5 8.5 0 0 0 3.5 12c0 1.76.54 3.4 1.46 4.76l-1.5 1.35A10.473 10.473 0 0 1 1.5 12A10.5 10.5 0 0 1 12 1.5m0 8a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 12A2.5 2.5 0 0 1 12 9.5Z"/></svg></span>
						<span class="flex-auto">Pro Tri News</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://podcasts.apple.com/us/podcast/the-triathlon-hour/id1595443343">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17 18.25v3.25H7v-3.25c0-1.38 2.24-2.5 5-2.5s5 1.12 5 2.5M12 5.5a6.5 6.5 0 0 1 6.5 6.5c0 1.25-.35 2.42-.96 3.41L16 14.04c.32-.61.5-1.31.5-2.04c0-2.5-2-4.5-4.5-4.5s-4.5 2-4.5 4.5c0 .73.18 1.43.5 2.04l-1.54 1.37c-.61-.99-.96-2.16-.96-3.41A6.5 6.5 0 0 1 12 5.5m0-4A10.5 10.5 0 0 1 22.5 12c0 2.28-.73 4.39-1.96 6.11l-1.5-1.35c.92-1.36 1.46-3 1.46-4.76A8.5 8.5 0 0 0 12 3.5A8.5 8.5 0 0 0 3.5 12c0 1.76.54 3.4 1.46 4.76l-1.5 1.35A10.473 10.473 0 0 1 1.5 12A10.5 10.5 0 0 1 12 1.5m0 8a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 12A2.5 2.5 0 0 1 12 9.5Z"/></svg></span>
						<span class="flex-auto">The Triathlon Hour</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://podcasts.apple.com/us/podcast/the-greg-bennett-show/id1492933135">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17 18.25v3.25H7v-3.25c0-1.38 2.24-2.5 5-2.5s5 1.12 5 2.5M12 5.5a6.5 6.5 0 0 1 6.5 6.5c0 1.25-.35 2.42-.96 3.41L16 14.04c.32-.61.5-1.31.5-2.04c0-2.5-2-4.5-4.5-4.5s-4.5 2-4.5 4.5c0 .73.18 1.43.5 2.04l-1.54 1.37c-.61-.99-.96-2.16-.96-3.41A6.5 6.5 0 0 1 12 5.5m0-4A10.5 10.5 0 0 1 22.5 12c0 2.28-.73 4.39-1.96 6.11l-1.5-1.35c.92-1.36 1.46-3 1.46-4.76A8.5 8.5 0 0 0 12 3.5A8.5 8.5 0 0 0 3.5 12c0 1.76.54 3.4 1.46 4.76l-1.5 1.35A10.473 10.473 0 0 1 1.5 12A10.5 10.5 0 0 1 12 1.5m0 8a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 12A2.5 2.5 0 0 1 12 9.5Z"/></svg></span>
						<span class="flex-auto">One Moment Longer</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://podcasts.apple.com/us/podcast/the-triathlon-age-group-journey/id1652784090">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17 18.25v3.25H7v-3.25c0-1.38 2.24-2.5 5-2.5s5 1.12 5 2.5M12 5.5a6.5 6.5 0 0 1 6.5 6.5c0 1.25-.35 2.42-.96 3.41L16 14.04c.32-.61.5-1.31.5-2.04c0-2.5-2-4.5-4.5-4.5s-4.5 2-4.5 4.5c0 .73.18 1.43.5 2.04l-1.54 1.37c-.61-.99-.96-2.16-.96-3.41A6.5 6.5 0 0 1 12 5.5m0-4A10.5 10.5 0 0 1 22.5 12c0 2.28-.73 4.39-1.96 6.11l-1.5-1.35c.92-1.36 1.46-3 1.46-4.76A8.5 8.5 0 0 0 12 3.5A8.5 8.5 0 0 0 3.5 12c0 1.76.54 3.4 1.46 4.76l-1.5 1.35A10.473 10.473 0 0 1 1.5 12A10.5 10.5 0 0 1 12 1.5m0 8a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 12A2.5 2.5 0 0 1 12 9.5Z"/></svg></span>
						<span class="flex-auto">Triathlon Age Group Journey</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.insidetrishow.com/">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17 18.25v3.25H7v-3.25c0-1.38 2.24-2.5 5-2.5s5 1.12 5 2.5M12 5.5a6.5 6.5 0 0 1 6.5 6.5c0 1.25-.35 2.42-.96 3.41L16 14.04c.32-.61.5-1.31.5-2.04c0-2.5-2-4.5-4.5-4.5s-4.5 2-4.5 4.5c0 .73.18 1.43.5 2.04l-1.54 1.37c-.61-.99-.96-2.16-.96-3.41A6.5 6.5 0 0 1 12 5.5m0-4A10.5 10.5 0 0 1 22.5 12c0 2.28-.73 4.39-1.96 6.11l-1.5-1.35c.92-1.36 1.46-3 1.46-4.76A8.5 8.5 0 0 0 12 3.5A8.5 8.5 0 0 0 3.5 12c0 1.76.54 3.4 1.46 4.76l-1.5 1.35A10.473 10.473 0 0 1 1.5 12A10.5 10.5 0 0 1 12 1.5m0 8a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 12A2.5 2.5 0 0 1 12 9.5Z"/></svg></span>
						<span class="flex-auto">Inside Tri Show</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.purplepatchfitness.com/podcast">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17 18.25v3.25H7v-3.25c0-1.38 2.24-2.5 5-2.5s5 1.12 5 2.5M12 5.5a6.5 6.5 0 0 1 6.5 6.5c0 1.25-.35 2.42-.96 3.41L16 14.04c.32-.61.5-1.31.5-2.04c0-2.5-2-4.5-4.5-4.5s-4.5 2-4.5 4.5c0 .73.18 1.43.5 2.04l-1.54 1.37c-.61-.99-.96-2.16-.96-3.41A6.5 6.5 0 0 1 12 5.5m0-4A10.5 10.5 0 0 1 22.5 12c0 2.28-.73 4.39-1.96 6.11l-1.5-1.35c.92-1.36 1.46-3 1.46-4.76A8.5 8.5 0 0 0 12 3.5A8.5 8.5 0 0 0 3.5 12c0 1.76.54 3.4 1.46 4.76l-1.5 1.35A10.473 10.473 0 0 1 1.5 12A10.5 10.5 0 0 1 12 1.5m0 8a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 12A2.5 2.5 0 0 1 12 9.5Z"/></svg></span>
						<span class="flex-auto">Purple Patch Podcast</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.thebricksession.com/">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17 18.25v3.25H7v-3.25c0-1.38 2.24-2.5 5-2.5s5 1.12 5 2.5M12 5.5a6.5 6.5 0 0 1 6.5 6.5c0 1.25-.35 2.42-.96 3.41L16 14.04c.32-.61.5-1.31.5-2.04c0-2.5-2-4.5-4.5-4.5s-4.5 2-4.5 4.5c0 .73.18 1.43.5 2.04l-1.54 1.37c-.61-.99-.96-2.16-.96-3.41A6.5 6.5 0 0 1 12 5.5m0-4A10.5 10.5 0 0 1 22.5 12c0 2.28-.73 4.39-1.96 6.11l-1.5-1.35c.92-1.36 1.46-3 1.46-4.76A8.5 8.5 0 0 0 12 3.5A8.5 8.5 0 0 0 3.5 12c0 1.76.54 3.4 1.46 4.76l-1.5 1.35A10.473 10.473 0 0 1 1.5 12A10.5 10.5 0 0 1 12 1.5m0 8a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 12A2.5 2.5 0 0 1 12 9.5Z"/></svg></span>
						<span class="flex-auto">Brick Session Media</span>
					</a>
				</li>
				<!-- ... -->
			</ul>
			
			{:else if tabsBasic === 2}
				
			<ul>
				<li class="p-2">
					<a href="https://www.triathlonish.com/">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 .64L8.23 3H5v2L2.97 6.29C2.39 6.64 2 7.27 2 8v10a2 2 0 0 0 2 2h16c1.11 0 2-.89 2-2V8c0-.73-.39-1.36-.97-1.71L19 5V3h-3.23M7 5h10v4.88L12 13L7 9.88M8 6v1.5h8V6M5 7.38v1.25L4 8m15-.62L20 8l-1 .63M8 8.5V10h8V8.5Z"/></svg></span>
						<span class="flex-auto">Triathlon-ish</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://aerooats.beehiiv.com/">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 .64L8.23 3H5v2L2.97 6.29C2.39 6.64 2 7.27 2 8v10a2 2 0 0 0 2 2h16c1.11 0 2-.89 2-2V8c0-.73-.39-1.36-.97-1.71L19 5V3h-3.23M7 5h10v4.88L12 13L7 9.88M8 6v1.5h8V6M5 7.38v1.25L4 8m15-.62L20 8l-1 .63M8 8.5V10h8V8.5Z"/></svg></span>
						<span class="flex-auto">Aero Oats</span>
					</a>
				</li>
				<!-- ... -->
			</ul>

			{:else if tabsBasic === 3}

			<ul>
				<li class="p-2">
					<a href="https://www.obstri.com/">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 2048 2048"><path fill="currentColor" d="M1024 0q141 0 272 36t245 103t207 160t160 208t103 245t37 272q0 141-36 272t-103 245t-160 207t-208 160t-245 103t-272 37q-141 0-272-36t-245-103t-207-160t-160-208t-103-244t-37-273q0-141 36-272t103-245t160-207t208-160T751 37t273-37zm0 1920q123 0 237-32t214-90t182-141t140-181t91-214t32-238q0-123-32-237t-90-214t-141-182t-181-140t-214-91t-238-32q-123 0-237 32t-214 90t-182 141t-140 181t-91 214t-32 238q0 123 32 237t90 214t141 182t181 140t214 91t238 32zm597-880l48-144h75l-85 256h-75l-48-144l-48 144h-75l-85-256h75l48 144l48-144h74l48 144zm-464-144h75l-85 256h-75l-48-144l-48 144h-75l-85-256h75l48 144l48-144h74l48 144l48-144zm-512 0h75l-85 256h-75l-48-144l-48 144h-75l-85-256h75l48 144l48-144h74l48 144l48-144z"/></svg></span>
						<span class="flex-auto">Obsessed Triathlete</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.tri247.com/">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 2048 2048"><path fill="currentColor" d="M1024 0q141 0 272 36t245 103t207 160t160 208t103 245t37 272q0 141-36 272t-103 245t-160 207t-208 160t-245 103t-272 37q-141 0-272-36t-245-103t-207-160t-160-208t-103-244t-37-273q0-141 36-272t103-245t160-207t208-160T751 37t273-37zm0 1920q123 0 237-32t214-90t182-141t140-181t91-214t32-238q0-123-32-237t-90-214t-141-182t-181-140t-214-91t-238-32q-123 0-237 32t-214 90t-182 141t-140 181t-91 214t-32 238q0 123 32 237t90 214t141 182t181 140t214 91t238 32zm597-880l48-144h75l-85 256h-75l-48-144l-48 144h-75l-85-256h75l48 144l48-144h74l48 144zm-464-144h75l-85 256h-75l-48-144l-48 144h-75l-85-256h75l48 144l48-144h74l48 144l48-144zm-512 0h75l-85 256h-75l-48-144l-48 144h-75l-85-256h75l48 144l48-144h74l48 144l48-144z"/></svg></span>
						<span class="flex-auto">Tri 247</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.precisionhydration.com/">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 2048 2048"><path fill="currentColor" d="M1024 0q141 0 272 36t245 103t207 160t160 208t103 245t37 272q0 141-36 272t-103 245t-160 207t-208 160t-245 103t-272 37q-141 0-272-36t-245-103t-207-160t-160-208t-103-244t-37-273q0-141 36-272t103-245t160-207t208-160T751 37t273-37zm0 1920q123 0 237-32t214-90t182-141t140-181t91-214t32-238q0-123-32-237t-90-214t-141-182t-181-140t-214-91t-238-32q-123 0-237 32t-214 90t-182 141t-140 181t-91 214t-32 238q0 123 32 237t90 214t141 182t181 140t214 91t238 32zm597-880l48-144h75l-85 256h-75l-48-144l-48 144h-75l-85-256h75l48 144l48-144h74l48 144zm-464-144h75l-85 256h-75l-48-144l-48 144h-75l-85-256h75l48 144l48-144h74l48 144l48-144zm-512 0h75l-85 256h-75l-48-144l-48 144h-75l-85-256h75l48 144l48-144h74l48 144l48-144z"/></svg></span>
						<span class="flex-auto">Precision Hydration</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://protriathletes.org/">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 2048 2048"><path fill="currentColor" d="M1024 0q141 0 272 36t245 103t207 160t160 208t103 245t37 272q0 141-36 272t-103 245t-160 207t-208 160t-245 103t-272 37q-141 0-272-36t-245-103t-207-160t-160-208t-103-244t-37-273q0-141 36-272t103-245t160-207t208-160T751 37t273-37zm0 1920q123 0 237-32t214-90t182-141t140-181t91-214t32-238q0-123-32-237t-90-214t-141-182t-181-140t-214-91t-238-32q-123 0-237 32t-214 90t-182 141t-140 181t-91 214t-32 238q0 123 32 237t90 214t141 182t181 140t214 91t238 32zm597-880l48-144h75l-85 256h-75l-48-144l-48 144h-75l-85-256h75l48 144l48-144h74l48 144zm-464-144h75l-85 256h-75l-48-144l-48 144h-75l-85-256h75l48 144l48-144h74l48 144l48-144zm-512 0h75l-85 256h-75l-48-144l-48 144h-75l-85-256h75l48 144l48-144h74l48 144l48-144z"/></svg></span>
						<span class="flex-auto">PTO</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://the-daily-tri.com/">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 2048 2048"><path fill="currentColor" d="M1024 0q141 0 272 36t245 103t207 160t160 208t103 245t37 272q0 141-36 272t-103 245t-160 207t-208 160t-245 103t-272 37q-141 0-272-36t-245-103t-207-160t-160-208t-103-244t-37-273q0-141 36-272t103-245t160-207t208-160T751 37t273-37zm0 1920q123 0 237-32t214-90t182-141t140-181t91-214t32-238q0-123-32-237t-90-214t-141-182t-181-140t-214-91t-238-32q-123 0-237 32t-214 90t-182 141t-140 181t-91 214t-32 238q0 123 32 237t90 214t141 182t181 140t214 91t238 32zm597-880l48-144h75l-85 256h-75l-48-144l-48 144h-75l-85-256h75l48 144l48-144h74l48 144zm-464-144h75l-85 256h-75l-48-144l-48 144h-75l-85-256h75l48 144l48-144h74l48 144l48-144zm-512 0h75l-85 256h-75l-48-144l-48 144h-75l-85-256h75l48 144l48-144h74l48 144l48-144z"/></svg></span>
						<span class="flex-auto">The Daily Tri</span>
					</a>
				</li>
				<!-- ... -->
			</ul>
			
			{:else if tabsBasic === 4}
			
			<ul>
				<li class="p-2">
					<a href="https://open.spotify.com/playlist/6YOrPoLAO2favn6ZV1eKMN?si=01e9f93782b24a6e">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/></svg></span>
						<span class="flex-auto">Taylor Spivey - Bad b!tch</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://open.spotify.com/playlist/6mrCI6H1LGcs1Yqghh3YwN?si=d9953195651c4757">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/></svg></span>
						<span class="flex-auto">Eric Lagerstrom - TTL Summer</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://open.spotify.com/playlist/70iSlXBq1B13qRxrHnKRUX?si=a4d695a09ed5484c">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/></svg></span>
						<span class="flex-auto">Jan Frodeno - Frodissimo Spring Tunes</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://open.spotify.com/playlist/2dSoPSWqR5IQiwBYmwMCRL?si=7bbf9a50baea4b1c">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/></svg></span>
						<span class="flex-auto">Sam Laidlow - 2022 Vibes</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://open.spotify.com/playlist/1K8sAwfT0zM10xayKkmsQG?si=3ac84f6bd24a4c11">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/></svg></span>
						<span class="flex-auto">Paula Findlay - 60 minutes</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://open.spotify.com/playlist/0EOvud1ji0AFiUiDMPizON?si=112d0e2023d04909">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/></svg></span>
						<span class="flex-auto">Ben Kanute - class 30</span>
					</a>
				</li>
				
				<!-- ... -->
			</ul>

			{:else if tabsBasic === 5}
			
			<ul>
				<li class="p-2">
					<a href="https://www.amazon.com/dp/B084M8TBH3/?coliid=I1XGN81JMG9Q0F&colid=KLGU7GCX56J1&psc=0&ref_=list_c_wl_lv_ov_lig_dp_it">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8Z"/><path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"/><path stroke-linecap="round" d="M8 7h8m-8 3.5h5"/></g></svg>

</span>
						<span class="flex-auto">Alistair Brownlee - Relentless: Secrets of the Sporting Elite</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.amazon.com/dp/B001NLKSRU/?coliid=I8I6TADUA2D46&colid=KLGU7GCX56J1&psc=0&ref_=list_c_wl_lv_ov_lig_dp_it">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8Z"/><path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"/><path stroke-linecap="round" d="M8 7h8m-8 3.5h5"/></g></svg>

</span>
						<span class="flex-auto">John L Parker Jr - Once a Runner</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.amazon.com/dp/B087WNSLTF/?coliid=I1NYXLZSYJN6DQ&colid=KLGU7GCX56J1&psc=0&ref_=list_c_wl_lv_ov_lig_dp_it">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8Z"/><path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"/><path stroke-linecap="round" d="M8 7h8m-8 3.5h5"/></g></svg>

</span>
						<span class="flex-auto">Brock Gibbs - My Coworkers Think I'm A Pro</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.amazon.com/gp/product/B00RRT31L2/ref=kinw_myk_ro_title">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8Z"/><path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"/><path stroke-linecap="round" d="M8 7h8m-8 3.5h5"/></g></svg>

</span>
						<span class="flex-auto">Scott Tinley - Finding Triathlon</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.amazon.com/gp/product/B017OE42OE/ref=kinw_myk_ro_title">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8Z"/><path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"/><path stroke-linecap="round" d="M8 7h8m-8 3.5h5"/></g></svg>

</span>
						<span class="flex-auto">Matt Fitzgerald - How Bad Do You Want It?</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.amazon.com/gp/product/B00B4L04V4/ref=kinw_myk_ro_title">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8Z"/><path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"/><path stroke-linecap="round" d="M8 7h8m-8 3.5h5"/></g></svg>

</span>
						<span class="flex-auto">Ali and Jonny Brownlee - Swim, Bike, Run</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.amazon.com/gp/product/B00A5MRCCC/ref=kinw_myk_ro_title">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8Z"/><path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"/><path stroke-linecap="round" d="M8 7h8m-8 3.5h5"/></g></svg>

</span>
						<span class="flex-auto">John Pendergrass - Against the Odds</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.amazon.com/gp/product/B00LICT9YW/ref=kinw_myk_ro_title">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8Z"/><path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"/><path stroke-linecap="round" d="M8 7h8m-8 3.5h5"/></g></svg>

</span>
						<span class="flex-auto">Kilian Jornet - Run or Die</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.amazon.com/gp/product/B006PI6UYQ/ref=kinw_myk_ro_title">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8Z"/><path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"/><path stroke-linecap="round" d="M8 7h8m-8 3.5h5"/></g></svg>

</span>
						<span class="flex-auto">Matt Fitzgerald - Iron War</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.amazon.com/gp/product/B00FOVD4XU/ref=kinw_myk_ro_title">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8Z"/><path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"/><path stroke-linecap="round" d="M8 7h8m-8 3.5h5"/></g></svg>

</span>
						<span class="flex-auto">Chris McCormack - I'm Here to Win</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.amazon.com/gp/product/B0716LN6RL/ref=kinw_myk_ro_title">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8Z"/><path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"/><path stroke-linecap="round" d="M8 7h8m-8 3.5h5"/></g></svg>

</span>
						<span class="flex-auto">Kevin Clelland - Struggling Age-Grouper</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.amazon.com/gp/product/B005EM8NQ2/ref=kinw_myk_ro_title">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8Z"/><path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"/><path stroke-linecap="round" d="M8 7h8m-8 3.5h5"/></g></svg>

</span>
						<span class="flex-auto">Chrissie Wellington - A Life Without Limits</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.amazon.com/gp/product/B004CFBMRY/ref=kinw_myk_ro_title">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8Z"/><path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"/><path stroke-linecap="round" d="M8 7h8m-8 3.5h5"/></g></svg>

</span>
						<span class="flex-auto">Christopher McDougall - Born to Run</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://www.amazon.com/gp/product/B0077ROL40/ref=kinw_myk_ro_title">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8Z"/><path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"/><path stroke-linecap="round" d="M8 7h8m-8 3.5h5"/></g></svg>

</span>
						<span class="flex-auto">Adharanand Finn - Running with Kenyans</span>
					</a>
				</li>
				<!-- ... -->
			</ul>

			{:else if tabsBasic === 6}
			
			<ul>
				<li class="p-2">
					<a href="https://discord.com/channels/877956839373959168/930139386182516788">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/></svg></span>
						<span class="flex-auto">Lionel Sanders Racing</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://discord.com/channels/1049394664303763468/1049394664752550019">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/></svg></span>
						<span class="flex-auto">The Daily Tri</span>
					</a>
				</li>
				<li class="p-2">
					<a href="https://discord.com/channels/1111341317696536627/1111341318535393371">
						<span class="badge bg-primary-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/></svg></span>
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

