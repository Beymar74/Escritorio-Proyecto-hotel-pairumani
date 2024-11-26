import React from "react";
import "./Dashboard.css";
import Image from "next/image";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="apartado">
        <p className="titapartado">Reporte de Platos</p>
        <div className="busqueda">
          <div className="cajabusqueda">
            <Image
              className="lupita"
              src="/Vector - 0.png"
              width={500}
              height={500}
              alt={"Logo Hotel Pairumani"}
            />
            <p className="textocaja">Buscar Fecha</p>
          </div>
        </div>
      </div>
      <div className="ContenidoDashboard"></div>
    </div>
  );
};

export default Dashboard;
