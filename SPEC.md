# SPEC.md — Sui Magazine

> **Fuente Única de la Verdad (SSOT) para el diseño, el contenido y la arquitectura de Sui Magazine.**
> Este documento describe el ADN del proyecto. Cualquier persona —o IA— que modifique, amplíe o clone el sitio debe leerlo antes de escribir una sola línea de código.

| Campo | Valor |
|---|---|
| Proyecto | Sui Magazine |
| Versión del SPEC | 1.0 |
| Estado | Vigente |
| Ámbito | Identidad, diseño, UI, contenido, arquitectura y calidad |
| Última revisión | Octubre de 2026 |
| Autoridad | Este documento prevalece sobre supuestos, preferencias personales y código legado |

---

## 0. Propósito y contrato de uso

### 0.1 Qué es este documento

`SPEC.md` es la referencia canónica del proyecto. Define **qué es Sui Magazine, cómo se ve, cómo se escribe, cómo se construye y qué reglas no se pueden romper**. No es una guía de inspiración: es un contrato de implementación.

### 0.2 Jerarquía de decisiones

1. **Este SPEC** define la intención y las reglas.
2. **El código** implementa esas reglas.
3. **El README** explica cómo ejecutar y desplegar el proyecto.

Si el código contradice este documento, existe una de estas dos situaciones:

- Es un **bug** y debe corregirse.
- Es una **decisión deliberada** y, entonces, primero se actualiza este SPEC y después el código.

Nunca se introduce una regla nueva solo porque un componente aislado la use.

### 0.3 Protocolo de clonación

Este proyecto está diseñado para convertirse en plantilla. Para crear otra publicación con la misma arquitectura:

1. Cambia la identidad de la sección 1: nombre, temática, promesa y tono.
2. Cambia los valores de la sección 2: paleta, tipografías, escala y espaciado.
3. Conserva la estructura de componentes, la arquitectura de la sección 4 y las reglas de calidad.
4. Sustituye navegación, rutas, textos e imágenes.
5. Revisa el resultado en móvil y escritorio y actualiza este SPEC si alguna regla cambia.

---

## 1. Identidad y Filosofía

### 1.1 Posicionamiento

Sui Magazine es una **revista editorial digital sobre el ritual del agua, el bienestar y el diseño del baño**. Su territorio principal son los inodoros inteligentes japoneses —washlets y bidés japoneses—, pero su mirada es más amplia: higiene, intimidad, autonomía, sostenibilidad, cultura del agua, arquitectura y objetos cotidianos bien diseñados.

No es un catálogo comercial ni una web de electrodomésticos. Es una publicación que **explica, contextualiza y selecciona** con criterio editorial, dirigida al mercado español.

**Promesa:** convertir un gesto íntimo y cotidiano en una experiencia de bienestar consciente, sin ruido, sin tecnicismos innecesarios y sin promesas exageradas.

### 1.2 Principios visuales

El estilo visual se define como **Kinfolk cálido con sensibilidad wabi-sabi**: editorial, sereno, matérico y de alta gama, pero nunca frío ni ostentoso.

| Principio | Aplicación |
|---|---|
| **Calma** | Mucho aire, pocos elementos por pantalla y jerarquías claras. |
| **Materialidad** | Piedra, madera, cerámica, lino, vapor y luz natural como imaginario. |
| **Editorialidad** | Titulares serif de gran escala, textos medidos, líneas finas y numeración de sección. |
| **Imperfección serena** | Composiciones asimétricas y fotografías con textura, no renders clínicos. |
| **Contención** | Un solo acento cromático, una sola familia serif y un solo lenguaje de bordes. |
| **Intimidad** | El baño se trata con dignidad, nunca con vulgaridad ni humor fácil. |
| **Lujo silencioso** | La calidad se sugiere con espacio, detalle y precisión, no con dorados ni efectos. |

**Referencias:** revistas impresas de lifestyle, fotografía de interiores con luz natural, arquitectura japonesa contemporánea, diseño escandinavo cálido y papel de alta calidad.

**Anti-referencias:** webs de electrónica, marketplaces, landings de conversión agresiva, neones, degradados multicolor, badges, emojis decorativos a gran escala, glassmorphism, sombras profundas y bordes muy redondeados.

### 1.3 Atmósfera

La atmósfera debe evocar **silencio, agua templada, luz filtrada y porcelana**. El visitante debe sentir que entra en una publicación cuidada, no en una tienda.

- **Luz:** natural, cálida, difusa; sombras suaves, nunca duras.
- **Textura:** madera, piedra, lino, cerámica, vapor y superficies mate.
- **Ritmo:** lento, pausado, con secciones que respiran y transiciones discretas.
- **Sonido mental:** silencio, agua corriendo suavemente, una habitación vacía.
- **Color emocional:** piedra, arena, hueso, salvia y blanco cálido.

Las fotografías deben ser atmosféricas y creíbles: interiores reales, materiales nobles, cuerpos y manos tratados con respeto. Se evitan las sonrisas de stock, los baños de hospital, los primeros planos desagradables y los montajes artificiales.

### 1.4 Tono de voz

Sui habla en **español de España**, con cercanía culta y serenidad. Escribe en segunda persona del singular (`tú`), con naturalidad, y usa la primera persona del plural (`nosotros`) para la voz editorial.

| Atributo | Cómo se traduce |
|---|---|
| **Cálido** | Acompaña, no alecciona. Reconoce dudas y vergüenzas cotidianas sin morbo. |
| **Editorial** | Contextualiza, compara y argumenta; no se limita a listar especificaciones. |
| **Preciso** | Da cifras, rangos y condiciones. Los precios son siempre orientativos. |
| **Sensorial** | Usa imágenes concretas: agua tibia, porcelana, luz de mañana, aire caliente. |
| **Sereno** | Frases claras y ritmo pausado. Evita la urgencia artificial y los signos de exclamación. |
| **Honesto** | Reconoce límites, mantenimiento, instalación y casos en los que el producto no encaja. |
| **Respetuoso** | Habla de dependencia, movilidad y cuidados con dignidad, nunca con lástima. |

**Hacer:**

- “El agua templada sustituye al papel seco y devuelve intimidad al gesto.”
- “Antes de comprar, comprueba que tienes toma de agua y un enchufe cerca.”
- “El precio es orientativo y varía según acabado, instalación y distribuidor.”

