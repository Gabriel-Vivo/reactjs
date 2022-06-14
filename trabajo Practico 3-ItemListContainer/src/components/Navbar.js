import React from "react";
import logoo from "./logoh.png";
import "./Navbar.css";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <nav>
      <div className="logotipo">
        <img src={logoo} alt="logo" className="log" />
      </div>
      <ul>
        <li>
          <a href="#">
            
            <ShoppingCartIcon />
          </a>
        </li>
        <li>
          <a href="#">inicio</a>
        </li>
        <li>
          <a href="#">Bebidas</a>
        </li>
        <li>
          <a href="#">Hamburguesas</a>
        </li>
        <li>
          <a href="#">Contactos</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
