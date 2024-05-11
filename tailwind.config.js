/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			phone: '375px',
			tablet: '900px',
			searchBreak: '700px',
			sm: '640px',
			md: '900px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			fontFamily: {
				sans: ['Jaro', 'sans-serif'], // Example: Using Roboto
			},
		},
	},
	plugins: [],
};
