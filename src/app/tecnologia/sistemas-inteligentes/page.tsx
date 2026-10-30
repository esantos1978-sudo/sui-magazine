import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/**
 * Sub-página editorial del silo Tecnología dedicada a los sistemas
 * inteligentes del inodoro.
 *
 * Se renderiza dentro del Layout global definido en `src/app/layout.tsx`,
 * que ya aporta el header, el `<main>` y el footer. Por eso este archivo no
 * vuelve a envolver el contenido en otro `<main>`.
 */
export const metadata: Metadata = {
  alternates: {
    canonical:
      "https://sui-magazine.vercel.app/tecnologia/sistemas-inteligentes",
  },
  title: "Sistemas Inteligentes | La tecnología invisible | SUI Magazine",
  description:
    "Agua templada, sensores, sistemas de secado y mecanismos de autolimpieza. Descubrimos la ingeniería que transforma un sanitario convencional.",
  openGraph: {
    title:
      "Sistemas Inteligentes | La tecnología invisible | SUI Magazine",
    description:
      "Agua templada, sensores, sistemas de secado y mecanismos de autolimpieza. Descubrimos la ingeniería que transforma un sanitario convencional.",
    locale: "es_ES",
    type: "article",
  },
};

export default function SistemasInteligentesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO EDITORIAL */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden px-6 py-20 md:py-32">
        <Image
          src="/images/atmosfericas/bide-japones-entorno.jpg"
          alt="Baño minimalista con inodoro suspendido, lavabo redondo sobre mueble de madera clara y pared de textura mineral"
          fill
          priority
          sizes="100vw"
          quality={75}
          className="object-cover object-[center_60%]"
        />
        <div className="absolute inset-0 bg-stone-950/60" aria-hidden="true" />

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-stone-300">
            Tecnología / Sistemas Inteligentes
          </p>
          <h1 className="font-serif text-3xl md:text-5xl tracking-tight text-white text-balance mb-6">
            La tecnología invisible: cómo funciona un inodoro inteligente
          </h1>
          <p className="text-lg md:text-xl text-stone-200 leading-relaxed italic text-balance">
            Agua templada, sensores, sistemas de secado y mecanismos de
            autolimpieza. Descubrimos la ingeniería que transforma un sanitario
            convencional en una experiencia de higiene personalizada.
          </p>
        </div>
      </section>

      {/* CUERPO EDITORIAL */}
      <article className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-12">
          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Mucho más que un inodoro
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              A primera vista, un inodoro inteligente puede parecer similar a
              cualquier otro sanitario contemporáneo. Sin embargo, bajo su
              superficie se encuentran sistemas hidráulicos, eléctricos y
              electrónicos diseñados para incorporar nuevas funciones de higiene
              y confort.
            </p>
            <p className="text-body-lg text-stone-600 leading-relaxed mt-4">
              Su principal diferencia respecto a un inodoro convencional es la
              posibilidad de realizar la limpieza personal mediante agua,
              generalmente con parámetros regulables. Dependiendo del modelo,
              también puede incorporar secado, calefacción, sensores y procesos
              automáticos de mantenimiento. Para comprender su funcionamiento,
              conviene conocer las principales tecnologías que lo hacen posible.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              El sistema de lavado: el corazón de la tecnología
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed mb-6">
              El lavado con agua constituye la función central de los inodoros
              inteligentes. Habitualmente, el sistema utiliza una boquilla
              retráctil que se despliega durante el uso y dirige un chorro de
              agua hacia la zona que se desea limpiar. En muchos modelos, el
              usuario puede modificar distintos parámetros:
            </p>
            <div className="space-y-4">
              <p className="text-body-lg text-stone-600 leading-relaxed">
                <strong className="text-stone-800">Presión del agua.</strong>{" "}
                Permite ajustar la intensidad del chorro dentro de los niveles
                previstos por el fabricante.
              </p>
              <p className="text-body-lg text-stone-600 leading-relaxed">
                <strong className="text-stone-800">
                  Posición de la boquilla.
                </strong>{" "}
                Facilita adaptar la orientación del lavado.
              </p>
              <p className="text-body-lg text-stone-600 leading-relaxed">
                <strong className="text-stone-800">Temperatura.</strong> Algunos
                sistemas permiten seleccionar diferentes niveles de
                calentamiento.
              </p>
              <p className="text-body-lg text-stone-600 leading-relaxed">
                <strong className="text-stone-800">
                  Modalidades de lavado.
                </strong>{" "}
                Determinados modelos incorporan movimientos oscilantes o
                variaciones del chorro.
              </p>
            </div>
            <p className="text-body-lg text-stone-600 leading-relaxed mt-6">
              Estas funciones no están presentes en todos los productos. Su
              disponibilidad depende de la gama y del sistema utilizado.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Cómo se calienta el agua
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed mb-6">
              Los inodoros inteligentes pueden utilizar diferentes métodos para
              proporcionar agua templada.
            </p>

            <h3 className="font-serif text-xl text-stone-800 mb-2">
              Sistemas con depósito
            </h3>
            <p className="text-body-lg text-stone-600 leading-relaxed mb-6">
              Incorporan un pequeño depósito donde se almacena agua que se
              mantiene o se calienta hasta alcanzar una temperatura determinada.
              Su funcionamiento depende de la capacidad del depósito y del
              sistema de control térmico. Durante usos prolongados o
              consecutivos, algunos modelos pueden experimentar variaciones en
              la temperatura disponible.
            </p>

            <h3 className="font-serif text-xl text-stone-800 mb-2">
              Sistemas de calentamiento instantáneo
            </h3>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Calientan el agua a medida que circula por el sistema, sin
              depender de una reserva convencional de agua caliente. Pueden
              ofrecer mayor continuidad de suministro, siempre dentro de las
              condiciones y límites de funcionamiento especificados por el
              fabricante. Las diferencias entre ambos sistemas también pueden
              afectar al consumo eléctrico, la potencia necesaria y el diseño
              del producto. Por eso, no existe una opción universalmente
              superior para todos los hogares.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              El secado con aire templado
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Algunos inodoros inteligentes incorporan un sistema de secado
              mediante aire. Este mecanismo utiliza un ventilador y un elemento
              calefactor para dirigir aire templado hacia la zona de higiene. En
              determinados modelos, es posible regular la temperatura. La
              eficacia y el tiempo de secado varían según el diseño del sistema
              y las condiciones de uso. Aunque esta función puede reducir la
              necesidad de utilizar papel higiénico, no garantiza su eliminación
              completa en todos los casos.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Sensores y automatización
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed mb-6">
              Los sensores permiten que algunos inodoros respondan a
              determinadas acciones sin necesidad de utilizar controles
              manuales. Entre las funciones disponibles en ciertos modelos se
              encuentran:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-body-lg text-stone-600 leading-relaxed">
              {["Detección de presencia.", "Apertura automática de la tapa.", "Activación de iluminación nocturna.", "Descarga automática.", "Cierre motorizado.", "Activación de determinados ciclos de limpieza."].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7A8B7C]"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-body-lg text-stone-600 leading-relaxed mt-6">
              La automatización busca facilitar la experiencia de uso, aunque
              también introduce componentes adicionales que pueden requerir
              mantenimiento.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Sistemas de limpieza y mantenimiento
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Los fabricantes emplean diferentes tecnologías para facilitar la
              higiene del propio sanitario. Algunos modelos incorporan procesos
              de enjuague de boquillas antes o después del uso. Otros utilizan
              tratamientos superficiales, sistemas de agua tratada o mecanismos
              específicos para reducir la acumulación de suciedad. Es importante
              distinguir entre autolimpieza parcial y mantenimiento completo.
              Ningún sistema debe interpretarse como una garantía de que el
              producto no necesita limpieza periódica. Las recomendaciones del
              fabricante siguen siendo fundamentales.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              El papel de los controles
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              La interfaz es uno de los elementos que más influyen en la
              experiencia. Los sistemas pueden utilizar botones laterales,
              mandos independientes o paneles electrónicos. Algunos incorporan
              memorias de usuario para conservar determinadas preferencias. La
              calidad de una interfaz no depende únicamente de su sofisticación.
              También debe valorarse la legibilidad, la facilidad para
              identificar funciones y la posibilidad de utilizarla cómodamente.
              En determinados contextos, un mando sencillo puede resultar más
              práctico que una interfaz con numerosas opciones.
            </p>
          </section>

          <section className="bg-stone-50 p-8 md:p-12 rounded-sm border-l-4 border-[#7A8B7C]">
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Tecnología al servicio de la experiencia
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Un inodoro inteligente combina distintas disciplinas: hidráulica,
              electrónica, ingeniería térmica, ergonomía y diseño industrial.
              Pero su valor no reside exclusivamente en la cantidad de
              mecanismos que incorpora. La verdadera utilidad aparece cuando
              esas tecnologías responden a necesidades concretas y funcionan de
              manera fiable. Comprender sus sistemas permite valorar mejor las
              diferencias entre productos y elegir funcionalidades que
              realmente aporten valor.
            </p>
            <p className="text-body-lg text-stone-600 leading-relaxed mt-4 font-medium text-stone-800">
              Porque detrás de una experiencia aparentemente sencilla existe una
              ingeniería diseñada para hacer que la tecnología pase a un segundo
              plano.
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
              href="/tecnologia/innovacion"
              className="px-6 py-3 border border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white transition-colors rounded-sm text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Innovación
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

