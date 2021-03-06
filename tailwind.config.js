module.exports = {
	purge: ["./src/**/*.js", "./src/**/*.jsx", "/src/**/*.ts", "/src/**/*.tsx"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: "#000F36",
				secondary: "#E6EE69",
			},
			boxShadow: {
				white: "0 5px 5px 0 rgba(256, 256, 256, 0.2)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
