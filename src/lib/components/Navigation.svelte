<script lang="ts">
	import { drawerStore } from '@skeletonlabs/skeleton';

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a href="/" on:click={drawerClose}>Homepage</a></li>
		<li><a href="/start" on:click={drawerClose}>Start Triathlon</a></li>
		<li><a href="/athleteprofiles" on:click={drawerClose}>Athlete Profiles</a></li>
		<li><a href="/tools" on:click={drawerClose}>Tools</a></li>
		<li><a href="/racereports" on:click={drawerClose}>Race Report Almanac</a></li>
		<li><a href="/resources" on:click={drawerClose}>Resources</a></li>
		<li><a href="/contact" on:click={drawerClose}>About and Contact</a></li>
		<!--<li><a href="/almanac" on:click={drawerClose}>Almanac</a></li>
		<li><a href="/forum" on:click={drawerClose}>Forum</a></li>
		<li><a href="/blog" on:click={drawerClose}>Blog</a></li>-->
	</ul>
</nav>
