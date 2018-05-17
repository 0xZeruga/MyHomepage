module.exports = {

	/**
	 * Headers of the page
	 */
	head: {
		title: 'Jacob Eriksson',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Personal website' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,300,700|Inconsolata:400' },
		],
	},

	/**
	 * Customize the progress-bar color
	 */
	loading: { color: '#3B8070' },

	/**
	 * Build configuration
	 */
	build: {

		/**
		 * Run ESLINT on save
		 */
		extend(config, ctx) {
			if (ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/,
				});
			}
		},
	},

	css: [

		// Load a node.js module
		'bourbon',

		// node.js module but we specify the pre-processor
		// { src: 'bourbon', lang: 'scss' },

		// Sass file in the project
		{ src: '~assets/reset.scss', lang: 'scss' },
		{ src: '~assets/global.scss', lang: 'scss' },
	],

	plugins: [
		{ src: '~plugins/_particles.js', ssr: false },
		{ src: '~plugins/_scrollreveal.js', ssr: false },
		{ src: '~plugins/vue-typer', ssr: false },
	],
};
