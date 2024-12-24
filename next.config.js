/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Untuk static HTML generation
  images: {
    unoptimized: true, // Diperlukan untuk static export
  },
  basePath: '/portfolio', // Sesuaikan dengan nama repository Anda
};

module.exports = nextConfig; 