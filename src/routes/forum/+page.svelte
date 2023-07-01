<script lang="ts">
    
    /** @type {import('./$types').PageData} */
  export let data: any;
  </script>
  

<div class="p-4">
  {#each data.posts as post}
  <li>
    <a target="_blank" href={post.link} rel="noreferrer">
      {post.title}
    </a>
  </li>
{/each}
</div>

  