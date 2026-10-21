import type { Metadata } from "next";

import EditorialPage, { type EditorialSection } from "@/components/EditorialPage";

/**
 * Página de soluciones: traduce la arquitectura de silos a tres escenarios
 * de proyecto reales. Se renderiza dentro del Layout global.
 */
export const metadata: Metadata = {
  title: "Soluciones para el baño | Sui Magazine",
  description:
    "Tres formas de integrar la higiene japonesa según el proyecto: vivienda nueva, reforma parcial y adaptación para el cuidado.",
  openGraph: {
    title: "Soluciones para el baño | Sui Magazine",
    description:
      "Vivienda nueva, reforma parcial y adaptación: soluciones reales para integrar el washlet.",
    locale: "es_ES",
    type: "website",
  },
};

/** Los tres escenarios que estructuran la página. */
const solutions: EditorialSection[] = [
  {
    title: "Vivienda nueva y reforma integral",
    paragraphs: [
      "Cuando el baño se proyecta desde cero, el inodoro completo es la solución más coherente: integra la tecnología en la cerámica, elimina cables vistos y permite ocultar la cisterna tras un tabique.",
      "La decisión se toma antes de cerrar la instalación. Conviene prever una toma de agua con presión suficiente, un punto eléctrico protegido y un registro accesible para el mantenimiento.",
    ],
    items: [
      "Inodoro completo suspendido o de suelo, según la estructura.",
      "Cisterna empotrada con registro accesible.",
      "Toma eléctrica con protección diferencial en el cuarto de baño.",
      "Espacio técnico para el filtro y la conexión de agua.",
    ],
  },
  {
    title: "Reforma parcial y vivienda de alquiler",
    paragraphs: [
      "Si no quieres tocar la cerámica, una tapa inteligente transforma el inodoro existente en pocos minutos. Es la opción mayoritaria en España y la que menos obra requiere.",
      "Necesita una toma de agua cercana y un enchufe. La mayoría de modelos admiten instalación sobre el inodoro actual, aunque conviene comprobar la forma del aro y el espacio trasero antes de comprar.",
    ],
    items: [
      "Comprobar la distancia entre los anclajes y la forma del inodoro.",
      "Verificar que existe enchufe y toma de agua accesibles.",
      "Elegir mando lateral o remoto según el espacio disponible.",
    ],
  },
  {
    title: "Adaptación y cuidado",
    paragraphs: [
      "En baños adaptados, el washlet reduce la dependencia del papel y los giros forzados del tronco. La clave está en combinar la función con alturas, agarres y mandos adecuados.",
      "No sustituye la valoración de un profesional sanitario ni las ayudas técnicas que cada persona necesite. Sí puede formar parte de una adaptación razonable y respetuosa con la intimidad.",
    ],
    items: [
      "Mandos grandes o control remoto al alcance de la mano.",
      "Asiento calefactado y secado para reducir esfuerzos.",
      "Altura del inodoro y barreras de apoyo según cada caso.",
      "Coordinación con terapeutas ocupacionales e instaladores.",
    ],
  },
];

export default function SolucionesPage() {
  return (
    <EditorialPage
      eyebrow="Soluciones"
      title="Un washlet para cada proyecto"
      intro="No hay una única forma de integrar la higiene japonesa. La solución correcta depende del momento del baño, del presupuesto y de quién lo va a usar."
      image={{
        src: "/images/formatos/tapa-home.jpg",
        alt: "Inodoro con tapa inteligente en un baño de piedra y madera",
      }}
      sections={solutions}
      cta={{
        title: "Empieza por entender los formatos",
        description:
          "La guía esencial explica las diferencias entre accesorio mecánico, tapa inteligente e inodoro completo, con sus ventajas y límites.",
        label: "Leer la guía esencial",
        href: "/guia",
      }}
    />
  );
}
