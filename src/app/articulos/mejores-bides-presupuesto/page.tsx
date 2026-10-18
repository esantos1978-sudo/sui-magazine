import type { Metadata } from "next";
import Link from "next/link";

/**
 * El artículo se renderiza dentro del Layout global definido en
 * `src/app/layout.tsx`. No se vuelve a envolver aquí para no duplicar
 * el header y el footer del magazine.
 */
export const metadata: Metadata = {
  title:
    "Mejores bidés japoneses por presupuesto (2026) | Sui Magazine",
  description:
    "Guía honesta para elegir el mejor bidé japonés según tu presupuesto. Desde opciones mecánicas por menos de 100€ hasta el lujo asiático.",
};

/** Cada franja de precio reúne la recomendación y sus contrapartidas. */
type BudgetTier = {
  /** Rango de precio que da título a la franja. */
  price: string;
  /** Idea que resume la franja en una línea. */
  concept: string;
  /** Qué puede esperarse de forma realista en ese rango. */
  expect: string;
  /** Modelo recomendado, en negrita al renderizar. */
  best: string;
  /** Matices, precio concreto o alternativas del modelo. */
  bestDetail: string;
  /** Beneficios que se obtienen. */
  gains: string;
  /** Qué se deja atrás a cambio del precio. */
  sacrifices: string;
};

/** Las cinco franjas de presupuesto, de la más económica a la más alta. */
const budgetTiers: BudgetTier[] = [
  {
    price: "Menos de 100 €",
    concept: "La entrada al mundo del lavado con agua.",
    expect:
      "Tapas o accesorios mecánicos. Funcionan con la presión del agua, sin enchufes.",
    best: "Brondell Swash S101",
    bestDetail:
      "(válvula de cerámica interna, fiabilidad total). Alternativa: Samodra.",
    gains: "Limpieza potente, sin obras ni electricista.",
    sacrifices:
      "Confort. El agua sale a temperatura ambiente (fría en invierno), sin asiento calefactado ni secado.",
  },
  {
    price: "De 100 € a 300 €",
    concept: "Tus primeros pasos en la gama inteligente.",
    expect:
      "Asientos electrónicos básicos con enchufe 220V. Funciones de confort estándar.",
    best: "Xiaomi Smart Toilet Seat.",
    bestDetail: "",
    gains:
      "El salto al confort real (agua caliente, asiento calefactado, control de presión).",
    sacrifices:
      "Plásticos ABS básicos (delicados con el calor) y servicio técnico postventa menos especializado en España.",
  },
  {
    price: "De 300 € a 600 €",
    concept: "Tapas premium para no pensar en obras.",
    expect:
      "Asientos tecnológicos con materiales superiores y soporte técnico real en España.",
    best: "Nashi Deluxe Pro.",
    bestDetail: "Alternativa: Nashi iSmart Pro o Roca Multiclean.",
    gains:
      "Durabilidad extrema. La Nashi Deluxe Pro usa Resix (soporta >150 kg, puedes sentarte en la tapa cerrada). Secado avanzado y 5 años de garantía.",
    sacrifices:
      "Sigues teniendo “solo” una tapa. El diseño es algo más abultado que un inodoro completo y debes tirar de la cadena a mano.",
  },
  {
    price: "De 600 € a 1.000 €",
    concept: "El inodoro completo a precio de derribo.",
    expect:
      "Inodoros japoneses completos (cerámica con tecnología integrada). Retiras el retrete viejo y pones uno nuevo.",
    best: "eQiik Pro (699 €) o eQiik base (599 €).",
    bestDetail: "Alternativa: Nashi Yaiza Pro.",
    gains:
      "La mejor relación calidad-precio-servicio. Inodoro completo, sin tuberías a la vista, apertura automática (en el Pro) y servicio técnico nacional.",
    sacrifices:
      "Acabados hiper-premium (no tendrás inyectores de titanio ni descargas ciclónicas revolucionarias).",
  },
  {
    price: "Más de 1.000 €",
    concept: "El lujo asiático total (Zero Contact).",
    expect:
      "Inodoros sin cisterna tradicional, materiales antibacterianos y automatización total.",
    best: "Nashi Aldara iPlus 5 (1.690 €).",
    bestDetail:
      "Alternativa: Nashi iAnna (3.500 €) o TOTO Neorest (2.170 €).",
    gains:
      "La experiencia definitiva. Descarga ciclónica (ahorra 70% agua), apertura por sensor, inyector de titanio, app móvil.",
    sacrifices:
      "Inversión económica considerable. Si eliges TOTO, sacrificas soporte técnico en España.",
  },
];

