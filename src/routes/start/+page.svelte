<script lang="ts">
	import { Stepper, Step, Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	function onCompleteHandler(e: Event): void {
		console.log('event:complete', e);
	}
</script>

<h1 class="text-6xl p-4 text-center">🗺️ Start to Tri</h1>

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
		<p class="px-4">You do need "invest" in some kit, but it's not nearly as much as people think. Often many of these items are relatively easy to borrow for your first race.</p>
		<Stepper class="p-4" buttonCompleteLabel="👇Next Section">
			
			<Step>
				<svelte:fragment slot="header">Clothing</svelte:fragment>
				
				<ul class="list-decimal px-4">
				<li><div class="font-bold">Trisuit</div>You can do the whole race in a speedo and change into cycling and running kit, but, getting a tri-suit will make your race day experience SO much less complicated and enjoyable.</li>
				</ul>
			</Step>
			<Step>
				<svelte:fragment slot="header">The Swim 🏊️</svelte:fragment>
				<ul class="list-decimal px-4">
					<li><div class="font-bold">Goggles</div>Finding a pair of goggles that don't leak and allow you to see while swimming is essential, especially if you're an inexperienced swimmer and need to confidence.</li>
					<li><div class="font-bold">Swimming cap</div>Unless provided by the race, wearing a swim cap is mandatory for safety reasons. The silicon ones are more comfortable than the latext ones but either will do.</li>
					<li><div class="font-bold">Wetsuit (optional)</div>Definitely not a requirement but is a great extra for confidence in the water and should help you go a little quicker too.</li>
				</ul>
			</Step>
			<Step>
				<svelte:fragment slot="header">The Bike 🚴</svelte:fragment>
				<ul class="list-decimal px-4">
				<li><div class="font-bold">Race belt</div>Most races will require you to put a race number on after the swim. An inexpensive race belt will make this simple and avoid you needing to use safety pins.</li>
				<li><div class="font-bold">Helmet</div>Another mandatory safety item. Make sure the helmet fits and doesn't have any cracks.</li>
				<li><div class="font-bold">Bike</div>Any bike will do as long as it's not terribly "frustrating" to ride i.e. the brakes aren't rubbing or the seatpost doesn't slip down. A road bike will be a lot faster and more enjoyable for a road triathlon.</li>
				<li><div class="font-bold">Bike shoes</div>Optional: if you have clipless pedals on your bike then a specific pair of cycling shoes with cleats can enable you to be more efficient. Apart from learning to use the gears on a bike, I find learning to clip in and out bike pedals to be one of the hardest skills to learn. Be mindful to practice this before your first race.</li>
				<li><div class="font-bold">Sunglasses</div>Optional: These can help protect your eyes and improve visibility.</li>
				</ul>
			</Step>
			<Step>
				<svelte:fragment slot="header">The Run 🏃‍♂️</svelte:fragment>
				<ul class="list-decimal px-4">
					<li><div class="font-bold">Running shoes</div>Essentially all you need is a decent pair of shoes</li>
					<li><div class="font-bold">Running hat</div>Optional: Any hat to protect you from the sun</li>
				</ul>
			</Step>
			<Step on:complete={onCompleteHandler}>
				<svelte:fragment slot="header">Watch this</svelte:fragment>
				<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/n3331GKOwZQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</Step>
			
			<!-- ... -->
		</Stepper>
	</div>

	<div class="col-span-5 card card-hover p-4">
		<p class="text-2xl p-4 font-semibold">Entering a race</p>
		<p class="px-4">Check your local race calendar and make the committment.</p>
		<Stepper class="p-4" buttonCompleteLabel="👇Next Section">
			<Step>
				<svelte:fragment slot="header">Race Distances</svelte:fragment>
				<p class="px-4">I highly recommend either a Sprint Distance or, at a push, an Olympic Distance for your first attempt. Not because you can't complete longer distances, but the shorter distances are usually more friendly and fun.</p>
				<ul class="list-disc px-4">
					<li><div class="font-bold">Sprint: Swim: 750m, Bike: 20km, Run: 5km</div></li>
					<li><div class="font-bold">Olympic: Swim: 1500m, Bike: 40km, Run: 10km</div></li>
					<li><div class="font-bold">Half: Swim: 1900m, Bike: 90km, Run: 21km (also called Half-Ironman or 70.3)</div></li>
					<li><div class="font-bold">Full: Swim: 3800m, Bike: 180km, Run: 42km (also called Ironman)</div></li>
					<li><div class="font-bold">100km: Swim: 2000m, Bike: 80km, Run: 18km (used by The PTO)</div></li>
				</ul>
			</Step>
			<Step>
				<svelte:fragment slot="header">Find and Enter a race</svelte:fragment>
				<p class="px-4">Speak to local athetes or reach out over social media to see if any one can suggest a first race. Depending on your fitness levels and confidence, you may want to give yourself a few weeks to get some training done. Once you've decided on the race, you're likely to be able to enter and pay online. Some races require a federation license but should also allow you to purchase a day license when entering.</p>
				<p class="px-4">That's it! Keep an eye out on your mails as the organiser will often email through some race instructions with the rules and other important info. Some events may need you to register the day before.</p>
			</Step>
			<Step on:complete={onCompleteHandler}>
				<svelte:fragment slot="header">Train for your race</svelte:fragment>
				<p class="px-4">It's not required but, without doubt, joining a tri-club will help onboard you into this wonderful sport. Most clubs will meet regularly during the week and have various levels of programmes that you can slot into.</p>
				<p class="px-4">If a tri-club isn't possible or just isn't your vibe, there are many in-person or online coaching options available.</p>
				<p class="px-4">And if coaching also isn't your vibe just yet, check out the next section below this for some general high-level guidelines</p>
			</Step>
			
			<!-- ... -->
		</Stepper>
	</div>

	<div class="col-span-5 card card-hover p-4">
		<p class="text-2xl p-4 font-semibold">Training</p>
		<p class="px-4">Here are some very high-level and generic suggestions on what to do if you don't have coaching. This is caveated by making sure you are physically healthy enough to start exercise and will be allowed to train with a doctor.</p>
		<Stepper class="p-4" buttonCompleteLabel="👇Next Section">
			<Step>
				<svelte:fragment slot="header">Structure</svelte:fragment>
				<p>Training often but little is far better than doing a few epic sessions infrequently. Try to get into a routine of doing something every day. This could be a 30min run, a 45min bike ride, or a 1hr swim. The more you can do, the better, but don't overdo it. If you're feeling tired, take a day off. If you're feeling good, do a little more. The key is consistency. An example week could look like this:</p>
				<ul class="list-disc px-4">
					<li><div class="font-bold">Monday: Swim 🏊️</div></li>
					<li><div class="font-bold">Tuesday: Run 🏃</div></li>
					<li><div class="font-bold">Wednesday: Bike 🚴</div></li>
					<li><div class="font-bold">Thursday: Brick: Bike + Run 🚴 🏃</div></li>
					<li><div class="font-bold">Friday: Swim 🏊️</div></li>
					<li><div class="font-bold">Saturday: Long Bike 🚴</div></li>
					<li><div class="font-bold">Sunday: Long Run 🏃</div></li>
				</ul>
			</Step>
			<Step>
				<svelte:fragment slot="header">Swim</svelte:fragment>
				<p class="px-4">There's lots of resources on the internet but here are some example workouts:</p>
				<ul class="list-disc px-4">
					<li><div class="font-bold">Short: 200m Warm Up, 4 * 50m with 20s rest, 4 * 25m with 15s rest, 200m Cool Down</div></li>
					<li><div class="font-bold">Endurance: 200m Warm Up, 2 * 400m with 30s rest, 2 * 200m with 20s rest, 200m Cool Down</div></li>
					<li><div class="font-bold">Technique: 200m Warm Up, 4 * 25m kicking, 400m drills, 4 * 25m with 20s rest, 100m Cool Down</div></li>
					
				</ul>
			</Step>
			<Step>
				<svelte:fragment slot="header">Bike</svelte:fragment>
				<p class="px-4">Time on the bike is the most important thing. Learning to ride the bike and being comfortable on it is key. Here are some example workouts:</p>
				<ul class="list-disc px-4">
					<li><div class="font-bold">Short: 10min cycling easy, 5 * 1min hard, 1min easy, 10min cycling easy</div></li>
					<li><div class="font-bold">Endurance: 1 hour</div></li>
					<li><div class="font-bold">Long Ride: 90min easy riding. </div></li>
					
				</ul>
			</Step>
			<Step>
				<svelte:fragment slot="header">Run</svelte:fragment>
				<p class="px-4">In my mind the biggest goal with run training is to not get injured. I would rather you train very conservatively here than go crazy and have to take a few weeks off due to injury. Here are some example workouts:</p>
				<ul class="list-disc px-4">
					<li><div class="font-bold">Short: 10min warm up, 10min fartlek not going faster than 90%, 10min warm down.</div></li>
					<li><div class="font-bold">Endurance: 30min easy running.</div></li>
					<li><div class="font-bold">Long Run: 45min easy running.</div></li>
					
				</ul>
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
