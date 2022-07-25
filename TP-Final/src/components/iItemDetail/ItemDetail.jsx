


import React, {useContext} from "react";
import "./ItemDetail.css";

import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import swal from 'sweetalert'



export const ItemDetail = ({ data }) => {

  const [ cart, addItem, clearCart, cantidadItems, cartTotal ] = useContext(CartContext);  




  function onAdd(numero) {
    
    addItem( data , numero)
    swal(`Compraste ${numero} ${data.category} ${data.name} `);
  



}


console.log(data.stock);


  return (
    //armo la tarjeta   y le paso por props al componente ItemCount el name , description ,img , category y el stock

   

<div className="cont shadow-lg p-3 mb-5 bg-body rounded">

  <div className="imagen">
  <img  className="foto" src={data.img} alt="" />
  </div>
  
    
  
  <div className="texto">
    <h2>
      {data.name}
    </h2>
    <p>{data.description}</p>

    <ItemCount stock={data.stock} initial={1} onAdd={onAdd} name={data.name} id={data.id}  />
  </div>
</div>


  );
};
