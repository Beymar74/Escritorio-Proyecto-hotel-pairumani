import React from "react";
import "./TarjetaPedido.css";
import Image from "next/image";

const TarjetaPedido = () => {
  return (
    <div className="cajatarjeta">
      <div className="tarjeta">
        <div className="numeroDeOrden">
          <div className="cajatexto">
            <p className="numor">Orden #1</p>
            <p className="fecha">05 Feb 2024, 08:00 AM</p>
          </div>
          <Image
            className="fotouser"
            src="/Usuario.png"
            width={500}
            height={500}
            alt={"FotoUsuario"}
          />
        </div>

        <div className="pedidos">
          <div className="cajapedido">
            <Image
              className="fotoplatillo"
              src="/Desayuno.png"
              width={500}
              height={500}
              alt={"Desayuno.png"}
            />
            <div className="cajatextopedido">
              <p className="nombreplatillo">Desayuno Americano</p>
              <div className="datosplatillo">
                <p className="precioplatillo">Bs. 50</p>
                <p className="cantidadplatillo">Cant: 1</p>
              </div>
            </div>
          </div>
          <div className="lineaseparacion"></div>
          <div className="cajapedido">
            <Image
              className="fotoplatillo"
              src="/Desayuno.png"
              width={500}
              height={500}
              alt={"Desayuno.png"}
            />
            <div className="cajatextopedido">
              <p className="nombreplatillo">Desayuno Americano</p>
              <div className="datosplatillo">
                <p className="precioplatillo">Bs. 50</p>
                <p className="cantidadplatillo">Cant: 1</p>
              </div>
            </div>
          </div>
          <div className="lineaseparacion"></div>
        </div>

        <div className="verPedido">
          <p className="cantidadsini">X2 Items</p>
          <div className="botonver">
            <p className="textoboton">Ver</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarjetaPedido;
