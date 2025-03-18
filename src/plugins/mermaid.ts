import type { RemarkPlugin } from "@astrojs/markdown-remark";
import { visit } from "unist-util-visit";

const escapeMap: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

const escapeHtml = (str: string) => str.replace(/[&<>"']/g, (c) => escapeMap[c]);

export const remarkMermaid: RemarkPlugin<[]> = () => (tree) => {
  visit(tree, "code", (node) => {
    if (node.lang !== "mermaid") return;

    // @ts-expect-error Default type of "type" is "code", but here we need "html" (it's working)
    node.type = "html";
    node.value = `
      <div class="mermaid" data-content="${escapeHtml(node.value)}">
        <pre class="mermaid-src">${escapeHtml(node.value)}</pre>
      </div>
    `;
  });
};
