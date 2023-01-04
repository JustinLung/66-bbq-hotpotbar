<script lang="ts">
	import PageTransition from '$lib/components/PageTransition.svelte';
	import GalleryImage from '$lib/components/galleryComponents/GalleryImage.svelte';
	import GallerySection from '$lib/components/galleryComponents/GallerySection.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<PageTransition>
	<GallerySection>
		{#each data.galleries as gallery}
			<GalleryImage galleryImage={gallery.galleryImage.url} galleryAlt="Gallery" />
		{/each}
	</GallerySection>
</PageTransition>
