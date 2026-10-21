import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { articles } from "@/content/articles";
import { getSilo } from "@/content/silos";

/**
 * Índice editorial del magazine.
 *
 * Se renderiza dentro del Layout global definido en `src/app/layout.tsx`,
 * que ya aporta el header, el `<main>` y el footer. Por eso este archivo no
 * vuelve a envolver el contenido en otro `<main>`.
 */
export const metadata: Metadata = {
  title: "El diario del baño consciente | Sui Magazine",
  description:
    "Crónicas y guías sobre diseño, sostenibilidad, tecnología y el nuevo ritual de la higiene. El índice editorial de todos los artículos de Sui Magazine.",
  openGraph: {
    title: "El diario del baño consciente | Sui Magazine",
    description:
      "Crónicas sobre diseño, sostenibilidad, tecnología y el nuevo ritual de la higiene.",
    locale: "es_ES",
    type: "website",
  },
};

export default function BlogPage() {
  const featuredArticle = articles[0];
  const remainingArticles = articles.slice(1);

  return (
    <>
      {/* 1. Hero cinematográfico: imagen a sangre y overlay oscuro. */}
      <section className="relative flex h-[60vh] min-h-[400px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bathroom.jpg"
            alt="Interior de baño minimalista"
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
            Artículos y Reflexiones
          </p>
          <h1 className="mb-6 mt-4 text-balance font-serif text-h1 tracking-tight text-white">
            El diario del baño consciente
          </h1>
          <p className="font-sans text-body-lg leading-relaxed text-stone-200">
            Crónicas sobre diseño, sostenibilidad, tecnología y el nuevo ritual
            de la higiene.
          </p>
        </div>
      </section>

      {/* 2. Índice editorial: introducción y artículo principal. */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="mb-16 max-w-3xl">
          <div
            className="mb-6 h-px w-12 bg-[#7A8B7C]"
            aria-hidden="true"
          />
          <p className="font-sans text-eyebrow uppercase text-stone-500">
            Índice editorial
          </p>
          <h2 className="mb-6 mt-4 text-balance font-serif text-h2 tracking-tight text-stone-900">
            Todas las historias
          </h2>
          <p className="font-sans text-body-lg leading-relaxed text-stone-600">
            {articles.length} lecturas para entender el baño como un espacio de
            bienestar, diseño y responsabilidad. Sin ruido, sin promesas
            exageradas.
          </p>
        </div>

        <article className="border-t border-stone-300 pt-12">
          <Link
            href={featuredArticle.href}
            className="group grid grid-cols-1 gap-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900 md:grid-cols-2 md:items-center md:gap-12"
          >
            <div className="overflow-hidden bg-stone-100">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.imageAlt}
                width={800}
                height={600}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div>
              <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="font-sans text-eyebrow uppercase text-stone-500">
                  {getSilo(featuredArticle.silo).label} ·{" "}
                  {featuredArticle.category}
                </span>
                <span
                  className="h-px w-4 bg-stone-300"
                  aria-hidden="true"
                />
                <span className="font-sans text-caption text-stone-500">
                  {featuredArticle.date}
                </span>
              </div>

              <h3 className="mb-4 text-balance font-serif text-h2 tracking-tight text-stone-900 transition-colors duration-300 group-hover:text-stone-600">
                {featuredArticle.title}
              </h3>
              <p className="mb-6 font-sans text-body-lg leading-relaxed text-stone-600">
                {featuredArticle.excerpt}
              </p>
              <span className="inline-block border-b border-stone-900 pb-1 font-sans text-sm text-stone-900 transition-all group-hover:border-stone-600 group-hover:text-stone-600">
                Leer artículo <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        </article>

        {/* 3. Rejilla editorial con el resto del archivo. */}
        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16">
          {remainingArticles.map((article) => (
            <article
              key={article.href}
              className="group border-t border-stone-300 pt-8"
            >
              <Link
                href={article.href}
                className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
              >
                <div className="mb-6 overflow-hidden bg-stone-100">
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
                    {getSilo(article.silo).label} · {article.category}
                  </span>
                  <span
                    className="h-px w-4 bg-stone-300"
                    aria-hidden="true"
                  />
                  <span className="font-sans text-caption text-stone-500">
                    {article.date}
                  </span>
                </div>

                <h3 className="mb-3 text-balance font-serif text-h3 tracking-tight text-stone-900 transition-colors duration-300 group-hover:text-stone-600">
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
      </section>
    </>
  );
}

