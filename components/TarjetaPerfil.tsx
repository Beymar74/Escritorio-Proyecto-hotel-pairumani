import React from "react";
import "./TarjetaPerfil.css";
import Image from "next/image";
import Tarjlistapedidos from "./Tarjlistapedidos";

const TarjetaPerfil = () => {
  return (
    <div className="backTarjeta">
      <div className="Perfilini">
        <p className="textoperfilini">Perfil</p>
      </div>

      <div className="infodeperfil">
        <div className="imagendeperfil">
          <Image
            className="personarandom"
            src="/PersonaRandom2.png"
            width={500}
            height={500}
            alt={"Logo Hotel Pairumani"}
          />
        </div>
        <div className="nombredeperperfil">
          <p className="nombredepersoran">Naty Tacachira</p>
        </div>
        <div className="barrabusqueda">
          <div className="contenedorlupita">
            <Image
              className="imalupita"
              src="/Vector - 0.png"
              width={500}
              height={500}
              alt={"Logo Hotel Pairumani"}
            />
          </div>
          <p className="textobusqueda">Buscar Fecha</p>
        </div>
      </div>

      <div className="continfesta">
        <div className="contimaesta">
          <Image
            className="imallamada"
            src="/llamada.png"
            width={500}
            height={500}
            alt={"Logo Hotel Pairumani"}
          />
        </div>
        <div className="mediocontacto">
          <p className="textomediocontacto">7762994</p>
        </div>
        <div className="conthabitacion">
          <p className="tipohabitacion">Habitación</p>
          <p className="numerohabitacion">Nro.Habitación</p>
        </div>
      </div>

      <div className="continfesta">
        <div className="contimaesta">
          <Image
            className="imallamada"
            src="/correo.png"
            width={500}
            height={500}
            alt={"Logo Hotel Pairumani"}
          />
        </div>
        <div className="mediocontacto">
          <p className="textomediocontacto">natytach@gmail.com</p>
        </div>
        <div className="conthabitacion">
          <p className="tiptiphab">Suite</p>
          <p className="numnumhab">6</p>
        </div>
      </div>
      <div className="Perfilini">
        <p className="textoperfilini">Ordenes</p>
      </div>
      <div className="contenedortarjetasdepedido">
        <Tarjlistapedidos />
        <Tarjlistapedidos />
        <Tarjlistapedidos />
        <Tarjlistapedidos />
      </div>
    </div>
  );
};

export default TarjetaPerfil;
