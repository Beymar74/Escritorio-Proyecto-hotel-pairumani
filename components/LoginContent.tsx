import React from "react";
import "./LoginContent.css";
import Link from "next/link";
const LoginContent = () => {
  return (
    <div className="contenidologin">
      <div className="bienvenidotexto">
        <p className="textinibien">
          Bienvenido a la Administración del Hotel Pairumani{" "}
        </p>
      </div>
      <div className="ordeniniciar">
        <p className="ordentexti">Inicie sesión en su cuenta para continuar</p>
      </div>
      <form className="form1">
        <h1 className="tex">Usuario</h1>
        <input type="email" placeholder="Ingrese Usuario" />
        <h1 className="tex">Contraseña</h1>
        <input type="password" placeholder="Ingrese Contraseña" />
      </form>
      <div className="olvidarcontra">
        <p className="textolvidar">¿Olvidó su contraseña?</p>
      </div>
      <div className="botoniniciars">
        <Link href={"/pantallaInicio"} passHref>
          <button type="submit" className="rellenobotonini">
          <p className="textoingresar">Ingresar</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoginContent;
