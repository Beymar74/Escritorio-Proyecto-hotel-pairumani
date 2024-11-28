import React from "react";
import HeaderDesktop from "@/components/HeaderDesktop"; // Asegúrate de que la ruta sea correcta
import Estadoorden from "@/components/Estadoorden"; // Cambiado a Estadoorden para reflejar el componente actualizado
import Finestadoorden from "@/components/Finestadoorden";

const Page = () => {
  return (
    <div>
      <HeaderDesktop /> {/* Encabezado principal */}
       <Finestadoorden/>{/* Componente principal que gestiona las órdenes */}
    </div>
  );
};

export default Page;
