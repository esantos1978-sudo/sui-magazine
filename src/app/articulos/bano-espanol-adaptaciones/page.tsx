import type { Metadata } from "next";
import Link from "next/link";

import ArticleJsonLd from "@/components/ArticleJsonLd";
import { getArticleByHref } from "@/content/articles";

const article = getArticleByHref("/articulos/bano-espanol-adaptaciones");

/**
 * El artículo se renderiza dentro del Layout global definido en
 * `src/app/layout.tsx`. No se vuelve a envolver aquí para no duplicar
 * el header y el footer del magazine.
 */
export const metadata: Metadata = {
  alternates: {
    canonical: "/articulos/bano-espanol-adaptaciones",
  },
  title:
    "Adaptar bidé japonés a baño español: cal, enchufes y obras | Sui Magazine",
  description:
    "Guía real para instalar tu bidé japonés en España. Soluciones para la cal, baños sin enchufe, cisternas empotradas y normativa eléctrica.",
};

/** Diferencia entre las instalaciones japonesas y las españolas. */
type Difference = {
  label: string;
  text: string;
};

/** Solución práctica para un baño sin toma eléctrica cerca del inodoro. */
type Solution = {
  title: string;
  text: string;
};

/** Medida de protección frente a la cal y los minerales del agua. */
type LimescaleFix = {
  title: string;
  text: string;
};

/** Los cuatro puntos que más condicionan una instalación en España. */
const differences: Difference[] = [
  {
    label: "El voltaje",
    text: "En Japón usan 100 V y en España 220 V. Cuidado si importas por tu cuenta; las marcas oficiales en España ya vienen adaptadas.",
  },
  {
    label: "El tamaño de nuestros baños",
    text: "Cada vez más pequeños. El inodoro inteligente es una bendición porque elimina el bidé tradicional y gana espacio vital.",
  },
  {
    label: "La ausencia de enchufes",
    text: "En Japón es obligatorio poner un enchufe junto al váter. En España, tradicionalmente, solo hay uno junto al espejo.",
  },
  {
    label: "La presión del agua",
    text: "Muy irregular en pisos altos o edificios antiguos. Existen modelos diseñados específicamente para funcionar con baja presión.",
  },
];

/** Alternativas reales cuando no existe una toma eléctrica junto al váter. */
const solutions: Solution[] = [
  {
    title: "La opción “cero electricidad”",
    text: "Elige un bidé mecánico. Funciona solo con la presión del agua. Sacrificarás el agua caliente, pero te ahorras el enchufe.",
  },
  {
    title: "Sacar un punto desde el lavabo",
    text: "Un electricista puede llevar un cable desde el enchufe del espejo hasta el inodoro, ocultándolo por el rodapié o con una pequeña roza en la pared.",
  },
  {
    title: "Tirar una línea desde la caja de registro",
    text: "Un profesional puede bajar un cable desde la caja de derivación del techo directamente hasta el suelo.",
  },
  {
    title: "Aprovechar el falso techo",
    text: "Si tienes techo de escayola o pladur, es facilísimo bajar un cable por el interior de la pared sin tocar los azulejos.",
  },
];

/** Tres defensas sencillas contra la incrustación de cal. */
const limescaleFixes: LimescaleFix[] = [
  {
    title: "Filtros de sedimentos",
    text: "Intercalar un pequeño filtro entre la llave de paso y el inodoro. Cuestan muy poco y salvan la vida de la maquinaria.",
  },
  {
    title: "Materiales resistentes",
    text: "Busca modelos con boquillas de acero inoxidable o titanio bacteriostático, que resisten mucho mejor la incrustación de minerales.",
  },
  {
    title: "Programas de autolimpieza",
    text: "Las gamas altas incluyen funciones automáticas de descalcificación para mantener los conductos impecables.",
  },
];

