<script lang="ts">
	import type { PageData } from './$types';
	import Hero from '$lib/components/homePageComponents/Hero.svelte';
	import Dish from '$lib/components/homePageComponents/Dish.svelte';
	import Dishes from '$lib/components/homePageComponents/Dishes.svelte';
	import About from '$lib/components/homePageComponents/About.svelte';
	import Contact from '$lib/components/homePageComponents/Contact.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';

	export let data: PageData;
</script>

<PageTransition>
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
</PageTransition>
