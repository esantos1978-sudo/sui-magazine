/**
 * Agente Extractor de imágenes de producto.
 *
 * Uso:
 *   npm run scrape
 *   # o directamente: node scripts/scraper.mjs
 *
 * El script abre cada ficha con Chromium (Playwright), localiza la imagen
 * principal mediante varias estrategias y la guarda en
 * public/images/productos/[name].jpg.
 *
 * Además, guarda los metadatos de cada descarga (marca, nombre extraído de la
 * página y ruta local de la imagen) en scripts/scraped-products.json.
 *
 * Nota: si el CDN devuelve WebP/PNG aunque la URL parezca JPEG, la imagen
 * se convierte a JPEG real antes de guardarla.
 */
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// En ESM no existe __dirname, así que lo reconstruimos desde import.meta.url.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');
const OUTPUT_DIR = path.join(PROJECT_ROOT, 'public', 'images', 'productos');
const SCRAPED_JSON = path.join(__dirname, 'scraped-products.json');

/**
 * Productos del ranking. `fallback` es la página de respaldo: se usa solo
 * cuando la ficha falla (DNS, timeout, 404/403) o no contiene ninguna imagen.
 */
const products = [
  {
    name: 'nashi-aldara-iplus5',
    brand: 'Nashi',
    url: 'https://nashi.es/tienda/inodoro-japones/aldara/nashi-aldara-iplus-5/',
    fallback: 'https://nashi.es/',
    keywords: ['aldara', 'nashi'],
  },
  {
    name: 'eqiik-pro',
    brand: 'eQiik',
    // La ficha /products/eqiik-100 incluye las variantes eQiik y eQiik Pro.
    url: 'https://eqiik.com/products/eqiik-100',
    fallback: 'https://eqiik.com/',
    keywords: ['eqiik pro', 'eqiik'],
  },
  {
    name: 'toto-neorest',
    brand: 'TOTO',
    // TOTO Global redirige las fichas de producto a su home corporativa;
    // el catálogo europeo es la fuente oficial que sí expone la gama.
    url: 'https://eu.toto.com/en/products/neorest/',
    fallback: 'https://eu.toto.com/en/',
    keywords: ['neorest', 'toto'],
  },
  {
    name: 'nashi-deluxe-pro',
    brand: 'Nashi',
    url: 'https://nashi.es/tienda/tapa-inodoro-japones/deluxe/nashi-deluxe-pro-3/',
    fallback: 'https://nashi.es/',
    keywords: ['deluxe', 'nashi'],
  },
  {
    name: 'vogo-vb4000',
    brand: 'VOGO',
    // vogo.com es una web de alojamientos; la marca es vogospain.com.
    // El VB4000 no aparece en el catálogo actual, así que usamos su gama
    // de inodoros inteligentes como página de respaldo.
    url: 'https://vogospain.com/es/3-inodoros-inteligentes',
    fallback: 'https://vogospain.com/es/',
    keywords: ['vogo', 'inodoro'],
  },
  {
    name: 'xiaomi-smart-seat',
    brand: 'Xiaomi',
    // mi.com responde HTTP 403 a navegadores automatizados (anti-bot).
    url: 'https://www.mi.com/es/smart-toilet-seat/',
    fallback: 'https://www.mi.com/es/',
    keywords: ['xiaomi', 'toilet', 'seat'],
  },
  {
    name: 'brondell-swash-s101',
    brand: 'Brondell',
    // El S101 está descatalogado: su ficha devuelve 404 y solo queda el
    // recambio del mando. Como respaldo, usamos la categoría de bidets.
    url: 'https://www.brondell.com/swash-1000-advanced-bidet-seat/',
    fallback: 'https://www.brondell.com/bidets-heated-seats/',
    keywords: ['swash', 's101', 'brondell', 'bidet'],
  },
  {
    name: 'roca-in-wash-ona',
    brand: 'Roca',
    // Ficha oficial del modelo suspendido; la página de gama sirve de respaldo.
    url: 'https://www.roca.es/productos/in-wash-ona-smart-toilet-suspendido-roca-rimless-funciones-lavado-secado-803150..1',
    fallback: 'https://www.roca.es/smart-wcs/in-wash-ona',
    keywords: ['in-wash', 'in wash', 'ona', 'roca'],
  },
  {
    name: 'roca-in-wash-inspira',
    brand: 'Roca',
    // La ficha /sanitarios/inodoros/in-wash-inspira ya no existe; el sitemap
    // oficial publica esta ficha y la gama In-Wash como respaldo.
    url: 'https://www.roca.es/productos/in-wash-inspira-smart-toilet-suspendido-roca-rimless-funciones-lavado-secado-803060..1',
    fallback: 'https://www.roca.es/smart-wcs/in-wash',
    keywords: ['in-wash', 'in wash', 'inspira', 'roca'],
  },
  {
    name: 'toto-washlet',
    brand: 'TOTO',
    // TOTO Global no aloja fichas de producto; su web europea es la oficial.
    // Usamos la ficha del WASHLET RW porque la categoría solo expone miniaturas.
    url: 'https://eu.toto.com/en/products/washlets/TCF801EAG%23NW1',
    fallback: 'https://eu.toto.com/en/products/washlets',
    keywords: ['washlet', 'toto'],
  },
  {
    name: 'toto-neorest-nx2',
    brand: 'TOTO',
    // NX2 no está en el catálogo europeo: usamos la ficha oficial de TOTO USA
    // y la categoría NEOREST europea como respaldo.
    url: 'https://www.totousa.com/neorest-nx2-dual-flush-toilet-10-gpf-08-gpf-new',
    fallback: 'https://eu.toto.com/en/products/neorest/',
    keywords: ['neorest', 'nx2', 'toto'],
  },
];

