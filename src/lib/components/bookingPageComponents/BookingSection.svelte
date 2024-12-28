<script lang="ts">
	import Booking from './Booking.svelte';
	let showBooking = false;
</script>

<section class="max-w-lg mx-auto flex items-center flex-col gap-5 mt-10">
	<h1 class="text-3xl font-semibold">Book a Table</h1>
	{#if showBooking}
		<Booking />
	{:else}
		<p class="text-center">Bookings are not available at this moment! Please visit our website at another time.</p>
	{/if}
</section>
