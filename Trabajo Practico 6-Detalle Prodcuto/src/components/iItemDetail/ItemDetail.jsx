import React from 'react'

import './ItemDetail.css'



import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'

export const ItemDetail = ({name,description,img}) => {
  return (




//armo la tarjeta con M-IU  y le paso por props el name , description ,img 
  <div className='tarjeta'>


<Card sx={{ maxWidth: 345 }} >
    <CardMedia
      component="img"
      alt={name}
      height="140"
      image={img}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {description}
      </Typography>
    </CardContent>
    <CardActions className='botones'>
      <Button variant="contained" color="success">Agregar Carrito</Button>
      <Button size="small">-</Button>
      <div className='eje'>3</div>
      <Button size="small">+</Button>

    </CardActions>
  </Card>

    </div>


  )
}
