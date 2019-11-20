import React from "react";
import Typical from "react-typical";

export default function Landing({ mensaje }) {
  return (
    <div className="centered-content animated bounce">
      <div className="container-clima ">
        <div className="mensajeLanding">
          <p>{mensaje}</p>
        </div>
        <div className="react-typical">
          <p>
            Puedes buscar el clima en {""}
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "Santiago - Chile 📌 ",
                1000,
                "Cancún - México 🚢 ",
                1000,
                "Madrid - España 🌎 ",
                1000,
                "New York - Estados Unidos 🚖 ",
                1000,
                "Mendoza - Argentina 🚠 ",
                1000,
                "Acapulco - México 🚤 ",
                1000,
                "Chicago - Estados Unidos 🚔 ",
                1000,
                "Seattle - Estados Unidos 🌅 ",
                1000
              ]}
            />
          </p>
          <p className="bottomText">Y muchos más 😁 !</p>
        </div>
      </div>
    </div>
  );
}
