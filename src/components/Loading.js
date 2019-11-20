import React from "react";

export default function Loading() {
  return (
    <div className="loading">
      <p>Cargando...</p>
      <img
        alt="cargando"
        src="imagenes/DoubleRing.svg"
        style={{ width: "10%", height: "10%" }}
      />
    </div>
  );
}
