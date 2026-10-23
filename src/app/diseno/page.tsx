import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import SiloSubnav from "@/components/SiloSubnav";

/**
 * Página pilar del silo Diseño.
 *
 * Estructura editorial plana: hero, introducción «La estética del silencio»,
 * rejilla de las tres escalas del silo (arquitectura, interiorismo y
 * producto), principios prácticos, cita editorial y CTA de continuación.
 * Los temas de materiales, tecnología integrada y tendencias se desarrollan
 * en los artículos del silo, no en la portada.
 *
 * Se renderiza dentro del Layout global definido en `src/app/layout.tsx`,
 * que ya aporta el header, el `<main>` y el footer. Por eso este archivo no
 * vuelve a envolver el contenido en otro `<main>`.
 */
export const metadata: Metadata = {
  alternates: {
    canonical: "/diseno",
  },
  title: "Diseño y Estética del Baño | Sui Magazine",
  description:
    "Tendencias, materiales y integración de tecnología en el baño contemporáneo. Cómo crear espacios serenos con alma y funcionalidad.",
  openGraph: {
    title: "Diseño y Estética del Baño | Sui Magazine",
    description:
      "Tendencias, materiales y integración de tecnología en el baño contemporáneo.",
    locale: "es_ES",
    type: "article",
  },
};

/** Criterio editorial que sostiene la estética de un baño contemporáneo. */
type DesignPrinciple = {
  /** Número que ordena visualmente los principios. */
  number: string;
  /** Título breve del principio. */
  title: string;
  /** Explicación práctica y sensorial. */
  description: string;
};

/** Escala editorial del silo Diseño: del espacio al objeto. */
type DesignArea = {
  /** Número editorial que ordena la rejilla. */
  number: string;
  /** Categoría que sitúa el recorrido dentro del silo. */
  category: string;
  /** Titular de la tarjeta. */
  title: string;
  /** Entradilla descriptiva del recorrido. */
  description: string;
  /** Ruta interna hacia la página del recorrido. */
  href: string;
};

/** Los cuatro criterios que estructuran la página. */
const designPrinciples: DesignPrinciple[] = [
  {
    number: "01",
    title: "Luz que acompaña",
    description:
      "La luz natural ordena el espacio y revela la textura de los materiales. En su ausencia, una iluminación cálida y regulable permite pasar de la energía de la mañana a la calma de la noche.",
  },
  {
    number: "02",
    title: "Materia que envejece bien",
    description:
      "La piedra, la madera y la cerámica ganan expresión con el uso. Elegir acabados honestos, resistentes a la humedad y fáciles de mantener es más duradero que perseguir un efecto de temporada.",
  },
  {
    number: "03",
    title: "Tecnología sin protagonismo",
    description:
      "Un asiento templado o una luz nocturna pueden cambiar la experiencia del baño sin llenarlo de pantallas. La mejor tecnología es la que se integra en el gesto y desaparece cuando no hace falta.",
  },
  {
    number: "04",
    title: "Orden que respira",
    description:
      "El almacenamiento bien resuelto reduce el ruido visual y devuelve protagonismo a la luz y al material. Pocas piezas, bien elegidas y en su sitio, transmiten más calma que una superficie llena de objetos.",
  },
];

/** Las tres escalas que estructuran el silo Diseño. */
const designAreas: DesignArea[] = [
  // Imagen prevista: plano general de baño contemporáneo.
  {
    number: "01",
    category: "Arquitectura",
    title: "Espacios que transforman el ritual.",
    description:
      "Distribución, luz y soluciones arquitectónicas que integran los sanitarios inteligentes en el baño contemporáneo. Proyectos donde funcionalidad y estética se encuentran.",
    href: "/diseno/arquitectura",
  },
  // Imagen prevista: composición de materiales y texturas.
  {
    number: "02",
    category: "Interiorismo",
    title: "La belleza de lo esencial.",
    description:
      "Materiales, texturas y detalles que crean espacios serenos y personales. Una mirada a las decisiones que convierten el baño en un lugar para disfrutar de lo cotidiano.",
    href: "/diseno/interiorismo-bano-contemporaneo",
  },
  // Imagen prevista: detalle del inodoro inteligente.
  {
    number: "03",
    category: "Producto",
    title: "Diseño que se siente.",
    description:
      "Formas, proporciones y soluciones que transforman el inodoro inteligente en una pieza de diseño. Porque la innovación también se expresa en los detalles.",
    href: "/diseno/diseno-inodoros-inteligentes",
  },
];

