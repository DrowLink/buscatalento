import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import "../../styles/resultados.css";
import { Context } from "../store/appContext";


//ESTE COMP. SE RENDERIZA EN /RESULTADOS

export const CardPersonal = (props) => {

    const {
        store, actions
    }= useContext(Context)

    useEffect(()=>{
        actions.retornarcategoria()
    }, [])



    return (
        <div id="container-resultados" className="container">
           <div id="card-box-resultados" className="row">
                <div id="profile-photo-cardbox-resultados" className="col-4">
                    <div id="profile-img-cardbox-resultados"></div>
                </div>
            <div id="text-cardbox-resultados" className="col">
                {
                    store.categorias.map((categoria) =>
                    <span>
                    Categoria: {props.item.categoria}
                    </span>
                    )
                }
                <h3> Jose Rosas </h3>
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
        <div id="card-box-resultados" className="row">
                <div id="profile-photo-cardbox-resultados" className="col-4">
                    <div id="profile-img-cardbox-resultados"></div>
                </div>
            <div id="text-cardbox-resultados" className="col">
                {
                    store.categorias.map((categoria) =>
                    <span>
                    Categoria: {props.item.categoria}
                    </span>
                    )
                }
                <h3> Marta Colmenares </h3>
                <p>20 años</p>
                <p>Jugadora Profesional de Tenis</p>
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
        <div id="card-box-resultados" className="row">
                <div id="profile-photo-cardbox-resultados" className="col-4">
                    <div id="profile-img-cardbox-resultados"></div>
                </div>
            <div id="text-cardbox-resultados" className="col">
                {
                    store.categorias.map((categoria) =>
                    <span>
                    Categoria: {props.item.categoria}
                    </span>
                    )
                }
                <h3> Sofi Torres </h3>
                <p>25 años</p>
                <p>Fotografo Profesional </p>
                <p>Valencia, Venezuela</p>
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
        <div id="card-box-resultados" className="row">
                <div id="profile-photo-cardbox-resultados" className="col-4">
                    <div id="profile-img-cardbox-resultados"></div>
                </div>
            <div id="text-cardbox-resultados" className="col">
                {
                    store.categorias.map((categoria) =>
                    <span>
                    Categoria: {props.item.categoria}
                    </span>
                    )
                }
                <h3> Joaquin Silva </h3>
                <p>19 años</p>
                <p>Fotografo amateur</p>
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
        <div id="card-box-resultados" className="row">
                <div id="profile-photo-cardbox-resultados" className="col-4">
                    <div id="profile-img-cardbox-resultados"></div>
                </div>
            <div id="text-cardbox-resultados" className="col">
                {
                    store.categorias.map((categoria) =>
                    <span>
                    Categoria: {props.item.categoria}
                    </span>
                    )
                }
                <h3> Jean Rosales </h3>
                <p>24 años</p>
                <p>Programador full-stack</p>
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