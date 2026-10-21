import type { Metadata } from "next";

import CategoryHero from "@/components/CategoryHero";

/**
 * Presentación editorial del magazine. Explica la misión, el equipo y los
 * límites del proyecto sin atribuir credenciales que no se puedan verificar.
 */
export const metadata: Metadata = {
  alternates: {
    canonical: "/sobre-el-magazine",
  },
  title: "Sobre Sui Magazine | El nuevo ritual de la higiene",
  description:
    "Sui Magazine es una publicación independiente sobre el ritual del agua, el bienestar y el diseño del baño contemporáneo. Conoce nuestra misión y nuestro equipo.",
  openGraph: {
    title: "Sobre Sui Magazine | El nuevo ritual de la higiene",
    description:
      "Una publicación independiente sobre el ritual del agua, el bienestar y el diseño del baño contemporáneo.",
    locale: "es_ES",
    type: "website",
  },
};

/** Párrafos que explican por qué existe el magazine. */
const missionParagraphs = [
  "El baño es el último espacio íntimo del día. Es donde empezamos y terminamos la jornada, donde cuidamos el cuerpo y donde muchas veces se manifiestan los límites de una casa que ya no se adapta a quien la habita. Sin embargo, rara vez recibe la misma atención que la cocina o el salón.",
  "En Sui Magazine miramos ese espacio desde tres ángulos que pocas veces se explican juntos: la tecnología que hace posible el washlet, el diseño que lo integra con dignidad y el bienestar que aporta a quien lo usa. No nos interesa el catálogo infinito; nos interesa entender qué cambia de verdad en el ritual diario.",
  "Por eso no vendemos productos ni aceptamos publicidad encubierta. Publicamos guías, análisis y contexto para que puedas decidir con criterio: qué necesitas, qué no, cuánto cuesta mantenerlo y cuándo una solución convencional sigue siendo la mejor respuesta.",
];

/** Párrafos sobre la composición y los límites del equipo editorial. */
const teamParagraphs = [
  "Sui Magazine no lo firma una sola persona. Detrás hay periodistas acostumbrados a contrastar fuentes, diseñadores y arquitectos que entienden el baño como parte de una casa, y especialistas en higiene y salud que nos ayudan a distinguir una mejora real de una promesa comercial.",
  "Trabajamos con instaladores, documentación técnica y experiencia de uso. Cuando no tenemos una respuesta verificable, lo decimos. Cuando un tema requiere criterio sanitario, lo tratamos con prudencia y derivamos a profesionales.",
];

type TeamDiscipline = {
  /** Área de especialidad dentro del equipo editorial. */
  title: string;
  /** Aportación concreta de esa disciplina al magazine. */
  description: string;
};

const teamDisciplines: TeamDiscipline[] = [
  {
    title: "Periodismo",
    description:
      "Documentación, contraste de fuentes y edición de cada pieza antes de publicarla.",
  },
  {
    title: "Diseño y arquitectura",
    description:
      "Lectura del espacio, los materiales y la escala humana del baño contemporáneo.",
  },
  {
    title: "Higiene y salud",
    description:
      "Criterio técnico para hablar de cuidado sin convertir la revista en un folleto médico.",
  },
];

export default function SobreElMagazinePage() {
  return (
    <>
      {/* 1. Hero institucional con el único H1 de la página. */}
      <CategoryHero
        eyebrow="Quiénes somos"
        titulo="Sui Magazine"
        descripcion="Una publicación independiente sobre el ritual del agua, el bienestar y el diseño del baño contemporáneo."
        imagenSrc="/images/hero-bathroom.jpg"
        alt="Baño de piedra natural con bañera exenta, luz suave y madera cálida"
      />

      {/* 2. Misión editorial y pull quote. */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="font-sans text-eyebrow uppercase tracking-wider text-stone-500">
            01 · Nuestra razón de ser
          </p>
          <h2 className="mt-4 text-balance font-serif text-h2 tracking-tight text-stone-900">
            Nuestra misión
          </h2>
          <div className="mt-8 space-y-6 font-sans text-body-lg leading-relaxed text-stone-700">
            {missionParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <blockquote className="mt-14 border-t border-stone-200 pt-10">
            <div className="h-px w-12 bg-[#7A8B7C]" aria-hidden="true" />
            <p className="mt-8 text-balance font-serif text-3xl italic leading-tight text-stone-800 md:text-4xl">
              “No vendemos productos. Ofrecemos criterio.”
            </p>
            <div className="mt-8 h-px w-12 bg-[#7A8B7C]" aria-hidden="true" />
          </blockquote>
        </div>
      </section>

      {/* 3. Equipo multidisciplinar y límites del proyecto. */}
      <section className="bg-stone-50 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="font-sans text-eyebrow uppercase tracking-wider text-stone-500">
              02 · Quién lo hace posible
            </p>
            <h2 className="mt-4 text-balance font-serif text-h2 tracking-tight text-stone-900">
              Nuestro equipo
            </h2>
            <div className="mt-8 space-y-6 font-sans text-body-lg leading-relaxed text-stone-700">
              {teamParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {teamDisciplines.map((discipline) => (
              <article
                key={discipline.title}
                className="border-t border-stone-300 pt-6"
              >
                <h3 className="font-serif text-xl leading-snug text-stone-900">
                  {discipline.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-stone-600">
                  {discipline.description}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-12 max-w-3xl border-t border-stone-200 pt-8 font-sans text-body-base leading-relaxed text-stone-700">
            No somos una marca de inodoros ni una tienda. Somos una revista:
            nuestro producto es el criterio, y nuestra obligación es explicar
            cómo llegamos a él.
          </p>
        </div>
      </section>
    </>
  );
}
