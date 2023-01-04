<script lang="ts">
	let currentDate = new Date().toISOString().split('T')[0];

	console.log(new Date().toISOString().split('T')[0]);
</script>

<form
	action="https://formspree.io/f/mrgvgpbn"
	method="post"
	class="text-white flex flex-col gap-2 px-6 w-full md:px-0"
>
	<input
		type="date"
		name="Date of reservation"
		class="bg-white text-black border py-2 px-5 cursor-pointer"
		value={currentDate}
	/>
	<select name="Time" class="bg-transparent border py-2 px-5 cursor-pointer" required>
		<option class="bg-black color-white" value="time: 14:30">14:30</option>
		<option class="bg-black color-white" value="time: 14:45">14:45</option>
		<option class="bg-black color-white" value="time: 15:00">15:00</option>
		<option class="bg-black color-white" value="time: 15:15">15:15</option>
		<option class="bg-black color-white" value="time: 15:30">15:30</option>
		<option class="bg-black color-white" value="time: 15:45">15:45</option>
		<option class="bg-black color-white" value="time: 16:00">16:00</option>
		<option class="bg-black color-white" value="time: 16:15">16:15</option>
		<option class="bg-black color-white" value="time: 16:30">16:30</option>
		<option class="bg-black color-white" value="time: 16:45">16:45</option>
		<option class="bg-black color-white" value="time: 17:00">17:00</option>
		<option class="bg-black color-white" value="time: 17:15">17:15</option>
		<option class="bg-black color-white" value="time: 17:30">17:30</option>
		<option class="bg-black color-white" value="time: 17:45">17:45</option>
		<option class="bg-black color-white" value="time: 18:00">18:00</option>
		<option class="bg-black color-white" value="time: 18:15">18:15</option>
		<option class="bg-black color-white" value="time: 18:30">18:30</option>
		<option class="bg-black color-white" value="time: 18:45">18:45</option>
		<option class="bg-black color-white" value="time: 19:00">19:00</option>
		<option class="bg-black color-white" value="time: 19:15">19:15</option>
		<option class="bg-black color-white" value="time: 19:30">19:30</option>
		<option class="bg-black color-white" value="time: 19:45">19:45</option>
		<option class="bg-black color-white" value="time: 20:00">20:00</option>
		<option class="bg-black color-white" value="time: 20:15">20:15</option>
		<option class="bg-black color-white" value="time: 20:30">20:30</option>
		<option class="bg-black color-white" value="time: 20:45">20:45</option>
		<option class="bg-black color-white" value="time: 21:00">21:00</option>
		<option class="bg-black color-white" value="time: 21:15">21:15</option>
		<option class="bg-black color-white" value="time: 21:30">21:30</option>
		<option class="bg-black color-white" value="time: 21:45">21:45</option>
		<option class="bg-black color-white" value="time: 22:00">22:00</option>
		<option class="bg-black color-white" value="time: 22:15">22:15</option>
		<option class="bg-black color-white" value="time: 22:30">22:30</option>
	</select>
	<select name="Persons" class="bg-transparent border py-2 px-5 cursor-pointer" required>
		<option class="bg-black color-white" value="Person: 1">1 Person</option>
		<option class="bg-black color-white" value="People: 2">2 People</option>
		<option class="bg-black color-white" value="People: 3">3 People</option>
		<option class="bg-black color-white" value="People: 4">4 People</option>
		<option class="bg-black color-white" value="People: 5">5 People</option>
		<option class="bg-black color-white" value="People: 6">6 People</option>
		<option class="bg-black color-white" value="People: 7">7 People</option>
		<option class="bg-black color-white" value="People: 8">8 People</option>
		<option class="bg-black color-white" value="People: 9">9 People</option>
		<option class="bg-black color-white" value="People: 10">10 People</option>
		<option class="bg-black color-white" value="People: 11">11 People</option>
		<option class="bg-black color-white" value="People: 12">12 People</option>
		<option class="bg-black color-white" value="People: 13">13 People</option>
		<option class="bg-black color-white" value="People: 14">14 People</option>
		<option class="bg-black color-white" value="People: 15">15 People</option>
		<option class="bg-black color-white" value="People: 16">16 People</option>
		<option class="bg-black color-white" value="People: 17">17 People</option>
		<option class="bg-black color-white" value="People: 18">18 People</option>
		<option class="bg-black color-white" value="People: 19">19 People</option>
		<option class="bg-black color-white" value="People: 20">20 People</option>
		<option class="bg-black color-white" value="People: 21">21 People</option>
		<option class="bg-black color-white" value="People: 21">21 People</option>
		<option class="bg-black color-white" value="People: 22">22 People</option>
		<option class="bg-black color-white" value="People: 33">23 People</option>
		<option class="bg-black color-white" value="People: 24">24 People</option>
		<option class="bg-black color-white" value="People: 25">25 People</option>
		<option class="bg-black color-white" value="People: 26">26 People</option>
		<option class="bg-black color-white" value="People: 27">27 People</option>
		<option class="bg-black color-white" value="People: 28">28 People</option>
		<option class="bg-black color-white" value="People: 29">29 People</option>
		<option class="bg-black color-white" value="People: 30">30 People</option>
	</select>
	<input
		name="First Name"
		type="text"
		class="bg-transparent border py-2 px-5 cursor-pointer"
		placeholder="First Name"
		required
	/>
	<input
		name="Last Name"
		type="text"
		class="bg-transparent border py-2 px-5 cursor-pointer"
		placeholder="Last Name"
		required
	/>
	<input
		name="Phone Number"
		type="tel"
		class="bg-transparent border py-2 px-5 cursor-pointer"
		placeholder="Phone Number"
		required
	/>
	<input
		name="E-Mail"
		type="email"
		class="bg-transparent border py-2 px-5 cursor-pointer"
		placeholder="Email Address"
		required
	/>
	<input
		name="Allergies"
		type="text"
		class="bg-transparent border py-2 px-5 cursor-pointer"
		placeholder="Allergies"
	/>
	<input
		name="Vegetarian"
		type="text"
		class="bg-transparent border py-2 px-5 cursor-pointer"
		placeholder="Vegetarian"
	/>
	<input
		name="Vegan"
		type="text"
		class="bg-transparent border py-2 px-5 cursor-pointer"
		placeholder="Vegan"
	/>
	<input
		name="Special Requests"
		type="textarea"
		class="bg-transparent border py-2 px-5 cursor-pointer h-20"
		placeholder="Special Requests"
	/>
	<button
		type="submit"
		class="text-white bg-red py-1 px-3 rounded text-lg hover:opacity-70 ease-in-out duration-300"
		>Submit</button
	>
</form>
