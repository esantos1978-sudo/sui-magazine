# Sui Magazine

**El nuevo ritual de la higiene.**

Sui Magazine es un magazine editorial digital minimalista, inspirado en el estilo de publicaciones como Kinfolk, dedicado a los inodoros inteligentes japoneses (washlets), el bienestar y el diseño de baños. Está enfocado en el mercado español y reúne guías prácticas, cultura del agua, rankings de producto y contenido B2B para residencias y centros sociosanitarios.

> **Repositorio:** [github.com/esantos1978-sudo/sui-magazine](https://github.com/esantos1978-sudo/sui-magazine)
>
> **Versión:** 0.1.0 · **Framework:** Next.js 14.2.33

---

## ✨ Características principales

- **Next.js 14 con App Router:** páginas estáticas y renderizadas en build, con una arquitectura sencilla sin CMS ni base de datos.
- **TypeScript estricto:** tipado en todos los componentes y contenidos (`strict: true`).
- **Tailwind CSS 3:** sistema visual editorial basado en la paleta `stone`, utilidades responsive y composición tipográfica cuidada.
- **Tipografía editorial:** Playfair Display para titulares e Inter para cuerpo y navegación, cargadas con `next/font` y `display: swap`.
- **Diseño responsive:** interfaz mobile-first, header sticky, navegación accesible, tablas con scroll horizontal y footer compartido.
- **SEO on-page base:** `metadata` específica por ruta (título y descripción) y Open Graph en la home y las páginas editoriales. Incluye HTML semántico y rutas estáticas.
- **Contenido editorial completo:** home, guía esencial, bienestar y perfiles, guía de funcionalidades, ranking 2026 y cinco artículos prácticos sobre instalación, presupuesto, adaptación al baño español, tapa inteligente y sostenibilidad.
- **Ranking de producto:** siete modelos comparados con criterios editoriales, precio orientativo, puntuación, puntos fuertes, limitaciones y perfil recomendado.
- **Bienestar y perfiles:** narrativa sobre dignidad y autonomía, tres perfiles de cuidado con solución recomendada y CTA de orientación profesional.
- **Guía técnica por funcionalidades:** ocho características explicadas con utilidad real, modelos de referencia, nivel de precio, tabla comparativa y FAQ.
- **Página B2B con ROI:** `/profesionales` incluye costes ocultos del aseo tradicional, beneficios operativos, tabla de retorno de la inversión orientativa, FAQ y CTA de contacto.
- **Agente de scraping integrado:** script de Node.js + Playwright que descarga imágenes de producto, las valida y las convierte a JPEG real.
- **Accesibilidad base:** landmarks semánticos, etiquetas `aria`, elementos decorativos ocultos y estados de foco visibles.
- **Calidad de código:** ESLint con `next/core-web-vitals` y `next/typescript`, más comprobación de tipos en el build.

> **Alcance actual del SEO:** existe SEO on-page base, pero todavía no hay `sitemap.xml`, `robots.txt`, URLs canónicas ni datos estructurados. Son mejoras previstas para una fase posterior.

---

## 🧰 Stack tecnológico

| Capa | Tecnología | Uso en el proyecto |
|---|---|---|
| Framework | [Next.js](https://nextjs.org/) 14.2.33 | App Router, rutas estáticas y build de producción |
| UI | [React](https://react.dev/) 18 | Composición de páginas y componentes |
| Lenguaje | [TypeScript](https://www.typescriptlang.org/) 5 | Tipado estricto de contenido y componentes |
| Estilos | [Tailwind CSS](https://tailwindcss.com/) 3.4 | Utilidades, responsive y paleta `stone` |
| Tipografías | `next/font` (Google Fonts) | Playfair Display e Inter, servidas de forma optimizada |
| Scraping | [Playwright](https://playwright.dev/) 1.64 + Chromium | Extracción y normalización de imágenes de producto |
| Calidad | ESLint 8 + `eslint-config-next` | Reglas de Next.js, Core Web Vitals y TypeScript |
| Runtime | Node.js 18.17 o superior | Desarrollo, build y ejecución del scraper |
| Despliegue | [Vercel](https://vercel.com/) | Destino previsto; se conecta al repositorio de GitHub |

---

## 🗂️ Estructura del proyecto

Árbol simplificado (se omiten `node_modules`, `.next` y archivos generados):

```text
sui-magazine/
├── src/
│   ├── app/                              # Rutas y páginas (App Router)
│   │   ├── layout.tsx                    # Shell global, fuentes y metadata raíz
│   │   ├── page.tsx                      # Home editorial
│   │   ├── globals.css                   # Tailwind y estilos base
│   │   ├── favicon.ico
│   │   ├── guia/page.tsx                 # Guía esencial del washlet
│   │   ├── bienestar/page.tsx            # Bienestar, perfiles, autonomía y cuidados
│   │   ├── seleccion/page.tsx            # Ranking 2026 de siete modelos
│   │   ├── funcionalidades/page.tsx      # Guía técnica de ocho funcionalidades
│   │   ├── profesionales/page.tsx        # Propuesta B2B, ROI y FAQ
│   │   └── articulos/
│   │       ├── guia-instalacion/page.tsx
│   │       ├── mejores-bides-presupuesto/page.tsx
│   │       ├── bano-espanol-adaptaciones/page.tsx
│   │       ├── tapa-inteligente/page.tsx
│   │       └── bide-japones-sostenibilidad/page.tsx
│   ├── components/
│   │   └── Layout.tsx                    # Header, main y footer compartidos
│   ├── content/
│   │   └── formats.ts                    # Datos de los tres formatos de washlet
│   └── styles/
│       └── .gitkeep                      # Reservado para estilos adicionales
├── public/
│   └── images/
│       ├── hero-bathroom.jpg             # Imagen principal de la home
│       └── productos/                    # Imágenes gestionadas por el scraper
│           ├── .gitkeep
│           └── *.jpg
├── scripts/
│   └── scraper.mjs                       # Agente extractor con Playwright
├── .eslintrc.json
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

### Rutas públicas

| Ruta | Contenido |
|---|---|
| `/` | Home editorial: hero, manifiesto, tres formatos y lecturas relacionadas |
| `/guia` | Qué es un washlet, formatos disponibles, popularidad en España y ventajas |
| `/bienestar` | Dignidad y autonomía, tres perfiles de cuidado y orientación profesional |
| `/seleccion` | Ranking 2026 de siete modelos, criterios y análisis individuales |
| `/funcionalidades` | Guía técnica de las 8 funciones clave: utilidad, modelos, precio y comparativa |
| `/profesionales` | Argumentario B2B, costes, tabla de ROI orientativa, FAQ y contacto |
| `/articulos/guia-instalacion` | Instalación paso a paso de accesorios, tapas e inodoros completos |
| `/articulos/mejores-bides-presupuesto` | Recomendaciones por franjas de presupuesto |
| `/articulos/bano-espanol-adaptaciones` | Cal, enchufes, cisternas empotradas y normativa eléctrica |
| `/articulos/tapa-inteligente` | Deep dive de la tapa inteligente: materiales, calentamiento y modelos |
| `/articulos/bide-japones-sostenibilidad` | Impacto ecológico del bidé japonés: papel, agua, residuos y economía circular |

El contenido editorial vive directamente en los archivos TSX y en `src/content/formats.ts`; no hay CMS, base de datos ni rutas de API.

---

## 🚀 Guía de inicio rápido

### Requisitos previos

- **Node.js 18.17 o superior** (requisito de Next.js 14; se recomienda Node.js 20 LTS).
- **npm**, incluido con Node.js.
- **Git** para clonar el repositorio.
- Conexión a internet para descargar las Google Fonts en el primer build y para ejecutar el scraper.

No se necesitan variables de entorno para arrancar el proyecto.

### Instalación local

1. Clona el repositorio y entra en la carpeta:

   ```bash
   git clone https://github.com/esantos1978-sudo/sui-magazine.git
   cd sui-magazine
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Instala Chromium para Playwright. Este paso es **imprescindible** para que funcione el scraper:

   ```bash
   npx playwright install chromium
   ```

4. Arranca el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre [http://localhost:3000](http://localhost:3000) en el navegador.

> Si solo vas a trabajar en la web y no en la extracción de imágenes, puedes omitir el paso 3. `npm run scrape` no funcionará sin Chromium instalado.

### Comprobar el build de producción

```bash
npm run lint
npm run build
npm run start
```

---

## 📜 Scripts disponibles

| Comando | Script real | Qué hace |
|---|---|---|
| `npm run dev` | `next dev` | Inicia el servidor de desarrollo con recarga en caliente en `http://localhost:3000`. |
| `npm run build` | `next build` | Genera el build de producción, comprueba tipos y lint, y prerenderiza las páginas estáticas. |
| `npm run start` | `next start` | Sirve el build de producción. Requiere haber ejecutado `npm run build` antes. |
| `npm run lint` | `next lint` | Ejecuta ESLint con `next/core-web-vitals` y `next/typescript`. |
| `npm run scrape` | `node scripts/scraper.mjs` | Ejecuta el agente extractor de imágenes con Playwright. Requiere Chromium instalado. |

> Actualmente no hay script de tests automatizados.

---

## 🕷️ Sobre el agente extractor

El proyecto incluye `scripts/scraper.mjs`, un script ESM de Node.js que utiliza **Playwright + Chromium** para descargar la imagen principal de cada producto del ranking desde la web del fabricante y guardarla en `public/images/productos/[nombre].jpg`.

El flujo del scraper es el siguiente:

1. Recorre el array `products` definido al principio de `scripts/scraper.mjs`.
2. Navega a la ficha con `waitUntil: "networkidle"` y tolera timeouts si el DOM ya está cargado.
3. Busca la imagen mediante selectores de producto, la imagen de mayor tamaño dentro de `main`/`article`/`.product` y, como último recurso, la primera imagen de más de 400 px.
4. Resuelve lazy-loads y `srcset`, descarta miniaturas de menos de 200 px y puntúa las candidatas según las palabras clave del producto.
5. Descarga la imagen con el `referer` de la ficha; si el CDN responde 401/403, reintenta sin ese header.
6. Valida la firma binaria, descarta páginas HTML y convierte WebP/PNG a **JPEG real** mediante canvas, con fondo blanco y un lado máximo de 3000 px.
7. Espera entre 1,5 y 3 segundos entre productos y aísla los errores para que un fallo no detenga el resto del lote.

### Ejecución

```bash
npm run scrape
```

La salida indica la estrategia utilizada, la URL de origen y el archivo guardado. Al terminar muestra un resumen con el número de imágenes descargadas correctamente.

### Añadir o cambiar un producto

Edita el array `products` de `scripts/scraper.mjs`:

```js
{
  name: "mi-producto",
  url: "https://fabricante.com/producto",
  fallback: "https://fabricante.com/",
  keywords: ["marca", "modelo"],
}
```

- `name` se sanea y se usa como nombre de archivo: `mi-producto.jpg`.
- `url` es la ficha principal.
- `fallback` se prueba si la ficha falla o no contiene imágenes.
- `keywords` ayuda a priorizar la foto correcta frente a banners y fotos ambientales.

### Limitaciones conocidas

- **Protección anti-bot:** algunas webs bloquean navegadores automatizados. En la última ejecución, `mi.com` devolvió HTTP 403 para Xiaomi, por lo que esa imagen debe añadirse manualmente o desde una fuente oficial alternativa.
- **Modelos descatalogados o cambiantes:** VOGO y Brondell pueden requerir revisión manual. Las imágenes actuales de respaldo pertenecen a su gama, pero no necesariamente al modelo exacto del ranking.
- **Cambios de maquetación:** si un fabricante modifica su web, pueden ser necesarios ajustes en los selectores o en las palabras clave.
- **Uso editorial:** las imágenes pertenecen a sus fabricantes. Antes de publicarlas, revisa sus condiciones de uso y prioriza material de prensa oficial.
- **Imagen de Xiaomi pendiente:** la página `/seleccion` ya renderiza las imágenes de `public/images/productos/` con un contenedor 4:3 y `object-contain`. El archivo `xiaomi-smart-seat.jpg` sigue pendiente porque `mi.com` bloqueó la descarga; hasta añadirlo, el navegador mostrará un recurso roto en esa ficha.

---

## ☁️ Despliegue

El proyecto es una aplicación Next.js estándar y está listo para desplegarse en **Vercel** conectando el repositorio de GitHub:

1. Sube el proyecto a GitHub.
2. Importa el repositorio desde el panel de Vercel.
3. Vercel detecta Next.js automáticamente y usa `npm run build`.
4. Cada push a la rama principal puede generar un despliegue de producción; las pull requests obtienen previews.

No se necesita `vercel.json` ni variables de entorno para el build actual. El scraper **no se ejecuta durante el build**: se lanza manualmente en local. Los JPG generados se sirven como archivos estáticos desde `public/`, así que deben estar versionados en Git antes de desplegar si quieres incluirlos.

---

© Sui Magazine. El contenido editorial y las marcas citadas pertenecen a sus respectivos titulares.
