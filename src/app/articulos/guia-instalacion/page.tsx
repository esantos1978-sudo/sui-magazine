import type { Metadata } from "next";
import Link from "next/link";

/**
 * El artículo se renderiza dentro del Layout global definido en
 * `src/app/layout.tsx`. No se vuelve a envolver aquí para no duplicar
 * el header y el footer del magazine.
 */
export const metadata: Metadata = {
  title:
    "Guía de instalación de bidé japonés paso a paso | Sui Magazine",
  description:
    "Aprende a instalar tu bidé japonés en 30 minutos. Guía completa para accesorios mecánicos, tapas inteligentes e inodoros completos.",
};

/** Cada paso se compone de un titular breve y su explicación. */
type InstallStep = {
  title: string;
  text: string;
};

/** Pasos para sustituir el asiento por un accesorio mecánico. */
const mechanicalSteps: InstallStep[] = [
  {
    title: "Cierra la llave de paso y vacía",
    text: "Gira la llave de paso del agua de la pared que va al inodoro. Luego, tira de la cadena para que la cisterna se vacíe por completo.",
  },
  {
    title: "Desmonta el asiento actual",
    text: "Quita los embellecedores de las bisagras de tu tapa y usa el destornillador para aflojar los tornillos. Retira la tapa y aprovecha para limpiar bien esa zona de la porcelana.",
  },
  {
    title: "Desconecta el latiguillo",
    text: "Pon el cubo debajo de la llave de paso para recoger el agua sobrante y, con la llave inglesa, desenrosca el tubo flexible (latiguillo) que entra a la cisterna.",
  },
  {
    title: "Instala el adaptador en “T”",
    text: "Enrosca el adaptador metálico en forma de “T” (incluido en la caja) a la entrada de agua de la cisterna. A uno de los extremos conectarás el latiguillo original de la pared, y al otro la manguera fina de tu nuevo bidé.",
  },
  {
    title: "Fija el accesorio",
    text: "Coloca el accesorio mecánico haciendo coincidir sus ranuras con los agujeros de la porcelana. Pon tu tapa tradicional encima y vuelve a atornillar todo el conjunto para que quede firme.",
  },
  {
    title: "Conecta la manguera",
    text: "Une la manguerita fina desde el accesorio del asiento hasta la salida libre de la pieza en “T”.",
  },
  {
    title: "Abre el agua y prueba",
    text: "Abre la llave de paso de la pared lentamente. Comprueba que no hay goteos y gira el dial del bidet ligeramente para comprobar que el agua sale.",
  },
];

/** Pasos para instalar un asiento inteligente sobre la taza existente. */
const smartSeatSteps: InstallStep[] = [
  {
    title: "Corta el agua y vacía el depósito",
    text: "Igual que antes, cierra la llave de paso de la pared y tira de la cadena para dejar la cisterna vacía.",
  },
  {
    title: "Retira tu antigua tapa",
    text: "Quita los tornillos traseros y deshazte de tu tapa convencional. Limpia a fondo la superficie de cerámica.",
  },
  {
    title: "Instala la pletina de fijación",
    text: "Tu nuevo asiento viene con una placa base o pletina. Colócala sobre los agujeros de la taza, inserta los tornillos con sus tacos de expansión de goma y aprieta con el destornillador.",
  },
  {
    title: "Desliza el asiento inteligente",
    text: "Coge el washlet y deslízalo horizontalmente sobre la placa base hacia atrás hasta que escuches un “clic” sólido. ¡Ya está anclado!",
  },
  {
    title: "Instala el paso de agua",
    text: "Desconecta el latiguillo de la cisterna. Coloca la válvula en “T” suministrada. Conecta de nuevo el latiguillo original. Luego enchufa el tubo nuevo desde la T hasta la toma de tu asiento inteligente.",
  },
  {
    title: "Enchufa a la corriente",
    text: "Conecta el cable a tu enchufe de 220V. Verás que los leds se encienden; es la señal de que el aparato tiene vida.",
  },
  {
    title: "Comprobación final",
    text: "Abre el agua. El asiento comenzará a cebarse. Una vez acabe, pon tu antebrazo sobre el sensor del asiento para simular que alguien está sentado, y pulsa el botón de lavado. ¡Magia!",
  },
];

/** Los cinco tropiezos más habituales durante la instalación. */
const commonMistakes: InstallStep[] = [
  {
    title: "No medir antes de comprar",
    text: "El error número uno. Las tapas no son mágicamente universales. Si no has medido la distancia de los tornillos y la forma, puede que el asiento quede corto o asome por los bordes.",
  },
  {
    title: "Olvidar cerrar la llave de paso",
    text: "Parece obvio, pero aflojar un latiguillo con el agua abierta convertirá tu baño en una piscina en 5 segundos.",
  },
  {
    title: "Apretar a lo “Hulk”",
    text: "Las conexiones de fontanería llevan juntas de goma que sellan por presión. Si usas herramientas para apretar las roscas de plástico al máximo, pellizcarás la goma y causarás fugas.",
  },
  {
    title: "No comprobar fugas inmediatas",
    text: "Una vez instalado, abre el agua y pasa un papel de cocina seco por todas las conexiones. Si el papel se moja, hay una microfuga.",
  },
  {
    title: "Asustarse al no probar las funciones",
    text: "El asiento tiene un sensor de piel/peso. Si pulsas el mando de lavado sin estar sentado, no saldrá agua. ¡No pienses que está roto!",
  },
];

/**
 * Lista editorial de pasos: número serif, titular y explicación.
 * Se reutiliza en las dos instalaciones para mantener el mismo ritmo.
 */
