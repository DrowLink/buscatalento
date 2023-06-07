import React from "react";
import { Link } from "react-router-dom";
import buscatalento_logo from "../../img/buscatalento_logo.png";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <img className="logo-img" src={buscatalento_logo} />
          {/* <span className="navbar-brand mb-0 h1">Buscatalento⭐</span> */}
        </Link>
        <Link to="/iniciosesion">
          <button className="btn btn-primary">Inicia sesion</button>
        </Link>
        <Link to="/registro-1">
          <button className="btn btn-primary">Registrate</button>
        </Link>
        <Link to="/demo">
          <button className="btn btn-primary">
            Check the Context in action
          </button>
        </Link>
      </div>
    </nav>
  );
};
