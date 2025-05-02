import { useLoaderData } from "react-router-dom";
import "../Movie/MovieDetails.css";

export const MovieDetails = () => {
  const movieData = useLoaderData();
  console.log(movieData); // See the actual data being returned
  if (!movieData || movieData.Response === "False") {
    return <h2 className="error-message">🎬 Movie not found</h2>;
  }

  return (
    <div className="details-wrapper">
      <div className="details-card">
        <img
          src={movieData.Poster !== "N/A" ? movieData.Poster : "/no-image.jpg"}
          alt={movieData.Title}
        />
        <div className="details-content">
          <h1 className="movie-titles">{movieData.Title}</h1>
          <p>
            <strong>Year:</strong> {movieData.Year}
          </p>
          <p>
            <strong>Genre:</strong> {movieData.Genre}
          </p>
          <p>
            <strong>Language:</strong> {movieData.Language}
          </p>
          <p>
            <strong>Director:</strong> {movieData.Director}
          </p>
          <p>
            <strong>Actors:</strong> {movieData.Actors}
          </p>
          <p>
            <strong>IMDB Rating:</strong> ⭐ {movieData.imdbRating}
          </p>
          <p className="movie-plot">
            <strong>Plot:</strong> {movieData.Plot}
          </p>
        </div>
      </div>
    </div>
  );
};

/*
// check details about params data 
const params = useParams();
console.log(params);
return <h1> hello movie details: {params.movieID} </h1>;
*/
