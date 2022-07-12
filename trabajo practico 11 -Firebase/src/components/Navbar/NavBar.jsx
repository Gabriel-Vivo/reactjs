import React from "react";

import "./Navbar.css";

import CartWidget from "../CartWidget/CartWidget";

import logo from "../imagenes/logoh.png";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const NavBar = () => {
  const [cart, addItem, clearCart, cantidadItems, cartTotal, removeItem] =
    useContext(CartContext);

  return (
    <nav className="Navigation">
      <div className="logotipo">
        <img src={logo} alt="logo" className="log" />
      </div>
      <ul className="List-ul">
        <Link to="/cart" className="li">
          {cart.length === 0 ? null : <CartWidget />}
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
