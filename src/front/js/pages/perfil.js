import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/perfil.css"
import { Context } from "../store/appContext";
import iconperfil from "../../img/iconperfil.png"

export const Perfil = () => {
	const { store, actions } = useContext(Context);
    let { userId } = useParams();



    useEffect (() => {
        actions.getProfileById(userId)
    }, [])

	return (
		<div className="container">
            <div id="profile-box-perfil" className="">
            <h1 id="perfiltitulo-perfil">Tu perfil</h1>
                <div id="section-1-card-perfil" className="row">
                    <div id="description-profile-box-perfil" className="col">
                        <input id="inputperfil-1" type="text" value={store.perfil && store.perfil.perfil.name || ""}/>

                        <input id="inputperfil-2" type="text" value={store.perfil && store.perfil.perfil.age || ""}/>
                        <input id="inputperfil-3" type="text" value={store.perfil && store.perfil.perfil.state + " " + store.perfil.perfil.country || ""} />
                        <input id="inputperfil-4" type="text" value={store.perfil && store.perfil.perfil.phone || ""}/>
                        {/* <input id="inputperfil-5" type="text" value="Jugador Amateur de Ajedrez"/>
                        <input id="inputperfil-5" type="text" value="5 años de práctica"/>
                        <div id="inputperfil-2" className="form-group">
                            <textarea id="text-area-perfil" value="Persona entusiasta con ganas de aprender y de enseñar" rows="2"></textarea>
                        </div> */}
                        <div id="circulo-perfil-boton-div" className="">
                        <button id="circulo-boton-perfil" ><i className="fa-solid fa-pen-to-square"></i></button>
                        </div>
                    </div>
					<div id="photo-profile-box-perfil" className="col-4">
                        <div id="circle-profile-card-img-perfil" className="m-4">
                                <img
                            src={iconperfil}
                            className="rounded-circle rounded-2 img-fluid"
                            id="iconperfil-perfil"
                            alt="..."
                        />
                        </div>
                    </div>
                </div>
                <h1 id="talentotitulo-perfil">Tus talentos</h1>
                { store.perfil && store.perfil.talents.map( talento =>  <div id="section-photos-card-perfil" className="row">
                    <div className="col-5" id="add-photos-container-card-perfil">
                        <div id="section3-box-talent-card-perfil">
                            <img id="img-photo-perfil-css" src="https://wellaggio.com/wp-content/uploads/2015/09/la-importancia-de-las-imagenes-en-el-dise%C3%B1o-web1.jpg" />
                        </div>
                    </div>
                    <div className="col" id="description-photos-container-card-perfil">
                        <h2 className="mb-4">{talento.talent_name}</h2>
                        <h3 className="mb-4">Categoria del talento</h3>
                        <h4 className="mb-4">Tiempo de practica</h4>
                        <h4 className="mb-4">Experiencia</h4>
                        <p className="mb-4">Descripcion breve del talento</p>
                    </div>
                </div>)}
            </div>
        </div>  
		
	);
};
