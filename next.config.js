/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i89.servimg.com",'cloudflare-ipfs.com'], // Agrega el dominio desde el que cargas la imagen
  },
};

module.exports = nextConfig;
