import type { Metadata } from "next";
import Link from "next/link";

/**
 * El artículo se renderiza dentro del Layout global definido en
 * `src/app/layout.tsx`. No se vuelve a envolver aquí para no duplicar
 * el header y el footer del magazine.
 */
export const metadata: Metadata = {
  title:
    "Tapa inteligente para inodoro: Guía definitiva y materiales | Sui Magazine",
  description:
    "Todo sobre la tapa de bidé japonés: diferencias entre ABS y Resix, calentamiento instantáneo, instalación y los mejores modelos del mercado.",
};

/** Tarjeta comparativa de materiales. */
type MaterialCard = {
  title: string;
  text: string;
};

/** Modelo destacado dentro del formato de tapa inteligente. */
type ModelSpotlight = {
  title: string;
  text: string;
};

/** Los dos materiales que definen la calidad de una tapa inteligente. */
const materials: MaterialCard[] = [
  {
    title: "Plástico ABS (Gama de entrada)",
    text: "Es el material de la mayoría de tapas económicas (como las de Xiaomi). Cumple su función, pero es delicado. Con los ciclos de calor y los productos de limpieza agresivos, puede amarillear o volverse quebradizo con los años. Además, no permiten sentarse en la tapa cuando está cerrada.",
  },
  {
    title: "Resix Termoendurecido (Gama Premium)",
    text: "Usado por marcas como Nashi en su línea Deluxe Pro. Es una resina similar a la de las encimeras de cocina de alta gama. Es indestructible, no amarillea y, lo más importante, soporta más de 150 kg de peso. Puedes sentarte en la tapa cerrada para cortarte las uñas o secar el pelo de un familiar sin riesgo a romper los circuitos internos.",
  },
];

/** Los dos modelos que mejor representan los extremos del formato. */
const models: ModelSpotlight[] = [
  {
    title: "La puerta de entrada: Xiaomi Smart Toilet Seat",
    text: "Democratizó el sector. Por menos de 300€ te da agua caliente, asiento calefactado y control de presión. Perfecta para pisos de alquiler o para probar si esto del bidé es para ti. Su punto débil: los materiales y el soporte técnico postventa.",
  },
  {
    title: "La inversión a largo plazo: Nashi Deluxe Pro",
    text: "Cuesta entre 400€ y 900€, pero es para toda la vida. Destaca por su material Resix, su secado oscilante avanzado (Movdri) y, sobre todo, por tener un servicio técnico real con garantía de 5 años en España.",
  },
];

