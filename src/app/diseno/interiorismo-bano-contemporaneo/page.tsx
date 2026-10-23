import type { Metadata } from "next";
import Link from "next/link";

/**
 * Artículo editorial del silo Diseño dedicado al interiorismo del baño
 * contemporáneo: materiales, color, luz y texturas.
 *
 * Se renderiza dentro del Layout global definido en `src/app/layout.tsx`,
 * que ya aporta el header, el `<main>` y el footer. Por eso este archivo no
 * vuelve a envolver el contenido en otro `<main>`.
 */
export const metadata: Metadata = {
  title:
    "Interiorismo de baños modernos: materiales, luz y diseño | SUI Magazine",
  description:
    "Descubre cómo los materiales, la iluminación y las texturas transforman el interiorismo del baño contemporáneo, integrando tecnología y bienestar.",
  alternates: {
    canonical:
      "https://sui-magazine.vercel.app/diseno/interiorismo-bano-contemporaneo",
  },
  openGraph: {
    title:
      "Interiorismo de baños modernos: materiales, luz y diseño | SUI Magazine",
    description:
      "Descubre cómo los materiales, la iluminación y las texturas transforman el interiorismo del baño contemporáneo, integrando tecnología y bienestar.",
    locale: "es_ES",
    type: "article",
  },
};

