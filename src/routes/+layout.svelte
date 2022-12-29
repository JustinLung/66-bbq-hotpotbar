<script lang="ts">
	import '../styles/app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />
<main class="px-5">
	<slot />
</main>
<Footer companyName="66 BBQ & Hotpot Bar" />
