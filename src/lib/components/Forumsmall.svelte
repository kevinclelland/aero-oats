<script lang="ts">

import { formatDate } from '$lib/utils'
import { Avatar} from '@skeletonlabs/skeleton';

export let data: any

</script>



<article>

    <!-- Posts -->
    <section>
                            
        {#each data.posts as post}
            <div class="p-4">
            <h3 class="h3" data-toc-ignore><a href={post.slug} class="title">{post.title}</a></h3>							
            <p class="date">{formatDate(post.date)}</p>
            <p class="description">{post.description}</p>
            </div>
                                    
        {/each}
                            
    </section>

                    
    </article>
  
            <hr class="opacity-50" />
    <footer class="p-4 flex justify-start items-center space-x-4">
        <Avatar src="https://1.gravatar.com/avatar/6da489c46ce4b9c37c7c73acd9a9e980?size=128" width="w-8" />
        <div class="flex-auto flex justify-between items-center">
            <h6 class="font-bold">By Kevin</h6>
            <small>On {new Date().toLocaleDateString()}</small>
    </div>

    </footer>
