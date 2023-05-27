module.exports = {
	mode: "jit",
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	// content: [
	// 	"./index.html",
	// 	"./src/**/*.{vue,js,ts,jsx,tsx}",
	// 	"./node_modules/tw-elements/dist/js/**/*.js",
	// ],

	theme: {
		container: {
			center: true,
			padding: "2rem",
		},
		extend: {
			colors: {
				mainColor: "#fe9801",
				secondColor: "#f4eec7",
				thirdColor: "#48bb78",
			},
		},
		fontFamily: {
			FamilyHeader: ["Racing Sans One"],
		},
	},
	variants: {
		extend: {},
	},
};
