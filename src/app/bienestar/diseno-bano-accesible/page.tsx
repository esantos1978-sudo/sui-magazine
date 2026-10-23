import type { Metadata } from "next";
import Link from "next/link";

/**
 * Artículo editorial del silo Bienestar dedicado al diseño de baños
 * accesibles.
 *
 * Se renderiza dentro del Layout global definido en `src/app/layout.tsx`,
 * que ya aporta el header, el `<main>` y el footer. Por eso este archivo no
 * vuelve a envolver el contenido en otro `<main>`.
 */
export const metadata: Metadata = {
  title: "Cómo diseñar un baño accesible sin renunciar al diseño | SUI Magazine",
  description:
    "Claves para diseñar un baño accesible, funcional y contemporáneo: distribución, apoyos, iluminación, ergonomía y tecnología aplicada a la higiene.",
  alternates: {
    canonical:
      "https://sui-magazine.vercel.app/bienestar/diseno-bano-accesible",
  },
  openGraph: {
    title:
      "Cómo diseñar un baño accesible sin renunciar al diseño | SUI Magazine",
    description:
      "Claves para diseñar un baño accesible, funcional y contemporáneo: distribución, apoyos, iluminación, ergonomía y tecnología aplicada a la higiene.",
    locale: "es_ES",
    type: "article",
  },
};

export default function DisenoBanoAccesiblePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO EDITORIAL */}
      <section className="bg-stone-50 px-6 py-20 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[#7A8B7C]">
            Bienestar / Accesibilidad
          </p>
          <h1 className="font-serif text-3xl md:text-5xl tracking-tight text-stone-900 text-balance mb-6">
            Diseñar sin barreras: cuando la accesibilidad también es buen diseño
          </h1>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed italic text-balance">
            Un baño accesible no tiene por qué parecer un espacio clínico. La
            arquitectura contemporánea permite integrar funcionalidad, seguridad
            y belleza, siempre que el diseño comience por las necesidades de
            quienes lo utilizan.
          </p>
        </div>
      </section>

      {/* CUERPO EDITORIAL */}
      <article className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-12">
          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Un espacio que debe adaptarse a las personas
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Durante mucho tiempo, la accesibilidad se ha entendido como una
              adaptación posterior: una barra añadida, un asiento especial o una
              modificación realizada cuando aparece una necesidad. Sin embargo,
              un baño verdaderamente funcional comienza a diseñarse mucho antes.
              Su distribución, los recorridos, la altura de los elementos y la
              facilidad de uso determinan cómo se experimenta el espacio. Un baño
              puede resultar visualmente impecable y, al mismo tiempo, presentar
              obstáculos importantes para una persona con movilidad reducida. Por
              eso, la accesibilidad no debería considerarse un complemento
              estético o técnico, sino una parte esencial del proyecto.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              El espacio importa más que el equipamiento
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Antes de seleccionar sanitarios, revestimientos o accesorios,
              conviene analizar cómo se utiliza el baño. ¿Es posible entrar y
              salir cómodamente? ¿Existe espacio para aproximarse al inodoro?
              ¿La puerta dificulta las maniobras? ¿Los elementos están situados a
              una altura adecuada? Las respuestas dependen de las características
              de cada persona y de los dispositivos de apoyo que utilice. Una
              persona que camina con bastón puede necesitar una distribución
              diferente de la que requiere alguien que realiza transferencias
              desde una silla de ruedas. No existe una única solución válida para
              todos los casos. Las dimensiones y condiciones exigibles también
              dependen de la normativa aplicable y del tipo de edificio. En una
              reforma, deben verificarse los requisitos correspondientes antes de
              definir el proyecto.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              El inodoro: ergonomía y facilidad de uso
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              El sanitario es uno de los elementos más importantes del baño
              accesible. Su ubicación debe permitir una aproximación adecuada y,
              cuando sea necesario, facilitar las transferencias. La altura del
              asiento, la disponibilidad de apoyos y el espacio libre alrededor
              del inodoro influyen directamente en su utilización. Un inodoro
              suspendido puede aportar ligereza visual y facilitar determinadas
              tareas de limpieza, pero su instalación no garantiza por sí misma
              una solución accesible. La elección debe considerar las necesidades
              de uso, las condiciones de montaje y la compatibilidad con los
              apoyos necesarios.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Barras de apoyo que forman parte de la arquitectura
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Las barras de apoyo son elementos funcionales, no simples
              accesorios decorativos. Su posición, resistencia y sistema de
              fijación deben responder a las necesidades de utilización. En
              determinados proyectos pueden integrarse visualmente mediante
              acabados coordinados con la grifería o el resto de los elementos.
              Sin embargo, la estética nunca debe comprometer su función. Una
              barra decorativa no debe confundirse con un elemento diseñado y
              correctamente instalado para soportar cargas. La elección y
              colocación de los apoyos debe realizarse conforme a los requisitos
              técnicos aplicables y, cuando corresponda, a una valoración
              individual.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Duchas accesibles: continuidad y seguridad
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              La ducha es otra zona donde la distribución adquiere especial
              importancia. Las soluciones a nivel del suelo pueden facilitar el
              acceso al evitar determinados desniveles, siempre que estén
              correctamente diseñadas. También deben valorarse el espacio
              disponible, la evacuación del agua, las superficies de apoyo y la
              ubicación de los controles. Los materiales de acabado deben
              seleccionarse considerando su comportamiento frente al
              deslizamiento en condiciones de uso. La continuidad visual de un
              pavimento puede aportar serenidad al conjunto, pero no debe lograrse
              a costa de la seguridad.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Iluminación y percepción del espacio
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              La iluminación influye en la facilidad con la que identificamos
              recorridos, elementos y cambios de nivel. Una combinación
              equilibrada de luz general y puntos de iluminación funcional puede
              mejorar la percepción del entorno. También conviene evitar
              deslumbramientos y contrastes que dificulten la orientación. Los
              controles de iluminación deben situarse en lugares accesibles y ser
              fáciles de identificar. La tecnología puede aportar soluciones
              útiles, como sensores o iluminación nocturna, pero debe existir una
              forma de uso comprensible y adecuada para quienes utilizan el baño.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              El papel de los inodoros inteligentes
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Los sistemas de higiene con agua pueden integrarse en un proyecto de
              baño accesible. En determinadas situaciones, las funciones de lavado
              y secado pueden facilitar la higiene posterior al uso del inodoro.
              Sin embargo, antes de incorporarlos hay que comprobar que no
              interfieran con las transferencias, los apoyos o la postura
              necesaria para utilizarlos. También es importante revisar el acceso
              al mando, la instalación eléctrica y el mantenimiento. Un producto
              tecnológicamente avanzado no siempre es la mejor elección desde el
              punto de vista de la accesibilidad.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Materiales cálidos, espacios humanos
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              La accesibilidad no exige renunciar a una estética cuidada. La
              madera tratada para ambientes húmedos, los revestimientos
              minerales, los tonos suaves y la iluminación natural pueden
              contribuir a crear espacios acogedores. Pero el diseño debe
              considerar también la limpieza, la durabilidad y el mantenimiento.
              Un acabado atractivo que resulta difícil de conservar o que genera
              problemas de uso puede terminar perjudicando la experiencia. El buen
              diseño encuentra un equilibrio entre las cualidades sensoriales del
              espacio y su funcionamiento cotidiano.
            </p>
          </section>

          <section className="bg-stone-50 p-8 md:p-12 rounded-sm border-l-4 border-[#7A8B7C]">
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Diseñar para distintas formas de vivir
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Un baño accesible no es necesariamente un baño destinado a una
              persona concreta. Es un espacio que reconoce que las capacidades,
              las necesidades y las circunstancias pueden cambiar. Por eso,
              diseñar con criterios de accesibilidad puede mejorar la experiencia
              de muchas personas, aunque las soluciones específicas deban
              adaptarse a cada caso. La verdadera sofisticación no reside en
              ocultar las necesidades humanas.
            </p>
            <p className="text-body-lg text-stone-600 leading-relaxed mt-4 font-medium text-stone-800">
              Reside en incorporarlas al diseño desde el principio.
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
            Descubre otras perspectivas en SUI Magazine
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/bienestar"
              className="px-6 py-3 border border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white transition-colors rounded-sm text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              ← Volver a Bienestar
            </Link>
            <Link
              href="/tecnologia"
              className="px-6 py-3 border border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white transition-colors rounded-sm text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Tecnología
            </Link>
            <Link
              href="/diseno"
              className="px-6 py-3 bg-[#7A8B7C] text-white hover:bg-[#6a7b6c] transition-colors rounded-sm text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Diseño
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
