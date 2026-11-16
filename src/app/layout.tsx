import type { Metadata, Viewport } from "next";
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
 * responsable. El logotipo oficial es el SVG tipográfico de `/logo.svg`
 * (viewBox 200 × 60, fondo transparente).
 */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SUI Magazine",
  url: "https://suimagazine.com",
  description:
    "El nuevo ritual de la higiene. Revista independiente sobre bienestar, diseño y tecnología del baño.",
  publisher: {
    "@type": "Organization",
    name: "SUI Magazine",
    logo: {
      "@type": "ImageObject",
      url: "https://suimagazine.com/logo.svg",
      width: 200,
      height: 60,
    },
  },
};

/**
 * Metadata raíz del magazine.
 *
 * `metadataBase` es la pieza crítica: convierte en absolutas todas las URLs
 * relativas de metadata (Open Graph, Twitter, canónicos) usando el dominio
 * definitivo. Sin ella, las imágenes sociales se resuelven contra el host
 * desde el que se sirve la página y los previsualizadores las ignoran.
 *
 * El `title.template` añade la firma de marca solo a las páginas hijas; las
 * páginas declaran su título sin el sufijo `| SUI Magazine` para no duplicarlo.
 * La home usa `title.default`, que no pasa por el template.
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://suimagazine.com"),
  title: {
    default: "SUI Magazine | Diseño, bienestar y tecnología del baño inteligente",
    template: "%s | SUI Magazine",
  },
  description:
    "Revista editorial sobre el baño como espacio de calma, diseño y bienestar.",
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://suimagazine.com",
    siteName: "SUI Magazine",
    title: "SUI Magazine",
    description:
      "Revista editorial sobre diseño, bienestar y tecnología del baño inteligente.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "SUI Magazine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SUI Magazine",
    description:
      "Revista editorial sobre diseño, bienestar y tecnología del baño inteligente.",
    images: ["/og-default.jpg"],
  },
};

/**
 * Metadatos del viewport que no pertenecen al objeto `metadata`.
 * `#FAFAF9` es el fondo base (`bg-stone-50`) del magazine.
 */
export const viewport: Viewport = {
  themeColor: "#FAFAF9",
  colorScheme: "light",
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
