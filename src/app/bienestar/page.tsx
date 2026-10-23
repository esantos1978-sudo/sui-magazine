import type { Metadata } from "next";
import Link from "next/link";

/**
 * Página pilar del silo Bienestar.
 *
 * Se renderiza dentro del Layout global definido en `src/app/layout.tsx`,
 * que ya aporta el header, el `<main>` y el footer. Por eso este archivo no
 * vuelve a envolver el contenido en otro `<main>`.
 *
 * Estructura editorial en cuatro bloques: hero, introducción, rejilla de los
 * cuatro territorios del silo y CTA de continuación hacia el resto de
 * secciones del magazine.
 */
export const metadata: Metadata = {
  title: "Bienestar | El baño como acto de cuidado | SUI Magazine",
  description:
    "La tecnología encuentra su verdadero valor cuando se adapta a las personas. Exploramos cómo la innovación aplicada a la higiene puede favorecer la autonomía y preservar la intimidad.",
  alternates: {
    canonical: "https://sui-magazine.vercel.app/bienestar",
  },
  openGraph: {
    title: "Bienestar | El baño como acto de cuidado | SUI Magazine",
    description:
      "La tecnología encuentra su verdadero valor cuando se adapta a las personas. Exploramos cómo la innovación aplicada a la higiene puede favorecer la autonomía y preservar la intimidad.",
    locale: "es_ES",
    type: "article",
  },
};

/** Artículo del silo presentado en la rejilla de exploración. */
type BienestarArticle = {
  /** Número editorial que ordena la rejilla. */
  number: string;
  /** Categoría que sitúa el artículo dentro del silo. */
  category: string;
  /** Titular de la tarjeta. */
  title: string;
  /** Entradilla descriptiva del artículo. */
  description: string;
  /** Destino del enlace: la página del artículo. */
  href: string;
};

// Array de los 4 artículos de Bienestar (para el grid)
const bienestarArticles: BienestarArticle[] = [
  {
    number: "01",
    category: "AUTONOMÍA PERSONAL",
    title: "Higiene personal y movilidad reducida",
    description:
      "Cómo los sistemas de higiene con agua pueden facilitar la autonomía en la higiene personal cuando la movilidad está limitada.",
    href: "/bienestar/higiene-personal-movilidad-reducida",
  },
  {
    number: "02",
    category: "ACCESIBILIDAD",
    title: "Diseñar un baño accesible",
    description:
      "Claves para adaptar el espacio del baño y hacerlo funcional, seguro y respetuoso con las necesidades de cada persona.",
    href: "/bienestar/diseno-bano-accesible",
  },
  {
    number: "03",
    category: "ENVEJECIMIENTO",
    title: "Envejecer en casa: el baño",
    description:
      "El baño como espacio clave para el envejecimiento activo y seguro en el hogar. Soluciones que acompañan sin estigmatizar.",
    href: "/bienestar/envejecer-en-casa-bano",
  },
  {
    number: "04",
    category: "CUIDADO Y ASISTENCIA",
    title: "Tecnología para la higiene asistida",
    description:
      "El papel de la tecnología en el cuidado cotidiano: cómo facilitar la labor de cuidadores y familiares sin perder intimidad.",
    href: "/bienestar/tecnologia-higiene-asistida",
  },
];

export default function BienestarPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO EDITORIAL */}
      <section className="bg-stone-50 px-6 py-20 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[#7A8B7C]">
            SUI MAGAZINE / BIENESTAR
          </p>
          <h1 className="font-serif text-3xl md:text-5xl tracking-tight text-stone-900 text-balance mb-6">
            El baño como acto de cuidado, no de dependencia.
          </h1>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed italic text-balance">
            La tecnología encuentra su verdadero valor cuando se adapta a las
            personas. Exploramos cómo la innovación aplicada a la higiene puede
            favorecer la autonomía, preservar la intimidad y facilitar el
            cuidado cotidiano.
          </p>
        </div>
      </section>

      {/* INTRODUCCIÓN EDITORIAL */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[#7A8B7C]">
            Introducción
          </p>
          <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-6">
            La dignidad en los detalles
          </h2>
          <p className="text-body-lg text-stone-600 leading-relaxed">
            La intimidad y la autonomía forman parte esencial del bienestar. Sin
            embargo, para algunas personas con movilidad reducida o necesidades
            de asistencia, gestos tan cotidianos como la higiene personal pueden
            convertirse en un desafío. Un baño poco adaptado, determinados
            movimientos o la dificultad para utilizar papel higiénico pueden
            limitar su independencia.
          </p>
          <p className="text-body-lg text-stone-600 leading-relaxed mt-4">
            Los sistemas de higiene con agua, como los bidés japoneses y los
            asientos electrónicos, ofrecen nuevas posibilidades. Funciones como
            el lavado regulable y el secado con aire pueden reducir la necesidad
            de ciertos movimientos y facilitar la higiene personal. No sustituyen
            el cuidado humano ni resuelven todas las barreras, pero, cuando se
            adaptan a las necesidades de cada persona, pueden contribuir a una
            experiencia más cómoda, íntima y autónoma.
          </p>
        </div>
      </section>

      {/* GRID DE ARTÍCULOS */}
      <section className="bg-stone-50 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[#7A8B7C] text-center">
            Explorar
          </p>
          <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-12 text-center">
            Cuatro dimensiones del bienestar en el baño
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bienestarArticles.map((article) => (
              <Link
                key={article.number}
                href={article.href}
                className="group block bg-white p-8 rounded-sm border border-stone-200 hover:border-[#7A8B7C] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
              >
                <p className="text-xs font-medium uppercase tracking-widest text-[#7A8B7C] mb-2">
                  {article.number} / {article.category}
                </p>
                <h3 className="font-serif text-xl text-stone-900 mb-3 group-hover:text-[#7A8B7C] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {article.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-stone-950 px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-stone-400 text-sm uppercase tracking-widest mb-4">
            Sigue leyendo
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mb-8">
            Descubre otras perspectivas en SUI Magazine
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/tecnologia"
              className="px-6 py-3 border border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white transition-colors rounded-sm text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Tecnología
            </Link>
            <Link
              href="/diseno"
              className="px-6 py-3 border border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white transition-colors rounded-sm text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Diseño
            </Link>
            <Link
              href="/"
              className="px-6 py-3 bg-[#7A8B7C] text-white hover:bg-[#6a7b6c] transition-colors rounded-sm text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              ← Volver a la Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
