/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'standalone',
    experimental: {
        serverActions: true,
      },
}

const withNextIntl = require('next-intl/plugin')(
    './i18n.js'
);

module.exports = withNextIntl(nextConfig)