// ---------------------------------------------------------------------------
// Utilidades generales
// ---------------------------------------------------------------------------

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/** Espera aleatoria de 1,5 a 3 segundos para no saturar los servidores. */
const randomDelay = () => 1500 + Math.floor(Math.random() * 1501);

/** Convierte cualquier error en un mensaje corto y legible por consola. */
function errorMessage(error) {
  if (error instanceof Error) return error.message;
  return String(error);
}

/** Evita que un nombre inesperado escape de la carpeta de destino. */
function safeFileName(name) {
  return (
    String(name)
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .toLowerCase() || 'producto'
  );
}

/** Comprueba la firma binaria para no guardar una página HTML como imagen. */
function looksLikeImage(buffer) {
  if (buffer.length < 12) return false;
  const hex = buffer.subarray(0, 12).toString('hex');
  const ascii = buffer.subarray(0, 12).toString('latin1');
  return (
    hex.startsWith('ffd8ff') || // JPEG
    hex.startsWith('89504e47') || // PNG
    ascii.startsWith('GIF87a') ||
    ascii.startsWith('GIF89a') ||
    ascii.slice(8, 12) === 'WEBP' ||
    ascii.slice(4, 8) === 'ftyp' // AVIF/HEIC
  );
}

const isJpeg = (buffer) =>
  buffer.length > 3 &&
  buffer[0] === 0xff &&
  buffer[1] === 0xd8 &&
  buffer[2] === 0xff;

/**
 * Algunos CDN devuelven WebP/PNG aunque la URL parezca JPEG. Para que la
 * extensión .jpg sea real, dibujamos la imagen en un canvas (fondo blanco,
 * para conservar bien las transparencias) y exportamos JPEG.
 */
async function convertToJpeg(page, buffer, contentType) {
  if (isJpeg(buffer)) return buffer;

  const mime = contentType.split(';')[0].trim() || 'image/png';
  const dataUrl = `data:${mime};base64,${buffer.toString('base64')}`;

  const encoded = await page.evaluate(async (source) => {
    const image = new Image();
    image.src = source;
    await image.decode();

    // Evitamos canvas gigantes que puedan consumir demasiada memoria.
    const maxSide = 3000;
    const scale = Math.min(
      1,
      maxSide / Math.max(image.naturalWidth, image.naturalHeight)
    );
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));

    const context = canvas.getContext('2d');
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    return canvas.toDataURL('image/jpeg', 0.9).split(',')[1];
  }, dataUrl);

  return Buffer.from(encoded, 'base64');
}

