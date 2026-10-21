import Image from "next/image";
import Link from "next/link";

import CategoryHero from "@/components/CategoryHero";
import type { Article } from "@/content/articles";
import { getSilo, type SiloId } from "@/content/silos";

type SiloHubProps = {
  /** Silo que se presenta en la página. */
  siloId: SiloId;
  /** Párrafos de apertura, en la voz editorial del magazine. */
  intro: string[];
  /** Lecturas satélite que se muestran al final del hub. */
  articles?: Article[];
  /** Llamada a la acción final hacia el contenido pilar relacionado. */
  cta: {
    /** Antetítulo de la sección. */
    eyebrow: string;
    /** Titular de la llamada a la acción. */
    title: string;
    /** Texto breve que explica el siguiente paso. */
    description: string;
    /** Etiqueta del enlace. */
    label: string;
    /** Ruta interna de destino. */
    href: string;
  };
};

/**
 * Página hub de un silo.
 *
 * Presenta la imagen pilar, los recorridos internos, las lecturas satélite
 * y una llamada a la acción. Se usa en los silos nuevos para que todos
 * compartan la misma jerarquía visual y semántica.
 */
export default function SiloHub({
  siloId,
  intro,
  articles,
  cta,
}: SiloHubProps) {
  const silo = getSilo(siloId);

  return (
    <>
      {/* 1. Hero cinematográfico del silo. */}
      <CategoryHero
        eyebrow={silo.eyebrow}
        titulo={silo.label}
        descripcion={silo.description}
        imagenSrc={silo.image.src}
        alt={silo.image.alt}
      />

      {/* 2. Introducción editorial del silo. */}
      <section className="bg-stone-50 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div
            className="mb-10 h-px w-12 bg-[#7A8B7C]"
            aria-hidden="true"
          />
          <div className="space-y-6 font-sans text-body-lg leading-relaxed text-stone-700">
            {intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Recorridos internos: las subcategorías del silo. */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 max-w-2xl">
            <p className="font-sans text-eyebrow uppercase text-stone-500">
              Recorridos del silo
            </p>
            <h2 className="mt-4 text-balance font-serif text-h2 tracking-tight text-stone-900">
              Por dónde empezar
            </h2>
            <p className="mt-5 font-sans text-body-base leading-relaxed text-stone-600">
              Cada recorrido responde a una intención concreta. Elige el que
              mejor se ajuste a tu momento y sigue los enlaces editoriales.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {silo.subcategories.map((subcategory, index) => (
              <article key={subcategory.href} className="group h-full">
                <Link
                  href={subcategory.href}
                  className="flex h-full flex-col border-t border-stone-300 pt-6 transition-colors hover:border-[#7A8B7C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
                >
                  <span
                    className="font-serif text-3xl text-stone-300 transition-colors group-hover:text-[#7A8B7C]"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-3 mt-2 font-serif text-h3 tracking-tight text-stone-900">
                    {subcategory.label}
                  </h3>
                  <p className="flex-1 font-sans text-body-base leading-relaxed text-stone-600">
                    {subcategory.description}
                  </p>
                  <span className="mt-5 inline-block border-b border-stone-900 pb-1 font-sans text-sm text-stone-900 transition-colors group-hover:border-stone-600 group-hover:text-stone-600">
                    Explorar <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* 4. Lecturas satélite del silo. */}
      {articles && articles.length > 0 && (
        <section className="bg-stone-50 px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-14 flex flex-col gap-4 border-b border-stone-300 pb-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-sans text-eyebrow uppercase text-stone-500">
                  Lecturas del silo
                </p>
                <h2 className="mt-4 text-balance font-serif text-h2 tracking-tight text-stone-900">
                  Para seguir profundizando
                </h2>
              </div>
              <Link
                href="/blog"
                className="inline-block border-b border-stone-300 pb-1 font-sans text-sm text-stone-600 transition hover:border-stone-900 hover:text-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
              >
                Ver todo el diario <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
              {articles.map((article) => (
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
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <p className="font-sans text-eyebrow uppercase text-stone-500">
                      {article.category}
                    </p>
                    <h3 className="mb-3 mt-4 text-balance font-serif text-h3 tracking-tight text-stone-900 transition-colors group-hover:text-stone-600">
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
      )}

      {/* 5. CTA final hacia el contenido pilar relacionado. */}
      <section className="bg-stone-100 px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div
            className="mx-auto mb-8 h-px w-12 bg-[#7A8B7C]"
            aria-hidden="true"
          />
          <p className="font-sans text-eyebrow uppercase text-stone-500">
            {cta.eyebrow}
          </p>
          <h2 className="mb-6 mt-4 text-balance font-serif text-h2 tracking-tight text-stone-900">
            {cta.title}
          </h2>
          <p className="mb-8 font-sans text-body-base leading-relaxed text-stone-600">
            {cta.description}
          </p>
          <Link
            href={cta.href}
            className="inline-block border border-stone-900 px-6 py-3 text-sm font-medium tracking-wide text-stone-900 transition hover:bg-stone-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
          >
            {cta.label}
          </Link>
        </div>
      </section>
    </>
  );
}

