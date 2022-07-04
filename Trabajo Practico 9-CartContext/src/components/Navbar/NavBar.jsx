import React from "react";

import "./Navbar.css";

import CartWidget from "../CartWidget/CartWidget";

import logo from "../imagenes/logoh.png";

import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="Navigation">
      <div className="logotipo">
        <img src={logo} alt="logo" className="log" />
      </div>
      <ul className="List-ul">
        <Link to="/cart" className="li">
          <CartWidget />
        </Link>
        <Link to="/" className="li">
          Home
        </Link>
        <Link to="/about" className="li">
          About
        </Link>
        <Link to="/contact" className="li">
          Contact
        </Link>
      </ul>
    </nav>
  );
};
