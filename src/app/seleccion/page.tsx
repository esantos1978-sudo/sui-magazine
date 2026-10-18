import type { Metadata } from "next";
import Link from "next/link";

/**
 * La página se renderiza dentro del Layout global definido en
 * `src/app/layout.tsx`. No se vuelve a envolver aquí para no duplicar
 * el header y el footer del magazine.
 */
export const metadata: Metadata = {
  title: "Ranking 2026: Los Mejores Bidés Japoneses | Sui Magazine",
  description:
    "Análisis riguroso y honesto de los inodoros inteligentes que sí merecen la pena en España: siete modelos comparados por calidad-precio, funcionalidades, materiales y servicio técnico.",
  openGraph: {
    title: "Ranking 2026: Los Mejores Bidés Japoneses | Sui Magazine",
    description:
      "La Selección 2026: siete inodoros inteligentes analizados sin marketing ni promesas vacías.",
    locale: "es_ES",
    type: "article",
  },
};

/** Los cinco criterios editoriales que ordenan el ranking. */
const criteria = [
  {
    title: "Relación calidad-precio",
    text: "No el más barato, sino el más sólido por euro invertido.",
  },
  {
    title: "Funcionalidades reales",
    text: "Valoramos beneficios tangibles frente a marketing.",
  },
  {
    title: "Servicio técnico en España",
    text: "Garantía y recambios locales.",
  },
  {
    title: "Materiales y durabilidad",
    text: "Resinas, válvulas cerámicas, titanio.",
  },
  {
    title: "Opiniones de usuarios reales",
    text: "Tras meses de uso, cuando la novedad ya se ha apagado.",
  },
];

type SelectionProduct = {
  /** Nombre comercial del modelo. */
  name: string;
  /** Eslogan editorial de una línea. */
  tagline: string;
  /** Formato del producto dentro de la familia washlet. */
  type: string;
  /** Precio orientativo en el mercado español. */
  price: string;
  /** Representación visual de la puntuación (estrellas). */
  rating: string;
  /** Puntuación legible para lectores de pantalla. */
  ratingLabel: string;
  /** Punto fuerte principal. */
  best: string;
  /** Limitación o matiz a considerar. */
  consider: string;
  /** Perfil de usuario al que se dirige. */
  idealFor: string;
  /** Reseña editorial de cierre. */
  review: string;
};

