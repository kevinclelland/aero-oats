<script lang="ts">
    import { Stepper, Step } from '@skeletonlabs/skeleton';
    function onCompleteHandler(e: Event): void { console.log('event:complete', e); }
</script>


<div class="flex mx-auto gird grid-cols 1 justify-center">


<div class="cols-span-1 p-4">

    <h1 class="text-7xl p-4">Start Triathlon</h1>

<Stepper>
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