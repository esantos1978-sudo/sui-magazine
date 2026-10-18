import Image from "next/image";
import Link from "next/link";

import { formats } from "@/content/formats";

export default function Home() {
  return (
    <>
      {/* A. Hero: imagen a sangre con overlay para garantizar legibilidad. */}
      <section className="relative flex h-[80vh] min-h-[520px] items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-bathroom.jpg"
          alt="Interior de un baño minimalista con luz natural y tonos cálidos"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-stone-950/50 via-stone-950/35 to-stone-950/70"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
          <p className="mb-6 text-[0.65rem] uppercase tracking-[0.35em] text-white/70">
            El ritual del agua · Nº 01
          </p>
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
            El nuevo ritual
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-base font-light leading-relaxed text-white/85 md:text-lg">
            Bienestar, diseño y sostenibilidad en un solo gesto.
          </p>
        </div>
      </section>

      {/* B. Introducción: párrafo manifiesto centrado. */}
      <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <span
          className="mx-auto mb-10 block h-px w-12 bg-stone-300"
          aria-hidden="true"
        />
        <p className="text-balance text-center font-serif text-2xl leading-relaxed text-stone-700 md:text-3xl md:leading-[1.45]">
          Existe un punto de no retorno en la experiencia del bienestar: una vez
          que el agua templada reemplaza al papel seco, el baño deja de ser una
          necesidad para convertirse en un ritual.
        </p>
      </section>

      {/* C. Tres formatos: accesorio mecánico, tapa inteligente e inodoro completo. */}
      <section className="border-t border-stone-200/80 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-[0.65rem] uppercase tracking-[0.35em] text-stone-400">
            Formatos
          </p>
          <h2 className="mt-4 text-center font-serif text-3xl leading-tight text-stone-900">
            Tres caminos hacia la higiene inteligente
          </h2>

          <div className="mt-16 grid gap-14 md:mt-20 md:grid-cols-3 md:gap-10">
            {formats.map((format) => (
              <article key={format.title} className="text-center">
                <div
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-stone-200 text-2xl"
                  aria-hidden="true"
                >
                  {format.icon}
                </div>
                <h3 className="mt-8 font-serif text-xl text-stone-900">
                  {format.title}
                </h3>
                <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-stone-600">
                  {format.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* D. CTA: enlace a la guía esencial. */}
      <section className="px-6 py-24 text-center md:py-32">
        <Link
          href="/guia"
          className="inline-block border border-stone-900 px-10 py-4 text-[0.65rem] uppercase tracking-[0.28em] text-stone-900 transition-all duration-300 hover:bg-stone-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
        >
          Descubre la guía esencial
        </Link>
      </section>

      {/* E. Lecturas relacionadas: acceso directo a los artículos. */}
      <section className="mx-auto max-w-4xl border-t border-stone-200 px-6 py-20">
        <h3 className="mb-12 text-center font-serif text-2xl text-stone-900">
          Lecturas relacionadas
        </h3>
        <div className="grid gap-12 md:grid-cols-3">
          <Link href="/articulos/guia-instalacion" className="group block">
            <span className="mb-2 block font-sans text-xs uppercase tracking-wider text-stone-400">
              Guía práctica
            </span>
            <h4 className="mb-3 font-serif text-xl text-stone-900 transition group-hover:text-stone-600">
              Guía de instalación paso a paso
            </h4>
            <p className="font-sans text-sm leading-relaxed text-stone-600">
              Cómo montar tu bidé japonés en 30 minutos, sin estrés y sin
              llamadas al fontanero.
            </p>
          </Link>
          <Link
            href="/articulos/mejores-bides-presupuesto"
            className="group block"
          >
            <span className="mb-2 block font-sans text-xs uppercase tracking-wider text-stone-400">
              Guía de compra
            </span>
            <h4 className="mb-3 font-serif text-xl text-stone-900 transition group-hover:text-stone-600">
              Mejores bidés por presupuesto
            </h4>
            <p className="font-sans text-sm leading-relaxed text-stone-600">
              Te decimos exactamente qué comprar con tu dinero, desde 100€
              hasta el lujo asiático.
            </p>
          </Link>
          <Link
            href="/articulos/bano-espanol-adaptaciones"
            className="group block"
          >
            <span className="mb-2 block font-sans text-xs uppercase tracking-wider text-stone-400">
              Guía práctica
            </span>
            <h4 className="mb-3 font-serif text-xl text-stone-900 transition group-hover:text-stone-600">
              Adaptar el bidé a tu baño español
            </h4>
            <p className="font-sans text-sm leading-relaxed text-stone-600">
              Soluciones reales para la cal, los enchufes y las cisternas
              empotradas.
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}
