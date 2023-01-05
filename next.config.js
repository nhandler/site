/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            type: 'asset'
        });

        return config;
    },
    distDir: 'build',
};

module.exports = nextConfig;
