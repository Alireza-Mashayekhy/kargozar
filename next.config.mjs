/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['swiper', 'dom7'],

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
    },

    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.alias['@heroicons/react/outline'] =
                '@heroicons/react/solid';
        }

        return config;
    },

    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
