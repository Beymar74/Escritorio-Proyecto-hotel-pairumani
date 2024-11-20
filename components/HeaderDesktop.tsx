import React from "react";
import Image from "next/image";
import "./HeaderDesktop.css";
const HeaderDesktop = () => {
  return (
    <div className="headersini">
      <div className="logini">
        <Image
          className="pairumani"
          src="/246351189_414381946816472_343474644992537752_n 1.png"
          width={500}
          height={500}
          alt={"Logo Hotel Pairumani"}
        />
        <p className="hotelsini">Hotel Pairumani</p>
      </div>
      <div className="cargo">
        <h2 className="cargotext">ADMINISTRACIÓN</h2>
      </div>
      <div className="sesion">
        <div className="nombreycargo">
          <div className="cajacargo">
            <p className="nombresini">Beymar Mamani</p>
            <p className="cargosini">Admin</p>
          </div>
        </div>
        <div className="fotini">
          <Image
            className="usuarini"
            src="/image 23.png"
            width={500}
            height={500}
            alt={"Foto Usuario"}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderDesktop;
