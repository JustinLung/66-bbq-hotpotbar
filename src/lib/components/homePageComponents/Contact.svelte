<script lang="ts">
	import MailIcon from '../icons/MailIcon.svelte';
	import PhoneIcon from '../icons/PhoneIcon.svelte';
	import LocationIcon from '../icons/LocationIcon.svelte';
</script>

<section id="contact" class="flex flex-col md:flex-row mt-20">
	<img
		src="/assets/images/restaurant-outside.png"
		alt="Restaurant Outside"
		class="md:w-2/4 w-full"
	/>
	<div class="md:w-2/4 w-full flex flex-col justify-center p-5 md:pl-24 bg-darkPurple">
		<h2 class="text-3xl md:text-4xl font-semibold mb-3">Contact</h2>
		<a
			href="https://goo.gl/maps/4nwdTp4CWg8Cpj498"
			target="_blank"
			rel="noreferrer"
			class="text-lg hover:underline flex items-center gap-5"
			><LocationIcon /> Korte Leidsedwarsstraat 95A<br />1017 PX Amsterdam, Netherlands</a
		>
		<a href="tel:(020) 776 66 71" class="text-lg hover:underline flex items-center gap-5 py-3"
			><PhoneIcon />(020) 776 66 71</a
		>
		<a
			href="mailto:info.66bbqhotpotbar@gmail.com"
			class="text-lg hover:underline flex items-center gap-5 pt-2"
			><MailIcon /> info.66bbqhotpotbar@gmail.com</a
		>

		<h2 class="text-3xl md:text-4xl font-semibold mt-10 mb-3">Opening Hours</h2>
		<p class="text-lg">Dine in or take away</p>
		<p class="text-lg">From monday to sunday 14:30 - 22:30</p>
	</div>
</section>
