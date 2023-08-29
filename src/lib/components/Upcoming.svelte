<script lang="ts">
import { onMount } from 'svelte';

var endOfEurope = new Date("May 6, 2023, 09:00:00").getTime();
var endOfRoth = new Date("June 25, 2023, 09:00:00").getTime();
var endOfUS = new Date("Aug 5, 2023, 09:00:00").getTime();
var endOfAsia = "2023-08-20T07:00:00Z";
var endOf703W = "2023-08-26T04:30:00Z";
var endOf703M = "2023-08-27T04:30:00Z";
var endOfWCMEN = "2023-09-10T04:50:00Z";
var endOfWCWOMEN = "2023-10-14T16:25:00Z";

var days :number;
var hours :number;
var minutes :number; 
var seconds :number ;
var outputEurope :any;
var outputRoth :any;
var outputUS :any;
var outputAsia :any;
var output703W :any;
var output703M :any;
var outputWCMEN :any;
var outputWCWOMEN :any;
let now: number = new Date().getTime();
let distance: number;
let distanceRoth: number;
let distanceUS: number;
let distanceAsia: any;
let distance703W: number;
let distance703M: number;
let distanceWCMEN: number;
let distanceWCWOMEN: number;

onMount(() => {
const interval = setInterval(() => {
	  now = new Date().getTime();
}, 1000);

return () => { clearInterval(interval);
};
});
  
function time(now: number) {

  distance = endOfEurope - now;

  days = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((distance % (1000*60)) / 1000);

  return outputEurope = days + " days " + hours + " h " + minutes + " m " + seconds + " s";
 
  
}

