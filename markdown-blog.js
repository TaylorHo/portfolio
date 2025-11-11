import { escapeSvelte } from 'mdsvex';
import { getSingletonHighlighter } from 'shiki';
import remarkMath from 'remark-math';
import rehypeKatexSvelte from 'rehype-katex-svelte';
import remarkAbbr from 'remark-abbr';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkToc from 'remark-toc';
import { transformerCopyButton } from '@rehype-pretty/transformers';

// Custom transformer to handle line numbering from lang string
const transformerLineStart = ({ lines = 0 }) => {
	return {
		name: 'transformer-line-start',
		enforce: 'post',
		code(node) {
			if (node.type === 'element' && node.tagName === 'code') {
				node.properties = node.properties || {};
				node.properties.style = `--start: ${lines}`;
			}
		}
	};
};

// Custom remark plugin to log markdown content and handle meta line numbers
const remarkLogContent = () => {
	return (tree, _) => {
		// Process code blocks to handle meta line numbers
		for (const node of tree.children) {
			if (node.type === 'code' && node.meta) {
				// Check if meta contains {<number>} pattern
				const metaMatch = node.meta.match(/\{(\d+)\}/);
				if (metaMatch) {
					const lineNumber = metaMatch[1];
					// Append line number to lang
					node.lang = node.lang ? `${node.lang}-${lineNumber}` : `text-${lineNumber}`;
				}
			}
		}
	};
};

/** @type {import('mdsvex').MdsvexOptions} */
export const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			// Parse lang to extract actual language and line start number
			const langMatch = lang.match(/^([^-]+)(?:-(\d+))?$/);
			const actualLang = langMatch ? langMatch[1] : lang;

			const highlighter = await getSingletonHighlighter({
				themes: ['one-dark-pro'],
				langs: [
					'ts',
					'js',
					'javascript',
					'typescript',
					'json',
					'markdown',
					'md',
					'python',
					'bash',
					'py',
					'yaml',
					'yml',
					'tex',
					'rust',
					'xml',
					'go',
					'c',
					'c++',
					'latex'
				]
			});
			const html = escapeSvelte(
				highlighter.codeToHtml(code, {
					lang: actualLang,
					theme: 'one-dark-pro',
					transformers: [
						transformerCopyButton({
							visibility: 'always',
							feedbackDuration: 3_000
						}),
						transformerLineStart({
							lines: langMatch ? Number.parseInt(langMatch[2], 10) : 0
						})
					]
				})
			);
			return `{@html \`${html}\` }`;
		}
	},
	remarkPlugins: [remarkMath, remarkAbbr, remarkToc, remarkLogContent],
	rehypePlugins: [
		[rehypeKatexSvelte, { output: 'mathml' }],
		rehypeSlug,
		[rehypeAutolinkHeadings, { behavior: 'wrap' }]
	]
};
