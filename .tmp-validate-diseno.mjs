import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const base = "http://127.0.0.1:3123";
const outDir = path.join(process.env.TEMP ?? ".", "sui-validation");
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ channel: "chrome", headless: true });
const results = [];

for (const vp of [
  { width: 390, height: 844, name: "390" },
  { width: 1440, height: 900, name: "1440" },
]) {
  const context = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  const response = await page.goto(`${base}/diseno`, {
    waitUntil: "networkidle",
    timeout: 30000,
  });

  const data = await page.evaluate(() => {
    const nav = document.querySelector('nav[aria-label="Navegación principal"]');
    const navLinks = [...(nav?.querySelectorAll("a") ?? [])].map((a) => ({
      text: a.textContent.trim(),
      href: a.getAttribute("href"),
    }));
    const disenoLink = navLinks.find((item) => item.text === "Diseño");
    const images = [...document.images].map((img) => ({
      src: img.getAttribute("src"),
      complete: img.complete,
      naturalWidth: img.naturalWidth,
    }));
    const sections = [...document.querySelectorAll("section")].map(
      (section) => section.className,
    );
    const h1 = document.querySelector("h1");
    const h1Rect = h1?.getBoundingClientRect();
    const navLink = nav?.querySelector("a");
    const navStyle = navLink ? getComputedStyle(navLink) : null;

    return {
      navLinks,
      disenoLink,
      sections,
      sectionCount: sections.length,
      h1Count: document.querySelectorAll("h1").length,
      h1Text: h1?.textContent?.trim() ?? null,
      h1Width: h1Rect ? Math.round(h1Rect.width) : null,
      h1Right: h1Rect ? Math.round(h1Rect.right) : null,
      horizontalOverflow:
        document.documentElement.scrollWidth - window.innerWidth,
      innerWidth: window.innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      navFont: navStyle?.fontFamily ?? null,
      navFontSize: navStyle?.fontSize ?? null,
      images,
    };
  });

  const screenshot = path.join(outDir, `diseno-${vp.name}.jpg`);
  await page.screenshot({
    path: screenshot,
    fullPage: true,
    type: "jpeg",
    quality: 80,
  });

  results.push({
    viewport: vp,
    status: response?.status() ?? null,
    finalUrl: page.url(),
    screenshot,
    ...data,
  });

  await context.close();
}

await browser.close();
console.log(JSON.stringify(results, null, 2));
