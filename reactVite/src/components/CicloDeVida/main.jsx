import React, { useState } from "react";
import ComponenteCicloDeVida from "./cicloDeVida";


const MainCicloDeVida = () =>{

    const [view, setView] = useState(false);

    console.log("Estoy en el principal")
    
    const handleViewComponent = ()=>{
        setView(!view)
    }

    return(
    <>
    <button onClick={handleViewComponent}>Ver componente</button>
       {view ?<ComponenteCicloDeVida/> :  '' }
    </>
    )
}



export default MainCicloDeVida;