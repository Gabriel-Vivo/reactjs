import React from "react";
import Item from "../Item/Item";
import "./ItemList.css"



const ItemList = ({ producto }) => {
  return (


    
    <div className="grilla">
      {
        //el map recorre el array  de prodcutos, obejto por objeto  que recibe por parametro del componente ItemListConateiner 

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
