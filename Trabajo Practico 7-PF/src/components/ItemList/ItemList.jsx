import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";


const ItemList = ({ producto }) => {
  return (
    <div className="contenedor">
      {
        //el map recorre la lista de prodcutos que recibe por parametro del componente ItemListConateiner y se lo paso al componente Item por parametro

        producto.map((char) => {
          return (
            <div key={char.id}>
              
                <Item data={char} />
              
            </div>
          );
        })
      }
    </div>
  );
};

export default ItemList;
