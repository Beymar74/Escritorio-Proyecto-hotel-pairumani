import React from "react";
import Opcionesdash from "./Opcionesdash";
import Dashboard from "./Dashboard";
import "./Content.css";

const ContenidoDashboard = () => {
  return (
    <div className='contenido'>
      <Opcionesdash />
      <Dashboard />
    </div>
  );
};

export default ContenidoDashboard;