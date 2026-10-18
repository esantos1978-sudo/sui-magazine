import type { Metadata } from "next";

/**
 * La página se renderiza dentro del Layout global definido en
 * `src/app/layout.tsx`. No se vuelve a envolver aquí para no duplicar
 * el header y el footer del magazine.
 */
export const metadata: Metadata = {
  title:
    "Inodoros inteligentes para residencias y centros | Sui Magazine",
  description:
    "Soluciones de higiene inteligente para el sector sociosanitario. Mejora la eficiencia, reduce costes y aumenta la dignidad asistencial en tu centro.",
};

/** Coste oculto que genera el aseo tradicional en un centro. */
type CostDriver = {
  label: string;
  text: string;
};

/** Ventaja operativa o asistencial de los inodoros inteligentes. */
type Benefit = {
  title: string;
  text: string;
};

/** Fila de la tabla orientativa de retorno de la inversión. */
type RoiRow = {
  concept: string;
  impact: string;
};

/** Pregunta habitual de gerencia, arquitectura o distribución. */
type Faq = {
  question: string;
  answer: string;
};

/** Los cuatro focos de coste de la rutina de aseo tradicional. */
const costDrivers: CostDriver[] = [
  {
    label: "Coste en tiempo",
    text: "Entre 15 y 20 minutos por residente y uso. Multiplicado por el número de residentes, son horas de personal al día.",
  },
  {
    label: "Coste en materiales",
    text: "Uso intensivo de papel, toallitas, empapadores y guantes de un solo uso.",
  },
  {
    label: "Salud laboral",
    text: "Las bajas por dolores lumbares y lesiones musculoesqueléticas son constantes por las posturas forzadas.",
  },
  {
    label: "Infecciones y patógenos",
    text: "La manipulación y el uso de papel incrementan el riesgo de infecciones del tracto urinario (ITUs).",
  },
];

/** Beneficios cuantificables para el centro y para las personas. */
const benefits: Benefit[] = [
  {
    title: "Ahorro radical de tiempo",
    text: "Al automatizar el lavado y secado, el auxiliar libera minutos cruciales para atender otras tareas de valor.",
  },
  {
    title: "Ahorro de materiales",
    text: "Se elimina drásticamente el consumo de papel y toallitas. Además, los sistemas ciclónicos ahorran hasta un 70% de agua.",
  },
  {
    title: "Mejora de la salud laboral",
    text: "Al eliminar posturas forzadas, se previenen lesiones de espalda en la plantilla, reduciendo el absentismo.",
  },
  {
    title: "Imagen de innovación",
    text: "Contar con baños de alta tecnología posiciona al centro como referente en cuidados de vanguardia.",
  },
];

/** Estimaciones anuales de ahorro para una instalación profesional. */
const roiRows: RoiRow[] = [
  {
    concept: "Consumo de Papel/Toallitas",
    impact:
      "Reducción del 90-100%. Ahorro directo en compras y gestión de residuos.",
  },
  {
    concept: "Ahorro de Agua",
    impact:
      "Los sistemas ciclónicos reducen el consumo hasta en un 70% por descarga.",
  },
  {
    concept: "Tiempo de Personal",
    impact:
      "Ahorro de ~10 min por aseo. 30 min/día por residente (aprox. 15 horas al mes).",
  },
  {
    concept: "Salud Laboral",
    impact: "Prevención de bajas por trastornos musculoesqueléticos.",
  },
  {
    concept: "Infecciones",
    impact:
      "Reducción de ITUs y complicaciones de piel. Menor gasto farmacológico.",
  },
];

/** Dudas de adopción que suelen plantear los responsables de centro. */
const faqs: Faq[] = [
  {
    question:
      "¿Cuánto cuesta instalar bidés japoneses en toda una residencia?",
    answer:
      "El coste depende del enfoque. Un inodoro completo de alta calidad-precio parte de los 599 €. Para equipamientos múltiples, las marcas suelen ofrecer presupuestos por volumen.",
  },
  {
    question: "¿Qué mantenimiento requieren en uso intensivo?",
    answer:
      "El mantenimiento diario es más sencillo gracias a los sistemas Rimless. A nivel técnico, se reduce a cambiar filtros de sedimentos y descalcificaciones periódicas.",
  },
  {
    question: "¿El personal necesita formación especializada?",
    answer:
      "La curva de aprendizaje es mínima. Una vez configurada la presión y temperatura, basta con pulsar un botón.",
  },
  {
    question: "¿Hay ayudas o subvenciones para residencias?",
    answer:
      "Sí, se enmarcan en la eliminación de barreras arquitectónicas y prevención de riesgos laborales. Es recomendable consultar convocatorias autonómicas y fondos europeos.",
  },
];

