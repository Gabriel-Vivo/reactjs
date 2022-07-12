import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ItemCart } from "../ItemCart/ItemCart";

import { Link } from "react-router-dom";

import "./Cart.css";

const Cart = () => {
  const [cart, addItem, clearCart, cantidadItems, cartTotal, removeItem] =
    useContext(CartContext);

  return (
    <>
      {cart.length === 0 ? (
        <h2>Carrito Vacío</h2>
      ) : (
        <div className="cart-container">

          {/* aca paso la cantidad de prodcutos que hay en mi carrito mas el total */}
          <h3>
            Mi Carrito ({cantidadItems()} items) - Total ($): {cartTotal()}
          </h3>

                      {/* aca hago un map de mi carrito y le paso al componente ItemCart los props del producto */}
          {cart.map((element) => (
            <ItemCart key={element.id} producto={element} />
          ))}

             {/* boton que vacia el carrito */}
             <button
            type="button"
            class="btn btn-outline-secondary"
            onClick={clearCart}
          >
            vaciar carrito
          </button>
        </div>
     

      )}
      {/* boton que vuelve al inicio */}
      {cart.length === 0 ? (
        <Link to="/">
          <button type="button" className="btn btn-outline-secondary">
            volver al Inicio
          </button>
        </Link>
      ) : null}
      
    </>
  );
};

export default Cart;
