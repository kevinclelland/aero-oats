<script lang="ts">
    
    /** @type {import('./$types').PageData} */
  export let data: any;
  </script>
  

<div class="p-4">
  {#each data.newsletters as newsletter}
  <li>
    <a target="_blank" href={newsletter.link} rel="noreferrer">
      {newsletter.title}
    </a>
  </li>
{/each}
</div>

  