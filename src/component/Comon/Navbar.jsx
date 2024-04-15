import React from "react";
import { Link } from "react-router-dom";
import { Person, PersonAdd } from "react-bootstrap-icons";
import img from "../../image/calendar.png";

function Navbar() {
  return (
    <div id="mean-section">
      <div
        id="navbar-section"
        className="navbar navbar-expand-lg p-3"
        style={{ position: "fixed", top: "0px", zIndex: "1" }}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand text-light d-flex align-items-center"
            to="#"
          >
            <img src={img} alt="imgess" width="35" height="30" />
            <span className="logo-heading">Destination</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item dropdown ">
                <Link
                  className="nav-link dropdown-toggle text-light"
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-theme="dark"
                >
                  India
                </Link>
                <ul
                  className="dropdown-menu dropdown-menu-transpar"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item " to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="d-flex flex-end">
              <button className="btn btn-outline-light rounded-circle">
                <span>
                  <Person size={33} />
                </span>
              </button>
              <button className="btn btn-outline-dark ms-2 rounded-circle">
                <span>
                  <PersonAdd size={33} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;