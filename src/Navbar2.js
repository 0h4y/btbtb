import React from "react";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar d-flex flex-row-reverse sticky-top navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">BTBTB</span>
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

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active mx-2">
                <NavLink to="/" className="nav-link active">
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;
