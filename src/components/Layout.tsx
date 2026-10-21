import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Enlaces principales del magazine.
 */
const navigation = [
  { label: "Guía", href: "/guia" },
  { label: "Bienestar", href: "/bienestar" },
  { label: "Ranking", href: "/seleccion" },
  { label: "Marcas", href: "/marcas" },
  { label: "Diseño", href: "/diseno" },
] as const;

/**
 * Enlaces secundarios del pie de página. Se mantienen accesibles fuera del
 * menú principal para no saturar la navegación en pantallas pequeñas.
 */
const footerNavigation = [
  { label: "Profesionales", href: "/profesionales" },
  { label: "Bienestar y Perfiles", href: "/bienestar" },
  { label: "Funcionalidades", href: "/funcionalidades" },
] as const;

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

      <footer className="border-t border-stone-200">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 py-10 text-center text-xs tracking-wide text-stone-500 sm:flex-row sm:text-left md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 sm:justify-start">
            <span>
              © {new Date().getFullYear()} Sui Magazine. Todos los derechos
              reservados.
            </span>
            <span className="text-stone-300" aria-hidden="true">
              |
            </span>
            <nav aria-label="Enlaces del pie">
              <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 sm:justify-start">
                {footerNavigation.map((item, index) => (
                  <li key={item.href} className="flex items-center gap-x-2">
                    {index > 0 && (
                      <span className="text-stone-300" aria-hidden="true">
                        ·
                      </span>
                    )}
                    <Link
                      href={item.href}
                      className="text-xs transition-colors hover:text-stone-900"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <p className="uppercase tracking-[0.22em] text-stone-400">
            Bienestar · Diseño · Higiene inteligente
          </p>
        </div>
      </footer>
    </div>
  );
}
