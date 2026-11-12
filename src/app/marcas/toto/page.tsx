import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import SiloSubnav from "@/components/SiloSubnav";
import { totoProducts } from "@/data/brands/toto";

/**
 * Ficha de marca de TOTO dentro del silo Marcas.
 *
 * Es la plantilla editorial que se reutilizará para el resto de fabricantes:
 * hero de sección, retrato de marca, pilares tecnológicos, selección de
 * producto y cierre de colaboración.
 *
 * Se renderiza dentro del Layout global de `src/app/layout.tsx`, que ya
 * incluye el header, el `<main>` y el footer; por eso aquí no se vuelve a
 * envolver el contenido en otro `<main>`.
 */
export const metadata: Metadata = {
  alternates: {
    canonical: "/marcas/toto",
  },
  title: "TOTO: el estándar silencioso de la higiene | Sui Magazine",
  description:
    "Ficha editorial de TOTO: historia, filosofía de diseño y tres piezas clave —NEOREST NX2, Washlet G4 y la colección Gallery— dentro del directorio de marcas de Sui Magazine.",
  openGraph: {
    title: "TOTO: el estándar silencioso de la higiene | Sui Magazine",
    description:
      "El fabricante japonés que convirtió el inodoro en un objeto de precisión. Retrato de marca y selección de producto en Sui Magazine.",
    locale: "es_ES",
    type: "article",
  },
};

/** Datos que identifican a la marca, en formato de metadatos. */
const brandFacts = [
  { label: "Origen", value: "Japón" },
  { label: "Fundación", value: "1917" },
  { label: "Hito", value: "Washlet · 1980" },
  { label: "Territorio", value: "Higiene inteligente" },
];

/** Tecnologías que sostienen la promesa de la marca. */
const technologies = [
  {
    name: "EWATER+",
    description:
      "Agua electrolizada que se pulveriza sobre la cerámica después de cada uso para mantenerla limpia durante más tiempo.",
  },
  {
    name: "CEFIONTECT",
    description:
      "Esmalte cerámico de acabado ultraliso que dificulta la adherencia de residuos y reduce la necesidad de productos agresivos.",
  },
  {
    name: "PREMIST",
    description:
      "Una nebulización previa al uso que humedece la superficie y facilita que todo se arrastre con una descarga más ligera.",
  },
];

