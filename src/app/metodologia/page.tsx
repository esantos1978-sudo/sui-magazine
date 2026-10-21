import type { Metadata } from "next";

import EditorialPage, { type EditorialSection } from "@/components/EditorialPage";

/**
 * Metodología editorial: hace explícitos los criterios de evaluación y las
 * fuentes que sostienen las guías y comparativas del magazine.
 */
export const metadata: Metadata = {
  title: "Metodología editorial | Sui Magazine",
  description:
    "Cómo evaluamos un washlet: criterios de higiene, consumo, instalación, mantenimiento y servicio técnico. Fuentes, actualización y límites.",
  openGraph: {
    title: "Metodología editorial | Sui Magazine",
    description:
      "Los criterios con los que analizamos washlets: higiene, consumo, instalación, mantenimiento y servicio técnico.",
    locale: "es_ES",
    type: "website",
  },
};

/** Criterios y reglas de trabajo de la redacción. */
const methodologySections: EditorialSection[] = [
  {
    title: "Qué evaluamos",
    paragraphs: [
      "Un washlet no se juzga solo por la potencia del chorro. Analizamos el conjunto: higiene real, consumo de agua y electricidad, facilidad de instalación, mantenimiento y disponibilidad de repuestos.",
      "Cuando no podemos probar un modelo, lo decimos. En esos casos la pieza se apoya en documentación técnica, especificaciones del fabricante y experiencia de instaladores, y se presenta como análisis documental, no como prueba de uso.",
    ],
    items: [
      "Higiene: boquilla, filtro de agua, sistemas de autolimpieza y secado.",
      "Consumo: agua por ciclo, potencia, modo eco y consumo en reposo.",
      "Instalación: requisitos eléctricos, distancia al inodoro y tipo de anclaje.",
      "Mantenimiento: accesibilidad del filtro, recambios y descalcificación.",
      "Servicio técnico: cobertura en España, garantía y repuestos.",
    ],
  },
  {
    title: "De dónde sale la información",
    paragraphs: [
      "Partimos de manuales y fichas técnicas oficiales, normativa aplicable y documentación de instalación. Contrastamos después con profesionales del sector y con la experiencia de uso cuando es posible.",
      "Las cifras que publicamos proceden de la fuente citada. Si un dato no se puede verificar, se omite o se marca como estimación. No completamos huecos con cifras inventadas.",
    ],
  },
  {
    title: "Cómo se actualiza",
    paragraphs: [
      "Las guías se revisan cuando cambia el mercado, aparece una normativa relevante o un fabricante modifica su gama. La fecha de actualización se indica en las piezas que se revisan de forma sustancial.",
      "Si detectas un error, escríbenos. Las correcciones se incorporan con transparencia y sin borrar el histórico cuando el cambio afecta a una recomendación.",
    ],
  },
  {
    title: "Qué no hacemos",
    paragraphs: [
      "No publicamos comparativas pagadas, no otorgamos sellos de calidad a cambio de contraprestación y no presentamos publicidad como contenido editorial.",
      "Tampoco sustituimos la valoración de un profesional sanitario, un instalador o un servicio técnico oficial. Nuestro trabajo es ayudarte a decidir con información, no tomar la decisión por ti.",
    ],
  },
];

export default function MetodologiaPage() {
  return (
    <EditorialPage
      eyebrow="Metodología"
      title="Cómo llegamos a una recomendación"
      intro="La confianza editorial se construye explicando el método. Estos son los criterios, las fuentes y los límites con los que trabajamos cada análisis."
      image={{
        src: "/images/guia/shoji-luz.jpg",
        alt: "Luz atravesando un panel japonés de madera y papel",
      }}
      sections={methodologySections}
      cta={{
        title: "¿Has encontrado un dato que no cuadra?",
        description:
          "Las correcciones son parte del método. Cuéntanos qué has detectado y lo revisaremos.",
        label: "Contactar con la redacción",
        href: "/contacto",
      }}
    />
  );
}
