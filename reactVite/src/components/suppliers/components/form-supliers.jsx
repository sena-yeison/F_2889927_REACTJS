import React, { useState } from "react";

const FormSuppliers = ({handleSupplier}) => {

    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const active = true;

    const onAddSupplier = (e)=>{
        e.preventDefault();
        handleSupplier({name, lastname, active}); 
        setName("");
        setLastName("");
    }


    console.log("Componente del Formulario ")

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h2>Registro de Proveedor</h2>
        </div>
        <div className="card-body">
          <form  onSubmit={onAddSupplier}>
            <div className="row">
              <div className="m-2 col-12">
                <label htmlFor="" className="control-label">
                  Nombre
                </label>
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="input value={name}-control" />
              </div>
              <div className="m-2 col-12">
                <label htmlFor="" className="control-label">
                  Apellidos
                </label>
                <input value={lastname} onChange={(e)=>setLastName(e.target.value)} type="text" className="input-control" />
              </div>
            </div>

            <button type="submit" className="btn btn-primary col-12 br-3">GUARDAR</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormSuppliers;
