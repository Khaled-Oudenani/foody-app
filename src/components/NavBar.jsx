import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { HashLink } from "react-router-hash-link";
import Logo from "../assets/foody.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../styles/NavBar.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="logo" onClick={closeMenu}>
        <img src={Logo} alt="foody logo" />
      </div>

      <button
        className="menu-btn"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      <div className={`links ${open ? "open" : ""}`}>
        <ul onClick={closeMenu}>
          <li>
            <HashLink smooth to="/#home">
              Home
            </HashLink>
          </li>
          <li>
            <RouterLink to="/Liked">
              <FavoriteIcon />
            </RouterLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true} duration={600}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
