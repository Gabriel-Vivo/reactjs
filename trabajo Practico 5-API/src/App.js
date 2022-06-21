import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import ItemListcontainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <ItemListcontainer />
    </div>
  );
}

export default App;
