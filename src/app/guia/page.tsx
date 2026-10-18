import type { Metadata } from "next";
import Link from "next/link";

/**
 * La página se renderiza dentro del Layout global definido en
 * `src/app/layout.tsx`. No se vuelve a envolver aquí para no duplicar
 * el header y el footer del magazine.
 */
export const metadata: Metadata = {
  title: "La Guía Esencial | Sui Magazine",
  description:
    "Guía completa sobre bidés japoneses y washlets: qué son, cómo funcionan, los tres formatos disponibles y por qué se han vuelto tan populares en España.",
  openGraph: {
    title: "La Guía Esencial | Sui Magazine",
    description:
      "Todo lo que necesitas saber sobre los inodoros inteligentes japoneses.",
    locale: "es_ES",
    type: "article",
  },
};

/**
 * Los tres formatos disponibles, con el enfoque editorial propio de la guía.
 * Se mantienen los iconos circulares y el tono visual de la home.
 */
const guideFormats = [
  {
    icon: "✨",
    title: "Asiento o tapa inteligente",
    description:
      "Es la opción más popular y versátil. Sustituye únicamente la tapa de tu váter de toda la vida y lo transforma al instante en un dispositivo de alta tecnología.",
  },
  {
    icon: "🌿",
    title: "Inodoro completo integrado",
    description:
      "Sustituye toda la pieza cerámica tradicional. Son la máxima expresión del diseño moderno y la elegancia (a menudo suspendidos en la pared).",
  },
  {
    icon: "💧",
    title: "Accesorio o manguera",
    description:
      "Es la alternativa más básica, económica y fácil de instalar. No requiere electricidad, ya que funciona únicamente con la presión del agua de tu casa.",
  },
];

/** Las cinco razones que explican la popularidad del washlet en España. */
const reasons = [
  {
    title: "El boca a boca y los viajes",
    text: "Casi cualquier turista que visita Japón vuelve maravillado con sus baños y quiere replicar esa misma experiencia de confort en su propio hogar.",
  },
  {
    title: "El despertar de la higiene tras la pandemia",
    text: "En los últimos años, la preocupación general por buscar alternativas más seguras e higiénicas en nuestra rutina de salud ha crecido exponencialmente.",
  },
  {
    title: "Compromiso con la sostenibilidad",
    text: "Fabricar rollos de papel higiénico implica talar árboles y malgastar miles de litros de agua. Reducir su consumo diario es un enorme respiro para nuestro planeta.",
  },
  {
    title: "El envejecimiento de la población",
    text: "Son una herramienta brillante para recuperar la privacidad y fomentar la autonomía de personas mayores o con grados de dependencia.",
  },
  {
    title: "Reformas de baño más inteligentes",
    text: "Con pisos y cuartos de baño cada vez más pequeños, muchos españoles prefieren instalar un inodoro inteligente que unifique funciones, ahorrando el espacio que antes ocuparía un bidé tradicional.",
  },
];

/** Ventajas cotidianas, con una mirada divulgativa y sin promesas médicas. */
const advantages = [
  {
    icon: "💧",
    title: "Higiene superior",
    text: "El agua limpia con una eficacia, delicadeza y profundidad que la celulosa seca jamás podrá igualar.",
  },
  {
    icon: "🛋️",
    title: "Comodidad y confort",
    text: "Mejoras tu bienestar gracias al asiento calefactado, la luz nocturna y los sistemas de eliminación de malos olores.",
  },
  {
    icon: "🌿",
    title: "Ahorro de papel higiénico",
    text: "Tu lista de la compra será mucho más ligera y amortizarás la inversión a largo plazo.",
  },
  {
    icon: "🫂",
    title: "Ideal para movilidad reducida",
    text: "Evita movimientos dolorosos, giros de cadera o la necesidad de asistencia a la hora de ir al baño.",
  },
  {
    icon: "⚕️",
    title: "Beneficios médicos y alivio",
    text: "El chorro de agua suave o aireado es un bálsamo reconfortante indispensable si sufres de hemorroides, durante el ciclo menstrual o en la recuperación postparto.",
  },
];