function StepsList({ steps }: { steps: InstallStep[] }) {
  return (
    <ol className="space-y-8">
      {steps.map((step, index) => (
        <li
          key={step.title}
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
              {step.title}
            </h3>
            <p className="mt-2 font-sans text-sm leading-relaxed text-stone-600">
              {step.text}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function GuiaInstalacionPage() {
  return (
    <>
      {/* 1. Hero del artículo: misma calma editorial, algo más bajo. */}
      <section className="flex h-[40vh] min-h-[340px] items-center justify-center bg-stone-100 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-wider text-stone-500">
            Guía práctica · Sui Magazine
          </p>
          <h1 className="mb-4 text-balance font-serif text-4xl leading-tight tracking-tight text-stone-900 md:text-5xl">
            Guía de instalación paso a paso
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-lg leading-relaxed text-stone-600">
            Cómo montar tu bidé japonés sin estrés. Te prometo que es más fácil
            de lo que crees.
          </p>
        </div>
      </section>

      {/* 2. Introducción narrativa: bajar el vértigo antes de empezar. */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="font-serif text-xl leading-relaxed text-stone-700">
          Ha llegado el momento. Tu bidé japonés ya está en casa. Seguro que
          estás mirando la caja con una mezcla de emoción y un poquito de
          vértigo. Respira hondo, saca las herramientas y sígueme. Ya has
          comprobado que tu baño cumple los requisitos, así que la parte de la
          incertidumbre ya ha pasado. Ahora solo se trata de encajar unas
          cuantas piezas. Piensa que es como montar un mueble, pero con un
          premio final que va a cambiar tu día a día.
        </p>
      </section>

      {/* 3. Accesorio mecánico: la instalación más sencilla. */}
      <section className="mx-auto max-w-3xl px-6 py-10">
        <h2 className="mb-6 text-balance font-serif text-2xl leading-tight text-stone-900">
          Instalación de un accesorio mecánico (Bidé no eléctrico)
        </h2>
        <p className="mb-8 font-sans text-sm text-stone-500">
          Nivel: Principiante · Tiempo: 15-20 minutos
        </p>

        <p className="mb-8 font-sans text-stone-700 leading-relaxed">
          <strong className="font-semibold text-stone-800">
            Herramientas:
          </strong>{" "}
          Llave inglesa (o llave grifa pequeña), destornillador (plano o de
          estrella, según tu inodoro), un trapo viejo y un cubo pequeño.
        </p>

        <StepsList steps={mechanicalSteps} />
      </section>

      {/* 4. Asiento inteligente: el salto a la electrónica. */}
      <section className="bg-stone-100 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-balance font-serif text-2xl leading-tight text-stone-900">
            Instalación de un asiento inteligente (Washlet)
          </h2>
          <p className="mb-8 font-sans text-sm text-stone-500">
            Nivel: Principiante-Medio · Tiempo: 30-45 minutos
          </p>

          <p className="mb-8 font-sans text-stone-700 leading-relaxed">
            <strong className="font-semibold text-stone-800">
              Herramientas:
            </strong>{" "}
            Llave inglesa, destornillador de estrella, un paño y un cubo
            pequeño. ¡Ah! Y asegúrate de tener el enchufe estándar de 220V
            cerca.
          </p>

          <StepsList steps={smartSeatSteps} />
        </div>
      </section>

      {/* 5. Inodoro completo: aquí conviene un profesional. */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="mb-6 text-balance font-serif text-2xl leading-tight text-stone-900">
          Instalación de un inodoro completo
        </h2>
        <p className="mb-8 font-sans text-sm text-stone-500">
          Nivel: Profesional recomendado
        </p>

        <p className="font-sans text-lg leading-relaxed text-stone-700">
          Si has comprado un inodoro inteligente completo o una versión
          suspendida, estamos hablando de palabras mayores. En estos casos, te
          recomiendo encarecidamente que cuentes con la ayuda de un
          profesional. Este nivel de instalación implica retirar sanitarios
          pesados de cerámica, sellar desagües al suelo o pared, y lidiar tanto
          con la toma principal de fontanería como con el cableado eléctrico
          interno.
        </p>

        <div className="my-8 bg-white p-8 shadow-sm">
          <p className="font-sans leading-relaxed text-stone-700">
            <strong className="font-semibold text-stone-800">
              Tiempo y coste orientativo:
            </strong>{" "}
            La instalación de un inodoro a suelo puede llevar entre 2 y 3 horas
            y costar entre 150€ y 250€. Si es suspendido y requiere obra, el
            tiempo se extiende a uno o varios días.
          </p>
        </div>
      </section>

      {/* 6. Errores comunes: pequeños detalles que arruinan el resultado. */}
      <section className="bg-stone-100 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-balance font-serif text-2xl leading-tight text-stone-900">
            Errores comunes y cómo evitarlos
          </h2>

          <ol className="space-y-6">
            {commonMistakes.map((mistake, index) => (
              <li
                key={mistake.title}
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
                    {mistake.title}:
                  </strong>{" "}
                  {mistake.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7. CTA de cierre: de vuelta a la guía de compra. */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-balance font-serif text-2xl leading-tight text-stone-900">
            ¿Todo en orden? Si tu baño cumple estos requisitos, estás listo para
            disfrutar del baño del futuro.
          </h2>
          <p className="mb-8 font-sans leading-relaxed text-stone-600">
            Si aún tienes dudas sobre qué modelo elegir o cómo adaptar tu baño
            español, explora nuestra guía completa.
          </p>
          <Link
            href="/guia"
            className="inline-block border border-stone-900 px-6 py-3 text-sm font-medium tracking-wide text-stone-900 transition hover:bg-stone-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
          >
            Volver a la Guía
          </Link>
        </div>
      </section>
    </>
  );
}

