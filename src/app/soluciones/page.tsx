import type { Metadata } from "next";
import Link from "next/link";

import CategoryHero from "@/components/CategoryHero";

/**
 * Página de soluciones: traduce la arquitectura de silos a escenarios de
 * personas y viviendas. Se renderiza dentro del Layout global.
 */
export const metadata: Metadata = {
  alternates: {
    canonical: "/soluciones",
  },
  title: "Soluciones por Necesidades | Sui Magazine",
  description:
    "Guía rápida para elegir una solución de higiene según tu situación y tu vivienda: autonomía, dependencia, alquiler, reforma o presupuesto ajustado.",
  openGraph: {
    title: "Soluciones por Necesidades | Sui Magazine",
    description:
      "Una guía rápida para elegir según tu situación y tu vivienda.",
    locale: "es_ES",
    type: "website",
  },
};

type SolutionCardData = {
  /** Título del escenario. */
  title: string;
  /** Explicación breve del caso y de la solución. */
  description: string;
  /** Ruta interna con ancla cuando corresponde. */
  href: string;
  /** Texto visible del enlace. */
  label: string;
};

const situationCards: SolutionCardData[] = [
  {
    title: "Autonomía con apoyo",
    description:
      "Para quien quiere mantener el control de su higiene con una ayuda puntual. Soluciones que reducen esfuerzos sin sustituir decisiones.",
    href: "/bienestar#autonomia",
    label: "Ver soluciones de autonomía",
  },
  {
    title: "Dependencia moderada",
    description:
      "Cuando la movilidad o la fuerza ya no permiten el gesto de siempre, el baño necesita ayudas técnicas, mandos accesibles y una instalación pensada para cuidar.",
    href: "/bienestar#dependencia-moderada",
    label: "Ver soluciones de dependencia",
  },
  {
    title: "Entorno profesional",
    description:
      "Residencias, centros de día y espacios compartidos donde la higiene debe ser cómoda, fácil de mantener y respetuosa con la intimidad.",
    href: "/bienestar#entorno-profesional",
    label: "Ver soluciones profesionales",
  },
];

const homeCards: SolutionCardData[] = [
  {
    title: "Vivienda de alquiler",
    description:
      "Sin obra ni permiso del propietario: una tapa inteligente sobre el inodoro existente, siempre que haya toma de agua y enchufe.",
    href: "/guia#tipos",
    label: "Ver opciones sin obra",
  },
  {
    title: "Reforma integral",
    description:
      "Cuando el baño se proyecta desde cero, el inodoro completo permite integrar la tecnología y ocultar la instalación.",
    href: "/guia#tipos",
    label: "Ver guía de reforma",
  },
  {
    title: "Presupuesto ajustado",
    description:
      "Un punto de partida para priorizar lo esencial: qué aporta más bienestar por euro invertido y qué puede esperar.",
    href: "/articulos/mejores-bides-presupuesto",
    label: "Leer comparativa de presupuesto",
  },
];

/** Tarjeta enlazada reutilizada por las dos rejillas de la página. */
function SolutionCard({
  title,
  description,
  href,
  label,
}: SolutionCardData) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-sm border border-stone-200 bg-white p-8 transition-all duration-300 hover:border-[#7A8B7C] hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
    >
      <h3 className="font-serif text-h3 tracking-tight text-stone-900">
        {title}
      </h3>
      <p className="mt-4 font-sans text-body-base leading-relaxed text-stone-600">
        {description}
      </p>
      <span className="mt-auto block pt-8">
        <span className="inline-block border-b border-stone-900 pb-1 font-sans text-sm text-stone-900 transition group-hover:border-stone-600 group-hover:text-stone-600">
          {label} →
        </span>
      </span>
    </Link>
  );
}

export default function SolucionesPage() {
  return (
    <>
      {/* 1. Hero institucional con el único H1 de la página. */}
      <CategoryHero
        eyebrow="Guía rápida"
        titulo="Soluciones por necesidades"
        descripcion="No todos los baños son iguales ni todas las personas tienen las mismas necesidades."
        imagenSrc="/images/hero-lujo-negro.jpg"
        alt="Baño de lujo con inodoro inteligente, mármol negro y luz cálida indirecta"
      />

      {/* 2. Escenarios según la situación de la persona. */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="font-sans text-eyebrow uppercase tracking-wider text-stone-500">
              01 · Personas
            </p>
            <h2 className="mt-4 text-balance font-serif text-h2 tracking-tight text-stone-900">
              Según tu situación
            </h2>
            <p className="mt-8 font-sans text-body-lg leading-relaxed text-stone-700">
              La misma tecnología no resuelve igual todas las situaciones. Antes
              de elegir un modelo, conviene identificar quién va a usar el baño,
              qué gestos necesita conservar y qué ayudas ya existen en la
              vivienda.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {situationCards.map((card) => (
              <SolutionCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Escenarios según la vivienda y el margen de obra. */}
      <section className="bg-stone-50 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="font-sans text-eyebrow uppercase tracking-wider text-stone-500">
              02 · Vivienda
            </p>
            <h2 className="mt-4 text-balance font-serif text-h2 tracking-tight text-stone-900">
              Según tu vivienda
            </h2>
            <p className="mt-8 font-sans text-body-lg leading-relaxed text-stone-700">
              El tipo de vivienda condiciona la solución tanto como el
              presupuesto. No es lo mismo proyectar un baño nuevo que adaptar
              uno existente sin obra, ni comprar para quedarse que preparar una
              casa en alquiler.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {homeCards.map((card) => (
              <SolutionCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
