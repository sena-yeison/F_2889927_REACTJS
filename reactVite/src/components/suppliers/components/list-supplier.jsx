import React from "react";


const ListSuppliers = ()=>{

    return(
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
                        <tr>
                            <td>1</td>
                            <td>Yeison Miguel</td>
                            <td>Barrios Castañeda</td>
                            <td><button className="btn btn-success btn-sm">Activo</button></td>
                            <td><button className="btn btn-info btn-sm">Ver</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    
    </>
    )
}

export default ListSuppliers;