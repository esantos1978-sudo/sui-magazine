import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import SiloSubnav from "@/components/SiloSubnav";

/**
 * Sección de estética, tendencias y tecnología del baño.
 *
 * Se renderiza dentro del Layout global definido en `src/app/layout.tsx`,
 * que ya aporta el header, el `<main>` y el footer. Por eso este archivo no
 * vuelve a envolver el contenido en otro `<main>`.
 */
export const metadata: Metadata = {
  alternates: {
    canonical: "/diseno",
  },
  title: "Diseño y Estética del Baño | Sui Magazine",
  description:
    "Tendencias, materiales y integración de tecnología en el baño contemporáneo. Cómo crear espacios serenos con alma y funcionalidad.",
  openGraph: {
    title: "Diseño y Estética del Baño | Sui Magazine",
    description:
      "Tendencias, materiales y integración de tecnología en el baño contemporáneo.",
    locale: "es_ES",
    type: "article",
  },
};

/** Criterio editorial que sostiene la estética de un baño contemporáneo. */
type DesignPrinciple = {
  /** Número que ordena visualmente los principios. */
  number: string;
  /** Título breve del principio. */
  title: string;
  /** Explicación práctica y sensorial. */
  description: string;
};

/** Material noble que aporta textura, temperatura y permanencia al baño. */
type Material = {
  /** Nombre reconocible del material. */
  name: string;
  /** Aplicación y consideraciones prácticas. */
  description: string;
};

/** Tendencia de diseño observada en el baño contemporáneo. */
type Trend = {
  /** Número editorial de la tendencia. */
  number: string;
  /** Nombre de la tendencia. */
  title: string;
  /** Lectura editorial del cambio de hábitos. */
  description: string;
  /** Detalle material o espacial que la hace reconocible. */
  detail: string;
};

/** Recomendación práctica para integrar la tecnología sin ruido visual. */
type TechnologyTip = {
  /** Texto de la recomendación. */
  text: string;
};

/** Artículo relacionado que amplía algún tema de la sección. */
type RelatedArticle = {
  /** Titular completo del artículo. */
  title: string;
  /** Ruta interna hacia la pieza. */
  href: string;
  /** Categoría editorial. */
  category: string;
  /** Entradilla breve. */
  excerpt: string;
  /** Ruta absoluta de la imagen desde `public`. */
  image: string;
  /** Texto alternativo descriptivo. */
  imageAlt: string;
};

/** Los cuatro criterios que estructuran la página. */
const designPrinciples: DesignPrinciple[] = [
  {
    number: "01",
    title: "Luz que acompaña",
    description:
      "La luz natural ordena el espacio y revela la textura de los materiales. En su ausencia, una iluminación cálida y regulable permite pasar de la energía de la mañana a la calma de la noche.",
  },
  {
    number: "02",
    title: "Materia que envejece bien",
    description:
      "La piedra, la madera y la cerámica ganan expresión con el uso. Elegir acabados honestos, resistentes a la humedad y fáciles de mantener es más duradero que perseguir un efecto de temporada.",
  },
  {
    number: "03",
    title: "Tecnología sin protagonismo",
    description:
      "Un asiento templado o una luz nocturna pueden cambiar la experiencia del baño sin llenarlo de pantallas. La mejor tecnología es la que se integra en el gesto y desaparece cuando no hace falta.",
  },
  {
    number: "04",
    title: "Orden que respira",
    description:
      "El almacenamiento bien resuelto reduce el ruido visual y devuelve protagonismo a la luz y al material. Pocas piezas, bien elegidas y en su sitio, transmiten más calma que una superficie llena de objetos.",
  },
];

/** Los tres materiales que sostienen la atmósfera del baño contemporáneo. */
const materials: Material[] = [
  {
    name: "Piedra natural",
    description:
      "Travertino, caliza, mármol mate. La piedra aporta peso visual, frescura táctil y una conexión directa con la naturaleza. Se usa en suelos, paredes y encimeras.",
  },
  {
    name: "Madera tratada",
    description:
      "Roble, teca, cedro. La madera en el baño requiere tratamientos específicos contra la humedad, pero aporta calidez inmediata. Se usa en estanterías, bancos y revestimientos de pared.",
  },
  {
    name: "Cerámica artesanal",
    description:
      "Azulejos hechos a mano, con pequeñas variaciones de tono y textura. La cerámica artesanal rompe la monotonía industrial y aporta carácter único a cada espacio.",
  },
];

