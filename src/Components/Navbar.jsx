import React, { useState } from "react";
import { navLinks } from "./data";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light flex-column  align-items-center">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/logo.png" className="logo" alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav gap-0 gap-lg-4 ms-md-auto">
            {navLinks.map((item) => {
              const { id, url, text } = item;
              return (
                <li className="nav-item ms-2" key={id}>
                  {" "}
                  <Link to={url} className="nav-link">
                    {text}
                  </Link>{" "}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
