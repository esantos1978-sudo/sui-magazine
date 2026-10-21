import type { Metadata } from "next";

import EditorialPage, { type EditorialSection } from "@/components/EditorialPage";

/**
 * Aviso legal: información básica de titularidad, propiedad intelectual y
 * límites de responsabilidad del contenido divulgativo.
 */
export const metadata: Metadata = {
  title: "Aviso legal | Sui Magazine",
  description:
    "Aviso legal de Sui Magazine: titularidad, propiedad intelectual, enlaces externos, datos personales y condiciones de uso.",
  openGraph: {
    title: "Aviso legal | Sui Magazine",
    description:
      "Condiciones de uso, propiedad intelectual y protección de datos de Sui Magazine.",
    locale: "es_ES",
    type: "website",
  },
};

/** Bloques del aviso legal, en orden de lectura. */
const legalSections: EditorialSection[] = [
  {
    title: "Titular del sitio",
    paragraphs: [
      "Sui Magazine es un proyecto editorial independiente con domicilio en España. Para cualquier comunicación relacionada con este sitio web, el correo de contacto es info@sui-magazine.com.",
      "El acceso y uso del sitio atribuye la condición de usuario e implica la aceptación de las condiciones recogidas en esta página.",
    ],
  },
  {
    title: "Objeto y contenido",
    paragraphs: [
      "Este sitio publica contenido divulgativo sobre washlets, higiene, bienestar y diseño del baño. La información tiene finalidad informativa y no constituye asesoramiento técnico, sanitario, legal ni comercial.",
      "Las decisiones de compra, instalación o adaptación deben contrastarse con un profesional cualificado y con la documentación oficial del fabricante.",
    ],
  },
  {
    title: "Propiedad intelectual",
    paragraphs: [
      "Los textos, la estructura editorial y los elementos gráficos propios están protegidos por la normativa de propiedad intelectual. Se permite citar fragmentos con atribución y enlace a la fuente, pero no reproducir íntegramente el contenido sin autorización.",
      "Las marcas, nombres comerciales e imágenes de producto citadas pertenecen a sus respectivos titulares. Su mención tiene finalidad informativa y no implica patrocinio ni vinculación comercial.",
    ],
  },
  {
    title: "Enlaces externos",
    paragraphs: [
      "El sitio puede incluir enlaces a páginas de terceros. No controlamos su contenido ni sus políticas, y no asumimos responsabilidad por la información, productos o servicios que ofrezcan.",
      "La inclusión de un enlace no implica recomendación editorial ni relación comercial con el destino.",
    ],
  },
  {
    title: "Datos personales y cookies",
    paragraphs: [
      "Este sitio no dispone de formularios de registro ni de áreas privadas. Si nos escribes por correo electrónico, los datos que facilites se utilizarán únicamente para atender tu consulta y no se cederán a terceros salvo obligación legal.",
      "El sitio no incorpora cookies publicitarias ni herramientas de perfilado. Las cookies estrictamente necesarias para el funcionamiento técnico, si las hubiera, no requieren consentimiento previo.",
    ],
  },
  {
    title: "Responsabilidad y legislación aplicable",
    paragraphs: [
      "La redacción trabaja para que la información sea exacta y esté actualizada, pero no garantiza la ausencia de errores ni la vigencia permanente de todos los datos. Las correcciones pueden comunicarse a través del correo de contacto.",
      "Estas condiciones se rigen por la legislación española. Cualquier controversia se someterá a los juzgados y tribunales que correspondan conforme a la normativa aplicable.",
    ],
  },
];

export default function LegalPage() {
  return (
    <EditorialPage
      eyebrow="Legal"
      title="Aviso legal"
      intro="Las reglas básicas de uso del sitio, la titularidad del contenido y el tratamiento de los datos que nos facilitas."
      image={{
        src: "/images/guia/shoji-luz.jpg",
        alt: "Luz natural atravesando un espacio de baño sereno y minimalista",
      }}
      sections={legalSections}
      cta={{
        title: "¿Tienes una duda sobre este aviso?",
        description:
          "Puedes escribirnos a info@sui-magazine.com para cualquier aclaración sobre las condiciones de uso o los datos personales.",
        label: "Contactar",
        href: "/contacto",
      }}
    />
  );
}
