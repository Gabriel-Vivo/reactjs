import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./ItemCount.css";


import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const ItemCount = ({ stock, initial, onAdd, name, price }) => {



  const [cart, addItem, clearCart, cantidadItems, cartTotal, removeItem] =  useContext(CartContext);

  const [counter, setCounter] = useState(initial);

  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      alert("no hay mas stock");
    }
  };

  const resta = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      alert("No puedes comprar menos de 0 procductos ");
    }
  };

  return (
    <div className="botones">
      <p>Cantidad: {counter}</p>

      <button id="boton" onClick={sumar}>
        Agregar
      </button>

      <button id="btn2" onClick={resta}>
        Quitar
      </button>

      {/* a este boton le paso por parametro el counter , para que la reciba en el itemDetail y muestre por alert la cantidad de prodcuto seleccionados  */}
      <button onClick={() => onAdd(counter, name, price)}>
        Agregar al carrito{" "}
      </button>
      {cart.length === 0 ? null :
      <Link to={'/cart'}> ir al carrito!!</Link>
        }   
    </div>
  );
};
