<script lang="ts">
	import PageTransition from '$lib/components/PageTransition.svelte';
	import MenuSection from '$lib/components/menuComponents/MenuSection.svelte';
	const pageTitle = 'Menu';
</script>

<svelte:head>
	<title>66 BBQ & Hotpot Bar - {pageTitle}</title>
</svelte:head>

<PageTransition>
	<MenuSection>
		<img src="/assets/images/menu/menu-page-1.jpeg" alt="Menu Page 1" />
		<img src="/assets/images/menu/menu-page-2.jpeg" alt="Menu Page 2" />
		<img src="/assets/images/menu/menu-page-3.jpeg" alt="Menu Page 3" />
		<img src="/assets/images/menu/menu-page-4.jpeg" alt="Menu Page 4" />
		<img src="/assets/images/menu/menu-page-5.jpeg" alt="Menu Page 5" />
		<img src="/assets/images/menu/menu-page-6.jpeg" alt="Menu Page 6" />
		<img src="/assets/images/menu/menu-page-7.jpeg" alt="Menu Page 7" />
	</MenuSection>
</PageTransition>
