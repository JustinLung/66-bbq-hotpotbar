<script lang="ts">
	import type { PageData } from './$types';
	import Hero from '$lib/components/Hero.svelte';
	import Dish from '$lib/components/Dish.svelte';
	import Dishes from '$lib/components/Dishes.svelte';
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';

	export let data: PageData;
</script>

<Hero />
<Dishes>
	{#each data.dishes as dish}
		<Dish
			dishImage={dish.dishImage.url}
			dishTitle={dish.dishTitle}
			dishDescription={dish.dishDescription}
		/>
	{/each}
</Dishes>
<About />
<Contact />