function timeRoth(now: number) {

distanceRoth = endOfRoth - now;

var daysRoth = Math.floor(distanceRoth / (1000 * 60 * 60 * 24));
var hoursRoth = Math.floor((distanceRoth % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutesRoth = Math.floor((distanceRoth % (1000 * 60 * 60)) / (1000 * 60));
var secondsRoth = Math.floor((distanceRoth % (1000*60)) / 1000);

return outputRoth = daysRoth + " days " + hoursRoth + " h " + minutesRoth + " m " + secondsRoth + " s";

}


function timeUS(now: number) {

distanceUS = endOfUS - now;

var daysUS = Math.floor(distanceUS / (1000 * 60 * 60 * 24));
var hoursUS = Math.floor((distanceUS % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutesUS = Math.floor((distanceUS % (1000 * 60 * 60)) / (1000 * 60));
var secondsUS = Math.floor((distanceUS % (1000*60)) / 1000);

return outputUS = daysUS + " days " + hoursUS + " h " + minutesUS + " m " + secondsUS + " s";

}


function timeAsia(now: number) {

distanceAsia = Date.parse(endOfAsia) - now;

var daysAsia = Math.floor(distanceAsia / (1000 * 60 * 60 * 24));
var hoursAsia = Math.floor((distanceAsia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutesAsia = Math.floor((distanceAsia % (1000 * 60 * 60)) / (1000 * 60));
var secondsAsia = Math.floor((distanceAsia % (1000*60)) / 1000);

return outputAsia = daysAsia + " days " + hoursAsia + " h " + minutesAsia + " m " + secondsAsia + " s";

}

function time703W(now: number) {

var distance703W = Date.parse(endOf703W) - now;

var days703W = Math.floor(distance703W / (1000 * 60 * 60 * 24));
var hours703W = Math.floor((distance703W % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes703W = Math.floor((distance703W % (1000 * 60 * 60)) / (1000 * 60));
var seconds703W = Math.floor((distance703W % (1000*60)) / 1000);


return output703W = days703W + " days " + hours703W + " h " + minutes703W + " m " + seconds703W + " s";

}


function time703M(now: number) {

var distance703M = Date.parse(endOf703M) - now;

var days703M = Math.floor(distance703M / (1000 * 60 * 60 * 24));
var hours703M = Math.floor((distance703M % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes703M = Math.floor((distance703M % (1000 * 60 * 60)) / (1000 * 60));
var seconds703M = Math.floor((distance703M % (1000*60)) / 1000);

return output703M = days703M + " days " + hours703M + " h " + minutes703M + " m " + seconds703M + " s";

}



function timeWCMEN(now: number) {

distanceWCMEN = Date.parse(endOfWCMEN) - now;

var daysWCMEN = Math.floor(distanceWCMEN / (1000 * 60 * 60 * 24));
var hoursWCMEN = Math.floor((distanceWCMEN % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutesWCMEN = Math.floor((distanceWCMEN % (1000 * 60 * 60)) / (1000 * 60));
var secondsWCMEN = Math.floor((distanceWCMEN % (1000*60)) / 1000);

return outputWCMEN = daysWCMEN + " days " + hoursWCMEN + " h " + minutesWCMEN + " m " + secondsWCMEN + " s";

}

function timeWCWOMEN(now: number) {

distanceWCWOMEN = Date.parse(endOfWCWOMEN) - now;

var daysWCWOMEN = Math.floor(distanceWCWOMEN / (1000 * 60 * 60 * 24));
var hoursWCWOMEN = Math.floor((distanceWCWOMEN % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutesWCWOMEN = Math.floor((distanceWCWOMEN % (1000 * 60 * 60)) / (1000 * 60));
var secondsWCWOMEN = Math.floor((distanceWCWOMEN % (1000*60)) / 1000);

return outputWCWOMEN = daysWCWOMEN + " days " + hoursWCWOMEN + " h " + minutesWCWOMEN + " m " + secondsWCWOMEN + " s";

}

	
</script>


<dl class="list-dl">
	<div>
		<span class="badge-icon p-2 variant-soft-secondary text-2xl">🗓️</span>
		<a href="https://protriathletes.org/events/pto-tour/european-open/pro/"
			><span class="flex-auto">
				<dt class="font-bold">PTO European Open</dt>
				<dd class="text-sm opacity-50 text-ellipsis">6 May - Ibiza, Spain</dd>
				<dd class="text-sm opacity-50 text-ellipsis">
				
					{#if distance < 1}
					<p>Complete</p>
					{:else}
					{time(now)} 
					{/if}

				</dd>
			</span></a
		>
	</div>

	<div>
		<span class="badge-icon p-2 variant-soft-secondary text-2xl">🗓️</span>
		<a href="https://www.challenge-roth.com/en/"
			><span class="flex-auto">
				<dt class="font-bold">Challenge Roth</dt>
				<dd class="text-sm opacity-50 text-ellipsis">25 June - Roth, Germany</dd>
				<dd class="text-sm opacity-50 text-ellipsis">
				
					{#if distanceRoth < 1}
					<p>Complete</p>
					{:else}
					{timeRoth(now)} 
					{/if}
				
				</dd>
			</span></a
		>
	</div>

	<div>
		<span class="badge-icon p-2 variant-soft-secondary text-2xl">🗓️</span>
		<a href="https://protriathletes.org/events/pto-tour/us-open/pro/"
			><span class="flex-auto">
				<dt class="font-bold">PTO US Open</dt>
				<dd class="text-sm opacity-50 text-ellipsis">5 August - Milwaukee, USA</dd>
				<dd class="text-sm opacity-50 text-ellipsis">
				
					{#if distanceUS < 1}
					<p>Complete</p>
					{:else}
					{timeUS(now)} 
					{/if}
					
				</dd>
			</span></a
		>
	</div>

	<div>
		<span class="badge-icon p-2 variant-soft-secondary text-2xl">🗓️</span>
		<a href="https://protriathletes.org/events/pto-tour/asian-open/pro/"
			><span class="flex-auto">
				<dt class="font-bold">PTO Asian Open</dt>
				<dd class="text-sm opacity-50 text-ellipsis">20 August - Singapore</dd>
				<dd class="text-sm opacity-50 text-ellipsis">

					{#if distanceAsia < 1}
					<p>Complete</p>
					{:else}
					L: Complete <br>
					M: {timeAsia(now)} 
					{/if}


				</dd>
			</span></a
		>
	</div>


	<div>
		<span class="badge-icon p-2 variant-soft-secondary text-2xl">🗓️</span>
		<a href="https://www.ironman.com/im703-world-championship-2023"
			><span class="flex-auto">
				<dt class="font-bold">Ironman 70.3 WC</dt>
				<dd class="text-sm opacity-50 text-ellipsis">26/27 August - Lahti,Finland</dd>
				<dd class="text-sm opacity-50 text-ellipsis">
					
					{#if distance703W < 1}
					<p>Complete</p>
					{:else}
					L: Complete
					{/if}<br>

					{#if distance703M < 1}
					<p>Complete</p>
					{:else}
					M: Complete
					{/if}

				</dd>
			</span></a
		>
	</div>

	<div>
		<span class="badge-icon p-2 variant-soft-secondary text-2xl">🗓️</span>
		<a href="https://www.ironman.com/im-world-championship-nice"
			><span class="flex-auto">
				<dt class="font-bold">Ironman WC Men</dt>
				<dd class="text-sm opacity-50 text-ellipsis">10 September - Nice, France</dd>
				<dd class="text-sm opacity-50 text-ellipsis">

					{#if distanceWCMEN < 1}
					<p>Complete</p>
					{:else}
					{timeWCMEN(now)} 
					{/if}

				</dd>
			</span></a
		>
	</div>

	<div>
		<span class="badge-icon p-2 variant-soft-secondary text-2xl">🗓️</span>
		<a href="https://www.ironman.com/im-world-championship-2023"
			><span class="flex-auto">
				<dt class="font-bold">Ironman WC Women</dt>
				<dd class="text-sm opacity-50 text-ellipsis">14 October - Kona, Hawaii</dd>
				<dd class="text-sm opacity-50 text-ellipsis">

					{#if distanceWCWOMEN < 1}
					<p>Complete</p>
					{:else}
					{timeWCWOMEN(now)} 
					{/if}

				</dd>
			</span></a
		>
	</div>

</dl>


