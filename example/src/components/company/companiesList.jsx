import React from "react";

function CompaniesList ({companies}){
    return(
        <>
        <h2>Lista de Empresas</h2>
        <ul>
            {companies.map((company, index) =>(
                <li key={index}>
                    {company.name} {company.address}
                </li>
            ))}
        </ul>
        </>
    )
}
export default CompaniesList;