<script lang="ts">
	import { Stepper, Step, Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	function onCompleteHandler(e: Event): void {
		console.log('event:complete', e);
	}
</script>

<h1 class="text-6xl p-4 text-center">Start Triathlon</h1>

<div class="mx-auto max-w-4xl text-token grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
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
		<p class="text-2xl">Before you continue...</p>
		<p>Mandatory viewing to get you pumped!</p>
		<div class="p-4">
		<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/li48PBhbXQ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
		</div>
	</div>



	<div class="col-span-5 card card-hover p-4">
		<p class="text-2xl p-4 font-semibold">Equipment</p>
		<Stepper class="p-4" buttonCompleteLabel="👇Next Section">
			<Step>
				<svelte:fragment slot="header">Watch this</svelte:fragment>
				<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/n3331GKOwZQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</Step>
			<Step>
				<svelte:fragment slot="header">Clothing</svelte:fragment>
				<ul class="list-decimal">
				<li>Trisuit</li>
				</ul>
			</Step>
			<Step>
				<svelte:fragment slot="header">The Swim</svelte:fragment>
				<ul class="list-decimal">
					<li>Goggles</li>
					<li>Swimming cap</li>
					<li>Wetsuit (optional)</li>
				</ul>
			</Step>
			<Step>
				<svelte:fragment slot="header">The Bike</svelte:fragment>
				<ul class="list-decimal">
				<li>Race belt</li>
				<li>Helmet</li>
				<li>Bike (preferably a road bike)</li>
				<li>Bike shoes (running shoes can be used)</li>
				</ul>
			</Step>
			<Step on:complete={onCompleteHandler}>
				<svelte:fragment slot="header">The Run</svelte:fragment>
				<ul class="list-decimal">
					<li>Running shoes</li>
				</ul>
			</Step>
			<!-- ... -->
		</Stepper>
	</div>

	<div class="col-span-5 card card-hover p-4">
		<p class="text-2xl p-4 font-semibold">Entering a race</p>
		<Stepper class="p-4" buttonCompleteLabel="👇Next Section">
			<Step>
				<svelte:fragment slot="header">Race Distances</svelte:fragment>
				Coming soon
			</Step>
			<Step>
				<svelte:fragment slot="header">Enter</svelte:fragment>
				Coming soon
			</Step>
			<Step>
				<svelte:fragment slot="header">Train</svelte:fragment>
				Coming soon
			</Step>
			<Step>
				<svelte:fragment slot="header">Race</svelte:fragment>
				Coming soon
			</Step>
			<Step on:complete={onCompleteHandler}>
				<svelte:fragment slot="header">Race</svelte:fragment>
				Coming soon
			</Step>
			<!-- ... -->
		</Stepper>
	</div>

	<div class="col-span-5 card card-hover p-4">
		<p class="text-2xl p-4 font-semibold">Training</p>
		<Stepper class="p-4" buttonCompleteLabel="👇Next Section">
			<Step>
				<svelte:fragment slot="header">Swim</svelte:fragment>
				Coming soon
			</Step>
			<Step>
				<svelte:fragment slot="header">Bike</svelte:fragment>
				Coming soon
			</Step>
			<Step>
				<svelte:fragment slot="header">Run</svelte:fragment>
				Coming soon
			</Step>
			<Step>
				<svelte:fragment slot="header">Other</svelte:fragment>
				Coming soon
			</Step>
			<Step on:complete={onCompleteHandler}>
				<svelte:fragment slot="header">Watch This</svelte:fragment>
				Coming soon
			</Step>
			<!-- ... -->
		</Stepper>
	</div>

	<div class="col-span-5 card card-hover p-4">
		<p class="text-2xl p-4 font-semibold">Racing</p>
		<Stepper class="p-4" buttonCompleteLabel="👇Next Section">
			<Step>
				<svelte:fragment slot="header">I'm doing a triathlon!</svelte:fragment>
				Coming soon
			</Step>
			<Step>
				<svelte:fragment slot="header">Swim</svelte:fragment>
				Coming soon
			</Step>
			<Step>
				<svelte:fragment slot="header">Bike</svelte:fragment>
				Coming soon
			</Step>
			<Step>
				<svelte:fragment slot="header">Run</svelte:fragment>
				Coming soon
			</Step>
			<Step on:complete={onCompleteHandler}>
				<svelte:fragment slot="header">Celebrate</svelte:fragment>
				Coming soon
			</Step>
			<!-- ... -->
		</Stepper>
	</div>

	<div class="col-span-5 card card-hover p-4">
		<p class="text-2xl p-4 font-semibold">What Next?</p>
		<Stepper class="p-4" buttonCompleteLabel="TRIATHLETE - YES!">
			<Step>
				<svelte:fragment slot="header">Coaching</svelte:fragment>
				(content)
			</Step>
			<Step>
				<svelte:fragment slot="header">Assess Goals</svelte:fragment>
				(content)
			</Step>
			<Step>
				<svelte:fragment slot="header">Lifestyle</svelte:fragment>
				(content)
			</Step>
			<Step>
				<svelte:fragment slot="header">Equipment</svelte:fragment>
				(content)
			</Step>
			<Step on:complete={onCompleteHandler}>
				<svelte:fragment slot="header">Community</svelte:fragment>
				(content)
			</Step>
			<!-- ... -->
		</Stepper>
	</div>
</div>
