import React, {useContext} from 'react';


import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../context/CartContext';




export default function CartWidget() {

  const [ cart, addItem, clearCart, cantidadItems, cartTotal, removeItem ] = useContext(CartContext);  



  return (
    <div>
  <IconButton aria-label="cart">
        <div style={{display:"flex", alignItems:"center", color:"white"}}>
          <ShoppingCartIcon />
          <p>{cantidadItems()}</p>
          
        </div>              
    </IconButton>
   
    </div>
   
  
  );
    
    
}

