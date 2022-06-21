
import React from "react";
import { Intem } from "./Intem";


//aqui obtengo la lista de prodcutos 


export const ItemList = ({producto}) => {    

  return (
    <div>

      {
        //el map recorre la lista de prodcutos que recibe por parametro del componente Item
          producto.map((unProducto)=>(<Intem key={unProducto.id} description={unProducto.description} img={unProducto.img} name={unProducto.name}  />)) 
      }
  
    </div>
    
    
  )
}
