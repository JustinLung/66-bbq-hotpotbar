<script lang="ts">
	export let galleryImage: string;
	export let galleryAlt: string;
</script>

<figure class="py-1 md:p-1">
	<img class="rounded" src={galleryImage} alt={galleryAlt} />
</figure>
