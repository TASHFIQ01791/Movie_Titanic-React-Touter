// MovieCard.jsx
import { NavLink } from "react-router-dom";
import "../Movie/MovieCard.css";

export const MovieCard = ({ Currmovie }) => {
  const { Poster, Title, Type, Year, imdbID } = Currmovie;

  return (
    <li className="movie-card">
      <div className="card-container">
        <div className="poster-wrapper">
          <figure>
            <img src={Poster} alt={`Poster of ${Title}`} />
          </figure>
        </div>
        <div className="card-content">
          <h3 className="movie-title">{Title}</h3>
          <p className="movie-meta">
            {Type} | {Year}
          </p>
          <NavLink to={`/movie/${imdbID}`}>
            <button className="details-btn">More Details</button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};
