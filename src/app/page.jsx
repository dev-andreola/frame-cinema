import React from "react";

import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";

  const response = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=pt-BR&page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await response.json();
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const results = data.results;
  console.log(results);

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
