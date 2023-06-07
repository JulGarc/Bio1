import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Formulario1, Cotizacion } from "./componentes/Cotizacion";
import { FacturaApp, MantenimientoCorrectivo } from "./componentes/ManCorrectivo";
import { FacturaApp1, MantenimientoPreventivo } from "./componentes/ManPreventivo";
import { Remision, Remision1 } from "./componentes/Remision";
import { Calibrar } from './componentes/Calibrar';
import { Navbar } from "./componentes/Navbar";
import "./hojas-de-estilo/Nav.css";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Calibrar" element={<Calibrar />} />
        <Route path="/Remision1" element={<Remision />} />
        <Route path="/Cotizacion" element={<Formulario1 />} />
        <Route path="/MantenimientoCorrectivo" element={<FacturaApp />} />
        <Route path="/MantenimientoPreventivo" element={<FacturaApp1 />} />
      </Routes>
    </BrowserRouter>
   
    </div>
  );
  
}

export default App;


  