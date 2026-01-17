/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['tr', 'en', 'ar'],
    defaultLocale: 'tr',
  },
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true
  }
}

module.exports = nextConfig
