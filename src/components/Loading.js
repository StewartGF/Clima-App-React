import React from "react";

export default function Loading() {
  return (
    <div className="loading">
      <div className="centered-content">
        <div className="container-clima row">
          <div>
            <p>Cargando...</p>
          </div>
          <img
            alt="cargando"
            src="imagenes/DoubleRing.svg"
            style={{ width: "30%", height: "30%" }}
          />
        </div>
      </div>
    </div>
  );
}
