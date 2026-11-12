import type { Metadata } from "next";

import SiloHub from "@/components/SiloHub";
import { articles } from "@/content/articles";

/**
 * Página pilar del silo Actualidad.
 *
 * Es el único contenedor de contenido dinámico del magazine: presenta las
 * piezas de actualidad y el archivo completo de artículos, heredado del
 * antiguo índice `/blog` (esa ruta responde con un 301 permanente aquí).
 * Se renderiza dentro del Layout global, que aporta header, `<main>` y footer.
 */
export const metadata: Metadata = {
  alternates: {
    canonical: "/actualidad",
  },
  title: "Actualidad del baño | Sui Magazine",
  description:
    "Lanzamientos, noticias y tendencias del sector del baño. Contexto editorial para entender hacia dónde va la higiene japonesa en España.",
  openGraph: {
    title: "Actualidad del baño | Sui Magazine",
    description:
      "Lanzamientos, noticias y tendencias para entender hacia dónde va el baño.",
    locale: "es_ES",
    type: "article",
  },
};

export default function ActualidadPage() {
  return (
    <SiloHub
      siloId="actualidad"
      articles={articles}
      readingsEyebrow="Archivo del magazine"
      readingsTitle="Todas las historias"
      intro={[
        "El mercado del baño se mueve rápido: nuevas generaciones de tapas, alianzas entre fabricantes, normativa europea de eficiencia y cambios en la forma de habitar la vivienda. La actualidad del magazine filtra ese ruido y se queda con lo que afecta a una decisión real.",
        "Publicamos lanzamientos con contexto, noticias con consecuencias prácticas y tendencias que ya se ven en proyectos, no solo en ferias. Cuando algo es una promesa y no un hecho, lo decimos.",
      ]}
    />
  );
}
