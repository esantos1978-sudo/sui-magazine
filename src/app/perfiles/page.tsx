import type { Metadata } from "next";
import Link from "next/link";

/**
 * La página se renderiza dentro del Layout global definido en
 * `src/app/layout.tsx`. No se vuelve a envolver aquí para no duplicar
 * el header y el footer del magazine.
 */
export const metadata: Metadata = {
  title: "Qué bidé japonés elegir según tu familiar | Sui Magazine",
  description:
    "Guía para elegir el inodoro inteligente perfecto para personas mayores, silla de ruedas, deterioro cognitivo o cuidadores. Modelos recomendados.",
  openGraph: {
    title: "Qué bidé japonés elegir según tu familiar | Sui Magazine",
    description:
      "Guía para elegir el inodoro inteligente perfecto para personas mayores, silla de ruedas, deterioro cognitivo o cuidadores. Modelos recomendados.",
    locale: "es_ES",
    type: "article",
  },
};

/** Perfil de usuario y recomendación editorial asociada. */
type Profile = {
  label: string;
  title: string;
  situation: string;
  recommendation: string;
  functions: string[];
  models: string;
};

/** Fila resumida de la comparativa final. */
type SummaryRow = {
  profile: string;
  need: string;
  keyFunction: string;
  model: string;
};

/** Los cinco perfiles que estructuran la guía de selección. */
const profiles: Profile[] = [
  {
    label: "Perfil 01",
    title: "Persona mayor autónoma con poca flexibilidad",
    situation:
      "Vive solo/a, tiene artrosis o dolor lumbar. Le cuesta girarse o flexionar las rodillas, pero mantiene su lucidez.",
    recommendation:
      "Necesita un modelo que minimice los movimientos de flexión y torsión, con un mando muy intuitivo.",
    functions: [
      "Apertura y cierre automático (para no agacharse)",
      "Descarga automática (al levantarse)",
      "Mando a distancia de pared (para no girar el tronco)",
      "Asiento calefactado (relaja la musculatura)",
    ],
    models: "Nashi Aldara iPlus 5, eQiik Pro",
  },
  {
    label: "Perfil 02",
    title: "Persona en silla de ruedas con transferencia",
    situation:
      "Requiere silla de ruedas y realiza transferencias laterales al inodoro, a veces con cierto impacto.",
    recommendation:
      "Prioridad absoluta al espacio de maniobra, la altura exacta y la resistencia extrema de los materiales.",
    functions: [
      "Formato suspendido (si hay obra, para igualar altura)",
      "Tapa de ultra-resistencia (material termoendurecido)",
      "Mandos laterales fijos o inalámbricos robustos",
    ],
    models: "Nashi Eos Pro (suspendido), Nashi Deluxe Pro (tapa en Resix)",
  },
  {
    label: "Perfil 03",
    title: "Persona con deterioro cognitivo",
    situation:
      "Principios de Alzheimer o demencia. Tocar botones le genera confusión. A veces olvida tirar de la cadena.",
    recommendation:
      "Buscamos un modelo “Zero Touch” (cero contacto). El inodoro debe trabajar por la persona de forma inteligente.",
    functions: [
      "Automatización total (detecta presencia, abre, y tira de la cadena al levantarse)",
      "Lavado unificado (el cuidador inicia el ciclo desde fuera)",
      "Luz nocturna de orientación",
    ],
    models: "Nashi Compact Pro, Grohe Sensia",
  },
  {
    label: "Perfil 04",
    title: "Persona encamada o con asistencia total",
    situation:
      "Movilidad nula. El cuidador realiza todo el proceso. Suelen aparecer problemas crónicos de estreñimiento.",
    recommendation:
      "Facilitar el trabajo del cuidador y aliviar problemas intestinales con funciones terapéuticas y máxima esterilización.",
    functions: [
      "Función Enema / Turbo Wash (para estreñimiento)",
      "Esterilización UV (evita infección cruzada)",
      "Materiales bacteriostáticos (cánulas de titanio)",
    ],
    models: "Vogo VB4000 SE, Nashi iAnna",
  },
  {
    label: "Perfil 05",
    title: "Cuidador profesional o persona de peso elevado",
    situation:
      "El cuidador necesita sentarse en el baño para asistir (secar pelo, cortar uñas) o el usuario tiene sobrepeso y teme romper asientos estándar.",
    recommendation:
      "Solidez y durabilidad por encima de funciones estéticas.",
    functions: [
      "Resistencia superior a 150 kg",
      "Tapa apta para sentarse estando cerrada (excepcional en el mercado)",
    ],
    models: "Nashi Deluxe Pro (material Resix indestructible)",
  },
];

