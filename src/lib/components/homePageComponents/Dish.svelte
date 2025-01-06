<script lang="ts">
	export let dishImage: string;
	export let dishTitle: string;
	export let dishDescription: string;
</script>

<article class="w-full bg-base-100 shadow-xl">
	<figure>
		<img src={dishImage} alt={dishTitle} class="w-full md:min-h-[15rem] object-cover" />
		<div class="bg-darkPurple p-5 rounded md:h-full">
			<h2 class="text-2xl font-semibold">{dishTitle}</h2>
			<p>{dishDescription}</p>
		</div>
	</figure>
</article>