export default function DisenoInteriorismoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO EDITORIAL */}
      <section className="bg-stone-50 px-6 py-20 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[#7A8B7C]">
            Diseño / Interiorismo
          </p>
          <h1 className="font-serif text-3xl md:text-5xl tracking-tight text-stone-900 text-balance mb-6">
            La belleza de lo esencial: materiales, luz y calma en el baño
            contemporáneo
          </h1>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed italic text-balance">
            Un baño puede ser mucho más que una estancia funcional. A través de
            los materiales, la iluminación y las texturas, el interiorismo
            transforma las rutinas cotidianas en una experiencia más agradable,
            íntima y personal.
          </p>
        </div>
      </section>

      {/* CUERPO EDITORIAL */}
      <article className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-12">
          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              El lujo de sentirse bien
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Hay espacios que impresionan a primera vista y otros que se
              descubren lentamente. Un baño revestido de piedra natural puede
              resultar espectacular, pero no necesariamente acogedor. Del mismo
              modo, una estancia sencilla, con materiales bien elegidos y una
              iluminación equilibrada, puede transmitir una sensación de calma sin
              recurrir a elementos ostentosos. En el interiorismo contemporáneo,
              una de las aproximaciones más interesantes consiste precisamente en
              buscar ese equilibrio. No se trata de eliminar todo lo superfluo ni
              de seguir una estética minimalista de forma estricta. Se trata de
              comprender cómo cada elemento contribuye a la experiencia del
              espacio. La temperatura visual de la luz, la textura de una
              superficie o la proporción de un espejo pueden modificar nuestra
              percepción del baño. Y cuando estas decisiones se coordinan, el
              resultado es un ambiente que invita a disfrutar de los gestos
              cotidianos.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              La materia como punto de partida
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Los materiales determinan buena parte del carácter de un baño. No
              solo por su apariencia, sino por la forma en que reflejan la luz,
              envejecen y responden al contacto diario. En los proyectos
              contemporáneos encontramos diferentes interpretaciones: desde
              espacios minerales de tonos suaves hasta combinaciones de madera,
              cerámica y superficies continuas. La elección no debería depender
              únicamente de una tendencia. También debe considerar la humedad, la
              limpieza, la resistencia y el mantenimiento.
            </p>
          </section>

          <section>
            <h3 className="font-serif text-xl text-stone-800 mb-2">
              Piedra natural: profundidad y carácter
            </h3>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              El mármol, la caliza y otras piedras naturales aportan variaciones
              de color y textura que hacen que cada superficie sea diferente. Sus
              vetas y matices pueden convertirse en un elemento protagonista o
              integrarse discretamente en una composición más contenida. Sin
              embargo, no todas las piedras tienen el mismo comportamiento.
              Algunas requieren tratamientos específicos y pueden ser sensibles a
              determinadas sustancias o productos de limpieza. Antes de elegirlas
              conviene valorar su porosidad, el acabado y las condiciones de uso.
              La belleza de un material también depende de que pueda mantenerse
              adecuadamente.
            </p>
          </section>

          <section>
            <h3 className="font-serif text-xl text-stone-800 mb-2">
              Cerámica: versatilidad y continuidad
            </h3>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Los revestimientos cerámicos permiten explorar una gran variedad de
              formatos, acabados y texturas. Las piezas de gran formato pueden
              reducir visualmente la presencia de juntas y contribuir a crear
              superficies más continuas. Los formatos pequeños, por su parte,
              pueden introducir ritmo y detalle. La elección debe responder a la
              escala del espacio y a las condiciones de instalación. En
              pavimentos, es especialmente importante comprobar que el acabado sea
              adecuado para las condiciones de humedad y uso previstas.
            </p>
          </section>
          <section>
            <h3 className="font-serif text-xl text-stone-800 mb-2">
              Madera: calidez y contraste
            </h3>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              La madera introduce una cualidad visual que puede equilibrar la
              presencia de superficies minerales. Aparece con frecuencia en
              mobiliario, revestimientos parciales y pequeños detalles. En el
              baño, su utilización requiere seleccionar materiales y acabados
              adecuados para ambientes húmedos, además de una correcta ejecución.
              No todas las maderas ni todos los tratamientos ofrecen el mismo
              comportamiento. Utilizada con criterio, puede aportar calidez sin
              comprometer la funcionalidad.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              El color como lenguaje
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              La paleta cromática influye en la atmósfera del baño. Los tonos
              arena, piedra, marfil y gris cálido suelen asociarse a espacios
              serenos, especialmente cuando se combinan con materiales de textura
              natural. Pero una estética tranquila no depende exclusivamente de
              los colores neutros. Los tonos profundos, los contrastes controlados
              o una superficie de color pueden crear ambientes igualmente
              equilibrados. La clave está en la relación entre los elementos. Un
              color que funciona bien en una fotografía puede comportarse de
              manera diferente en una estancia con poca luz natural. Por eso,
              conviene observar las muestras bajo las condiciones reales de
              iluminación antes de tomar una decisión.
            </p>
          </section>

          <section>
            <h3 className="font-serif text-xl text-stone-800 mb-2">
              La importancia de los matices
            </h3>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              En un baño de apariencia sencilla, pequeñas diferencias de tono
              adquieren protagonismo. Un blanco frío puede contrastar notablemente
              con una piedra de matices cálidos. Una grifería de acabado oscuro
              puede introducir un punto de atención en una composición clara.
              Estas relaciones no son necesariamente buenas o malas. Lo importante
              es que respondan a una intención y mantengan coherencia con el
              conjunto.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Diseñar con luz
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              La iluminación es uno de los recursos más importantes del
              interiorismo. Puede revelar una textura, suavizar un volumen o
              transformar la percepción de los materiales. En el baño, además,
              debe responder a diferentes actividades. La luz que resulta
              agradable durante un baño relajante no tiene por qué ser la más
              adecuada para afeitarse, maquillarse o realizar tareas de higiene.
              Por eso, una buena propuesta combina diferentes necesidades.
            </p>
          </section>

          <section>
            <h3 className="font-serif text-xl text-stone-800 mb-2">
              Luz general
            </h3>
            <p className="text-body-lg text-stone-600 leading-relaxed mb-6">
              Debe permitir utilizar el espacio con comodidad y reconocer sus
              elementos. Su distribución debería evitar zonas excesivamente
              oscuras y deslumbramientos molestos.
            </p>

            <h3 className="font-serif text-xl text-stone-800 mb-2">
              Luz funcional
            </h3>
            <p className="text-body-lg text-stone-600 leading-relaxed mb-6">
              En el espejo y otras áreas de uso frecuente, una iluminación bien
              situada facilita las tareas que requieren mayor precisión. La
              posición de las luminarias es tan importante como su apariencia.
            </p>

            <h3 className="font-serif text-xl text-stone-800 mb-2">
              Luz ambiental
            </h3>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              La iluminación indirecta puede aportar profundidad y crear una
              atmósfera más relajada. Puede incorporarse en determinados
              elementos arquitectónicos o mobiliario, siempre que la instalación
              sea adecuada para las condiciones del baño. La luz ambiental
              complementa la iluminación funcional, pero no debería sustituirla.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Texturas que se perciben sin llamar la atención
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Una superficie mate, una cerámica ligeramente irregular o una madera
              de veta visible pueden aportar riqueza visual sin recurrir a
              elementos decorativos abundantes. En un baño de paleta contenida,
              las texturas permiten construir profundidad. La combinación de
              acabados lisos y superficies con relieve puede generar contrastes
              interesantes. Sin embargo, las decisiones táctiles y visuales
              también tienen consecuencias prácticas. Las superficies muy
              texturizadas pueden requerir una limpieza más cuidadosa. Por eso, el
              interiorismo debe equilibrar sensaciones, higiene y mantenimiento.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              La tecnología dentro de la atmósfera
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Los inodoros inteligentes forman parte de una nueva generación de
              productos que combinan funciones avanzadas con un diseño cada vez
              más integrado. En términos de interiorismo, su presencia plantea una
              cuestión interesante: cómo incorporar tecnología sin alterar el
              lenguaje visual del espacio. Un sanitario de líneas depuradas puede
              integrarse en un baño minimalista, pero también funcionar dentro de
              una composición cálida y natural. La elección depende de sus
              proporciones, acabado y relación con el resto de los elementos.
            </p>
          </section>

          <section>
            <h3 className="font-serif text-xl text-stone-800 mb-2">
              Cuando el producto acompaña al espacio
            </h3>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              En lugar de elegir un inodoro inteligente únicamente por sus
              funciones, conviene observar cómo se relaciona con el lavabo, la
              grifería y los revestimientos. Un modelo de volumen pronunciado
              puede convertirse en un elemento protagonista. Otro de líneas más
              discretas puede integrarse visualmente con mayor facilidad. Ninguna
              de estas opciones es necesariamente superior. La decisión depende
              del carácter del proyecto. También es importante recordar que la
              integración estética no debe comprometer la accesibilidad de los
              controles ni las condiciones de instalación y mantenimiento.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              El orden también se diseña
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              La sensación de serenidad está relacionada con la organización del
              espacio. Los objetos cotidianos, los productos de higiene y los
              textiles necesitan lugares accesibles donde guardarse. El mobiliario
              integrado puede contribuir a reducir el ruido visual, pero no
              debería dificultar el uso. Un armario sin tiradores puede resultar
              visualmente limpio y, al mismo tiempo, poco práctico para
              determinadas personas. Por eso, la elección de sistemas de apertura,
              alturas y compartimentos debe responder a las necesidades reales. La
              estética del orden funciona mejor cuando no exige un esfuerzo
              constante para mantenerla.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              El baño como espacio personal
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Las revistas de interiorismo suelen mostrar baños impecables,
              cuidadosamente iluminados y libres de objetos cotidianos. Son
              imágenes capaces de inspirar, pero no siempre representan cómo se
              utiliza una vivienda. Un baño real necesita almacenar productos,
              permitir una limpieza sencilla y responder a diferentes rutinas. La
              calidad de su interiorismo no debería medirse únicamente por su
              apariencia en una fotografía. También importa cómo se siente al
              utilizarlo cada mañana.
            </p>
          </section>

          <section className="bg-stone-50 p-8 md:p-12 rounded-sm border-l-4 border-[#7A8B7C]">
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
              Una belleza que permanece
            </h2>
            <p className="text-body-lg text-stone-600 leading-relaxed">
              Las tendencias cambian, pero determinadas decisiones conservan su
              valor. La elección de materiales adecuados, una iluminación bien
              planificada y una organización funcional pueden contribuir a que el
              baño siga resultando agradable con el paso del tiempo. La tecnología
              puede formar parte de esa experiencia, siempre que se integre con
              naturalidad. No se trata de crear un espacio perfecto o intocable.
              Se trata de diseñar un entorno que admita la vida cotidiana sin
              perder su carácter.
            </p>
            <p className="text-body-lg text-stone-600 leading-relaxed mt-4 font-medium text-stone-800">
              Porque la belleza de lo esencial no reside en tener menos elementos,
              sino en conseguir que cada uno tenga sentido.
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
