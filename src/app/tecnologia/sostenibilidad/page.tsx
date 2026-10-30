import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/**
 * Sub-página editorial del silo Tecnología dedicada a la sostenibilidad.
 *
 * Se renderiza dentro del Layout global definido en `src/app/layout.tsx`,
 * que ya aporta el header, el `<main>` y el footer. Por eso este archivo no
 * vuelve a envolver el contenido en otro `<main>`.
 */
export const metadata: Metadata = {
  alternates: {
    canonical: "https://sui-magazine.vercel.app/tecnologia/sostenibilidad",
  },
  title:
    "Sostenibilidad | El impacto ambiental de los inodoros inteligentes | SUI Magazine",
  description:
    "Menos papel higiénico, pero también consumo de agua, electricidad y nuevos componentes. Analizamos las variables de su sostenibilidad.",
  openGraph: {
    title:
      "Sostenibilidad | El impacto ambiental de los inodoros inteligentes | SUI Magazine",
    description:
      "Menos papel higiénico, pero también consumo de agua, electricidad y nuevos componentes. Analizamos las variables de su sostenibilidad.",
    locale: "es_ES",
    type: "article",
  },
};

export default function SostenibilidadPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO EDITORIAL */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden px-6 py-20 md:py-32">
        <Image
          src="/images/articulos/sostenibilidad.jpg"
          alt="Baño con bañera, lavabo de piedra y suelo de cantos rodados, junto a varias plantas de interior"
          fill
          priority
          sizes="100vw"
          quality={75}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-stone-950/60" aria-hidden="true" />

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-stone-300">
            Tecnología / Sostenibilidad
          </p>
          <h1 className="font-serif text-3xl md:text-5xl tracking-tight text-white text-balance mb-6">
            El verdadero impacto ambiental de los inodoros inteligentes
          </h1>
          <p className="text-lg md:text-xl text-stone-200 leading-relaxed italic text-balance">
            Menos papel higiénico, pero también consumo de agua, electricidad y
            nuevos componentes electrónicos. Analizamos las variables que
            determinan la sostenibilidad de estos sistemas.
          </p>
        </div>
      </section>

      {/* CUERPO EDITORIAL */}
      <article className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-12">
          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Una pregunta más compleja de lo que parece
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              La higiene con agua suele asociarse a una alternativa más
              sostenible que el uso convencional de papel higiénico. La idea
              resulta intuitiva: si utilizamos menos papel, podríamos reducir el
              consumo de recursos asociados a su fabricación, transporte y
              eliminación. Sin embargo, los inodoros inteligentes también
              requieren materiales, agua y, en los modelos electrónicos,
              electricidad. Por eso, determinar su impacto ambiental exige
              considerar el conjunto del ciclo de vida del producto. La cuestión
              no es simplemente si un inodoro inteligente consume menos
              recursos, sino bajo qué condiciones puede hacerlo.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              El papel higiénico y su impacto ambiental
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              La producción de papel higiénico implica diferentes procesos
              industriales. Dependiendo del tipo de papel y de su fabricación,
              pueden intervenir materias primas vírgenes o recicladas, agua,
              energía y productos químicos. A ello se añaden el embalaje, el
              transporte y la gestión de residuos. Los sistemas de lavado con
              agua pueden reducir la cantidad de papel utilizada durante la
              higiene personal. No obstante, la reducción real depende de los
              hábitos del usuario y de si continúa utilizando papel para el
              secado. Por tanto, no es correcto asumir que todos los hogares que
              instalan un inodoro inteligente eliminan por completo el consumo
              de papel higiénico.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              El consumo de agua
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Los inodoros inteligentes utilizan agua para realizar la limpieza
              personal. La cantidad consumida depende de factores como el
              caudal, la duración del lavado y las funciones seleccionadas.
              Además, conviene distinguir entre el agua utilizada para la
              higiene y la empleada en la descarga del inodoro. Son procesos
              diferentes. Un asiento electrónico instalado sobre un sanitario
              convencional no modifica necesariamente el volumen de agua
              utilizado por la cisterna. En cambio, algunos inodoros completos
              incorporan sistemas de descarga diseñados para gestionar el
              consumo de agua. Para evaluar correctamente su eficiencia, es
              necesario consultar las especificaciones del modelo y considerar
              el uso real.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Electricidad: un factor que no debe ignorarse
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed mb-6">
              Los modelos electrónicos necesitan energía para alimentar
              diferentes componentes. Entre ellos pueden encontrarse:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-body-lg text-stone-600 leading-relaxed mb-6">
              {["Sistemas de calentamiento del agua.", "Asientos calefactados.", "Secadores de aire.", "Sensores.", "Motores de apertura y cierre.", "Sistemas de control electrónico."].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7A8B7C]"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              El consumo depende de la potencia de los componentes, la
              frecuencia de uso y la configuración del equipo. También debe
              considerarse el consumo en espera. Determinados modelos incorporan
              modos de ahorro energético que reducen la actividad de algunas
              funciones cuando no se utilizan. Sin embargo, para comparar
              productos de forma rigurosa es necesario utilizar datos medidos
              bajo condiciones equivalentes.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Fabricación y materiales
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              La sostenibilidad de un producto no comienza cuando se instala en
              el baño. También depende de los recursos utilizados durante su
              fabricación. Un inodoro inteligente puede incorporar cerámica
              sanitaria, plásticos técnicos, circuitos electrónicos, motores,
              sensores y otros componentes. Cada material tiene procesos de
              producción y cadenas de suministro diferentes. La incorporación de
              tecnología puede aumentar la complejidad del producto respecto a
              soluciones mecánicas más sencillas. Por eso, una evaluación
              ambiental completa debería considerar también la fabricación y
              distribución, no únicamente el consumo durante el uso.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Durabilidad y reparación
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed mb-6">
              La vida útil es otro factor relevante. Un producto que funciona
              durante muchos años y dispone de piezas de recambio puede ofrecer
              ventajas frente a otro que necesita sustituirse prematuramente. En
              este sentido, conviene prestar atención a:
            </p>
            <div className="space-y-4 mb-6">
              <p className="text-body-lg text-stone-600 leading-relaxed">
                <strong className="text-stone-800">
                  Disponibilidad de recambios.
                </strong>{" "}
                Especialmente para componentes electrónicos y mecanismos de
                lavado.
              </p>
              <p className="text-body-lg text-stone-600 leading-relaxed">
                <strong className="text-stone-800">Servicio técnico.</strong> La
                posibilidad de reparar el producto puede prolongar su
                utilización.
              </p>
              <p className="text-body-lg text-stone-600 leading-relaxed">
                <strong className="text-stone-800">
                  Facilidad de mantenimiento.
                </strong>{" "}
                Los sistemas accesibles y las instrucciones claras pueden
                facilitar su conservación.
              </p>
              <p className="text-body-lg text-stone-600 leading-relaxed">
                <strong className="text-stone-800">Garantía.</strong> Es un
                indicador de las condiciones de soporte ofrecidas, aunque no
                determina por sí sola la durabilidad real.
              </p>
            </div>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              La sostenibilidad también está relacionada con la capacidad de
              mantener los productos en funcionamiento.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              ¿Es más sostenible un inodoro inteligente?
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed mb-6">
              No existe una respuesta universal. Un sistema de higiene con agua
              puede reducir el consumo de papel, pero también introduce otros
              consumos e impactos. El balance depende de variables como:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-body-lg text-stone-600 leading-relaxed mb-6">
              {["Cantidad de papel sustituida.", "Agua utilizada por lavado.", "Consumo eléctrico.", "Frecuencia de utilización.", "Durabilidad del producto.", "Impacto de fabricación.", "Posibilidades de reparación."].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7A8B7C]"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Para determinar qué alternativa presenta un menor impacto
              ambiental sería necesario comparar escenarios equivalentes
              mediante estudios de ciclo de vida suficientemente completos. Sin
              esa información, cualquier afirmación categórica sería una
              simplificación.
            </p>
          </section>

          <section className="bg-stone-50 p-8 md:p-12 rounded-sm border-l-4 border-[#7A8B7C]">
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Hacia una innovación más responsable
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              La evolución de los inodoros inteligentes plantea oportunidades
              para mejorar la eficiencia, la durabilidad y la experiencia de
              higiene. Pero la sostenibilidad no debería utilizarse únicamente
              como argumento comercial. Los fabricantes pueden contribuir
              mediante diseños reparables, información transparente sobre
              consumos y una mayor disponibilidad de componentes. Los
              consumidores, por su parte, pueden tomar decisiones más informadas
              al evaluar las características que realmente necesitan.
            </p>
            <p className="text-body-lg text-stone-600 leading-relaxed mt-4 font-medium text-stone-800">
              La innovación responsable no consiste necesariamente en incorporar
              más tecnología. Consiste en desarrollar soluciones que aporten
              valor y cuyo impacto pueda comprenderse, medirse y mejorar con el
              tiempo.
            </p>
          </section>
        </div>
      </article>

      {/* NAVEGACIÓN INFERIOR (CTA) */}
      <section className="bg-stone-950 px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-stone-400 text-sm uppercase tracking-widest mb-4">
            Sigue explorando
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mb-8">
            Descubre las otras dimensiones de la tecnología en el baño
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/tecnologia/innovacion"
              className="px-6 py-3 border border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white transition-colors rounded-sm text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Innovación
            </Link>
            <Link
              href="/tecnologia/sistemas-inteligentes"
              className="px-6 py-3 border border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white transition-colors rounded-sm text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Sistemas Inteligentes
            </Link>
            <Link
              href="/tecnologia"
              className="px-6 py-3 bg-[#7A8B7C] text-white hover:bg-[#6a7b6c] transition-colors rounded-sm text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              ← Volver a Tecnología
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

