import type { Metadata } from "next";

import EditorialPage, { type EditorialSection } from "@/components/EditorialPage";

/**
 * Página de presentación del magazine. Explica el propósito editorial y los
 * límites del proyecto sin atribuir credenciales que no se puedan verificar.
 */
export const metadata: Metadata = {
  title: "Sobre el magazine | Sui Magazine",
  description:
    "Sui Magazine es un proyecto editorial independiente sobre washlets, bienestar y diseño del baño en España. Qué publicamos y cómo trabajamos.",
  openGraph: {
    title: "Sobre el magazine | Sui Magazine",
    description:
      "Un magazine editorial sobre washlets, bienestar y diseño del baño en España.",
    locale: "es_ES",
    type: "website",
  },
};

/** Los bloques que explican el proyecto editorial. */
const aboutSections: EditorialSection[] = [
  {
    title: "Por qué existe Sui",
    paragraphs: [
      "El baño español está cambiando. El bidé tradicional pierde espacio en las reformas, la población envejece y cada vez más hogares descubren que el agua tibia sustituye al papel con más comodidad y menos residuos.",
      "Sui Magazine nace para explicar ese cambio sin mitos: qué es un washlet, qué formatos existen, cuánto cuesta mantenerlo y en qué casos no merece la pena.",
    ],
  },
  {
    title: "Qué publicamos",
    paragraphs: [
      "Organizamos el contenido en seis silos —Guías, Tecnología, Bienestar, Diseño, Marcas y Actualidad— para que cada lector encuentre la respuesta según su intención, no según el orden de publicación.",
      "Publicamos guías prácticas, análisis de producto, criterios de diseño y contexto de mercado. También reconocemos las limitaciones de la tecnología y los casos en que una solución convencional funciona mejor.",
    ],
  },
  {
    title: "Independencia editorial",
    paragraphs: [
      "El contenido editorial no se vende. Ningún fabricante paga por aparecer en una guía, un directorio o una comparativa, y las marcas citadas se eligen por su relevancia real en el mercado español.",
      "Cuando una pieza se base en información facilitada por una empresa, se indicará de forma explícita. La ausencia de afiliación comercial no impide que existan enlaces a tiendas o fabricantes; su inclusión nunca condiciona el criterio de la pieza.",
    ],
  },
  {
    title: "Quién está detrás",
    paragraphs: [
      "Sui Magazine es un proyecto editorial independiente con sede en España. La redacción combina trabajo de documentación, contraste con instaladores y lectura crítica de documentación técnica.",
      "No somos un servicio técnico ni una tienda. Para instalaciones, garantías o reparaciones, la referencia es siempre el fabricante o un profesional cualificado.",
    ],
  },
];

export default function SobreElMagazinePage() {
  return (
    <EditorialPage
      eyebrow="El proyecto"
      title="Un magazine sobre el nuevo ritual"
      intro="Sui Magazine explica la higiene japonesa con criterio editorial: sin promesas milagrosas, sin catálogos disfrazados de análisis y sin perder de vista a quién va dirigido."
      image={{
        src: "/images/guia/bano_tradicional.jpg",
        alt: "Baño japonés tradicional con ofuro de madera y luz natural",
      }}
      sections={aboutSections}
      cta={{
        title: "Lee el diario",
        description:
          "Las piezas más recientes sobre tecnología, diseño, bienestar y mercado del baño.",
        label: "Ir al diario",
        href: "/blog",
      }}
    />
  );
}
