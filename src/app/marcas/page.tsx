import type { Metadata } from "next";

/**
 * La página se renderiza dentro del Layout global definido en
 * `src/app/layout.tsx`, que ya incluye el header, el `<main>` y el footer.
 * Por eso aquí no se vuelve a envolver en otro `<main>`.
 */
export const metadata: Metadata = {
  title: "Marcas de Inodoros Inteligentes | Sui Magazine",
  description:
    "Descubre las marcas líderes en inodoros inteligentes y bidés japoneses. TOTO, Roca, Nashi, eQiik y más. Análisis y filosofía de diseño.",
  openGraph: {
    title: "Marcas de Inodoros Inteligentes | Sui Magazine",
    description:
      "Directorio editorial de los fabricantes que están transformando el baño: TOTO, Roca, Nashi, eQiik, Brondell y Xiaomi.",
    locale: "es_ES",
    type: "website",
  },
};

/** Ficha editorial de cada fabricante del directorio. */
type Brand = {
  /** Nombre comercial de la marca. */
  name: string;
  /** Origen y rasgo que la define, en formato de metadatos. */
  origin: string;
  /** Retrato breve de su filosofía y aportación al sector. */
  description: string;
  /** Modelo que mejor representa su enfoque. */
  iconicModel: string;
};

/** Los seis fabricantes que protagonizan el directorio. */
const brands: Brand[] = [
  {
    name: "TOTO",
    origin: "Japón · 1917",
    description:
      "El inventor del Washlet en 1980. TOTO no solo fabrica inodoros, define el estándar de la higiene moderna. Su gama Neorest es la cumbre del diseño y la tecnología silenciosa.",
    iconicModel: "Neorest NX2",
  },
  {
    name: "Roca",
    origin: "España · 1917",
    description:
      "El gigante europeo. Roca ha sabido integrar la tecnología del bidé en sus diseños más premiados. La gama In-Wash ofrece la tranquilidad del servicio técnico local y un diseño espectacular.",
    iconicModel: "In-Wash Inspira",
  },
  {
    name: "Nashi",
    origin: "España · Challenger",
    description:
      "La democratización del baño japonés. Nashi trae la funcionalidad premium a un precio accesible para el mercado español, con modelos como el Aldara que están revolucionando las reformas.",
    iconicModel: "Aldara iPlus 5",
  },
  {
    name: "eQiik",
    origin: "España · Diseño",
    description:
      "Enfoque minimalista y funcional. eQiik destaca por integrar la tecnología en el baño contemporáneo sin estridencias, apostando por la facilidad de instalación y la estética limpia.",
    iconicModel: "eQiik Pro",
  },
  {
    name: "Brondell",
    origin: "EE. UU. · Robustez",
    description:
      "El estándar americano. Brondell popularizó los asientos inteligentes en occidente. Destacan por la robustez de sus materiales y una excelente relación calidad-precio en la gama Swash.",
    iconicModel: "Swash 1400",
  },
  {
    name: "Xiaomi",
    origin: "China · Disrupción",
    description:
      "El gigante tecnológico entra en el baño. Con su ecosistema Smart Home, Xiaomi ofrece funcionalidades avanzadas y control por app a un precio que desafía a toda la industria tradicional.",
    iconicModel: "Smart Toilet Seat",
  },
];

export default function MarcasPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero del directorio: mismo ritmo editorial que el resto del magazine. */}
      <section className="bg-stone-100 px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <div
            className="mx-auto mb-8 h-px w-12 bg-[#7A8B7C]"
            aria-hidden="true"
          ></div>
          <span className="text-eyebrow uppercase tracking-wider text-stone-500">
            Directorio
          </span>
          <h1 className="mb-6 mt-4 text-balance font-serif text-h1 tracking-tight text-stone-900">
            Las Marcas
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-body-lg text-stone-600">
            Los arquitectos de la revolución del baño. Desde los pioneros
            japoneses hasta los gigantes europeos y los nuevos disruptores
            tecnológicos.
          </p>
        </div>
      </section>

      {/* 2. Grid editorial de marcas, con borde superior que se tiñe de salvia al pasar. */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-12">
          {brands.map((brand) => (
            <article
              key={brand.name}
              className="group border-t border-stone-300 pt-8 transition-colors hover:border-[#7A8B7C]"
            >
              <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h2 className="font-serif text-4xl tracking-tight text-stone-900 md:text-5xl">
                  {brand.name}
                </h2>
                <span className="text-eyebrow text-stone-500">
                  {brand.origin}
                </span>
              </div>
              <p className="mb-6 font-sans text-body-base leading-relaxed text-stone-700">
                {brand.description}
              </p>
              <div className="flex items-center gap-2 font-sans text-sm text-[#7A8B7C] transition-colors group-hover:text-stone-900">
                <span>Modelo icónico: {brand.iconicModel}</span>
                <span aria-hidden="true">→</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
