<script lang="ts">
	import PageTransition from '$lib/components/PageTransition.svelte';
	import BookingSection from '$lib/components/bookingPageComponents/BookingSection.svelte';
	const pageTitle = 'Booking';
</script>

<svelte:head>
	<title>66 BBQ & Hotpot Bar - {pageTitle}</title>
</svelte:head>

<PageTransition>
	<BookingSection />
</PageTransition>
