<script lang="ts">
	import { afterNavigate, beforeNavigate } from '$app/navigation'
	import { gsap } from 'gsap/dist/gsap'
	import { Flip } from 'gsap/dist/Flip'

	gsap.registerPlugin(Flip)

	let state: Flip.FlipState

	beforeNavigate(async () => {
		state = Flip.getState('.cover, .title')
	})

	afterNavigate(async () => {
		Flip.from(state, {
			targets: '.cover, .title',
			duration: 0.3,
			scale: true,
			ease: 'power1.easeOut',
		})
	})
</script>


<slot />
