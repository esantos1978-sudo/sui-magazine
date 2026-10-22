import type { Metadata } from "next";
import Link from "next/link";

/**
 * Sub-página editorial del silo Tecnología dedicada a la innovación.
 *
 * Se renderiza dentro del Layout global definido en `src/app/layout.tsx`,
 * que ya aporta el header, el `<main>` y el footer. Por eso este archivo no
 * vuelve a envolver el contenido en otro `<main>`.
 */
export const metadata: Metadata = {
  alternates: {
    canonical: "/tecnologia/innovacion",
  },
  title: "Innovación | Del washlet al baño inteligente | SUI Magazine",
  description:
    "De los primeros sistemas de lavado electrónico a los inodoros inteligentes contemporáneos, la evolución de la tecnología japonesa en el baño.",
  openGraph: {
    title: "Innovación | Del washlet al baño inteligente | SUI Magazine",
    description:
      "De los primeros sistemas de lavado electrónico a los inodoros inteligentes contemporáneos, la evolución de la tecnología japonesa en el baño.",
    locale: "es_ES",
    type: "article",
  },
};

export default function InnovacionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO EDITORIAL */}
      <section className="bg-stone-50 px-6 py-20 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[#7A8B7C]">
            Tecnología / Innovación
          </p>
          <h1 className="font-serif text-3xl md:text-5xl tracking-tight text-stone-900 text-balance mb-6">
            Del washlet al baño inteligente: la evolución de una revolución
            silenciosa
          </h1>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed italic text-balance">
            De los primeros sistemas de lavado electrónico a los inodoros
            inteligentes contemporáneos, la tecnología japonesa ha transformado
            uno de los objetos más cotidianos del hogar.
          </p>
        </div>
      </section>

      {/* CUERPO EDITORIAL */}
      <article className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-12">
          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Una nueva forma de entender la higiene
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Durante décadas, el inodoro permaneció prácticamente inalterado.
              Su función era sencilla y su diseño respondía principalmente a
              criterios de utilidad. Sin embargo, en Japón comenzó a
              desarrollarse una visión diferente: ¿y si el baño pudiera ofrecer
              una experiencia de higiene más cómoda, personalizada y
              automatizada?
            </p>
            <p className="text-body-lg text-stone-600 leading-relaxed mt-4">
              La respuesta llegó con la evolución de los asientos electrónicos
              con función de lavado, capaces de incorporar agua templada,
              regulación de temperatura y, posteriormente, nuevas prestaciones.
              Lo que comenzó como una alternativa a los métodos convencionales
              de higiene se convirtió en una categoría de productos que continúa
              evolucionando.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Japón y el nacimiento de una nueva categoría
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Aunque los sistemas de higiene con agua tienen una historia mucho
              más antigua, Japón desempeñó un papel fundamental en la
              popularización del asiento electrónico moderno. En 1980, TOTO lanzó
              su primer WASHLET, un asiento electrónico con funciones de lavado
              que contribuiría a transformar los hábitos de higiene en numerosos
              hogares japoneses.
            </p>
            <p className="text-body-lg text-stone-600 leading-relaxed mt-4">
              Su propuesta introducía una nueva relación entre tecnología y vida
              cotidiana: incorporar funciones avanzadas a un objeto
              tradicionalmente sencillo. Con el tiempo, otros fabricantes
              desarrollaron soluciones similares y ampliaron las posibilidades
              de estos sistemas. El resultado fue la consolidación de una
              categoría que hoy abarca desde asientos electrónicos adaptables
              hasta inodoros completamente integrados.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              La evolución hacia una experiencia personalizada
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed mb-6">
              Los primeros sistemas electrónicos se centraban principalmente en
              el lavado con agua. Las generaciones posteriores incorporaron
              distintas funciones, dependiendo del fabricante y del modelo:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-body-lg text-stone-600 leading-relaxed">
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7A8B7C]"></span>
                Regulación de la temperatura del agua.
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7A8B7C]"></span>
                Ajuste de la posición y presión del lavado.
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7A8B7C]"></span>
                Asientos calefactados.
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7A8B7C]"></span>
                Secado mediante aire templado.
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7A8B7C]"></span>
                Sistemas automáticos de limpieza.
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7A8B7C]"></span>
                Sensores de presencia.
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7A8B7C]"></span>
                Apertura y cierre motorizados.
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7A8B7C]"></span>
                Mandos a distancia y memorias de usuario.
              </li>
            </ul>
            <p className="text-body-lg text-stone-600 leading-relaxed mt-6">
              La evolución tecnológica no consiste únicamente en añadir
              funcionalidades. También busca mejorar la facilidad de uso, la
              integración de los componentes y la adaptación a diferentes
              preferencias.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Cuando la tecnología se integra en el diseño
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Uno de los cambios más significativos ha sido la transición desde
              el asiento electrónico independiente hacia el inodoro inteligente
              integrado. En estos modelos, las funciones de lavado, secado y
              control forman parte del propio diseño del sanitario.
            </p>
            <p className="text-body-lg text-stone-600 leading-relaxed mt-4">
              Esto permite desarrollar formas más continuas y reducir la
              presencia visual de determinados componentes. La integración
              también plantea nuevos desafíos de ingeniería: acceso a los
              mecanismos, mantenimiento, instalación y disponibilidad de
              recambios. Por eso, un diseño más compacto no implica
              necesariamente una solución más sencilla de mantener.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Sensores, automatización y nuevas interfaces
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Los sensores han permitido automatizar determinadas acciones.
              Algunos modelos pueden detectar la presencia del usuario, activar
              funciones de apertura o cierre y realizar procesos de limpieza
              automática. Los mandos y paneles también han evolucionado hacia
              interfaces que permiten personalizar distintas preferencias.
            </p>
            <p className="text-body-lg text-stone-600 leading-relaxed mt-4">
              Sin embargo, la automatización no siempre representa una ventaja
              universal. Para determinadas personas, especialmente aquellas con
              dificultades visuales, cognitivas o de destreza manual, la claridad
              de los controles puede ser tan importante como la cantidad de
              funciones disponibles. La innovación debe evaluarse también desde
              la accesibilidad.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              El futuro del baño inteligente
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              El desarrollo de nuevos sensores, sistemas de control y tecnologías
              de análisis abre posibilidades para la evolución del baño. Entre
              las líneas de investigación y desarrollo se encuentran la mejora
              de la eficiencia energética, la automatización de funciones y
              determinados sistemas de monitorización relacionados con la salud.
            </p>
            <p className="text-body-lg text-stone-600 leading-relaxed mt-4">
              No obstante, es importante diferenciar entre productos disponibles
              comercialmente, prototipos y tecnologías experimentales. La
              incorporación de funciones de análisis de datos personales también
              plantea cuestiones relacionadas con privacidad, seguridad y
              utilidad clínica. El futuro del baño inteligente dependerá tanto
              de la viabilidad tecnológica como de su capacidad para resolver
              necesidades reales.
            </p>
          </section>

          <section className="bg-stone-50 p-8 md:p-12 rounded-sm border-l-4 border-[#7A8B7C]">
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Una revolución que continúa
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              La evolución del washlet demuestra cómo la innovación puede
              transformar objetos que parecían haber alcanzado su forma
              definitiva. Hoy, el inodoro inteligente representa la convergencia
              entre ingeniería, diseño e higiene personal.
            </p>
            <p className="text-body-lg text-stone-600 leading-relaxed mt-4 font-medium text-stone-800">
              Su siguiente etapa no dependerá únicamente de incorporar más
              tecnología, sino de conseguir que esa tecnología sea más
              accesible, fiable, eficiente y fácil de utilizar. Porque la
              innovación más relevante no siempre es la que más se ve, sino la
              que consigue integrarse de manera natural en la vida cotidiana.
            </p>
          </section>
        </div>
      </article>

      {/* NAVEGACIÓN INFERIOR (CTA) */}
      <section className="bg-stone-950 px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-stone-400 text-sm uppercase tracking-widest mb-4">
            Sigue explorando
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mb-8">
            Descubre las otras dimensiones de la tecnología en el baño
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/tecnologia/sistemas-inteligentes"
              className="px-6 py-3 border border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white transition-colors rounded-sm text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Sistemas Inteligentes
            </Link>
            <Link
              href="/tecnologia/sostenibilidad"
              className="px-6 py-3 border border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white transition-colors rounded-sm text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Sostenibilidad
            </Link>
            <Link
              href="/tecnologia"
              className="px-6 py-3 bg-[#7A8B7C] text-white hover:bg-[#6a7b6c] transition-colors rounded-sm text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              ← Volver a Tecnología
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