export default function TotoBrandPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero de sección: el mismo ritmo que el resto de páginas pilar. */}
      <section className="bg-stone-100 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/marcas"
            className="inline-block border-b border-stone-300 pb-1 font-sans text-sm text-stone-600 transition hover:border-stone-900 hover:text-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
          >
            ← Directorio de marcas
          </Link>
          <div
            className="mx-auto mb-8 mt-10 h-px w-12 bg-[#7A8B7C]"
            aria-hidden="true"
          ></div>
          <p className="font-sans text-eyebrow uppercase tracking-wider text-stone-500">
            Marcas / Japón
          </p>
          <h1 className="mb-6 mt-4 text-balance font-serif text-h1 tracking-tight text-stone-900">
            TOTO
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-body-lg leading-relaxed text-stone-600">
            El fabricante que enseñó al mundo a lavarse con agua. Un siglo de
            cerámica, ingeniería silenciosa y una idea sencilla: el baño también
            puede ser un lugar de cuidado.
          </p>
          <dl className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-6 border-t border-stone-300 pt-8 text-left sm:grid-cols-4">
            {brandFacts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-sans text-eyebrow uppercase text-stone-500">
                  {fact.label}
                </dt>
                <dd className="mt-2 font-serif text-lg text-stone-900">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <SiloSubnav siloId="marcas" />
      {/* 2. Retrato de marca: imagen de producto sin recorte junto al relato. */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <figure>
            <div className="relative aspect-square overflow-hidden rounded-sm bg-stone-100">
              <Image
                src="/images/productos/toto-neorest-nx2.jpg"
                alt="Inodoro inteligente TOTO NEOREST NX2 de formas continuas en cerámica blanca."
                fill
                sizes="(min-width: 1024px) 512px, 100vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-4 font-sans text-caption text-stone-500">
              NEOREST NX2, la pieza que resume la filosofía de la casa.
            </figcaption>
          </figure>

          <div>
            <p className="font-sans text-eyebrow uppercase tracking-wider text-stone-500">
              La marca
            </p>
            <h2 className="mb-6 mt-4 text-balance font-serif text-h2 tracking-tight text-stone-900">
              Una pregunta de 1917
            </h2>
            <div className="space-y-6 font-sans text-body-base leading-relaxed text-stone-700">
              <p>
                TOTO nació en Kitakyushu como un fabricante de cerámica
                sanitaria. La pregunta que ha guiado su catálogo durante más de
                un siglo sigue siendo la misma: cómo hacer que un gesto íntimo
                sea también un momento de bienestar.
              </p>
              <p>
                En 1980 presentó el primer Washlet, un asiento que incorporaba
                agua templada, secado y calor. Lo que entonces parecía un objeto
                de ciencia ficción se convirtió en un estándar doméstico en Japón
                y, cuatro décadas después, en el lenguaje con el que el baño
                europeo aprende a hablar de higiene.
              </p>
              <p>
                La gama NEOREST representa su versión más depurada: tecnología
                integrada, silencio y una forma que no necesita explicarse.
              </p>
            </div>
            <p className="mt-8 border-t border-stone-200 pt-6 font-sans text-caption text-stone-500">
              Ficha editorial · Contenido elaborado por Sui Magazine con
              información pública del fabricante.
            </p>
          </div>
        </div>
      </section>
      {/* 3. Pilares tecnológicos: el relato técnico, sin tecnicismos. */}
      <section className="bg-stone-50 px-6 py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 md:grid-cols-[1fr_0.85fr] md:gap-16">
          <div>
            <p className="font-sans text-eyebrow uppercase tracking-wider text-stone-500">
              Tecnología
            </p>
            <h2 className="mb-6 mt-4 text-balance font-serif text-h2 tracking-tight text-stone-900">
              La innovación que no se anuncia
            </h2>
            <p className="mb-10 font-sans text-body-base leading-relaxed text-stone-700">
              En TOTO, la tecnología no se explica con pantallas: se esconde en
              la cerámica y en el agua. Tres desarrollos sostienen la promesa de
              limpieza y confort de casi toda su gama.
            </p>
            <dl className="space-y-8">
              {technologies.map((technology) => (
                <div
                  key={technology.name}
                  className="border-t border-stone-200 pt-6"
                >
                  <dt className="font-serif text-xl tracking-tight text-stone-900">
                    {technology.name}
                  </dt>
                  <dd className="mt-3 font-sans text-body-base leading-relaxed text-stone-700">
                    {technology.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-stone-100">
              <Image
                src="/images/productos/toto-washlet.jpg"
                alt="Asiento electrónico TOTO Washlet con mando de control y tapa cerrada."
                fill
                sizes="(min-width: 1024px) 440px, 100vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-4 font-sans text-caption text-stone-500">
              El Washlet trasladó el bidé del cuarto de baño al propio inodoro.
            </figcaption>
          </figure>
        </div>
      </section>
      {/* 4. Selección de producto, en el lenguaje de las fichas de marca. */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12">
          <div>
            <p className="font-sans text-eyebrow uppercase tracking-wider text-stone-500">
              Selección editorial
            </p>
            <h2 className="mt-4 text-balance font-serif text-h2 tracking-tight text-stone-900">
              Tres piezas clave
            </h2>
          </div>
          <p className="max-w-sm font-sans text-caption leading-relaxed text-stone-500">
            Una lectura breve del catálogo. No es una comparativa: es la puerta
            de entrada a la marca.
          </p>
        </div>

        <ol className="space-y-10">
          {totoProducts.map((product, index) => (
            <li
              key={product.id}
              id={product.id}
              className="scroll-mt-24 border-t border-stone-300 pt-8 transition-colors hover:border-[#7A8B7C]"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-8">
                <p className="font-serif text-lg text-stone-400 md:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-balance font-serif text-h3 tracking-tight text-stone-900 md:col-span-4">
                  {product.name}
                </h3>
                <div className="md:col-span-7">
                  <p className="font-sans text-body-base leading-relaxed text-stone-700">
                    {product.description}
                  </p>
                  <p className="mt-4 flex items-start gap-3 font-sans text-sm text-[#7A8B7C]">
                    <span aria-hidden="true">→</span>
                    <span>{product.highlight}</span>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>
      {/* 5. Cierre de colaboración: la ficha también es una herramienta de pitch. */}
      <section className="bg-stone-100 px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div
            className="mx-auto mb-8 h-px w-12 bg-[#7A8B7C]"
            aria-hidden="true"
          ></div>
          <p className="font-sans text-eyebrow uppercase tracking-wider text-stone-500">
            Colaboraciones
          </p>
          <h2 className="mb-5 mt-4 text-balance font-serif text-h2 tracking-tight text-stone-900">
            Así se cuenta una marca
          </h2>
          <p className="mb-8 font-sans text-body-base leading-relaxed text-stone-600">
            Esta ficha es una plantilla editorial reutilizable: relato de marca,
            pilares tecnológicos y selección de producto. Podemos adaptarla a tu
            catálogo, a tu tono y a tus objetivos de comunicación.
          </p>
          <Link
            href="/contacto"
            className="inline-block border border-stone-900 px-6 py-3 text-sm font-medium tracking-wide text-stone-900 transition hover:bg-stone-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
          >
            Hablemos de una colaboración
          </Link>
        </div>
      </section>
    </div>
  );
}
