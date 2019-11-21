import React, { useState } from "react";

export default function Header({ datosBusqueda }) {
  //search es el state para realizar la consulta en la API
  const [search, setSearch] = useState({
    ciudad: "",
    pais: ""
  });

  //maneja el evento para la búsqueda
  const handleChange = evento => {
    setSearch({
      ...search, //spread notation para guardar el valor anterior
      [evento.target.name]: evento.target.value
    });
  };

  const consultaClima = evento => {
    evento.preventDefault();
    //envío los datos de busqueda al App component, para realizar la busqueda por la API
    datosBusqueda(search);
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light d-flex justify-content-center">
        <a href="/Clima-App-React/" className="navbar-brand  ">
          <i className="fas fa-temperature-high fa-lg"></i>
        </a>

        <form className="form-inline" onSubmit={consultaClima}>
          <input
            required
            className="form-control mr-sm-2 input-lg glowing-border"
            type="search"
            placeholder="Ciudad"
            aria-label="Search"
            name="ciudad"
            onChange={handleChange}
          />
          <select
            className="form-control mr-sm-2 input-lg glowing-border"
            name="pais"
            required
            onChange={handleChange}
          >
            <option hidden value="">
              Selecciona un país
            </option>
            <option value="CL">Chile</option>
            <option value="AR">Argentina</option>
            <option value="MX">México</option>
            <option value="US">Estados Unidos</option>
            <option value="ES">España</option>
          </select>
          <button
            className="btn  my-2 my-sm-0 input-lg botonBuscar hovered"
            type="submit"
          >
            Buscar
          </button>
        </form>
      </nav>
    </div>
  );
}
