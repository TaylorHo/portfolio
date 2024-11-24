import { NextResponse } from "next/server";

export const runtime = "edge"; // Indicates Edge runtime

export default async function GET() {
	try {
		// Fetch user data
		const userResponse = await fetch("https://api.github.com/users/TaylorHo");
		const userReposResponse = await fetch(
			"https://api.github.com/users/TaylorHo/repos?per_page=100",
		);

		const user = await userResponse.json();
		const repositories = await userReposResponse.json();

		// Filter and calculate stars
		const mine = repositories.filter((repo) => !repo.fork);
		const stars = mine.reduce((accumulator, repository) => {
			return accumulator + repository.stargazers_count;
		}, 0);

		// Response data
		const response = {
			followers: user.followers,
			stars,
			repos: user.public_repos,
			gists: user.public_gists,
		};

		// Cache headers
		const headers = new Headers();
		headers.set(
			"Cache-Control",
			"public, s-maxage=1200, stale-while-revalidate=600",
		);

		// Return response
		return NextResponse.json(response, { headers });
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to fetch data" },
			{ status: 500 },
		);
	}
}
