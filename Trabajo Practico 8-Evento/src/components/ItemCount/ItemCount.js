import React, { useState } from "react";

import "./ItemCount.css";

export const ItemCount = ({ stock, initial,onAdd }) => {
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

      <button onClick={onAdd}>Agregar al carrito </button>
    </div>
  );
};
