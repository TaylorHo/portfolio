import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { getFiles } from "./mdx";
import kebabCase from "./utils/kebabCase";

const root = process.cwd();

export async function getAllTags(type) {
	const files = await getFiles(type);

	const tagCount = {};
	// Iterate through each post, putting all found tags into `tags`
	for (const file of files) {
		const source = fs.readFileSync(path.join(root, "data", type, file), "utf8");
		const { data } = matter(source);
		if (data.tags && data.draft !== true) {
			for (const tag of data.tags) {
				const formattedTag = kebabCase(tag);
				if (formattedTag in tagCount) {
					tagCount[formattedTag] += 1;
				} else {
					tagCount[formattedTag] = 1;
				}
			}
		}
	}

	return tagCount;
}
