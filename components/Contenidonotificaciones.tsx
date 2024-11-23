import React from "react";
import Opcionesnoti from "./Opcionesnoti";
import "./Content.css";
import Notificaciones from "./Notificaciones";
const Contenidonotificaciones = () => {
  return (
    <div className="contenido">
      <Opcionesnoti />
      <Notificaciones />
    </div>
  );
};

export default Contenidonotificaciones;