export default function DisenoPage() {
  return (
    <>
      {/* 1. Hero cinematográfico: imagen a sangre, overlay y texto claro. */}
      <section className="relative flex h-[60vh] min-h-[400px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-lujo-negro.jpg"
            alt="Baño contemporáneo con mármol negro, inodoro inteligente y luz cálida indirecta"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-stone-950/60"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <div
            className="mx-auto mb-8 h-px w-12 bg-[#7A8B7C]"
            aria-hidden="true"
          />
          <p className="font-sans text-eyebrow uppercase tracking-wider text-stone-300">
            Diseño
          </p>
          <h1 className="mb-6 mt-4 text-balance font-serif text-h1 tracking-tight text-white">
            El baño como santuario
          </h1>
          <p className="font-sans text-body-lg leading-relaxed text-stone-200">
            Donde la tecnología se integra sin ruido y los materiales nobles
            crean espacios de calma.
          </p>
        </div>
      </section>

      <SiloSubnav siloId="diseno" />

      {/* 2. Introducción editorial: la estética del silencio como punto de partida. */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[#7A8B7C]">
            SUI Magazine — Diseño
          </p>
          <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-6">
            La estética del silencio
          </h2>
          <p className="text-body-lg text-stone-600 leading-relaxed">
            El baño contemporáneo ha dejado de ser únicamente un espacio funcional para convertirse en un lugar donde arquitectura, materiales y tecnología conviven con naturalidad.
          </p>
          <p className="text-body-lg text-stone-600 leading-relaxed mt-4">
            La luz, las texturas y las proporciones construyen atmósferas que invitan a la calma. En ellas, los inodoros inteligentes encuentran su lugar no como objetos tecnológicos que reclaman atención, sino como elementos integrados en el diseño. Una nueva forma de entender el baño, donde la belleza no está reñida con la comodidad y cada detalle responde a una intención.
          </p>
        </div>
      </section>

      {/* 3. Escalas del silo: arquitectura, interiorismo y producto. */}
      <section
        id="territorios"
        className="scroll-mt-24 bg-stone-50 px-6 py-16 md:py-24"
      >
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-center text-xs font-medium uppercase tracking-widest text-[#7A8B7C]">
            Explora Diseño
          </p>
          <h2 className="mb-4 text-center font-serif text-2xl tracking-tight text-stone-900 md:text-3xl">
            Tres escalas, una misma mirada.
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-body-lg leading-relaxed text-stone-600">
            Del espacio que habitamos a los objetos que utilizamos. Exploramos
            cómo la arquitectura, el interiorismo y el diseño de producto dan
            forma a una nueva experiencia del baño.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {designAreas.map((area) => (
              <Link
                key={area.number}
                href={area.href}
                className="group block rounded-sm border border-stone-200 bg-white p-8 transition-colors hover:border-[#7A8B7C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
              >
                <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[#7A8B7C]">
                  {area.number} / {area.category}
                </p>
                <h3 className="mb-3 font-serif text-xl text-stone-900 transition-colors group-hover:text-[#7A8B7C]">
                  {area.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-stone-600">
                  {area.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium uppercase text-[#7A8B7C] transition-colors group-hover:text-stone-900">
                  Explorar {area.category}{" "}
                  <span className="ml-1" aria-hidden="true">
                    {"\u2197\uFE0E"}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Principios de diseño: cuatro decisiones que sostienen el espacio. */}
      <section className="bg-stone-100 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div
              className="mb-6 h-px w-12 bg-[#7A8B7C]"
              aria-hidden="true"
            />
            <p className="font-sans text-eyebrow uppercase text-stone-500">
              Criterios
            </p>
            <h2 className="mb-6 mt-4 text-balance font-serif text-h2 tracking-tight text-stone-900">
              Cuatro decisiones que cambian un baño
            </h2>
            <p className="font-sans text-body-lg leading-relaxed text-stone-600">
              No hay un estilo único para crear un espacio sereno. Hay
              decisiones que se repiten cuando el objetivo es que el baño
              funcione bien y siga teniendo sentido dentro de diez años.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {designPrinciples.map((principle) => (
              <article
                key={principle.number}
                className="border-t border-stone-300 pt-6 transition-colors duration-300 hover:border-[#7A8B7C]"
              >
                <span
                  className="font-serif text-4xl text-stone-400"
                  aria-hidden="true"
                >
                  {principle.number}
                </span>
                <h3 className="mt-4 font-serif text-h3 tracking-tight text-stone-900">
                  {principle.title}
                </h3>
                <p className="mt-3 max-w-md font-sans text-body-base leading-relaxed text-stone-600">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Cita editorial: el buen diseño se sugiere, no se impone. */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="mx-auto mb-8 h-px w-12 bg-[#7A8B7C]"
            aria-hidden="true"
          />
          <blockquote className="mb-8 text-balance font-serif text-3xl italic leading-tight text-stone-800 md:text-4xl">
            “El buen diseño no se impone. Se sugiere.”
          </blockquote>
          <div
            className="mx-auto h-px w-12 bg-[#7A8B7C]"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* 6. CTA final: de la inspiración a una decisión informada. */}
      <section className="bg-stone-50 px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div
            className="mx-auto mb-8 h-px w-12 bg-[#7A8B7C]"
            aria-hidden="true"
          />
          <p className="font-sans text-eyebrow uppercase text-stone-500">
            Del deseo a la decisión
          </p>
          <h2 className="mb-6 mt-4 text-balance font-serif text-h2 tracking-tight text-stone-900">
            La estética también se elige con criterio
          </h2>
          <p className="mb-8 font-sans text-body-base leading-relaxed text-stone-600">
            Si buscas materiales, funciones o un modelo concreto, estas dos
            páginas te ayudan a pasar de la inspiración a una decisión bien
            informada.
          </p>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link
              href="/seleccion"
              className="inline-block border border-stone-900 px-6 py-3 text-sm font-medium tracking-wide text-stone-900 transition hover:bg-stone-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
            >
              Ver la selección
            </Link>
            <Link
              href="/guia"
              className="inline-block border-b border-stone-300 pb-1 font-sans text-sm text-stone-600 transition hover:border-stone-900 hover:text-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
            >
              Volver a la guía
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
