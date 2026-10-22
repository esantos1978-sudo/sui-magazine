import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import SiloSubnav from "@/components/SiloSubnav";

/**
 * La página se renderiza dentro del Layout global definido en
 * `src/app/layout.tsx`. No se vuelve a envolver aquí para no duplicar
 * el header y el footer del magazine.
 */
export const metadata: Metadata = {
  alternates: {
    canonical: "/guia",
  },
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

/** Pauta de mantenimiento doméstico que alarga la vida útil del washlet. */
type MaintenanceTip = {
  /** Título breve de la pauta. */
  title: string;
  /** Explicación práctica y sin tecnicismos. */
  text: string;
};

/** Las tres rutinas que sostienen el dispositivo a lo largo del tiempo. */
const maintenanceTips: MaintenanceTip[] = [
  {
    title: "Limpieza de boquillas",
    text: "La mayoría de modelos autolimpian la boquilla antes y después de cada uso. Una vez a la semana conviene extraerla con el botón de limpieza y pasar un cepillo suave por la salida del agua.",
  },
  {
    title: "Descalcificación según el agua",
    text: "En zonas con agua dura, la cal puede obstruir los conductos. Sigue el programa de descalcificación del fabricante o usa un descalcificador compatible; nunca vinagre agresivo ni productos abrasivos.",
  },
  {
    title: "Filtros y revisión anual",
    text: "Cambia el filtro de sedimentos cuando el fabricante lo indique y revisa la conexión de agua una vez al año. Un mantenimiento sencillo evita averías y pérdidas de presión.",
  },
];

/** Tarjeta de apoyo que acompaña a cada uno de los tres formatos. */
type FormatCard = {
  /** Pregunta o idea que encabeza la tarjeta. */
  title: string;
  /** Respuesta breve, en tono divulgativo. */
  text: string;
};

/** Ficha editorial de cada formato disponible en el mercado. */
type DetailedFormat = {
  /** Número decorativo del formato dentro de la sección. */
  number: string;
  /** Nombre comercial o descripción del formato. */
  title: string;
  /** Imagen principal del bloque, la misma que se usa en la home. */
  image: {
    /** Ruta del archivo dentro de `public/images/formatos`. */
    src: string;
    /** Texto alternativo descriptivo de la escena. */
    alt: string;
    /** Ancho intrínseco del archivo, en píxeles. */
    width: number;
    /** Alto intrínseco del archivo, en píxeles. */
    height: number;
  };
  /** Párrafo introductorio del formato. */
  intro: string;
  /** Las tres tarjetas: funcionamiento, virtudes y límites. */
  cards: FormatCard[];
};

/** Los tres formatos, ordenados de la solución más sencilla a la más completa. */
const detailedFormats: DetailedFormat[] = [
  {
    number: "01",
    title: "El Accesorio o Manguera (Bidé Mecánico)",
    image: {
      src: "/images/formatos/accesorio-mecanico-lifestyle.jpg",
      alt: "Inodoro tradicional con accesorio de bidé mecánico instalado en un baño luminoso con detalles de mimbre",
      width: 1024,
      height: 1024,
    },
    intro:
      "Es la puerta de entrada más básica y económica al mundo del lavado con agua. Consiste en un dispositivo (a veces una simple manguera o un acople fino) que se instala debajo de la tapa de tu inodoro actual.",
    cards: [
      {
        title: "¿Cómo funciona?",
        text: "No necesita electricidad. Se conecta directamente a la toma de agua de la cisterna o del lavabo y funciona únicamente con la presión de las cañerías.",
      },
      {
        title: "Lo mejor",
        text: "Su instalación es rapidísima, es súper económico y no dependes de enchufes.",
      },
      {
        title: "A tener en cuenta",
        text: "Al no tener electricidad, el agua sale a temperatura ambiente (fresquita en invierno) y no dispone de funciones de secado ni asiento calefactado.",
      },
    ],
  },
  {
    number: "02",
    title: "El Asiento o Tapa Inteligente (Washlet)",
    image: {
      src: "/images/formatos/tapa-inteligente-marmol.jpg",
      alt: "Inodoro con tapa inteligente y panel de control lateral en un baño de mármol gris y madera clara",
      width: 2000,
      height: 2000,
    },
    intro:
      "Esta es, sin duda, la opción favorita para quienes viven de alquiler o no quieren hacer reformas. Retiras la tapa y el aro tradicional de tu inodoro, y en su lugar instalas esta tapa tecnológica.",
    cards: [
      {
        title: "¿Cómo funciona?",
        text: "Necesita estar conectada a una toma de agua y a un enchufe estándar de 220V. Transforma tu váter de toda la vida en un inodoro inteligente de un plumazo.",
      },
      {
        title: "Lo mejor",
        text: "Te ofrece casi todas las funciones de lujo (agua caliente ilimitada, secado por aire, asiento calefactado, luces LED nocturnas) por una fracción del precio de un inodoro completo.",
      },
      {
        title: "A tener en cuenta",
        text: "Añaden un poco de volumen en la parte trasera del inodoro (donde se aloja la maquinaria), aunque los diseños son cada vez más finos y elegantes.",
      },
    ],
  },
  {
    number: "03",
    title: "El Inodoro Japonés Completo (y modelos suspendidos)",
    image: {
      src: "/images/formatos/inodoro-completo-wabi.jpg",
      alt: "Inodoro inteligente de diseño integrado en un baño oscuro con revestimiento de listones de madera y luz natural",
      width: 1024,
      height: 768,
    },
    intro:
      "Si estás reformando tu baño o construyendo tu casa, esta es la inversión definitiva. Sustituye toda la pieza de cerámica tradicional. Los modelos más demandados actualmente son los suspendidos, que van anclados a la pared con la cisterna oculta, aportando un diseño minimalista y facilitando enormemente la limpieza del suelo.",
    cards: [
      {
        title: "¿Cómo funciona?",
        text: "Integra toda la tecnología en el propio cuerpo de la porcelana. Son la gama más alta y estética del mercado.",
      },
      {
        title: "Lo mejor",
        text: "Diseño espectacular, sin cables ni tubos a la vista. Muchos incluyen funciones extra de lujo como apertura automática al acercarte, descarga de agua autónoma y desinfección avanzada (como luz ultravioleta).",
      },
      {
        title: "A tener en cuenta",
        text: "Requieren instalación profesional (especialmente los suspendidos con cisterna empotrada) y suponen un desembolso mayor.",
      },
    ],
  },
];

/** Cabeceras de la tabla comparativa, en el mismo orden que las filas. */
const comparisonColumns = [
  "Formato",
  "Precio Orientativo",
  "¿Electricidad?",
  "Instalación",
  "Funcionalidades Principales",
  "Ideal para...",
];

/** Fila de la tabla comparativa: una por cada formato. */
type ComparisonRow = {
  /** Nombre corto del formato. */
  format: string;
  /** Horquilla de precio orientativa en el mercado español. */
  price: string;
  /** Si necesita enchufe de 220V. */
  electricity: string;
  /** Nivel de dificultad de la instalación. */
  installation: string;
  /** Funciones más representativas del formato. */
  features: string;
  /** Perfil de usuario para el que tiene más sentido. */
  idealFor: string;
};

/** Diferencias clave entre los tres formatos, de un solo vistazo. */
const comparisonRows: ComparisonRow[] = [
  {
    format: "Accesorio / Mecánico",
    price: "Menos de 100 €",
    electricity: "No",
    installation: "Muy fácil (bricolaje básico)",
    features:
      "Lavado con agua a temperatura ambiente, presión regulable manualmente",
    idealFor:
      "Pisos de alquiler, presupuestos muy ajustados o baños sin enchufes cercanos",
  },
  {
    format: "Tapa / Asiento Inteligente",
    price: "190 € – 900 €",
    electricity: "Sí (220V)",
    installation: "Fácil (30 min). Requiere toma de agua y enchufe",
    features:
      "Agua caliente, secado, asiento calefactado, desodorizador, mando a distancia",
    idealFor:
      "Quienes quieren todas las ventajas tecnológicas sin cambiar su retrete actual ni hacer obras",
  },
  {
    format: "Inodoro Completo",
    price: "599 € – 3.500 €+",
    electricity: "Sí (220V)",
    installation:
      "Profesional. Requiere enchufe, toma de agua y pequeña obra (si es suspendido)",
    features:
      "Todo lo anterior + diseño integrado, apertura/cierre automático, auto-descarga, materiales antibacterianos",
    idealFor:
      "Reformas integrales, personas mayores que necesitan máxima accesibilidad y amantes del diseño",
  },
];

export default function GuiaPage() {
  return (
    <>
      {/* 1. Hero de sección: fondo plano para mantener la calma editorial. */}
      <section className="flex h-[50vh] min-h-[380px] items-center justify-center bg-stone-100 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="mx-auto mb-8 h-px w-12 bg-[#7A8B7C]"
            aria-hidden="true"
          ></div>
          <p className="mb-6 text-eyebrow uppercase tracking-wider text-stone-500">
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

      <SiloSubnav siloId="guias" />

      {/* 2. Introducción narrativa y primera cita editorial. */}
      <section className="bg-stone-50 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-balance font-serif text-xl leading-relaxed text-stone-700 md:text-2xl">
            Seguro que alguna vez te has preguntado: ¿por qué si nos manchamos
            las manos de barro usamos agua para lavarnos, pero en la intimidad
            del baño llevamos décadas dependiendo de un trozo de papel seco? Es
            una contradicción curiosa que hemos normalizado. Sin embargo, algo
            está cambiando en los hogares españoles. Un dispositivo que comenzó
            como una excentricidad tecnológica en Asia está transformando para
            siempre uno de los hábitos más cotidianos del ser humano.
          </p>
        </div>

        {/* Pull quote: la revolución silenciosa del dispositivo. */}
        <div className="mx-auto max-w-3xl py-20 text-center">
          <div
            className="mx-auto mb-8 h-px w-12 bg-[#7A8B7C]"
            aria-hidden="true"
          ></div>
          <blockquote className="text-balance font-serif text-3xl italic leading-tight text-stone-800 md:text-4xl">
            “Un dispositivo que comenzó como una excentricidad tecnológica en
            Asia está transformando para siempre uno de los hábitos más
            cotidianos del ser humano.”
          </blockquote>
          <div
            className="mx-auto mt-8 h-px w-12 bg-[#7A8B7C]"
            aria-hidden="true"
          ></div>
        </div>
      </section>

      {/* 3. Qué es un washlet: definición y contexto. */}
      <section id="que-es" className="scroll-mt-24 bg-white px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
            <span
              className="font-serif text-4xl text-[#7A8B7C]"
              aria-hidden="true"
            >
              01
            </span>
            <h2 className="text-balance text-h2 tracking-tight text-stone-900">
              ¿Qué es exactamente un bidé japonés?
            </h2>
          </div>

          {/* Imagen atmosférica: el baño donde vive el inodoro japonés. */}
          <div className="relative mb-12 h-[400px] w-full overflow-hidden rounded-sm md:h-[500px]">
            <Image
              src="/images/atmosfericas/bide-japones-entorno.jpg"
              alt="Baño minimalista con inodoro suspendido de diseño integrado, mueble de madera clara y texturas naturales"
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover object-[50%_70%]"
            />
          </div>

          <div className="font-sans text-base leading-relaxed text-stone-600">
            <p>
              Aunque el fabricante Toto popularizó el término washlet en los
              años 80, hoy utilizamos conceptos como “bidé japonés” o “inodoro
              inteligente” para referirnos a un sanitario que integra avanzadas
              funciones electrónicas para la higiene íntima. En resumen: te lava
              suavemente con un chorro de agua templada en lugar de obligarte a
              usar papel.
            </p>
          </div>
        </div>
      </section>

      {/*
        Ruptura visual entre el "qué es" y los formatos: una pausa de imagen
        que da aire al bloque técnico que viene después. Sin overlay, porque la
        mitad derecha de la foto ya está desenfocada y clara. El bloque estrecha
        su ancho en tablet para que la cita no se salga de esa zona.
      */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/atmosfericas/textura-piedra-travertino.jpg"
            alt="Textura natural de piedra travertino con luz suave"
            fill
            sizes="100vw"
            className="object-cover object-[100%_50%] md:object-[0%_50%]"
          />
        </div>

        <div className="relative z-10 flex h-full items-center justify-end px-6 md:px-16">
          <div className="max-w-md md:max-w-[14rem] lg:max-w-[18rem] xl:max-w-md">
            <div
              className="mb-6 h-px w-12 bg-[#7A8B7C]"
              aria-hidden="true"
            ></div>
            <blockquote className="text-balance font-serif text-2xl italic leading-tight text-stone-800 md:text-3xl">
              “El baño es el último refugio de la intimidad. Merece la misma
              atención que dedicamos a cualquier otro espacio de la casa.”
            </blockquote>
          </div>
        </div>
      </section>

      {/* 4. Los tres formatos en detalle y tabla comparativa final. */}
      <section id="tipos" className="scroll-mt-24 bg-stone-50 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
            <span
              className="font-serif text-4xl text-[#7A8B7C]"
              aria-hidden="true"
            >
              02
            </span>
            <h2 className="text-balance text-h2 tracking-tight text-stone-900">
              Los Tres Formatos: Hay un modelo para cada necesidad
            </h2>
          </div>

          <p className="mb-16 max-w-3xl font-sans text-body-lg leading-relaxed text-stone-700">
            Lo que nadie te cuenta cuando empiezas a buscar información sobre
            inodoros japoneses es que no hace falta arrancar tu váter actual si
            no quieres. El mercado se divide principalmente en tres grandes
            categorías, ordenadas de la solución más sencilla a la más completa.
            ¿Cuál es la tuya?
          </p>

          {detailedFormats.map((format) => (
            <div key={format.number} className="mb-20 last:mb-0">
              <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
                <span
                  className="font-serif text-3xl text-[#7A8B7C]"
                  aria-hidden="true"
                >
                  {format.number}
                </span>
                <h3 className="text-balance text-h3 tracking-tight text-stone-900">
                  {format.title}
                </h3>
              </div>

              {/* Imagen principal del formato: la misma que ilustra la home. */}
              <div className="mb-8 overflow-hidden rounded-sm bg-stone-100">
                <Image
                  src={format.image.src}
                  alt={format.image.alt}
                  width={format.image.width}
                  height={format.image.height}
                  sizes="(min-width: 1072px) 1024px, calc(100vw - 48px)"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              <p className="mb-8 max-w-3xl font-sans text-body-lg leading-relaxed text-stone-700">
                {format.intro}
              </p>

              <div className="grid gap-8 md:grid-cols-3">
                {format.cards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-sm border border-stone-200 bg-white p-8 transition-all duration-300 hover:border-[#7A8B7C] hover:shadow-sm"
                  >
                    <h4 className="mb-4 font-serif text-xl text-stone-900">
                      {card.title}
                    </h4>
                    <p className="font-sans text-body-base text-stone-700">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Tabla comparativa rápida entre los tres formatos. */}
          <div className="mt-24">
            <h3 className="mb-8 text-balance text-h3 tracking-tight text-stone-900">
              <span aria-hidden="true">📊 </span>
              Tabla Comparativa Rápida: ¿Qué formato elegir?
            </h3>
            <p className="mb-8 max-w-3xl font-sans text-body-lg text-stone-700">
              Para que lo veas claro de un solo vistazo, aquí tienes una tabla
              con las diferencias clave en el mercado español actual:
            </p>

            <div className="overflow-x-auto rounded-sm border border-stone-200 bg-white">
              <table className="w-full min-w-[880px] border-collapse">
                <caption className="sr-only">
                  Comparativa de los tres formatos de inodoro inteligente:
                  precio orientativo, necesidad de electricidad, tipo de
                  instalación, funcionalidades principales y perfil ideal
                </caption>
                <thead>
                  <tr className="border-b-2 border-[#7A8B7C]">
                    {comparisonColumns.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="px-6 py-4 text-left align-top font-serif text-lg text-stone-900"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr
                      key={row.format}
                      className={`border-b border-stone-200 last:border-b-0 ${
                        index % 2 === 1 ? "bg-stone-50" : ""
                      }`}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 text-left align-top font-sans text-sm font-medium text-stone-900"
                      >
                        {row.format}
                      </th>
                      <td className="px-6 py-4 align-top font-sans text-sm leading-relaxed text-stone-700">
                        {row.price}
                      </td>
                      <td className="px-6 py-4 align-top font-sans text-sm leading-relaxed text-stone-700">
                        {row.electricity}
                      </td>
                      <td className="px-6 py-4 align-top font-sans text-sm leading-relaxed text-stone-700">
                        {row.installation}
                      </td>
                      <td className="px-6 py-4 align-top font-sans text-sm leading-relaxed text-stone-700">
                        {row.features}
                      </td>
                      <td className="px-6 py-4 align-top font-sans text-sm leading-relaxed text-stone-700">
                        {row.idealFor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 font-sans text-caption text-stone-500 md:hidden">
              Desliza horizontalmente para ver todas las columnas →
            </p>
          </div>
        </div>
      </section>

      {/* 5. La experiencia sensorial, paso a paso. */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 flex flex-col items-center gap-2 md:flex-row md:justify-center md:gap-4">
            <span
              className="font-serif text-4xl text-[#7A8B7C]"
              aria-hidden="true"
            >
              03
            </span>
            <h2 className="text-balance text-h2 tracking-tight text-stone-900">
              ¿Cómo funciona? La experiencia paso a paso
            </h2>
          </div>

          {/* Imagen atmosférica: la luz del shoji introduce la experiencia sensorial. */}
          <div className="relative mb-12 h-[400px] w-full overflow-hidden rounded-sm md:h-[500px]">
            <Image
              src="/images/guia/shoji-luz.jpg"
              alt="Puerta shoji con luz filtrada en una sala japonesa"
              fill
              sizes="(min-width: 768px) 672px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-6 font-serif text-body-lg text-stone-700">
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
              className="inline-block border-b border-[#7A8B7C]/30 pb-1 font-sans text-sm text-stone-700 transition hover:border-[#7A8B7C] hover:text-[#7A8B7C]"
            >
              Leer la guía completa de instalación paso a paso →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Contexto español y pull quote sobre dignidad y autonomía. */}
      <section className="bg-stone-950 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
            <span
              className="font-serif text-4xl text-[#7A8B7C]"
              aria-hidden="true"
            >
              04
            </span>
            <h2 className="text-balance text-h2 tracking-tight text-white">
              ¿Por qué se ha vuelto tan popular en España?
            </h2>
          </div>

          <ol className="space-y-8">
            {reasons.map((reason, index) => (
              <li
                key={reason.title}
                className="flex gap-5 border-t border-[#7A8B7C]/30 pt-8 first:border-t-0 first:pt-0"
              >
                <span
                  className="flex-none font-serif text-lg leading-none text-[#7A8B7C]"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-xl leading-snug text-stone-100">
                    {reason.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-stone-300">
                    {reason.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Pull quote: dignidad, privacidad y autonomía. */}
        <div className="mx-auto max-w-3xl py-20 text-center">
          <div
            className="mx-auto mb-8 h-px w-12 bg-[#7A8B7C]"
            aria-hidden="true"
          ></div>
          <blockquote className="text-balance font-serif text-3xl italic leading-tight text-stone-100 md:text-4xl">
            “Son una herramienta brillante para recuperar la privacidad y
            fomentar la autonomía de personas mayores o con grados de
            dependencia.”
          </blockquote>
          <div
            className="mx-auto mt-8 h-px w-12 bg-[#7A8B7C]"
            aria-hidden="true"
          ></div>
        </div>
      </section>

      {/* 7. Ventajas reales en formato de tarjetas interactivas. */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-2 md:flex-row md:justify-center md:gap-4">
            <span
              className="font-serif text-4xl text-[#7A8B7C]"
              aria-hidden="true"
            >
              05
            </span>
            <h2 className="text-balance text-h2 tracking-tight text-stone-900">
              ¿Qué ventajas reales aporta a tu día a día?
            </h2>
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-center font-sans text-body-lg text-stone-700">
            Si aún te lo estás pensando, estos son los beneficios directos que
            notarás desde el primer uso:
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((advantage) => (
              <article
                key={advantage.title}
                className="rounded-sm border border-stone-200 bg-white p-8 transition-all duration-300 hover:border-[#7A8B7C] hover:shadow-sm"
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

      {/* 8. Mantenimiento: la rutina que mantiene el ritual en el tiempo. */}
      <section
        id="mantenimiento"
        className="scroll-mt-24 bg-stone-100 px-6 py-24"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
            <span
              className="font-serif text-4xl text-[#7A8B7C]"
              aria-hidden="true"
            >
              06
            </span>
            <h2 className="text-balance text-h2 tracking-tight text-stone-900">
              Mantenimiento: poco esfuerzo, mucha vida útil
            </h2>
          </div>

          <p className="mb-12 max-w-3xl font-sans text-body-lg leading-relaxed text-stone-700">
            Un washlet no exige más cuidados que un inodoro convencional, pero
            sí una rutina mínima. Estas tres pautas bastan para conservar la
            presión del agua, la higiene de la boquilla y la fiabilidad del
            sistema durante años.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {maintenanceTips.map((tip) => (
              <article
                key={tip.title}
                className="border-t border-stone-300 pt-6"
              >
                <h3 className="mb-3 font-serif text-h3 tracking-tight text-stone-900">
                  {tip.title}
                </h3>
                <p className="font-sans text-body-base leading-relaxed text-stone-600">
                  {tip.text}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-10 font-sans text-caption text-stone-500">
            Sigue siempre el manual del fabricante: los programas y los filtros
            varían según el modelo y la dureza del agua de tu zona.
          </p>
        </div>
      </section>

      {/* 9. CTA hacia la selección de modelos. */}
      <section className="bg-stone-50 px-6 py-24 text-center">
        <div className="mx-auto max-w-xl">
          <div
            className="mx-auto mb-8 h-px w-12 bg-[#7A8B7C]"
            aria-hidden="true"
          ></div>
          <h2 className="text-balance text-h2 tracking-tight text-stone-900">
            ¿Listo para descubrir el modelo perfecto para ti?
          </h2>
          <Link
            href="/seleccion"
            className="mt-8 inline-block border border-[#7A8B7C] px-6 py-3 text-sm font-medium tracking-wide text-stone-900 transition hover:bg-[#7A8B7C] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7A8B7C]"
          >
            Ver nuestra selección
          </Link>
        </div>
      </section>
    </>
  );
}


