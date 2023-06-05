import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/card_personales.css"
import { Context } from "../store/appContext";

export const CardPersonal = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
            <div id="profile-box" className="">
                <div id="section-1-card" className="row">
                    <div id="photo-profile-box" className="col-4">
                        <div id="circle-profile-card-img" className="m-4"></div>
                        <div id="review-card">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <div id="description-profile-box" className="col mt-5">
                        <h3>Manuel Rosas</h3>
                        <p>24 años</p>
                        <p>Caracas, Venezuela</p>
                        <p>Jugador Amateur de Ajedrez</p>
                        <p>5 años de practica</p>
                        <p>Persona entusiasta con ganas de aprender y de enseñar</p>
                    </div>
                </div>
                <div id="section-photos-card" className="row">
                    <div className="col" id="add-photos-container-card">
                        <div id="section3-box-talent-card"></div>
                    </div>
                    <div className="col" id="add-photos-container-card">
                        <div id="section3-box-talent-card"></div>
                    </div>
                    <div className="col" id="add-photos-container-card">
                        <div id="section3-box-talent-card"></div>
                    </div>
                </div>

                <div id="buttons-final-card" className="text-center">
                    <button id="intercambio-button-card" type="button" className="btn btn-success">Intercambio!</button>
                    <button id="seguirviendo-button-card" type="denial-button-registro" className="btn btn-primary">Seguir viendo</button>
                </div>

                </div>


            </div>  
		
	);
};
