import React from "react";

import Image from "next/image";

const API_KEY = process.env.API_KEY;

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=pt-BR&page=1`
  );
  const movie = await res.json();

  return (
    <div className="relative w-full">
      {/* Banner de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent, rgba(55, 65, 81, 0.8)), url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
        }}
      ></div>
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center md:items-start max-w-6xl mx-auto md:space-x-6 relative z-10">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.poster_path || movie.backdrop_path
          }`}
          width={500}
          height={300}
          alt="Movie Poster"
          className="rounded-lg mb-4 mt-12 md:mb-0"
          style={{ maxWidth: "100%", height: "100%" }}
        ></Image>
        <div className="mt-12 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-lg p-4 bg-white dark:bg-black dark:bg-opacity-50">
          <h2 className="text-3xl mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">{movie.overview}</p>
          <p className="mb-3 text-xl">
            <span className="font-semibold mr-1">Data de Lançamento:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3 text-xl">
            <span className="font-semibold mr-1">Curtidas:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
