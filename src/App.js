import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Clima from "./components/Clima";
import Landing from "./components/Landing";
import Loading from "./components/Loading";

function App() {
  const [informacion, setInformacion] = useState({});
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("");
  const [landing, setLanding] = useState(true);
  const [loading, setLoading] = useState(false);

  //hook que reemplaza al componentDidMount y el didUpdate
  useEffect(() => {
    if (ciudad === "") return;
    setLoading(true);
    const consultaAPI = async () => {
      const APIKey = "fc8bee85b1a5306e5862da9a91f95dfc";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${APIKey}`;
      const respuesta = await fetch(url);
      const data = await respuesta.json();
      setInformacion(data);
      setLoading(false);
    };

    consultaAPI();
  }, [ciudad, pais]);

  const datosBusqueda = datos => {
    if (datos.ciudad === "" || datos.pais === "") {
      setLanding(true);
      return;
    }
    //seteo el State de este componente con la informacion que viene del header
    setCiudad(datos.ciudad);
    setPais(datos.pais);
    setLanding(false);
  };

  let componente;
  if (landing) {
    componente = <Landing mensaje="Bienvenido! ✌"></Landing>;
  } else if (informacion.cod === "404") {
    componente = (
      <Landing mensaje="El lugar que estás buscando no existe"></Landing>
    );
  } else if (informacion.cod === "429") {
    componente = (
      <Landing mensaje="Parece que mi APIKey expiró, contáctame!"></Landing>
    );
  } else {
    componente = <Clima informacion={informacion}></Clima>;
  }

  return (
    <>
      <div className="divHeader">
        <Header datosBusqueda={datosBusqueda}></Header>
      </div>
      {loading && <Loading></Loading>}
      {!loading && <div className="divContainer">{componente}</div>}
    </>
  );
}

export default App;
