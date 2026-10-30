import type { Metadata } from "next";
import Image from "next/image";

import SiloSubnav from "@/components/SiloSubnav";

/**
 * La página se renderiza dentro del Layout global definido en
 * `src/app/layout.tsx`, que ya incluye el header, el `<main>` y el footer.
 * Por eso aquí no se vuelve a envolver en otro `<main>`.
 */
export const metadata: Metadata = {
  alternates: {
    canonical: "/marcas",
  },
  title: "Marcas de Inodoros Inteligentes | Sui Magazine",
  description:
    "Descubre las marcas líderes en inodoros inteligentes y bidés japoneses: TOTO, Roca, Geberit, GROHE, Duravit y las alternativas emergentes. Análisis y filosofía de diseño.",
  openGraph: {
    title: "Marcas de Inodoros Inteligentes | Sui Magazine",
    description:
      "Directorio editorial de los fabricantes que están transformando el baño: TOTO, Roca, Geberit, GROHE, Duravit y las alternativas emergentes.",
    locale: "es_ES",
    type: "website",
  },
};

/** Ficha editorial de cada fabricante del directorio. */
type Brand = {
  /** Ancla estable para enlazar al fabricante desde los hubs de silo. */
  id: string;
  /** Nombre comercial de la marca. */
  name: string;
  /** Origen y rasgo que la define, en formato de metadatos. */
  origin: string;
  /** Retrato breve de su filosofía y aportación al sector. */
  description: string;
  /** Modelo que mejor representa su enfoque. */
  iconicModel: string;
};

/**
 * Los seis perfiles del directorio: cinco fabricantes de referencia y una
 * ficha que agrupa las alternativas relevantes para presupuestos ajustados.
 */
const brands: Brand[] = [
  {
    id: "toto",
    name: "TOTO",
    origin: "Japón · 1917",
    description:
      "El inventor del Washlet en 1980. TOTO no solo fabrica inodoros, define el estándar de la higiene moderna. Su gama Neorest es la cumbre del diseño y la tecnología silenciosa.",
    iconicModel: "Neorest NX2",
  },
  {
    id: "roca",
    name: "Roca",
    origin: "España · 1917",
    description:
      "El gigante europeo. Roca ha sabido integrar la tecnología del bidé en sus diseños más premiados. La gama In-Wash ofrece la tranquilidad del servicio técnico local y un diseño espectacular.",
    iconicModel: "In-Wash Inspira",
  },
  {
    id: "geberit",
    name: "Geberit",
    origin: "Suiza · 1874",
    description:
      "La ingeniería detrás de la cisterna empotrada. Su gama AquaClean traslada la higiene japonesa al lenguaje sobrio del baño centroeuropeo, con un enfoque modular y una red de instaladores consolidada.",
    iconicModel: "AquaClean Mera",
  },
  {
    id: "grohe",
    name: "GROHE",
    origin: "Alemania · 1936",
    description:
      "La grifería que domina el baño europeo. Su línea Sensia Arena integra las funciones de bidé en un inodoro de líneas limpias, apoyándose en su red de servicio técnico y repuestos en toda España.",
    iconicModel: "Sensia Arena",
  },
  {
    id: "duravit",
    name: "Duravit",
    origin: "Alemania · 1817",
    description:
      "Cerámica de baño y diseño de autor. SensoWash, desarrollada con tecnología japonesa, convierte el inodoro en una pieza minimalista sin renunciar al secado o al asiento calefactado.",
    iconicModel: "SensoWash Starck f",
  },
  {
    id: "otras",
    name: "Otras alternativas",
    origin: "España · Internacional",
    description:
      "Nashi y eQiik han acercado la higiene japonesa al mercado español con una relación calidad-precio competitiva. Brondell aporta la robustez americana y Xiaomi la integración con el hogar conectado. Son opciones válidas cuando el presupuesto manda, siempre que el servicio técnico acompañe.",
    iconicModel: "Nashi Aldara · eQiik Pro · Brondell Swash · Xiaomi Smart",
  },
];

export default function MarcasPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero del directorio: mismo ritmo editorial que el resto del magazine. */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden px-6 py-20 md:py-32">
        <Image
          src="/images/marcas/hero-marcas.jpg"
          alt="Showroom editorial con varios modelos de inodoros inteligentes de diferentes fabricantes en un baño de lujo con luz natural y vistas al mar."
          fill
          priority
          sizes="100vw"
          quality={80}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-stone-950/50" aria-hidden="true" />

        <div className="relative mx-auto max-w-3xl text-center">
          <div
            className="mx-auto mb-8 h-px w-12 bg-[#7A8B7C]"
            aria-hidden="true"
          ></div>
          <span className="text-eyebrow uppercase tracking-wider text-stone-300">
            Directorio
          </span>
          <h1 className="mb-6 mt-4 text-balance font-serif text-h1 tracking-tight text-white">
            Las Marcas
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-body-lg text-stone-200">
            Los arquitectos de la revolución del baño. Desde los pioneros
            japoneses hasta los gigantes europeos y los nuevos disruptores
            tecnológicos.
          </p>
        </div>
      </section>

      <SiloSubnav siloId="marcas" />

      {/* 2. Grid editorial de marcas, con borde superior que se tiñe de salvia al pasar. */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-12">
          {brands.map((brand) => (
            <article
              key={brand.id}
              id={brand.id}
              className="group scroll-mt-24 border-t border-stone-300 pt-8 transition-colors hover:border-[#7A8B7C]"
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
