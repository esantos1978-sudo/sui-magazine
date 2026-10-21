import type { Metadata } from "next";

import EditorialPage, { type EditorialSection } from "@/components/EditorialPage";

/**
 * Página de contacto sin formulario: evita prometer un canal que requeriría
 * backend y deja claro qué tipo de consultas puede atender la redacción.
 */
export const metadata: Metadata = {
  title: "Contacto | Sui Magazine",
  description:
    "Escríbenos para dudas editoriales, correcciones, propuestas de colaboración o prensa. Contacto de Sui Magazine.",
  openGraph: {
    title: "Contacto | Sui Magazine",
    description:
      "Dudas editoriales, correcciones, colaboraciones y prensa: escribe a Sui Magazine.",
    locale: "es_ES",
    type: "website",
  },
};

/** Canales y límites de la atención editorial. */
const contactSections: EditorialSection[] = [
  {
    title: "Correo electrónico",
    paragraphs: [
      "El canal de contacto es info@sui-magazine.com. Leemos todos los mensajes y respondemos en un plazo orientativo de dos a tres días laborables.",
      "Para correcciones, indica la URL de la pieza y el dato concreto que debe revisarse. Cuanto más preciso sea el mensaje, más rápida será la comprobación.",
    ],
  },
  {
    title: "Qué puedes consultarnos",
    paragraphs: [
      "La redacción atiende consultas relacionadas con el contenido publicado y con el enfoque editorial del magazine.",
    ],
    items: [
      "Dudas sobre una guía, un análisis o una comparativa.",
      "Correcciones de datos, enlaces o referencias técnicas.",
      "Propuestas de colaboración editorial y artículos.",
      "Solicitudes de prensa y acceso a material del magazine.",
    ],
  },
  {
    title: "Lo que no podemos resolver",
    paragraphs: [
      "No somos un servicio técnico ni una tienda. No gestionamos garantías, reparaciones, instalaciones ni pedidos de fabricantes.",
      "Si tu consulta es sobre un modelo concreto, la vía más rápida es el servicio de atención al cliente del fabricante o el instalador que realizó el montaje.",
    ],
  },
];

export default function ContactoPage() {
  return (
    <EditorialPage
      eyebrow="Contacto"
      title="Hablemos del baño"
      intro="Una corrección, una propuesta o una duda sobre lo que has leído: escríbenos y lo revisamos."
      image={{
        src: "/images/hero-bathroom.jpg",
        alt: "Baño minimalista con luz natural y materiales nobles",
      }}
      sections={contactSections}
      cta={{
        title: "Escribir a la redacción",
        description:
          "Cuéntanos qué necesitas en info@sui-magazine.com. Respondemos en dos o tres días laborables.",
        label: "Enviar un correo",
        href: "mailto:info@sui-magazine.com",
      }}
    />
  );
}
