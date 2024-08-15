import React, { useContext } from "react";
import { userContext } from "../../App";

export function Hijo() {

  const user = useContext(userContext)

  return (
    <>
      <h2>Hola</h2>
      {user ? (<p>{user.nombre}</p>) : (<p>No hay nada</p>)}
    </>
  );
}
