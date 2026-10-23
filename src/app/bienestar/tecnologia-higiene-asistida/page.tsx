import type { Metadata } from "next";
import Link from "next/link";

/**
 * Artículo editorial del silo Bienestar sobre tecnología e higiene asistida.
 *
 * Se renderiza dentro del Layout global definido en `src/app/layout.tsx`,
 * que ya aporta el header, el `<main>` y el footer. Por eso este archivo no
 * vuelve a envolver el contenido en otro `<main>`.
 */
export const metadata: Metadata = {
  title:
    "Tecnología e higiene asistida: soluciones para un cuidado más respetuoso | SUI Magazine",
  description:
    "Cómo puede ayudar la tecnología de higiene con agua en situaciones de cuidado asistido. Ventajas, límites, accesibilidad y criterios para elegir soluciones adecuadas.",
  alternates: {
    canonical:
      "https://sui-magazine.vercel.app/bienestar/tecnologia-higiene-asistida",
  },
  openGraph: {
    title:
      "Tecnología e higiene asistida: soluciones para un cuidado más respetuoso | SUI Magazine",
    description:
      "Cómo puede ayudar la tecnología de higiene con agua en situaciones de cuidado asistido. Ventajas, límites, accesibilidad y criterios para elegir soluciones adecuadas.",
    locale: "es_ES",
    type: "article",
  },
};

export default function TecnologiaHigieneAsistidaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO EDITORIAL */}
      <section className="bg-stone-50 px-6 py-20 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[#7A8B7C]">
            Bienestar / Cuidado y Asistencia
          </p>
          <h1 className="font-serif text-3xl md:text-5xl tracking-tight text-stone-900 text-balance mb-6">
            Cuidar también es facilitar: tecnología e higiene asistida
          </h1>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed italic text-balance">
            La asistencia en la higiene personal requiere atención, confianza y
            respeto. Algunas tecnologías pueden simplificar determinadas tareas,
            pero su verdadero valor depende de cómo se integran en una relación
            de cuidado.
          </p>
        </div>
      </section>

      {/* CUERPO EDITORIAL */}
      <article className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-12">
          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              El cuidado en uno de los espacios más íntimos
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              La higiene personal forma parte de las actividades más privadas de
              nuestra vida. Cuando una persona necesita asistencia para
              realizarla, entran en juego aspectos que van mucho más allá de la
              limpieza. La intimidad, la comunicación, las preferencias
              individuales y la confianza adquieren una importancia especial. Por
              eso, incorporar tecnología al cuidado no debería significar
              sustituir la relación humana. Su objetivo debe ser facilitar
              determinadas tareas y ofrecer más opciones a quienes reciben y
              proporcionan asistencia.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              No todas las necesidades de ayuda son iguales
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Una persona puede necesitar apoyo para llegar al baño, pero
              realizar su higiene de forma independiente. Otra puede utilizar el
              inodoro sin dificultad y requerir ayuda únicamente para la limpieza
              posterior. También existen situaciones en las que es necesaria una
              asistencia más amplia. Estas diferencias son fundamentales. Una
              solución tecnológica útil para una persona puede resultar
              irrelevante o poco adecuada para otra. Antes de incorporar un
              dispositivo, conviene identificar qué parte de la rutina presenta
              dificultades y qué resultado se espera conseguir.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              El papel de los sistemas de lavado con agua
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Los asientos electrónicos y determinados inodoros inteligentes
              incorporan sistemas de lavado que permiten realizar la higiene
              mediante un chorro de agua. Según el modelo, pueden ofrecer
              regulación de temperatura, presión y posición. Algunos incluyen
              secado con aire. En determinadas situaciones de asistencia, estas
              funciones pueden reducir parte de la limpieza manual necesaria.
              Esto podría facilitar algunos aspectos de la rutina tanto para la
              persona usuaria como para quien le presta apoyo. Sin embargo, no
              significa que el dispositivo elimine la necesidad de supervisión,
              ayuda o comprobación de la higiene.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Intimidad y capacidad de elección
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Uno de los posibles beneficios de la tecnología de higiene es
              permitir que la persona participe más activamente en su propia
              rutina. Cuando puede manejar los controles, elegir los ajustes y
              decidir cuándo iniciar o finalizar el lavado, conserva un papel
              protagonista. Pero incluso cuando necesita ayuda para utilizar el
              dispositivo, sus preferencias siguen siendo importantes. Explicar
              lo que se va a hacer, pedir consentimiento y respetar los tiempos de
              cada persona son aspectos esenciales del cuidado. La tecnología no
              sustituye estos principios.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Facilitar el trabajo de quien cuida
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              La asistencia en el baño puede implicar movimientos repetidos,
              posturas incómodas y tareas que requieren atención constante. Un
              sistema de higiene con agua puede modificar algunas de estas tareas,
              pero no debe presentarse como una solución demostrada para reducir
              lesiones o sobrecarga física sin evidencia específica. La ergonomía
              del espacio, la formación, los apoyos técnicos y la organización del
              cuidado siguen siendo fundamentales. Cuando existen dificultades
              para las transferencias o la movilización, es especialmente
              importante contar con orientación profesional. Un inodoro
              inteligente no sustituye los dispositivos ni los procedimientos
              adecuados para mover o asistir a una persona.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Elegir tecnología para un entorno de asistencia
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed mb-6">
              La selección debe considerar tanto a la persona usuaria como a
              quienes puedan ayudarla. Entre los aspectos relevantes se
              encuentran:
            </p>
            <div className="space-y-4 mb-6">
              <p className="text-body-lg text-stone-600 leading-relaxed">
                <strong className="text-stone-800">Controles accesibles.</strong>{" "}
                Deben poder utilizarse desde las posiciones previstas y ser
                fáciles de comprender.
              </p>
              <p className="text-body-lg text-stone-600 leading-relaxed">
                <strong className="text-stone-800">Ajustes regulables.</strong>{" "}
                La temperatura y la intensidad del lavado deben poder adaptarse a
                las preferencias y necesidades de uso.
              </p>
              <p className="text-body-lg text-stone-600 leading-relaxed">
                <strong className="text-stone-800">
                  Limpieza y mantenimiento.
                </strong>{" "}
                El equipo debe permitir realizar las tareas de higiene y
                conservación indicadas por el fabricante.
              </p>
              <p className="text-body-lg text-stone-600 leading-relaxed">
                <strong className="text-stone-800">
                  Compatibilidad con el espacio.
                </strong>{" "}
                Su instalación no debe obstaculizar apoyos, maniobras ni
                transferencias.
              </p>
              <p className="text-body-lg text-stone-600 leading-relaxed">
                <strong className="text-stone-800">Fiabilidad y soporte.</strong>{" "}
                Es importante conocer las condiciones de garantía, mantenimiento
                y disponibilidad de recambios.
              </p>
              <p className="text-body-lg text-stone-600 leading-relaxed">
                <strong className="text-stone-800">Uso compartido.</strong> Cuando
                varias personas utilizan el mismo equipo, conviene valorar la
                facilidad para cambiar ajustes y mantener condiciones higiénicas
                adecuadas.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Límites que conviene conocer
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Los sistemas de lavado con agua no son adecuados automáticamente
              para todas las personas o situaciones. La sensibilidad cutánea, la
              capacidad para percibir la temperatura, la postura durante el uso y
              determinadas condiciones de salud pueden requerir precauciones
              específicas. También es importante recordar que las funciones
              automáticas no garantizan una higiene completa en todos los casos.
              Cuando existen necesidades sanitarias complejas, la elección y
              utilización del dispositivo deberían consultarse con profesionales
              adecuados.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              El cuidado no se automatiza por completo
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              La innovación puede facilitar determinadas actividades, pero no
              reemplaza la atención a las necesidades individuales. Un sistema de
              lavado puede ayudar con una tarea concreta. No puede interpretar por
              sí solo todas las preferencias, incomodidades o circunstancias de
              una persona. Por eso, la mejor tecnología para el cuidado no
              siempre es la más sofisticada. Es aquella que puede utilizarse de
              forma segura, comprensible y respetuosa.
            </p>
          </section>

          <section className="bg-stone-50 p-8 md:p-12 rounded-sm border-l-4 border-[#7A8B7C]">
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Una relación más humana con la tecnología
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              El futuro de la higiene asistida no debería medirse únicamente por
              el número de funciones automáticas disponibles. También debería
              evaluarse por su capacidad para ofrecer opciones, facilitar la
              participación y respetar la intimidad. Cuando está bien elegida e
              integrada, la tecnología puede convertirse en una herramienta
              valiosa.
            </p>
            <p className="text-body-lg text-stone-600 leading-relaxed mt-4 font-medium text-stone-800">
              No porque sustituya el cuidado, sino porque puede ayudar a que el
              cuidado se adapte mejor a cada persona.
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
