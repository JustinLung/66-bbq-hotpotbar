/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 30s linear infinite'
			}
		},
		colors: {
			transparent: 'transparent',
			black: '#0C0C0D',
			red: '#E5231E',
			white: '#ffffff',
			darkPurple: '#19191E',
			grey: '#323232'
		}
	},
	plugins: []
};
