import React from "react";
import Image from "next/image";
import "./Listadepedidos.css";
const Listadepedidos = () => {
  return (
    <div className="estilotarjetapedido">
      <div className="divimagenpedido">
        <Image
          className="imagendelplatoapediraea"
          src="/2902dedc3fbe6d480f656ff806654121.png"
          width={500}
          height={500}
          alt={"Logo Hotel Pairumani"}
        />
      </div>
      <div className="divdetallesdelpedido">
        <div className="divnombreplatpedi">
          <p className="textnombreplat">Desayuno Americano</p>
        </div>
        <div className="divdetalleplato">
          <p className="textdetalleplato">Descripción:</p>
        </div>
      </div>
      <div className="divcantidadplato">
        <div className="divconttextcant">
          <p className="textcantplatped">Cant: 1</p>
        </div>
      </div>
    </div>
  );
};

export default Listadepedidos;
