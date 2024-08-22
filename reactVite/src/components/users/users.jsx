// import React from 'react';
import { useContext } from "react";
import "../../App.css";
import Suscriptores from "./FollowUsers/suscriptores";
import { useToggleUserContext, useUserContext } from "../context/Providers";
import { useToggleUsersContext, useUsersContext } from "../context/contextProvider";

const Users = () => {
  let dataUser = {
    img: "https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_640.png",
    name: "Pedro Miguel",
    lastname: "Betancourt Uribe",
    location: "Medellin, Colombia",
    email: "pedro.mibuel@sena.edu.co",
    phone: "3105556662",
    username: "barrios_16"
  };

  const validar = useToggleUsersContext()
  const users = useUsersContext();
  
  return (
    <>
    <button onClick={validar}>Validar usuario</button>
    <div className="tarjeta">





      <p> Bienvenid@ </p>
      <div className="imagenUsers">
        <img src={dataUser.img} alt="" />
      </div>
      <div className="informacion">
        <h2>{users ? (users.nombre) : ''}</h2>
        <ol>
          <li>{dataUser.lastname}</li>
          <li>{dataUser.location}</li>
          <li>{dataUser.email}</li>
          <li>{dataUser.phone}</li>
        </ol>
      </div>

      <Suscriptores
        nombre={dataUser.name}
        username={dataUser.username}
        avatar={dataUser.img}
      />
    </div>
    </>
  );
};

export default Users;
