import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/card_personales.css"
import { Context } from "../store/appContext";


export const CardPersonal = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
            <div id="profile-box" className="card">
                <div className="card-body">

                
                <div id="section-1-card" className="row">
                    <div id="photo-profile-box" className="col-4">
                        <div id="circle-profile-card-img" className="m-4"></div>
                        <div id="review-card">
                        <i className="fa-solid fa-star fa-2x"></i>
                        <i className="fa-solid fa-star fa-2x"></i>
                        <i className="fa-solid fa-star fa-2x"></i>
                        <i className="fa-solid fa-star fa-2x"></i>
                        <i className="fa-solid fa-star fa-2x"></i>
                        </div>
                    </div>
                    <div id="description-profile-box" className="col">
                        <h1>Jose Rosas</h1>
                        <br/>
                        <h4>24 años</h4>
                        <h4>Caracas, Venezuela</h4>
                        <h4>Jugador Amateur de Ajedrez</h4>
                        <h4>5 años de practica</h4>
                        <h4>Persona entusiasta con ganas de aprender y de enseñar</h4>
                    </div>
                </div>
                <div className="row d-flex justify-content-around" id="section-photos-card">
                    <div className="col-md-2" id="add-photos-container-card">
                        <div id="section3-box-talent-card"></div>
                    </div>
                    <div className="col-md-2" id="add-photos-container-card">
                        <div id="section3-box-talent-card"></div>
                    </div>
                </div>

                <div id="buttons-final-card" className="text-center">
                    <button id="intercambio-button-card" type="button" className="btn">Intercambio!</button>
                    <Link to="/resultados">
                    <button id="seguirviendo-button-card" type="button" className="btn">Seguir viendo</button>
                    </ Link>
                </div>
                </div>
                </div>
            </div>  
		
	);
};
