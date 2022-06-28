import React from 'react'

import './Item.css';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';


import { Link } from 'react-router-dom';

// reciebe por parametro del ItemList el name y la imagen para mostrarlo en la tarjeta de prodcuto 
const Item = ({data}) => {
   
  


      return (

        <div className='contenedorItem'>

<Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={data.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              <Link to={`/detail/${data.id}`}>
              <button>ver mas</button>
              </Link>
             
            </Typography>
          
          
          </CardContent>
         
        </Card>

        </div>
   
      );
    }


export default Item