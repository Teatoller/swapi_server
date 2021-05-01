/* eslint-disable max-len */
import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = { color: "#f0a243" };
const logoUrl = `./img/swapi.svg`;

export const HomeNav = () => (
    <nav className="navbar navbar-expand-sm navbar-expand-lg navbar-light navshade border-bottom border-warning">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img
            src={logoUrl}
            className="d-inline-block align-top p-1 bg-warning nav-img"
            alt=""
            loading="lazy"
          />
          <span className="font-weight-bold text-warning p-3">Swapi</span>
        </NavLink>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav text-capitalize ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" activeStyle={activeStyle} to="/">
              <i className="bi bi-house-door"  aria-label="Home"> Home</i>
                <span className="sr-only">(current)</span>
              </NavLink>
            </li>

            <li className="nav-item dropdown" />
          </ul>
        </div>
      </div>
    </nav>
  );
export default HomeNav;
