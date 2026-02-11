/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['tr', 'en', 'ar'],
    defaultLocale: 'tr',
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
