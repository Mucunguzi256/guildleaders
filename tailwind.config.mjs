/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'gpla-green': '#389a29',
				'gpla-navy': '#132d82',
				'gpla-gold': '#F5A623',
				'gpla-light': '#f0f4ff',
			},
			fontFamily: {
				display: ['Bebas Neue', 'sans-serif'],
				body: ['DM Sans', 'sans-serif'],
			}
		},
	},
	plugins: [],
}