"use client"
import React, { useEffect, useState } from "react";
import "./Estadoorden.css";
import Opcionesestado from './Opcionesestado'
import Tarjetaplatillo from "./Tarjetaplatillo";

type PedidoType = {
  id: string;
  username: string;
  nhabitacionOpersonas: string;
  estado: "enPreparacion" | "listo" | "entregado";
  lugar: string;
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


const MAX_ITEMS_PER_BLOCK = 10;


const Estadoorden: React.FC = () => {
  const [pedidos, setPedidos] = useState<PedidosState>({
    enPreparacion: [],
    listo: [],
    entregado: [],
  });

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await fetch("https://673629d5aafa2ef2222fb0a8.mockapi.io/estado");
        if (!response.ok) throw new Error("Error al obtener los datos de la API");

        const data: PedidoType[] = await response.json();

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

  const movePedido = (id: string, currentEstado: keyof PedidosState) => {
    setPedidos((prev) => {
      const newState = {
        enPreparacion: [...prev.enPreparacion],
        listo: [...prev.listo],
        entregado: [...prev.entregado],
      };

      const pedidoIndex = newState[currentEstado].findIndex((pedido) => pedido.id === id);
      if (pedidoIndex === -1) return prev;

      const [pedidoToMove] = newState[currentEstado].splice(pedidoIndex, 1);

      if (currentEstado === "enPreparacion" && newState.listo.length < MAX_ITEMS_PER_BLOCK) {
        newState.listo.push({ ...pedidoToMove, estado: "listo" });
      } else if (currentEstado === "listo" && newState.entregado.length < MAX_ITEMS_PER_BLOCK) {
        newState.entregado.push({ ...pedidoToMove, estado: "entregado" });
      } else {
        alert("¡El bloque está lleno! No se pueden agregar más pedidos.");
        return prev; // No hacemos cambios si el bloque está lleno
      }

      return newState;
    });
  };

  const calculateProgress = (block: keyof PedidosState) => {
    return Math.min((pedidos[block].length / MAX_ITEMS_PER_BLOCK) * 100, 100);
  };

  return (
    <div className="estado">
      <div className="apartado">
        <p className="titapartado">Estado de Órdenes</p>
      </div>
      <div className="flex">
      

      <div className="movil">
        {/* En Preparación */}
        <div className="faseestado">
          <p className="textofase">En Preparación</p>
          <div className="barraProgreso">
            <div
              className="progreso"
              style={{ width: `${calculateProgress("enPreparacion")}%` }}
            ></div>
          </div>
          <div className="contenedorDeTarjetas">
            {pedidos.enPreparacion.map((pedido) => (
              <Tarjetaplatillo key={pedido.id} pedido={pedido} movePedido={movePedido} />
            ))}
          </div>
        </div>

        {/* Listo */}
        <div className="faseestado">
          <p className="textofase">Listo </p>
          <div className="barraProgreso">
            <div
              className="progreso"
              style={{ width: `${calculateProgress("listo")}%` }}
            ></div>
          </div>
          <div className="contenedorDeTarjetas">
            {pedidos.listo.map((pedido) => (
              <Tarjetaplatillo key={pedido.id} pedido={pedido} movePedido={movePedido} />
            ))}
          </div>
        </div>

        {/* Entregado */}
        <div className="faseestado">
          <p className="textofase">Entregado </p>
          <div className="barraProgreso">
            <div
              className="progreso"
              style={{ width: `${calculateProgress("entregado")}%` }}
            ></div>
          </div>
          <div className="contenedorDeTarjetas">
            {pedidos.entregado.map((pedido) => (
              <Tarjetaplatillo key={pedido.id} pedido={pedido} movePedido={movePedido} />
            ))}
          </div>
        </div>
      </div>
      </div>

    </div>
  );
};

export default Estadoorden;
