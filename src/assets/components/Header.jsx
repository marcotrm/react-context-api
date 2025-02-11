import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <img src="public/logo.svg" alt="logo" />
          <h3>LO SCUGNIZO NAPOLETANO</h3>
        </div>
        <div className="header-right">
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <Link to="footer" smooth={true} duration={400}>
                  Contatti
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
