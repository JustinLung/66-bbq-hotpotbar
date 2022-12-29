<script lang="ts">
	import FacebookIcon from './FacebookIcon.svelte';
	import InstagramIcon from './InstagramIcon.svelte';

	export let companyName: string;
</script>

<footer class="bg-darkPurple mt-10 py-20">
	<div class="flex justify-center items-center">
		<a href="https://www.instagram.com/66bbqhotpot/" target="_blank" rel="noreferrer"
			><InstagramIcon /></a
		>
		<a href="https://www.facebook.com/66bbqhotpotbar" target="_blank" rel="noreferrer"
			><FacebookIcon /></a
		>
	</div>
	<p class="text-center pt-4">
		&#169; {new Date().getFullYear()} by {companyName} &#183; Developed by
		<a href="https://justinlung.com/" target="_blank" rel="noreferrer">Justin Lung</a>
	</p>
</footer>
