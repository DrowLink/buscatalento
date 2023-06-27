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
    nombre: "Joan Suarez",
    edad: "21",
    categoria: "Deporte",
    talento: "Futbolista Amateur",
    direccion: "Caracas, Venezuela",
},
{
    nombre: "Micaela Rodriguez",
    edad: "21",
    categoria: "Deporte",
    talento: "Karateca Profesional",
    direccion: "Ciudad de Buenos Aires, Argentina",
},
{
    nombre: "Hector Caraballo",
    edad: "21",
    categoria: "Tecnologia",
    talento: "Programador Full-Stack Novato",
    direccion: "Ciudad de Buenos Aires, Argentina",
},
{
    nombre: "Flor Fernandez",
    edad: "27",
    categoria: "Danza",
    talento: "Bailarina Profesional",
    direccion: "Valencia, Venezuela",
},
{
    nombre: "Sarahy Rivas",
    edad: "25",
    categoria: "Fotografia",
    talento: "Fotografa amateur",
    direccion: "Merida, Venezuela", 
},
{
    nombre: "Samuel Carmona",
    edad: "27",
    categoria: "Deporte",
    talento: "Nadador amateur",
    direccion: "Caracas, Venezuela",
},
{
    nombre: "Luis Ramos",
    edad: "30",
    categoria: "Tecnologia",
    talento: "Experto tecnico en celulares",
    direccion: "Caracas, Venezuela",
},
{
    nombre: "Ariel Rivas",
    edad: "18",
    categoria: "Música",
    talento: "Guitarrista Profesional",
    direccion: "Caracas, Venezuela",
},
{
    nombre: "Agustina Soler",
    edad: "23",
    categoria: "Gastronomia",
    talento: "Chef Profesional",
    direccion: "Caracas, Venezuela",
},
{
    nombre: "Marco Dionisio",
    edad: "25",
    categoria: "Diseño",
    talento: "Diseñador Amateur",
    direccion: "Caracas, Venezuela",
},
{
    nombre: "Nohelia Lopez",
    edad: "35",
    categoria: "Idiomas",
    talento: "Experta en idiomas",
    direccion: "Caracas, Venezuela",
},
{
    nombre: "Ramiro Rojas",
    edad: "35",
    categoria: "Escritura",
    talento: "Experto Redactor",
    direccion: "Madrid, España",
},
{
    nombre: "Gabriela Files",
    edad: "34",
    categoria: "DesarrolloPersonal",
    talento: "Experto en Desarrollo Personal",
    direccion: "Madrid, España",
}
]

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