export default function TapaInteligentePage() {
  return (
    <>
      {/* 1. Hero del artículo. */}
      <section className="flex h-[40vh] min-h-[320px] items-center justify-center bg-stone-100 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-sans text-sm uppercase tracking-wider text-stone-500">
            Análisis en profundidad · Sui Magazine
          </p>
          <h1 className="mb-4 text-balance font-serif text-4xl leading-tight tracking-tight text-stone-900 md:text-5xl">
            La Tapa Inteligente: Transformar tu baño sin obras
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-lg leading-relaxed text-stone-600">
            El equilibrio perfecto entre confort y practicidad. Por qué el 70%
            de los hogares españoles eligen esta opción.
          </p>
        </div>
      </section>

      {/* 2. Introducción narrativa. */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="font-serif text-xl leading-relaxed text-stone-700">
          Llega un momento en el que te cansas de buscar rollos de papel y
          sueñas con la experiencia de un hotel de cinco estrellas, pero la idea
          de arrancar el suelo del baño, levantar el váter y llamar a un albañil
          te echa para atrás. Aquí es donde entra la magia de la tapa
          inteligente. No necesitas cambiar tu inodoro de cerámica. Solo
          sustituyes la tapa de toda la vida por un dispositivo tecnológico que,
          en 30 minutos, convierte tu baño en un santuario de confort. Pero no
          todas las tapas son iguales. Hoy vamos a mirar bajo la superficie.
        </p>
      </section>

      {/* 3. El corazón del sistema: depósito frente a calentamiento instantáneo. */}
      <section className="mx-auto max-w-3xl px-6 py-10">
        <h2 className="mb-6 text-balance font-serif text-2xl leading-tight text-stone-900">
          El corazón del sistema: ¿Depósito o Calentamiento Instantáneo?
        </h2>
        <p className="mb-4 font-sans leading-relaxed text-stone-700">
          <strong className="font-semibold text-stone-800">
            Tapa con depósito interno:
          </strong>{" "}
          Tienen un pequeño tanque que mantiene el agua caliente. Son más
          baratas, pero si tres personas van al baño seguidas, la cuarta se
          llevará un susto con el agua fría.
        </p>
        <p className="mb-8 font-sans leading-relaxed text-stone-700">
          <strong className="font-semibold text-stone-800">
            Tapa con calentamiento instantáneo:
          </strong>{" "}
          Calientan el agua al momento mientras fluye por una resistencia
          cerámica. El suministro es inagotable. Es la opción obligatoria para
          familias numerosas o baños de uso intensivo.
        </p>
      </section>

      {/* 4. La batalla de los materiales. */}
      <section className="bg-stone-100 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-balance font-serif text-2xl leading-tight text-stone-900">
            La batalla de los materiales: Plástico ABS vs. Resix
          </h2>
          <p className="mb-8 font-sans text-lg leading-relaxed text-stone-700">
            Aquí es donde se separa el juguete tecnológico del electrodoméstico
            de toda la vida. El material de la carcasa y la tapa lo cambia todo.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {materials.map((material) => (
              <article key={material.title} className="bg-white p-8 shadow-sm">
                <h3 className="mb-2 font-serif text-xl leading-tight text-stone-900">
                  {material.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-stone-600">
                  {material.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. La realidad eléctrica y la seguridad. */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="mb-6 text-balance font-serif text-2xl leading-tight text-stone-900">
          La realidad eléctrica: El enchufe de 220V
        </h2>
        <p className="mb-4 font-sans leading-relaxed text-stone-700">
          A diferencia de los accesorios mecánicos, la tapa inteligente necesita
          comer. Requiere un enchufe estándar de 220V cerca del inodoro. En las
          reformas modernas ya se contempla, pero en baños antiguos suele ser el
          mayor escollo. Si no tienes uno, no te desanimes: un electricista
          puede ocultar un cable por el rodapié o por el falso techo en una
          mañana. (Si quieres saber más trucos, lee nuestra{" "}
          <Link
            href="/articulos/bano-espanol-adaptaciones"
            className="underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-900"
          >
            guía sobre adaptaciones en baños españoles
          </Link>).
        </p>

        <div className="my-8 bg-white p-6 shadow-sm">
          <p className="font-sans leading-relaxed text-stone-700">
            <strong className="font-semibold text-stone-800">
              Nota de seguridad:
            </strong>{" "}
            Los inodoros y tapas inteligentes modernos están sellados contra
            salpicaduras (normativa IPX4 o superior). No tengas miedo a la
            humedad del baño, pero asegúrate siempre de que tu instalación
            cuenta con un interruptor diferencial en el cuadro eléctrico.
          </p>
        </div>
      </section>

      {/* 6. Los reyes del formato. */}
      <section className="mx-auto max-w-3xl px-6 py-10">
        <h2 className="mb-8 text-balance font-serif text-2xl leading-tight text-stone-900">
          Los reyes del formato en España
        </h2>

        {models.map((model) => (
          <article
            key={model.title}
            className="mb-8 border-l-4 border-stone-400 pl-6"
          >
            <h3 className="font-sans text-base font-bold text-stone-900">
              {model.title}
            </h3>
            <p className="mt-2 font-sans leading-relaxed text-stone-700">
              {model.text}
            </p>
          </article>
        ))}
      </section>

      {/* 7. CTA de cierre: ranking y comparativa por presupuesto. */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-balance font-serif text-2xl leading-tight text-stone-900">
            ¿La tapa inteligente es para ti?
          </h2>
          <p className="mb-8 font-sans leading-relaxed text-stone-600">
            Si buscas confort sin meterte en obras, es tu formato. Compara los
            mejores modelos del mercado en nuestro ranking.
          </p>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link
              href="/seleccion"
              className="inline-block border border-stone-900 px-10 py-4 text-[0.65rem] uppercase tracking-[0.28em] text-stone-900 transition-all duration-300 hover:bg-stone-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
            >
              Ver Ranking de Tapas
            </Link>
            <Link
              href="/articulos/mejores-bides-presupuesto"
              className="inline-block border-b border-stone-300 pb-1 font-sans text-sm text-stone-600 transition hover:border-stone-900 hover:text-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
            >
              Ver por Presupuesto
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}

