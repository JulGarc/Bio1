import React, { useState, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import axios from 'axios';
import swal from 'sweetalert2';
import { withReactContent } from 'sweetalert2-react-content';
import '../hojas-de-estilo/Formulario2.css';

function Formulario1() {
  const [cliente, setCliente] = useState('');
  const [id, setId] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [fecha, setFecha] = useState('');
  const [facturas, setFacturas] = useState([]);
  const [codigoUnico, setCodigoUnico] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [valorUnitario, setValorUnitario] = useState('');
  const [equipo, setEquipo] = useState('');
  const [modelo, setModelo] = useState('');
  const [marca, setMarca] = useState('');
  const [serie, setSerie] = useState('');
  const [infoAdicional, setInfoAdicional] = useState('');
  const clienteSignatureRef = useRef();

  const generarCodigo = () => {
    // Lógica para generar el código único de la factura
    const fecha = new Date();
    const anio = fecha.getFullYear();
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDate();
    const numeroAleatorio = Math.floor(Math.random() * 1000* 3);

    const codigoUnico = `${anio}${mes}${dia}-${numeroAleatorio}`;

    return codigoUnico;
  };

  const agregarFactura = () => {
    const facturaExistente = facturas.find(
      (factura) => factura.cliente === cliente && factura.id === id
    );

    if (facturaExistente) {
      const producto = {
        cantidad,
        valorUnitario,
        equipo,
        modelo,
        marca,
        serie,
        infoAdicional,
      };

      facturaExistente.productos.push(producto);
    } else {
      const nuevoCodigoUnico = generarCodigo();

      const facturaNueva = {
        codigo: nuevoCodigoUnico,
        cliente,
        id,
        direccion,
        telefono,
        correo,
        fecha,
        productos: [
          {
            cantidad,
            valorUnitario,
            equipo,
            modelo,
            marca,
            serie,
            infoAdicional,
          },
        ],
      };

      setFacturas([...facturas, facturaNueva]);
      setCodigoUnico(nuevoCodigoUnico);
    }

    limpiarCampos();
  };

  const limpiarCampos = () => {
    setCantidad('');
    setValorUnitario('');
    setEquipo('');
    setModelo('');
    setMarca('');
    setSerie('');
    setInfoAdicional('');
  };

  const guardarFirmaCliente = () => {
    const canvas = clienteSignatureRef.current;

    if (canvas) {
      const firmaCliente = canvas.toDataURL();
      // Aquí puedes enviar la firma del cliente a tu servidor o hacer algo con ella
      console.log(firmaCliente);
    }
  };

  return (
    
    <div className="app">
     
      
      <h1>Cotizacion</h1>

      <div className="input-container">
        <input
          className="input"
          type="text"
          placeholder="Cliente"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
        />

        <input
          className="input"
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <input
          className="input"
          type="text"
          placeholder="Dirección"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />

        <input
          className="input"
          type="text"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />

        <input
          className="input"
          type="text"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <input
          className="input"
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>

      <div className="input-container">
        <input
          className="input"
          type="number"
          placeholder="Cantidad"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
        />

        <input
          className="input"
          type="number"
          placeholder="Valor Unitario"
          value={valorUnitario}
          onChange={(e) => setValorUnitario(e.target.value)}
        />

        <input
          className="input"
          type="text"
          placeholder="equipo"
          value={equipo}
          onChange={(e) => setEquipo(e.target.value)}
        />

        <input
          className="input"
          type="text"
          placeholder="Marca"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
        />

        <input
          className="input"
          type="text"
          placeholder="Modelo"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
        />

        <input
          className="input"
          type="text"
          placeholder="Serie"
          value={serie}
          onChange={(e) => setSerie(e.target.value)}
        />
        </div>

        <div>
        <textarea
          className="input"
          placeholder="Información Adicional"
          value={infoAdicional}
          onChange={(e) => setInfoAdicional(e.target.value)}
        />
      </div>

      <button className="btn-agregar" onClick={agregarFactura}>
        Agregar
      </button>

      <table className="tabla">
        <thead>
          <tr>
            <th>#</th>
            <th>Código</th>
            <th>Cliente</th>
            <th>ID</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Fecha</th>
            <th>Productos</th>
          </tr>
        </thead>
        <tbody>
          {facturas.map((factura, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{factura.codigo}</td>
              <td>{factura.cliente}</td>
              <td>{factura.id}</td>
              <td>{factura.direccion}</td>
              <td>{factura.telefono}</td>
              <td>{factura.correo}</td>
              <td>{factura.fecha}</td>
              <td>
                <ul>
                  {factura.productos.map((producto, index) => (
                    <li key={index}>
                      <p>Cantidad: {producto.cantidad}</p>
                      <p>Valor Unitario: {producto.valorUnitario}</p>
                      <p>Valor total: {producto.valorUnitario*producto.cantidad}</p>
                      <p>Equipo: {producto.equipo}</p>
                      <p>Marca: {producto.marca}</p>
                      <p>Modelo: {producto.modelo}</p>
                      <p>Serie: {producto.serie}</p>
                      <p>Información Adicional: {producto.infoAdicional}</p>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="firma-container">
        <div className="firma-cliente">
          <h3>Firma Cliente</h3>
          <SignatureCanvas
            ref={clienteSignatureRef}
            canvasProps={{
              className: 'signature-canvas',
            }}
          />
        </div>
      </div>
      <button className="btn-guardar" onClick={guardarFirmaCliente}>
        Guardar Firma Cliente
      </button>
    </div>
    
  );
}

export {Formulario1};


