import React from "react";
import "./Tarjetaenprepa.css";
import Image from "next/image";
const Tarjetaenprepa = () => {
  return (
    <div className="tamtarj">
      <div className="detalletarjeta">
        <div className="imgtarjeta">
          <Image
            className="imagenplatotarj"
            src="/2902dedc3fbe6d480f656ff806654121.png"
            width={500}
            height={500}
            alt={"Plato tarjeta"}
          />
        </div>

        <div className="infotarjeta">
          <div className="nombreplatotarj">
            <p className="textoplatar">Desayuno Americano</p>
          </div>
          <div className="clientetarj">
            <p className="textodetcli">Habitación 6 | Naty Tacachira</p>
          </div>
        </div>
      </div>
      <div className="botonsigfas">
        <p className="textbuttar">Marcar como listo</p>
      </div>
    </div>
  );
};

export default Tarjetaenprepa;
