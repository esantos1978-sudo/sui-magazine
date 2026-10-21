import type { Metadata } from "next";

import CategoryHero from "@/components/CategoryHero";

/**
 * Metodología editorial: hace explícitos los criterios de evaluación, la
 * independencia y los conflictos de interés del magazine.
 */
export const metadata: Metadata = {
  alternates: {
    canonical: "/metodologia",
  },
  title: "Metodología Editorial | Sui Magazine",
  description:
    "El proceso independiente y transparente con el que seleccionamos, probamos y actualizamos los contenidos de Sui Magazine.",
  openGraph: {
    title: "Metodología Editorial | Sui Magazine",
    description:
      "Cómo trabajamos para ofrecer información rigurosa e independiente sobre el baño y la higiene contemporánea.",
    locale: "es_ES",
    type: "website",
  },
};

/** Párrafos que explican el modelo de independencia editorial. */
const independenceParagraphs = [
  "La independencia no es una declaración de intenciones: es una condición de trabajo. Ninguna marca paga por aparecer en nuestras páginas. No aceptamos patrocinios, no cobramos comisiones por ventas y no vendemos posiciones en una comparativa.",
  "La única fuente de ingresos editorial es la suscripción de los lectores. Ese modelo nos permite mantener la distancia necesaria frente a fabricantes y distribuidores, y nos obliga a justificar cada recomendación con pruebas y documentación.",
  "Cuando una marca nos facilita material o información, lo hacemos constar. La transparencia no consiste en evitar el contacto con la industria, sino en que el lector sepa qué hay detrás de cada texto.",
];

type AnalysisStep = {
  /** Número visible del paso, con dos dígitos. */
  number: string;
  /** Nombre del criterio de análisis. */
  title: string;
  /** Explicación concreta de cómo se aplica. */
  description: string;
};

const analysisSteps: AnalysisStep[] = [
  {
    number: "01",
    title: "Pruebas reales",
    description:
      "Instalamos y convivimos con el producto un mínimo de 30 días en condiciones reales. No valoramos una experiencia de una tarde ni tomamos como propia la demostración de un fabricante.",
  },
  {
    number: "02",
    title: "Mediciones objetivas",
    description:
      "Registramos consumo de agua y electricidad, ruido, tiempos de secado, facilidad de instalación y comportamiento de los materiales. Lo que no podemos medir se presenta como observación, nunca como dato.",
  },
  {
    number: "03",
    title: "Comparativas ciegas",
    description:
      "En la primera ronda de evaluación ocultamos la marca y el precio. Así evitamos que la reputación comercial de un fabricante condicione lo que vemos antes de tener argumentos.",
  },
  {
    number: "04",
    title: "Actualización continua",
    description:
      "Revisamos cada recomendación cada seis meses o antes si cambia la normativa, el producto o el servicio técnico. La fecha de revisión queda visible en las piezas que se actualizan.",
  },
];

/** Párrafos sobre relaciones personales y profesionales con marcas. */
const conflictParagraphs = [
  "Las relaciones personales o profesionales con una marca no son un delito, pero sí una circunstancia que el lector tiene derecho a conocer. Si alguien del equipo ha trabajado para un fabricante, mantiene una relación de consultoría o recibe material de una empresa, se declara en la pieza correspondiente.",
  "Esa declaración no invalida automáticamente el análisis, pero permite leerlo con contexto. Si el conflicto es incompatible con la independencia de una comparativa, esa persona no participa en ella.",
];

export default function MetodologiaPage() {
  return (
    <>
      {/* 1. Hero institucional con el único H1 de la página. */}
      <CategoryHero
        eyebrow="Transparencia"
        titulo="Nuestra metodología"
        descripcion="Cómo trabajamos para ofrecerte información rigurosa e independiente."
        imagenSrc="/images/guia/bano_tradicional.jpg"
        alt="Baño japonés tradicional con ofuro de madera y luz natural"
      />

      {/* 2. Independencia editorial. */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="font-sans text-eyebrow uppercase tracking-wider text-stone-500">
            01 · Independencia
          </p>
          <h2 className="mt-4 text-balance font-serif text-h2 tracking-tight text-stone-900">
            Independencia editorial
          </h2>
          <div className="mt-8 space-y-6 font-sans text-body-lg leading-relaxed text-stone-700">
            {independenceParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Proceso de análisis numerado. */}
      <section className="bg-stone-50 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="font-sans text-eyebrow uppercase tracking-wider text-stone-500">
              02 · El método
            </p>
            <h2 className="mt-4 text-balance font-serif text-h2 tracking-tight text-stone-900">
              Proceso de análisis
            </h2>
            <p className="mt-8 font-sans text-body-lg leading-relaxed text-stone-700">
              Cada producto recorre el mismo camino antes de aparecer en una
              guía o una comparativa. Si un paso no se puede completar, la pieza
              lo explica y ajusta el alcance de su recomendación.
            </p>
          </div>

          <ol className="mt-12 max-w-3xl space-y-8">
            {analysisSteps.map((step) => (
              <li
                key={step.number}
                className="flex gap-5 border-t border-stone-200 pt-6 first:border-t-0 first:pt-0"
              >
                <span
                  className="mt-1 shrink-0 font-serif text-lg leading-none text-[#7A8B7C]"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <div>
                  <h3 className="font-serif text-xl leading-snug text-stone-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-sans text-body-base leading-relaxed text-stone-600">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. Conflictos de interés y pull quote de cierre. */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="font-sans text-eyebrow uppercase tracking-wider text-stone-500">
            03 · Relaciones declaradas
          </p>
          <h2 className="mt-4 text-balance font-serif text-h2 tracking-tight text-stone-900">
            Conflicto de intereses
          </h2>
          <div className="mt-8 space-y-6 font-sans text-body-lg leading-relaxed text-stone-700">
            {conflictParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <blockquote className="mt-14 border-t border-stone-200 pt-10">
            <div className="h-px w-12 bg-[#7A8B7C]" aria-hidden="true" />
            <p className="mt-8 text-balance font-serif text-3xl italic leading-tight text-stone-800 md:text-4xl">
              “Si no podemos probarlo, no lo recomendamos.”
            </p>
            <div className="mt-8 h-px w-12 bg-[#7A8B7C]" aria-hidden="true" />
          </blockquote>
        </div>
      </section>
    </>
  );
}
