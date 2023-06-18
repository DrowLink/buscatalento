import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "../../styles/resultados.css";


//ESTE COMP. SE RENDERIZA EN /RESULTADOS

export const CardPersonal = () => {

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
                <div class="d-flex justify-content-between">
                <div>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                    <Link to="/cardpersonal">
                        <button
                            type="button"
                            id="vermas-btn-cardbox-resultados"
                            class="btn btn-primary"
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