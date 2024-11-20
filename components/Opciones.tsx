import React from "react";
import "./Opciones.css";
import Image from "next/image";

const Opciones = () => {
  return (
    <div className="opcioninis">
      <div className="cajaopcion">
        <div className="subcajaopcion">
          <div className="imagen">
            <Image
              className="imagenopcion"
              src="/Depth 7, Frame 0.png"
              width={500}
              height={500}
              alt={"Logo Hotel Pairumani"}
            />
          </div>
          <div className="texto">
            <p className="textini">Reservaciones</p>
          </div>
        </div>
      </div>

      <div className="cajaopcion">
        <div className="subcajaopcion">
          <div className="imagen">
            <Image
              className="imagenopcion"
              src="/Category.png"
              width={500}
              height={500}
              alt={"Logo Hotel Pairumani"}
            />
          </div>
          <div className="texto">
            <p className="textini">Dashboard</p>
          </div>
        </div>
      </div>

      <div className="cajaopcion">
        <div className="subcajaopcion">
          <div className="imagen">
            <Image
              className="imagenopcion"
              src="/campanita.png"
              width={500}
              height={500}
              alt={"Logo Hotel Pairumani"}
            />
          </div>
          <div className="texto">
            <p className="textini">Notificaciones</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opciones;
