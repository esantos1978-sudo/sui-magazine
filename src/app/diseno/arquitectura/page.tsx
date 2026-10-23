import type { Metadata } from "next";
import Link from "next/link";

/**
 * Artículo editorial del silo Diseño dedicado a la arquitectura del baño
 * contemporáneo.
 *
 * Se renderiza dentro del Layout global definido en `src/app/layout.tsx`,
 * que ya aporta el header, el `<main>` y el footer. Por eso este archivo no
 * vuelve a envolver el contenido en otro `<main>`.
 */
export const metadata: Metadata = {
  title:
    "La arquitectura del baño contemporáneo: espacios que transforman el ritual | SUI Magazine",
  description:
    "La arquitectura del baño va mucho más allá de la elección de sanitarios y revestimientos. Distribución, proporciones, luz y tecnología definen un espacio de bienestar.",
  alternates: {
    canonical: "https://sui-magazine.vercel.app/diseno/arquitectura",
  },
  openGraph: {
    title:
      "La arquitectura del baño contemporáneo: espacios que transforman el ritual | SUI Magazine",
    description:
      "La arquitectura del baño va mucho más allá de la elección de sanitarios y revestimientos. Distribución, proporciones, luz y tecnología definen un espacio de bienestar.",
    locale: "es_ES",
    type: "article",
  },
};