/** Los siete modelos que componen el ranking 2026, de mejor a peor valoración. */
const products: SelectionProduct[] = [
  {
    name: "Nashi Aldara iPlus 5",
    tagline: "El inodoro completo más avanzado y equilibrado.",
    type: "Inodoro Completo",
    price: "Desde ~1.690 €",
    rating: "⭐⭐⭐⭐⭐",
    ratingLabel: "5 de 5",
    best: "Inyector de titanio bacteriostático y sistema de lavado ciclónico que ahorra hasta un 70% de agua.",
    consider:
      "Requiere sustituir tu váter actual y una mínima intervención de fontanería.",
    idealFor:
      "Reformas integrales y usuarios que buscan automatización total (“cero contacto”).",
    review:
      "El buque insignia de la marca que lidera el sector en España. Al carecer de cisterna, utiliza un sistema de descarga ciclónica. La tapa se abre por sensor de presencia, cuenta con un mando inalámbrico intuitivo y descarga el agua automáticamente al terminar. Nashi ofrece 5 años de garantía y un excelente servicio técnico en España.",
  },
  {
    name: "eQiik Pro",
    tagline: "La compra inteligente: prestaciones premium a precio imbatible.",
    type: "Inodoro Completo",
    price: "~699 €",
    rating: "⭐⭐⭐⭐½",
    ratingLabel: "4,5 de 5",
    best: "Relación calidad-precio insuperable. Ofrece funciones de inodoros que cuestan el doble.",
    consider:
      "Marca menos conocida que gigantes como Roca, pero respaldada por 20 años de experiencia.",
    idealFor:
      "Quienes quieren dar el salto al inodoro completo sin gastar más de 1.000 €.",
    review:
      "La irrupción de eQiik ha agitado el mercado. Por un precio que habitualmente solo compra una tapa de gama alta, ofrecen un inodoro completo con lavado de agua caliente, asiento calefactado y secado. La versión Pro añade apertura y cierre automáticos.",
  },
  {
    name: "TOTO Neorest",
    tagline: "La máxima expresión del lujo asiático.",
    type: "Inodoro Completo Integrado",
    price: "~2.170 €+",
    rating: "⭐⭐⭐⭐",
    ratingLabel: "4 de 5",
    best: "Obra maestra de la ingeniería. Calidad de materiales extrema y tecnología Dual-Max Cyclone.",
    consider:
      "Distribución y servicio técnico en España prácticamente nulos. Riesgo en soporte postventa.",
    idealFor:
      "Presupuestos sin límite y usuarios sibaritas que exigen la marca original.",
    review:
      "TOTO inventó el concepto en 1980. Cuenta con esmalte SanaGloss, memorias de usuario y diseño inconfundible. Sin embargo, su puntuación baja ligeramente por el contexto español: comprarlo aquí implica asumir riesgos de soporte técnico y precios de importación.",
  },
  {
    name: "Nashi Deluxe Pro",
    tagline: "La tapa inteligente indestructible.",
    type: "Tapa Inteligente",
    price: "~400 € - 900 €",
    rating: "⭐⭐⭐⭐½",
    ratingLabel: "4,5 de 5",
    best: "Fabricada en Resix, material termoendurecido que soporta más de 150 kg de peso.",
    consider: "No incluye apertura automática de la tapa al acercarse.",
    idealFor:
      "Cuidadores, personas de peso elevado, y baños donde se necesite usar la tapa cerrada como asiento.",
    review:
      "La inmensa mayoría de tapas son de plástico ABS y no permiten sentarse encima cerradas. El Nashi Deluxe Pro cambia las reglas al usar Resix, similar a las encimeras de cocina. Incluye secado optimizado (Movdri) y cierre amortiguado.",
  },
  {
    name: "Vogo VB4000 SE",
    tagline: "El rey de las funciones terapéuticas.",
    type: "Tapa Inteligente / Inodoro Avanzado",
    price: "~1.000 € - 1.200 €",
    rating: "⭐⭐⭐⭐",
    ratingLabel: "4 de 5",
    best: "Esterilización por luz ultravioleta (UV) y su exclusivo modo “Turbo Wash”.",
    consider:
      "Construido en plástico ABS, algo más delicado que las resinas termoendurecidas a largo plazo.",
    idealFor:
      "Personas con estreñimiento crónico o necesidades digestivas específicas.",
    review:
      "Procedente de Corea, viene cargado con funciones orientadas a la salud. Su gran baza es la esterilización UV y el modo Turbo Wash, que proyecta un chorro concentrado para estimular y ayudar en problemas de estreñimiento.",
  },
  {
    name: "Xiaomi Smart Toilet Seat",
    tagline: "La puerta de entrada económica.",
    type: "Tapa Inteligente",
    price: "~190 € - 400 €",
    rating: "⭐⭐⭐½",
    ratingLabel: "3,5 de 5",
    best: "Precio muy accesible para iniciarse en el mundo de los bidés japoneses.",
    consider:
      "Materiales básicos y soporte técnico postventa no tan especializado como marcas de sanitarios.",
    idealFor:
      "Pisos de alquiler y usuarios con presupuesto ajustado que quieren probar la tecnología.",
    review:
      "Xiaomi ha democratizado el sector. Ofrece las funcionalidades esenciales: lavado con agua caliente, control de presión y asiento calefactado. Cumple perfectamente su función, aunque no llega a la durabilidad de marcas premium.",
  },
  {
    name: "Brondell Swash S101",
    tagline: "Fiabilidad mecánica absoluta sin enchufes.",
    type: "Accesorio / Tapa Mecánica",
    price: "< 100 €",
    rating: "⭐⭐⭐⭐",
    ratingLabel: "4 de 5",
    best: "Funciona con la presión de la cañería. Cero electrónica equivale a cero averías complejas.",
    consider:
      "El agua sale a temperatura ambiente y carece de secado o asiento calefactado.",
    idealFor:
      "Baños sin enchufe cercano, presupuestos muy reducidos o segundas residencias.",
    review:
      "Va a contracorriente. Utiliza una válvula de cerámica interna para garantizar cientos de miles de ciclos sin fugas. El chorro tiene mucha fuerza. Aunque en invierno el agua sale fría, los usuarios se acostumbran rápido a cambio de una fiabilidad brutal.",
  },
];