**Evitar:**

- “¡El mejor bidé del mercado! ¡No te lo puedes perder!”
- “Solución revolucionaria y disruptiva que cambiará tu vida para siempre.”
- Promesas médicas, curas, resultados garantizados o afirmaciones sin fuente.
- Infantilizar a personas mayores o presentar la dependencia como una tragedia.
- Anglicismos innecesarios cuando existe una palabra clara en español.

### 1.5 Límites editoriales

- **Salud:** la información es divulgativa y no sustituye la consulta profesional. Cuando se mencionen beneficios físicos, deben formularse como alivio o confort, no como tratamiento.
- **Precios:** siempre con el adjetivo “orientativo” y contexto de mercado español.
- **Marcas:** se pueden nombrar y comparar con criterio, sin publicidad encubierta ni descalificaciones.
- **Sostenibilidad:** se argumenta con datos y se evitan eslóganes verdes vacíos.
- **Imágenes de producto:** pertenecen a sus fabricantes; debe respetarse su uso editorial y priorizarse material de prensa oficial.


---

## 2. Sistema de Diseño (Design Tokens)

### 2.1 Paleta de colores

La base cromática es **Tailwind `stone`**. No se inventan colores fuera de esta tabla. El único acento es el **Verde Salvia `#7A8B7C`**.

| Token | Hex | Uso canónico | Utilidad Tailwind |
|---|---|---|---|
| `stone-50` | `#FAFAF9` | Fondo base del sitio y de secciones alternas | `bg-stone-50` |
| `stone-100` | `#F5F5F4` | Heroes de sección, fondos de imagen, superficies suaves | `bg-stone-100` |
| `stone-200` | `#E7E5E4` | Bordes, divisiones, contornos de tarjetas y tablas | `border-stone-200` |
| `stone-300` | `#D6D3D1` | Líneas editoriales, bordes superiores de tarjetas | `border-stone-300` |
| `stone-400` | `#A8A29E` | Metadatos muy suaves, numeración secundaria, iconos | `text-stone-400` |
| `stone-500` | `#78716C` | Eyebrows, navegación inactiva, notas y captions | `text-stone-500` |
| `stone-600` | `#57534E` | Texto secundario, descripciones y enlaces suaves | `text-stone-600` |
| `stone-700` | `#44403C` | Cuerpo de texto principal sobre fondos claros | `text-stone-700` |
| `stone-800` | `#292524` | Texto enfático y citas | `text-stone-800` |
| `stone-900` | `#1C1917` | Titulares, texto principal y CTA oscuro | `text-stone-900` / `bg-stone-900` |
| `stone-950` | `#0C0A09` | Solo overlay del hero | `bg-stone-950/…` |
| `white` | `#FFFFFF` | Superficies de tarjetas y secciones de contraste | `bg-white` |
| `sage` | `#7A8B7C` | Acento único: hairlines, números, iconos, bordes hover y CTA de acento | `[#7A8B7C]` |

**Reglas cromáticas:**

1. **Nunca se rompe la paleta `stone`.** Ni azules, ni verdes genéricos, ni beiges ajenos, ni negro puro `#000`, ni grises fríos.
2. El verde salvia es **acento, no fondo dominante**. Se usa en trazos de 1 px, números de sección, iconos, bordes hover, tablas destacadas y un CTA puntual.
3. Se permite salvia con opacidad (`/10`, `/20`, `/30`) para fondos de iconos, hairlines y bordes; no para grandes bloques.
4. Los fondos se alternan en este orden: `stone-50` → `white` → `stone-50` → `stone-100` para cierres o heroes. No se encadenan dos secciones del mismo tono sin una línea o cambio de ritmo.
5. El único degradado permitido es el overlay oscuro del hero de la home (`stone-950/50` → `/35` → `/70`). No se usan degradados decorativos.
6. **Implementación actual:** el salvia se escribe como valor arbitrario `[#7A8B7C]` porque todavía no está declarado en `tailwind.config.ts`. Es una deuda técnica. Al reconstruir el proyecto o al tocar el tema, debe declararse como `sage` y sustituir los valores arbitrarios.


### 2.2 Tipografía

Dos familias, dos funciones, sin excepciones:

| Familia | Fuente | Función | Variable CSS |
|---|---|---|---|
| **Serif** | Playfair Display | Titulares, citas, numerales editoriales, logotipo y nombres de marca | `--font-playfair` |
| **Sans** | Inter | Cuerpo, navegación, metadatos, botones, tablas y captions | `--font-inter` |

Se cargan con `next/font/google`, `display: "swap"` y subconjunto `latin`. El `<body>` usa `font-sans antialiased`; `font-serif` debe declararse explícitamente en cada titular.

**Escala tipográfica canónica** (`tailwind.config.ts`):

| Clase | Tamaño | Interlineado | Tracking | Peso | Uso |
|---|---:|---:|---:|---:|---|
| `text-display` | 80 px | 1.04 | -0.02em | 400 | Manifiesto de la home; en desktop sube a 100 px |
| `text-h1` | 50 px | 1.04 | -0.02em | 400 | H1 de páginas y artículos |
| `text-h2` | 40 px | 1.15 | -0.01em | 400 | H2 de sección |
| `text-h3` | 32 px | 1.20 | -0.01em | 400 | H3 de tarjeta o subsección |
| `text-body-lg` | 20 px | 1.50 | — | 400 | Entradillas y párrafos destacados |
| `text-body-base` | 17 px | 1.60 | — | 400 | Cuerpo estándar |
| `text-caption` | 13 px | 1.40 | — | 400 | Notas, captions y avisos |
| `text-eyebrow` | 11 px | 1.00 | 0.15em | 400 | Etiquetas superiores, siempre en mayúsculas |

**Reglas tipográficas:**

