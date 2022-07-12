import React, {useContext} from "react";
import "./ItemDetail.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";


export const ItemDetail = ({ data }) => {

  const [ cart, addItem, clearCart, cantidadItems, cartTotal ] = useContext(CartContext);  

  //esta funcion recibe por aprametro el numero que viene del itemCount para poder mostrar por alert la cantidad de productos seleccionados
  function onAdd(numero) {
    
    addItem( data , numero)
    
  }

  return (
    //armo la tarjeta con M-IU  y le paso por props el name , description ,img , category y el stock
    <div className="tarjeta">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" alt="" image={data.img} />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {data.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {data.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{color:"black", fontSize:"25px", marginTop:"7px"}}>
            $ {data.price}
          </Typography>
        </CardContent>
        <CardActions className="botones">
          <ItemCount stock={data.stock} initial={1} onAdd={onAdd} name={data.name}  />
        </CardActions>
      </Card>
    </div>
  );
};