export default function BanoEspanolAdaptacionesPage() {
  return (
    <>
      <ArticleJsonLd article={article} />
      {/* 1. Hero del artículo: mismo encuadre editorial que las otras guías. */}
      <section className="flex h-[40vh] min-h-[340px] items-center justify-center bg-stone-100 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-eyebrow uppercase text-stone-500">
            Guía práctica · Sui Magazine
          </p>
          <h1 className="mb-4 text-balance font-serif text-h1 tracking-tight text-stone-900">
            Adaptando el bidé a tu baño español
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-body-lg text-stone-600">
            Trucos, soluciones y casos reales. Tu baño tiene 20 años, pero la
            tecnología sí encaja aquí.
          </p>
        </div>
      </section>

      {/* 2. Introducción: el vértigo inicial y la respuesta tranquilizadora. */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="font-serif text-body-lg text-stone-700">
          Cada país tiene sus propias costumbres... y sus propios baños. Un
          cuarto de baño en Tokio no tiene nada que ver con el de un piso en
          Madrid o una casa de pueblo en Andalucía. Es normal que mires tu baño
          y pienses: “Vale, esto es tecnología punta, pero ¿de verdad va a
          encajar aquí?”. Respira hondo. La respuesta es sí. Todo tiene
          solución.
        </p>
      </section>

      {/* 3. Las cuatro diferencias que condicionan la instalación. */}
      <section className="mx-auto max-w-3xl px-6 py-10">
        <h2 className="mb-8 text-balance font-serif text-h2 tracking-tight text-stone-900">
          Diferencias clave con las instalaciones de otros países
        </h2>

        <ul className="space-y-5">
          {differences.map((difference) => (
            <li
              key={difference.label}
              className="flex gap-4 border-t border-stone-200 pt-5 first:border-t-0 first:pt-0"
            >
              <span
                className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-stone-400"
                aria-hidden="true"
              />
              <p className="font-sans leading-relaxed text-stone-700">
                <strong className="font-semibold text-stone-900">
                  {difference.label}:
                </strong>{" "}
                {difference.text}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* 4. Soluciones para baños sin toma eléctrica. */}
      <section className="bg-stone-100 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-balance font-serif text-h2 tracking-tight text-stone-900">
            ¿Qué hago si no tengo enchufe cerca?
          </h2>
          <p className="mb-8 font-sans text-body-lg text-stone-700">
            Es el miedo número uno. Pero no tienes que renunciar. Aquí tienes 4
            soluciones reales:
          </p>

          <ol className="space-y-8">
            {solutions.map((solution, index) => (
              <li
                key={solution.title}
                className="flex gap-5 border-t border-stone-200 pt-8 first:border-t-0 first:pt-0"
              >
                <span
                  className="flex-none font-serif text-lg leading-none text-stone-400"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-xl leading-snug text-stone-900">
                    {solution.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-stone-600">
                    {solution.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. La cal: el enemigo silencioso del agua española. */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="mb-8 text-balance font-serif text-h2 tracking-tight text-stone-900">
          El gran enemigo en España: El agua dura (la cal)
        </h2>
        <p className="mb-8 font-sans text-body-lg text-stone-700">
          Si vives en Levante, Andalucía o las islas, el agua viene cargada de
          cal. Puede obstruir los mecanismos a largo plazo, pero la industria ya
          tiene la solución:
        </p>

        <div>
          {limescaleFixes.map((fix) => (
            <div
              key={fix.title}
              className="mb-4 bg-white p-6 shadow-sm last:mb-0"
            >
              <h3 className="font-serif text-h3 text-stone-900">
                {fix.title}
              </h3>
              <p className="mt-2 font-sans text-body-base text-stone-600">
                {fix.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Cisternas empotradas y seguridad eléctrica. */}
      <section className="mx-auto max-w-3xl px-6 py-10">
        <h2 className="mb-8 text-balance font-serif text-h2 tracking-tight text-stone-900">
          Cisternas empotradas y normativa eléctrica
        </h2>
        <p className="mb-6 font-sans leading-relaxed text-stone-700">
          En las reformas modernas, la cisterna va oculta en la pared. Si
          instalas una tapa, el fontanero puede derivar una pequeña toma de agua
          desde el interior del bastidor. Si vas a reformar, lo ideal es comprar
          un inodoro japonés suspendido completo, donde todas las conexiones
          quedan ocultas.
        </p>
        <p className="font-sans leading-relaxed text-stone-700">
          Sobre la electricidad: los inodoros modernos son aparatos
          completamente sellados y seguros. Solo asegúrate de que el enchufe
          tenga toma de tierra y que tu baño esté protegido por un interruptor
          diferencial. Confía en un profesional para sacar ese punto de luz y
          dormirás tranquilo.
        </p>
      </section>

      {/* 7. CTA de cierre: guía esencial o comparativa por presupuesto. */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-balance font-serif text-h2 tracking-tight text-stone-900">
            ¿Tu baño está listo para el cambio?
          </h2>
          <p className="mb-8 font-sans leading-relaxed text-stone-600">
            Si ya has resuelto las dudas técnicas, descubre qué modelo encaja
            con tu presupuesto o explora nuestra guía esencial.
          </p>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link
              href="/guia"
              className="inline-block border border-stone-900 px-6 py-3 text-sm font-medium tracking-wide text-stone-900 transition hover:bg-stone-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
            >
              Volver a la Guía
            </Link>
            <Link
              href="/articulos/mejores-bides-presupuesto"
              className="inline-block border-b border-stone-300 pb-1 font-sans text-sm text-stone-600 transition hover:border-stone-900 hover:text-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
            >
              Ver por presupuesto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

