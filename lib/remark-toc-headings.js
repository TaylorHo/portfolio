import { slug } from "github-slugger";
// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
import { toString } from "mdast-util-to-string";
import { visit } from "unist-util-visit";

export default function remarkTocHeadings(options) {
	return (tree) =>
		visit(tree, "heading", (node, index, parent) => {
			const textContent = toString(node);
			options.exportRef.push({
				value: textContent,
				url: `#${slug(textContent)}`,
				depth: node.depth,
			});
		});
}
