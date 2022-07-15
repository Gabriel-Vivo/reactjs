import React, { useState } from "react";
import { useEffect } from "react";

//import { listadoProdutos } from "../asyncmock";
import ItemList from "../ItemList/ItemList";

import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/FirebaseConfig";
import swal from 'sweetalert';



export const ItemListContainer = () => {



  const [items, setItems] = useState([]);


function alert () {


  swal("Write something here:", {
    content: "input",
  })
  .then((value) => {
   
    swal({
      title: `Gracias  ${value}`,
      text:  ` tu codigo de verificacion de compra es: axvdgfkgkrydndbhtg`,
      icon: "success",
      button: "Aww yiss!",
     
    });
  });
}



  useEffect(() => {
    // obtengo el array de prodcutos
    //setItems(listadoProdutos);
    //obtengo los prodcutos de la base de datos
    const getItems = async () => {
      const docs = []; //arraay vacio y le pusheo los productos de la base

      const q = query(collection(db, "productos"));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        //hago un foreach del array y dentro hago un push del array vacio docs para pasarle los productos de la bse da datos

        docs.push({ ...doc.data(), id: doc.id });
      });
      setItems(docs); //le paso al estado Items el array vacio con los productos pusheados
    };
    getItems(); //llamo a la funcion getItems
  }, []);

  





  return (
    <div className="contenedor">
      {/* paso por parametro el setitems que es el array de prodcuto, se lo paso al componente ItemList  */}
      <ItemList producto={items} />
      {/* importo el componente Itemlist y le paso por props item que es el array de producto*/}

     
    </div>
  );
};
