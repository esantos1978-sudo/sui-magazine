/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // El índice editorial se unificó en Actualidad. La antigua ruta
        // `/blog` responde con un 301 permanente para no perder enlaces.
        source: "/blog",
        destination: "/actualidad",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
