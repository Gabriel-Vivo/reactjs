import React from 'react'

import "./Navbar.css"

import { CartWidget } from '../CartWidget/CartWidget';

import logo from '../imagenes/logoh.png'

export const NavBar = () => {
    return (
        <nav>
          <div className="logotipo">
            <img src={logo} alt="logo" className="log" />
          </div>
          <ul>
            <li>
              <a href="#">
                
              <CartWidget/>
                
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
}