/**
 * Espera a que las imágenes ya presentes en el DOM terminen de cargar. Sin
 * esto, una imagen de alta resolución puede llegar después del primer render
 * y perder frente a otra más pequeña (o frente a un QR) que ya estaba lista.
 */
async function waitForImages(page, timeout = 5000) {
  await page
    .evaluate(async (maxWait) => {
      const pending = Array.from(document.images).filter(
        (img) => !img.complete || img.naturalWidth === 0
      );
      if (pending.length === 0) return;

      await Promise.race([
        Promise.all(
          pending.map(
            (img) =>
              new Promise((resolve) => {
                img.addEventListener('load', resolve, { once: true });
                img.addEventListener('error', resolve, { once: true });
              })
          )
        ),
        new Promise((resolve) => setTimeout(resolve, maxWait)),
      ]);
    }, timeout)
    .catch(() => {});
}

/**
 * Navega esperando el DOM, no `networkidle`: estas webs mantienen analítica y
 * conexiones abiertas, así que la red nunca se queda totalmente quieta.
 * Después damos margen para lazy-loads e hidratación y esperamos las imágenes.
 */
async function navigate(page, url) {
  let response = null;

  try {
    response = await page.goto(url, {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });
  } catch (error) {
    const isTimeout =
      error?.name === 'TimeoutError' || /timeout/i.test(errorMessage(error));
    if (!isTimeout || page.url() === 'about:blank') throw error;
    console.warn(
      '⚠️ domcontentloaded no se completó; se analiza el DOM que ya está cargado.'
    );
  }

  if (response && !response.ok()) {
    throw new Error(`la página respondió HTTP ${response.status()}`);
  }

  // Margen para que terminen de resolverse lazy-loads, imágenes de fondo y la
  // hidratación de rejillas que se insertan después del primer render.
  await page.waitForTimeout(2500);
  await waitForImages(page);
  return response;
}

// ---------------------------------------------------------------------------
// Metadatos del producto
// ---------------------------------------------------------------------------

/**
 * Convierte un título de página en un nombre de producto legible:
 * quita el sufijo del sitio, los separadores comerciales y los símbolos ®/™.
 */
function cleanScrapedName(value) {
  const raw = String(value || '')
    .replace(/\s+/g, ' ')
    .trim();
  if (!raw) return '';

  let name = raw.split(/\s*[|｜]\s*/)[0].trim();
  // "In-Wash® Ona - Smart toilets" -> "In-Wash® Ona".
  name = name.split(/\s+[-\u2013\u2014]\s+/)[0].trim();
  name = name
    .replace(/&(?:reg|trade|copy);/gi, '')
    .replace(/[\u00ae\u2122\u00a9]/g, '')
    .replace(/\s+/g, ' ')
    .replace(/[\s,;:]+$/g, '')
    .trim();

  return name || raw;
}

/**
 * Intenta obtener el nombre real del producto desde el H1 principal y, si no
 * existe, desde og:title o el <title>. El texto ya viene decodificado por el
 * navegador, así que las entidades HTML no son un problema.
 */
async function extractScrapedName(page) {
  const rawName = await page.evaluate(() => {
    const textOf = (element) =>
      element?.textContent?.replace(/\s+/g, ' ').trim() || '';

    const primarySelectors = [
      'main h1',
      'article h1',
      'h1[itemprop="name"]',
    ];

    for (const selector of primarySelectors) {
      const heading = document.querySelector(selector);
      const text = textOf(heading);
      if (text) return text;
    }

    // Algunas webs usan el H1 del logotipo; en ese caso es mejor el title.
    for (const heading of Array.from(document.querySelectorAll('h1'))) {
      const text = textOf(heading);
      if (text && !/^(inicio|home|logo|men[uú])$/i.test(text)) return text;
    }

    const ogTitle = document.querySelector('meta[property="og:title"]')?.content;
    if (ogTitle?.trim()) return ogTitle;
    return document.title || '';
  });

  return cleanScrapedName(rawName);
}

