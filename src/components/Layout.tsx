import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Enlaces principales del magazine.
 */
const navigation = [
  { label: "Guía", href: "/guia" },
  { label: "Bienestar", href: "/bienestar" },
  { label: "Perfiles", href: "/perfiles" },
  { label: "Selección", href: "/seleccion" },
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
        <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 md:px-10">
          <Link
            href="/"
            aria-label="Sui Magazine, inicio"
            className="font-serif text-2xl tracking-tight text-stone-900 transition-colors duration-300 hover:text-stone-600"
          >
            Sui
          </Link>

          <nav aria-label="Navegación principal">
            <ul className="flex items-center gap-6 sm:gap-10">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-[0.65rem] uppercase tracking-[0.22em] text-stone-500 transition-colors duration-300 hover:text-stone-900 sm:text-xs"
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
          <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 sm:justify-start">
            <span>
              © {new Date().getFullYear()} Sui Magazine. Todos los derechos
              reservados.
            </span>
            <span className="text-stone-300" aria-hidden="true">
              |
            </span>
            <Link
              href="/profesionales"
              className="transition-colors hover:text-stone-900"
            >
              Soluciones para profesionales
            </Link>
          </p>
          <p className="uppercase tracking-[0.22em] text-stone-400">
            Bienestar · Diseño · Higiene inteligente
          </p>
        </div>
      </footer>
    </div>
  );
}
