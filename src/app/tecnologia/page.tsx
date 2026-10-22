import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { getArticlesBySilo } from "@/content/articles";
import { getSilo } from "@/content/silos";

/**
 * Página pilar del silo Tecnología.
 *
 * Reescritura editorial en cinco bloques: hero sobre imagen, introducción,
 * tres territorios de exploración, artículo destacado y últimas
 * publicaciones reales del silo. Se renderiza dentro del Layout global, que
 * aporta el header, el `<main>` y el footer.
 */
export const metadata: Metadata = {
  alternates: {
    canonical: "/tecnologia",
  },
  title: "La inteligencia detrás del bienestar | Sui Magazine",
  description:
    "Exploramos las tecnologías que transforman la higiene cotidiana: sistemas de lavado, automatización, innovación y eficiencia. Una mirada a cómo la ingeniería redefine nuestra relación con el agua.",
  openGraph: {
    title: "La inteligencia detrás del bienestar | Sui Magazine",
    description:
      "Sistemas de lavado, automatización, innovación y eficiencia: la ingeniería que redefine el ritual del agua.",
    locale: "es_ES",
    type: "article",
  },
};

/** Territorio tecnológico presentado en la rejilla de exploración. */
type TechnologyArea = {
  /** Etiqueta que sitúa el territorio dentro del silo. */
  eyebrow: string;
  /** Titular de la tarjeta. */
  title: string;
  /** Entradilla descriptiva del territorio. */
  text: string;
  /** Etiqueta del enlace de exploración. */
  cta: string;
  /** Destino del enlace; provisional hasta crear las sub-páginas. */
  href: string;
  /** Ruta absoluta de la imagen desde `public`. */
  image: string;
  /** Texto alternativo descriptivo de la imagen. */
  imageAlt: string;
};

/**
 * Los tres territorios que articulan el silo Tecnología.
 * Las imágenes son cuadradas (1:1) para que el recorte vertical 4:5 de la
 * tarjeta no seccionne el objeto principal.
 */
const technologyAreas: TechnologyArea[] = [
  {
    eyebrow: "INNOVACIÓN",
    title: "El futuro toma forma.",
    text: "La evolución de la higiene a través de nuevas ideas, desarrollos y tecnologías que están redefiniendo nuestra relación con el baño.",
    cta: "EXPLORAR INNOVACIÓN",
    href: "/tecnologia",
    image: "/images/formatos/tapa-inteligente-marmol.jpg",
    imageAlt:
      "Inodoro con tapa inteligente en un baño de mármol gris y madera clara",
  },
  {
    eyebrow: "SISTEMAS INTELIGENTES",
    title: "La ingeniería del bienestar.",
    text: "Descubre la tecnología que hay detrás de cada función: sistemas de lavado, control de temperatura, sensores y automatización al servicio de una experiencia más intuitiva.",
    cta: "EXPLORAR SISTEMAS",
    href: "/tecnologia",
    image: "/images/atmosfericas/bide-japones-entorno.jpg",
    imageAlt:
      "Baño minimalista con inodoro suspendido de diseño integrado, mueble de madera clara y texturas naturales",
  },
  {
    eyebrow: "SOSTENIBILIDAD",
    title: "El valor de cada recurso.",
    text: "Una mirada al consumo de agua y energía, la eficiencia y la durabilidad de los inodoros inteligentes. Porque innovar también significa comprender su impacto.",
    cta: "EXPLORAR SOSTENIBILIDAD",
    href: "/tecnologia",
    image: "/images/articulos/sostenibilidad.jpg",
    imageAlt: "Baño minimalista con inodoro japonés y materiales sostenibles",
  },
];

/** Imagen pilar del silo: se conserva como fondo del hero. */
const silo = getSilo("tecnologia");

/** Artículos reales del silo, en el orden editorial de `articles.ts`. */
const latestArticles = getArticlesBySilo("tecnologia");

