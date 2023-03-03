/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [`./src/**/*.{html,js,svelte,ts}`],
	darkMode: true,
	theme: {
		colors: {
			gunmetal: '#2c3639',
			'limed-spruce': '#3f4e4f',
			'french-beige': '#a27b5c',
			timberwolf: '#dcd7c9',
			'bluish-grey': '#718c8e'
		},
		fontFamily: {
			'IBM-Plex': ['IBM Plex Sans JP', 'sans-serif']
		},
		extend: {}
	},
	plugins: []
};
