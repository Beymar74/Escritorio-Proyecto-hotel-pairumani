import React from "react";
import "./Reservaciones.css";
import TarjetaPedido from "./TarjetaPedido";
import Image from "next/image";

const Reservaciones = () => {
  return (
    <div className="reservaciones">
      <div className="busquedini">
        <div className="textobusquedini">
          <p className="texttitle">Lista de Reservaciones</p>
        </div>
        <div className="busqueda">
          <div className="cajabusqueda">
            <Image
              className="lupita"
              src="/Vector - 0.png"
              width={500}
              height={500}
              alt={"Logo Hotel Pairumani"}
            />
            <p className="textocaja">Buscar Fecha</p>
          </div>
        </div>
        <div className="boton">
          <div className="botonrelleno">
            <p className="textoboton">Estado</p>
          </div>
        </div>
      </div>

      <div className="verpedidos">
        <TarjetaPedido />
        <TarjetaPedido />
        <TarjetaPedido />
        <TarjetaPedido />
        <TarjetaPedido />
      </div>
    </div>
  );
};

export default Reservaciones;
