import React from "react";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { getProductById } from "../asyncmock";
import { ItemDetail } from "../iItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [char, setChar] = useState({});

  let { id } = useParams(); // destrucutre el id asi no me trae el objeto entero el useParams y solo me traiga el id

  useEffect(() => {
    getProductById(id) //aqui le paso el id por parametro que traigo del useParams !!!
      .then((res) => setChar(res)) // aqui le paso por parametro el prodcuto que me trajo segun el id que le pasamos por useParams
      .catch((err) => console.log(err));
  }, [id]);

  console.log(char);

  return (
    <div>
      <h1>Detalles del Producto </h1>
      <ItemDetail
        id={char.id}
        img={char.img}
        name={char.name}
        description={char.description}
        category={char.category}
        stock={char.stock}
        price={char.price}
      />

      {/*importo el componente ItemDetail que es el que arma la tarjeta y le paso por props  */}
    </div>
  );
};
