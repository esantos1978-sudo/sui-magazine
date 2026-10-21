import type { Metadata } from "next";

import SiloHub from "@/components/SiloHub";
import { getArticlesBySilo } from "@/content/articles";

/**
 * Página pilar del silo Tecnología.
 * Se renderiza dentro del Layout global, que aporta header, `<main>` y footer.
 */
export const metadata: Metadata = {
  alternates: {
    canonical: "/tecnologia",
  },
  title: "Tecnología del baño | Sui Magazine",
  description:
    "Innovación, sistemas inteligentes y sostenibilidad aplicados al baño. Cómo funciona la tecnología que mejora el ritual del agua, explicada sin tecnicismos.",
  openGraph: {
    title: "Tecnología del baño | Sui Magazine",
    description:
      "Innovación, sistemas inteligentes y sostenibilidad aplicados al ritual del agua.",
    locale: "es_ES",
    type: "article",
  },
};

/** Artículos satélite del silo, ordenados por prioridad editorial. */
const siloArticles = getArticlesBySilo("tecnologia");

export default function TecnologiaPage() {
  return (
    <SiloHub
      siloId="tecnologia"
      articles={siloArticles}
      intro={[
        "La tecnología del baño no es un fin en sí mismo. Debe desaparecer en el gesto: sentarse, limpiarse, secarse y seguir con el día. En este silo separamos la innovación que mejora esa secuencia de la que solo añade botones.",
        "Revisamos cómo funcionan el calentamiento instantáneo, el secado dirigido o los sensores de presencia, qué mantenimiento exigen y en qué casos la domótica aporta valor real. También miramos el coste ambiental: agua, papel, energía y vida útil.",
      ]}
      cta={{
        eyebrow: "Siguiente paso",
        title: "Entiende qué hace cada función",
        description:
          "Asiento calefactado, secado, luz UV, control remoto o desodorización: explicamos qué aporta cada función y cuándo es prescindible.",
        label: "Ver funcionalidades",
        href: "/funcionalidades",
      }}
    />
  );
}
