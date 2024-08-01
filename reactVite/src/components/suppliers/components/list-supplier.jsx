import React, { useState } from "react";

const ListSuppliers = ({ listSuppliers = [] }) => {

    const [active, setActive] = useState(true);

    function handle(i){
        let status = listSuppliers[i].active = !listSuppliers[i].active
        setActive(status);
    }
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
                                        <button onClick={() => handle(i)} className={supplier.active? "btn btn-success btn-sm": "btn btn-danger btn-sm"}>
                                            {supplier.active ? "Activo" : "Inactivo"}
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn-info btn-sm"><i className="fa-solid fa-user"></i></button>
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
