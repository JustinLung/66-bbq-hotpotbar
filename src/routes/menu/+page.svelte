<script lang="ts">
	import PageTransition from '$lib/components/PageTransition.svelte';
	import MenuSection from '$lib/components/menuComponents/MenuSection.svelte';
	const pageTitle = 'Menu';
</script>

<svelte:head>
	<title>66 Chinese Restaurant & Hotpot Bar - {pageTitle}</title>
</svelte:head>

<PageTransition>
	<MenuSection>
		<img src="/assets/images/menu/menu-page-1.png" alt="Menu Page 1" />
		<img src="/assets/images/menu/menu-page-2.png" alt="Menu Page 2" />
		<img src="/assets/images/menu/menu-page-3.png" alt="Menu Page 3" />
		<img src="/assets/images/menu/menu-page-4.png" alt="Menu Page 4" />
		<img src="/assets/images/menu/menu-page-5.png" alt="Menu Page 5" />
		<img src="/assets/images/menu/menu-page-6.png" alt="Menu Page 6" />
	</MenuSection>
</PageTransition>
