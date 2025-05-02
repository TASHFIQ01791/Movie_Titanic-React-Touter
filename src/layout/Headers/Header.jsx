import { NavLink } from "react-router-dom";
import "../Headers/Header.css";
import { NavList } from "../NavList";

export const Header = () => {
  return (
    <header className="section-navbar">
      <section className="top_txt">
        {/* left side  */}
        <div className="head_txt">
          <p>I support Palestine. 💫</p>
        </div>

        {/* Navbar Section */}
        <nav className="navbar">
          <ul>{<NavList />}</ul>
        </nav>

        {/* Right Side  */}
        <div className="sing_in_up">
          <NavLink to="#">Sign Up</NavLink>
          <NavLink to="#">Sign In</NavLink>
        </div>
      </section>
    </header>
  );
};
