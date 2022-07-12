import { createContext, useState } from "react";

export const CartContext = createContext(); //se usa esta funcion por default

function CartContextProvider({ children }) {

  const [cart, setCart] = useState([]); // inicializo el array cart vacio

/////////////////////////////////////////////////////////////////////////////

  function addItem(item, cantidad) { //funcion que agrega al array cart 

    if( isInCart(item.id) ) {

        let itemCart = cart.find(item => item.id === item.id);

        itemCart.cantidad += cantidad;
        setCart([...cart]);

    }else {

        setCart([...cart, {...item, cantidad}]);

    }

  }

  ////////////////////////////////////////////////////////////////////////////////////

  function removeItem(id) {       //funcion que borrar producto del array cart
    setCart( cart.filter( item => item.id !== id) );
  }

/////////////////////////////////////////////////////////////////////////////////////////

  function clearCart() { //funcion que borra el carrito completo 
    setCart([]);    
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////


  function isInCart(idItem) {     //funcion que verifica si esta en el array cart para que no haya duplicados 
    return cart.some( item => item.id === idItem);    
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////

  function cantidadItems(){ //funcion que le suma al carrito la cantidad 
    return cart.reduce((total, item) => total + item.cantidad, 0);
  }


//////////////////////////////////////////////////////////////////////////////////////////////////////////

  function cartTotal(){
    return cart.reduce((total, item) => total + (item.price*item.cantidad), 0);
  }

  

  return (
    <CartContext.Provider value={[cart, addItem, clearCart, cantidadItems, cartTotal, removeItem]}>
        {children}    
    </CartContext.Provider>
  );
    
}

export default CartContextProvider;