1. **Titulares siempre en serif.** Un `h1`, `h2`, `h3` o `blockquote` editorial lleva `font-serif`; el cuerpo y la interfaz van en sans.
2. Los tamaños se eligen de la escala. No se crean tamaños arbitrarios salvo las excepciones editoriales documentadas: numerales `text-4xl`, citas `text-3xl`/`text-4xl`, nombres de marca `text-4xl`/`text-5xl` y manifiesto `text-[100px]` en desktop.
3. Los titulares que ocupan más de una línea usan `text-balance` y `tracking-tight`.
4. Los **eyebrows** van en mayúsculas, con `text-eyebrow` y color `stone-500` o `stone-400`. No se usan para párrafos.
5. El cuerpo largo no supera los **65–75 caracteres por línea**: se consigue con `max-w-3xl` y variantes menores.
6. No se usa negrita para titulares. El peso 400 es parte de la identidad. La negrita se reserva para énfasis dentro del cuerpo y términos de definición.
7. No se justifica el texto. Alineación a la izquierda por defecto; centrado solo en heroes, citas y CTA.
8. Las versalitas no se simulan con mayúsculas en párrafos completos. Solo van en mayúsculas eyebrows, navegación, tagline del footer y etiquetas cortas.
9. No se usan tipografías decorativas, script, condensed ni más de dos familias.


### 2.3 Espaciado, contenedores y ritmo

El sistema se apoya en la escala de 4 px de Tailwind. No se usan valores arbitrarios de spacing salvo alturas de imagen o `min-h` justificados.

**Ritmo vertical**

| Nivel | Clase | Cuándo |
|---|---|---|
| Sección estándar | `py-24` | Regla por defecto en home, guía, marcas y páginas editoriales. |
| Sección compacta | `py-20` | Bloques de guía, artículos y listados que continúan una idea. |
| Introducción editorial | `py-16` | Entradilla narrativa inmediatamente posterior al hero. |
| Continuación | `py-10` | Bloques de listas, FAQ o texto que no inician sección. |
| Cierre enfático | `py-24` o `py-32` | CTA final; el manifiesto oscuro usa `py-32 md:py-40`. |

`tailwind.config.ts` declara además `section: 80px` y `section-sm: 60px`, pero **el código actual no usa `py-section`**. La convención efectiva es la tabla anterior. Al reconstruir, se puede adoptar `py-section` como alias semántico, pero no mezclarlo con valores numéricos en la misma página.

**Márgenes internos**

- Separación entre titular de sección y contenido: `mb-8` o `mb-12`.
- Separación entre bloques principales: `mt-12`, `mt-16` o `mt-24`; no encadenar más de tres niveles.
- Párrafos consecutivos: `space-y-6`.
- Listas editoriales: `space-y-6` u `space-y-8`, con `border-t` y `pt-6`/`pt-8`.
- El contenido nunca toca el borde de la sección: toda sección lleva `px-6`.

**Contenedores canónicos**

| Ancho | Clase | Uso |
|---|---|---|
| 1152 px | `max-w-6xl` | Header, footer y chrome global. |
| 1024 px | `max-w-5xl` | Rejillas editoriales de home y marcas. |
| 896 px | `max-w-4xl` | Tablas y rankings que necesitan más aire. |
| 768 px | `max-w-3xl` | Columna de lectura, heroes y artículos. |
| 672 px | `max-w-2xl` | CTA finales y bloques de texto centrados. |
| 576 px | `max-w-xl` | Entradillas breves y CTA muy contenidos. |

No se anidan contenedores del mismo ancho. La home usa `max-w-5xl` para las rejillas y `max-w-3xl` para la introducción; los artículos usan `max-w-3xl` como columna de lectura.

**Bordes, radios y sombras**

- Radio permitido: `rounded-sm` en tarjetas, imágenes atmosféricas y contenedores de tabla.
- `rounded-full` solo para iconos circulares, viñetas y contadores.
- Prohibidos `rounded-md`, `rounded-lg`, `rounded-xl` y `rounded-3xl`.
- Bordes de 1 px en `stone-200`/`stone-300`; cabeceras de tabla en `stone-800` o salvia.
- Sombra permitida: `shadow-sm`, y solo en tarjetas o al hacer hover. Nada de sombras profundas, difusas o de color.
- No se usan gradientes decorativos, blobs, cristal, ruido ni texturas de fondo; el único degradado permitido es el overlay del hero descrito en 2.1.

**Movimiento**

| Interacción | Patrón |
|---|---|
| Cambio de color de enlace | `transition-colors duration-300` |
| Borde de tarjeta o enlace | `transition-all duration-300` |
| Zoom de imagen de tarjeta | `transition-transform duration-700 group-hover:scale-105` |
| Zoom de producto | `transition-transform duration-500 hover:scale-105` |
| CTA | `transition` (150 ms por defecto) |

El movimiento debe ser **casi imperceptible**. No hay parallax, rebotes, rotaciones, autoplay ni animaciones de entrada. Si en el futuro se añade movimiento, debe respetar `prefers-reduced-motion`.


---

## 3. Reglas de Componentes y UI

### 3.1 Estructura global

Toda página se renderiza dentro de `src/components/Layout.tsx`, que aporta el header, el `<main>` y el footer. **Las páginas no vuelven a envolver su contenido en `<main>` ni duplican la navegación.**

**Header**

- Sticky, altura `h-20`, `z-50`.
- Fondo `bg-stone-50/90` con `backdrop-blur` y borde inferior `border-stone-200/80`.
- Contenedor `max-w-6xl`, `px-6 md:px-10`.
- Logotipo textual “Sui” en `font-serif text-2xl tracking-tight`, con `aria-label="Sui Magazine, inicio"`.
- Navegación principal: `font-sans text-sm uppercase tracking-wide text-stone-500`, hover `text-stone-900`.
- En móvil, la nav tiene scroll horizontal sin barra visible; no se colapsa en hamburguesa.
- Enlaces actuales: Guía `/guia`, Bienestar `/bienestar`, Ranking `/seleccion`, Marcas `/marcas`, Diseño `/articulos/bide-japones-sostenibilidad`.

**Footer**

- Borde superior `border-stone-200`, `py-10`, texto `text-xs text-stone-500`.
- Enlaces secundarios: Profesionales `/profesionales`, Perfiles `/perfiles`, Funcionalidades `/funcionalidades`.
- Tagline final en mayúsculas: `Bienestar · Diseño · Higiene inteligente`, con `tracking-[0.22em] text-stone-400`.
- Separadores decorativos con `aria-hidden="true"`.

**Hero de página**

