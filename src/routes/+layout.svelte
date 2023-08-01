<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import {
		AppShell,
		AppBar,
		Avatar,
		LightSwitch,
		Drawer,
		drawerStore
	} from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PageTransition from './transition.svelte';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';

	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	function drawerOpen(): void {
		drawerStore.open();
	}
	function drawerClose(): void {
		drawerStore.close();
	}
	export let data;



	import { onMount, onDestroy } from 'svelte';
	import { fly, slide } from 'svelte/transition';
	
	let greetings = ['Swim', 'Bike', 'Run', 'Oats'];
	let index = 0;
	let roller: number | undefined;
	
	onMount(() => {
		roller = setInterval(() => {
			if (index === greetings.length - 1) index = 0;
			else index++;
		}, 1500);
	});
	
	onDestroy(() => {
		clearInterval(roller);
	});




</script>

<Drawer class="max-w-md">
	
		<a href="/" on:click={drawerClose}>
			<div class="flex items-center justify-start mx-auto pl-10">
				<span transition:fly={{ y: 200, duration: 2000 }} class="bg-gradient-to-br from-ao-orange to-ao-pink bg-clip-text text-transparent box-decoration-clone">
					<strong class="text-3xl uppercase px-2">aero</strong></span>
				<img src="/images/aologosm.png" class="h-24" alt="Aero Oats Logo" />

				{#key index}
				<span class="bg-gradient-to-br from-ao-pink to-ao-orange bg-clip-text text-transparent box-decoration-clone">
					<strong class="text-3xl uppercase px-2">{greetings[index]}</strong></span>
				{/key}
			</div>
		</a>

		
	

	
		<hr />
	
	<Navigation />
</Drawer>

<AppShell slotHeader="pb-4" slotPageFooter="pt-4">
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="btn btn-sm mr-1" on:click={drawerOpen}>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
					
					<div class="hidden sm:block xl:hidden text-xl">👈</div>
				</div>
			</svelte:fragment>
			<a href="/">
				<div class="flex items-center justify-center mx-auto">
					<span class="bg-gradient-to-br from-ao-orange to-ao-pink bg-clip-text text-transparent box-decoration-clone">
						<strong class="text-3xl uppercase px-2">aero</strong></span>
					<img src="/images/aologosm.png" class="h-24" alt="Aero Oats Logo" />
					<span class="bg-gradient-to-br from-ao-pink to-ao-orange bg-clip-text text-transparent box-decoration-clone">
						<strong class="text-3xl uppercase px-2">oats</strong></span>
				</div>
			</a>
			
			<svelte:fragment slot="trail">
				
				<LightSwitch />
				
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<PageTransition url={data.url}>
		<slot />
	</PageTransition>
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
</AppShell>
