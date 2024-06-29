/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.kargozargomrok.com',
                port: '',
            },
        ],
    },
};

export default nextConfig;
