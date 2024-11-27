import React from "react";
import "./Tarjlistapedidos.css";
import Image from "next/image";
import Listadepedidos from "./Listadepedidos";

const Tarjlistapedidos = () => {
  return (
    <div className="backTarjetalista">
      <div className="divlistaplatos">
        <div className="contenedornumerodeordensini">
          <p className="textininumeroorden">Orden #1</p>
        </div>
        <div className="contenedorlistapedidos">
          <Listadepedidos />
          <Listadepedidos />
          <Listadepedidos />
          <Listadepedidos />
        </div>
      </div>

      <div className="divdatosdelpedido">
        <div className="divpaun">
          <p className="fecha">05 Feb 2024, 08:00 AM</p>
        </div>
        <div className="divpados">
          <p className="textoverde">Entrega:</p>
          <p className="textonegro">Habitacion</p>
        </div>
        <div className="divpados">
          <p className="textoverde">Nro. Personas:</p>
          <p className="textonegro">-----</p>
        </div>
        <div className="divpados">
          <p className="textoverde">Estado de pago:</p>
          <p className="textonegro">Pendiente</p>
        </div>
        <div className="divpados">
          <p className="textoverde">Total de la orden:</p>
          <p className="textonegro">Bs. 40</p>
        </div>
        <div className="botonchecksito">
          <div className="rellenobotonsinii">
            <Image
              className="imagenchecksini"
              src="/checksini.png"
              width={500}
              height={500}
              alt={"Logo Hotel Pairumani"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tarjlistapedidos;
