<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Dish from '$lib/components/Dish.svelte';
	import Dishes from '$lib/components/Dishes.svelte';
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
</script>

<Hero />
<Dishes>
	<Dish
		dishImage="/assets/images/hotpot.png"
		dishTitle="Hotpot"
		dishDescription="With our hotpot, we’ve managed to put a new spin on an old classic. Simplicity is the name of the game: we use fresh ingredients and offer a variety of high-quality food at an affordable price. Are you ready for visiting us with friends and family?"
	/>
	<Dish
		dishImage="/assets/images/hotpot.png"
		dishTitle="Hotpot"
		dishDescription="With our hotpot, we’ve managed to put a new spin on an old classic. Simplicity is the name of the game: we use fresh ingredients and offer a variety of high-quality food at an affordable price. Are you ready for visiting us with friends and family?"
	/>
	<Dish
		dishImage="/assets/images/hotpot.png"
		dishTitle="Hotpot"
		dishDescription="With our hotpot, we’ve managed to put a new spin on an old classic. Simplicity is the name of the game: we use fresh ingredients and offer a variety of high-quality food at an affordable price. Are you ready for visiting us with friends and family?"
	/>
</Dishes>
<About />
<Contact />
