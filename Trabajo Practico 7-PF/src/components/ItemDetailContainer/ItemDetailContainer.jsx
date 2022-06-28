
import React from 'react'

import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";

import { getProductById } from "../asyncmock"
import { ItemDetail } from '../iItemDetail/ItemDetail';

export const ItemDetailContainer = () => {


  const[char,setChar] = useState({});

 let {id} = useParams() ;
    
  
  useEffect(() => {
    getProductById(id)//aqui le paso el por parametro el id que neceito que me traiga del array !!!
        .then(res => setChar(res))// aqui le paso por parametro el prodcuto que me trajo segun el id que le pasamos en a liena anterior 
        .catch(err => console.log(err))
  }, [id])
  

console.log(char);


  return (

   
<div>
<h1>Detalles del Producto </h1>
<ItemDetail img={char.img} name={char.name} description={char.description} category={char.category} />


</div>



  







  );
};