/** Datos condensados para la tabla comparativa. */
const summaryRows: SummaryRow[] = [
  {
    profile: "Persona mayor autónoma con poca flexibilidad",
    need: "Reducir flexión y torsión",
    keyFunction: "Apertura, descarga y mando automáticos",
    model: "Nashi Aldara iPlus 5 · eQiik Pro",
  },
  {
    profile: "Persona en silla de ruedas con transferencia",
    need: "Espacio, altura y resistencia",
    keyFunction: "Formato suspendido y tapa ultra-resistente",
    model: "Nashi Eos Pro · Nashi Deluxe Pro",
  },
  {
    profile: "Persona con deterioro cognitivo",
    need: "Automatización sin botones",
    keyFunction: "Ciclo Zero Touch y luz nocturna",
    model: "Nashi Compact Pro · Grohe Sensia",
  },
  {
    profile: "Persona encamada o con asistencia total",
    need: "Alivio intestinal y esterilización",
    keyFunction: "Turbo Wash / enema y UV",
    model: "Vogo VB4000 SE · Nashi iAnna",
  },
  {
    profile: "Cuidador profesional o persona de peso elevado",
    need: "Solidez y durabilidad",
    keyFunction: "Más de 150 kg y tapa usable cerrada",
    model: "Nashi Deluxe Pro",
  },
];

/** Recomendaciones prácticas para cerrar la decisión. */
const finalAdvice = [
  "Mide con precisión: Si optas por una tapa inteligente, saca el metro. Mide la distancia entre los tornillos y hasta el borde frontal.",
  "Consulta con su terapeuta ocupacional: Conocen exactamente sus capacidades de movilidad y te dirán si es mejor un mando grande o un control lateral.",
  "Valora el servicio técnico local: Huye de importaciones sin soporte en España. Busca marcas con garantía y recambios nacionales.",
  "Infórmate sobre ayudas económicas: Revisa en tu ayuntamiento las ayudas para la 'Adecuación Funcional del Hogar' para personas dependientes.",
];

/** Pregunta y respuesta de la sección de dudas. */
type Faq = {
  question: string;
  answer: string;
};

/** Dudas habituales al elegir un modelo según el perfil del usuario. */
const faqs: Faq[] = [
  {
    question: "¿Puedo combinar un asiento inteligente con un alza de baño?",
    answer:
      "Técnicamente sí, pero requiere precaución. Asegúrate de que el alza permita anclar las bisagras con seguridad. Lo ideal es un inodoro suspendido que permita elegir la altura en la obra.",
  },
  {
    question:
      "¿Qué hago si mi familiar necesita varias funciones a la vez (ej. demencia y silla de ruedas)?",
    answer:
      "Apuesta por inodoros completos de gama alta que integren todas las soluciones, como el Nashi iAnna.",
  },
  {
    question: "¿Hay modelos aptos y seguros para niños con discapacidad?",
    answer:
      "Sí. Permiten regular la posición del inyector y la presión. Consulta con su terapeuta ocupacional para elegir los controles más adecuados.",
  },
  {
    question: "¿Los mandos a distancia se pueden fijar a la pared?",
    answer:
      "Sí, es la forma recomendada. La mayoría incluyen una base magnética para atornillar o pegar a los azulejos.",
  },
  {
    question: "¿Qué pasa si se va la luz en casa?",
    answer:
      "El inodoro sigue funcionando como un váter normal. Podrás tirar de la cadena de forma manual.",
  },
];