export default function GuiaPage() {
  return (
    <>
      {/* 1. Hero de sección: fondo plano para mantener la calma editorial. */}
      <section className="flex h-[50vh] min-h-[380px] items-center justify-center bg-stone-100 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-eyebrow uppercase text-stone-400">
            Guía · Sui Magazine
          </p>
          <h1 className="text-balance font-serif text-h1 tracking-tight text-stone-900">
            La Guía Esencial
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-sans text-body-lg text-stone-600">
            Todo lo que necesitas saber sobre los inodoros inteligentes
            japoneses
          </p>
        </div>
      </section>

      {/* 2. Introducción narrativa. */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="font-serif text-xl leading-relaxed text-stone-700 md:text-2xl">
          Seguro que alguna vez te has preguntado: ¿por qué si nos manchamos
          las manos de barro usamos agua para lavarnos, pero en la intimidad del
          baño llevamos décadas dependiendo de un trozo de papel seco? Es una
          contradicción curiosa que hemos normalizado. Sin embargo, algo está
          cambiando en los hogares españoles. Un dispositivo que comenzó como
          una excentricidad tecnológica en Asia está transformando para siempre
          uno de los hábitos más cotidianos del ser humano.
        </p>
      </section>

      {/* 3. Qué es un washlet y cuáles son sus tres formatos. */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="mb-8 text-balance font-serif text-h2 tracking-tight text-stone-900">
          ¿Qué es exactamente un bidé japonés?
        </h2>

        <div className="space-y-6 font-sans text-base leading-relaxed text-stone-600">
          <p>
            Aunque el fabricante Toto popularizó el término washlet en los años
            80, hoy utilizamos conceptos como “bidé japonés” o “inodoro
            inteligente” para referirnos a un sanitario que integra avanzadas
            funciones electrónicas para la higiene íntima. En resumen: te lava
            suavemente con un chorro de agua templada en lugar de obligarte a
            usar papel.
          </p>
          <p>
            Lo que nadie te cuenta es que no hace falta meterte en grandes y
            costosas reformas ni arrancar tu retrete actual para tener uno en
            casa. De hecho, existen tres formatos principales:
          </p>
        </div>

        <ul className="mt-12 divide-y divide-stone-200 border-y border-stone-200">
          {guideFormats.map((format) => (
            <li key={format.title} className="flex items-start gap-5 py-7">
              <span
                className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-stone-200 text-xl"
                aria-hidden="true"
              >
                {format.icon}
              </span>
              <div>
                <h3 className="font-serif text-h3 text-stone-900">
                  {format.title}
                </h3>
                <p className="mt-2 font-sans text-body-base text-stone-600">
                  {format.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 4. La experiencia sensorial, paso a paso. */}
      <section className="bg-stone-100 px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-balance text-center font-serif text-h2 tracking-tight text-stone-900">
            ¿Cómo funciona? La experiencia paso a paso
          </h2>
          <div className="mt-8 space-y-6 font-serif text-body-lg text-stone-700">
            <p>
              Imagina por un momento la escena en una fría mañana de invierno:
              entras al baño, la tapa se levanta sola al detectar que te acercas
              y te sientas en un aro de porcelana agradablemente calefactado.
              Cuando terminas, no buscas a ciegas el rollo de celulosa.
              Simplemente tomas un intuitivo mando a distancia o pulsas un botón
              en el panel lateral.
            </p>
            <p>
              De forma casi mágica, una pequeña boquilla oculta emerge para
              lanzar un chorro de agua tibia. Tú controlas cada detalle de la
              experiencia: la temperatura, la presión del agua y la posición
              exacta de la limpieza. Tras unos segundos, activas la función de
              secado con aire caliente, dejándote una sensación de frescura y
              limpieza absoluta.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/articulos/guia-instalacion"
              className="inline-block border-b border-stone-300 pb-1 font-sans text-sm text-stone-600 transition hover:border-stone-900 hover:text-stone-900"
            >
              Leer la guía completa de instalación paso a paso →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Contexto español: cinco razones de su popularidad. */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="mb-8 text-balance font-serif text-h2 tracking-tight text-stone-900">
          ¿Por qué se ha vuelto tan popular en España?
        </h2>

        <ol className="space-y-8">
          {reasons.map((reason, index) => (
            <li
              key={reason.title}
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
                  {reason.title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-stone-600">
                  {reason.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 6. Ventajas reales en formato de tarjetas. */}
      <section className="bg-stone-100 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mx-auto max-w-2xl text-balance text-center font-serif text-h2 tracking-tight text-stone-900">
            ¿Qué ventajas reales aporta a tu día a día?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center font-sans text-body-lg text-stone-700">
            Si aún te lo estás pensando, estos son los beneficios directos que
            notarás desde el primer uso:
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((advantage) => (
              <article
                key={advantage.title}
                className="bg-white p-8 shadow-sm"
              >
                <span className="text-2xl" aria-hidden="true">
                  {advantage.icon}
                </span>
                <h3 className="mt-4 font-serif text-h3 text-stone-900">
                  {advantage.title}
                </h3>
                <p className="mt-3 font-sans text-body-base text-stone-600">
                  {advantage.text}
                </p>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center font-sans text-caption text-stone-500">
            La información de esta guía es divulgativa y no sustituye la
            consulta con un profesional de la salud.
          </p>
        </div>
      </section>

      {/* 7. CTA hacia la selección de modelos. */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-xl">
          <h2 className="text-balance font-serif text-h2 tracking-tight text-stone-900">
            ¿Listo para descubrir el modelo perfecto para ti?
          </h2>
          <Link
            href="/seleccion"
            className="mt-8 inline-block border border-stone-900 px-6 py-3 text-sm font-medium tracking-wide text-stone-900 transition hover:bg-stone-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
          >
            Ver nuestra selección
          </Link>
        </div>
      </section>
    </>
  );
}


