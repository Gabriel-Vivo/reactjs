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
          Inicio
        </Link>

        <li className="nav-item dropdown">
          <span
            className="  categoria"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Categorias
          </span>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to="/category/bebida" className="cate">
              <span className="dropdown-item ">Bebidas</span>
            </Link>
            <Link to="/category/burguer" className="cate">
              <span className="dropdown-item">Hamburguesas</span>
            </Link>
          </ul>
        </li>

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
