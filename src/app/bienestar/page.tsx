import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import SiloSubnav from "@/components/SiloSubnav";

/**
 * Página unificada de Bienestar.
 *
 * Se renderiza dentro del Layout global definido en `src/app/layout.tsx`,
 * que ya aporta el header, el `<main>` y el footer. Por eso este archivo no
 * vuelve a envolver el contenido en otro `<main>`.
 */
export const metadata: Metadata = {
  alternates: {
    canonical: "/bienestar",
  },
  title: "Bienestar y Dignidad en el Baño | Sui Magazine",
  description:
    "La higiene inteligente como acto de cuidado y autonomía. Guía para elegir la solución adecuada según las necesidades de movilidad y dependencia.",
  openGraph: {
    title: "Bienestar y Dignidad en el Baño | Sui Magazine",
    description:
      "La higiene inteligente como acto de cuidado y autonomía.",
    locale: "es_ES",
    type: "article",
  },
};

/** Perfil de cuidado y recomendación editorial asociada. */
type CareProfile = {
  /** Ancla estable para enlazar directamente a un perfil. */
  id: string;
  /** Número editorial que ordena los perfiles en la página. */
  numero: string;
  /** Título breve y reconocible del perfil. */
  titulo: string;
  /** Circunstancia cotidiana que define la necesidad. */
  situacion: string;
  /** Solución técnica recomendada por criterio editorial. */
  solucion: string;
  /** Motivo humano y práctico por el que la solución funciona. */
  porQue: string;
};

/** Los tres perfiles de cuidado que estructuran la página. */
const perfiles: CareProfile[] = [
  {
    id: "autonomia",
    numero: "01",
    titulo: "Autonomía con apoyo",
    situacion:
      "Movilidad reducida, pero se vale por sí mismo en casa.",
    solucion:
      "Tapa inteligente (washlet) con mando de botones grandes o control remoto.",
    porQue:
      "Elimina la torsión y el esfuerzo del papel, devolviendo la independencia en la higiene íntima sin necesidad de obras.",
  },
  {
    id: "dependencia-moderada",
    numero: "02",
    titulo: "Dependencia moderada",
    situacion:
      "Necesita ayuda puntual de un cuidador o familiar para sentarse o levantarse.",
    solucion:
      "Inodoro completo con función de elevación de asiento o altura ajustable.",
    porQue:
      "Reduce el riesgo de caídas y protege la espalda del cuidador, facilitando las transferencias de manera segura y digna.",
  },
  {
    id: "entorno-profesional",
    numero: "03",
    titulo: "Entorno profesional o residencial",
    situacion:
      "Baños en residencias de mayores, hospitales o centros de día.",
    solucion:
      "Modelos robustos con materiales antibacterianos, descarga automática y fácil desinfección.",
    porQue:
      "Prioriza la higiene cruzada, la durabilidad ante uso intensivo y la reducción de la carga de trabajo del personal.",
  },
];

