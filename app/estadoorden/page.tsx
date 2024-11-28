import React from "react";
import HeaderDesktop from "@/components/HeaderDesktop"; // Asegúrate de que la ruta sea correcta
import Estadoorden from "@/components/Estadoorden"; // Cambiado a Estadoorden para reflejar el componente actualizado

const Page = () => {
  return (
    <div>
      <HeaderDesktop /> {/* Encabezado principal */}
      <Estadoorden /> {/* Componente principal que gestiona las órdenes */}
    </div>
  );
};

export default Page;
