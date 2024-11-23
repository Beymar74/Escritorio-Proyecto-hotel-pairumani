import React from "react";
import "./Opciones.css";
import Image from "next/image";
import Link from "next/link";
const Opcionesdash = () => {
  return (
    <div className="opcioninis">
      <Link href={"/reservaciones"} passHref>
        <button type="submit" className="cajaopcionalter">
          <div className="subcajaopcion">
            <div className="imagen">
              <Image
                className="imagenopcion"
                src="/Depth 7, Frame 0.png"
                width={500}
                height={500}
                alt={"Logo Hotel Pairumani"}
              />
            </div>
            <div className="texto">
              <p className="textini">Reservaciones</p>
            </div>
          </div>
        </button>
      </Link>

      <Link href={"/dashboard"} passHref>
        <button type="submit" className="cajaopcion">
          <div className="subcajaopcion">
            <div className="imagen">
              <Image
                className="imagenopcion"
                src="/Category.png"
                width={500}
                height={500}
                alt={"Logo Hotel Pairumani"}
              />
            </div>
            <div className="texto">
              <p className="textini">Dashboard</p>
            </div>
          </div>
        </button>
      </Link>

      <Link href={"/estadoorden"} passHref>
        <button type="submit" className="cajaopcionalter">
          <div className="subcajaopcion">
            <div className="imagen">
              <Image
                className="estadoorden"
                src="/image 37.png"
                width={500}
                height={500}
                alt={"Logo Hotel Pairumani"}
              />
            </div>
            <div className="texto">
              <p className="textini">Estado de Órdenes</p>
            </div>
          </div>
        </button>
      </Link>

      <Link href={"/notificaciones"} passHref>
        <button type="submit" className="cajaopcionalter">
          <div className="subcajaopcion">
            <div className="imagen">
              <Image
                className="imagenopcion"
                src="/campanita.png"
                width={500}
                height={500}
                alt={"Logo Hotel Pairumani"}
              />
            </div>
            <div className="texto">
              <p className="textini">Notificaciones</p>
            </div>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default Opcionesdash;
