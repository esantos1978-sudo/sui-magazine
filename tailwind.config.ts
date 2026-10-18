import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

/**
 * Configuración de Tailwind para Sui Magazine.
 *
 * - `stone` se declara de forma explícita (aunque ya forma parte de la paleta
 *   por defecto) para dejar constancia de que es la base cromática del proyecto.
 * - Las familias tipográficas consumen las variables CSS que genera next/font.
 * - La escala tipográfica editorial (`display`, `h1`–`h3`, `body-*`, `caption`,
 *   `eyebrow`) fija tamaño, interlineado, tracking y peso para evitar ajustes
 *   manuales por componente.
 * - `section` y `section-sm` normalizan el ritmo vertical de las secciones.
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: colors.stone,
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-playfair)", ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        display: [
          "80px",
          {
            lineHeight: "1.04",
            letterSpacing: "-0.02em",
            fontWeight: "400",
          },
        ],
        h1: [
          "50px",
          {
            lineHeight: "1.04",
            letterSpacing: "-0.02em",
            fontWeight: "400",
          },
        ],
        h2: [
          "40px",
          {
            lineHeight: "1.15",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
        h3: [
          "32px",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
        "body-lg": [
          "20px",
          { lineHeight: "1.5", fontWeight: "400" },
        ],
        "body-base": [
          "17px",
          { lineHeight: "1.6", fontWeight: "400" },
        ],
        caption: [
          "13px",
          { lineHeight: "1.4", fontWeight: "400" },
        ],
        eyebrow: [
          "11px",
          {
            lineHeight: "1",
            letterSpacing: "0.15em",
            fontWeight: "400",
          },
        ],
      },
      spacing: {
        section: "80px", // py-20 equivalente
        "section-sm": "60px", // py-16 equivalente
      },
    },
  },
  plugins: [],
};

export default config;
