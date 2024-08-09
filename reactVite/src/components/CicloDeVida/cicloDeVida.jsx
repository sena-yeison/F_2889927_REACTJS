import React, { useEffect, useState } from "react";

const ComponenteCicloDeVida = ()=>{

    const [loading, setLoading] = useState("");

    useEffect(() => {
     setLoading("Cargando...")
     console.log("Primera carga")
    }, [loading])
    
    useEffect(() => {
        console.log("Segunda carga")
        return () => {
            console.log("Adios...")
          }
        
    }, [loading])
    


    const handleStopLoading =()=>{
     setLoading("")
    }

    return(
        <>
        
        <h1>Hola Mundo</h1>
        <button onClick={handleStopLoading}>Frenar Loading</button>
        <p>{loading}</p>
        
        
        </>
    )
}



export default ComponenteCicloDeVida;