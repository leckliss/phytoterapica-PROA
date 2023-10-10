import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/header/header";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
//paginas
import Acessorios from  "./components/pages/acessorios/acessorios";
import Aromatizadores from "./components/pages/aromatizadores/aromatizadores";
import Essenciais from "./components/pages/essenciais/essenciais";
import Naturais from "./components/pages/naturais/naturais";
import Ofertas from "./components/pages/ofertas/ofertas";
import Pessoal from "./components/pages/pessoal/pessoal";
import Sinergias from "./components/pages/sinergias/sinergias";
import Vegetais from "./components/pages/vegetais/vegetais";

function App() {
  return (
    <div className="App">
    <Router>
        <Header/> 
      <Routes>
        
      </Routes>
        
    </Router>
    
  
    </div>
  );
}

export default App;
