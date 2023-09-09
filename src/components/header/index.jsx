import React, { Component } from "react";

import "./header.scss";
import { NavLink } from "react-router-dom";
export class Header extends Component {
  render() {
    return (
      <header>
        <div className="container header__container">
          <ul className="menu">
            <li className="menu-item">
              <NavLink to="/" className="menu-link">
                Home
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/business" className="menu-link">
                Business
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/entertainment" className="menu-link">
                Entertainment
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/general" className="menu-link">
                General
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/health" className="menu-link">
                Health
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/science" className="menu-link">
                Science
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/sports" className="menu-link">
                Sports
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/technology" className="menu-link">
                Technology
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
