import { NavLink } from "react-router-dom";
import logo from "../../images/Logo.png";
import { HiOutlineBellAlert } from "react-icons/hi2";
import "./Header.css";

const Header = () => {
  return (
    <div id="Header" className="dark-mode">
      <div className="container">
        <div className="header">
          <img src={logo} alt="" />
          <nav>
            <NavLink
              to="/"
              className="nav-link"
            >
              Home
            </NavLink>
            <NavLink
              to="/admin"
              className="nav-link"
            >
              Admin
            </NavLink>
          </nav>
          <h1>
            Balance: <span>10000com</span>
          </h1>
          <HiOutlineBellAlert style={{ fontSize: "2pc" }} className="icon" />
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
