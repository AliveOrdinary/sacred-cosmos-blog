import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_BF5fUPEm.mjs';
import 'piccolore';
import { s as supabase, $ as $$Layout } from '../chunks/supabase_BPaz7eGg.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { data: posts, error } = await supabase.from("daily_blogs").select("id, publish_date, theme_title").order("publish_date", { ascending: false }).limit(30);
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }).format(date);
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sacred Cosmos | Daily Insights" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <section class="space-y-4 md:space-y-2"> ${error && renderTemplate`<div class="p-6 border border-fuchsia-500/50 bg-fuchsia-500/10 text-fuchsia-200 rounded-sm"> <p class="font-mono text-sm uppercase mb-2">Supabase Connection Notice</p> <p class="text-xs">Database connection is required to fetch the cosmos. Missing URL or table.</p> <p class="mt-2 text-xs font-mono opacity-60 bg-zinc-950 p-2">${error.message}</p> </div>`} ${posts && posts.length === 0 && renderTemplate`<div class="py-12 border-l-2 md:border-l-4 border-zinc-800 pl-4 md:pl-6 text-zinc-500 italic font-serif text-sm md:text-base">
The cosmos is currently silent. No readings found for today.
</div>`} ${posts && posts.map((post) => renderTemplate`<article class="group relative block border-b border-zinc-900 hover:border-fuchsia-500/50 transition-colors py-4 md:py-6"> <a${addAttribute(`/${post.publish_date}`, "href")} class="absolute inset-0 z-10 w-full h-full"><span class="sr-only">Read ${post.theme_title}</span></a> <div class="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-4"> <h2 class="text-xl md:text-2xl font-serif font-black tracking-tighter uppercase text-zinc-200 group-hover:text-fuchsia-400 transition-colors leading-tight"> ${post.theme_title} </h2> <time${addAttribute(post.publish_date, "datetime")} class="text-xs md:text-sm font-mono text-zinc-500 group-hover:text-zinc-400 uppercase tracking-widest whitespace-nowrap"> ${formatDate(post.publish_date)} </time> </div> </article>`)} </section> </main> ` })}`;
}, "/Users/nk/Developer/sacred-cosmos-blog/src/pages/index.astro", void 0);

const $$file = "/Users/nk/Developer/sacred-cosmos-blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
