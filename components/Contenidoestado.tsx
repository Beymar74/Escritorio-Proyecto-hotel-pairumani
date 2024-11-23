import React from "react";
import Opcionesestado from "./Opcionesestado";
import "./Content.css";
import Estadoorden from "./Estadoorden";

const Contenidoestado = () => {
  return (
    <div className="contenido">
      <Opcionesestado />
      <Estadoorden />
    </div>
  );
};

export default Contenidoestado;
