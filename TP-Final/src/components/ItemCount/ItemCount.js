import React, { useState,useContext } from "react";



import swal from 'sweetalert'
import "./ItemCount.css";


import { CartContext } from "../../context/CartContext";

import { doc, updateDoc } from "firebase/firestore";
import {db} from '../../firebase/FirebaseConfig';




export const ItemCount = ({ stock, initial, onAdd,id }) => {


  const [ cart, addItem, clearCart, cantidadItems, cartTotal ] = useContext(CartContext);  



  

  const [counter, setCounter] = useState(initial);
  const [tok, setTok] = useState(stock);
  


 const productos = async () =>{

  const prodcuto = doc(db, "productos", id);

  
  await updateDoc(prodcuto, {
      
    stock:tok
  });


}
productos();





  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
      setTok(tok - 1)
      
        

    } else {
      
      swal("no hay mas stock ");
    }
  };

  const resta = () => {
    if (counter > 1) {
      setCounter(counter - 1);
      setTok(tok + 1)
    } else {

      swal("no puedes comprar 0 productos !");
    }
  };











  return (

 
    <div className="botones">
      <p>stock: {tok}</p>
      <p className="cantidad">Cantidad: {counter}</p>

      <button id="boton"  className="btn btn-secondary " onClick={sumar}>
        suma
      </button>

      <button id="btn2" className="btn btn-secondary"  onClick={resta}>
      resta
      </button>

      {/* a este boton le paso por parametro el counter , para que la reciba en el itemDetail y muestre por alert la cantidad de prodcuto seleccionados  */}
      <button type="button" className="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover" onClick={() => onAdd(counter)}>
        Agregar al carrito
      </button>
      
    </div>
  );
};
