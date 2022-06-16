import React from "react";

import "./ItemListContainer.css";
import imagen from "./ham.png";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

const ItemListContainer = ( props) => {
  return (
    <div className="img">
      <Card sx={{ maxWidth: 345 }} className="cardd">
        <CardMedia
          component="img"
          image={imagen}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {props.descripcion}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ItemListContainer;