| Tipo | Altura | Fondo | Contenido |
|---|---|---|---|
| Home | `h-[80vh] min-h-[520px]` | Imagen a sangre + overlay | Eyebrow, H1, entradilla blancos |
| Sección | `h-[50vh] min-h-[380px]` | `bg-stone-100` | Eyebrow, H1, entradilla centrados, `max-w-3xl` |
| Artículo | `h-[40vh] min-h-[320px]` | `bg-stone-100` | Eyebrow, H1, entradilla centrados, `max-w-3xl` |

El hero de sección puede incluir una línea salvia de `h-px w-12` antes del eyebrow. El H1 siempre es `font-serif text-h1 tracking-tight text-stone-900` con `text-balance`.

### 3.2 Botones y enlaces

No hay botones rellenos redondeados. El sistema usa **contornos rectangulares, enlaces subrayados y cambios de color discretos**.

**A. CTA principal (outline stone)**

```html
className="inline-block border border-stone-900 px-6 py-3 text-sm font-medium tracking-wide text-stone-900 transition hover:bg-stone-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
```

**B. CTA de acento (outline salvia)**

```html
className="inline-block border border-[#7A8B7C] px-6 py-3 text-sm font-medium tracking-wide text-stone-900 transition hover:bg-[#7A8B7C] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7A8B7C]"
```

**C. Enlace editorial subrayado**

```html
className="inline-block border-b border-stone-900 pb-1 font-sans text-sm text-stone-900 transition-all hover:border-stone-600 hover:text-stone-600"
```

**D. Enlace secundario suave**

```html
className="inline-block border-b border-stone-300 pb-1 font-sans text-sm text-stone-600 transition hover:border-stone-900 hover:text-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
```

**E. Enlace de navegación**

```html
className="font-sans text-sm uppercase tracking-wide text-stone-500 transition-colors duration-300 hover:text-stone-900"
```

**F. Enlace “Leer artículo →” dentro de una tarjeta**

```html
className="inline-block border-b border-stone-900 pb-1 font-sans text-sm text-stone-900 transition-all group-hover:border-stone-600 group-hover:text-stone-600"
```

**Reglas:**

- Todo CTA interactivo debe tener `focus-visible` con outline de 2 px y offset de 4 px.
- Los CTA principales usan `px-6 py-3`, texto de 14 px (`text-sm`) y `tracking-wide`.
- El hover de un CTA nunca cambia el tamaño ni añade sombra; solo invierte el color o cambia el borde.
- Los enlaces internos usan `next/link`. Los enlaces externos o `mailto:` usan `<a>`.
- El texto del enlace debe describir la acción (“Ver nuestra selección”), no “Haz clic aquí”.
- No se usan botones con iconos solos sin `aria-label`.


### 3.3 Tarjetas

Hay tres familias de tarjeta. Todas comparten fondo claro, borde fino y ausencia de decoración.

**A. Tarjeta editorial con borde y hover salvia** (guía, ventajas, formatos)

```html
className="rounded-sm border border-stone-200 bg-white p-8 transition-all duration-300 hover:border-[#7A8B7C] hover:shadow-sm"
```

- Título: `font-serif text-h3 text-stone-900` o `text-xl` si es una tarjeta pequeña.
- Texto: `font-sans text-body-base text-stone-600` o `text-stone-700`.
- Padding fijo `p-8`; en rejillas de 2–3 columnas, `gap-6` u `gap-8`.

**B. Tarjeta de artículo destacado** (home)

- Artículo separado por `border-b border-stone-200 py-12 last:border-b-0`.
- Imagen a la izquierda en desktop (`md:w-1/3`) y arriba en móvil.
- Contenido: eyebrow + fecha, H3 grande, entradilla y enlace subrayado.
- La imagen y el título reaccionan juntos mediante `group` y `group-hover`.

**C. Ficha de marca** (directorio)

```html
className="group border-t border-stone-300 pt-8 transition-colors hover:border-[#7A8B7C]"
```

- Sin caja ni sombra: solo una línea superior que se tiñe de salvia.
- Nombre en `font-serif text-4xl md:text-5xl tracking-tight`.
- Origen en `text-eyebrow text-stone-500`.
- Modelo icónico en salvia; al hover, todo el bloque pasa a `stone-900`.

**Reglas de tarjetas:**

- No se anidan tarjetas dentro de tarjetas.
- No se usa sombra permanente; como máximo `shadow-sm` en hover o en tarjetas de contenido secundario.
- No se usan imágenes de fondo dentro de tarjetas.
- El hover nunca mueve la tarjeta ni cambia su tamaño; solo borde, sombra suave o color.
- Los iconos son emojis pequeños (`text-2xl`) o símbolos tipográficos, siempre `aria-hidden="true"`. No sustituyen información textual.

### 3.4 Imágenes

**Regla estricta: usar siempre `next/image`, nunca `<img>`.**

Motivos: optimización automática, tamaños responsivos, lazy loading, prevención de layout shift y control de prioridad.

> **Excepción heredada:** `src/app/seleccion/page.tsx` todavía usa un `<img>` con `eslint-disable-next-line @next/next/no-img-element` para las fotos de producto. No es la norma y no debe replicarse. Si se toca esa página, debe migrarse a `next/image` con `fill`, `object-contain` y el contenedor 4:3 existente.

**Patrón A. Imagen a sangre con `fill`** (hero de home)

```tsx
<div className="relative flex h-[80vh] min-h-[520px] items-center justify-center overflow-hidden">
  <Image
    src="/images/hero-bathroom.jpg"
    alt="Interior de un baño minimalista con luz natural y tonos cálidos"
    fill
    priority
    sizes="100vw"
    className="object-cover"
  />
</div>
```

**Patrón B. Imagen atmosférica con `fill`** (guía)

```tsx
<div className="relative mb-12 h-[400px] w-full overflow-hidden rounded-sm md:h-[500px]">
  <Image
    src="/images/guia/bano_tradicional.jpg"
    alt="Baño japonés tradicional con ofuro de madera"
    fill
    sizes="(min-width: 768px) 768px, 100vw"
    className="object-cover"
  />
</div>
```

**Patrón C. Imagen de tarjeta con proporción fija**

```tsx
<div className="mb-6 overflow-hidden bg-stone-100">
  <Image
    src="/images/formatos/tapa-home.jpg"
    alt="Tapa inteligente o washlet"
    width={800}
    height={600}
    sizes="(min-width: 768px) 33vw, 100vw"
    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
  />
</div>
```

**Patrón D. Imagen de producto**

