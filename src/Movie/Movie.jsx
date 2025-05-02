// Movie.jsx
import { useLoaderData } from "react-router-dom";
import { MovieCard } from "../Movie/MovieCard";
import "../Movie/MovieCard.css";

export const Movie = () => {
  const movieData = useLoaderData();
  console.log(movieData);
  return (
    <ul className="movie-grid container grid-four-cols">
      {movieData.Search.map((Currmovie) => (
        <MovieCard key={Currmovie.imdbID} Currmovie={Currmovie} />
      ))}
    </ul>
  );
};
