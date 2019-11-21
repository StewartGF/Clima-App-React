import React from "react";

export default function Clima({ informacion }) {
  //Saco la informacion relevante desde "informacion"
  const { name, main, weather } = informacion;

  //Convierto la info en Celsius
  const kelvin = 273.15;
  if (!name) return null;

  return (
    <div className="centered-content">
      <div className="container-clima row">
        <div className="LeftContent col-md-8 ">
          <h1>{name}</h1>
          <p className="tempText">Temperatura máxima</p>
          <p className="tempValue"> {parseInt(main.temp_max - kelvin, 10)} °</p>
          <p className="tempText">Temperatura mínima</p>
          <p className="tempValue"> {parseInt(main.temp_min - kelvin, 10)} °</p>
        </div>
        <div className="RightContent col-md-4 ">
          <h1>{parseInt(main.temp - kelvin, 10)} °</h1>
          <hr></hr>
          <p>Temperatura Actual</p>
        </div>
      </div>
    </div>
  );
}