- Contenedor `aspect-[4/3] bg-stone-50 rounded-sm overflow-hidden`, centrado con flex.
- `object-contain` y `p-4` para no recortar el producto.
- Fondo `stone-50`, nunca blanco puro ni un color de marca.
- `hover:scale-105 transition-transform duration-500`.

**Reglas fotográficas y técnicas:**

1. **`fill` exige un padre posicionado** (`relative`) y con altura o proporción definida; el padre lleva `overflow-hidden`.
2. Usar `width`/`height` cuando la imagen tenga proporción conocida; usar `fill` para heroes y composiciones fluidas.
3. `sizes` es obligatorio en imágenes responsivas. Referencias: `100vw` para hero; `(min-width: 768px) 33vw, 100vw` para rejillas de 3 columnas; `(min-width: 768px) 768px, 100vw` para columnas de lectura de 768 px; `(min-width: 768px) 672px, 100vw` para columnas de 672 px.
4. `priority` **solo** en la imagen above-the-fold del hero. El resto se deja lazy por defecto.
5. `alt` siempre en español, descriptivo y específico. No empezar por “Imagen de…”. Si la imagen es decorativa, `alt=""` y `aria-hidden` en el contenedor cuando proceda.
6. No se usan imágenes de fondo CSS para contenido editorial.
7. Las imágenes locales viven en `public/images/` y se referencian con ruta absoluta (`/images/...`). Si se añaden imágenes remotas, deben declararse en `next.config.mjs` con `images.remotePatterns`.
8. Las proporciones canónicas son **4:3** para tarjetas y producto, **panorámica libre con `object-cover`** para atmósfera y **altura de viewport** para heroes.
9. Las fotos atmosféricas pueden recortarse con `object-cover`; los productos nunca.
10. No se aplican filtros CSS, duotonos, marcos blancos ni sombras a las imágenes.


### 3.5 Tablas

Las tablas son **comparativas editoriales**, no hojas de cálculo. Deben ser legibles, semánticas y nunca romper el ancho del viewport.

**Estructura obligatoria**

```tsx
<div className="overflow-x-auto">
  <table className="w-full min-w-[760px] border-collapse">
    <caption className="sr-only">Descripción completa de la comparativa</caption>
    <thead>
      <tr>
        <th scope="col" className="border-b-2 border-stone-800 py-4 pr-6 text-left font-serif text-lg text-stone-900">
          Columna
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" className="border-b border-stone-200 py-4 pr-6 text-left align-top font-sans text-sm font-medium text-stone-700">
          Fila
        </th>
        <td className="border-b border-stone-200 py-4 align-top font-sans text-sm text-stone-700">
          Dato
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

**Variante 1. Tabla editorial simple**

- Sin contenedor con borde ni fondo.
- Cabecera `border-b-2 border-stone-800`, `font-serif text-lg` o `text-base`, `text-stone-900`.
- Filas separadas por `border-b border-stone-200`; sin cebra.
- Se usa en artículos y en las guías de perfiles, funcionalidades y profesionales.
- Anchuras mínimas: `min-w-[640px]`, `min-w-[720px]`, `min-w-[760px]` u `min-w-[820px]` según columnas.

**Variante 2. Tabla destacada con caja y cebra**

```html
<div className="overflow-x-auto rounded-sm border border-stone-200 bg-white">
  <table className="w-full min-w-[880px] border-collapse">
    <caption className="sr-only">Comparativa de formatos y precios orientativos</caption>
    <thead>
      <tr className="border-b-2 border-[#7A8B7C]">
        <th scope="col" className="px-6 py-4 text-left align-top font-serif text-lg text-stone-900">
          Formato
        </th>
        <th scope="col" className="px-6 py-4 text-left align-top font-serif text-lg text-stone-900">
          Precio orientativo
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-stone-200 last:border-b-0">
        <th scope="row" className="px-6 py-4 text-left align-top font-sans text-sm font-medium text-stone-900">
          Tapa inteligente
        </th>
        <td className="px-6 py-4 align-top font-sans text-sm leading-relaxed text-stone-700">
          190 € – 900 €
        </td>
      </tr>
      <tr className="border-b border-stone-200 bg-stone-50 last:border-b-0">
        <th scope="row" className="px-6 py-4 text-left align-top font-sans text-sm font-medium text-stone-900">
          Inodoro completo
        </th>
        <td className="px-6 py-4 align-top font-sans text-sm leading-relaxed text-stone-700">
          Desde 1.000 €
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

- Cabecera salvia, celdas `px-6 py-4`.
- Filas alternas con `bg-stone-50` en índices impares; la última fila no lleva borde inferior.
- Se usa en la tabla comparativa principal de `/guia`.
- Puede incluir una ayuda móvil inmediatamente debajo:

```html
<p className="mt-3 font-sans text-caption text-stone-500 md:hidden">
  Desliza horizontalmente para ver todas las columnas →
</p>
```

**Reglas de tablas:**

1. Siempre `overflow-x-auto` en el contenedor para scroll horizontal en móvil.
2. Siempre `border-collapse` en la tabla.
3. Siempre `caption` con `sr-only`; una tabla sin caption no se considera accesible.
4. Cabeceras con `scope="col"`; primera celda de cada fila con `scope="row"`.
5. No se usan tablas para maquetar. Solo para datos comparables.
6. No se usan bordes verticales ni fondos de color por columna. La jerarquía se construye con líneas horizontales, tipografía y espacio.
7. En móvil se permite scroll, pero nunca se reduce la tipografía por debajo de `text-sm` ni se ocultan columnas sin explicación.


### 3.6 Patrones editoriales

**Eyebrow**

Etiqueta superior de 11 px, mayúsculas, `tracking` amplio y color `stone-500`/`stone-400`. Suele ir seguida de un H1/H2 y, opcionalmente, de una línea salvia de `h-px w-12`.

**Número de sección**

Los bloques principales de la guía se numeran `01`, `02`, `03`… con `font-serif text-4xl text-[#7A8B7C]`, `aria-hidden="true"`, alineado con el H2 en desktop y apilado en móvil.

**Pull quote**

```html
<blockquote className="text-balance font-serif text-3xl italic leading-tight text-stone-800 md:text-4xl">
  “Cita editorial.”
</blockquote>
```

