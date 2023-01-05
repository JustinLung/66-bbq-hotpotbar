<script>
	import HamburgerIcon from './icons/HamburgerIcon.svelte';
	let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;

		showMenu ? document.body.classList.add('freeze') : document.body.classList.remove('freeze');
	}

	function closeNavMenu() {
		showMenu = false;
		document.body.classList.remove('freeze');
	}
</script>

<header class="sticky bg-black md:bg-transparent top-0 w-full z-50">
	<nav class="md:px-0 md:flex md:justify-between md:max-w-6xl mx-auto px-5 py-5">
		<div class="flex items-center justify-between">
			<a class="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400" href="/">
				<img src="/assets/images/logo.png" alt="66 BBQ & Hotpot Bar Logo" class="w-20 md:w-28" />
			</a>
			<div class="flex md:hidden">
				<button
					type="button"
					aria-label="Menu Button"
					class="text-gray-800 hover:text-gray-40 focus:text-gray-400"
					on:click={toggleNavbar}
				>
					<HamburgerIcon />
				</button>
			</div>
		</div>

		<ul
			class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
				? 'flex'
				: 'hidden'}"
		>
			<li><a href="/" class="hover:underline" on:click={closeNavMenu}>Home</a></li>
			<li><a href="/menu" class="hover:underline" on:click={closeNavMenu}>Menu</a></li>
			<li><a href="/#about" class="hover:underline" on:click={closeNavMenu}>About</a></li>
			<li><a href="/gallery" class="hover:underline" on:click={closeNavMenu}>gallery</a></li>
			<li><a href="/#contact" class="hover:underline" on:click={closeNavMenu}>Contact</a></li>
			<li>
				<a
					class="md:bg-red md:px-5 md:py-2 rounded hover:opacity-70 ease-in-out duration-300"
					href="/booking"
					on:click={closeNavMenu}>Book a table</a
				>
			</li>
		</ul>
	</nav>
</header>
