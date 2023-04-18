/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	env: {
		HOST_BACK: '127.0.0.1',
		PORT_BACK: '3001',
		URL_BACK: `http://127.0.0.1:3001`,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '127.0.0.1',
				port: '3001',
			},
		],
		path: '/',
	},
	sassOptions: {
		fiber: false,
		includePaths: [path.join(__dirname, 'styles')],
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/kosmetika',
				permanent: true,
			},
		]
	},
}

module.exports = nextConfig
