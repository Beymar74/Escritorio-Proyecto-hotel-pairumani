"use client";

import React from "react";
import "./Tarjetaplatillo.css";

type PedidoProps = {
  pedido: {
    id: string;
    username: string;
    nhabitacionOpersonas: string;
    lugar: string;
    estado: "enPreparacion" | "listo" | "entregado";
    
    ordenpla: {
      titulo: string;
      plaimagen: string;
      cantidad: number;
    }[];
  };
  movePedido: (id: string, currentEstado: "enPreparacion" | "listo" | "entregado") => void;
};

const Tarjetaplatillo: React.FC<PedidoProps> = ({ pedido, movePedido }) => {
  const handleMove = () => {
    movePedido(pedido.id, pedido.estado);
  };

  return (
    <div className="tarjeta-platillo">
      <div className="izq">
      <div className="platillos">
        {pedido.ordenpla.map((platillo, index) => (
          <div key={index} className="platillo">
            <img src={platillo.plaimagen} alt={platillo.titulo} className="platillo-imagen" />
            <div className="platillo-detalle">
              <h4>{platillo.titulo}</h4>
              <p>Cantidad: {platillo.cantidad}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="pedido-info">
        <h3>Cliente: {pedido.username}</h3>
        <p>{pedido.lugar}: {pedido.nhabitacionOpersonas}</p>
      </div>

      </div>
      

      <button onClick={handleMove} className="actualizar-boton">
        {pedido.estado === "enPreparacion"
          ? "Mover a Listo"
          : pedido.estado === "listo"
          ? "Mover a Entregado"
          : "Entregado"}
      </button>
    </div>
  );
};

export default Tarjetaplatillo;
