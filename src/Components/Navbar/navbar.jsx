import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import "./navbar.css";
import logo from '../Assets/salad1.png'
import { HamburgetMenuClose, HamburgetMenuOpen } from './Icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span>
              <img src={logo} alt="" />
            </span>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="About"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={80}
                className="nav-links"
              >
                About
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="Work"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={80}
                className="nav-links"
              >
                Work
              </ScrollLink>
            </li>
         
            <li className="nav-item">
              <ScrollLink
                to="Contact"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={80}
                className="nav-links"
              >
                Contact
              </ScrollLink>
            </li>
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
