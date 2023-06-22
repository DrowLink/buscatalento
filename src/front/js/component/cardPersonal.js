import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import "../../styles/resultados.css";
import { Context } from "../store/appContext";


//ESTE COMP. SE RENDERIZA EN /RESULTADOS

export const CardPersonal = (props) => {

    const {
        store, actions
    }= useContext(Context)




    return (
        <div id="container-resultados" className="container">
            <div id="card-box-resultados" className="row">
                <div id="profile-photo-cardbox-resultados" className="col-4">
                    <div id="profile-img-cardbox-resultados"></div>
                </div>
            <div id="text-cardbox-resultados" className="col">
                <h3>Manuel Rosas</h3>
                <p>24 años</p>
                <p>Jugador Amateur de ajedrez</p>
                <p>Caracas, Venezuela</p>
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
</div>
    )

}