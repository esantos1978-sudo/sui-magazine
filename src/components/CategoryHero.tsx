import Image from "next/image";

type CategoryHeroProps = {
  /** Antetítulo editorial que sitúa la categoría dentro del magazine. */
  eyebrow: string;
  /** Único H1 de la página. */
  titulo: string;
  /** Entradilla que resume el propósito del hub. */
  descripcion: string;
  /** Ruta absoluta de la imagen desde `public`. */
  imagenSrc: string;
  /** Texto alternativo descriptivo de la imagen. */
  alt: string;
};

/**
 * Hero cinematográfico reutilizable para los hubs de categoría.
 *
 * Centraliza la imagen a sangre, el overlay y la jerarquía tipográfica para
 * que todos los silos compartan la misma entrada visual sin duplicar JSX.
 */
export default function CategoryHero({
  eyebrow,
  titulo,
  descripcion,
  imagenSrc,
  alt,
}: CategoryHeroProps) {
  return (
    <section className="relative flex h-[50vh] min-h-[350px] items-center justify-center overflow-hidden">
      <Image
        src={imagenSrc}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-stone-950/60"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <div
          className="mx-auto mb-8 h-px w-12 bg-[#7A8B7C]"
          aria-hidden="true"
        />
        <p className="font-sans text-eyebrow uppercase tracking-wider text-stone-300">
          {eyebrow}
        </p>
        <h1 className="mb-6 mt-4 text-balance font-serif text-h1 tracking-tight text-white">
          {titulo}
        </h1>
        <p className="mx-auto max-w-2xl font-sans text-body-lg leading-relaxed text-stone-200">
          {descripcion}
        </p>
      </div>
    </section>
  );
}