Se enmarca con dos líneas salvia de `h-px w-12`, separadas por `mb-8` y `mt-8`, y se limita a una o dos frases. No se usa para testimonios comerciales.

**Lista numerada editorial**

- `ol` con `space-y-6` u `space-y-8`.
- Cada `li` lleva `flex gap-5 border-t border-stone-200 pt-6 first:border-t-0 first:pt-0`.
- Número en `font-serif text-lg leading-none text-stone-400` y `aria-hidden`.
- Título en `font-serif text-xl leading-snug`; texto en `font-sans text-sm` o `text-base`, `stone-600`/`stone-700`.

**FAQ**

- `dl` con `space-y-6`.
- Cada bloque: `border-t border-stone-200 pt-6 first:border-t-0 first:pt-0`.
- Pregunta en `dt`: `font-sans font-semibold leading-snug text-stone-900`.
- Respuesta en `dd`: `mt-3 font-sans leading-relaxed text-stone-700`.

**Rejillas**

| Columnas | Patrón |
|---|---|
| 2 | `grid grid-cols-1 gap-8 md:grid-cols-2` |
| 3 | `grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8` |
| 4 | `grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8` |

Siempre mobile-first: una columna por defecto y columnas múltiples a partir de `md`. No se usan rejillas de 5 o 6 columnas.

**Separadores**

- Línea de sección: `h-px w-12` o `w-16`, `bg-stone-300` o salvia.
- Separador de artículos: `border-b border-stone-200`, `py-12`, `last:border-b-0`.
- Listas: `divide-y divide-stone-200` o `border-t` por elemento.
- No se usan `<hr>` con estilos por defecto; si se usa, debe estilizarse y ser decorativo.

**Avisos legales**

Los descargos van en `text-caption text-stone-500`, centrados y con `max-w-2xl`. Ejemplo: “La información de esta guía es divulgativa y no sustituye la consulta con un profesional de la salud.”

### 3.7 Accesibilidad

La accesibilidad es parte del diseño, no un añadido.

- Un solo `<h1>` por página y jerarquía de encabezados sin saltos.
- Landmarks semánticos: `header`, `nav`, `main`, `footer`; el `main` lo aporta `Layout`.
- Navegación principal con `aria-label="Navegación principal"` y footer con `aria-label="Enlaces del pie"`.
- Todos los enlaces deben ser identificables por texto; si solo llevan icono, `aria-label`.
- Estados de foco visibles con `focus-visible:outline` de 2 px y offset 4 px.
- Imágenes con `alt` significativo; decorativas con `alt=""` y `aria-hidden` en el contenedor.
- Líneas, números y símbolos puramente decorativos llevan `aria-hidden="true"`.
- Tablas con `caption`, `scope="col"` y `scope="row"`.
- No se usa color como único portador de significado.
- Contraste mínimo AA: `stone-700` sobre `stone-50`, `stone-900` sobre `stone-50`, blanco sobre `stone-900`. Evitar `stone-400` para texto esencial.
- Los controles interactivos deben tener un área cómoda de pulsación; no reducir el padding de los CTA.
- Si se añade movimiento, respetar `prefers-reduced-motion`.


---

## 4. Arquitectura Técnica

### 4.1 Stack y restricciones

| Capa | Tecnología | Versión / uso |
|---|---|---|
| Framework | Next.js App Router | `14.2.33`; rutas estáticas y renderizado en build |
| UI | React | 18; componentes de servidor por defecto |
| Lenguaje | TypeScript | 5, `strict: true` |
| Estilos | Tailwind CSS | 3.4 + PostCSS |
| Tipografías | `next/font/google` | Playfair Display + Inter, `display: swap` |
| Calidad | ESLint | `next/core-web-vitals` + `next/typescript` |
| Scraping | Node + Playwright | `scripts/scraper.mjs`, ejecución manual |
| Despliegue | Vercel | `npm run build`, sin variables de entorno |

**Restricciones:**

- No hay CMS, base de datos, API routes, autenticación ni estado global.
- El contenido vive en el repositorio, en arrays tipados dentro de cada página o en `src/content`.
- No se añaden librerías de UI, animación, estado o iconos sin una necesidad demostrable y aprobación explícita.
- No se usa `"use client"` salvo que una interacción real lo exija. Actualmente no hay componentes cliente.
- No se usa `any`, `@ts-ignore` ni `eslint-disable` para silenciar errores de tipos o de imágenes. La única excepción existente es el `<img>` documentado de `/seleccion`, que debe migrarse a `next/image`.
- No se usan estilos inline ni CSS Modules. Todo se expresa con utilidades Tailwind y las capas globales mínimas.

**Comandos:**

```bash
npm run dev      # desarrollo
npm run build    # verificación de producción
npm run lint     # ESLint
npm run start    # servidor de producción
npm run scrape   # descarga de imágenes de producto (manual)
```

### 4.2 Estructura de carpetas

```text
sui-magazine/
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx              # fuentes, metadata raíz y Layout global
│  │  ├─ globals.css             # base Tailwind, body y selection
│  │  ├─ page.tsx                # home
│  │  ├─ guia/page.tsx
│  │  ├─ marcas/page.tsx
│  │  ├─ bienestar/page.tsx
│  │  ├─ seleccion/page.tsx
│  │  ├─ perfiles/page.tsx
│  │  ├─ funcionalidades/page.tsx
│  │  ├─ profesionales/page.tsx
│  │  └─ articulos/
│  │     ├─ bide-japones-sostenibilidad/page.tsx
│  │     ├─ tapa-inteligente/page.tsx
│  │     ├─ guia-instalacion/page.tsx
│  │     ├─ mejores-bides-presupuesto/page.tsx
│  │     └─ bano-espanol-adaptaciones/page.tsx
│  ├─ components/
│  │  └─ Layout.tsx              # header, main y footer compartidos
│  ├─ content/
│  │  └─ formats.ts              # datos editoriales reutilizables y su tipo
│  └─ styles/                    # reservado; actualmente vacío
├─ public/
│  └─ images/
│     ├─ hero-bathroom.jpg
│     ├─ tapa-inteligente.jpg
│     ├─ articulos/
│     ├─ formatos/
│     ├─ guia/
│     └─ productos/
├─ scripts/
│  ├─ scraper.mjs
│  └─ scraped-products.json
├─ tailwind.config.ts
├─ tsconfig.json
├─ next.config.mjs
├─ postcss.config.mjs
├─ .eslintrc.json
├─ package.json
├─ README.md
└─ SPEC.md
```

