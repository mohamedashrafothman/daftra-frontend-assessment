/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
	reactStrictMode: true,
	sassOptions: { includePaths: [path.join(__dirname, "./src/styles")] },
	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "placehold.co" },
			{ protocol: "https", hostname: "raw.githubusercontent.com" },
			{ protocol: "http", hostname: "localhost" },
			{ protocol: "http", hostname: "127.0.0.1" },
		],
	},
	redirects: () => [{ source: "/auth", destination: "/auth/login", permanent: true }],
};

module.exports = nextConfig;
