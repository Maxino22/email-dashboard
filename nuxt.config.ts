// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxtjs/device',
		'@nuxtjs/tailwindcss',
		'nuxt-icon',
		'@davestewart/nuxt-scrollbar',
	],

	app: {
		head: {
			title: 'Nuxt 3 Email Dashboard',
			link: [
				{ rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
				{ rel: 'preconnect', href: 'https://rsms.me' },
			],
		},
	},
})
