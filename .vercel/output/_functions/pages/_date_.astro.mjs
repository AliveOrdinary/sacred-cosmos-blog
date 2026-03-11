import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, u as unescapeHTML } from '../chunks/astro/server_BF5fUPEm.mjs';
import 'piccolore';
import { s as supabase, $ as $$Layout } from '../chunks/supabase_BPaz7eGg.mjs';
import { marked } from 'marked';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://insights.sacredcosmos.org");
const prerender = false;
const $$date = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$date;
  const { date } = Astro2.params;
  const { data: post, error } = await supabase.from("daily_blogs").select("*").eq("publish_date", date).single();
  if (error || !post) {
    return new Response("Not found", {
      status: 404,
      statusText: "Not found"
    });
  }
  const contentHtml = marked.parse(post.content || "");
  const formatDate = (dateStr) => {
    const d = new globalThis.Date(dateStr);
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC"
      // Assuming the date from DB is treated as UTC YYYY-MM-DD
    }).format(d);
  };
  const displayDate = formatDate(post.publish_date);
  const excerpt = post.content ? post.content.replace(/[#*`_\[\]()]/g, "").substring(0, 160).trim() + "..." : "Daily cosmic insights.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${post.theme_title} | Sacred Cosmos`, "description": excerpt, "image": post.hero_image_url, "type": "article", "publishDate": post.publish_date, "data-astro-cid-gvncnrsm": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="max-w-none fade-in" data-astro-cid-gvncnrsm> <header class="mb-8 md:mb-12 border-b border-zinc-900 pb-6 md:pb-8" data-astro-cid-gvncnrsm> <div class="mb-4 text-fuchsia-500 font-mono text-xs uppercase tracking-widest flex items-center justify-center md:justify-start gap-2" data-astro-cid-gvncnrsm> <span class="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-fuchsia-500 animate-pulse min-w-[6px]" data-astro-cid-gvncnrsm></span> <time${addAttribute(post.publish_date, "datetime")} data-astro-cid-gvncnrsm>${displayDate}</time> </div> <h1 class="text-3xl sm:text-4xl md:text-6xl font-serif font-black tracking-tighter uppercase text-zinc-50 leading-none text-center md:text-left break-words" data-astro-cid-gvncnrsm> ${post.theme_title} </h1> </header> ${post.hero_image_url && renderTemplate`<figure class="mb-8 md:mb-12 aspect-[4/3] sm:aspect-[21/9] w-full overflow-hidden border border-zinc-800 rounded-sm" data-astro-cid-gvncnrsm> <img${addAttribute(post.hero_image_url, "src")}${addAttribute(`Visual representation of ${post.theme_title}`, "alt")} class="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 hover:scale-105" data-astro-cid-gvncnrsm> </figure>`} <!-- Custom Tailwind Typography styling defined in global.css \`.sacred-prose\` --> <div class="sacred-prose" data-astro-cid-gvncnrsm>${unescapeHTML(contentHtml)}</div> <nav class="mt-12 md:mt-20 border-t border-zinc-900 pt-6 md:pt-8 flex justify-center md:justify-start" data-astro-cid-gvncnrsm> <a href="/" class="inline-flex items-center text-sm font-mono text-zinc-500 hover:text-fuchsia-400 transition-colors uppercase tracking-widest group py-3 px-4 -mx-4 md:mx-0 border border-transparent md:border-none focus:outline-none focus:ring-1 focus:ring-fuchsia-500 md:focus:ring-0 rounded-sm" data-astro-cid-gvncnrsm> <span class="mr-2 group-hover:-translate-x-1 transition-transform" data-astro-cid-gvncnrsm>&larr;</span> Return to Void
</a> </nav> </article> ` })} `;
}, "/Users/nk/Developer/sacred-cosmos-blog/src/pages/[date].astro", void 0);

const $$file = "/Users/nk/Developer/sacred-cosmos-blog/src/pages/[date].astro";
const $$url = "/[date]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$date,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
