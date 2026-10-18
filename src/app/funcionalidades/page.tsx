import type { Metadata } from "next";
import Link from "next/link";

/**
 * La página se renderiza dentro del Layout global definido en
 * `src/app/layout.tsx`. No se vuelve a envolver aquí para no duplicar
 * el header y el footer del magazine.
 */
export const metadata: Metadata = {
  title:
    "Funcionalidades de bidés japoneses: Guía definitiva | Sui Magazine",
  description:
    "Descubre qué funciones marcan la diferencia en un inodoro inteligente: luz UV, asiento calefactado, secado avanzado, zero contact y más.",
  openGraph: {
    title:
      "Funcionalidades de bidés japoneses: Guía definitiva | Sui Magazine",
    description:
      "Descubre qué funciones marcan la diferencia en un inodoro inteligente: luz UV, asiento calefactado, secado avanzado, zero contact y más.",
    locale: "es_ES",
    type: "article",
  },
};

/** Cada una de las ocho funciones técnicas analizadas en la guía. */
type Feature = {
  label: string;
  title: string;
  description: string;
  models: string;
  price: string;
};

/** Fila resumida de la tabla comparativa. */
type SummaryRow = {
  feature: string;
  idealFor: string;
  models: string;
  price: string;
};

/** Pregunta frecuente con su respuesta editorial. */
type Faq = {
  question: string;
  answer: string;
};

/** Las ocho funcionalidades que estructuran la guía técnica. */
const features: Feature[] = [
  {
    label: "Función 01",
    title: "Asiento calefactado",
    description:
      "La resistencia interna calienta el aro. Quien prueba sentarse en invierno jamás vuelve atrás. Relaja la musculatura.",
    models: "Xiaomi Smart Toilet Seat, Nashi Deluxe Pro, eQiik.",
    price: "Desde gama de entrada (aprox. 190 €) en adelante.",
  },
  {
    label: "Función 02",
    title: "Agua caliente ilimitada (Calentamiento instantáneo)",
    description:
      "Calienta el agua al momento mientras fluye, sin depender de un depósito interno que se agota. Imprescindible para familias numerosas.",
    models: "Tokyo Seat LM SC403L, Grohe Sensia Arena.",
    price: "Gama media-alta (desde 300 €).",
  },
  {
    label: "Función 03",
    title: "Secado por aire caliente con tecnología avanzada",
    description:
      "Sustituye al papel emitiendo aire caliente. Los modelos avanzados oscilan o dirigen el flujo (Efecto Coanda, MOVDRY) para acelerar el proceso.",
    models:
      "Roca In-Wash Ona (Efecto Coanda), Nashi Aldara iPlus 5 (MOVDRY), Nashi iAnna (máxima potencia).",
    price: "Gama media-alta.",
  },
  {
    label: "Función 04",
    title: "Esterilización por Luz UV",
    description:
      "Luz ultravioleta que destruye el ADN de bacterias en la boquilla y la taza entre usos. Desinfección de grado médico sin químicos.",
    models: "Vogo VB4000 SE, Roca In-Wash Ona, TOTO Neorest NX2.",
    price: "Gama alta (a partir de 1.000 €).",
  },
  {
    label: "Función 05",
    title: "Apertura y cierre automáticos (Zero Contact)",
    description:
      "Sensores de presencia que levantan la tapa al acercarte y la cierran al marcharte. Higiene total y vital para personas con movilidad reducida.",
    models: "Nashi Aldara iPlus 5, Nashi Compact Pro, eQiik Pro.",
    price: "Gama media a alta.",
  },
  {
    label: "Función 06",
    title: "Descarga ciclónica / Ahorro de agua",
    description:
      "Elimina la cisterna tradicional. Inyecta agua a presión creando un vórtice que barre la taza. Ahorra hasta un 70% de agua (3,8 - 5 litros).",
    models:
      "TOTO Neorest (Dual-Max Cyclone), Grohe Sensia Arena (Triple Vortex), Nashi Aldara iPlus 5.",
    price: "Gama alta (solo inodoros completos, desde 1.300 €).",
  },
  {
    label: "Función 07",
    title: "Función Turbo Wash / Enema",
    description:
      "Chorro concentrado a alta presión diseñado terapéuticamente para estimular y aliviar el estreñimiento crónico.",
    models: "Vogo VB4000 SE (líder en esta función).",
    price: "Gama alta especializada.",
  },
  {
    label: "Función 08",
    title: "Mando a distancia / App móvil",
    description:
      "Evita girarse hacia un panel lateral. Los modelos top permiten controlar ajustes, memorizar perfiles y ver estadísticas de consumo desde el smartphone.",
    models:
      "Roca In-Wash Ona (Roca Connect), Nashi Aldara iPlus 5 (App Android).",
    price: "Gama media-alta (mandos) y alta (Apps).",
  },
];