export default function PerfilesPage() {
  return (
    <>
      {/* 1. Hero: presentación del criterio humano de la guía. */}
      <section className="flex h-[50vh] min-h-[380px] items-center justify-center bg-stone-100 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-sans text-sm uppercase tracking-wider text-stone-500">
            Guía de perfiles · Sui Magazine
          </p>
          <h1 className="mb-4 text-balance font-serif text-4xl leading-tight tracking-tight text-stone-900 md:text-5xl">
            El modelo perfecto para cada necesidad
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-lg leading-relaxed text-stone-600">
            Cada persona es un mundo. Te ayudamos a encontrar el bidé japonés
            que mejor se adapta a vuestra situación.
          </p>
        </div>
      </section>

      {/* 2. Introducción: del deseo de dignidad a la decisión práctica. */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="font-serif text-xl leading-relaxed text-stone-700">
          Como cuidadores o familiares, ya sabéis que la higiene con agua aporta
          dignidad, pero ahora toca tomar una decisión práctica. No todos los
          baños son iguales, ni todas las personas tienen las mismas
          dificultades físicas o cognitivas. Mi objetivo no es venderos el modelo
          más caro, sino el que va a solucionar vuestro problema real en el día a
          día. Vamos a analizar los perfiles más habituales para que podáis
          identificar el vuestro.
        </p>
      </section>

      {/* 3. Los cinco perfiles: situación, recomendación y modelos. */}
      {profiles.map((profile, index) => (
        <section
          key={profile.title}
          className={`mx-auto max-w-3xl px-6 py-16 ${
            index > 0 ? "border-t border-stone-200 pt-16" : ""
          }`}
        >
          <p className="mb-4 font-sans text-xs uppercase tracking-widest text-stone-400">
            {profile.label}
          </p>
          <h2 className="mb-6 text-balance font-serif text-3xl leading-tight text-stone-900">
            {profile.title}
          </h2>
          <p className="mb-8 font-sans italic leading-relaxed text-stone-500">
            {profile.situation}
          </p>
          <p className="mb-8 font-sans text-lg font-medium leading-relaxed text-stone-800">
            {profile.recommendation}
          </p>

          <h3 className="mb-4 font-sans text-xs uppercase tracking-widest text-stone-400">
            Funciones clave a buscar
          </h3>
          <ul className="mb-8 space-y-2 font-sans text-stone-700">
            {profile.functions.map((feature) => (
              <li key={feature} className="flex gap-3 leading-relaxed">
                <span
                  className="mt-2 h-1 w-1 flex-none rounded-full bg-stone-400"
                  aria-hidden="true"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-sm border-l-4 border-stone-400 bg-stone-50 p-6 font-sans text-stone-800">
            <p>
              <span className="font-semibold">Modelos recomendados:</span>{" "}
              {profile.models}.
            </p>
          </div>
        </section>
      ))}

      {/* 4. Tabla resumen: comparación rápida de los cinco perfiles. */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="mb-12 text-center font-serif text-3xl leading-tight text-stone-900">
          Resumen rápido por perfiles
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse">
            <caption className="sr-only">
              Comparativa de perfiles, necesidades, funciones clave y modelos
              recomendados
            </caption>
            <thead>
              <tr>
                <th
                  scope="col"
                  className="border-b-2 border-stone-800 py-4 pr-6 text-left font-serif text-lg text-stone-900"
                >
                  Perfil
                </th>
                <th
                  scope="col"
                  className="border-b-2 border-stone-800 py-4 pr-6 text-left font-serif text-lg text-stone-900"
                >
                  Necesidad Principal
                </th>
                <th
                  scope="col"
                  className="border-b-2 border-stone-800 py-4 pr-6 text-left font-serif text-lg text-stone-900"
                >
                  Función Clave
                </th>
                <th
                  scope="col"
                  className="border-b-2 border-stone-800 py-4 text-left font-serif text-lg text-stone-900"
                >
                  Modelo Recomendado
                </th>
              </tr>
            </thead>
            <tbody>
              {summaryRows.map((row) => (
                <tr key={row.profile}>
                  <th
                    scope="row"
                    className="border-b border-stone-200 py-4 pr-6 text-left align-top font-sans text-sm font-medium text-stone-700"
                  >
                    {row.profile}
                  </th>
                  <td className="border-b border-stone-200 py-4 pr-6 align-top font-sans text-sm text-stone-700">
                    {row.need}
                  </td>
                  <td className="border-b border-stone-200 py-4 pr-6 align-top font-sans text-sm text-stone-700">
                    {row.keyFunction}
                  </td>
                  <td className="border-b border-stone-200 py-4 align-top font-sans text-sm text-stone-700">
                    {row.model}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. Consejos del asesor antes de comprar. */}
      <section className="mx-auto max-w-3xl px-6 py-10">
        <h2 className="mb-8 font-serif text-2xl leading-tight text-stone-900">
          Antes de dar el paso final
        </h2>

        <ol className="space-y-4 font-sans text-stone-700">
          {finalAdvice.map((advice, index) => (
            <li key={advice} className="flex gap-4 leading-relaxed">
              <span
                className="mt-0.5 flex-none font-serif text-lg leading-none text-stone-400"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{advice}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* 6. FAQ: dudas habituales al combinar perfiles y soluciones. */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="mb-8 text-balance font-serif text-3xl leading-tight text-stone-900">
          Dudas habituales sobre perfiles específicos
        </h2>

        <dl className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="border-t border-stone-200 pt-6 first:border-t-0 first:pt-0"
            >
              <dt className="font-sans font-semibold leading-snug text-stone-900">
                {faq.question}
              </dt>
              <dd className="mt-3 font-sans leading-relaxed text-stone-700">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 7. CTA de cierre: enlace al ranking completo. */}
      <section className="bg-stone-100 px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-balance font-serif text-2xl leading-tight text-stone-900">
            ¿Ya tienes claro qué perfil encaja con tu familiar?
          </h2>
          <p className="mb-8 font-sans leading-relaxed text-stone-600">
            Explora nuestro ranking completo para ver los precios actualizados y
            las fichas técnicas.
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

