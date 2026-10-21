import Link from "next/link";
import type { ReactNode } from "react";

import { institutionalNavigation, silos } from "@/content/silos";

/**
 * Enlaces principales del magazine.
 *
 * La navegación refleja los seis silos oficiales definidos en el Anexo B del
 * SPEC. No se añaden rutas sueltas: cada entrada apunta a la página pilar.
 */
const navigation = silos.map((silo) => ({
  label: silo.label,
  href: silo.href,
}));

/**
 * Enlaces institucionales del pie de página.
 *
 * Se mantienen fuera del menú principal para no competir con los silos y
 * conservar accesibles las rutas de servicio del magazine.
 */
const footerNavigation = institutionalNavigation;

type LayoutProps = {
  children: ReactNode;
};

/**
 * Estructura editorial común: header minimalista, contenido y footer.
 * El fondo stone-50 y la tipografía sans se heredan a todas las páginas.
 */
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50 text-stone-900">
      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur">
        <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between gap-4 px-6 md:px-10">
          <Link
            href="/"
            aria-label="Sui Magazine, inicio"
            className="shrink-0 font-serif text-2xl tracking-tight text-stone-900 transition-colors duration-300 hover:text-stone-600"
          >
            Sui
          </Link>

          <nav
            aria-label="Navegación principal"
            className="min-w-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <ul className="flex items-center gap-3 whitespace-nowrap sm:gap-6">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-sm uppercase tracking-wide text-stone-500 transition-colors duration-300 hover:text-stone-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-10">
            <div>
              <Link
                href="/"
                aria-label="Sui Magazine, inicio"
                className="inline-block font-serif text-2xl tracking-tight text-stone-900 transition-colors hover:text-stone-600"
              >
                Sui
              </Link>
              <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-stone-600">
                El nuevo ritual de la higiene. Un magazine editorial sobre
                washlets, bienestar y diseño del baño en España.
              </p>
              <p className="mt-6 font-sans text-eyebrow uppercase tracking-[0.22em] text-stone-400">
                Bienestar · Diseño · Higiene inteligente
              </p>
            </div>

            <nav aria-label="Secciones del magazine">
              <p className="font-sans text-eyebrow uppercase text-stone-500">
                Secciones
              </p>
              <ul className="mt-5 space-y-3">
                {silos.map((silo) => (
                  <li key={silo.id}>
                    <Link
                      href={silo.href}
                      className="font-sans text-sm text-stone-600 transition-colors hover:text-stone-900"
                    >
                      {silo.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Información institucional">
              <p className="font-sans text-eyebrow uppercase text-stone-500">
                Magazine
              </p>
              <ul className="mt-5 space-y-3">
                {footerNavigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-sans text-sm text-stone-600 transition-colors hover:text-stone-900"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-stone-200 pt-6 text-xs tracking-wide text-stone-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Sui Magazine. Todos los derechos
              reservados.
            </p>
            <p className="uppercase tracking-[0.22em] text-stone-400">
              España · es_ES
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
