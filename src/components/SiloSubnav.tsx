import Link from "next/link";

import { getSilo, type SiloId } from "@/content/silos";

type SiloSubnavProps = {
  /** Silo cuya navegación secundaria se muestra. */
  siloId: SiloId;
};

/**
 * Navegación secundaria de un silo.
 *
 * Se coloca justo después del hero de las páginas pilar existentes para
 * exponer sus recorridos sin alterar la ruta ni el contenido principal.
 */
export default function SiloSubnav({ siloId }: SiloSubnavProps) {
  const silo = getSilo(siloId);

  return (
    <nav
      aria-label={`Recorridos del silo ${silo.label}`}
      className="border-b border-stone-200 bg-white"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-5 md:flex-row md:items-baseline md:gap-8">
        <p className="shrink-0 font-sans text-eyebrow uppercase text-stone-500">
          En este silo
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {silo.subcategories.map((subcategory) => (
            <li key={subcategory.href}>
              <Link
                href={subcategory.href}
                className="font-sans text-xs text-stone-600 underline-offset-4 transition-colors hover:text-stone-900 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
              >
                {subcategory.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
