"use client";

import "./LoginContent.css";
import { useAuthStore } from "@/app/store";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const LoginContent = () => {
  const { usuarios, fetchUsuarios } = useAuthStore();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { guardarName, guardarAvatar } = useAuthStore();

  const router = useRouter();

  useEffect(() => {
    fetchUsuarios().then(() => {
      console.log("Usuarios cargados:", usuarios);
    });
  }, [fetchUsuarios]);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const logear = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.userName === username
    );

    if (usuarioEncontrado && usuarioEncontrado.password === password) {
      guardarName(usuarioEncontrado.name);
      guardarAvatar(usuarioEncontrado.avatar); 
      router.push("/reservaciones");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

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
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={handleUsernameChange}
        />
        <h1 className="tex">Contraseña</h1>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={handlePasswordChange}
        />
        <div className="botoniniciars">
          <button type="submit" className="rellenobotonini" onClick={logear}>
            <p className="textoingresar">Ingresar</p>
          </button>
        </div>
      </form>
      <div className="olvidarcontra">
        <p className="textolvidar">¿Olvidó su contraseña?</p>
      </div>
    </div>
  );
};

export default LoginContent;
