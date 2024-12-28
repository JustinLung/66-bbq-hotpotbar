<script lang="ts">
	import '../styles/app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import BackToTop from '$lib/components/BackToTop.svelte';
</script>

<Header />
<main class="px-5 h-full">
	<slot />
</main>
<Footer companyName="66 BBQ & Hotpot Bar" />
<BackToTop />
