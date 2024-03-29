import React from "react";

import Card from "./Card";

export default function Results({ results }) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto mt-12 py-4 flex flex-col items-center gap-8">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
