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
        loader: 'custom',
        loaderFile: './my/image/loader.js',
        unoptimized: true,
        headers: [
            {
                key: 'Cache-Control',
                value: 'public, max-age=9999999999, must-revalidate',
            },
        ],
    },
};

export default nextConfig;
