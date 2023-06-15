import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import iniciosesion from "../../img/inicio-sesion-bg.jpg";
import buscatalento_logo_original from "../../img/buscatalento_logo_original.png";
import "../../styles/inicio_sesion.css";

import { Context } from "../store/appContext";

export const InicioSesion = () => {
  const { store, actions } = useContext(Context);
  const[username, setUsername]= useState("")
  const[password, setPassword]= useState("")
  const[shown, setShown] = useState(false)


  const handlerUsername = (event) =>{
    setUsername(event.target.value);
  }

  const handlerPassword = (event) =>{
    setPassword(event.target.value)
  }

  const handlerKeyPress = (event) =>{
    event.preventDefault()
    console.log(`username: ${username}, password: ${password}`)
  }

  const switchShown = () => setShown(!shown);

  return (
    <>
      <div className="container-iniciosesion">
        <img src={iniciosesion} class="img-fluid" id="iniciosesion-bg" />
        <div className="row login-box">
          <div className="col"></div>
          <div className="col-5" id="loginbox">
            <div id="logobox-logologin">
              <img id="logo-login" src={buscatalento_logo_original} />
            </div>
            <div className="" id="input-login-iniciosesion">
              <p>Correo</p>
              <input
                id="email-field-iniciosesion"
                type="text"
                className="form-control"
                placeholder="Correo electronico"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={username}
                onChange={handlerUsername}
              />
              <p>Clave</p>
              <div id="is-relative">
              <input
                id="password-field-iniciosesion"
                type={shown ? 'text': 'password'}
                className="form-control"
                placeholder="*********"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={password}
                onChange={handlerPassword}
              />
              <span id="icon">
                <i className="fas fa-eye"
                    onClick={switchShown}></i>
              </span>
              </div>
              <button
                id="iniciosesion-button"
                type="button"
                className="btn btn-primary"
                onClick={handlerKeyPress}
              >
                Iniciar Sesion
              </button>
              <p 
              id="below-inputs-iniciosesion"
              >
                ¿Aún no tienes cuenta?</p>
              <Link to="/registro-1">
              <a>¡Regístrate aquí!</a>
              </ Link>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
      {/* <div className="text-center">
            <Link to="/">
                <button className="btn btn-primary">Back home</button>
            </Link>
        </div> */}
    </>
  );
};
