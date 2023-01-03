<script>
	let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;
	}
</script>

<header>
	<nav class="md:px-0 md:flex md:justify-between md:max-w-6xl mx-auto px-5 py-5">
		<div class="flex items-center justify-between">
			<a class="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400" href="/">
				<img src="/assets/images/logo.png" alt="66 BBQ & Hotpot Bar Logo" />
			</a>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div on:click={toggleNavbar} class="flex md:hidden">
				<button type="button" aria-label="Menu Button" class="text-gray-800 hover:text-gray-40 focus:text-gray-400">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
			</div>
		</div>

		<div
			class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
				? 'flex'
				: 'hidden'}"
		>
			<a href="/">Home</a>
			<a href="/menu">Menu</a>
			<a href="/#about">About</a>
			<a href="/#contact">Contact</a>
			<a
				class="md:bg-red md:px-5 md:py-2 rounded hover:opacity-70 ease-in-out duration-300"
				href="/booking">Book a table</a
			>
		</div>
	</nav>
</header>
