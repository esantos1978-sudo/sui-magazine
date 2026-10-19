import Image from "next/image";
import Link from "next/link";

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
          <p className="mb-6 text-eyebrow uppercase text-white/70">
            El ritual del agua · Nº 01
          </p>
          <h1 className="font-serif text-h1 tracking-tight">
            El nuevo ritual
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-body-lg text-white/85">
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

      {/* C. Los tres formatos: accesorio mecánico, tapa inteligente e inodoro completo. */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="mb-16 text-center md:text-left">
          <span className="text-eyebrow uppercase tracking-wider text-stone-500">
            Elige tu formato
          </span>
          <h2 className="mt-4 text-h3 tracking-tight">
            Hay un modelo para cada necesidad
          </h2>
          <p className="mt-6 max-w-2xl text-body-lg text-stone-600">
            Lo que nadie te cuenta es que no hace falta arrancar tu váter actual
            si no quieres. El mercado se divide en tres grandes categorías, de
            la solución más sencilla a la más completa.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {/* Formato 1: Accesorio Mecánico */}
          <div className="group">
            <div className="mb-6 overflow-hidden bg-stone-100">
              <Image
                src="/images/formatos/accesorio-mecanico.jpg"
                alt="Accesorio mecánico instalado en inodoro"
                width={800}
                height={600}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="mb-3 text-h3 tracking-tight">
              El Accesorio Mecánico
            </h3>
            <p className="mb-6 text-body-base text-stone-600">
              La puerta de entrada más básica. No necesita electricidad, se
              conecta a la toma de agua y funciona con la presión de las
              cañerías.
            </p>
            <Link
              href="/guia"
              className="inline-block border-b border-stone-900 pb-1 font-sans text-sm text-stone-900 transition-all hover:border-stone-600 hover:text-stone-600"
            >
              Descubrir más en la Guía →
            </Link>
          </div>

          {/* Formato 2: Tapa Inteligente */}
          <div className="group">
            <div className="mb-6 overflow-hidden bg-stone-100">
              <Image
                src="/images/formatos/tapa-home.jpg"
                alt="Tapa inteligente o washlet"
                width={800}
                height={600}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="mb-3 text-h3 tracking-tight">
              La Tapa Inteligente
            </h3>
            <p className="mb-6 text-body-base text-stone-600">
              La favorita para quienes no quieren obras. Sustituye tu tapa
              actual y añade agua caliente, secado y asiento calefactado al
              instante.
            </p>
            <Link
              href="/guia"
              className="inline-block border-b border-stone-900 pb-1 font-sans text-sm text-stone-900 transition-all hover:border-stone-600 hover:text-stone-600"
            >
              Descubrir más en la Guía →
            </Link>
          </div>

          {/* Formato 3: Inodoro Completo */}
          <div className="group">
            <div className="mb-6 overflow-hidden bg-stone-100">
              <Image
                src="/images/formatos/inodoro-completo.jpg"
                alt="Inodoro japonés completo suspendido"
                width={800}
                height={600}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="mb-3 text-h3 tracking-tight">
              El Inodoro Completo
            </h3>
            <p className="mb-6 text-body-base text-stone-600">
              La inversión definitiva para reformas. Diseño espectacular, sin
              cables a la vista y con las funciones más avanzadas de
              automatización.
            </p>
            <Link
              href="/guia"
              className="inline-block border-b border-stone-900 pb-1 font-sans text-sm text-stone-900 transition-all hover:border-stone-600 hover:text-stone-600"
            >
              Descubrir más en la Guía →
            </Link>
          </div>
        </div>
      </section>

      {/* D. CTA: enlace a la guía esencial. */}
      <section className="px-6 py-24 text-center md:py-32">
        <Link
          href="/guia"
          className="inline-block border border-stone-900 px-6 py-3 text-sm font-medium tracking-wide text-stone-900 transition hover:bg-stone-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
        >
          Descubre la guía esencial
        </Link>
      </section>

      {/* E. Manifiesto: pull quote de contraste antes de los artículos destacados. */}
      <section className="bg-stone-900 px-6 py-32 md:py-40">
        <div className="mx-auto max-w-4xl text-center">
          {/* Línea decorativa superior */}
          <div className="mx-auto mb-12 h-px w-16 bg-stone-500"></div>

          {/* Frase principal */}
          <blockquote className="mb-8 font-serif text-display leading-[1.04] tracking-tight text-white md:text-[100px]">
            El baño no es un lugar.
            <br />
            Es el único momento del día que es solo tuyo.
          </blockquote>

          {/* Línea decorativa inferior */}
          <div className="mx-auto mt-12 h-px w-16 bg-stone-500"></div>
        </div>
      </section>

      {/* F. Índice: acceso a las secciones principales del magazine. */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        {/* Título de la sección */}
        <div className="mb-16">
          <span className="text-eyebrow uppercase tracking-wider text-stone-500">
            Explora el magazine
          </span>
          <h2 className="mt-4 text-h3 tracking-tight">Nuestras secciones</h2>
        </div>

        {/* Grid de 4 columnas en desktop, 1 en móvil */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
          {/* Sección 1: Guía */}
          <Link
            href="/guia"
            className="group block border-t border-stone-300 pt-6 transition-colors hover:border-stone-900"
          >
            <span className="font-serif text-4xl text-stone-300 transition-colors group-hover:text-stone-900">
              I
            </span>
            <h3 className="mb-2 mt-4 text-h3 tracking-tight">Guía</h3>
            <p className="text-body-base text-stone-600">
              Todo lo que necesitas saber sobre la tecnología, la historia y el
              futuro del baño inteligente.
            </p>
          </Link>

          {/* Sección 2: Bienestar */}
          <Link
            href="/bienestar"
            className="group block border-t border-stone-300 pt-6 transition-colors hover:border-stone-900"
          >
            <span className="font-serif text-4xl text-stone-300 transition-colors group-hover:text-stone-900">
              II
            </span>
            <h3 className="mb-2 mt-4 text-h3 tracking-tight">Bienestar</h3>
            <p className="text-body-base text-stone-600">
              La higiene como acto de dignidad, cuidado y dependencia. Soluciones
              reales para personas y familias.
            </p>
          </Link>

          {/* Sección 3: Ranking */}
          <Link
            href="/seleccion"
            className="group block border-t border-stone-300 pt-6 transition-colors hover:border-stone-900"
          >
            <span className="font-serif text-4xl text-stone-300 transition-colors group-hover:text-stone-900">
              III
            </span>
            <h3 className="mb-2 mt-4 text-h3 tracking-tight">Ranking</h3>
            <p className="text-body-base text-stone-600">
              Análisis honesto, comparativas y precios. Encuentra el modelo
              exacto para tu presupuesto y necesidades.
            </p>
          </Link>

          {/* Sección 4: Diseño */}
          <Link
            href="/articulos/bide-japones-sostenibilidad"
            className="group block border-t border-stone-300 pt-6 transition-colors hover:border-stone-900"
          >
            <span className="font-serif text-4xl text-stone-300 transition-colors group-hover:text-stone-900">
              IV
            </span>
            <h3 className="mb-2 mt-4 text-h3 tracking-tight">Diseño</h3>
            <p className="text-body-base text-stone-600">
              Estética, sostenibilidad y tendencias. Cómo integrar la tecnología
              en baños con alma y estilo.
            </p>
          </Link>
        </div>
      </section>

      {/* G. Destacados: selección editorial de los tres artículos principales. */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="mb-12 border-b border-stone-300 pb-4 text-h3 tracking-tight text-stone-900">
          Destacados
        </h2>

        <article className="border-b border-stone-200 py-12 last:border-b-0">
          <Link
            href="/articulos/bide-japones-sostenibilidad"
            className="group block"
          >
            <div className="flex flex-col items-start gap-8 md:flex-row md:gap-12">
              {/* Imagen a la izquierda */}
              <div className="w-full flex-shrink-0 overflow-hidden md:w-1/3">
                <Image
                  src="/images/articulos/sostenibilidad.jpg"
                  alt="Baño minimalista con inodoro japonés y materiales sostenibles"
                  width={800}
                  height={600}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Contenido a la derecha */}
              <div className="flex-1 pt-2">
                {/* Categoría arriba */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-eyebrow uppercase text-stone-500">
                    Sostenibilidad
                  </span>
                  <span className="font-sans text-xs tracking-wide text-stone-400">
                    Octubre 2026
                  </span>
                </div>

                {/* Título grande */}
                <h3 className="mb-4 text-h2 tracking-tight transition-colors group-hover:text-stone-600">
                  SOSTENIBILIDAD
                </h3>

                {/* Titular descriptivo */}
                <p className="mb-6 text-body-lg leading-relaxed text-stone-700">
                  El baño invisible: tu inodoro es la mayor decisión ecológica
                  de tu hogar. Cada año, una familia media tira a la basura el
                  equivalente a 27 árboles.
                </p>

                {/* Enlace sutil */}
                <span className="inline-block border-b border-stone-900 pb-1 font-sans text-sm text-stone-900 transition-all group-hover:border-stone-600 group-hover:text-stone-600">
                  Leer artículo →
                </span>
              </div>
            </div>
          </Link>
        </article>

        <article className="border-b border-stone-200 py-12 last:border-b-0">
          <Link href="/articulos/tapa-inteligente" className="group block">
            <div className="flex flex-col items-start gap-8 md:flex-row md:gap-12">
              {/* Imagen a la izquierda */}
              <div className="w-full flex-shrink-0 overflow-hidden md:w-1/3">
                <Image
                  src="/images/articulos/tapa-inteligente.jpg"
                  alt="Tapa inteligente de inodoro con calentamiento y control electrónico"
                  width={800}
                  height={600}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Contenido a la derecha */}
              <div className="flex-1 pt-2">
                {/* Categoría arriba */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-eyebrow uppercase text-stone-500">
                    Análisis técnico
                  </span>
                  <span className="font-sans text-xs tracking-wide text-stone-400">
                    Octubre 2026
                  </span>
                </div>

                {/* Título grande */}
                <h3 className="mb-4 text-h2 tracking-tight transition-colors group-hover:text-stone-600">
                  TAPA INTELIGENTE
                </h3>

                {/* Titular descriptivo */}
                <p className="mb-6 text-body-lg leading-relaxed text-stone-700">
                  Transformar tu baño sin obras. La guía definitiva sobre
                  materiales, calentamiento instantáneo y la batalla entre el
                  ABS y el Resix.
                </p>

                {/* Enlace sutil */}
                <span className="inline-block border-b border-stone-900 pb-1 font-sans text-sm text-stone-900 transition-all group-hover:border-stone-600 group-hover:text-stone-600">
                  Leer artículo →
                </span>
              </div>
            </div>
          </Link>
        </article>

        <article className="border-b border-stone-200 py-12 last:border-b-0">
          <Link href="/articulos/guia-instalacion" className="group block">
            <div className="flex flex-col items-start gap-8 md:flex-row md:gap-12">
              {/* Imagen a la izquierda */}
              <div className="w-full flex-shrink-0 overflow-hidden md:w-1/3">
                <Image
                  src="/images/articulos/instalacion.jpg"
                  alt="Instalación de un bidé japonés en un baño doméstico"
                  width={800}
                  height={600}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Contenido a la derecha */}
              <div className="flex-1 pt-2">
                {/* Categoría arriba */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-eyebrow uppercase text-stone-500">
                    Guía práctica
                  </span>
                  <span className="font-sans text-xs tracking-wide text-stone-400">
                    Octubre 2026
                  </span>
                </div>

                {/* Título grande */}
                <h3 className="mb-4 text-h2 tracking-tight transition-colors group-hover:text-stone-600">
                  INSTALACIÓN
                </h3>

                {/* Titular descriptivo */}
                <p className="mb-6 text-body-lg leading-relaxed text-stone-700">
                  Monta tu bidé japonés en 30 minutos. Paso a paso para
                  accesorios mecánicos, asientos inteligentes e inodoros
                  completos.
                </p>

                {/* Enlace sutil */}
                <span className="inline-block border-b border-stone-900 pb-1 font-sans text-sm text-stone-900 transition-all group-hover:border-stone-600 group-hover:text-stone-600">
                  Leer artículo →
                </span>
              </div>
            </div>
          </Link>
        </article>
      </section>
    </>
  );
}
