<script lang="ts">
	import { slide } from 'svelte/transition';
	import ArrowIcon from './icons/ArrowIcon.svelte';
	let y: any;
</script>

<svelte:window bind:scrollY={y} />
{#if y >= 80}
	<a
		href="#"
		class="fixed bottom-7 right-7 h-12 w-12 cursor-pointer flex justify-center items-center"
		transition:slide
	>
		<ArrowIcon />
	</a>
{/if}
