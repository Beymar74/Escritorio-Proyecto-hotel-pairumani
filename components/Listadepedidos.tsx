import React from "react";
import Image from "next/image";
import "./Listadepedidos.css";

interface Plato {
  titulo: string;
  plaimagen: string;
  extra: string;
  cantidad: number;
}

const Listadepedidos: React.FC<{ plato: Plato }> = ({ plato }) => {
  const { titulo, plaimagen, extra, cantidad } = plato;

  return (
    <div className="estilotarjetapedido">
      <div className="divimagenpedido">
        <Image
          className="imagendelplatoapediraea"
          src={plaimagen || "/default-plato.png"}
          width={56}
          height={56}
          alt={titulo}
        />
      </div>
      <div className="divdetallesdelpedido">
        <div className="divnombreplatpedi">
          <p className="textnombreplat">{titulo}</p>
        </div>
        <div className="divdetalleplato">
          <p className="textdetalleplato">Descripción: {extra}</p>
        </div>
      </div>
      <div className="divcantidadplato">
        <p className="textcantplatped">Cant: {cantidad}</p>
      </div>
    </div>
  );
};

export default Listadepedidos;