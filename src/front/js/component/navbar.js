import React, { useContext } from "react";
import { Link } from "react-router-dom";
import buscatalento_logo from "../../img/buscatalento_logo.png";
import "../../styles/navbar.css";
import { Context } from "../store/appContext";

export const Navbar = () => {

  const { actions, store } = useContext(Context) //accede al flux



  return (
    <div>
    <nav id="navbar-bg-home" className="navbar navbar">
        <Link to="/">
          <img className="logo-img ms-1 p-2" src={buscatalento_logo} />
          {/* <span className="navbar-brand mb-0 h1">Buscatalento⭐</span> */}
        </Link>
        <Link to="/">
        <div className="">
          <span className="fs-4 text-white">
            Home
          </span>
        </div>
        </Link>
        <Link to="/categories">
        {store.token != null ? <div className="">
          <span className="fs-4 text-white">
            Categories
          </span>
        </div> : "" }
        </Link>
        <Link to="/aboutus" >
          <div className="">
            <span className="fs-4 text-white">
              About us
            </span>
          </div>
        </Link>
        <div className="d-flex justify-content-center">
          <span className="fs-4 text-white">
            <div className="d-flex justify-content-start">
            <i className="fa-brands fa-instagram"></i>
            </div>
          </span>
        </div>
        <div className="d-flex justify-content-center">
          <span className="fs-4 text-white">
            <div className="d-flex justify-content-end">
            <i className="fa-brands fa-twitter"></i>
            </div>
          </span>
        </div>
        <div className="d-flex justify-content-center">
          <span className="fs-4 text-white">
            <div className="d-flex justify-content-end">
            <i className="fa-brands fa-github"></i>
            </div>
          </span>
        </div>
        <div className="d-flex justify-content-end">
        <div className="m-3 p-1">
        {store.token != null ? <Link to="/perfil"><button className="btn btn-outline-light" id="buttons-navbar-home">Mi Perfil</button></Link> : <Link to="/iniciosesion">
          <button className="btn btn-outline-light" id="buttons-navbar-home">Inicia sesion</button>
        </Link>}
        
        </div>
        <div className="m-3 p-1">
          { store.token != null ? (<Link to="/"><button onClick={ () => { actions.logout() }} className="btn btn-light" id="buttons-navbar-home">Log out</button></Link>) : (<Link to="/registro-1">
            <button className="btn btn-light" id="buttons-navbar-home">Registrate</button>
          </Link>) }
        {/* <Link to="/registro-1">
          <button className="btn btn-light" id="buttons-navbar-home">Registrate</button>
        </Link> */}
        </div>
        </div>
    </nav>
    </div>
  );
};
