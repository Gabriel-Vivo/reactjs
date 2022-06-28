
import React, { useState } from "react";
import { useEffect } from "react";

import { listadoProdutos } from "../asyncmock";
import ItemList from "../ItemList/ItemList";


export const ItemListContainer = () => {


    const [items, setItems] = useState([])

    useEffect(() => {
      
      // obtengo el array de prodcutos 
     setItems(listadoProdutos); 
     
    }, [])

    console.log(items);


  return (


    <div className="contenedor">
     
    
      
        {/* paso por parametro el set items que es el array de prodcuto, se lo paso al componente ItemList  */}
        
      
      
      <ItemList  producto={items} />

      
      
        
      
    </div>
  );


   
 
}
