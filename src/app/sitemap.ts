import type { MetadataRoute } from "next";

/**
 * Mapa del sitio de Sui Magazine.
 *
 * Incluye la home, los seis silos, los índices editoriales, las páginas
 * institucionales y los nueve artículos publicados. Si se añade una ruta
 * pública nueva, debe incorporarse también a esta lista.
 *
 * El dominio es provisional: debe sustituirse por el definitivo antes de
 * desplegar en producción.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sui-magazine.vercel.app";

  // Rutas principales, silos, páginas institucionales y artículos.
  const routes = [
    "",
    "/guia",
    "/tecnologia",
    "/tecnologia/innovacion",
    "/tecnologia/sistemas-inteligentes",
    "/tecnologia/sostenibilidad",
    "/bienestar",
    "/bienestar/higiene-personal-movilidad-reducida",
    "/bienestar/diseno-bano-accesible",
    "/bienestar/envejecer-en-casa-bano",
    "/bienestar/tecnologia-higiene-asistida",
    "/diseno",
    "/marcas",
    "/actualidad",
    "/blog",
    "/seleccion",
    "/funcionalidades",
    "/profesionales",
    "/soluciones",
    "/sobre-el-magazine",
    "/metodologia",
    "/contacto",
    "/legal",
    "/articulos/bide-japones-sostenibilidad",
    "/articulos/tapa-inteligente",
    "/articulos/guia-instalacion",
    "/articulos/mejores-bides-presupuesto",
    "/articulos/bano-espanol-adaptaciones",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
