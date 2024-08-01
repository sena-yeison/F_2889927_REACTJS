import React, { useState } from "react";

function CompanyForm({ addCompany }) {
  const [name, setName] = useState("");
  const [address, setAdress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addCompany({ name, address });
    setName("");
    setAdress("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Crear Empresa</h2>
        <input
          type="text"
          placeholder="Nombre de la empresa"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Dirección de la empresa"
          value={address}
          onChange={(e) => setAdress(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default CompanyForm;
