# Sui Magazine

Magazine editorial sobre bienestar, higiene inteligente y diseño de baños,
centrado en el universo de los washlets japoneses. Estética minimalista y
aspiracional inspirada en publicaciones como Kinfolk.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript
- Tailwind CSS 3 con paleta `stone`
- `next/font` para Playfair Display (titulares) e Inter (cuerpo)
- Alias de importación `@/*` → `src/*`

## Scripts

```bash
npm run dev    # Servidor de desarrollo en http://localhost:3000
npm run build  # Build de producción
npm run start  # Servir el build de producción
npm run lint   # ESLint
```

## Estructura

```text
src/
├── app/
│   ├── globals.css     # Tailwind + estilos base
│   ├── layout.tsx      # Fuentes, metadata y Layout
│   ├── page.tsx        # Home editorial
│   └── guia/
│       └── page.tsx    # Guía esencial
├── components/
│   └── Layout.tsx      # Header, main y footer
├── content/
│   └── formats.ts      # Contenido de los tres formatos
└── styles/             # Reservado para estilos adicionales

public/
└── images/
    └── hero-bathroom.jpg  # Placeholder generado
```

## Puntos de configuración

- `tailwind.config.ts`: familias `font-sans` / `font-serif` conectadas a las
  variables `--font-inter` y `--font-playfair`, y escala `stone` explícita.
- `src/app/layout.tsx`: metadata base y carga de Google Fonts mediante
  `next/font` (requiere conexión a internet en el primer build).
- `public/images/hero-bathroom.jpg`: imagen de reemplazo. Sustitúyela por una
  fotografía propia manteniendo el mismo nombre o actualizando la ruta en
  `src/app/page.tsx`.

## Pendiente para siguientes fases

- Páginas `/bienestar` y `/seleccion` (los enlaces ya apuntan a ellas).
- Fichas de producto y estructura de afiliación.
- Imágenes editoriales definitivas y optimización de metadatos/SEO por página.