export default function SeleccionPage() {
  return (
    <>
      {/* 1. Hero de sección: fondo plano, misma calma editorial que la guía. */}
      <section className="flex h-[50vh] min-h-[380px] items-center justify-center bg-stone-100 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-[0.65rem] uppercase tracking-[0.35em] text-stone-400">
            Selección · Sui Magazine
          </p>
          <h1 className="text-balance font-serif text-5xl leading-tight tracking-tight text-stone-900 md:text-6xl">
            La Selección 2026
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-lg leading-relaxed text-stone-600">
            Análisis riguroso y honesto de los inodoros inteligentes que sí
            merecen la pena en España.
          </p>
        </div>
      </section>

      {/* 2. Criterios editoriales que ordenan el ranking. */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="mb-8 text-balance font-serif text-3xl leading-tight text-stone-900">
          Nuestros criterios de selección
        </h2>

        <ol className="space-y-7">
          {criteria.map((criterion, index) => (
            <li
              key={criterion.title}
              className="flex gap-5 border-t border-stone-200 pt-7 first:border-t-0 first:pt-0"
            >
              <span
                className="flex-none font-serif text-lg leading-none text-stone-400"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="font-sans text-base leading-relaxed text-stone-600">
                <strong className="font-semibold text-stone-800">
                  {criterion.title}.
                </strong>{" "}
                {criterion.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* 3. Ranking: una ficha editorial por modelo. */}
      <section className="mx-auto max-w-4xl px-6 py-10">
        <p className="text-center text-[0.65rem] uppercase tracking-[0.35em] text-stone-400">
          Ranking 2026
        </p>
        <h2 className="mb-16 mt-4 text-balance text-center font-serif text-3xl leading-tight text-stone-900">
          Los 7 mejores modelos del mercado
        </h2>

        <div>
          {products.map((product, index) => (
            <article
              key={product.name}
              className="border-b border-stone-200 py-12 first:pt-0"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:gap-8">
                <span
                  className="flex-none font-serif text-4xl leading-none text-stone-300 sm:w-16 sm:pt-1"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-2xl leading-snug text-stone-900">
                    {product.name}
                  </h3>
                  <p className="mb-6 mt-2 font-sans italic text-stone-500">
                    {product.tagline}
                  </p>

                  <dl className="grid grid-cols-1 gap-x-8 gap-y-5 border-y border-stone-200/80 py-6 sm:grid-cols-2">
                    <div>
                      <dt className="text-[0.6rem] uppercase tracking-[0.25em] text-stone-400">
                        Tipo
                      </dt>
                      <dd className="mt-2 font-sans text-sm leading-relaxed text-stone-700">
                        {product.type}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[0.6rem] uppercase tracking-[0.25em] text-stone-400">
                        Precio orientativo
                      </dt>
                      <dd className="mt-2 font-sans text-sm leading-relaxed text-stone-700">
                        {product.price}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[0.6rem] uppercase tracking-[0.25em] text-stone-400">
                        Puntuación
                      </dt>
                      <dd className="mt-2 font-sans text-sm leading-relaxed text-stone-700">
                        <span role="img" aria-label={product.ratingLabel}>
                          {product.rating}
                        </span>
                      </dd>
                    </div>
                  </dl>

                  <dl className="mt-6 space-y-4 font-sans text-sm leading-relaxed">
                    <div>
                      <dt className="font-bold text-stone-800">Lo mejor:</dt>
                      <dd className="mt-1 text-stone-600">{product.best}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-stone-800">
                        A tener en cuenta:
                      </dt>
                      <dd className="mt-1 text-stone-600">
                        {product.consider}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-bold text-stone-800">Ideal para:</dt>
                      <dd className="mt-1 text-stone-600">
                        {product.idealFor}
                      </dd>
                    </div>
                  </dl>

                  <p className="mt-6 font-sans text-base leading-relaxed text-stone-600">
                    {product.review}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. CTA de cierre: vuelta a la guía de formatos. */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-balance font-serif text-2xl leading-tight text-stone-900">
            ¿Quieres afinar aún más tu búsqueda?
          </h2>
          <p className="mb-8 font-sans leading-relaxed text-stone-600">
            Explora nuestra guía esencial para entender qué formato encaja en tu
            baño antes de decidir.
          </p>
          <Link
            href="/guia"
            className="inline-block border border-stone-900 px-10 py-4 text-[0.65rem] uppercase tracking-[0.28em] text-stone-900 transition-all duration-300 hover:bg-stone-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
          >
            Volver a la Guía
          </Link>
        </div>
      </section>
    </>
  );
}

