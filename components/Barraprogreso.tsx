import React from "react";
import "./Barraprogreso.css";
const Barraprogreso = () => {
  return (
    <div className="barritadeprogreso">
      <div className="detprog">
        <p className="etapabar">1/2</p>
        <p className="porcentajebar">50%</p>
      </div>
      <div className="barprog">
        <div className="barcomple"></div>
      </div>
      <div className="cantitemprep">
        <p className="textcantidad">2 items en preparacion</p>
      </div>
    </div>
  );
};

export default Barraprogreso;
