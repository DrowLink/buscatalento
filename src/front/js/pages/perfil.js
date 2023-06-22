import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/perfil.css"
import { Context } from "../store/appContext";

export const Perfil = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
            <div id="profile-box-perfil" className="">
            <h1 id="perfiltitulo-perfil">Tu perfil</h1>
                <div id="section-1-card-perfil" className="row">
                    <div id="description-profile-box-perfil" className="col">
                        <input id="inputperfil-1" type="text" value="Alejandro"/>
                        <input id="inputperfil-5" type="text" value="24 años"/>
                        <input id="inputperfil-5" type="text" value="Caracas, Venezuela"/>
                        <input id="inputperfil-5" type="text" value="Jugador Amateur de Ajedrez"/>
                        <input id="inputperfil-5" type="text" value="5 años de práctica"/>
                        <div id="inputperfil-2" className="form-group">
                            <textarea id="text-area-perfil" value="Persona entusiasta con ganas de aprender y de enseñar" rows="2"></textarea>
                        </div>
                    </div>
					<div id="photo-profile-box-perfil" className="col-4">
                        <div id="circle-profile-card-img-perfil" className="m-4"></div>
                    </div>
                </div>
                <h1 id="talentotitulo-perfil">Tu talento</h1>
                <div id="section-photos-card-perfil" className="row">
                    <div className="col-5" id="add-photos-container-card-perfil">
                        <div id="section3-box-talent-card"></div>
                    </div>
                    <div className="col" id="description-photos-container-card-perfil">
                        <h2 className="mb-4">Nombre del Talento</h2>
                        <h3 className="mb-4">Categoria del talento</h3>
                        <h4 className="mb-4">Tiempo de practica</h4>
                        <h4 className="mb-4">Experiencia</h4>
                        <p className="mb-4">Descripcion breve del talento</p>
                    </div>
                </div>
            </div>
        </div>  
		
	);
};