export default function MejoresBidesPresupuestoPage() {
  return (
    <>
      {/* 1. Hero del artículo: mismo ritmo que la guía de instalación. */}
      <section className="flex h-[40vh] min-h-[340px] items-center justify-center bg-stone-100 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-wider text-stone-500">
            Guía de compra · Sui Magazine
          </p>
          <h1 className="mb-4 text-balance font-serif text-4xl leading-tight tracking-tight text-stone-900 md:text-5xl">
            Mejores bidés japoneses por presupuesto
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-lg leading-relaxed text-stone-600">
            No todo el mundo tiene el mismo presupuesto, pero todos merecen
            disfrutar de la higiene con agua. Te decimos exactamente qué
            comprar con tu dinero.
          </p>
        </div>
      </section>

      {/* 2. Introducción: las reglas del juego de esta guía. */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="font-serif text-xl leading-relaxed text-stone-700">
          Vamos a ser directos y prácticos. Hemos organizado el mercado actual
          en cinco franjas de precio. En cada una te decimos qué puedes esperar
          de forma realista, cuál es nuestra principal recomendación, qué ganas
          y qué estás sacrificando por ese precio.
        </p>
      </section>

      {/* 3. Las cinco franjas de presupuesto. */}
      {budgetTiers.map((tier, index) => (
        <section
          key={tier.price}
          className={`mx-auto max-w-3xl px-6 py-12${
            index === 0 ? "" : " border-t border-stone-200 pt-12"
          }`}
        >
          <p className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-stone-400">
            Franja {String(index + 1).padStart(2, "0")}
          </p>
          <h2 className="mb-2 font-serif text-3xl leading-tight text-stone-900">
            {tier.price}
          </h2>
          <p className="mb-6 font-sans italic text-stone-500">
            {tier.concept}
          </p>

          <p className="mb-6 font-sans leading-relaxed text-stone-700">
            {tier.expect}
          </p>

          <p className="mb-6 font-sans leading-relaxed text-stone-700">
            <span className="text-stone-500">Mejor opción: </span>
            <strong className="font-bold text-stone-900">{tier.best}</strong>
            {tier.bestDetail ? <> {tier.bestDetail}</> : null}
          </p>

          <dl className="grid grid-cols-1 gap-6 border-t border-stone-200 pt-6 md:grid-cols-2">
            <div>
              <dt className="font-sans font-bold text-stone-800">
                Lo que obtienes:
              </dt>
              <dd className="mt-2 font-sans text-sm leading-relaxed text-stone-600">
                {tier.gains}
              </dd>
            </div>
            <div>
              <dt className="font-sans font-bold text-stone-800">
                Lo que sacrificas:
              </dt>
              <dd className="mt-2 font-sans text-sm leading-relaxed text-stone-600">
                {tier.sacrifices}
              </dd>
            </div>
          </dl>
        </section>
      ))}

      {/* 4. CTA de cierre: del presupuesto al ranking completo. */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-balance font-serif text-2xl leading-tight text-stone-900">
            ¿Ya tienes claro tu presupuesto?
          </h2>
          <p className="mb-8 font-sans leading-relaxed text-stone-600">
            Si quieres comparar modelos específicos, funcionalidades o perfiles
            de usuario, visita nuestro ranking completo.
          </p>
          <Link
            href="/seleccion"
            className="inline-block border border-stone-900 px-10 py-4 text-[0.65rem] uppercase tracking-[0.28em] text-stone-900 transition-all duration-300 hover:bg-stone-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
          >
            Ver el Ranking 2026
          </Link>
        </div>
      </section>
    </>
  );
}

