/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        HOST_BACK: "127.0.0.1",
        PORT_BACK: "3001",
        URL_BACK: `http://127.0.0.1:3001`,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '3001'
            },
        ],
        path: '/'
    },
    async redirects() {
        return [
            {
                source: "/",
                destination: "/kosmetika",
                permanent: true
            },
        ];
    },
};

module.exports = nextConfig;
