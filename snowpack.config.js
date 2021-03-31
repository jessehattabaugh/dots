// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration
module.exports = {
	devOptions: {
		port: 3000,
	},
	mount: {
		src: { url: '/modules'},
		public: {url: '/', static: true},
	},
};
