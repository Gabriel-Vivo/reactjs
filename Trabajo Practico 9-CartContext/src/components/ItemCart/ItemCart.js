import React, { useContext } from "react";

import "./ItemCart.css";
import { CartContext } from "../../context/CartContext";

export const ItemCart = ({ producto }) => {
  const [ cart, addItem, clearCart, cantidadItems, cartTotal, removeItem ] = useContext(CartContext);

  return (
    <div className="tarjeta-carrito">
      <h3>{producto.name}</h3>

      <img src={producto.img} alt={producto.nombr} />

      <p>{producto.price}</p>

      <p>x:{producto.cantidad}</p>

      <p>SubTotal: ${producto.cantidad * producto.price}</p>

      <button onClick={() => removeItem(producto.id)}>Eliminar</button>
    </div>
  );
};
