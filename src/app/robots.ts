import type { MetadataRoute } from "next";

/**
 * Reglas de rastreo del sitio.
 *
 * El sitemap apunta al dominio de producción previsto. Si el proyecto se
 * despliega en otro dominio, debe actualizarse esta URL antes de publicar.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: "https://sui-magazine.vercel.app/sitemap.xml",
  };
}
