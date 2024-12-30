<script lang="ts">
	import type { PageData } from './$types';
	import Hero from '$lib/components/homePageComponents/Hero.svelte';
	import Dish from '$lib/components/homePageComponents/Dish.svelte';
	import Dishes from '$lib/components/homePageComponents/Dishes.svelte';
	import About from '$lib/components/homePageComponents/About.svelte';
	import BookingSection from '$lib/components/bookingPageComponents/BookingSection.svelte';
	import Contact from '$lib/components/homePageComponents/Contact.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';

	export let data: PageData;
	const pageTitle = 'Home';
</script>

<svelte:head>
	<title>66 Chinese Restaurant & Hotpot Bar - {pageTitle}</title>
</svelte:head>

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
	<!-- <BookingSection /> -->
	<Contact />
</PageTransition>
