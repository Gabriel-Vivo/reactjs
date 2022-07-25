import React from "react";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// import { getProductById } from "../asyncmock";
import { ItemDetail } from "../../components/iItemDetail/ItemDetail";
import { collection, query, getDocs,  where } from "firebase/firestore";


import {db} from '../../firebase/FirebaseConfig';

export const Category = () => {


  const [char, setChar] = useState([]);

  let { category } = useParams(); // destrucutre el id asi no me trae el objeto entero el useParams y solo me traiga el id

  useEffect(() => {
    
      const getChar = async () => {

        const docs = []; //arraay vacio y le pusheo los productos de la base
  
        const q = query(collection(db, "productos"), where('category', "==", category));
        const querySnapshot = await getDocs(q);
  
        querySnapshot.forEach((doc) => {
          //hago un foreach del array y dentro hago un push del array vacio docs para pasarle los productos de la bse da datos
  
          docs.push({ ...doc.data(), id: doc.id });
        });
        setChar(docs); //le paso al estado Char el array vacio con los productos pusheados
      };
      getChar(); //llamo a la funcion getChar
  }, [category]);

 

  return (
    <div >
      <h1>Detalles del Producto </h1>
      <div className="container">
        <div className="row">

        {
  char.map((data)=>{

    return(
      <div  key={data.id}  >
      <div className= "animate__animated animate__backInUp">
      <ItemDetail  data={data} />
      </div>
    </div>

    )
 
   
  })
 }
        </div>
        </div>

   
    </div>
  );
};