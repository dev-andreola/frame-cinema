import Results from "@/components/Results";
import React from "react";

export default async function SearchPage({ params }) {
  const searchTerm = params.searchTerm;

  const API_KEY = process.env.API_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=pt-BR&page=1`
  );

  const data = await res.json();

  const results = data.results;

  return (
    <div>
      {results && results.length === 0 && (
        <h2 className="text-center text-lg pt-24">Nenhum filme encontrado!</h2>
      )}

      {results && <Results results={results} />}
    </div>
  );
}
