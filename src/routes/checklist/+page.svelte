<script lang="ts">
import { ProgressBar } from '@skeletonlabs/skeleton';
import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
let valueMultiple: string[] = [];


$: length = valueMultiple.length;
$: complete = length / props.max * 100;

function myFunction() {
        valueMultiple.push();
        length = valueMultiple.length;
        
    }
   
$: props = {
		determinate: true,
		value: length,
		max: 16,
	};


</script>

<p class="text-center text-ao-pink dark:text-ao-orange text-3xl font-semibold p-4">
    Race Day Checklist
</p>

<div class="p-2 max-w-7xl mx-auto">
<ProgressBar label="Progress Bar" height="h-10" bind:value={props.value} max={props.max} />
<p class="text-center">Percent Complete: {complete}</p>
</div>

<div class="p-4 max-w-sm mx-auto">
    <p class="p-2 text-center">Click on each item to select</p>
<ListBox multiple>
	<ListBoxItem bind:group={valueMultiple} name="medium" value="trisuit" class="border-2 border-current" on:click={myFunction}>Trisuit</ListBoxItem>
	<ListBoxItem bind:group={valueMultiple} name="medium" value="wetsuit" class="border-2 border-current" on:click={myFunction}>Wetsuit</ListBoxItem>
	<ListBoxItem bind:group={valueMultiple} name="medium" value="chafecream" class="border-2 border-current" on:click={myFunction}>Anti-chafe cream</ListBoxItem>
    <ListBoxItem bind:group={valueMultiple} name="medium" value="swimcap" class="border-2 border-current" on:click={myFunction}>Swim Cap</ListBoxItem>
    <ListBoxItem bind:group={valueMultiple} name="medium" value="goggles" class="border-2 border-current" on:click={myFunction}>Goggles</ListBoxItem>
    <ListBoxItem bind:group={valueMultiple} name="medium" value="socks" class="border-2 border-current" on:click={myFunction}>Socks</ListBoxItem>
    <ListBoxItem bind:group={valueMultiple} name="medium" value="cyclingshoes" class="border-2 border-current" on:click={myFunction}>Cycling Shoes</ListBoxItem>
    <ListBoxItem bind:group={valueMultiple} name="medium" value="bike" class="border-2 border-current" on:click={myFunction}>Bike</ListBoxItem>
    <ListBoxItem bind:group={valueMultiple} name="medium" value="helmet" class="border-2 border-current" on:click={myFunction}>Helmet</ListBoxItem>
    <ListBoxItem bind:group={valueMultiple} name="medium" value="sunglasses" class="border-2 border-current" on:click={myFunction}>Sunglasses</ListBoxItem>
    <ListBoxItem bind:group={valueMultiple} name="medium" value="waterbottles" class="border-2 border-current" on:click={myFunction}>Water Bottles</ListBoxItem>
    <ListBoxItem bind:group={valueMultiple} name="medium" value="nutritionhydration" class="border-2 border-current" on:click={myFunction}>Nutrition/Hydration</ListBoxItem>
    <ListBoxItem bind:group={valueMultiple} name="medium" value="racebelt" class="border-2 border-current" on:click={myFunction}>Race Belt</ListBoxItem>
    <ListBoxItem bind:group={valueMultiple} name="medium" value="runningshoes" class="border-2 border-current" on:click={myFunction}>Running Shoes</ListBoxItem>
    <ListBoxItem bind:group={valueMultiple} name="medium" value="runningcap" class="border-2 border-current" on:click={myFunction}>Running Cap</ListBoxItem>
    <ListBoxItem bind:group={valueMultiple} name="medium" value="champion" class="border-2 border-current" on:click={myFunction}>Champion Mindset</ListBoxItem>
</ListBox>
</div>

