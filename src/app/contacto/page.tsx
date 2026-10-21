import type { Metadata } from "next";

import CategoryHero from "@/components/CategoryHero";

/**
 * Página de contacto sin formulario: tres buzones especializados evitan
 * prometer un canal que requeriría backend y ordenan las consultas por tema.
 */
export const metadata: Metadata = {
  title: "Contacto | Sui Magazine",
  description:
    "Consultas editoriales, colaboraciones profesionales y prensa. Elige el canal adecuado para hablar con el equipo de Sui Magazine.",
  openGraph: {
    title: "Contacto | Sui Magazine",
    description:
      "Consultas editoriales, colaboraciones profesionales y prensa: elige el canal adecuado.",
    locale: "es_ES",
    type: "website",
  },
};

type ContactChannel = {
  /** Número editorial visible en la tarjeta. */
  number: string;
  /** Tipo de consulta que atiende el buzón. */
  title: string;
  /** Contexto para elegir el canal correcto. */
  description: string;
  /** Dirección de correo asociada. */
  email: string;
};

const contactChannels: ContactChannel[] = [
  {
    number: "01",
    title: "Consultas editoriales",
    description:
      "Dudas sobre un producto, una instalación, un término técnico o una decisión de diseño. Si la pregunta afecta a lo que has leído, empieza por aquí.",
    email: "editorial@sui-magazine.com",
  },
  {
    number: "02",
    title: "Profesionales y marcas",
    description:
      "Fabricantes, distribuidores, instaladores y estudios que quieran compartir documentación técnica o proponer una colaboración editorial.",
    email: "profesionales@sui-magazine.com",
  },
  {
    number: "03",
    title: "Prensa y medios",
    description:
      "Periodistas y medios que necesiten contexto, datos o una cita sobre el mercado del baño y la higiene contemporánea.",
    email: "prensa@sui-magazine.com",
  },
];

export default function ContactoPage() {
  return (
    <>
      {/* 1. Hero institucional con el único H1 de la página. */}
      <CategoryHero
        eyebrow="Hablemos"
        titulo="Contacto"
        descripcion="Estamos aquí para responder tus preguntas y explorar colaboraciones."
        imagenSrc="/images/guia/shoji-luz.jpg"
        alt="Luz atravesando un panel japonés de madera y papel"
      />

      {/* 2. Tres canales de contacto en tarjetas editoriales. */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="font-sans text-eyebrow uppercase tracking-wider text-stone-500">
              Un canal para cada conversación
            </p>
            <h2 className="mt-4 text-balance font-serif text-h2 tracking-tight text-stone-900">
              Elige el canal adecuado
            </h2>
            <p className="mt-8 font-sans text-body-lg leading-relaxed text-stone-700">
              No tenemos un formulario que prometa respuestas inmediatas.
              Tenemos tres buzones y una redacción que los lee. Cuéntanos lo
              necesario para que podamos ayudarte y te responderemos en un plazo
              orientativo de dos a tres días laborables.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {contactChannels.map((channel) => (
              <article
                key={channel.email}
                className="flex h-full flex-col rounded-sm border border-stone-200 bg-white p-8 transition-all duration-300 hover:border-[#7A8B7C] hover:shadow-sm"
              >
                <p
                  className="font-serif text-lg leading-none text-[#7A8B7C]"
                  aria-hidden="true"
                >
                  {channel.number}
                </p>
                <h3 className="mt-5 font-serif text-xl leading-snug text-stone-900">
                  {channel.title}
                </h3>
                <p className="mt-3 font-sans text-body-base leading-relaxed text-stone-600">
                  {channel.description}
                </p>
                <div className="mt-auto pt-8">
                  <a
                    href={`mailto:${channel.email}`}
                    className="inline-block border-b border-stone-900 pb-1 font-sans text-sm text-stone-900 transition hover:border-stone-600 hover:text-stone-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
                  >
                    {channel.email}
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-12 max-w-3xl border-t border-stone-200 pt-6 font-sans text-caption leading-relaxed text-stone-500">
            No gestionamos garantías, reparaciones, instalaciones ni pedidos.
            Para una incidencia con un modelo concreto, la vía más rápida es el
            servicio de atención al cliente del fabricante o el instalador que
            realizó el montaje.
          </p>
        </div>
      </section>
    </>
  );
}
