import React from "react";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// import { getProductById } from "../asyncmock";
import { ItemDetail } from "../iItemDetail/ItemDetail";
import { collection, query, getDocs, documentId, where } from "firebase/firestore";


import {db} from '../../firebase/FirebaseConfig';

export const ItemDetailContainer = () => {


  const [char, setChar] = useState([]);

  let { id } = useParams(); // destrucutre el id asi no me trae el objeto entero el useParams y solo me traiga el id

  useEffect(() => {
  
      const getChar = async () => {

        const docs = []; //arraay vacio y le pusheo los productos de la base
  
        const q = query(collection(db, "productos"), where(documentId(), "==", id));
        const querySnapshot = await getDocs(q);
  
        querySnapshot.forEach((doc) => {
          //hago un foreach del array y dentro hago un push del array vacio docs para pasarle los productos de la bse da datos
  
          docs.push({ ...doc.data(), id: doc.id });
        });
        setChar(docs); //le paso al estado Items el array vacio con los productos pusheados
      };
      getChar(); //llamo a la funcion getItems
  }, [id]);

 

  return (
    <div >
      <h1>Detalles del Producto </h1>
      <div className="d-flex justify-content-center animate__animated animate__backInUp">
      {
  char.map((data)=>{

    return <ItemDetail key={data.id} data={data}/>
  })
 }
   

      </div>

    </div>
  );
};
