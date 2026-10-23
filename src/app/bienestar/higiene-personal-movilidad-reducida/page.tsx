import type { Metadata } from "next";
import Link from "next/link";

/**
 * Artículo editorial del silo Bienestar dedicado a la higiene personal con
 * movilidad reducida.
 *
 * Se renderiza dentro del Layout global definido en `src/app/layout.tsx`,
 * que ya aporta el header, el `<main>` y el footer. Por eso este archivo no
 * vuelve a envolver el contenido en otro `<main>`.
 */
export const metadata: Metadata = {
  title: "Higiene personal y movilidad reducida | Bienestar | SUI Magazine",
  description:
    "La posibilidad de realizar la higiene personal con mayor comodidad e intimidad puede marcar una diferencia importante. Exploramos qué aportan los sistemas de lavado.",
  alternates: {
    canonical:
      "https://sui-magazine.vercel.app/bienestar/higiene-personal-movilidad-reducida",
  },
  openGraph: {
    title: "Higiene personal y movilidad reducida | Bienestar | SUI Magazine",
    description:
      "La posibilidad de realizar la higiene personal con mayor comodidad e intimidad puede marcar una diferencia importante. Exploramos qué aportan los sistemas de lavado.",
    locale: "es_ES",
    type: "article",
  },
};

export default function HigieneMovilidadReducidaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO EDITORIAL */}
      <section className="bg-stone-50 px-6 py-20 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[#7A8B7C]">
            Bienestar / Autonomía Personal
          </p>
          <h1 className="font-serif text-3xl md:text-5xl tracking-tight text-stone-900 text-balance mb-6">
            Higiene personal y movilidad reducida: cuando la tecnología facilita
            lo cotidiano
          </h1>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed italic text-balance">
            La posibilidad de realizar la higiene personal con mayor comodidad e
            intimidad puede marcar una diferencia importante en la vida diaria.
            Exploramos qué pueden aportar los sistemas de lavado con agua y qué
            conviene valorar antes de incorporarlos al baño.
          </p>
        </div>
      </section>

      {/* CUERPO EDITORIAL */}
      <article className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-12">
          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              La autonomía también vive en los pequeños gestos
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              La autonomía personal no se define únicamente por las grandes
              decisiones. También se expresa en acciones cotidianas que muchas
              veces pasan inadvertidas: vestirse, preparar una comida o utilizar
              el baño.
            </p>
            <p className="text-body-lg text-stone-600 leading-relaxed mt-4">
              Para algunas personas con movilidad reducida, la higiene después de
              utilizar el inodoro puede requerir movimientos difíciles de
              realizar. Girar el tronco, alcanzar determinadas zonas del cuerpo o
              mantener el equilibrio mientras se utiliza papel higiénico son
              gestos que pueden resultar incómodos o poco seguros. Estas
              dificultades no afectan a todas las personas de la misma manera.
              Dependen de factores como la movilidad de las articulaciones, la
              fuerza, la coordinación, el equilibrio y las características del
              entorno. Por eso, hablar de autonomía exige mirar más allá de un
              diagnóstico o una edad. Lo importante es comprender qué necesita
              cada persona para desenvolverse con comodidad y seguridad.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              El agua como alternativa para la higiene personal
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Los sistemas de higiene con agua permiten realizar parte de la
              limpieza después de utilizar el inodoro mediante un chorro
              dirigido. En los asientos electrónicos, también conocidos de forma
              genérica como bidés japoneses, el usuario puede activar el lavado
              desde un panel o mando. Según el modelo, es posible regular la
              temperatura del agua, la intensidad del chorro o la posición de la
              boquilla. Algunos incorporan secado mediante aire templado.
            </p>
            <p className="text-body-lg text-stone-600 leading-relaxed mt-4">
              Estas funciones pueden resultar útiles cuando determinados
              movimientos necesarios para la limpieza manual son difíciles de
              realizar. Sin embargo, el beneficio no es automático. La persona
              debe poder acceder al inodoro, colocarse adecuadamente y utilizar
              los controles. En algunos casos también necesitará ayuda para
              ajustar la posición o completar la higiene.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-6">
              ¿Qué dificultades pueden ayudar a reducir?
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl text-stone-800 mb-2">
                  Menor necesidad de alcanzar determinadas zonas
                </h3>
                <p className="text-body-lg text-stone-600 leading-relaxed">
                  El lavado con agua puede reducir la necesidad de realizar
                  movimientos de alcance hacia la parte posterior del cuerpo.
                  Esto puede ser relevante para personas con limitaciones de
                  movilidad en hombros, brazos, manos o tronco. No obstante, la
                  eficacia depende de la postura, del alcance del chorro y de la
                  capacidad para manejar el dispositivo.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-stone-800 mb-2">
                  Menos manipulaciones durante la limpieza
                </h3>
                <p className="text-body-lg text-stone-600 leading-relaxed">
                  Un sistema de lavado regulable puede simplificar parte de la
                  rutina de higiene. Cuando incorpora secado, también puede
                  reducir la necesidad de utilizar papel o una toalla para
                  retirar la humedad. Conviene recordar que los sistemas de
                  secado no funcionan igual en todos los modelos y que algunas
                  personas pueden necesitar completar el proceso manualmente.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-stone-800 mb-2">
                  Mayor privacidad en determinadas situaciones
                </h3>
                <p className="text-body-lg text-stone-600 leading-relaxed">
                  Cuando una persona necesita ayuda exclusivamente para realizar
                  la limpieza posterior, un sistema de lavado con agua puede
                  permitirle asumir parte de esa tarea. Esto puede favorecer su
                  intimidad y capacidad de elección. Pero la autonomía no debe
                  medirse únicamente por la ausencia de ayuda. Poder decidir cómo
                  se recibe asistencia también forma parte de una experiencia
                  respetuosa.
                </p>
              </div>
            </div>
          </section>
          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              La importancia de los controles
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed mb-6">
              Un inodoro inteligente puede incorporar numerosas funciones y, aun
              así, resultar difícil de utilizar. Para una persona con movilidad
              reducida, la accesibilidad del mando puede ser tan importante como
              la calidad del lavado. Antes de elegir un producto conviene valorar:
            </p>
            <div className="space-y-4 mb-6">
              <p className="text-body-lg text-stone-600 leading-relaxed">
                <strong className="text-stone-800">Ubicación.</strong> ¿El mando
                queda al alcance desde una posición sentada?
              </p>
              <p className="text-body-lg text-stone-600 leading-relaxed">
                <strong className="text-stone-800">
                  Tamaño y separación de los botones.
                </strong>{" "}
                ¿Pueden identificarse y accionarse con facilidad?
              </p>
              <p className="text-body-lg text-stone-600 leading-relaxed">
                <strong className="text-stone-800">Fuerza necesaria.</strong> ¿Es
                posible utilizarlos sin realizar movimientos difíciles?
              </p>
              <p className="text-body-lg text-stone-600 leading-relaxed">
                <strong className="text-stone-800">Legibilidad.</strong> ¿Los
                símbolos y las indicaciones resultan comprensibles?
              </p>
              <p className="text-body-lg text-stone-600 leading-relaxed">
                <strong className="text-stone-800">
                  Memoria de preferencias.
                </strong>{" "}
                ¿El sistema permite recuperar ajustes habituales sin repetir todo
                el proceso?
              </p>
            </div>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              No existe una interfaz perfecta para todas las personas. Un mando
              remoto puede resultar muy útil en ciertos casos y poco práctico en
              otros.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Lo que un bidé japonés no puede resolver
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              La higiene con agua no elimina por sí sola las barreras del baño. Si
              una persona tiene dificultades para llegar al inodoro, transferirse
              desde una silla de ruedas, sentarse o levantarse, puede necesitar
              otras adaptaciones. Entre ellas se encuentran la redistribución del
              espacio, las barras de apoyo correctamente instaladas o los
              sistemas de asistencia para las transferencias. Tampoco debe
              asumirse que un asiento electrónico es adecuado para cualquier
              situación clínica o funcional. Cuando existen alteraciones de
              sensibilidad, dificultades para controlar la temperatura o
              necesidades complejas de asistencia, conviene valorar el producto
              con profesionales sanitarios o de terapia ocupacional.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Qué revisar antes de instalar uno
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              La elección debería comenzar por una pregunta sencilla: ¿qué tarea
              concreta queremos facilitar? A partir de ahí, es importante
              comprobar la compatibilidad con el inodoro existente, la
              disponibilidad de una toma de agua adecuada y, en los modelos
              eléctricos, las condiciones de alimentación e instalación. También
              conviene considerar la facilidad de limpieza, el mantenimiento, el
              servicio técnico y la posibilidad de probar los controles antes de
              comprar. En algunos hogares, adaptar un inodoro existente puede ser
              suficiente. En otros, será necesario intervenir primero sobre el
              espacio.
            </p>
          </section>

          <section className="bg-stone-50 p-8 md:p-12 rounded-sm border-l-4 border-[#7A8B7C]">
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              La tecnología como apoyo, no como sustitución
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              La tecnología aplicada a la higiene puede ofrecer nuevas
              posibilidades de comodidad y autonomía. Su verdadero valor aparece
              cuando responde a una necesidad concreta y se integra en un entorno
              seguro y accesible. No se trata de hacer que todas las personas
              utilicen el baño de la misma manera, sino de ampliar sus opciones.
            </p>
            <p className="text-body-lg text-stone-600 leading-relaxed mt-4 font-medium text-stone-800">
              Porque la autonomía también consiste en poder elegir cómo cuidar de
              uno mismo.
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