export default function TecnologiaPage() {
  return (
    <>
      {/* 1. Hero: se mantiene la imagen actual del silo y se actualizan los textos. */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden py-20">
        <Image
          src={silo.image.src}
          alt={silo.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-stone-950/60"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <div
            className="mx-auto mb-8 h-px w-12 bg-[#7A8B7C]"
            aria-hidden="true"
          />
          <p className="mb-4 font-sans text-eyebrow uppercase tracking-wider text-stone-300">
            SUI MAGAZINE / TECNOLOGÍA
          </p>
          <h1 className="mb-6 text-balance font-serif text-h1 tracking-tight text-white">
            La inteligencia detrás del bienestar.
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-body-lg leading-relaxed text-stone-200">
            Exploramos las tecnologías que transforman la higiene cotidiana:
            sistemas de lavado, automatización, innovación y eficiencia. Una
            mirada a cómo la ingeniería redefine nuestra relación con el agua.
          </p>
        </div>
      </section>

      {/* 2. Introducción editorial. */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-balance font-serif text-h2 tracking-tight text-stone-900">
            Tecnología que se siente, pero apenas se ve.
          </h2>
          <p className="max-w-3xl font-sans text-body-lg leading-relaxed text-stone-600">
            Detrás de la sencillez de un inodoro inteligente conviven sistemas
            de precisión, sensores y mecanismos diseñados para mejorar la
            experiencia de higiene. Desde el control de la temperatura hasta la
            automatización del lavado, cada innovación responde a una búsqueda
            común: hacer que el cuidado cotidiano resulte más cómodo, intuitivo
            y eficiente.
          </p>
        </div>
      </section>

      {/* 3. Los tres territorios tecnológicos. */}
      <section className="bg-stone-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 font-sans text-eyebrow uppercase tracking-wider text-[#7A8B7C]">
            ÁREAS DE EXPLORACIÓN
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {technologyAreas.map((area) => (
              <article key={area.title}>
                <Image
                  src={area.image}
                  alt={area.imageAlt}
                  width={800}
                  height={1000}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="mb-6 aspect-[4/5] w-full rounded-sm bg-stone-200 object-cover"
                />
                <p className="mb-2 text-xs uppercase tracking-widest text-[#7A8B7C]">
                  {area.eyebrow}
                </p>
                <h3 className="mb-3 font-serif text-xl text-stone-900">
                  {area.title}
                </h3>
                <p className="text-sm leading-relaxed text-stone-600">
                  {area.text}
                </p>
                <Link
                  href={area.href}
                  className="inline-flex items-center text-sm font-medium text-[#7A8B7C] hover:text-stone-900 transition-colors mt-4"
                >
                  {area.cta}
                  <span className="ml-1" aria-hidden="true">
                    {"\u2197\uFE0E"}
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Artículo destacado en profundidad. */}
      <section className="bg-stone-100 px-6 py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <Image
            src="/images/articulos/tapa-inteligente.jpg"
            alt="Tapa inteligente de inodoro con control electrónico en un baño de piedra"
            width={1024}
            height={576}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="aspect-[16/9] w-full rounded-sm bg-stone-200 object-cover"
          />

          <div>
            <p className="mb-4 font-sans text-eyebrow uppercase tracking-wider text-[#7A8B7C]">
              EN PROFUNDIDAD / SISTEMAS INTELIGENTES
            </p>
            <h2 className="mb-4 text-balance font-serif text-h2 tracking-tight text-stone-900">
              La tecnología invisible: cómo funciona un inodoro inteligente
            </h2>
            <p className="font-sans text-body-base leading-relaxed text-stone-600">
              Un recorrido por los sistemas de lavado, calentamiento, secado y
              automatización que han transformado el inodoro convencional.
            </p>
            <Link
              href="/articulos/tapa-inteligente"
              className="mt-6 inline-flex items-center text-sm font-medium text-[#7A8B7C] transition-colors hover:text-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
            >
              LEER ARTÍCULO
              <span className="ml-1" aria-hidden="true">
                {"\u2197\uFE0E"}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Últimas publicaciones del silo. */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-balance font-serif text-h2 tracking-tight text-stone-900">
            Últimas publicaciones
          </h2>

          {/* Grid de artículos reales se mapeará aquí desde articles.ts */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8">
            {latestArticles.map((article) => (
              <article key={article.href} className="group">
                <Link
                  href={article.href}
                  className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
                >
                  <div className="mb-6 overflow-hidden bg-stone-200">
                    <Image
                      src={article.image}
                      alt={article.imageAlt}
                      width={800}
                      height={600}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="font-sans text-eyebrow uppercase text-stone-500">
                      {article.category}
                    </span>
                    <span
                      className="h-px w-4 bg-stone-300"
                      aria-hidden="true"
                    />
                    <span className="font-sans text-caption text-stone-500">
                      {article.date}
                    </span>
                  </div>

                  <h3 className="mb-3 text-balance font-serif text-h3 tracking-tight text-stone-900 transition-colors group-hover:text-stone-600">
                    {article.title}
                  </h3>
                  <p className="mb-6 font-sans text-body-base leading-relaxed text-stone-600">
                    {article.excerpt}
                  </p>
                  <span className="inline-block border-b border-stone-900 pb-1 font-sans text-sm text-stone-900 transition-all group-hover:border-stone-600 group-hover:text-stone-600">
                    Leer artículo <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