/** Las ocho filas de la tabla comparativa. */
const summaryRows: SummaryRow[] = [
  {
    feature: "Asiento calefactado",
    idealFor: "Personas frioleras y mayores con mala circulación",
    models: "Todos los eléctricos (Xiaomi, Nashi, eQiik)",
    price: "Entrada (desde 190 €)",
  },
  {
    feature: "Agua caliente ilimitada",
    idealFor: "Familias numerosas y uso consecutivo",
    models: "Tokyo Seat LM SC403L, Grohe Sensia Arena",
    price: "Media-alta (desde 300 €)",
  },
  {
    feature: "Secado avanzado",
    idealFor: "Quien quiere reducir o eliminar el papel",
    models: "Roca In-Wash Ona, Nashi Aldara iPlus 5",
    price: "Media-alta",
  },
  {
    feature: "Esterilización por Luz UV",
    idealFor: "Hogares que priorizan la máxima higiene",
    models: "Vogo VB4000 SE, Roca In-Wash Ona, TOTO Neorest NX2",
    price: "Alta (desde 1.000 €)",
  },
  {
    feature: "Zero Contact",
    idealFor: "Movilidad reducida y experiencia premium",
    models: "Nashi Aldara iPlus 5, Nashi Compact Pro, eQiik Pro",
    price: "Media a alta",
  },
  {
    feature: "Descarga ciclónica",
    idealFor: "Ahorro de agua y alto rendimiento",
    models: "TOTO Neorest, Grohe Sensia Arena, Nashi Aldara iPlus 5",
    price: "Alta (desde 1.300 €)",
  },
  {
    feature: "Turbo Wash / Enema",
    idealFor: "Estreñimiento crónico, con criterio médico",
    models: "Vogo VB4000 SE",
    price: "Alta especializada",
  },
  {
    feature: "Mando a distancia / App",
    idealFor: "Movilidad limitada y control personalizado",
    models: "Roca In-Wash Ona, Nashi Aldara iPlus 5",
    price: "Media-alta / alta",
  },
];

/** Dudas habituales que completa la guía técnica. */
const faqs: Faq[] = [
  {
    question: "¿Qué función es imprescindible y cuál es prescindible?",
    answer:
      "La imprescindible es la regulación de temperatura y presión del agua, junto con el asiento calefactado. Funciones como la app móvil o la música ambiental son lujo, pero no cambian la eficacia del lavado.",
  },
  {
    question: "¿La luz UV realmente desinfecta?",
    answer:
      "Sí, es una tecnología científicamente probada que destruye bacterias y virus sin necesidad de productos químicos abrasivos.",
  },
  {
    question: "¿El secado sustituye completamente al papel?",
    answer:
      "Sí, aunque requiere su tiempo (1 a 3 minutos). Muchos usuarios se dan un leve toque con papel y dejan que el aire complete el trabajo. Modelos con secado avanzado agilizan este proceso.",
  },
  {
    question: "¿Merece la pena pagar más por la apertura automática?",
    answer:
      "Si tienes presupuesto, sí. Convierte la visita al baño en una experiencia de hotel de cinco estrellas y es altamente recomendable para personas con movilidad reducida o mujeres embarazadas.",
  },
  {
    question: "¿Los modelos básicos también tienen autolimpieza?",
    answer:
      "Sí, la autolimpieza de la boquilla con agua a presión antes y después de cada uso es un estándar de seguridad en toda la industria.",
  },
];

