import React, { useState } from "react";

function EmployeeFrom({ addEmployee, companies }) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee({ name, position, company });
    setName("");
    setPosition("");
    setCompany("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <h2>Crear Empleado</h2>
      <input
        type="text"
        placeholder="Nombre del empleado"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Posición del empleado"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <select
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        disabled={companies.length === 0}
      >
        <option value="">Seleccione una empresa</option>
        {companies.map((company, index) => (
          <option key={index} value={company.name}>
            {company.name}
          </option>
        ))}
      </select>
      <button type="submit" disabled={companies.length === 0}>
        Agregar Empleado
      </button>
    </form>
  );
}

export default EmployeeFrom;