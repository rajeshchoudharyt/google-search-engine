/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
		],
	},
	env: {
		NEXT_PUBLIC_SERPER_API_KEY: process.env.NEXT_PUBLIC_SERPER_API_KEY,
	},
};

export default nextConfig;
