/** @type {import('next').NextConfig} */
const { i18n } = require('./i18n-config');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  
  // 静态导出
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  
  env: {
    SITE_NAME: 'Single Tree Lot',
    SITE_URL: 'https://singletreelot.com',
  },
};

module.exports = nextConfig;