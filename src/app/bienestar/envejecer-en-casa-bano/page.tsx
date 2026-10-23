import type { Metadata } from "next";
import Link from "next/link";

/**
 * Artículo editorial del silo Bienestar sobre el envejecimiento en casa y la
 * adaptación del baño.
 *
 * Se renderiza dentro del Layout global definido en `src/app/layout.tsx`,
 * que ya aporta el header, el `<main>` y el footer. Por eso este archivo no
 * vuelve a envolver el contenido en otro `<main>`.
 */
export const metadata: Metadata = {
  title:
    "Envejecer en casa: cómo adaptar el baño para mayor autonomía | SUI Magazine",
  description:
    "El papel del baño en el envejecimiento en casa: accesibilidad, seguridad, higiene con agua y adaptaciones que pueden facilitar la vida cotidiana.",
  alternates: {
    canonical:
      "https://sui-magazine.vercel.app/bienestar/envejecer-en-casa-bano",
  },
  openGraph: {
    title:
      "Envejecer en casa: cómo adaptar el baño para mayor autonomía | SUI Magazine",
    description:
      "El papel del baño en el envejecimiento en casa: accesibilidad, seguridad, higiene con agua y adaptaciones que pueden facilitar la vida cotidiana.",
    locale: "es_ES",
    type: "article",
  },
};

export default function EnvejecerEnCasaBanoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO EDITORIAL */}
      <section className="bg-stone-50 px-6 py-20 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[#7A8B7C]">
            Bienestar / Envejecimiento
          </p>
          <h1 className="font-serif text-3xl md:text-5xl tracking-tight text-stone-900 text-balance mb-6">
            Envejecer en casa: el baño como espacio de autonomía
          </h1>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed italic text-balance">
            Permanecer en el propio hogar puede significar conservar rutinas,
            recuerdos y libertad de elección. Adaptar el baño a las necesidades
            cambiantes es una forma de acompañar esa continuidad.
          </p>
        </div>
      </section>

      {/* CUERPO EDITORIAL */}
      <article className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-12">
          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              El valor de seguir habitando nuestro espacio
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Una casa es mucho más que el lugar donde vivimos. Es el escenario
              de nuestras costumbres, nuestros objetos y nuestras decisiones
              cotidianas. Para muchas personas, permanecer en su hogar a medida
              que envejecen representa una forma de conservar vínculos y
              autonomía. Pero las viviendas no siempre están preparadas para
              responder a necesidades que pueden cambiar con el tiempo. Entre
              sus diferentes estancias, el baño merece una atención especial por
              las actividades que concentra y las condiciones en las que se
              utiliza.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Envejecer no significa perder autonomía
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              El envejecimiento es un proceso diverso. Muchas personas mantienen
              durante años una vida plenamente independiente, mientras que otras
              pueden experimentar cambios en la movilidad, la fuerza, el
              equilibrio o la percepción sensorial. Por eso, no tiene sentido
              plantear una adaptación idéntica para todas las personas mayores.
              El objetivo debería ser identificar dificultades reales y
              anticipar aquellas modificaciones que puedan resultar útiles. Una
              intervención bien planteada puede facilitar la continuidad de las
              rutinas sin transformar innecesariamente el hogar.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Observar los gestos cotidianos
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Antes de modificar un baño, conviene prestar atención a cómo se
              utiliza. ¿Resulta fácil entrar en la ducha? ¿Hay dificultades para
              sentarse o levantarse del inodoro? ¿Los controles se identifican
              con claridad? ¿Es necesario realizar movimientos incómodos durante
              la higiene? Estas preguntas permiten detectar problemas que pueden
              pasar inadvertidos. También ayudan a distinguir entre una
              incomodidad ocasional y una barrera que requiere una adaptación
              específica. Cuando existen dificultades funcionales, una valoración
              profesional puede orientar las decisiones y evitar compras o
              reformas poco adecuadas.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              La seguridad comienza en el entorno
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Las caídas constituyen un problema relevante de salud pública,
              especialmente en edades avanzadas. La Organización Mundial de la
              Salud destaca la importancia de evaluar los riesgos individuales y
              adaptar el entorno doméstico como parte de las estrategias de
              prevención. En el baño, conviene revisar especialmente los
              desniveles, las superficies deslizantes, la iluminación y la
              disponibilidad de apoyos adecuados. No se trata de convertir la
              vivienda en un espacio hospitalario, sino de reducir obstáculos sin
              renunciar a su carácter doméstico.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Higiene con agua y comodidad cotidiana
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              La higiene posterior al uso del inodoro puede hacerse más difícil
              cuando determinados movimientos requieren mayor esfuerzo. Los
              asientos electrónicos con lavado mediante agua ofrecen una
              alternativa que puede resultar útil en algunas situaciones. Según
              el modelo, permiten ajustar el chorro y utilizar funciones de
              secado. Estas prestaciones pueden reducir ciertas manipulaciones,
              aunque no sustituyen las adaptaciones necesarias para acceder al
              sanitario o utilizarlo con seguridad. La elección debe responder a
              las capacidades y preferencias de la persona, no únicamente a su
              edad.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Adaptar sin reformar todo el baño
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              No todas las mejoras requieren una intervención integral. En
              determinadas viviendas, puede ser suficiente revisar la
              iluminación, reorganizar elementos, instalar apoyos adecuados o
              sustituir determinados accesorios. En otros casos, la distribución
              del espacio o las características de la ducha pueden hacer
              necesaria una reforma de mayor alcance. Lo importante es establecer
              prioridades. Una adaptación eficaz no se mide por el número de
              elementos incorporados, sino por su utilidad para las actividades
              que se realizan cada día.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Tecnología sencilla, tecnología útil
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              La automatización puede facilitar algunas tareas, pero también
              introducir nuevas dificultades. Un mando con demasiados botones,
              una interfaz poco legible o una función difícil de desactivar
              pueden generar confusión. Por eso, antes de elegir un dispositivo
              conviene comprobar si sus controles resultan cómodos y
              comprensibles. La tecnología debería adaptarse a las personas, no
              exigir que las personas cambien innecesariamente sus hábitos para
              utilizarla.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              La importancia de decidir
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Una adaptación del hogar no debería imponerse únicamente por
              motivos de seguridad o comodidad de quienes prestan apoyo. Siempre
              que sea posible, la persona que utilizará el baño debe participar
              en las decisiones. Sus preferencias, su intimidad y su forma de
              vivir son parte esencial del proyecto. Una solución puede ser
              técnicamente adecuada y, sin embargo, resultar poco satisfactoria
              si no responde a sus prioridades.
            </p>
          </section>

          <section className="bg-stone-50 p-8 md:p-12 rounded-sm border-l-4 border-[#7A8B7C]">
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Preparar el hogar para seguir viviendo en él
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Adaptar el baño no significa anticipar inevitablemente una pérdida
              de autonomía. Puede ser una manera de crear un entorno más
              flexible, capaz de responder a diferentes circunstancias. El diseño
              accesible, las soluciones de higiene y las pequeñas mejoras del
              espacio pueden contribuir a esa flexibilidad. Porque envejecer en
              casa no consiste únicamente en permanecer en un lugar conocido.
            </p>
            <p className="text-body-lg text-stone-600 leading-relaxed mt-4 font-medium text-stone-800">
              También significa conservar, durante el mayor tiempo posible, la
              capacidad de vivirlo a nuestra manera.
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
