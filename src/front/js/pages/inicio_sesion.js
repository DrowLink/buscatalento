import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import iniciosesion from '../../img/inicio-sesion-bg.jpg'
import buscatalento_logo from "../../img/buscatalento_logo.png";
import "../../styles/inicio_sesion.css"

import { Context } from "../store/appContext";

export const InicioSesion = () => {
	const { store, actions } = useContext(Context);

	return ( <>
		<div className="container-iniciosesion">
			<img src={iniciosesion} class="img-fluid" id="iniciosesion-bg" />
            <div className="row login-box">
                <div className="col"></div>
                <div className="col-5" id="loginbox">
                    <div id="logobox-logologin">
                        <img id="logo-login" src={buscatalento_logo} />
                    </div>
                    <div className="" id="input-login-iniciosesion">
                        <p>Email</p>
                        <input id="email-field-iniciosesion" type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                        <p>Password</p>
                        <input id="password-field-iniciosesion" type="password" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                        <button id="iniciosesion-button" type="button" className="btn btn-primary">Seguir viendo</button>
                        <p>Aun no tienes cuenta?</p>
                        <a href=""> Registrate Aqui!</a> {/* Linkear */}
                    </div>
                    {/* <input></input> aun no terminado */}
                </div>
                <div className="col"></div>

            </div>
		</div>
        {/* <div className="text-center">
            <Link to="/">
                <button className="btn btn-primary">Back home</button>
            </Link>
        </div> */}
       
    </>);
};
