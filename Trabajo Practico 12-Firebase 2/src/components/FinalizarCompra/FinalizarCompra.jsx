
import { useState } from "react";
import "./FinalizarCompra.css"


import { collection, addDoc } from "firebase/firestore";
import { async } from "@firebase/util";

import {db} from '../../firebase/FirebaseConfig';

import swal from 'sweetalert';





const inicial = {

    name:'',
    apellido:"",
    ciudad:"",

};

export const FinalizarCompra = () => {

const [values,setValues] = useState(inicial );




const handleOnChange = (e)=>{

 const {value,name } = e.target;

 setValues({...values,[name]:value});
};


const onSubmit = async (e) =>{
e.preventDefault();
const docRef = await addDoc(collection(db, "Compras"), {
   values
  });
  console.log("Document written with ID: ", docRef.id);
  swal("Gracias Por Tu Compra!", "Tu numero de gestion es: " +  docRef.id , "success");
  setValues(inicial);
}



  return (
    
    <div>
        <h1>Registrate antes  de finalizar tu Compra! </h1>
<form className='contenedor' onSubmit={onSubmit}>

<div className="input-group mb-3">
      <span className="input-group-text" id="inputGroup-sizing-default">Nombre</span>
      <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"    value={values.name} onChange={handleOnChange} name="name"/>
 
  
    </div>
    <div className="input-group mb-3">
    <span className="input-group-text" id="inputGroup-sizing-default">Apellido</span>
    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"    value={values.apellido} onChange={handleOnChange} name="apellido"/>
 

  </div>
  <div className="input-group mb-3">
  <span className="input-group-text" id="inputGroup-sizing-default">Ciudad</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"  value={values.ciudad} onChange={handleOnChange} name="ciudad"/>
  
 </div>
 <button>
    Enviar Compra
  </button>
</form>



    </div>
  

    
 
  )
}
