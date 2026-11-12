/**
 * Ficha de producto de marca.
 *
 * Deliberadamente mínima: la página de marca añade imágenes, numeración y
 * contexto editorial; el dato solo guarda lo que identifica a la pieza.
 */
export interface BrandProduct {
  /** Ancla estable para enlazar a la pieza dentro de la ficha de marca. */
  id: string;
  /** Nombre comercial tal y como lo comunica el fabricante. */
  name: string;
  /** Retrato editorial de la pieza en dos o tres frases. */
  description: string;
  /** Rasgo que resume su aportación, en una sola línea. */
  highlight: string;
}

/**
 * Selección editorial de TOTO para el directorio de marcas.
 *
 * No es un catálogo completo: son las tres piezas que mejor explican el
 * relato de la marca, de la gama alta integrada al minimalismo de espacio.
 */
export const totoProducts: BrandProduct[] = [
  {
    id: "neorest-nx2",
    name: "NEOREST® NX2",
    description: "La culminación de la ingeniería japonesa. Un inodoro inteligente que combina diseño escultórico con funciones de higiene avanzadas y autolimpieza EWATER+.",
    highlight: "Diseño integrado y tecnología EWATER+."
  },
  {
    id: "washlet-g4",
    name: "Washlet® G4",
    description: "El asiento electrónico que revolucionó la higiene personal. Ofrece lavado suave con agua templada, asiento calefactado y secado por aire en un formato adaptable.",
    highlight: "El pionero de la higiene con agua."
  },
  {
    id: "gallery-series",
    name: "Colección Gallery",
    description: "Sanitarios de líneas puras y volúmenes compactos diseñados para integrarse con naturalidad en baños contemporáneos de cualquier tamaño.",
    highlight: "Minimalismo y eficiencia de espacio."
  }
];
