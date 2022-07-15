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
    //getProductById(id) //aqui le paso el id por parametro que traigo del useParams !!!
      //.then((res) => setChar(res)) // aqui le paso por parametro el prodcuto que me trajo segun el id que le pasamos por useParams
      //.catch((err) => console.log(err));

      const getChar = async () => {

        const docs = []; //arraay vacio y le pusheo los productos de la base
  
        const q = query(collection(db, "productos"), where('category', "==", category));
        const querySnapshot = await getDocs(q);
  
        querySnapshot.forEach((doc) => {
          //hago un foreach del array y dentro hago un push del array vacio docs para pasarle los productos de la bse da datos
  
          docs.push({ ...doc.data(), id: doc.id });
        });
        setChar(docs); //le paso al estado Items el array vacio con los productos pusheados
      };
      getChar(); //llamo a la funcion getItems
  }, [category]);

  console.log(char);

  return (
    <div>
      <h1>Detalles del Producto </h1>
      
 {
  char.map((data)=>{

    return <ItemDetail key={data.id} data={data}/>
  })
 }
   
    </div>
  );
};