import { NavLink, useNavigate, useRouteError } from "react-router-dom";
import "./Error.css";

export const ErrorPage = () => {
  // checking error through useRouteError
  const error = useRouteError();
  // Navigate through useNavigate
  const navigate = useNavigate();

  const handleGoBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  console.log(error);
  if (error.status === 404) {
    return (
      <section className="error-page">
        <div className="error-content">
          <figure>
            <img
              src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
              alt="404 page"
              className="error-image"
            />
          </figure>
          <div className="error-message">
            <p>The page you are looking for does not exist.</p>
            <div className="error-links">
              <NavLink to="/" className="btn btn-home">
                Go Back to Home Page
              </NavLink>
              <button className="btn btn-back" onClick={handleGoBack}>
                Go Back
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <>
      <h1>OOPS!!</h1>
      <p>Message type: {error.statusText || error.message}</p>
      <p>Error type: {error.message || error.status}</p>
      <div className="error-message">
        <p>The page you are looking for does not exist.</p>
        <div className="error-links">
          <NavLink to="/" className="btn btn-home">
            Go Back to Home Page
          </NavLink>
          <button className="btn btn-back" onClick={handleGoBack}>
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};
