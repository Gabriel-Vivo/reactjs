import "./ItemDetail.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography'
import { ItemCount } from "../ItemCount/ItemCount";



export const ItemDetail = ({img,name,description,category,stock}) => {  



  function onAdd() {
    alert(`Agregastes al carrito  productos `);
  }


  return (    

//armo la tarjeta con M-IU  y le paso por props el name , description ,img y category
<div className='tarjeta'>


<Card sx={{ maxWidth: 345 }} >
    <CardMedia
      component="img"
      alt=""
     
      image={img}
    />
    <CardContent>
      <Typography gutterBottom variant="h4" component="div">
        {name} 
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        {category} 
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {description}
      </Typography>
    </CardContent>
    <CardActions className='botones'>
     <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
    </CardActions>
  </Card>

    </div>

  
  );
};
