import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar d-flex flex-row-reverse sticky-top navbar-expand-lg navbar-light bg-light">
        <div>
          <a className="navbar-brand" href="#">
            BTBTB
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active mx-2">
              <NavLink to="/" className="nav-link">
                Hem
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink to="/booking" className="nav-link">
                Bokning
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
