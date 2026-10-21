import type { SiloId } from "@/content/silos";

/**
 * Ficha editorial de un artículo publicado en el magazine.
 * Se comparte entre el índice `/blog`, los hubs de silo y las páginas que
 * necesitan mostrar lecturas relacionadas.
 */
export type Article = {
  /** Titular completo que identifica el artículo. */
  title: string;
  /** Ruta interna hacia la página del artículo. */
  href: string;
  /** Categoría editorial que ordena el contenido. */
  category: string;
  /** Entradilla breve que resume la propuesta de la pieza. */
  excerpt: string;
  /** Ruta absoluta de la imagen desde `public`. */
  image: string;
  /** Texto alternativo descriptivo de la imagen. */
  imageAlt: string;
  /** Mes de publicación en formato legible. */
  date: string;
  /** Silo principal al que pertenece la pieza. */
  silo: SiloId;
};

/**
 * Todos los artículos del magazine, ordenados por prioridad editorial.
 * El primero se presenta como pieza principal en `/blog`.
 */
export const articles: Article[] = [
  {
    title:
      "El baño invisible: tu inodoro es la mayor decisión ecológica de tu hogar",
    href: "/articulos/bide-japones-sostenibilidad",
    category: "Sostenibilidad",
    excerpt:
      "El baño invisible: cómo el inodoro inteligente reduce papel, agua y residuos en el hogar.",
    image: "/images/articulos/sostenibilidad.jpg",
    imageAlt:
      "Baño minimalista con inodoro japonés y materiales sostenibles",
    date: "Octubre 2026",
    silo: "tecnologia",
  },
  {
    title: "La tapa inteligente: transformar tu baño sin obras",
    href: "/articulos/tapa-inteligente",
    category: "Análisis técnico",
    excerpt:
      "Materiales, calentamiento instantáneo y modelos para dar el salto al bidé japonés sin reformar el cuarto de baño.",
    image: "/images/articulos/tapa-inteligente.jpg",
    imageAlt:
      "Tapa inteligente de inodoro con calentamiento y control electrónico",
    date: "Octubre 2026",
    silo: "tecnologia",
  },
  {
    title: "Guía de instalación paso a paso",
    href: "/articulos/guia-instalacion",
    category: "Guía práctica",
    excerpt:
      "Instalación paso a paso de accesorios, tapas e inodoros completos en menos de una hora.",
    image: "/images/articulos/instalacion.jpg",
    imageAlt:
      "Herramientas y piezas preparadas para instalar un bidé japonés",
    date: "Octubre 2026",
    silo: "guias",
  },
  {
    title: "Adaptando el bidé a tu baño español",
    href: "/articulos/bano-espanol-adaptaciones",
    category: "Guía práctica",
    excerpt:
      "Cal, enchufes y cisternas empotradas: soluciones reales para adaptar el baño español.",
    image: "/images/guia/bano_tradicional.jpg",
    imageAlt:
      "Baño japonés tradicional con ofuro de madera y luz natural",
    date: "Octubre 2026",
    silo: "diseno",
  },
  {
    title: "Mejores bidés japoneses por presupuesto",
    href: "/articulos/mejores-bides-presupuesto",
    category: "Guía de compra",
    excerpt:
      "Qué comprar en cada franja de precio, con recomendaciones honestas y contrapartidas.",
    image: "/images/formatos/tapa-home.jpg",
    imageAlt:
      "Inodoro con tapa inteligente en un baño de piedra y madera",
    date: "Octubre 2026",
    silo: "guias",
  },
];

/**
 * Devuelve los artículos asignados a un silo, conservando el orden editorial.
 * Se usa en los hubs para no repetir filtros en cada página.
 */
export function getArticlesBySilo(silo: SiloId): Article[] {
  return articles.filter((article) => article.silo === silo);
}
