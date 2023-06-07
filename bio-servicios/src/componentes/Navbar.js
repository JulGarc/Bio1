import React from "react";
import { useState } from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";


function Navbar(){

  const [menuDesplegado, setMenuDesplegado] = useState(false);
  const toggleMenuDesplegado = () => {
    setMenuDesplegado(!menuDesplegado);
  };

return(
    <div>

    
    <nav className="navbar navbar-expand-lg bg-primary">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenuDesplegado}
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <Link to="/" class="navbar-brand" style={{ color: "white" }}>
          BIO-SERVICIOS
        </Link>

        <Link to="/Calibrar" class="navbar-brand" style={{ color: "white" }}>
          CALIBRAR
        </Link>
       
        <div
          class={`collapse navbar-collapse ${menuDesplegado ? "show" : ""}`}
          id="navbarNav"
        >
          <ul class="navbar-nav navbar-options">
          <li class="nav-item">
              <Link to="/Remision1" class="nav-link" aria-current="page">
                Entregar
              </Link>
            </li>
          <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                RECIBIR
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link
                    to="/MantenimientoPreventivo"
                    class="dropdown-item"
                    aria-current="page"
                  >
                    Mantenimiento Preventivo
                  </Link>
                </li>
                <li>
                  <Link
                    to="/MantenimientoCorrectivo"
                    class="dropdown-item"
                    aria-current="page"
                  >
                    Mantenimiento Correctivo
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <Link to="/Remision1" class="nav-link" aria-current="page">
                REMISION
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Cotizacion" class="nav-link" aria-current="page">
                COTIZACION
              </Link>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  
  </div>
    
);


}
export{Navbar};