export default function ProfesionalesPage() {
  return (
    <>
      {/* 1. Hero de sección: enfoque institucional sin perder el aire editorial. */}
      <section className="flex h-[50vh] min-h-[400px] items-center justify-center bg-stone-100 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-wider text-stone-500">
            Soluciones Profesionales · Sui Magazine
          </p>
          <h1 className="mb-4 text-balance font-serif text-4xl leading-tight tracking-tight text-stone-900 md:text-5xl">
            Eficiencia, Ahorro y Dignidad Asistencial
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-lg leading-relaxed text-stone-600">
            La innovación tecnológica que resuelve problemas estructurales en
            el sector sociosanitario sin perder de vista lo más importante: las
            personas.
          </p>
        </div>
      </section>

      {/* 2. El problema: los costes invisibles de la rutina de aseo. */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="mb-8 text-balance font-serif text-3xl leading-tight text-stone-900">
          La carga invisible del baño en residencias
        </h2>
        <p className="mb-8 font-sans text-lg leading-relaxed text-stone-700">
          Asistir a una persona dependiente en el aseo íntimo es uno de los
          procesos que más recursos consume en cualquier centro. Si desglosamos
          esta rutina, los costes ocultos son evidentes:
        </p>

        <ul className="space-y-4">
          {costDrivers.map((driver) => (
            <li
              key={driver.label}
              className="flex gap-4 border-t border-stone-200 pt-4 first:border-t-0 first:pt-0"
            >
              <span
                className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-stone-400"
                aria-hidden="true"
              />
              <p className="font-sans leading-relaxed text-stone-700">
                <strong className="font-semibold text-stone-900">
                  {driver.label}:
                </strong>{" "}
                {driver.text}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* 3. La solución: beneficios operativos y asistenciales medibles. */}
      <section className="bg-stone-100 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-balance font-serif text-3xl leading-tight text-stone-900">
            Beneficios cuantificables del Inodoro Japonés
          </h2>
          <p className="mb-8 font-sans text-lg leading-relaxed text-stone-700">
            Implementar inodoros inteligentes transforma radicalmente este
            escenario, aportando ventajas operativas y asistenciales que se
            pueden medir:
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="bg-white p-8 shadow-sm">
                <h3 className="mb-2 font-serif text-xl leading-snug text-stone-900">
                  {benefit.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-stone-600">
                  {benefit.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ROI: tabla orientativa de ahorros anuales. */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="mb-8 text-balance text-center font-serif text-3xl leading-tight text-stone-900">
          Retorno de la Inversión (ROI): Un cálculo orientativo
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center font-sans text-lg leading-relaxed text-stone-700">
          La amortización de un inodoro japonés en un entorno profesional es
          excepcionalmente rápida. Tomemos como ejemplo un centro que instale
          modelos de alta calidad-precio:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse">
            <caption className="sr-only">
              Cálculo orientativo del retorno de la inversión anual en un
              centro sociosanitario
            </caption>
            <thead>
              <tr>
                <th
                  scope="col"
                  className="w-1/3 border-b-2 border-stone-800 py-4 pr-6 text-left font-serif text-lg text-stone-900"
                >
                  Concepto de Ahorro
                </th>
                <th
                  scope="col"
                  className="border-b-2 border-stone-800 py-4 text-left font-serif text-lg text-stone-900"
                >
                  Impacto Anual Estimado
                </th>
              </tr>
            </thead>
            <tbody>
              {roiRows.map((row) => (
                <tr key={row.concept}>
                  <th
                    scope="row"
                    className="border-b border-stone-200 py-4 pr-6 text-left align-top font-sans font-semibold text-stone-700"
                  >
                    {row.concept}
                  </th>
                  <td className="border-b border-stone-200 py-4 align-top font-sans text-stone-700">
                    {row.impact}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. FAQ: dudas de adopción para gerencia y prescriptores. */}
      <section className="mx-auto max-w-3xl px-6 py-10">
        <h2 className="mb-8 text-balance font-serif text-3xl leading-tight text-stone-900">
          Preguntas frecuentes para gerencia
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

      {/* 6. CTA B2B: contacto directo para presupuestos y colaboraciones. */}
      <section className="bg-stone-100 px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-balance font-serif text-2xl leading-tight text-stone-900">
            ¿Interesado en equipar tu centro o colaborar con nosotros?
          </h2>
          <p className="mb-8 font-sans leading-relaxed text-stone-600">
            Si eres gerente de una residencia, arquitecto o representante de
            una marca, hablemos. Podemos adaptar soluciones a tu volumen y
            necesidades.
          </p>
          <a
            href="mailto:info@sui-magazine.com"
            className="inline-block border border-stone-900 px-10 py-4 text-[0.65rem] uppercase tracking-[0.28em] text-stone-900 transition-all duration-300 hover:bg-stone-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
          >
            Contactar para presupuestos
          </a>
        </div>
      </section>
    </>
  );
}

