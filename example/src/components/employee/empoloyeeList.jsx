import React from "react";

function EmployeesList({employees}){

    return(
        <>
        <h2>Lista de empleados</h2>
        <ul>
            {employees.map((employee, index) =>(
                <li key={index}>
                    {employee.name} {employee.position} {employee.company}
                </li>
            ))}
        </ul>
        </>
    )
}

export default EmployeesList;