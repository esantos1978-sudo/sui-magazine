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

/**
 * Datos estructurados globales de la publicación.
 *
 * `WebSite` identifica el sitio y `publisher` declara la organización
 * responsable. El logo es provisional: `hero-bathroom.jpg` es una fotografía
 * de ambiente y debe sustituirse por el logotipo definitivo de la marca.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sui Magazine",
  url: "https://sui-magazine.vercel.app",
  description:
    "El nuevo ritual de la higiene. Revista independiente sobre bienestar, diseño y tecnología del baño.",
  publisher: {
    "@type": "Organization",
    name: "Sui Magazine",
    logo: {
      "@type": "ImageObject",
      url: "https://sui-magazine.vercel.app/images/hero-bathroom.jpg",
    },
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sui-magazine.vercel.app"),
  title: "Sui Magazine | El nuevo ritual de la higiene",
  description:
    "Un magazine editorial sobre bienestar, higiene inteligente y diseño de baños: guías, cultura del agua y selección de washlets japoneses.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sui Magazine | El nuevo ritual de la higiene",
    description:
      "Bienestar, diseño y sostenibilidad en un solo gesto. Descubre el universo de los washlets japoneses.",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sui Magazine | El nuevo ritual de la higiene",
    description:
      "Un magazine editorial sobre bienestar, higiene inteligente y diseño de baños.",
    images: ["/images/hero-bathroom.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
