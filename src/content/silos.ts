/**
 * Arquitectura de información de Sui Magazine.
 *
 * Cada silo agrupa una página pilar, sus recorridos editoriales y los
 * contenidos satélite. Este archivo es la fuente única para la navegación
 * principal, el footer, la portada y las páginas hub.
 *
 * Las rutas existentes se conservan: `/guia`, `/bienestar`, `/diseno`,
 * `/marcas` y `/blog` siguen siendo válidas y no se redirigen.
 */

/** Identificador estable de cada silo editorial. */
export type SiloId =
  | "guias"
  | "tecnologia"
  | "bienestar"
  | "diseno"
  | "marcas"
  | "actualidad";

/** Recorrido editorial dentro de un silo. */
export type SiloSubcategory = {
  /** Etiqueta visible en navegación y tarjetas. */
  label: string;
  /** Ruta interna real, con ancla cuando el contenido vive en la página pilar. */
  href: string;
  /** Entradilla breve que explica qué encontrará el lector. */
  description: string;
};

/** Silo editorial con su página pilar y sus recorridos. */
export type Silo = {
  /** Identificador estable usado por componentes y páginas. */
  id: SiloId;
  /** Nombre público del silo. */
  label: string;
  /** Ruta de la página pilar. */
  href: string;
  /** Etiqueta editorial que ordena el silo dentro del magazine. */
  eyebrow: string;
  /** Descripción amplia para el hero de la página hub. */
  description: string;
  /** Resumen breve para tarjetas y navegación. */
  summary: string;
  /** Imagen atmosférica del silo. */
  image: {
    /** Ruta absoluta desde `public`. */
    src: string;
    /** Texto alternativo descriptivo. */
    alt: string;
  };
  /** Recorridos y subcategorías que estructuran el silo. */
  subcategories: SiloSubcategory[];
};

/** Enlace institucional del pie de página. */
export type InstitutionalLink = {
  /** Etiqueta visible. */
  label: string;
  /** Ruta interna. */
  href: string;
};

