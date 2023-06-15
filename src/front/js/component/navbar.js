import React from "react";
import { Link } from "react-router-dom";
import buscatalento_logo from "../../img/buscatalento_logo.png";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav id="navbar-bg-home" className="navbar navbar">
      <div className="container">
        <Link to="/">
          <img className="logo-img" src={buscatalento_logo} />
          {/* <span className="navbar-brand mb-0 h1">Buscatalento⭐</span> */}
        </Link>
        <Link to="/iniciosesion">
          <button className="btn btn-light" id="buttons-navbar-home">Inicia sesion</button>
        </Link>
        <Link to="/registro-1">
          <button className="btn btn-light" id="buttons-navbar-home">Registrate</button>
        </Link>
        <Link to="/demo">
          <button className="btn btn-light" id="buttons-navbar-home">
            Check the Context in action
          </button>
        </Link>
      </div>
    </nav>
  );
};
