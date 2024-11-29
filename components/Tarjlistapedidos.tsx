import React from "react";
import Listadepedidos from "./Listadepedidos";
import Image from "next/image";
import "./Tarjlistapedidos.css";

interface Plato {
  titulo: string;
  plaimagen: string;
  extra: string;
  cantidad: number;
}

interface Orden {
  orden: number;
  fecha: string;
  hora: string;
  lugar: string;
  total: number;
  estadoPago: string;
  nhabitacionOpersonas?: number | string;
  platos: Plato[];
}

interface User {
  username: string;
  email: string;
  imagenPerfil: string;
}

const Tarjlistapedidos: React.FC<{ order: Orden; user: User }> = ({ order, user }) => {
  const { orden, fecha, hora, lugar, total, platos, nhabitacionOpersonas } = order;

  const handlePost = async () => {
    const postData = {
      username: user.username,
      correo: user.email,
      orden,
      lugar,
      fecha,
      hora,
      total,
      estado:"enPreparacion",
      id: orden.toString(),
      imagenperfil: user.imagenPerfil,
      nhabitacionOpersonas: nhabitacionOpersonas,
      ordenpla: platos,
    };

    try {
      const response = await fetch("https://673629d5aafa2ef2222fb0a8.mockapi.io/estado", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        alert(`Orden #${orden} se está preparando.`);
      } else {
        alert("Error al enviar la orden.");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("No se pudo enviar la orden.");
    }
  };

  return (
    <div className="backTarjetalista">
      <div className="divlistaplatos">
        <div className="contenedornumerodeordensini">
          <p className="textininumeroorden">Orden #{orden}</p>
        </div>
        <div className="contenedorlistapedidos">
          {platos.map((plato, index) => (
            <Listadepedidos key={index} plato={plato} />
          ))}
        </div>
      </div>

      <div className="divdatosdelpedido">
          <p className="fecha">{`${fecha}, ${hora}`}</p>
          <p className="textoverde">Entrega: {lugar}</p>
          <p className="textoverde">#Número: {nhabitacionOpersonas}</p>
          <p className="textoverde">Total de la orden: Bs. {total}</p>
          

        <div className="botonchecksito" onClick={handlePost}>
          <div className="rellenobotonsinii">
            <Image
              className="imagenchecksini"
              src="/checksini.png"
              width={30}
              height={30}
              alt="Check"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tarjlistapedidos;