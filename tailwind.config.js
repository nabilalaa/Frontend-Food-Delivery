module.exports = {
	mode: "jit",
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
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
	plugins: [],
};
