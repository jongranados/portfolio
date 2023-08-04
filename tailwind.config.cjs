/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
		fontFamily: {
			bayon: ["Bayon", "sans-serif"],
			montserrat: ["Montserrat", "sans-serif"],
		},
		backgroundImage: {
			placeholder: "url('./src/assets/placeholder.png')",
		},
	},
	plugins: [],
};
