import React from "react";
import "./Estadoorden.css";
import Tarjetaenprepa from "./Tarjetaenprepa";
import Barraprogreso from "./Barraprogreso";
import Tarjetalista from "./Tarjetalista";
import Tarjetaentregada from "./Tarjetaentregada";
import Barprolisto from "./Barprolisto";
import Barproentre from "./Barproentre";

const Estadoorden = () => {
  return (
    <div className="estado">
      <div className="apartado">
        <p className="titapartado">Estado de Ordenes</p>
      </div>

      <div className="apartado">
        <div className="inmovil">
          <div className="contenedorbotones">
            <div className="botoncinisini">
              <p className="textobotonsini">Desayuno</p>
            </div>
            <div className="botoncinisini">
              <p className="textobotonsini">Almuerzo</p>
            </div>
            <div className="botoncinisini">
              <p className="textobotonsini">Cena</p>
            </div>
          </div>
        </div>
      </div>

      <div className="movil">
        <div className="faseestado">
          <p className="textofase">En Preparacion</p>
        </div>
        <div className="contenedorDeTarjetas">
          <div className="contenedorDeTarjetas">
            <Tarjetaenprepa />
            <Tarjetaenprepa />
            <Tarjetaenprepa />
            <Tarjetaenprepa />
            <Tarjetaenprepa />
          </div>
        </div>
        <Barraprogreso />

        <div className="faseestado">
          <p className="textofase">Listo</p>
        </div>
        <div className="contenedorDeTarjetas">
          <Tarjetalista />
          <Tarjetalista />
          <Tarjetalista />
          <Tarjetalista />
        </div>
        <Barprolisto />

        <div className="faseestado">
          <p className="textofase">Entregado</p>
        </div>
        <div className="contenedorDeTarjetas">
          <Tarjetaentregada />
          <Tarjetaentregada />
        </div>
        <Barproentre />
      </div>
    </div>
  );
};

export default Estadoorden;