/** Tres tendencias que están redefiniendo la atmósfera del baño. */
const trends: Trend[] = [
  {
    number: "01",
    title: "El baño como habitación",
    description:
      "El espacio deja de organizarse solo alrededor de los sanitarios. La luz, una banqueta, una planta o una silla empiezan a formar parte del ritual diario.",
    detail:
      "Más espacio para el cuerpo y menos pasillo funcional: el baño se habita, no solo se utiliza.",
  },
  {
    number: "02",
    title: "La pátina como valor",
    description:
      "Frente al acabado impoluto que lo esconde todo, crece el interés por los materiales que muestran el paso del tiempo sin perder prestaciones.",
    detail:
      "Piedra sin pulir, cal, madera aceitada y juntas cálidas construyen una elegancia menos rígida.",
  },
  {
    number: "03",
    title: "Menos interfaz, más gesto",
    description:
      "Los mandos se reducen, se colocan donde la mano los encuentra y se vuelven parte del paisaje. La automatización se juzga por su silencio, no por su exhibición.",
    detail:
      "La tecnología madura cuando no necesita un manual visible para resultar natural.",
  },
];

/** Consejos para que la tecnología acompañe sin romper el diseño. */
const technologyTips: TechnologyTip[] = [
  {
    text: "Elige inodoros con líneas limpias y sin botones visibles en la porcelana.",
  },
  {
    text: "Empotra la grifería en la pared para liberar espacio visual.",
  },
  {
    text: "Usa iluminación indirecta (tiras LED bajo encimeras, focos empotrados) en lugar de lámparas decorativas.",
  },
  {
    text: "Gestiona los cables con canaletas del mismo color que la pared o el suelo.",
  },
];

/** Lecturas que conectan estética, producto y arquitectura. */
const relatedArticles: RelatedArticle[] = [
  {
    title:
      "El baño invisible: tu inodoro es la mayor decisión ecológica de tu hogar",
    href: "/articulos/bide-japones-sostenibilidad",
    category: "Diseño consciente",
    excerpt:
      "Cómo el inodoro inteligente reduce papel, agua y residuos sin renunciar a una atmósfera cuidada.",
    image: "/images/articulos/sostenibilidad.jpg",
    imageAlt:
      "Baño de materiales naturales con lavabo de piedra y plantas",
  },
  {
    title: "La tapa inteligente: transformar tu baño sin obras",
    href: "/articulos/tapa-inteligente",
    category: "Tecnología",
    excerpt:
      "Materiales, calentamiento y modelos para integrar la higiene japonesa sin reformar el cuarto de baño.",
    image: "/images/articulos/tapa-inteligente.jpg",
    imageAlt:
      "Inodoro con tapa inteligente en un baño de piedra y madera",
  },
  {
    title: "Adaptando el bidé a tu baño español",
    href: "/articulos/bano-espanol-adaptaciones",
    category: "Arquitectura",
    excerpt:
      "Cal, enchufes y cisternas empotradas: soluciones reales para que el diseño y la instalación se encuentren.",
    image: "/images/guia/bano_tradicional.jpg",
    imageAlt:
      "Baño japonés tradicional con ofuro de madera y luz natural",
  },
];

