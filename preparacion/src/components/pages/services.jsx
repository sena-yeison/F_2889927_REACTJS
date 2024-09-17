import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import { GetAllFetch } from "../../hooks/useFetchGet";


const Services = () => {

  const { dataApi, loading } = GetAllFetch('https://rickandmortyapi.com/api/character/');

  return (
    <>
      {loading && <p>Cargando...</p>}
      <div className="containerCard" >
        <h1 className="m-3">Servicios</h1>

        {dataApi && dataApi.map((element, index) => (
          <div className="card col-12" key={index}>
            <div className="card-header">
              <img src={element.image} className="img-fluid" alt="" />
            </div>
            <div className="card-body">
              <small>Nombre:</small>
              <p>{element.name}</p>
              <small>Especie:</small>
              <p>{element.species}</p>
              <small>Genero:</small>
              <p>{element.gender}</p>
            </div>
          </div>
        ))}

      </div>
    </>
  );
};

export default Services;