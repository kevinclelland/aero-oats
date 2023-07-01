<script lang="ts">
	import { Stepper, Step, Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	function onCompleteHandler(e: Event): void {
		console.log('event:complete', e);
	}
</script>

<h1 class="text-7xl p-4 text-center">Start Here</h1>

<div class="mx-auto max-w-7xl text-token grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
	<div class="col-span-5 card card-hover p-4">
		<p class="text-2xl pb-1 font-bold py-4">triathlon</p>
		<p class="text-xl pb-2 italic">(noun) | /trī-ˈa-thlän/</p>

		<ul class="list p-4">
			<li>
				👉 A multi-sport endurance event involving three consecutive and distinct disciplines,
				swimming 🏊, cycling 🚴, and running 🏃.
			</li>
		</ul>

		<p class="text-2xl pb-1 font-bold py-4">triathlete</p>
		<p class="text-xl pb-2 italic">(noun) | /trī-ˈæθ-lēt/</p>

		<ul class="list p-4">
			<li>👉 A person who participates in and competes in the sport of triathlon.</li>
		</ul>
	</div>

	<div class="col-span-5 card card-hover p-4">
		<p class="text-2xl">So you want to be a Triathlete?</p>
		<p>Follow these steps taking you through</p>
		<ul>
			<li>☝ Equipment</li>
			<li>✌ Entering a Race</li>
			<li>👌 Training</li>
			<li>👊 Racing</li>
			<li>✋ What's next</li>
		</ul>
	</div>

	<div class="col-span-5 card card-hover p-4">
		<p class="text-2xl p-4">Equipment</p>
		<Stepper class="p-4">
			<Step>
				<svelte:fragment slot="header">Equipment</svelte:fragment>
				(content)
			</Step>
			<Step>
				<svelte:fragment slot="header">Enter</svelte:fragment>
				(content)
			</Step>
			<Step>
				<svelte:fragment slot="header">Train</svelte:fragment>
				(content)
			</Step>
			<Step>
				<svelte:fragment slot="header">Race</svelte:fragment>
				(content)
			</Step>
			<Step on:complete={onCompleteHandler}>
				<svelte:fragment slot="header">Race</svelte:fragment>
				(content)
			</Step>
			<!-- ... -->
		</Stepper>
	</div>

	<div class="col-span-5 card card-hover p-4">
		<p class="text-2xl p-4">Entering a race</p>
		<Stepper class="p-4">
			<Step>
				<svelte:fragment slot="header">Equipment</svelte:fragment>
				(content)
			</Step>
			<Step>
				<svelte:fragment slot="header">Enter</svelte:fragment>
				(content)
			</Step>
			<Step>
				<svelte:fragment slot="header">Train</svelte:fragment>
				(content)
			</Step>
			<Step>
				<svelte:fragment slot="header">Race</svelte:fragment>
				(content)
			</Step>
			<Step on:complete={onCompleteHandler}>
				<svelte:fragment slot="header">Race</svelte:fragment>
				(content)
			</Step>
			<!-- ... -->
		</Stepper>
	</div>

	<div class="col-span-5 card card-hover p-4">
		<p class="text-2xl p-4">Training</p>
		<Stepper class="p-4">
			<Step>
				<svelte:fragment slot="header">Equipment</svelte:fragment>
				(content)
			</Step>
			<Step>
				<svelte:fragment slot="header">Enter</svelte:fragment>
				(content)
			</Step>
			<Step>
				<svelte:fragment slot="header">Train</svelte:fragment>
				(content)
			</Step>
			<Step>
				<svelte:fragment slot="header">Race</svelte:fragment>
				(content)
			</Step>
			<Step on:complete={onCompleteHandler}>
				<svelte:fragment slot="header">Race</svelte:fragment>
				(content)
			</Step>
			<!-- ... -->
		</Stepper>
	</div>

	<div class="col-span-5 card card-hover p-4">
		<p class="text-2xl p-4">Racing</p>
		<Stepper class="p-4">
			<Step>
				<svelte:fragment slot="header">Equipment</svelte:fragment>
				(content)
			</Step>
			<Step>
				<svelte:fragment slot="header">Enter</svelte:fragment>
				(content)
			</Step>
			<Step>
				<svelte:fragment slot="header">Train</svelte:fragment>
				(content)
			</Step>
			<Step>
				<svelte:fragment slot="header">Race</svelte:fragment>
				(content)
			</Step>
			<Step on:complete={onCompleteHandler}>
				<svelte:fragment slot="header">Race</svelte:fragment>
				(content)
			</Step>
			<!-- ... -->
		</Stepper>
	</div>

	<div class="col-span-5 card card-hover p-4">
		<p class="text-2xl p-4">What Next?</p>
		<Stepper class="p-4">
			<Step>
				<svelte:fragment slot="header">Equipment</svelte:fragment>
				(content)
			</Step>
			<Step>
				<svelte:fragment slot="header">Enter</svelte:fragment>
				(content)
			</Step>
			<Step>
				<svelte:fragment slot="header">Train</svelte:fragment>
				(content)
			</Step>
			<Step>
				<svelte:fragment slot="header">Race</svelte:fragment>
				(content)
			</Step>
			<Step on:complete={onCompleteHandler}>
				<svelte:fragment slot="header">Race</svelte:fragment>
				(content)
			</Step>
			<!-- ... -->
		</Stepper>
	</div>
</div>
