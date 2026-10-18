import type { Metadata } from "next";
import Link from "next/link";

/**
 * La página se renderiza dentro del Layout global definido en
 * `src/app/layout.tsx`. No se vuelve a envolver aquí para no duplicar
 * el header y el footer del magazine.
 */
export const metadata: Metadata = {
  title: "Bienestar y Dignidad | Sui Magazine",
  description:
    "El impacto humano de los inodoros inteligentes: autonomía en la dependencia, alivio para quienes cuidan y eficiencia en residencias y centros sociosanitarios.",
  openGraph: {
    title: "Bienestar y Dignidad | Sui Magazine",
    description:
      "Cuando la tecnología se pone al servicio de las personas: intimidad, autonomía y cuidados más humanos.",
    locale: "es_ES",
    type: "article",
  },
};

/** Los tres beneficios que devuelve el washlet a quien pierde movilidad. */
const autonomyBenefits = [
  {
    title: "Recuperación de la Autonomía",
    text: "Ya no hay que hacer giros dolorosos ni trasladarse al bidé. Vuelven a ser capaces de ir al baño solos.",
  },
  {
    title: "Dignidad e Intimidad",
    text: "El mayor regalo es poder cerrar la puerta del baño. Que nadie tenga que entrar a asistirles.",
  },
  {
    title: "Seguridad total",
    text: "Funciones automáticas como la apertura de la tapa o la luz nocturna previenen accidentes graves en el baño.",
  },
];

/** El alivio concreto que experimenta la persona cuidadora. */
const caregiverCards = [
  {
    title: "Menos esfuerzo físico",
    text: "Se acabaron los malabarismos. Tu familiar se sienta y recibe un lavado suave y secado con aire. Tú ya no tienes que agacharte ni hacer fuerza.",
  },
  {
    title: "Menos desgaste emocional",
    text: "El agua limpia de forma autónoma. Puedes esperar un paso atrás, devolviéndole a tu ser querido su privacidad. El momento del baño deja de ser una invasión.",
  },
];

/** Los tres argumentos que sostienen la adopción en el ámbito sociosanitario. */
const residenceBenefits = [
  {
    title: "Ahorro radical de tiempo y materiales",
    text: "Se elimina drásticamente el consumo de papel y toallitas, liberando minutos cruciales para el personal.",
  },
  {
    title: "Mejora de la salud laboral",
    text: "Al eliminar posturas forzadas para la higiene, se previenen lesiones de espalda en la plantilla.",
  },
  {
    title: "Imagen de innovación",
    text: "Contar con baños de alta tecnología posiciona al centro como referente en cuidados de vanguardia.",
  },
];

export default function BienestarPage() {
  return (
    <>
      {/* 1. Hero de sección: mismo ritmo visual que la guía y la selección. */}
      <section className="flex h-[50vh] min-h-[380px] items-center justify-center bg-stone-100 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-eyebrow uppercase text-stone-400">
            Bienestar · Sui Magazine
          </p>
          <h1 className="text-balance font-serif text-h1 tracking-tight text-stone-900">
            Bienestar y Dignidad
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-body-lg text-stone-600">
            Cuando la tecnología se pone al servicio de las personas. Recupera
            la intimidad, alivia la carga del cuidador y transforma el día a
            día.
          </p>
        </div>
      </section>

      {/* 2. Introducción emocional: el porqué humano de la tecnología. */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="mb-8 text-balance font-serif text-h2 tracking-tight text-stone-900">
          La dignidad de la intimidad
        </h2>
        <p className="font-serif text-xl leading-relaxed text-stone-700 md:text-2xl">
          Hay decisiones que se toman con el corazón. Ver cómo aquellos que nos
          cuidaron pierden su autonomía es un proceso duro. A veces, la
          tecnología no sirve solo para estar más conectados, sino para
          conectar con lo que realmente importa: la dignidad humana. Un
          dispositivo aparentemente sencillo puede transformar por completo la
          rutina más íntima de un hogar.
        </p>
      </section>

      {/* 3. Dependencia y autonomía: lo que se recupera. */}
      <section className="mx-auto max-w-3xl px-6 py-10">
        <h2 className="mb-8 text-balance font-serif text-h2 tracking-tight text-stone-900">
          Recuperando la autonomía
        </h2>

        <p className="font-sans text-body-lg text-stone-600">
          Ir al baño es el acto más privado que realizamos. Cuando la movilidad
          se reduce, este momento íntimo se convierte en un reto físico y
          psicológico. El inodoro japonés lo cambia todo:
        </p>

        <ol className="mt-12 space-y-8">
          {autonomyBenefits.map((benefit, index) => (
            <li
              key={benefit.title}
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
                  {benefit.title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-stone-600">
                  {benefit.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 4. El cuidador: alivio físico y emocional. */}
      <section className="bg-stone-100 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-balance font-serif text-h2 tracking-tight text-stone-900">
            Para ti, que cuidas
          </h2>

          <p className="mb-8 font-sans text-body-lg text-stone-700">
            Cuidar de un familiar es uno de los mayores actos de amor, pero
            también uno de los más agotadores. Acompañar a un ser querido al
            baño suele ser el momento de mayor tensión del día. Instalar un
            inodoro inteligente no va a hacer que tu familiar deje de ser
            dependiente, pero va a eliminar de un plumazo la parte más dura y
            física de la higiene diaria.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {caregiverCards.map((card) => (
              <article key={card.title} className="bg-white p-8 shadow-sm">
                <h3 className="font-serif text-h3 text-stone-900">
                  {card.title}
                </h3>
                <p className="mt-3 font-sans text-body-base text-stone-600">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Residencias y centros sociosanitarios. */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="mb-8 text-balance font-serif text-h2 tracking-tight text-stone-900">
          Eficiencia y dignidad en residencias
        </h2>

        <p className="font-sans text-base leading-relaxed text-stone-700">
          En el sector sociosanitario, el equilibrio entre la viabilidad
          económica y la excelencia en el trato humano es el mayor desafío. La
          adopción de inodoros inteligentes es una innovación de alto impacto:
        </p>

        <ol className="mt-10 space-y-6">
          {residenceBenefits.map((benefit, index) => (
            <li
              key={benefit.title}
              className="flex gap-5 border-t border-stone-200 pt-6 first:border-t-0 first:pt-0"
            >
              <span
                className="flex-none font-serif text-lg leading-none text-stone-400"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="font-sans text-base leading-relaxed text-stone-700">
                <strong className="font-semibold text-stone-800">
                  {benefit.title}:
                </strong>{" "}
                {benefit.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* 6. CTA de cierre: recomendaciones según el perfil de cada hogar. */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-8 text-balance font-serif text-h2 tracking-tight text-stone-900">
            Cada situación es única. Encuentra el modelo que mejor se adapta a
            vuestras necesidades.
          </h2>
          <Link
            href="/seleccion"
            className="inline-block border border-stone-900 px-6 py-3 text-sm font-medium tracking-wide text-stone-900 transition hover:bg-stone-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
          >
            Ver recomendaciones por perfil
          </Link>
        </div>
      </section>
    </>
  );
}

