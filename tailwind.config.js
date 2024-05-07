/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Jaro', 'sans-serif'], // Example: Using Roboto
			},
		},
	},
	plugins: [],
};
