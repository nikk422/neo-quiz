import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="navbar-container">
        <div className="navbar-header">
          <Link to="/">
            <h2 className="headHover navbar-link">NeoQuiz</h2>
          </Link>
          <div className="headHover navbar-section">
            <Link to="/rules">
              <h2 className="headHover navbar-link">Rules</h2>
            </Link>
            <Link to="/login">
              <h2 className="headHover navbar-link">Login</h2>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Navbar;
