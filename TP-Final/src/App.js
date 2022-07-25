import "./App.css";

import { NavBar } from "./components/Navbar/NavBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./Views/About/About";
import Contact from "./Views/Contact/Contact";

import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./context/CartContext";

import Cart from "../src/components/cart/Cart";

import { Category } from "./Views/Category/Category";
import { FinalizarCompra } from "./components/FinalizarCompra/FinalizarCompra";
import { Inicio } from "./Views/Inicio/Inicio";
import { Footer } from "./components/Footer/Footer";




function App() {
  return (
    <Router>

      <CartContextProvider>

          <div className="App">
            <NavBar />

            <Routes>
            
            <Route path="/" element={<Inicio/>} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="/category/:category" element={<Category />} />
              <Route path="/finalizarCompra" element={<FinalizarCompra />} />
            
             
            </Routes>

            <Footer/>
          </div>

      </CartContextProvider>

    </Router>
  );
}

export default App;