export default function BienestarPage() {
  return (
    <>
      {/* 1. Hero de sección: presenta el enfoque humano de la página. */}
      <section className="flex min-h-[380px] items-center justify-center bg-stone-100 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="mx-auto mb-8 h-px w-12 bg-[#7A8B7C]"
            aria-hidden="true"
          />
          <p className="font-sans text-eyebrow uppercase text-stone-500">
            Bienestar
          </p>
          <h1 className="mb-6 mt-4 text-balance font-serif text-h1 tracking-tight text-stone-900">
            El baño como acto de cuidado, no de dependencia.
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-body-lg text-stone-600">
            La tecnología no debe sustituir el calor humano, sino eliminar las
            barreras físicas que lo dificultan. Hablamos de dignidad, autonomía
            y soluciones reales.
          </p>
        </div>
      </section>

      <SiloSubnav siloId="bienestar" />

      {/* 2. Narrativa: la dignidad como punto de partida. */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex items-center gap-4">
            <span
              className="font-serif text-4xl text-[#7A8B7C]"
              aria-hidden="true"
            >
              01
            </span>
            <h2 className="text-balance font-serif text-h2 tracking-tight text-stone-900">
              La dignidad en los detalles
            </h2>
          </div>

          <div className="space-y-6 font-sans text-body-base text-stone-700">
            <p>
              Envejecer o enfrentar una limitación de movilidad no debería
              significar perder la privacidad en uno de los momentos más
              íntimos del día. El baño tradicional, con su dependencia del papel
              y las posturas forzadas, se convierte a menudo en un obstáculo
              silencioso.
            </p>
            <p>
              El bidé japonés o washlet no es un lujo caprichoso. Es una
              herramienta de autonomía. El chorro de agua templada sustituye al
              roce seco, el asiento calefactado evita el choque térmico y el
              secado suave elimina la necesidad de manipulaciones incómodas. Es,
              en esencia, devolverle a la persona el control sobre su propio
              cuerpo.
            </p>
          </div>

          <div className="relative mt-12 h-[320px] w-full overflow-hidden rounded-sm md:h-[420px]">
            <Image
              src="/images/guia/bano_tradicional.jpg"
              alt="Baño japonés tradicional con ofuro de madera y luz natural"
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. Pull quote: sintetiza el enfoque editorial. */}
      <section className="bg-stone-50 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="mx-auto mb-8 h-px w-12 bg-[#7A8B7C]"
            aria-hidden="true"
          />
          <blockquote className="mb-8 text-balance font-serif text-3xl italic leading-tight text-stone-800 md:text-4xl">
            “La verdadera tecnología no se nota. Solo se nota la dignidad que
            devuelve.”
          </blockquote>
          <div
            className="mx-auto h-px w-12 bg-[#7A8B7C]"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* 4. Perfiles prácticos: de la necesidad a la solución concreta. */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex items-center gap-4">
            <span
              className="font-serif text-4xl text-[#7A8B7C]"
              aria-hidden="true"
            >
              02
            </span>
            <h2 className="text-balance font-serif text-h2 tracking-tight text-stone-900">
              Encuentra la solución ideal
            </h2>
          </div>

          <p className="mb-12 max-w-3xl font-sans text-body-lg text-stone-600">
            No existe un único producto para todos. La clave está en observar
            las necesidades reales del día a día. Aquí tienes tres perfiles
            comunes y la solución que mejor se adapta a ellos.
          </p>

          <ol className="space-y-8">
            {perfiles.map((perfil) => (
              <li
                key={perfil.id}
                id={perfil.id}
                className="flex scroll-mt-24 flex-col gap-6 border-t border-stone-200 pt-8 first:border-t-0 first:pt-0 md:flex-row md:gap-10"
              >
                <div className="flex-shrink-0 md:w-1/4">
                  <span
                    className="font-serif text-5xl text-stone-200"
                    aria-hidden="true"
                  >
                    {perfil.numero}
                  </span>
                  <h3 className="mt-2 font-serif text-h3 tracking-tight text-stone-900">
                    {perfil.titulo}
                  </h3>
                </div>

                <dl className="space-y-4 md:w-3/4">
                  <div>
                    <dt className="font-sans text-eyebrow uppercase text-stone-500">
                      La situación
                    </dt>
                    <dd className="mt-1 font-sans text-body-base font-medium text-stone-800">
                      {perfil.situacion}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-sans text-eyebrow uppercase text-stone-500">
                      La solución recomendada
                    </dt>
                    <dd className="mt-1 font-sans text-body-base font-medium text-stone-900">
                      {perfil.solucion}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-sans text-eyebrow uppercase text-stone-500">
                      Por qué funciona
                    </dt>
                    <dd className="mt-1 font-sans text-body-base text-stone-700">
                      {perfil.porQue}
                    </dd>
                  </div>
                </dl>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. CTA final: orientación para reformas y entornos profesionales. */}
      <section className="bg-stone-50 px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-balance font-serif text-h2 tracking-tight text-stone-900">
            ¿Necesitas orientación profesional?
          </h2>
          <p className="mb-8 font-sans text-body-base text-stone-600">
            Si estás reformando un baño para una persona mayor o adaptando un
            espacio en una residencia, es fundamental evaluar las medidas, las
            tomas de agua y la electricidad.
          </p>
          <Link
            href="/profesionales"
            className="inline-block border border-stone-900 px-6 py-3 text-sm font-medium tracking-wide text-stone-900 transition hover:bg-stone-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
          >
            Hablar con un especialista{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