// ---------------------------------------------------------------------------
// Localización de la imagen principal
// ---------------------------------------------------------------------------

async function findMainImage(page, keywords = []) {
  // Este código se ejecuta dentro de la página, así que solo usa APIs del DOM.
  return page.evaluate((searchTerms) => {
    const normalizedKeywords = searchTerms.map((term) => term.toLowerCase());
    const toAbsolute = (value) => {
      if (!value || typeof value !== 'string') return null;
      try {
        const url = new URL(value.trim(), document.baseURI);
        if (url.protocol !== 'http:' && url.protocol !== 'https:') return null;
        // Un SVG suele ser un logo o un icono, no una foto de producto.
        if (/\.svg(?:$|[?#])/i.test(url.pathname)) return null;
        return url.href;
      } catch {
        return null;
      }
    };

    /** De un srcset elige la variante de mayor resolución. */
    const bestFromSrcset = (value) => {
      if (!value) return null;
      const candidates = value
        .split(',')
        .map((part) => part.trim().split(/\s+/))
        .filter((parts) => parts[0])
        .map(([src, descriptor]) => ({
          src,
          width: Number.parseFloat(descriptor) || 0,
        }))
        .sort((a, b) => b.width - a.width);
      return candidates[0]?.src ?? null;
    };

    /** Resuelve la mejor URL disponible, incluidos lazy-load y srcset. */
    const sourceOf = (img) => {
      const srcset =
        img.getAttribute('srcset') ||
        img.getAttribute('data-srcset') ||
        img.getAttribute('data-lazy-srcset');
      const candidates = [
        img.currentSrc,
        img.getAttribute('data-src'),
        img.getAttribute('data-lazy-src'),
        img.getAttribute('data-original'),
        bestFromSrcset(srcset),
        img.getAttribute('src'),
      ];

      for (const candidate of candidates) {
        const absolute = toAbsolute(candidate);
        if (absolute) return absolute;
      }
      return null;
    };

    // Un QR de RA, un icono o un logo nunca son la foto que buscamos.
    const isQrCode = (value) =>
      /(?:^|[/_.-])qr(?:[/_.-]|$)|qr\s*code|qrcode|qr-code/i.test(value);

    // Los CDN suelen marcar el packshot con "prod" o "packshot" en la URL.
    const isProductShot = (value) =>
      /(?:^|[_-])(?:prod|packshot)(?:[_-]|$)/i.test(value);

    // Fotos ambientales, primeros planos, banners y heroes no son packshots.
    const isNonProductShot = (value) =>
      /(?:^|[_-])(?:clos|detail|detalle|ambient|ambiente|solu)(?:[_-]|$)/i.test(
        value
      ) ||
      /close[- ]?up|banner|hero|teaser|lifestyle|ambiente|detalle|detail/i.test(
        value
      );

    const scoreOf = ({ areaScore, relevance, haystack, shotHaystack }) =>
      areaScore +
      relevance * 1_000_000_000 +
      (isProductShot(haystack) ? 100_000_000 : 0) -
      (isNonProductShot(shotHaystack) ? 100_000_000 : 0);

    const buildCandidate = (img, strategy) => {
      if (!(img instanceof HTMLImageElement)) return null;
      const url = sourceOf(img);
      if (!url) return null;

      const rect = img.getBoundingClientRect();
      const style = window.getComputedStyle(img);
      const naturalWidth = img.naturalWidth || 0;
      const naturalHeight = img.naturalHeight || 0;
      const widthAttr = Number.parseFloat(img.getAttribute('width')) || 0;
      const heightAttr = Number.parseFloat(img.getAttribute('height')) || 0;
      const renderedWidth = Math.max(rect.width, 0);
      const renderedHeight = Math.max(rect.height, 0);
      const isVisible =
        style.display !== 'none' &&
        style.visibility !== 'hidden' &&
        renderedWidth > 20 &&
        renderedHeight > 20;

      const renderedArea = renderedWidth * renderedHeight;
      const naturalArea = naturalWidth * naturalHeight;
      const attributeArea = widthAttr * heightAttr;
      const areaScore = isVisible
        ? Math.max(renderedArea, naturalArea, attributeArea)
        : Math.max(naturalArea, attributeArea) * 0.5;

      // Si el alt/src/clase menciona el producto, la imagen gana claramente
      // frente a banners grandes o fotos ambientales de la misma página.
      const haystack = `${img.alt} ${img.title} ${img.className} ${url}`.toLowerCase();
      // Para detectar "close-up"/"detalle" no miramos clases estructurales
      // como `detail-slider-image`, que describen el componente, no la foto.
      const shotHaystack = `${img.alt} ${img.title} ${url}`.toLowerCase();
      if (isQrCode(haystack)) return null;

      const relevance = normalizedKeywords.reduce(
        (matches, keyword) => matches + (haystack.includes(keyword) ? 1 : 0),
        0
      );

      return {
        url,
        strategy,
        width: Math.max(renderedWidth, naturalWidth, widthAttr),
        haystack,
        // Una imagen visible pesa más; una oculta aún puede ser la principal
        // de una galería, así que no la descartamos por completo.
        score: scoreOf({ areaScore, relevance, haystack, shotHaystack }),
      };
    };

    /**
     * Algunas fichas (Roca, por ejemplo) pintan el packshot como
     * background-image del contenedor principal, no como <img>.
     */
    const buildBackgroundCandidate = (element, strategy) => {
      if (!(element instanceof HTMLElement)) return null;
      const background = window.getComputedStyle(element).backgroundImage;
      const match = /url\((['"]?)(.*?)\1\)/i.exec(background);
      const url = match ? toAbsolute(match[2]) : null;
      if (!url) return null;

      const rect = element.getBoundingClientRect();
      const style = window.getComputedStyle(element);
      const isVisible =
        style.display !== 'none' &&
        style.visibility !== 'hidden' &&
        rect.width > 20 &&
        rect.height > 20;
      if (!isVisible) return null;

      const haystack = `${element.className} ${url}`.toLowerCase();
      const shotHaystack = url.toLowerCase();
      if (isQrCode(haystack)) return null;

      const relevance = normalizedKeywords.reduce(
        (matches, keyword) => matches + (haystack.includes(keyword) ? 1 : 0),
        0
      );

      return {
        url,
        strategy,
        width: Math.max(rect.width, 0),
        haystack,
        score: scoreOf({
          areaScore: Math.max(rect.width * rect.height, 0),
          relevance,
          haystack,
          shotHaystack,
        }),
      };
    };

    const largest = (candidates) =>
      candidates
        // Descarta logos y miniaturas: una foto de producto útil debe superar
        // 200 px. Si el navegador aún no conoce el tamaño (0), la dejamos pasar.
        .filter(
          (candidate) =>
            candidate && (candidate.width === 0 || candidate.width >= 200)
        )
        .sort((a, b) => b.score - a.score)[0] ?? null;

    // Estrategia 0: packshots pintados como background-image.
    const backgroundSelectors = [
      '[class*="product-image-main"]',
      '[class*="product-main-image"]',
      '[class*="product-image"] [class*="main"]',
    ];

    for (const selector of backgroundSelectors) {
      const match = largest(
        Array.from(document.querySelectorAll(selector)).map((element) =>
          buildBackgroundCandidate(element, selector)
        )
      );
      if (match) return match;
    }

    // Estrategia 1: selectores típicos de imagen de producto, por prioridad.
    const prioritySelectors = [
      // Roca y otras webs de fabricante marcan la galería principal con
      // clases del tipo "rs-product-image-gallery-item".
      'img[class*="product-image-gallery-item"]',
      'img.product-image, .product-image img, img[class*="product-image"]',
      'img.wp-post-image, .wp-post-image img',
      'img.gallery-image, .gallery-image img',
      'img[alt*="producto" i]',
    ];

    for (const selector of prioritySelectors) {
      const match = largest(
        Array.from(document.querySelectorAll(selector)).map((img) =>
          buildCandidate(img, selector)
        )
      );
      if (match) return match;
    }

    // Estrategia 1b: imágenes cuyo alt/título/clase/URL menciona el producto.
    // Se evalúan todas juntas para que un close-up dentro de <main> no gane
    // antes que el packshot de una rejilla situada fuera de <main>.
    const keywordImages = Array.from(document.images)
      .map((img) => buildCandidate(img, 'imagen que menciona el producto'))
      .filter(
        (candidate) =>
          candidate &&
          normalizedKeywords.some((keyword) =>
            candidate.haystack.includes(keyword)
          )
      );

    const keywordMatch = largest(keywordImages);
    if (keywordMatch) return keywordMatch;

    // Estrategia 2: la imagen más grande dentro del contenedor principal.
    for (const selector of ['main img', 'article img', '.product img']) {
      const match = largest(
        Array.from(document.querySelectorAll(selector)).map((img) =>
          buildCandidate(img, selector)
        )
      );
      if (match) return match;
    }

    // Estrategia 3: primera imagen de la página con más de 400 px de ancho.
    for (const img of Array.from(document.images)) {
      const candidate = buildCandidate(img, 'primera imagen > 400px');
      if (candidate && candidate.width > 400) return candidate;
    }

    return null;
  }, keywords);
}

// ---------------------------------------------------------------------------
// Descarga y guardado
// ---------------------------------------------------------------------------

async function downloadImage(page, image, name) {
  const requestOptions = { timeout: 60000 };
  const headers = {
    // El referer ayuda a CDNs que aplican protección anti-hotlink.
    referer: page.url(),
    accept: 'image/jpeg,image/png,image/*;q=0.8',
  };

  let response = await page.request.get(image.url, {
    ...requestOptions,
    headers,
  });

  // Si el CDN rechaza el referer, reintentamos como petición directa.
  if (!response.ok() && [401, 403].includes(response.status())) {
    response = await page.request.get(image.url, requestOptions);
  }

  if (!response.ok()) {
    throw new Error(`la descarga respondió HTTP ${response.status()}`);
  }

  const contentType = (
    response.headers()['content-type'] || ''
  ).toLowerCase();
  if (contentType.includes('text/html') || contentType.includes('json')) {
    throw new Error(`la URL devolvió ${contentType} en lugar de una imagen`);
  }

  const buffer = await response.body();
  if (buffer.length < 1024) {
    throw new Error(`la imagen descargada es demasiado pequeña (${buffer.length} bytes)`);
  }
  if (!looksLikeImage(buffer)) {
    throw new Error('los datos descargados no tienen una firma de imagen válida');
  }

  const filePath = path.join(OUTPUT_DIR, `${safeFileName(name)}.jpg`);
  const jpegBuffer = await convertToJpeg(page, buffer, contentType);
  await fs.promises.writeFile(filePath, jpegBuffer);

  return { filePath, bytes: jpegBuffer.length };
}

// ---------------------------------------------------------------------------
// Procesamiento de cada producto
// ---------------------------------------------------------------------------

async function extractProduct(context, product) {
  const page = await context.newPage();
  page.setDefaultTimeout(15000);

  // Si la ficha y la página de respaldo son la misma URL, no la visitamos dos veces.
  const targets = [...new Set([product.url, product.fallback].filter(Boolean))];
  let lastReason = 'no se pudo cargar ninguna URL';

  try {
    for (let index = 0; index < targets.length; index += 1) {
      const target = targets[index];

      try {
        if (index > 0) {
          console.log(`↪️ Probando página alternativa: ${target}`);
        }

        await navigate(page, target);
        const scrapedName =
          (await extractScrapedName(page).catch(() => '')) || product.name;
        console.log(`   🏷️ Nombre: ${scrapedName}`);

        const image = await findMainImage(page, product.keywords);
        if (!image) throw new Error('no se encontró ninguna imagen candidata');

        console.log(`   🖼️ ${image.strategy}: ${image.url}`);
        const saved = await downloadImage(page, image, product.name);
        const relativePath = path
          .relative(PROJECT_ROOT, saved.filePath)
          .split(path.sep)
          .join('/');
        const fileName = path.basename(saved.filePath);

        console.log(
          `✅ Guardado: ${relativePath} (${Math.round(saved.bytes / 1024)} KB)`
        );
        return {
          brand: product.brand || 'Desconocida',
          scrapedName,
          fileName,
          imageUrl: `/images/productos/${fileName}`,
        };
      } catch (error) {
        lastReason = errorMessage(error);
        if (index < targets.length - 1) {
          console.warn(`⚠️ ${target} no sirvió: ${lastReason}`);
        }
      }
    }

    console.log(`❌ Error: ${lastReason}`);
    return false;
  } finally {
    await page.close().catch(() => {});
  }
}

// ---------------------------------------------------------------------------
// Orquestación
// ---------------------------------------------------------------------------

async function main() {
  console.log('🕷️ Agente Extractor de imágenes de producto\n');

  // Creamos la carpeta antes de descargar; recursive evita errores si existe.
  await fs.promises.mkdir(OUTPUT_DIR, { recursive: true });
  console.log(
    `📁 Destino: ${path.relative(PROJECT_ROOT, OUTPUT_DIR).split(path.sep).join('/')}\n`
  );

  let browser;
  let downloaded = 0;
  const failed = [];
  const scrapedProducts = [];

  try {
    browser = await chromium.launch({ headless: true });

    // Un contexto realista reduce bloqueos básicos y comparte cookies entre
    // páginas (útil cuando la portada redirige a una ficha).
    const context = await browser.newContext({
      viewport: { width: 1440, height: 1000 },
      locale: 'es-ES',
      timezoneId: 'Europe/Madrid',
      userAgent: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${browser.version()} Safari/537.36`,
      extraHTTPHeaders: {
        'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
      },
    });

    for (let index = 0; index < products.length; index += 1) {
      const product = products[index];
      console.log(`\n🕷️ Rastreando ${product.name}...`);

      try {
        const scraped = await extractProduct(context, product);
        if (scraped) {
          scrapedProducts.push(scraped);
          downloaded += 1;
        } else {
          failed.push(product.name);
        }
      } catch (error) {
        // Aislamiento extra: un fallo inesperado no detiene el resto del lote.
        console.log(`❌ Error: ${errorMessage(error)}`);
        failed.push(product.name);
      }

      // Pausa entre productos, no después del último.
      if (index < products.length - 1) {
        const waitMs = randomDelay();
        console.log(`⏳ Esperando ${(waitMs / 1000).toFixed(1)} s...`);
        await delay(waitMs);
      }
    }
  } finally {
    if (browser) {
      await browser.close().catch((error) => {
        console.warn(`⚠️ No se pudo cerrar Chromium: ${errorMessage(error)}`);
      });
    }
  }

  try {
    await fs.promises.writeFile(
      SCRAPED_JSON,
      `${JSON.stringify(scrapedProducts, null, 2)}\n`,
      'utf8'
    );
    console.log(
      `📝 Metadatos: ${path
        .relative(PROJECT_ROOT, SCRAPED_JSON)
        .split(path.sep)
        .join('/')} (${scrapedProducts.length} productos)`
    );
  } catch (error) {
    console.warn(
      `⚠️ No se pudo escribir ${SCRAPED_JSON}: ${errorMessage(error)}`
    );
  }

  console.log(`\n${'─'.repeat(64)}`);
  console.log(
    `🏁 Proceso finalizado: ${downloaded} de ${products.length} imágenes descargadas correctamente`
  );
  if (failed.length > 0) {
    console.log(`⚠️ Sin descarga: ${failed.join(', ')}`);
  }
}

main().catch((error) => {
  console.error(`\n❌ Error fatal: ${errorMessage(error)}`);
  if (/executable doesn't exist/i.test(errorMessage(error))) {
    console.error('   Instala Chromium con: npx playwright install chromium');
  }
  process.exitCode = 1;
});

