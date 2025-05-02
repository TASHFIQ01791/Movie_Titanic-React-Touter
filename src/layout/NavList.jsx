import { NavLink } from "react-router-dom";

export const NavList = () => {
  // method to add active link
  const getNavLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";
  return (
    <>
      <li className="nav-item">
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/movie" className="nav-link">
          Movie
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </li>
    </>
  );
};
