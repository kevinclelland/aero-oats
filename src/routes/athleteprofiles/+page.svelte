<script lang="ts">

    import { Avatar, ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
    import { page } from '$app/stores';    
	import { bubble } from 'svelte/internal';
    interface Person {
            id: number;
            avatar: string;
            name: string;
        }
        
    
        const people: Person[] = [
            { id: 0, avatar: "https://content.protriathletes.org/content/images/2023/07/f42714f5-fcf9-44fb-9c7f-a55841d65d3e-w300.webp", name: 'Daniela' },
            { id: 1, avatar: "https://content.protriathletes.org/content/images/2023/03/2731d991-06b4-47d9-8f7c-fa18ee7f48e7-w300.webp", name: 'Lionel' },
            { id: 2, avatar: "https://content.protriathletes.org/content/images/2023/05/70692734-0a71-40b2-aa77-fb0fc32d4a0a-w300.webp", name: 'Max' },
            { id: 3, avatar: "https://content.protriathletes.org/content/images/2023/03/efa7f753-6a3d-4027-b118-b066f2377493-w300.webp", name: 'Joe' },
            { id: 4, avatar: "https://content.protriathletes.org/content/images/2023/05/76ecee89-4618-4d5a-978c-a13a93e92689-w300.webp", name: 'Chelsea' },
            { id: 5, avatar: "https://content.protriathletes.org/content/images/2023/05/427e6abb-0bb0-4135-bf79-c00e422ae11d-w300.webp", name: 'Paula' }
        ];
        
        let currentPerson: Person = people[0];
    
    
        
    
    
    let bubblecolor: string = '';            
   
    
        export let data;
    </script>
    
    
    <div class="text-center text-6xl p-4">🏆️ Athletes</div>
    
    <section class="card max-w-5xl mx-auto">
        <div class="chat w-full h-full grid grid-cols-[30%_1fr]">
            <!-- Navigation -->
            <div class="grid grid-rows-[auto_1fr_auto] border-r border-surface-500/30">
                <!-- Header -->
                <header class="border-b border-surface-500/30 p-4">
                    <input class="input" type="search" placeholder="Search..." />
                </header>
                <!-- List -->
                <div class="p-2 space-y-4 overflow-y-auto max-h-[700px] sm:max-h-[700px]">
                    <small class="opacity-50 p-2 text-lg">Contacts</small>
                    
    <ListBox active="variant-filled-primary">
        
        {#each data.movies as movie}
        {#if movie.id === $page.params.id} {bubblecolor} {/if}
                      

    <ListBoxItem bind:group={bubblecolor} name="people" value={movie.id}>
    <svelte:fragment slot="lead"> 
        <a href="/athleteprofiles/movie/{movie.id}">
            <Avatar src={movie.avatar} class="w-16 sm:w-16" />
        </a>
        </svelte:fragment>
        <a href="/athleteprofiles/movie/{movie.id}"><div class="hidden sm:block">{movie.title}</div></a>
    </ListBoxItem>

                        
                

                       
        {/each}
    </ListBox>
                    
                </div>
                <!-- Footer -->
    
            </div>
            <!-- Chat -->
            <div class="grid grid-row-[1fr_auto]">
                <!-- Conversation -->
                <slot />	
                
            </div>
        </div>
    </section>
    
    