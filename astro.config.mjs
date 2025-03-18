import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"
import rehypeKatex from "rehype-katex" // Render math with KaTeX.
import remarkMath from "remark-math" // Support math like `$so$`.

// https://astro.build/config
export default defineConfig({
  site: "https://me.hotay.dev",
  markdown: {
    rehypePlugins: [rehypeKatex],
    remarkPlugins: [remarkMath],
  },
  integrations: [mdx(), sitemap({
    filter: (page) => {
      if (page.includes("posts/1-demo")) return false;
      return true;
    }
  }), solidJs(), tailwind({ applyBaseStyles: false })],
})