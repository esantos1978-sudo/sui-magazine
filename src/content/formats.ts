/**
 * Contenido editorial de la home: los tres grandes formatos de higiene
 * inteligente. Se aísla del componente para poder reutilizarlo en la guía
 * y en futuras páginas de selección.
 */
export type WashletFormat = {
  /** Emoji decorativo que actúa como icono de la tarjeta. */
  icon: string;
  title: string;
  description: string;
};

export const formats: WashletFormat[] = [
  {
    icon: "💧",
    title: "Accesorio Mecánico",
    description:
      "La puerta de entrada. Sin electricidad, sin obras. Solo la presión del agua.",
  },
  {
    icon: "✨",
    title: "Tapa Inteligente",
    description:
      "Transforma tu inodoro actual. Agua caliente, secado y confort sin cambiar la cerámica.",
  },
  {
    icon: "🌿",
    title: "Inodoro Completo",
    description:
      "La experiencia definitiva. Diseño integrado, automatización total, cero contacto.",
  },
];
