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
			dmMono: ["DM Mono", "courier", "serif"],
		},
		backgroundImage: {
			placeholder: "url('/placeholder.png')",
			tenWords: "url('/ten-words.jpeg')",
			authenticateMe: "url('/thumbnails/authenticate-me-project-bg.png')",
			pixelPerfectInstacart: "url('/thumbnails/pixel-perfect-instacart-project-bg.png')",
			portfolioWebsite: "url('/thumbnails/portfolio-website-project-bg.png')",
			smartShoppingList: "url('/thumbnails/smart-shopping-list-project-bg.png')",
			socialPets: "url('/thumbnails/social-pets-project-bg.png')",
			digitalBattleship: "url('/thumbnails/digital-battleship-project-bg.png')",
		},
	},
	plugins: [],
};
