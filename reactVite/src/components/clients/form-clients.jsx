import React, { useState } from "react";

const FormClient = ({onHandleCient}) => {

  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");

  const onSubmitClient = (e)=>{
    e.preventDefault();
    onHandleCient({name, lastname});
    setName("");
    setLastName("");
  }


  return (
    <div className="containerForm">
        <h2>Formulario de Registro</h2>
      <div className="formulario">
        <form action="" onSubmit={onSubmitClient}>
        <div className="form-control">
          <input type="text" placeholder="Nombre del cliente" value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className="form-control">
          <input type="text" placeholder="Apellidos del cliente" value={lastname} onChange={(e)=>setLastName(e.target.value)} />
        </div>
        <div className="form-control">
          <button type="submit">Guardar</button>
        </div>
        </form>
      </div>
      

    </div>
  );
};

export default FormClient;