export default function DisenoArquitecturaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO EDITORIAL */}
      <section className="bg-stone-50 px-6 py-20 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[#7A8B7C]">
            Diseño / Arquitectura
          </p>
          <h1 className="font-serif text-3xl md:text-5xl tracking-tight text-stone-900 text-balance mb-6">
            La arquitectura del baño contemporáneo: espacios que transforman el
            ritual
          </h1>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed italic text-balance">
            La arquitectura del baño va mucho más allá de la elección de
            sanitarios y revestimientos. Distribución, proporciones, luz y
            tecnología definen un espacio donde la funcionalidad puede convivir
            con una nueva forma de entender el bienestar cotidiano.
          </p>
        </div>
      </section>

      {/* CUERPO EDITORIAL */}
      <article className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-12">
          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              El baño como experiencia arquitectónica
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Durante mucho tiempo, el baño se concibió principalmente como una
              estancia de servicio. Su diseño respondía a necesidades funcionales
              y las decisiones estéticas quedaban, con frecuencia, en un segundo
              plano. Hoy conviven diferentes maneras de entender este espacio.
              Una de las más interesantes lo sitúa dentro del lenguaje
              arquitectónico del hogar: un ambiente donde la distribución, la luz
              y los materiales contribuyen tanto a su funcionamiento como a la
              experiencia de quienes lo utilizan. En este contexto, el inodoro
              inteligente introduce nuevas posibilidades, pero también nuevas
              exigencias. Integrarlo correctamente implica pensar más allá del
              objeto. Su ubicación, las instalaciones, los controles y el
              mantenimiento deben formar parte del proyecto desde el principio.
              La verdadera integración no consiste únicamente en conseguir que la
              tecnología pase desapercibida. Consiste en hacer que funcione con
              naturalidad dentro del espacio.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Diseñar desde la distribución
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Antes de elegir materiales o sanitarios, la arquitectura del baño
              comienza con una decisión fundamental: cómo se organiza el espacio.
              La posición del inodoro, el lavabo y la ducha determina los
              recorridos, las perspectivas y la comodidad de uso. En baños
              amplios, la distribución puede permitir diferenciar zonas sin
              necesidad de compartimentar completamente la estancia. En
              superficies reducidas, cada decisión adquiere mayor importancia. La
              apertura de una puerta, la profundidad de un mueble o la posición
              de un sanitario pueden modificar significativamente la percepción y
              el funcionamiento del conjunto. El objetivo no debería ser llenar
              el espacio con elementos de diseño, sino establecer una relación
              equilibrada entre las funciones que debe cumplir.
            </p>
          </section>

          <section>
            <h3 className="font-serif text-xl text-stone-800 mb-2">
              La importancia de las proporciones
            </h3>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Un baño bien resuelto no depende exclusivamente de sus dimensiones.
              La escala de los sanitarios, la altura de los muebles y la relación
              entre superficies libres y elementos construidos influyen en la
              sensación de amplitud. Los inodoros inteligentes integrados suelen
              presentar líneas continuas y volúmenes compactos, aunque sus
              dimensiones reales varían considerablemente entre modelos. Por eso,
              la elección debe basarse en medidas y requisitos de instalación
              concretos, no únicamente en fotografías de catálogo. Un sanitario
              visualmente ligero puede resultar demasiado profundo para un baño
              pequeño. Del mismo modo, un modelo de mayor volumen puede
              integrarse con naturalidad en una distribución que contemple
              adecuadamente sus proporciones.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              La tecnología como parte del proyecto
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              La incorporación de un inodoro inteligente plantea una diferencia
              importante respecto a la instalación de un sanitario convencional.
              Según el modelo, puede requerir alimentación eléctrica, conexiones
              específicas y condiciones particulares de montaje. Estas
              necesidades deben estudiarse durante la planificación. Resolverlas
              al final de una reforma puede limitar las opciones disponibles o
              exigir modificaciones innecesarias.
            </p>
          </section>

          <section>
            <h3 className="font-serif text-xl text-stone-800 mb-2">
              Instalaciones que deben anticiparse
            </h3>
            <p className="text-body-lg text-stone-600 leading-relaxed mb-6">
              Antes de seleccionar un modelo, conviene revisar:
            </p>
            <div className="space-y-4 mb-6">
              <p className="text-body-lg text-stone-600 leading-relaxed">
                <strong className="text-stone-800">Alimentación eléctrica.</strong>{" "}
                Los equipos electrónicos necesitan una instalación adecuada a las
                características del producto y a la normativa aplicable en
                locales con bañera o ducha.
              </p>
              <p className="text-body-lg text-stone-600 leading-relaxed">
                <strong className="text-stone-800">Suministro de agua.</strong>{" "}
                Es necesario comprobar la presión, las conexiones y los requisitos
                establecidos por el fabricante.
              </p>
              <p className="text-body-lg text-stone-600 leading-relaxed">
                <strong className="text-stone-800">Evacuación.</strong> Los
                inodoros integrados deben ser compatibles con la configuración de
                desagüe existente o prevista.
              </p>
              <p className="text-body-lg text-stone-600 leading-relaxed">
                <strong className="text-stone-800">Espacio de instalación.</strong>{" "}
                Algunos equipos necesitan distancias específicas para su montaje,
                funcionamiento o mantenimiento.
              </p>
              <p className="text-body-lg text-stone-600 leading-relaxed">
                <strong className="text-stone-800">Accesibilidad técnica.</strong>{" "}
                Los componentes que requieren revisión deben poder atenderse sin
                intervenciones desproporcionadas.
              </p>
            </div>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Estas condiciones no impiden desarrollar un baño minimalista.
              Simplemente exigen que la tecnología se contemple como parte de la
              arquitectura y no como un añadido posterior.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              La belleza de una tecnología discreta
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              En determinados proyectos contemporáneos, el diseño busca reducir
              el protagonismo visual de los elementos técnicos. Los sistemas de
              almacenamiento integrados, las instalaciones cuidadosamente
              planificadas y los sanitarios de líneas depuradas pueden contribuir
              a esa sensación de continuidad. Los inodoros inteligentes forman
              parte de esta evolución. Algunos modelos integran las funciones de
              lavado y secado dentro del propio sanitario, evitando la apariencia
              de un accesorio añadido. Sin embargo, una integración visual más
              limpia no garantiza una mejor experiencia de uso. Los mandos deben
              seguir siendo accesibles, las funciones comprensibles y los
              mecanismos susceptibles de mantenimiento.
            </p>
            <p className="text-body-lg text-stone-600 leading-relaxed mt-4 font-medium text-stone-800">
              La tecnología puede ser discreta sin volverse inaccesible. Esa
              diferencia es esencial para un proyecto bien resuelto.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Luz natural y atmósfera
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              La iluminación modifica profundamente la percepción de cualquier
              espacio. En el baño, la luz natural puede revelar las texturas de
              los materiales, suavizar los volúmenes y establecer una relación más
              agradable con el entorno. Cuando las condiciones arquitectónicas lo
              permiten, una ventana bien situada puede transformar una estancia
              pequeña sin necesidad de añadir elementos decorativos. Pero la luz
              también debe responder a necesidades prácticas. La iluminación del
              espejo, la zona de ducha y los recorridos requiere atención
              específica. Una iluminación excesivamente tenue puede resultar
              atractiva en una fotografía y poco funcional durante el uso
              cotidiano. Por eso, los proyectos más equilibrados combinan una
              atmósfera cuidada con niveles de iluminación adecuados para cada
              actividad.
            </p>
          </section>

          <section>
            <h3 className="font-serif text-xl text-stone-800 mb-2">
              Iluminación integrada
            </h3>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Las soluciones de iluminación indirecta pueden contribuir a crear
              ambientes visualmente tranquilos. Algunos inodoros inteligentes
              incorporan iluminación nocturna, una prestación que puede facilitar
              la orientación en determinadas circunstancias. No obstante, estas
              funciones complementarias no sustituyen una planificación adecuada
              de la iluminación general. La tecnología debe reforzar el proyecto,
              no resolver de manera improvisada sus carencias.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Materiales que dialogan con la arquitectura
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              La elección de materiales define buena parte de la identidad del
              baño. La piedra, la cerámica, los revestimientos continuos y
              determinadas maderas tratadas pueden aportar cualidades visuales y
              táctiles diferentes. Pero su selección debe considerar algo más que
              su apariencia. El contacto frecuente con el agua, la limpieza, la
              resistencia al deslizamiento y el mantenimiento condicionan su
              comportamiento a largo plazo. Una superficie de aspecto natural no
              es necesariamente más duradera ni más sencilla de conservar. Del
              mismo modo, un acabado continuo puede ofrecer una estética serena,
              pero requiere una ejecución adecuada y atención a sus condiciones de
              uso.
            </p>
          </section>

          <section>
            <h3 className="font-serif text-xl text-stone-800 mb-2">
              Continuidad visual
            </h3>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              La utilización de una paleta de materiales contenida puede ayudar a
              unificar el espacio. Cuando pavimentos, revestimientos y mobiliario
              comparten una misma intención, los sanitarios pueden integrarse sin
              competir visualmente con el conjunto. Esto resulta especialmente
              interesante en proyectos donde se incorporan inodoros inteligentes
              de diseño contemporáneo. En lugar de presentar el sanitario como una
              pieza tecnológica aislada, la arquitectura lo incorpora dentro de
              una composición coherente.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Accesibilidad desde el diseño
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              La calidad arquitectónica de un baño también depende de su capacidad
              para responder a diferentes necesidades. Una distribución
              visualmente atractiva puede resultar poco funcional si dificulta el
              acceso al inodoro o deja espacio insuficiente para determinados
              movimientos. Por eso, la accesibilidad debe considerarse desde las
              primeras fases del proyecto. La posición de los sanitarios, los
              espacios de aproximación, la posibilidad de incorporar apoyos y la
              facilidad para utilizar los controles son cuestiones relevantes. En
              proyectos que requieren condiciones específicas de accesibilidad,
              deben verificarse los requisitos normativos aplicables y las
              necesidades de quienes utilizarán el espacio. Los inodoros
              inteligentes pueden facilitar determinadas tareas de higiene, pero
              no sustituyen una distribución accesible. La arquitectura y la
              tecnología deben trabajar juntas.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Reformar un baño existente: integrar sin improvisar
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              No todos los proyectos comienzan desde cero. En una reforma, las
              instalaciones existentes, la superficie disponible y las condiciones
              constructivas pueden limitar determinadas soluciones. Antes de
              elegir un inodoro inteligente integrado, conviene estudiar la
              viabilidad técnica de su instalación. En algunos casos, un asiento
              electrónico compatible con el inodoro existente puede permitir
              incorporar funciones de lavado sin sustituir todo el sanitario. En
              otros, una reforma integral puede ofrecer la oportunidad de
              reorganizar el espacio y seleccionar un sistema completamente
              integrado. Ninguna alternativa es universalmente superior. La
              decisión depende del presupuesto, las necesidades de uso, las
              condiciones técnicas y el resultado arquitectónico que se busca.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Cuando el diseño permanece
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Las tendencias pueden influir en la apariencia del baño, pero su
              calidad a largo plazo depende de decisiones menos visibles. Una
              distribución cómoda, materiales adecuados, instalaciones accesibles
              y productos reparables pueden contribuir a prolongar la utilidad del
              espacio. La incorporación de tecnología exige prestar especial
              atención a esta cuestión. Un inodoro inteligente debe valorarse no
              solo por su diseño y sus funciones actuales, sino también por la
              disponibilidad de mantenimiento, componentes y asistencia técnica.
              La arquitectura no termina cuando se fotografía un proyecto. Su
              verdadero resultado se descubre en el uso cotidiano.
            </p>
          </section>

          <section className="bg-stone-50 p-8 md:p-12 rounded-sm border-l-4 border-[#7A8B7C]">
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Una nueva relación entre espacio y tecnología
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              El baño contemporáneo ofrece la oportunidad de integrar
              arquitectura, diseño y tecnología desde una perspectiva más
              completa. Los inodoros inteligentes forman parte de esta
              transformación, pero su presencia no debería determinar por sí sola
              la calidad del espacio. La diferencia está en cómo se relacionan con
              la distribución, la luz, los materiales y las necesidades de las
              personas. Un baño bien diseñado no necesita demostrar constantemente
              su sofisticación. La expresa en la facilidad con la que se utiliza,
              en la coherencia de sus detalles y en su capacidad para seguir
              funcionando con el paso del tiempo.
            </p>
            <p className="text-body-lg text-stone-600 leading-relaxed mt-4 font-medium text-stone-800">
              Porque la mejor tecnología no siempre es la que más destaca, sino la
              que encuentra su lugar dentro de una arquitectura pensada para
              vivir.
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
            Descubre otras perspectivas en SUI Magazine
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/diseno"
              className="px-6 py-3 border border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white transition-colors rounded-sm text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              ← Volver a Diseño
            </Link>
            <Link
              href="/tecnologia"
              className="px-6 py-3 border border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white transition-colors rounded-sm text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Tecnología
            </Link>
            <Link
              href="/bienestar"
              className="px-6 py-3 bg-[#7A8B7C] text-white hover:bg-[#6a7b6c] transition-colors rounded-sm text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Bienestar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
