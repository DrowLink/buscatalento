import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import "../../styles/resultados.css";
import { Context } from "../store/appContext";
import iconperfil from "../../img/iconperfil.png"


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
                <img
                src={iconperfil}
                className="rounded-circle rounded-2"
                id="iconperfil"
                alt="..."
              />
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
                <img
                src={iconperfil}
                className="rounded-circle rounded-2"
                id="iconperfil"
                alt="..."
              />
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
                <p>Compositora Amateur</p>
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
                <img
                src={iconperfil}
                className="rounded-circle rounded-2"
                id="iconperfil"
                alt="..."
              />
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
                <p>Pintora Profesional </p>
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
                <img
                src={iconperfil}
                className="rounded-circle rounded-2"
                id="iconperfil"
                alt="..."
              />
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
                <p>Orador Profesional</p>
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
                <img
                src={iconperfil}
                className="rounded-circle rounded-2"
                id="iconperfil"
                alt="..."
              />
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
                {
                    store.categorias.map((categoria) =>
                    <span>
                    Categoria: {props.item.categoria}
                    </span>
                    )
                }
                <h3> Sarahy Rivas </h3>
                <p>23 años</p>
                <p>Experta en ingles</p>
                <p>Bogota, Colombia</p>
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
                <img
                src={iconperfil}
                className="rounded-circle rounded-2"
                id="iconperfil"
                alt="..."
              />
                </div>
            <div id="text-cardbox-resultados" className="col">
                {
                    store.categorias.map((categoria) =>
                    <span>
                    Categoria: {props.item.categoria}
                    </span>
                    )
                }
                <h3> Alfonso Suarez </h3>
                <p>22 años</p>
                <p>Experto en diseño de ropa</p>
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
                <img
                src={iconperfil}
                className="rounded-circle rounded-2"
                id="iconperfil"
                alt="..."
              />
                </div>
            <div id="text-cardbox-resultados" className="col">
                {
                    store.categorias.map((categoria) =>
                    <span>
                    Categoria: {props.item.categoria}
                    </span>
                    )
                }
                <h3> Miguel O'hara  </h3>
                <p>19 años</p>
                <p>Chef profesional</p>
                <p>Merida, Venezuela</p>
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
                <img
                src={iconperfil}
                className="rounded-circle rounded-2"
                id="iconperfil"
                alt="..."
              />
                </div>
            <div id="text-cardbox-resultados" className="col">
                {
                    store.categorias.map((categoria) =>
                    <span>
                    Categoria: {props.item.categoria}
                    </span>
                    )
                }
                <h3> Lucia Blanco </h3>
                <p>25 años</p>
                <p>Bailarina experta</p>
                <p>Buenos Aires, Argentina</p>
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
                <img
                src={iconperfil}
                className="rounded-circle rounded-2"
                id="iconperfil"
                alt="..."
              />
                </div>
            <div id="text-cardbox-resultados" className="col">
                {
                    store.categorias.map((categoria) =>
                    <span>
                    Categoria: {props.item.categoria}
                    </span>
                    )
                }
                <h3> Daniel Gomez </h3>
                <p>39 años</p>
                <p>Experto en Desarrollo Personal</p>
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