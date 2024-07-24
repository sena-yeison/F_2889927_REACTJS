import React, { useState } from "react";

const ListSuppliers = ({ listSuppliers = [], isActive }) => {

  const [active, setActive] = useState(isActive);

  const handleIsActive = () => {
    setActive(!active);
  };

  const classNameBtn = active
    ? "btn btn-success btn-sm"
    : "btn btn-danger btn-sm";

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h2>Proveedores</h2>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <th>item</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Estado</th>
              <th>Acciones</th>
            </thead>
            <tbody>
              {listSuppliers.map((supplier, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{supplier.name}</td>
                  <td>{supplier.lastname}</td>
                  <td>
                    <button
                      onClick={handleIsActive}
                      className={classNameBtn}
                    >
                      {active ? "Activo" : "Inactivo"}
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-info btn-sm">Ver</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListSuppliers;
