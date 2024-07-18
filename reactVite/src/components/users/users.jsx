// import React from 'react';
import '../../App.css'
import Suscriptores from './FollowUsers/suscriptores';



const Users = ()=>{

    let dataUser = {
        img:"https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_640.png",
        name:"Pedro Miguel",
        lastname:"Betancourt Uribe",
        location:"Medellin, Colombia",
        email:"pedro.mibuel@sena.edu.co",
        phone:"3105556662",
    }

    return (
        <div className='tarjeta'>
            <div className="imagenUsers">
                <img src={dataUser.img} alt="" />
            </div>
            <div className="informacion">
                <h2>{dataUser.name}</h2>
                <ol>
                    <li>{dataUser.lastname}</li>
                    <li>{dataUser.location}</li>
                    <li>{dataUser.email}</li>
                    <li>{dataUser.phone}</li>
                </ol>
            </div>

            <Suscriptores>
                Hola
            </Suscriptores>

           
        </div>
    )
}


export default Users;