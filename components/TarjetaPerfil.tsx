"use client";

import React, { useState, useEffect } from "react";
import Tarjlistapedidos from "./Tarjlistapedidos";
import "./TarjetaPerfil.css";
import Image from "next/image";

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
  platos: Plato[];
  nhabitacionOpersonas?: number | string;
}

interface Usuario {
  username: string;
  imagenPerfil: string;
  email: string;
  habitacionNumero: string;
  habitacionTipo: string;
  orders: Orden[];
}

const TarjetaPerfil: React.FC = () => {
  const [users, setUsers] = useState<Usuario[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://673629d5aafa2ef2222fb0a8.mockapi.io/pedidocon"
      );
      const rawData = await response.json();

      const groupedData: Usuario[] = rawData.reduce((acc: Usuario[], curr: any) => {
        const existingUser = acc.find((user) => user.username === curr.username);

        if (existingUser) {
          existingUser.orders.push({
            orden: curr.orden,
            fecha: curr.fecha,
            hora: curr.hora,
            lugar: curr.lugar,
            total: curr.total,
            estadoPago: "Pendiente",
            platos: curr.ordenpla,
            nhabitacionOpersonas: curr.nhabitacionOpersonas,
          });
        } else {
          acc.push({
            username: curr.username,
            imagenPerfil: curr.imagenperfil,
            email: curr.correo,
            habitacionNumero: curr.nhabitacionOpersonas.toString(),
            habitacionTipo: curr.lugar.includes("Habitación") ? "Habitación" : "Comedor",
            orders: [
              {
                orden: curr.orden,
                fecha: curr.fecha,
                hora: curr.hora,
                lugar: curr.lugar,
                total: curr.total,
                estadoPago: "Pendiente",
                platos: curr.ordenpla,
                nhabitacionOpersonas: curr.nhabitacionOpersonas,
              },
            ],
          });
        }
        return acc;
      }, []);

      setUsers(groupedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
   
    fetchUsers();

   
    const interval = setInterval(() => {
      fetchUsers();
    }, 5000);

 
    return () => clearInterval(interval);
  }, []);

  if (!users.length) return <div>Loading...</div>;

  return (
    <div className="perfilContainer">
      <div className="Perfilini">
        <p className="textoperfilini">Perfiles</p>
      </div>

      {users.map((user) => (
        <div key={user.username} className="backTarjeta">
         
          <div className="infodeperfil">
            <div className="imagendeperfil">
              <Image
                className="personarandom"
                src={user.imagenPerfil || "/default-avatar.png"}
                width={56}
                height={56}
                alt={user.username}
              />
            </div>
            <div className="nombredeperperfil">
              <p className="nombredepersoran">{user.username}</p>
            </div>
            
          </div>

          <div className="continfesta">
            <div className="contimaesta">
              <Image
                className="imallamada"
                src="/correo.png"
                width={16}
                height={16}
                alt="Correo"
              />
            </div>
            <div className="mediocontacto">
              <p className="textomediocontacto">{user.email}</p>
            </div>
            <div className="conthabitacion">
            </div>
          </div>

         
          <div className="Perfilini">
            <p className="textoperfilini">Órdenes</p>
          </div>

          
          <div className="contenedortarjetasdepedido">
            {user.orders.map((order) => (
              <Tarjlistapedidos
                key={order.orden}
                order={order}
                user={user}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TarjetaPerfil;