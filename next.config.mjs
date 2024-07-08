/** @type {import('next').NextConfig} */
import OptimizeCssAssetsWebpackPlugin from 'optimize-css-assets-webpack-plugin';
const nextConfig = {
    transpilePackages: ['swiper', 'dom7'],
    webpack(config) {
        config.plugins.push(new OptimizeCssAssetsWebpackPlugin());
        return config;
    },
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
