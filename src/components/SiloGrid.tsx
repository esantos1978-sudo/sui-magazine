import Image from "next/image";
import Link from "next/link";

import { silos } from "@/content/silos";

/**
 * Rejilla editorial con los seis silos del magazine.
 *
 * Se usa en la portada para presentar la arquitectura de información y
 * ofrecer enlaces directos a los primeros recorridos de cada silo. Los
 * componentes son de servidor: no hay estado ni interactividad de cliente.
 */
export default function SiloGrid() {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {silos.map((silo, index) => (
        <article key={silo.id} className="group flex h-full flex-col">
          <Link
            href={silo.href}
            className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
          >
            <div className="mb-6 overflow-hidden bg-stone-100">
              <Image
                src={silo.image.src}
                alt={silo.image.alt}
                width={800}
                height={600}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <span
              className="font-serif text-3xl text-stone-300 transition-colors duration-300 group-hover:text-[#7A8B7C]"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="mb-3 mt-2 font-serif text-h3 tracking-tight text-stone-900 transition-colors duration-300 group-hover:text-stone-600">
              {silo.label}
            </h3>
          </Link>

          <p className="flex-1 font-sans text-body-base leading-relaxed text-stone-600">
            {silo.summary}
          </p>

          <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-stone-200 pt-4">
            {silo.subcategories.slice(0, 3).map((subcategory) => (
              <li key={subcategory.href}>
                <Link
                  href={subcategory.href}
                  className="font-sans text-xs text-stone-500 transition-colors hover:text-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
                >
                  {subcategory.label}
                </Link>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
