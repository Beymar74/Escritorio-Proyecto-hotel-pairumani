"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./HeaderDesktop.css";
import { useAuthStore } from "@/app/store";

const HeaderDesktop = () => {
  const pathname = usePathname();
  const { nameSelected, avatarSelected } = useAuthStore();

  const name = nameSelected || "Invitado";
  const avatar = avatarSelected || "/default-avatar.png";

  return (
    <div className="headersini">
      <div className="logini">
        <Image
          className="pairumani"
          src="/246351189_414381946816472_343474644992537752_n 1.png"
          width={500}
          height={500}
          alt={"Logo Hotel Pairumani"}
        />
        <p className="hotelsini">Hotel Pairumani</p>
      </div>
      <div className="cargo">
        <h2 className="cargotext">ADMINISTRACIÓN</h2>
      </div>
      <div className="sesion">
        <div className="nombreycargo">
          <div className="cajacargo">
            <p className="nombresini">{name}</p>
            <p className="cargosini">Admin</p>
          </div>
        </div>
        <div className="fotini">
          <Image
            className="usuarini"
            src={avatar}
            width={500}
            height={500}
            alt={"Foto Usuario"}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderDesktop;
