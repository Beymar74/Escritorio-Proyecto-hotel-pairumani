import React from "react";
import Image from "next/image";
import "./HeaderLogin.css";
const HeaderLogin = () => {
  return (
    <div>
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
      </div>
    </div>
  );
};

export default HeaderLogin;
