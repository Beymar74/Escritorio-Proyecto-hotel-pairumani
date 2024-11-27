"use client";

import React, { useEffect, useState } from "react";
import "./Estadoorden.css";
import Tarjetaplatillo from "./Tarjetaplatillo";

type PedidoType = {
  id: string;
  username: string;
  nhabitacionOpersonas: string;
  estado: "enPreparacion" | "listo" | "entregado";
  ordenpla: {
    titulo: string;
    plaimagen: string;
    extra?: string;
    cantidad: number;
  }[];
};

type PedidosState = {
  enPreparacion: PedidoType[];
  listo: PedidoType[];
  entregado: PedidoType[];
};

const Estadoorden: React.FC = () => {
  const [pedidos, setPedidos] = useState<PedidosState>({
    enPreparacion: [],
    listo: [],
    entregado: [],
  });

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await fetch("https://673629d5aafa2ef2222fb0a8.mockapi.io/pedidocon");
        if (!response.ok) throw new Error("Error al obtener los datos de la API");

        const data: PedidoType[] = await response.json();

        // Clasificar pedidos por estado
        const enPreparacion = data.filter((pedido) => pedido.estado === "enPreparacion");
        const listo = data.filter((pedido) => pedido.estado === "listo");
        const entregado = data.filter((pedido) => pedido.estado === "entregado");

        setPedidos({ enPreparacion, listo, entregado });
      } catch (error) {
        console.error("Error al obtener los pedidos:", error);
      }
    };

    fetchPedidos();
  }, []);

  const movePedido = (id: string, currentEstado: "enPreparacion" | "listo" | "entregado") => {
    setPedidos((prev) => {
      // Encuentra el pedido que se debe mover
      let pedidoToMove: PedidoType | undefined;
      const newState: PedidosState = { ...prev };

      if (currentEstado === "enPreparacion") {
        pedidoToMove = newState.enPreparacion.find((pedido) => pedido.id === id);
        if (pedidoToMove) {
          newState.enPreparacion = newState.enPreparacion.filter((pedido) => pedido.id !== id);
          newState.listo.push({ ...pedidoToMove, estado: "listo" });
        }
      } else if (currentEstado === "listo") {
        pedidoToMove = newState.listo.find((pedido) => pedido.id === id);
        if (pedidoToMove) {
          newState.listo = newState.listo.filter((pedido) => pedido.id !== id);
          newState.entregado.push({ ...pedidoToMove, estado: "entregado" });
        }
      }

      return newState;
    });
  };

  return (
    <div className="estado">
      <div className="apartado">
        <p className="titapartado">Estado de Órdenes</p>
      </div>

      <div className="movil">
        {/* En Preparación */}
        <div className="faseestado">
          <p className="textofase">En Preparación</p>
          <div className="contenedorDeTarjetas">
            {pedidos.enPreparacion.map((pedido) => (
              <Tarjetaplatillo key={pedido.id} pedido={pedido} movePedido={movePedido} />
            ))}
          </div>
        </div>

        {/* Listo */}
        <div className="faseestado">
          <p className="textofase">Listo</p>
          <div className="contenedorDeTarjetas">
            {pedidos.listo.map((pedido) => (
              <Tarjetaplatillo key={pedido.id} pedido={pedido} movePedido={movePedido} />
            ))}
          </div>
        </div>

        {/* Entregado */}
        <div className="faseestado">
          <p className="textofase">Entregado</p>
          <div className="contenedorDeTarjetas">
            {pedidos.entregado.map((pedido) => (
              <Tarjetaplatillo key={pedido.id} pedido={pedido} movePedido={movePedido} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estadoorden;
