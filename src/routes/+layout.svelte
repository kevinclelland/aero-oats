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
	import type { DrawerSettings } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PageTransition from './transition.svelte';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';

	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });


	const drawerSettings: DrawerSettings = {
	
	bgDrawer: '',
	bgBackdrop: '',
	width: 'max-w-xs md:max-w-md',
	
	
};

	function drawerOpen(): void {
		drawerStore.open(drawerSettings);
	}
	function drawerClose(): void {
		drawerStore.close();
	}
	export let data;


</script>

<Drawer>
	
	<a href="/" on:click={drawerClose}>
	<header>
		<img src="/images/Banner4.jpg" class="bg-black/50 w-full" alt="Post" />
	</header>
</a>
	
		<hr />
	
	<Navigation />
</Drawer>

<AppShell slotHeader="" slotPageFooter="pt-2">
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

					<img src="/images/logo4sm31.png" class="max-h-28 w-fit" alt="Aero Oats Logo" />
	
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
