import type { Metadata } from "next";

import CategoryHero from "@/components/CategoryHero";

/**
 * Aviso legal: titularidad, privacidad, cookies y propiedad intelectual.
 * Los datos societarios pendientes se marcan entre corchetes para no
 * publicar información que todavía no se puede verificar.
 */
export const metadata: Metadata = {
  alternates: {
    canonical: "/legal",
  },
  title: "Aviso Legal y Política de Privacidad | Sui Magazine",
  description:
    "Titularidad, política de privacidad, cookies y propiedad intelectual de Sui Magazine. Información transparente sobre el uso de esta publicación.",
  openGraph: {
    title: "Aviso Legal y Política de Privacidad | Sui Magazine",
    description:
      "Titularidad, privacidad, cookies y propiedad intelectual de Sui Magazine.",
    locale: "es_ES",
    type: "website",
  },
};

type LegalDetail = {
  /** Nombre del dato identificativo. */
  label: string;
  /** Valor visible o marcador pendiente de completar. */
  value: string;
  /** Enlace opcional, usado para el correo de contacto. */
  href?: string;
};

const legalDetails: LegalDetail[] = [
  { label: "Nombre de la empresa", value: "[Nombre de la empresa]" },
  { label: "Domicilio", value: "[Dirección]" },
  { label: "NIF", value: "[NIF]" },
  {
    label: "Contacto legal",
    value: "legal@sui-magazine.com",
    href: "mailto:legal@sui-magazine.com",
  },
];

/** Compromisos concretos de privacidad y cookies. */
const privacyPoints = [
  "No cedemos tus datos personales a terceros ni los utilizamos para elaborar perfiles comerciales.",
  "Si te suscribes al boletín, puedes darte de baja con un solo clic desde cualquier envío.",
  "Solo utilizamos cookies técnicas esenciales para el funcionamiento del sitio. No hay cookies publicitarias ni herramientas de seguimiento.",
  "Los correos que nos envías se conservan únicamente durante el tiempo necesario para atender tu consulta o cumplir una obligación legal.",
];

/** Párrafos sobre derechos de autor y uso de contenidos. */
const intellectualPropertyParagraphs = [
  "Los textos, fotografías, ilustraciones y elementos gráficos propios de Sui Magazine están protegidos por la Ley de Propiedad Intelectual. Su reproducción total o parcial requiere autorización expresa y por escrito.",
  "Se permite citar fragmentos con atribución y enlace a la fuente, así como enlazar las páginas. No se autoriza la copia íntegra de artículos ni su reutilización comercial.",
  "Las marcas, nombres comerciales e imágenes de producto citadas pertenecen a sus respectivos titulares. Su mención es informativa y no implica patrocinio ni vinculación comercial.",
];

export default function LegalPage() {
  return (
    <>
      {/* 1. Hero institucional con el único H1 de la página. */}
      <CategoryHero
        eyebrow="Legal"
        titulo="Aviso legal"
        descripcion="Información transparente sobre el uso de esta publicación."
        imagenSrc="/images/formatos/inodoro-completo.jpg"
        alt="Inodoro suspendido blanco sobre un panel de mármol gris y suelo de madera"
      />

      {/* 2. Titularidad y datos de contacto legal. */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="font-sans text-eyebrow uppercase tracking-wider text-stone-500">
            01 · Titularidad
          </p>
          <h2 className="mt-4 text-balance font-serif text-h2 tracking-tight text-stone-900">
            Responsable
          </h2>
          <p className="mt-8 font-sans text-body-lg leading-relaxed text-stone-700">
            Este sitio es una publicación editorial independiente. Los datos
            identificativos completos se incorporarán antes de la apertura
            comercial del proyecto; hasta entonces se muestran como marcadores
            pendientes para no publicar información que no se pueda verificar.
          </p>

          <dl className="mt-10 divide-y divide-stone-200 border-y border-stone-200">
            {legalDetails.map((detail) => (
              <div
                key={detail.label}
                className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[180px_1fr] sm:gap-6"
              >
                <dt className="font-sans text-sm font-medium text-stone-500">
                  {detail.label}
                </dt>
                <dd className="font-sans text-body-base leading-relaxed text-stone-900">
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="border-b border-stone-900 pb-0.5 transition hover:border-stone-600 hover:text-stone-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    detail.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 font-sans text-caption leading-relaxed text-stone-500">
            Los campos entre corchetes deben completarse con los datos
            societarios definitivos antes de la publicación.
          </p>
        </div>
      </section>

      {/* 3. Privacidad, datos y cookies. */}
      <section className="bg-stone-50 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="font-sans text-eyebrow uppercase tracking-wider text-stone-500">
            02 · Tus datos
          </p>
          <h2 className="mt-4 text-balance font-serif text-h2 tracking-tight text-stone-900">
            Política de privacidad
          </h2>
          <p className="mt-8 font-sans text-body-lg leading-relaxed text-stone-700">
            La privacidad no es una casilla que se marca al final: es una regla
            de diseño. Recogemos únicamente los datos necesarios para responder
            a lo que nos pides y explicamos con claridad qué hacemos con ellos.
          </p>
          <ul className="mt-8 space-y-4 font-sans text-body-base leading-relaxed text-stone-700">
            {privacyPoints.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="text-[#7A8B7C]" aria-hidden="true">
                  →
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 font-sans text-body-base leading-relaxed text-stone-700">
            Puedes ejercer tus derechos de acceso, rectificación, supresión,
            limitación y oposición escribiendo a{" "}
            <a
              href="mailto:legal@sui-magazine.com"
              className="border-b border-stone-900 pb-0.5 transition hover:border-stone-600 hover:text-stone-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
            >
              legal@sui-magazine.com
            </a>
            . Responderemos en el plazo que marca la normativa aplicable.
          </p>
        </div>
      </section>

      {/* 4. Derechos de autor y uso de marcas. */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="font-sans text-eyebrow uppercase tracking-wider text-stone-500">
            03 · Contenido
          </p>
          <h2 className="mt-4 text-balance font-serif text-h2 tracking-tight text-stone-900">
            Propiedad intelectual
          </h2>
          <div className="mt-8 space-y-6 font-sans text-body-lg leading-relaxed text-stone-700">
            {intellectualPropertyParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-10 border-t border-stone-200 pt-6 font-sans text-caption leading-relaxed text-stone-500">
            Última revisión: octubre de 2026.
          </p>
        </div>
      </section>
    </>
  );
}
