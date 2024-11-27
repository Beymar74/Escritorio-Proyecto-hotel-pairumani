/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    console.log("Configuración de rewrites aplicada");
    return [
      {
        source: "/api/:path*", // Redirige todas las solicitudes de "/api/"
        destination: "https://673629d5aafa2ef2222fb0a8.mockapi.io/:path*", // Redirige al endpoint real de MockAPI
      },
    ];
  },
};

module.exports = nextConfig;
