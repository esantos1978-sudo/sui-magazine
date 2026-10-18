import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

/**
 * Configuración de Tailwind para Sui Magazine.
 *
 * - `stone` se declara de forma explícita (aunque ya forma parte de la paleta
 *   por defecto) para dejar constancia de que es la base cromática del proyecto.
 * - Las familias tipográficas consumen las variables CSS que genera next/font.
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
    },
  },
  plugins: [],
};

export default config;
