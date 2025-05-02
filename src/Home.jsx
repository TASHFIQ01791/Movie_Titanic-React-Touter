import { NavLink } from "react-router-dom";
import "./Home.css"; // Import the CSS file

export const Home = () => {
  return (
    <main className="home-main">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <p className="subheading">Explore the Latest in Movie Industries</p>
            <h1 className="heading">Unlimited Movies, TV Shows, & More.</h1>
            <p className="description">
              Your ultimate guide to must-watch content — discover the top
              movies and dramas.
            </p>
            <NavLink to="/movie" className="explore-button">
              Explore Now
            </NavLink>
          </div>
          <div className="hero-image">
            <img src="./movies.png" alt="Movies Poster" />
          </div>
        </div>
      </section>
    </main>
  );
};