**Rutas actuales:** `/`, `/guia`, `/bienestar`, `/seleccion`, `/marcas`, `/perfiles`, `/funcionalidades`, `/profesionales` y cinco artículos bajo `/articulos/*`. Todas son estáticas y se prerenderizan en build.

### 4.3 Anatomía de una página

Cada `page.tsx` sigue este orden:

1. `import type { Metadata } from "next"`.
2. Imports de `next/image`, `next/link` y componentes locales.
3. `export const metadata: Metadata = { ... }`.
4. Tipos locales (`type`) con comentarios JSDoc.
5. Arrays de contenido tipados (`const ...: Type[]`).
6. `export default function NombrePage()`.
7. Fragmento `<>...</>` o un contenedor de página.
8. Secciones semánticas comentadas (`{/* 1. Hero... */}`).

**Reglas:**

- No se duplica el `Layout` ni se añade otro `<main>`.
- Cada página exporta su propia metadata.
- Los datos no se escriben directamente dentro del JSX si se repiten o forman una colección.
- Los comentarios de sección se mantienen: ayudan a navegar archivos largos.
- Las páginas son componentes de servidor; no se añaden handlers ni estado innecesarios.

### 4.4 Datos y contenido

- Los datos se centralizan en arrays tipados con `type` explícito.
- Los tipos llevan comentarios JSDoc que explican cada campo.
- Los textos editoriales se redactan en español de España y siguen el tono de la sección 1.4.
- Los precios, plazos y cifras se marcan como orientativos cuando corresponda.
- No se duplica el mismo dato en varios arrays; si se comparte, se mueve a `src/content` o se importa.
- Las rutas de imagen son absolutas desde `public` (`/images/...`).
- Las marcas y modelos se escriben con su grafía oficial (TOTO, eQiik, Nashi, Roca, Brondell, Xiaomi).
- Los enlaces internos usan `next/link` y rutas relativas al dominio.
- El contenido no se genera en tiempo de ejecución ni depende de APIs externas.


### 4.5 Reglas de estilado

- **Utility-first:** el diseño se implementa con clases Tailwind directamente en el JSX.
- **Global mínimo:** `globals.css` solo contiene las capas de Tailwind, `scroll-behavior: smooth`, `body` con `bg-stone-50 text-stone-900`, `::selection` invertida y la utilidad `.text-balance`.
- **Sin CSS ad hoc:** no se crean clases `.card`, `.button` o `.hero` en CSS global. Los patrones se repiten de forma controlada o se extraen a un componente React cuando maduran.
- **Condicionales:** se usa template literal, como en la cebra de tablas: ``className={`... ${index % 2 === 1 ? "bg-stone-50" : ""}`}``. No hay helper `cn` ni `clsx`.
- **Valores arbitrarios:** solo se permiten los patrones ya documentados: salvia (`[#7A8B7C]`), proporción `aspect-[4/3]`, alturas de hero o imagen (`h-[50vh]`, `h-[400px]`, `md:h-[500px]`), `min-h`, `min-w` de tablas, `max-w` justificados, `tracking-[0.22em]` del footer, `leading-[1.45]` del manifiesto y `text-[100px]`. Cualquier otro valor arbitrario debe justificarse.
- **Orden de clases:** layout → espaciado → tipografía → color → borde/efectos → estado. Mantener el orden facilita la lectura, aunque Tailwind no lo exija.
- **Responsive:** mobile-first. El breakpoint principal es `md` (768 px); `sm` (640 px) se usa para ajustes de alineación y `lg` solo en rejillas de 3 columnas cuando aporta.
- **No se usa `dark:`**. El sitio tiene una sola identidad clara.

### 4.6 SEO y metadata

**Implementación actual:**

- `src/app/layout.tsx` define la metadata raíz:
  - `title: "Sui Magazine | El nuevo ritual de la higiene"`.
  - `description` editorial de una frase.
  - Open Graph con `locale: "es_ES"` y `type: "website"`.
- Cada página exporta `metadata` propia con `title`, `description` y, en la mayoría, `openGraph`.
- El HTML declara `lang="es"`.
- Los títulos de página siguen el patrón `[Tema] | Sui Magazine`.
- Los artículos y páginas editoriales usan `type: "article"`; la home usa `website`.

**Contrato mínimo para cualquier página nueva:**

```ts
export const metadata: Metadata = {
  title: "Tema concreto | Sui Magazine",
  description:
    "Descripción única, en español, de 140–160 caracteres, con la propuesta de valor.",
  openGraph: {
    title: "Tema concreto | Sui Magazine",
    description: "Resumen editorial breve y específico.",
    locale: "es_ES",
    type: "article", // "website" en home y páginas de directorio
  },
};
```

**Reglas:**

1. Un `title` único por ruta; no duplicar el título raíz.
2. Una `description` única, natural, sin acumulación de palabras clave.
3. Un solo `<h1>` por página y encabezados jerárquicos.
4. URLs en minúsculas, con guiones y sin tildes: `/articulos/bano-espanol-adaptaciones`.
5. Textos alternativos descriptivos; no son un campo de keywords.
6. No se promete información que no exista en la página.
7. Al clonar el proyecto, cambiar nombre, dominio, descripciones y Open Graph; no dejar referencias a Sui.

**Deuda SEO conocida (no implementada):**

- No hay `metadataBase`.
- No hay URLs canónicas.
- No hay `sitemap.xml` ni `robots.txt`.
- No hay imagen Open Graph dedicada.
- No hay Twitter Cards.
- No hay datos estructurados JSON-LD (`Article`, `Product`, `FAQPage`, `Organization`).
- No hay `publishedTime`/`modifiedTime` en artículos.

Estas carencias deben resolverse antes de considerar el sitio una plantilla de producción completa. Mientras no existan, **no deben documentarse como si estuvieran implementadas**.

### 4.7 Calidad, rendimiento y verificación

**Antes de dar una tarea por terminada:**

```bash
npm run lint
npm run build
```

El build debe completarse sin errores de TypeScript ni de ESLint. Actualmente genera 17 páginas estáticas; el número puede crecer, pero todas las rutas deben prerenderizarse.