export default function DisenoPage() {
  return (
    <>
      {/* 1. Hero cinematográfico: imagen a sangre, overlay y texto claro. */}
      <section className="relative flex h-[60vh] min-h-[400px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bathroom.jpg"
            alt="Baño minimalista con luz natural y materiales nobles"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-stone-950/60"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <div
            className="mx-auto mb-8 h-px w-12 bg-[#7A8B7C]"
            aria-hidden="true"
          />
          <p className="font-sans text-eyebrow uppercase tracking-wider text-stone-300">
            Diseño
          </p>
          <h1 className="mb-6 mt-4 text-balance font-serif text-h1 tracking-tight text-white">
            El baño como santuario
          </h1>
          <p className="font-sans text-body-lg leading-relaxed text-stone-200">
            Donde la tecnología se integra sin ruido y los materiales nobles
            crean espacios de calma.
          </p>
        </div>
      </section>

      <SiloSubnav siloId="diseno" />

      {/* 2. Introducción editorial: la estética del silencio como punto de partida. */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex items-center gap-4">
            <span
              className="font-serif text-4xl text-[#7A8B7C]"
              aria-hidden="true"
            >
              01
            </span>
            <h2 className="font-serif text-h2 tracking-tight text-stone-900">
              La estética del silencio
            </h2>
          </div>
          <p className="mb-6 font-sans text-body-base leading-relaxed text-stone-700">
            El diseño contemporáneo del baño ha abandonado la ostentación. Ya no
            se trata de dorados, mármoles brillantes ni accesorios cromados. La
            tendencia actual apunta hacia el lujo silencioso: materiales mate,
            líneas limpias y una paleta cromática que evoca la tierra, la piedra
            y la madera natural.
          </p>
          <p className="font-sans text-body-base leading-relaxed text-stone-700">
            El baño japonés ha sido clave en esta transformación. Su filosofía
            wabi-sabi —la belleza de la imperfección y la impermanencia— ha
            enseñado al diseño occidental que un espacio no necesita ser
            perfecto para ser hermoso. Una cerámica con textura, una madera con
            vetas visibles, una piedra con pequeñas irregularidades: todo eso
            aporta alma.
          </p>
        </div>
      </section>

      {/* 3. Materiales nobles: la materia como generadora de atmósfera. */}
      <section id="materiales" className="scroll-mt-24 bg-stone-50 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex items-center gap-4">
            <span
              className="font-serif text-4xl text-[#7A8B7C]"
              aria-hidden="true"
            >
              02
            </span>
            <h2 className="font-serif text-h2 tracking-tight text-stone-900">
              Materiales nobles
            </h2>
          </div>
          <p className="mb-8 font-sans text-body-base leading-relaxed text-stone-700">
            Los materiales que definen el baño contemporáneo son aquellos que
            envejecen con dignidad. No buscan el brillo del primer día, sino la
            pátina del uso.
          </p>

          <div className="space-y-8">
            {materials.map((material) => (
              <article
                key={material.name}
                className="border-t border-stone-200 pt-6"
              >
                <h3 className="mb-3 font-serif text-h3 tracking-tight text-stone-900">
                  {material.name}
                </h3>
                <p className="font-sans text-body-base leading-relaxed text-stone-700">
                  {material.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Tecnología integrada: funcionalidad visible, tecnología discreta. */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex items-center gap-4">
            <span
              className="font-serif text-4xl text-[#7A8B7C]"
              aria-hidden="true"
            >
              03
            </span>
            <h2 className="text-balance font-serif text-h2 tracking-tight text-stone-900">
              Integrar tecnología sin romper el diseño
            </h2>
          </div>
          <p className="mb-6 font-sans text-body-base leading-relaxed text-stone-700">
            El mayor desafío del baño contemporáneo es integrar la tecnología
            (grifería termostática, inodoros inteligentes, iluminación LED) sin
            que el espacio parezca una cabina de avión.
          </p>
          <p className="mb-8 font-sans text-body-base leading-relaxed text-stone-700">
            La clave está en la invisibilidad. Los mejores diseños ocultan la
            tecnología: grifos empotrados en la pared, cisternas detrás de
            paneles, cables gestionados con canalizaciones discretas. El
            usuario debe sentir la funcionalidad, no verla.
          </p>

          <div className="border-l-4 border-[#7A8B7C] bg-stone-50 p-6">
            <h3 className="mb-3 font-serif text-xl text-stone-900">
              Consejos prácticos
            </h3>
            <ul className="space-y-3 font-sans text-body-base text-stone-700">
              {technologyTips.map((tip) => (
                <li key={tip.text} className="flex gap-3">
                  <span className="text-[#7A8B7C]" aria-hidden="true">
                    →
                  </span>
                  <span>{tip.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/funcionalidades"
            className="mt-8 inline-block border-b border-stone-900 pb-1 font-sans text-sm text-stone-900 transition-all hover:border-stone-600 hover:text-stone-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
          >
            Conocer las funciones clave <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* 5. Principios de diseño: cuatro decisiones que sostienen el espacio. */}
      <section className="bg-stone-100 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div
              className="mb-6 h-px w-12 bg-[#7A8B7C]"
              aria-hidden="true"
            />
            <p className="font-sans text-eyebrow uppercase text-stone-500">
              Criterios
            </p>
            <h2 className="mb-6 mt-4 text-balance font-serif text-h2 tracking-tight text-stone-900">
              Cuatro decisiones que cambian un baño
            </h2>
            <p className="font-sans text-body-lg leading-relaxed text-stone-600">
              No hay un estilo único para crear un espacio sereno. Hay
              decisiones que se repiten cuando el objetivo es que el baño
              funcione bien y siga teniendo sentido dentro de diez años.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {designPrinciples.map((principle) => (
              <article
                key={principle.number}
                className="border-t border-stone-300 pt-6 transition-colors duration-300 hover:border-[#7A8B7C]"
              >
                <span
                  className="font-serif text-4xl text-stone-400"
                  aria-hidden="true"
                >
                  {principle.number}
                </span>
                <h3 className="mt-4 font-serif text-h3 tracking-tight text-stone-900">
                  {principle.title}
                </h3>
                <p className="mt-3 max-w-md font-sans text-body-base leading-relaxed text-stone-600">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Cita editorial: el buen diseño se sugiere, no se impone. */}
      <section className="bg-stone-50 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="mx-auto mb-8 h-px w-12 bg-[#7A8B7C]"
            aria-hidden="true"
          />
          <blockquote className="mb-8 text-balance font-serif text-3xl italic leading-tight text-stone-800 md:text-4xl">
            “El buen diseño no se impone. Se sugiere.”
          </blockquote>
          <div
            className="mx-auto h-px w-12 bg-[#7A8B7C]"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* 7. Tendencias: cambios de uso antes que dictado de estilo. */}
      <section id="tendencias" className="scroll-mt-24 bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div
              className="mb-6 h-px w-12 bg-[#7A8B7C]"
              aria-hidden="true"
            />
            <p className="font-sans text-eyebrow uppercase text-stone-500">
              Tendencias
            </p>
            <h2 className="mb-6 mt-4 text-balance font-serif text-h2 tracking-tight text-stone-900">
              Tres tendencias que ya se sienten en casa
            </h2>
            <p className="font-sans text-body-lg leading-relaxed text-stone-600">
              Más que una estética concreta, lo que está cambiando es la forma
              de usar el baño. Estas tres ideas aparecen en proyectos muy
              distintos porque responden a necesidades reales.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {trends.map((trend) => (
              <article
                key={trend.number}
                className="border-t border-stone-300 pt-6"
              >
                <span
                  className="font-serif text-4xl text-stone-400"
                  aria-hidden="true"
                >
                  {trend.number}
                </span>
                <h3 className="mt-4 font-serif text-h3 tracking-tight text-stone-900">
                  {trend.title}
                </h3>
                <p className="mt-3 font-sans text-body-base leading-relaxed text-stone-600">
                  {trend.description}
                </p>
                <p className="mt-4 border-t border-stone-200 pt-4 font-sans text-sm leading-relaxed text-stone-500">
                  {trend.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Lecturas relacionadas: diseño, tecnología y arquitectura. */}
      <section className="bg-stone-100 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 border-b border-stone-300 pb-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="font-sans text-eyebrow uppercase text-stone-500">
                Lecturas relacionadas
              </p>
              <h2 className="mt-4 text-balance font-serif text-h2 tracking-tight text-stone-900">
                Ideas para seguir explorando
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-block border-b border-stone-300 pb-1 font-sans text-sm text-stone-600 transition hover:border-stone-900 hover:text-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
            >
              Ver todos los artículos <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {relatedArticles.map((article) => (
              <article key={article.href} className="group">
                <Link
                  href={article.href}
                  className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
                >
                  <div className="mb-6 overflow-hidden bg-stone-200">
                    <Image
                      src={article.image}
                      alt={article.imageAlt}
                      width={800}
                      height={600}
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <p className="font-sans text-eyebrow uppercase text-stone-500">
                    {article.category}
                  </p>
                  <h3 className="mb-3 mt-4 text-balance font-serif text-h3 tracking-tight text-stone-900 transition-colors duration-300 group-hover:text-stone-600">
                    {article.title}
                  </h3>
                  <p className="mb-6 font-sans text-body-base leading-relaxed text-stone-600">
                    {article.excerpt}
                  </p>
                  <span className="inline-block border-b border-stone-900 pb-1 font-sans text-sm text-stone-900 transition-all group-hover:border-stone-600 group-hover:text-stone-600">
                    Leer artículo <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA final: de la inspiración a una decisión informada. */}
      <section className="bg-stone-50 px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div
            className="mx-auto mb-8 h-px w-12 bg-[#7A8B7C]"
            aria-hidden="true"
          />
          <p className="font-sans text-eyebrow uppercase text-stone-500">
            Del deseo a la decisión
          </p>
          <h2 className="mb-6 mt-4 text-balance font-serif text-h2 tracking-tight text-stone-900">
            La estética también se elige con criterio
          </h2>
          <p className="mb-8 font-sans text-body-base leading-relaxed text-stone-600">
            Si buscas materiales, funciones o un modelo concreto, estas dos
            páginas te ayudan a pasar de la inspiración a una decisión bien
            informada.
          </p>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link
              href="/seleccion"
              className="inline-block border border-stone-900 px-6 py-3 text-sm font-medium tracking-wide text-stone-900 transition hover:bg-stone-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
            >
              Ver la selección
            </Link>
            <Link
              href="/guia"
              className="inline-block border-b border-stone-300 pb-1 font-sans text-sm text-stone-600 transition hover:border-stone-900 hover:text-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
            >
              Volver a la guía
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
