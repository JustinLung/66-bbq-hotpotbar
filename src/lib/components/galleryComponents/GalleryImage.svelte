<script lang="ts">
	export let galleryImage: string;
	export let galleryAlt: string;
</script>

<figure class="md:p-1">
	<img class="rounded" src={galleryImage} alt={galleryAlt} />
</figure>
