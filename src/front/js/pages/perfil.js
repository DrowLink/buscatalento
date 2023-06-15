import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/perfil.css"
import { Context } from "../store/appContext";

export const Perfil = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
            <div id="profile-box-perfil" className="">
                <div id="section-1-card-perfil" className="row">

                    <div id="description-profile-box-perfil" className="col">
                        <h3>Manuel Rosas</h3>
                        <p>24 años</p>
                        <p>Caracas, Venezuela</p>
                        <p>Jugador Amateur de Ajedrez</p>
                        <p>5 años de practica</p>
                        <p>Persona entusiasta con ganas de aprender y de enseñar</p>
						<input type="text" ></input>
                    </div>
					<div id="photo-profile-box-perfil" className="col-4">
                        <div id="circle-profile-card-img-perfil" className="m-4"></div>
                        {/* <div id="review-card-perfil">
							<i class="fa-solid fa-star"></i>
							<i class="fa-solid fa-star"></i>
							<i class="fa-solid fa-star"></i>
							<i class="fa-solid fa-star"></i>
							<i class="fa-solid fa-star"></i>
                        </div> */}
                    </div>
                </div>
                <div id="section-photos-card-perfil" className="row">
                    <div className="col" id="add-photos-container-card-perfil">
                        <div id="section3-box-talent-card"></div>
                    </div>
                    <div className="col" id="add-photos-container-card-perfil">
                        <div id="section3-box-talent-card"></div>
                    </div>
                    <div className="col" id="add-photos-container-card-perfil">
                        <div id="section3-box-talent-card"></div>
                    </div>
                </div>
            </div>
        </div>  
		
	);
};
