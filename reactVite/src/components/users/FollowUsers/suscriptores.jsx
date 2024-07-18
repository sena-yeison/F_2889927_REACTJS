import React  from "react";

const Suscriptores = ({nombreUsuario})=>{

    console.log(nombreUsuario)
    return(
        <>
            <div  className="seguidores">
                <img src="" alt="" />
                <div className='datosUsers'>
                    <h2>Yeison Barrios</h2>
                    <small>@ybarriosf</small>
                </div>
                <button>Seguir</button>
            </div>
        </>
    )
}


export default Suscriptores;