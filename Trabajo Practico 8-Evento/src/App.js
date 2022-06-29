
import './App.css';

import { NavBar } from './components/Navbar/NavBar';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Views/Home/Home";
import About from "./Views/About/About";
import Contact from "./Views/Contact/Contact";

import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';




function App() {

 
  return (

    <Router>
        <div className="App">
     <NavBar/>
   
     <Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
          <Route path='/detail/:id' element={<ItemDetailContainer/>} />
					
				</Routes>

      
    </div>
    </Router>

  );
}

export default App;
