<script lang="ts">
	const emoji = ["https://content.protriathletes.org/content/images/2023/07/f42714f5-fcf9-44fb-9c7f-a55841d65d3e-w300.webp", "https://content.protriathletes.org/content/images/2023/03/efa7f753-6a3d-4027-b118-b066f2377493-w300.webp", "https://content.protriathletes.org/content/images/2023/05/2e0a6641-3289-438a-97a6-b324b60e79f1-w300.webp", "https://content.protriathletes.org/content/images/2023/05/671947d6-6a1c-4cea-89e4-193594c905c6-w300.webp", "https://content.protriathletes.org/content/images/2023/03/2731d991-06b4-47d9-8f7c-fa18ee7f48e7-w300.webp", "https://content.protriathletes.org/content/images/2022/01/ca7e0460-5c1d-44eb-b5ee-4dea63ec9cd2-w300.webp", "https://content.protriathletes.org/content/images/2023/03/1bbfb10e-8c49-4f4b-b1dc-b7c5f35f3ec2-w300.webp", "https://content.protriathletes.org/content/images/2021/05/c5d14d82-5c2e-4f87-9e9c-748fa8fb0403-w300.webp", "https://content.protriathletes.org/content/images/2023/05/f684f087-1e82-4c7e-8b7a-a39d875289a4-w300.webp", "https://content.protriathletes.org/content/images/2023/03/db8dd634-8ce5-442c-9f0d-0eea08d9adaf-w300.webp", "https://content.protriathletes.org/content/images/2023/05/76ecee89-4618-4d5a-978c-a13a93e92689-w300.webp", "https://content.protriathletes.org/content/images/2023/03/149331e4-8827-461e-bf88-bd5b48b56987-w300.webp", "https://content.protriathletes.org/content/images/2023/05/55a9a2d1-df56-41c0-a2b4-1246146936f2-w300.webp", "https://content.protriathletes.org/content/images/2023/05/32c27674-5a7e-438c-963b-0f1776053707-w300.webp", "https://content.protriathletes.org/content/images/2023/03/eeda5527-9eec-4e19-bfba-96cfec795419-w300.webp", "https://content.protriathletes.org/content/images/2023/05/de470021-5e6d-4dc6-a008-7060dc46650b-w300.webp", "https://content.protriathletes.org/content/images/2023/05/95a00981-61ff-4356-bb81-2874a89a0c00-w300.webp", "https://content.protriathletes.org/content/images/2023/03/c98a7ce4-80fe-4244-9447-e20b0817bd5a-w300.webp", "https://content.protriathletes.org/content/images/2023/03/6edd1713-4e21-405a-a952-d237033e735c-w300.webp", "https://content.protriathletes.org/content/images/2023/05/70692734-0a71-40b2-aa77-fb0fc32d4a0a-w300.webp", "https://content.protriathletes.org/content/images/2023/05/bb151283-0ff8-4b6f-8859-168b025426be-w300.webp", "https://content.protriathletes.org/content/images/2023/05/d2afc2cf-a383-43fe-b3be-d7662922105d-w300.webp", "https://content.protriathletes.org/content/images/2023/03/ceee36f5-6532-4299-a0c8-3cba69d69429-w300.webp", "https://content.protriathletes.org/content/images/2023/05/da333f2d-de52-4b02-b878-2fedd5f74c9c-w300.webp", "https://content.protriathletes.org/content/images/2023/03/8a643269-eae7-48c3-8d85-25276eef304c-w300.webp", "https://content.protriathletes.org/content/images/2023/05/dd4130db-bbbb-41c4-a125-07bd10a430ac-w300.webp", "https://content.protriathletes.org/content/images/2023/03/5a9de8a7-3877-44bd-953b-361992721dbd-w300.webp", "https://content.protriathletes.org/content/images/2023/05/6ba37123-6332-46eb-97de-3c13f30d19cb-w300.webp", "https://content.protriathletes.org/content/images/2023/05/31ed8c21-2d5f-45ae-8b97-5e109be0228f-w300.webp", "https://content.protriathletes.org/content/images/2023/05/427e6abb-0bb0-4135-bf79-c00e422ae11d-w300.webp", "https://content.protriathletes.org/content/images/2023/03/1f4b82f6-a492-40eb-9f53-1dbfebd999d9-w300.webp", "https://content.protriathletes.org/content/images/2023/05/d5b54886-6106-41fa-bf06-5b8de7962f73-w300.webp", "https://content.protriathletes.org/content/images/2023/05/5ad53c5c-b684-42cb-8c49-f0aa8d910b42-w300.webp", "https://content.protriathletes.org/content/images/2023/05/8d56b74b-7c86-484a-8cbb-363661797c45-w300.webp"]
    type State = 'start' | 'playing' | 'paused' | 'won' | 'lost'

let state: State = 'start'
let size = 20
let grid = createGrid()
let maxMatches = grid.length / 2
let selected: number[] = []
let matches: string[] = []
let timerId: number | null = null
let time = 60

