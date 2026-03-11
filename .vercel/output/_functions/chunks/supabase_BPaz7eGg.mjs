import { e as createAstro, f as createComponent, r as renderTemplate, u as unescapeHTML, h as addAttribute, k as renderComponent, l as renderHead, n as renderSlot } from './astro/server_BF5fUPEm.mjs';
import 'piccolore';
/* empty css                          */
import 'clsx';
import { createClient } from '@supabase/supabase-js';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro$1 = createAstro("https://insights.sacredcosmos.org");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SEO;
  const {
    title = "Sacred Cosmos | Daily Insights",
    description = "A modern astrology brand: Sacred Cosmos. Daily insights from the void.",
    image = "/favicon.svg",
    // Fallback image if needed, ideally a dedicated og-image.jpg
    type = "website",
    publishDate,
    canonicalURL = new URL(Astro2.url.pathname, Astro2.site || Astro2.url)
  } = Astro2.props;
  const resolvedImage = new URL(image, Astro2.site || Astro2.url).toString();
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sacred Cosmos",
    "url": Astro2.site?.toString() || Astro2.url.origin,
    "logo": new URL("/favicon.svg", Astro2.site || Astro2.url).toString(),
    "sameAs": [
      "https://www.instagram.com/sacredcosmos_insights/",
      "https://www.facebook.com/people/Sacred-Cosmos-Insights/61582701843041/"
    ]
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Sacred Cosmos | Daily Insights",
    "url": Astro2.site?.toString() || Astro2.url.origin
  };
  const articleSchema = type === "article" ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title.replace(" | Sacred Cosmos", ""),
    "image": [
      resolvedImage
    ],
    "datePublished": publishDate,
    "dateModified": publishDate,
    "author": [{
      "@type": "Organization",
      "name": "Sacred Cosmos",
      "url": Astro2.site?.toString() || Astro2.url.origin
    }]
  } : null;
  return renderTemplate(_b || (_b = __template(['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><!-- Canonical URL --><link rel="canonical"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', ">", '<!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- JSON-LD Scripts --><script type="application/ld+json">', '<\/script><script type="application/ld+json">', "<\/script>", ""])), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(type, "content"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(resolvedImage, "content"), type === "article" && publishDate && renderTemplate`<meta property="article:published_time"${addAttribute(publishDate, "content")}>`, addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(resolvedImage, "content"), unescapeHTML(JSON.stringify(organizationSchema)), unescapeHTML(JSON.stringify(websiteSchema)), articleSchema && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(articleSchema))));
}, "/Users/nk/Developer/sacred-cosmos-blog/src/components/SEO.astro", void 0);

const $$Astro = createAstro("https://insights.sacredcosmos.org");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, image, type, publishDate } = Astro2.props;
  return renderTemplate`<html lang="en" class="dark"> <head>${renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "image": image, "type": type, "publishDate": publishDate })}<!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;700;900&display=swap" rel="stylesheet">${renderHead()}</head> <body> <!-- SVG Noise overlay --> <div class="noise-overlay"></div> <!-- Main content container --> <div class="max-w-3xl mx-auto px-5 sm:px-6 py-8 md:py-20 relative z-10 min-h-screen flex flex-col"> <header class="mb-10 md:mb-16"> <a href="/" class="group inline-block"> <h1 class="text-3xl md:text-5xl font-serif font-black tracking-tighter uppercase text-zinc-100 group-hover:text-fuchsia-500 transition-colors duration-300">
Sacred Cosmos
</h1> <div class="h-1 w-0 bg-fuchsia-500 mt-2 transition-all duration-300 group-hover:w-full"></div> </a> </header> <div class="flex-grow"> ${renderSlot($$result, $$slots["default"])} </div> <footer class="mt-16 md:mt-20 border-t border-zinc-900 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs font-mono text-zinc-600 uppercase tracking-widest gap-6 md:gap-4"> <div class="flex flex-col md:flex-row gap-4 items-center"> <p>&copy; 2026 Sacred Cosmos</p> <div class="flex gap-4 md:gap-3"> <a href="https://www.instagram.com/sacredcosmos_insights/" rel="me noopener noreferrer" target="_blank" class="hover:text-fuchsia-500 transition-colors py-2 md:py-0 px-2 md:px-0 -mx-2 md:mx-0">Instagram</a> <a href="https://www.facebook.com/people/Sacred-Cosmos-Insights/61582701843041/" rel="me noopener noreferrer" target="_blank" class="hover:text-fuchsia-500 transition-colors py-2 md:py-0 px-2 md:px-0 -mx-2 md:mx-0">Facebook</a> </div> </div> <p>The Void Beckons.</p> </footer> </div> </body></html>`;
}, "/Users/nk/Developer/sacred-cosmos-blog/src/layouts/Layout.astro", void 0);

const supabaseUrl = "https://cxmemcebdwlebwqmcwei.supabase.co";
const supabaseAnonKey = "sb_publishable_8yWP4YmGywlBpRTFbh_Eig_KC-yNAJm";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { $$Layout as $, supabase as s };
