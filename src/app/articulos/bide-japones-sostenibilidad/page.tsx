import type { Metadata } from "next";
import Link from "next/link";

/**
 * El artículo se renderiza dentro del Layout global definido en
 * `src/app/layout.tsx`. No se vuelve a envolver aquí para no duplicar
 * el header y el footer del magazine.
 */
export const metadata: Metadata = {
  title:
    "Bidé japonés y sostenibilidad: El impacto real en el planeta | Sui Magazine",
  description:
    "Descubre cómo los inodoros inteligentes ahorran agua, reducen la deforestación y eliminan las toallitas húmedas. El baño del futuro es ecológico.",
};

/** Impacto ambiental del ciclo de vida del papel higiénico. */
type PaperImpact = {
  title: string;
  text: string;
};

/** Beneficio hídrico o ambiental del inodoro inteligente. */
type WaterBenefit = {
  title: string;
  text: string;
};

/** Fila de la comparativa anual entre baño tradicional y bidé japonés. */
type ComparisonRow = {
  concept: string;
  traditional: string;
  bidet: string;
};

/** Los tres costes ocultos del papel higiénico. */
const paperImpacts: PaperImpact[] = [
  {
    title: "Deforestación masiva",
    text: "Se necesitan 37 árboles para producir una tonelada de papel higiénico. A nivel global, la industria tala millones de árboles al año, muchos de ellos de bosques primarios no gestionados.",
  },
  {
    title: "Un lujo de agua",
    text: "Fabricar un solo rollo de papel consume aproximadamente 140 litros de agua. Una familia de cuatro personas puede gastar más de 27.000 litros de agua al año solo en la producción del papel que usa.",
  },
  {
    title: "Químicos y blanqueantes",
    text: "Para que el papel sea blanco y suave, se somete a procesos de cloración y blanqueamiento que liberan dioxinas y otros compuestos nocivos en los ríos.",
  },
];

/** Las tres ventajas que explican la eficiencia del formato. */
const waterBenefits: WaterBenefit[] = [
  {
    title: "Sistemas Tankless y Descarga Ciclónica",
    text: "Modelos como el Nashi Aldara iPlus 5 o el TOTO Neorest eliminan la cisterna tradicional. Inyectan agua a presión creando un vórtice que limpia la taza usando solo 3,8 litros, frente a los 6-9 litros de un inodoro convencional. Un ahorro de hasta el 70% por descarga.",
  },
  {
    title: "El fin de las toallitas húmedas",
    text: "Las toallitas 'biodegradables' no se deshacen en el agua y son la principal causa de los 'fatbergs' (montañas de grasa y residuos) que colapsan las alcantarillas de nuestras ciudades. El secado por aire caliente del bidé elimina por completo su necesidad.",
  },
  {
    title: "Reducción de residuos plásticos",
    text: "Menos rollos significan menos envoltorios de plástico, menos tubos de cartón y menos transporte de mercancías voluminosas desde las fábricas hasta los supermercados.",
  },
];

/** Comparativa orientativa del consumo de una familia durante un año. */
const comparisonRows: ComparisonRow[] = [
  {
    concept: "Rollos de papel consumidos",
    traditional: "150 rollos",
    bidet: "10 rollos (solo para secado inicial)",
  },
  {
    concept: "Árboles talados (equivalente)",
    traditional: "Casi 1 árbol maduro",
    bidet: "0,05 árboles",
  },
  {
    concept: "Agua en la cisterna (aprox.)",
    traditional: "25.000 litros",
    bidet: "9.000 litros (sistemas ciclónicos)",
  },
  {
    concept: "Toallitas húmedas desechadas",
    traditional: "24 paquetes",
    bidet: "0 paquetes",
  },
];

