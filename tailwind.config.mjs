/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'gpla-green': '#389a29',
				'gpla-navy': '#132d82',
				'gpla-gold': '#F5A623',
				'gpla-gold-dark': '#E8A33D',
				'gpla-cream': '#FAF6EE',
				'gpla-light': '#f0f4ff',
				'gpla-black': '#000000',
			},
			fontFamily: {
				display: ['Sora', 'sans-serif'],
				body: ['Inter', 'system-ui', 'sans-serif'],
			}
		},
	},
	plugins: [],
}