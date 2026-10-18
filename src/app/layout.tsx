import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import Layout from "@/components/Layout";

import "./globals.css";

/**
 * Tipografías editoriales:
 * - Playfair Display (serif) para titulares y el logotipo.
 * - Inter (sans) para cuerpo de texto, navegación y metadatos.
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sui Magazine | El nuevo ritual de la higiene",
  description:
    "Un magazine editorial sobre bienestar, higiene inteligente y diseño de baños: guías, cultura del agua y selección de washlets japoneses.",
  openGraph: {
    title: "Sui Magazine | El nuevo ritual de la higiene",
    description:
      "Bienestar, diseño y sostenibilidad en un solo gesto. Descubre el universo de los washlets japoneses.",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