/** Los seis silos oficiales, en el orden de la navegación principal. */
export const silos: Silo[] = [
  {
    id: "guias",
    label: "Guías",
    href: "/guia",
    eyebrow: "Silo 01 · Aprender",
    description:
      "El punto de partida para entender la higiene japonesa sin tecnicismos: qué es un washlet, qué formatos existen, cómo se instala y cómo se mantiene con criterio.",
    summary:
      "Del primer contacto a la instalación: todo lo que necesitas saber antes de elegir.",
    image: {
      src: "/images/guia/bano_tradicional.jpg",
      alt: "Baño japonés tradicional con ofuro de madera y luz natural",
    },
    subcategories: [
      {
        label: "Primeros pasos",
        href: "/guia#que-es",
        description:
          "Qué es un washlet, cómo funciona y por qué se ha extendido en España.",
      },
      {
        label: "Tipos",
        href: "/guia#tipos",
        description:
          "Accesorio mecánico, tapa inteligente o inodoro completo: ventajas y límites de cada formato.",
      },
      {
        label: "Instalación",
        href: "/articulos/guia-instalacion",
        description:
          "Requisitos, herramientas y paso a paso para montar tu modelo sin sorpresas.",
      },
      {
        label: "Funcionalidades",
        href: "/funcionalidades",
        description:
          "Asiento calefactado, secado, luz UV y control remoto explicados con criterio.",
      },
      {
        label: "Mantenimiento",
        href: "/guia#mantenimiento",
        description:
          "Limpieza de boquillas, descalcificación y revisión de filtros para alargar la vida útil.",
      },
      {
        label: "Comparativas",
        href: "/seleccion",
        description:
          "Comparativas honestas por presupuesto, formato y necesidades reales.",
      },
    ],
  },
  {
    id: "tecnologia",
    label: "Tecnología",
    href: "/tecnologia",
    eyebrow: "Silo 02 · Entender",
    description:
      "La innovación del baño explicada desde el uso: sistemas inteligentes, automatización y sostenibilidad sin promesas grandilocuentes.",
    summary:
      "Innovación, sistemas inteligentes y sostenibilidad aplicados al ritual del agua.",
    image: {
      src: "/images/articulos/tapa-inteligente.jpg",
      alt: "Tapa inteligente de inodoro con control electrónico en un baño de piedra",
    },
    subcategories: [
      {
        label: "Innovación",
        href: "/articulos/tapa-inteligente",
        description:
          "Cómo evoluciona el baño inteligente, desde el Washlet original hasta la domótica actual.",
      },
      {
        label: "Sistemas inteligentes",
        href: "/funcionalidades",
        description:
          "Sensores, calentamiento instantáneo, secado dirigido y automatización explicados sin tecnicismos.",
      },
      {
        label: "Sostenibilidad",
        href: "/articulos/bide-japones-sostenibilidad",
        description:
          "Ahorro de agua, reducción de papel y materiales que envejecen con dignidad.",
      },
    ],
  },
  {
    id: "bienestar",
    label: "Bienestar",
    href: "/bienestar",
    eyebrow: "Silo 03 · Cuidar",
    description:
      "El baño como espacio de autonomía y cuidado. Soluciones reales para personas mayores, familias y entornos profesionales, sin promesas médicas.",
    summary: "Autonomía, accesibilidad y cuidado para un baño más humano.",
    image: {
      src: "/images/guia/shoji-luz.jpg",
      alt: "Luz natural atravesando un espacio de baño sereno y minimalista",
    },
    subcategories: [
      {
        label: "Autonomía",
        href: "/bienestar#autonomia",
        description:
          "Soluciones que devuelven el control de la higiene íntima sin obras ni ayuda constante.",
      },
      {
        label: "Accesibilidad",
        href: "/bienestar#dependencia-moderada",
        description:
          "Medidas, alturas y mandos pensados para baños seguros y fáciles de usar.",
      },
      {
        label: "Envejecimiento",
        href: "/bienestar#entorno-profesional",
        description:
          "Cómo adaptar el baño para acompañar el paso del tiempo con dignidad.",
      },
      {
        label: "Cuidado",
        href: "/profesionales",
        description:
          "Criterios para familias, cuidadores y entornos sociosanitarios.",
      },
    ],
  },
  {
    id: "diseno",
    label: "Diseño",
    href: "/diseno",
    eyebrow: "Silo 04 · Habitar",
    description:
      "Arquitectura, interiorismo y producto para integrar el washlet sin ruido visual. Materiales nobles, luz y decisiones que envejecen bien.",
    summary:
      "Arquitectura, interiorismo y producto para integrar la tecnología sin ruido.",
    image: {
      src: "/images/hero-lujo-negro.jpg",
      alt: "Baño contemporáneo con mármol negro y luz cálida indirecta",
    },
    subcategories: [
      {
        label: "Arquitectura",
        href: "/articulos/bano-espanol-adaptaciones",
        description:
          "Distribución, instalaciones y soluciones para integrar el washlet en una reforma.",
      },
      {
        label: "Interiorismo",
        href: "/diseno#materiales",
        description:
          "Materiales, luz y paleta para un baño sereno que envejece bien.",
      },
      {
        label: "Producto",
        href: "/seleccion",
        description:
          "Selección de modelos por diseño, funcionalidad y relación calidad-precio.",
      },
    ],
  },

  {
    id: "marcas",
    label: "Marcas",
    href: "/marcas",
    eyebrow: "Silo 05 · Elegir",
    description:
      "Directorio editorial de fabricantes: filosofía, modelos de referencia y encaje real en el mercado español. Sin rankings pagados ni jerarquías artificiales.",
    summary:
      "Directorio editorial de fabricantes, filosofías y modelos de referencia.",
    image: {
      src: "/images/formatos/tapa-home.jpg",
      alt: "Inodoro con tapa inteligente en un baño de piedra y madera",
    },
    subcategories: [
      {
        label: "TOTO",
        href: "/marcas#toto",
        description:
          "El pionero japonés del Washlet y referencia de la gama alta.",
      },
      {
        label: "Roca",
        href: "/marcas#roca",
        description:
          "El gigante español que integra la higiene japonesa en sus colecciones.",
      },
      {
        label: "Geberit",
        href: "/marcas#geberit",
        description:
          "Ingeniería suiza, cisternas empotradas y sistemas de baño completos.",
      },
      {
        label: "GROHE",
        href: "/marcas#grohe",
        description:
          "Grifería y tecnología alemana con presencia consolidada en el baño europeo.",
      },
      {
        label: "Duravit",
        href: "/marcas#duravit",
        description:
          "Diseño alemán y cerámica de autor para baños contemporáneos.",
      },
      {
        label: "Otras",
        href: "/marcas#otras",
        description:
          "Nashi, eQiik, Brondell, Xiaomi y otras alternativas relevantes.",
      },
    ],
  },
  {
    id: "actualidad",
    label: "Actualidad",
    href: "/actualidad",
    eyebrow: "Silo 06 · Seguir",
    description:
      "Lanzamientos, noticias y tendencias para entender hacia dónde va el baño. Contexto editorial, no un feed de novedades sin filtro.",
    summary:
      "Lanzamientos, noticias y tendencias para entender hacia dónde va el baño.",
    image: {
      src: "/images/articulos/sostenibilidad.jpg",
      alt: "Baño minimalista con inodoro japonés y materiales sostenibles",
    },
    subcategories: [
      {
        label: "Lanzamientos",
        href: "/seleccion",
        description:
          "Novedades de producto y generaciones que marcan el ritmo del sector.",
      },
      {
        label: "Noticias",
        href: "/blog",
        description:
          "Movimientos de marcas, normativa y contexto del mercado español.",
      },
      {
        label: "Tendencias",
        href: "/diseno#tendencias",
        description:
          "Cambios de uso y estética que se consolidan en el baño.",
      },
    ],
  },
];

/** Enlaces institucionales y de servicio del footer. */
export const institutionalNavigation: InstitutionalLink[] = [
  { label: "Profesional", href: "/profesionales" },
  { label: "Soluciones", href: "/soluciones" },
  { label: "Sobre el magazine", href: "/sobre-el-magazine" },
  { label: "Metodología", href: "/metodologia" },
  { label: "Contacto", href: "/contacto" },
  { label: "Legal", href: "/legal" },
];

/**
 * Devuelve un silo por su identificador.
 * Se usa en componentes de servidor para evitar literales duplicados.
 */
export function getSilo(id: SiloId): Silo {
  const silo = silos.find((item) => item.id === id);

  if (!silo) {
    throw new Error(`Silo desconocido: ${id}`);
  }

  return silo;
}

