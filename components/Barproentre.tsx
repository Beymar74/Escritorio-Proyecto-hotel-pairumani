import React from "react";
import "./Barraprogreso.css";

const Barproentre = () => {
  return (
    <div className="barritadeprogreso">
      <div className="detprog">
        <p className="etapabar">2/2</p>
        <p className="porcentajebar">100%</p>
      </div>
      <div className="barfinish">
        <div className="barcomple"></div>
      </div>
      <div className="cantitemprep">
        <p className="textcantidad">2 items entregados</p>
      </div>
    </div>
  );
};

export default Barproentre;
