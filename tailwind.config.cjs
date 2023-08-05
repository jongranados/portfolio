/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				yellow: "#F7CF51",
				grey: "#F2F2F2",
				darkWave: "#53768A",
				lightWave: "#8EC1DE",
			},
		},
		fontFamily: {
			bayon: ["Bayon", "sans-serif"],
			montserrat: ["Montserrat", "sans-serif"],
		},
		backgroundImage: {
			placeholder: "url('./src/assets/placeholder.png')",
			tenWords: "url('./src/assets/ten-words.jpeg')",
		},
	},
	plugins: [],
};
