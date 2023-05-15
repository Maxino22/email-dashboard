const color = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: {
					DEFAULT: color.blue[500],
					...color.blue,
				},
			},
		},
	},
	plugins: [],
}