export default function FuncionalidadesPage() {
  return (
    <>
      {/* 1. Hero de sección. */}
      <section className="flex h-[50vh] min-h-[380px] items-center justify-center bg-stone-100 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-sans text-sm uppercase tracking-wider text-stone-500">
            Guía técnica · Sui Magazine
          </p>
          <h1 className="mb-4 text-balance font-serif text-4xl leading-tight tracking-tight text-stone-900 md:text-5xl">
            La Guía Definitiva por Funcionalidades
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-lg leading-relaxed text-stone-600">
            Afinar el tiro. Descubre qué características marcan la diferencia
            entre una buena compra y la compra perfecta para tu estilo de vida.
          </p>
        </div>
      </section>

      {/* 2. Introducción breve. */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="font-serif text-xl leading-relaxed text-stone-700">
          Ya conoces las diferencias entre una tapa adaptable y un inodoro
          completo. Ahora llega el momento de la verdad: las especificaciones
          técnicas. ¿Valoras la higiene extrema por encima de todo? ¿O quizás
          buscas que el inodoro haga todo el trabajo por ti sin que tengas que
          tocar nada? Desglosamos las 8 características más demandadas del
          mercado.
        </p>
      </section>

      {/* 3. Las ocho funcionalidades clave. */}
      {features.map((feature, index) => (
        <section
          key={feature.label}
          className={`mx-auto max-w-3xl px-6 py-16${
            index > 0 ? " border-t border-stone-200 pt-16" : ""
          }`}
        >
          <p className="mb-4 font-sans text-xs uppercase tracking-widest text-stone-400">
            {feature.label}
          </p>
          <h2 className="mb-6 text-balance font-serif text-3xl leading-tight text-stone-900">
            {feature.title}
          </h2>
          <p className="mb-6 font-sans leading-relaxed text-stone-700">
            {feature.description}
          </p>
          <p className="mb-4 font-sans text-stone-800">
            <strong className="font-semibold">Mejores modelos:</strong>{" "}
            {feature.models}
          </p>
          <p className="font-sans text-sm italic text-stone-500">
            Nivel de precio: {feature.price}
          </p>
        </section>
      ))}

      {/* 4. Tabla resumen comparativa. */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="mb-12 text-center text-balance font-serif text-3xl leading-tight text-stone-900">
          Resumen rápido por funcionalidades
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] border-collapse">
            <caption className="sr-only">
              Comparativa de funcionalidades, usuarios ideales, modelos
              destacados y nivel de precio
            </caption>
            <thead>
              <tr>
                <th
                  scope="col"
                  className="border-b-2 border-stone-800 py-4 pr-6 text-left font-serif text-stone-900"
                >
                  Función Clave
                </th>
                <th
                  scope="col"
                  className="border-b-2 border-stone-800 py-4 pr-6 text-left font-serif text-stone-900"
                >
                  Ideal para...
                </th>
                <th
                  scope="col"
                  className="border-b-2 border-stone-800 py-4 pr-6 text-left font-serif text-stone-900"
                >
                  Modelos Destacados
                </th>
                <th
                  scope="col"
                  className="border-b-2 border-stone-800 py-4 text-left font-serif text-stone-900"
                >
                  Nivel de Precio
                </th>
              </tr>
            </thead>
            <tbody>
              {summaryRows.map((row) => (
                <tr key={row.feature}>
                  <th
                    scope="row"
                    className="border-b border-stone-200 py-4 pr-6 text-left align-top font-sans text-sm font-medium text-stone-700"
                  >
                    {row.feature}
                  </th>
                  <td className="border-b border-stone-200 py-4 pr-6 align-top font-sans text-sm text-stone-700">
                    {row.idealFor}
                  </td>
                  <td className="border-b border-stone-200 py-4 pr-6 align-top font-sans text-sm text-stone-700">
                    {row.models}
                  </td>
                  <td className="border-b border-stone-200 py-4 align-top font-sans text-sm text-stone-700">
                    {row.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. Preguntas frecuentes. */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="mb-8 font-serif text-3xl leading-tight text-stone-900">
          Dudas habituales sobre funcionalidades
        </h2>

        <dl className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="border-t border-stone-200 pt-6 first:border-t-0 first:pt-0"
            >
              <dt className="font-sans font-semibold leading-snug text-stone-900">
                {faq.question}
              </dt>
              <dd className="mt-3 font-sans leading-relaxed text-stone-700">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 6. CTA de cierre: enlace al ranking completo. */}
      <section className="bg-stone-100 px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-balance font-serif text-2xl leading-tight text-stone-900">
            ¿Ya sabes qué funciones son innegociables para ti?
          </h2>
          <p className="mb-8 font-sans leading-relaxed text-stone-600">
            Cruza estos datos con tu presupuesto y descubre qué modelo exacto
            encaja en tu baño.
          </p>
          <Link
            href="/seleccion"
            className="inline-block border border-stone-900 px-10 py-4 text-[0.65rem] uppercase tracking-[0.28em] text-stone-900 transition-all duration-300 hover:bg-stone-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
          >
            Ver el Ranking 2026
          </Link>
        </div>
      </section>


    </>
  );
}