function createGrid() {
    // only want unique cards
    let cards = new Set<string>()
    // half because we duplicate the cards
    let maxSize = size / 2

    while (cards.size < maxSize) {
        // pick random emoji
        const randomIndex = Math.floor(Math.random() * emoji.length)
        cards.add(emoji[randomIndex])
    }

    // duplicate and shuffle cards
    return shuffle([...cards, ...cards])
}

function shuffle<Items>(array: Items[]) {
    return array.sort(() => Math.random() - 0.5)
}

function startGameTimer() {
    function countdown() {
        state !== 'paused' && (time -= 1)
    }
    timerId = setInterval(countdown, 1000)
}

function selectCard(cardIndex: number) {
    selected = selected.concat(cardIndex)
}

function matchCards() {
    // array destructuring can have any name for the values
    const [first, second] = selected

    if (grid[first] === grid[second]) {
        matches = matches.concat(grid[first])
    }

    // clear selected
    setTimeout(() => (selected = []), 300)
}

function pauseGame(e: KeyboardEvent) {
    if (e.key === 'Escape') {
        switch (state) {
            case 'playing':
                state = 'paused'
                break
            case 'paused':
                state = 'playing'
                break
        }
    }
}

function resetGame() {
    timerId && clearInterval(timerId)
    grid = createGrid()
    maxMatches = grid.length / 2
    selected = []
    matches = []
    timerId = null
    time = 60
}

function gameWon() {
    state = 'won'
    resetGame()
}

function gameLost() {
    state = 'lost'
    resetGame()
}

$: if (state === 'playing') {
    //	in case you pause the game
    !timerId && startGameTimer()
}

$: selected.length === 2 && matchCards()
$: maxMatches === matches.length && gameWon()
$: time === 0 && gameLost()
</script>
<svelte:window on:keydown={pauseGame} />


 
<div class="mx-auto text-center box-border">
{#if state === 'start'}
<h1 class="p-4 text-6xl">Tri Match</h1>
<button on:click={() => (state = 'playing')}>Play</button>
{/if}

{#if state === 'paused'}
<h1 class="p-4 text-6xl">Game paused</h1>
{/if}

{#if state === 'playing'}
<h1 class="timer p-4 text-6xl" class:pulse={time <= 10}>
    {time}
</h1>

<div class="matches w-24 mx-auto justify-center">
    {#each matches as card}
    <img src={card} alt="profile" />
    {/each}
</div>

<div class="grid grid-cols-4 sm:grid-cols-5 gap-2">
    {#each grid as card, cardIndex}
        {@const isSelected = selected.includes(cardIndex)}
        {@const isSelectedOrMatch =
            selected.includes(cardIndex) || matches.includes(card)}
        {@const match = matches.includes(card)}

        <button
            class="card"
            class:selected={isSelected}
            class:flip={isSelectedOrMatch}
            
            on:click={() => selectCard(cardIndex)}
        >
            <div class="back" class:match class:selected={isSelected}>
                <img src={card} alt="profile" />
            </div>
        </button>
    {/each}
</div>
{/if}
</div>

{#if state === 'lost'}
<h1 class="p-4 text-6xl">You lost! 💩</h1>
<button on:click={() => (state = 'playing')}>Play again</button>
{/if}

{#if state === 'won'}
<h1 class="p-4 text-6xl">You win! 🎉</h1>
<button on:click={() => (state = 'playing')}>Play again</button>
{/if}



<style>


:root {
	--txt-1: hsl(220 10% 98%);
	--bg-1: hsl(220 20% 10%);
	--bg-2: hsl(220 20% 20%);
	--border: hsl(180 100% 50%);
	--pulse: hsl(9 100% 64%);
}



h1 {
	
	text-align: center;
	text-transform: capitalize;
}

h1 + button {
	width: max-content;
	margin-top: 2rem;
	margin-inline: auto;
	border: 4px solid var(--border);
}

button {
	padding: 5px;
	font-size: 2rem;
	font-weight: 900;
	color: inherit;
	background: none;
	border-radius: 8px;
	border: none;
	text-transform: uppercase;
	cursor: pointer;
    
}


.card {
		height: 80px;
		width: 80px;
		
		background-color: var(--bg-2);
		transition: rotate 0.3s ease-out;
		transform-style: preserve-3d;
        
	}


.flip {
	rotate: y 180deg;
	pointer-events: none;
}

 .back {
	position: absolute;
	inset: 0;
	display: grid;
	place-content: center;
	visibility: hidden;
    rotate: y 180deg;
}

.selected {
    border: 2px solid var(--border);
    visibility: visible;
    pointer-events: none;
}


.match {
	transition: opacity 0.3s ease-out;
	opacity: 0.4;
    visibility: visible;
}

.matches {
    display: flex;
    gap: 2px;
    margin-block: 5px;
    font-size: 1.5rem;
}

.timer {
    transition: color 0.3s ease;
}

.pulse {
    color: var(--pulse);
    animation: pulse 1s infinite ease;
}

@keyframes pulse {
    to {
        scale: 1.4;
    }
}
</style>
