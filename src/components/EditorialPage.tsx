import Image from "next/image";
import Link from "next/link";

/** Bloque de contenido de una página institucional. */
export type EditorialSection = {
  /** Título del bloque, renderizado como H2. */
  title: string;
  /** Párrafos que desarrollan la idea. */
  paragraphs: string[];
  /** Lista opcional de puntos concretos. */
  items?: string[];
};

type EditorialPageProps = {
  /** Antetítulo editorial. */
  eyebrow: string;
  /** Único H1 de la página. */
  title: string;
  /** Entradilla que resume el propósito de la página. */
  intro: string;
  /** Imagen opcional de acompañamiento. */
  image?: {
    /** Ruta absoluta desde `public`. */
    src: string;
    /** Texto alternativo descriptivo. */
    alt: string;
  };
  /** Bloques de contenido, en orden de lectura. */
  sections: EditorialSection[];
  /** Llamada a la acción final. */
  cta: {
    /** Título de la llamada. */
    title: string;
    /** Texto breve. */
    description: string;
    /** Etiqueta del enlace. */
    label: string;
    /** Ruta interna de destino. */
    href: string;
  };
};

/**
 * Plantilla común de las páginas institucionales del magazine.
 *
 * Mantiene la jerarquía editorial del resto del sitio —un solo H1, bloques
 * H2 y una llamada a la acción— sin duplicar maquetación en cada ruta.
 */
export default function EditorialPage({
  eyebrow,
  title,
  intro,
  image,
  sections,
  cta,
}: EditorialPageProps) {
  return (
    <>
      <section className="bg-stone-100 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="mx-auto mb-8 h-px w-12 bg-[#7A8B7C]"
            aria-hidden="true"
          />
          <p className="font-sans text-eyebrow uppercase tracking-wider text-stone-500">
            {eyebrow}
          </p>
          <h1 className="mb-6 mt-4 text-balance font-serif text-h1 tracking-tight text-stone-900">
            {title}
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-body-lg leading-relaxed text-stone-600">
            {intro}
          </p>
        </div>
      </section>

      {image && (
        <div className="mx-auto max-w-5xl px-6 pt-16">
          <div className="relative aspect-[21/9] overflow-hidden bg-stone-200">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      )}

      <div className="mx-auto max-w-3xl px-6 py-20">
        {sections.map((section) => (
          <section
            key={section.title}
            className="border-t border-stone-200 py-10 first:border-t-0 first:pt-0"
          >
            <h2 className="mb-5 font-serif text-h3 tracking-tight text-stone-900">
              {section.title}
            </h2>
            <div className="space-y-5 font-sans text-body-base leading-relaxed text-stone-700">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {section.items && section.items.length > 0 && (
              <ul className="mt-6 space-y-3 font-sans text-body-base leading-relaxed text-stone-700">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[#7A8B7C]" aria-hidden="true">
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <section className="bg-stone-100 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-5 text-balance font-serif text-h2 tracking-tight text-stone-900">
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
