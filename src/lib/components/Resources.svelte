<script>
    const ytData = [
		{ category: 'youtube', name: "Lionel Sanders", label: 'Pro Triathlete', link: 'www.' },
        { category: 'youtube', name: "The Daily Tri", label: 'News', link: 'www.' }
		
	];

    const podData = [
		
		{ category: 'podcast', name: "Fitter Radio", label: 'Interviews by Bevan', link: 'www' },
        { category: 'podcast', name: "How They Train", label: 'Jack Kelly', link: 'www.' }
		
	];

    const emailData = [
		
		{ category: 'newsletter', name: "The Tempo", label: 'News and articles', link: 'www' },
        { category: 'aero oats', name: "Matti", label: 'News and articles', link: 'www' }
    
	];

    const discData = [

        { category: 'discord', name: "Matti", label: 'News and articles', link: 'www' },
        { category: 'discord', name: "Daily Tri", label: 'News and articles', link: 'www' },
        { category: 'discord', name: "Lionel Sanders", label: 'News and articles', link: 'www' }
        
	];

    const webData = [

        { category: 'website', name: "Tri247", label: 'News and articles', link: 'www' },
        { category: 'website', name: "Obsessed Triathlete", label: 'News and articles', link: 'www' },
        { category: 'website', name: "PTO", label: 'News and articles', link: 'www' }

    ];

    
</script>

<h1 class="text-4xl">Youtube<i class="fas fa-wrench p-4 variant-soft-secondary"></i></h1>

<ul>
    {#each ytData as v}
        
    <div class="p-4">
      <a href="/{v.link}"><div class="flex-auto"><div>{v.name}{v.label}</div></div></a>
          
      
        </div>
    {/each}
</ul>

<h1 class="text-4xl">Podcasts</h1>

<ul>
    {#each podData as v}
        <div>
           
           <li> <span class="badge-icon p-4 variant-soft-secondary"><i class="fas fa-wrench"></i></span></li>
           <a href="/{v.link}">
            <li><span class="flex-auto">
                <dt class="font-bold">{v.name}</dt>
                <dd class="text-sm opacity-50">{v.label}</dd>
            </span></li></a>
           
        
        </div>
    {/each}
</ul>

<h1 class="text-4xl">Newsletters</h1>

<ul>
    {#each emailData as v}
        <div>
           
           <li> <span class="badge-icon p-4 variant-soft-secondary"><i class="fas fa-wrench"></i></span></li>
           <a href="/{v.link}">
            <li><span class="flex-auto">
                <dt class="font-bold">{v.name}</dt>
                <dd class="text-sm opacity-50">{v.label}</dd>
            </span></li></a>
           
        
        </div>
    {/each}
</ul>

<h1 class="text-4xl">Discord</h1>

<ul>
    {#each discData as v}
        <div>
           
           <li> <span class="badge-icon p-4 variant-soft-secondary"><i class="fas fa-wrench"></i></span></li>
           <a href="/{v.link}">
            <li><span class="flex-auto">
                <dt class="font-bold">{v.name}</dt>
                <dd class="text-sm opacity-50">{v.label}</dd>
            </span></li></a>
           
        
        </div>
    {/each}
</ul>

<h1 class="text-4xl">Websites</h1>

<ul>
    {#each webData as v}
        <div>
           
           <li> <span class="badge-icon p-4 variant-soft-secondary"><i class="fas fa-wrench"></i></span></li>
           <a href="/{v.link}">
            <li><span class="flex-auto">
                <dt class="font-bold">{v.name}</dt>
                <dd class="text-sm opacity-50">{v.label}</dd>
            </span></li></a>
           
        
        </div>
    {/each}
</ul>