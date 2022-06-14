import React from "react";
import "./App.css";


import ItemListContainer from "./components/ItemListContainer";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer nombre=" P*****NIC"  descripcion=" Queso danbo, tomate, lechuga capuchina, pepinos en pickle, cebolla
            blanca y mostanezic" />
    </div>
  );
}

export default App;
