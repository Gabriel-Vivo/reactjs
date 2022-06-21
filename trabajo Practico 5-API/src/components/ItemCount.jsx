import React, { useState } from "react";

import "./ItemCount.css";




export const ItemCount = () => {



  const [counter, setCounter] = useState(0);

  const sumar = () => {
    if (counter < 3) {
      setCounter(counter + 1);
    } else {
      alert("no hay mas stock");
    }
  };

  const resta = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("No puedes comprar menos de 0 procductos ");
    }
  };


  
  return (
    <div className="botones">
      <p>Counter: {counter}</p>

      <button id="boton" onClick={sumar}>
        suma
      </button>

      <button id="btn2" onClick={resta}>
        resta
      </button>
    </div>
  );
};