export default function BideJaponesSostenibilidadPage() {
  return (
    <>
      {/* 1. Hero del artículo. */}
      <section className="flex h-[40vh] min-h-[320px] items-center justify-center bg-stone-100 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-sans text-sm uppercase tracking-wider text-stone-500">
            Sostenibilidad · Sui Magazine
          </p>
          <h1 className="mb-4 text-balance font-serif text-4xl leading-tight tracking-tight text-stone-900 md:text-5xl">
            El baño invisible: Tu inodoro es la mayor decisión ecológica de tu
            hogar
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-lg leading-relaxed text-stone-600">
            Cada año, una familia media tira a la basura el equivalente a 27
            árboles. Hay una forma más amable de ir al baño.
          </p>
        </div>
      </section>

      {/* 2. Introducción narrativa. */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="font-serif text-xl leading-relaxed text-stone-700">
          Cuando pensamos en sostenibilidad, imaginamos paneles solares en el
          tejado, separar la basura en cinco contenedores o dejar de usar bolsas
          de plástico. Son gestos necesarios. Pero hay un rincón de la casa
          donde realizamos un acto íntimo y repetitivo hasta cinco veces al día,
          y que sin embargo ignoramos por completo: el baño. Lo que ocurre
          detrás de la puerta cerrada tiene un impacto monumental en el planeta.
          Y la buena noticia es que la solución ya existe, y es increíblemente
          confortable.
        </p>
      </section>

      {/* 3. El coste oculto del papel higiénico. */}
      <section className="mx-auto max-w-3xl px-6 py-10">
        <h2 className="mb-6 text-balance font-serif text-2xl leading-tight text-stone-900">
          El coste oculto del papel higiénico
        </h2>
        <p className="mb-8 font-sans leading-relaxed text-stone-700">
          El papel higiénico parece inofensivo, pero su ciclo de vida es uno de
          los más agresivos para el medio ambiente.
        </p>

        {paperImpacts.map((impact) => (
          <article key={impact.title} className="mb-4 bg-white p-6 shadow-sm">
            <h3 className="mb-2 font-sans text-base font-bold text-stone-800">
              {impact.title}
            </h3>
            <p className="font-sans text-sm leading-relaxed text-stone-600">
              {impact.text}
            </p>
          </article>
        ))}
      </section>

      {/* 4. La revolución del agua. */}
      <section className="bg-stone-100 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-balance font-serif text-2xl leading-tight text-stone-900">
            La revolución del agua: Hacer más con menos
          </h2>
          <p className="mb-8 font-sans text-lg leading-relaxed text-stone-700">
            La crítica más común al bidé japonés es irónica: ‘¿No gasta más
            agua?’. La realidad es justo la contraria. Los inodoros inteligentes
            de última generación han redefinido la eficiencia hídrica.
          </p>

          <ol className="space-y-4 font-sans text-stone-700">
            {waterBenefits.map((benefit, index) => (
              <li key={benefit.title} className="flex gap-4 leading-relaxed">
                <span
                  className="flex-none font-serif text-base leading-6 text-stone-400"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>
                  <strong className="font-semibold text-stone-800">
                    {benefit.title}:
                  </strong>{" "}
                  {benefit.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. El impacto real de una familia en un año. */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="mb-12 text-balance text-center font-serif text-3xl leading-tight text-stone-900">
          El impacto real de una familia en un año
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="border-b-2 border-stone-800 py-4 pr-6 text-left font-serif text-stone-900"
                >
                  Concepto
                </th>
                <th
                  scope="col"
                  className="border-b-2 border-stone-800 py-4 pr-6 text-left font-serif text-stone-900"
                >
                  Baño Tradicional
                </th>
                <th
                  scope="col"
                  className="border-b-2 border-stone-800 py-4 text-left font-serif text-stone-900"
                >
                  Con Bidé Japonés
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.concept}>
                  <th
                    scope="row"
                    className="border-b border-stone-200 py-4 pr-6 text-left font-sans text-sm font-medium text-stone-800"
                  >
                    {row.concept}
                  </th>
                  <td className="border-b border-stone-200 py-4 pr-6 font-sans text-sm text-stone-700">
                    {row.traditional}
                  </td>
                  <td className="border-b border-stone-200 py-4 font-sans text-sm text-stone-700">
                    {row.bidet}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. El baño circular. */}
      <section className="mx-auto max-w-3xl px-6 py-10">
        <h2 className="mb-6 text-balance font-serif text-2xl leading-tight text-stone-900">
          Hacia el concepto de ‘Baño Circular’
        </h2>
        <p className="font-sans leading-relaxed text-stone-700">
          Integrar un inodoro inteligente no es solo una mejora de confort; es
          un paso hacia la economía circular en el hogar. Estamos pasando de un
          modelo de ‘usar y tirar’ a uno de ‘lavar y renovar’. Es la misma
          lógica que aplicamos a la ropa o a la vajilla: ¿por qué íbamos a
          desechar algo que podemos limpiar con agua, el recurso más natural y
          renovable que tenemos?
        </p>
      </section>

      {/* 7. CTA de cierre. */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-balance font-serif text-2xl leading-tight text-stone-900">
            El cambio empieza en los pequeños rituales
          </h2>
          <p className="mb-8 text-stone-600">
            Descubre qué modelos destacan por su eficiencia hídrica y su
            compromiso con el medio ambiente.
          </p>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link
              href="/seleccion"
              className="inline-block border border-stone-900 px-6 py-3 text-sm font-medium tracking-wide text-stone-900 transition hover:bg-stone-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
            >
              Ver modelos eficientes
            </Link>
            <Link
              href="/guia"
              className="inline-block border-b border-stone-300 pb-1 font-sans text-sm text-stone-600 transition hover:border-stone-900 hover:text-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
            >
              Volver a la Guía
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}

