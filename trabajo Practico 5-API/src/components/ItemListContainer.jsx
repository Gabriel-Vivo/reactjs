import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";

import { listadoProdutos } from "./asyncmock";
import { ItemList } from "./ItemList";
import "./ItemListContainer.css";

// contenedor de prodcutos , que estan en el Itemlist
const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   
    setTimeout(() => {
      setItems(listadoProdutos); //el setItems recibe el array de prodcutos que se llama ListadoProdcutos
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="contenedor">
     
      {isLoading ? (
        <div className="loading">
          <CircularProgress color="inherit" />
        </div>
      ) : (
         /* aca paso por props items que arriba recibe la lista de prodcutos del array ListadosProductos y lo manda al componente ItemList */
        <div className="contenedor">
          <ItemList producto={items} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
