

const Suscriptores = ({nombre, username, avatar, format})=>{

    return(
        <>
            <div  className="seguidores">
                <img src={avatar} alt="" />
                <div className='datosUsers'>
                    <h2>{nombre}</h2>
                    <small>@{username}</small>
                </div>
                <button>X</button>
            </div> 
        </>
    )
}


  
export default Suscriptores;