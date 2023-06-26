import React, {useState, useEffect, useContext} from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/resultados.css";
import { Context } from "../store/appContext";
import iconperfil from "../../img/iconperfil.png"


//ESTE COMP. SE RENDERIZA EN /RESULTADOS

const users = [{
    nombre: "Jose Rosas",
    edad: "24",
    categoria: "Oratoria",
    talento: "Orador profesional",
    direccion: "Caracas, Venezuela",
},
{
    nombre: "Jose Rosales",
    edad: "22",
    categoria: "Arte",
    talento: "Pintor",
    direccion: "Caracas, Venezuela",
},
{
    nombre: "Joan suarez",
    edad: "21",
    categoria: "Deporte",
    talento: "Futbolista",
    direccion: "Caracas, Venezuela",
}]

export const CardPersonal = (props) => {

    const params = useParams()
    console.log(params)

    const {
        store, actions
    }= useContext(Context)

    useEffect(()=>{
        actions.retornarcategoria()
    }, [])



    return (
        <div id="container-resultados" className="container">
            {users.filter(user=> user.categoria == params.categoria).map(user=> {
                return(
                    <div id="card-box-resultados" className="row">
                    <div id="profile-photo-cardbox-resultados" className="col-4">
                    <img
                    src={iconperfil}
                    className="rounded-circle rounded-2"
                    id="iconperfil"
                    alt="..."
                  />
                    </div>
                <div id="text-cardbox-resultados" className="col">
                    <h3> {user.nombre} </h3>
                    <p>{user.edad} años</p>
                    <p>{user.talento}</p>
                    <p>{user.categoria}</p>
                    <p>{user.direccion}</p>
                    <div className="d-flex justify-content-between">
                    <div>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                        <Link to="/cardpersonal">
                            <button
                                type="button"
                                id="vermas-btn-cardbox-resultados"
                                className="btn btn-primary"
                            >
                                Ver mas
                            </button>
                        </ Link>
                    </div>
                </div>
            </div>
                )
            })}
</div>
    )

}