**Verificación visual mínima:**

- 390 px de ancho (móvil) y 1440 px (escritorio).
- Sin scroll horizontal global (`scrollWidth === clientWidth`).
- Header sticky legible y navegación desplazable en móvil.
- Imágenes cargadas, sin recortes incorrectos ni layout shift.
- Textos sin desbordamientos ni líneas demasiado largas.
- Tablas con scroll interno, no global.
- CTA y enlaces con foco visible.
- Contraste suficiente en textos y metadatos.

**Rendimiento:**

- Mantener el sitio estático y sin JavaScript de cliente innecesario.
- Usar `next/font` con `display: swap`; no cargar fuentes por CDN manual.
- Usar `next/image`; `priority` solo en el hero above-the-fold.
- No añadir dependencias por una sola animación o icono.
- Evitar imágenes enormes; las fotos editoriales se sirven optimizadas por Next.
- No usar librerías de scroll, carruseles o parallax.

**Estado de pruebas:** no hay suite automatizada de tests. Playwright está disponible para comprobaciones manuales o scripts temporales de verificación. Cualquier script temporal debe eliminarse al terminar.

**Definición de terminado:**

- [ ] La página sigue la identidad y el tono de las secciones 1 y 2.
- [ ] Usa solo tokens de color, tipografía y espaciado aprobados.
- [ ] Usa `next/image` y textos alternativos.
- [ ] Tiene metadata propia y un solo H1.
- [ ] Es responsive y accesible.
- [ ] `npm run lint` y `npm run build` pasan.
- [ ] No introduce dependencias ni patrones no documentados.
- [ ] Si cambia una regla, el SPEC se actualiza en el mismo cambio.


---

## 5. Reglas de Oro para la IA (Cline)

Estas diez reglas son obligatorias. Si una instrucción del usuario entra en conflicto con ellas, se debe señalar el conflicto antes de implementar.

1. **Lee este SPEC completo antes de tocar código.** No deduzcas la identidad del proyecto a partir de un componente aislado.
2. **Nunca rompas la paleta `stone`.** El único acento permitido es el Verde Salvia `#7A8B7C`. No introduzcas azules, verdes genéricos, negros puros, dorados ni degradados decorativos.
3. **Usa siempre el sistema tipográfico definido.** Titulares en Playfair Display (`font-serif`), cuerpo e interfaz en Inter (`font-sans`), con las clases `text-display`, `text-h1`–`text-h3`, `text-body-*`, `text-caption` y `text-eyebrow`. No inventes tamaños ni familias.
4. **Usa siempre `next/image`, nunca `<img>`.** `fill` requiere padre `relative`; `object-cover` para atmósfera y `object-contain` para producto; `alt` descriptivo; `priority` solo en el hero. Migra la excepción de `/seleccion` si tocas esa página.
5. **Respeta el ritmo y los contenedores.** Secciones `py-24` (o `py-20`/`py-16` según el nivel), laterales `px-6`, lectura `max-w-3xl`, rejillas `max-w-5xl`, chrome `max-w-6xl`. No añadas spacing arbitrario.
6. **Mantén el código modular y centraliza los datos en arrays tipados.** Define tipos explícitos con JSDoc, evita duplicar contenido y no llenes el JSX de literales repetidos. Componentes de servidor por defecto.
7. **Toda ruta debe tener metadata propia y voz Sui.** `title` con patrón `[Tema] | Sui Magazine`, `description` única de 140–160 caracteres, Open Graph y `lang="es"`. Escribe en español de España, con tono cálido, preciso y sin promesas médicas.
8. **La accesibilidad no es opcional.** Un H1 por página, jerarquía correcta, landmarks, `aria-label` en navegaciones, foco visible, tablas con `caption` y `scope`, y decoración con `aria-hidden`.
9. **No añadas dependencias, componentes cliente ni CSS ad hoc sin necesidad demostrable.** Nada de librerías de UI, iconos, animación o estado si Tailwind y React ya resuelven el problema.
10. **Cierra el círculo.** Ejecuta `npm run lint` y `npm run build`, verifica 390 px y 1440 px, y actualiza este SPEC si has tomado una decisión de diseño o arquitectura nueva. El código y el SPEC nunca deben contar historias distintas.

---

## Anexo A. Contrato de clonación rápida

Para reconstruir el sitio con otra identidad, sustituye únicamente estos valores y conserva la arquitectura y las reglas de componentes.

| Variable | Valor actual | Dónde se define |
|---|---|---|
| Nombre | Sui Magazine | `Layout.tsx`, metadata, footer, SPEC |
| Logotipo | “Sui” | `Layout.tsx` |
| Tagline principal | “El nuevo ritual de la higiene” | `layout.tsx`, README |
| Tagline de footer | “Bienestar · Diseño · Higiene inteligente” | `Layout.tsx` |
| Vertical editorial | Washlets, bienestar y diseño del baño | Contenido y navegación |
| Mercado / idioma | España · `es_ES` · `lang="es"` | `layout.tsx`, metadata |
| Fondo base | `stone-50` `#FAFAF9` | `globals.css` |
| Acento único | `sage` `#7A8B7C` | Guía, marcas y CTA de acento |
| Serif | Playfair Display | `layout.tsx`, `tailwind.config.ts` |
| Sans | Inter | `layout.tsx`, `tailwind.config.ts` |
| Escala editorial | `display` 80, `h1` 50, `h2` 40, `h3` 32 | `tailwind.config.ts` |
| Contenedores | 6xl chrome · 5xl rejilla · 3xl lectura · 2xl CTA | Páginas y `Layout` |
| Navegación principal | Guía, Bienestar, Ranking, Marcas, Diseño | `Layout.tsx` |
| Contacto | `info@sui-magazine.com` | `/profesionales` |
| Patrón de título SEO | `[Tema] | Sui Magazine` | Metadata de cada ruta |

**No se clonan como “identidad”:** la estructura de carpetas, el uso de `next/image`, el sistema de tokens, la accesibilidad, las tablas con scroll, la alternancia de fondos ni las reglas de calidad. Eso es arquitectura reutilizable y debe permanecer.

---

*Fin del SPEC. Cualquier cambio futuro en la identidad, el sistema de diseño o la arquitectura debe reflejarse aquí antes de considerarse parte del proyecto.*

