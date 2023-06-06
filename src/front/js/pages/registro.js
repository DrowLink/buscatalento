import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/registro.css";
import { Context } from "../store/appContext";

export const Registro = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div id="container-registro" className="">
        <h1 id="h1-registro">Ayudanos a completar tu perfil</h1>
        <div id="input-box-1" className="row">
          <div
            id="input-section-1"
            className="col-4 d-flex justify-content-center"
          >
            <div id="circle-profile-img"></div>
            {/* <h2>Profile Picture</h2> */}
          </div>
          <div id="input-section-2" className="col">
            <p>Nombre</p>
            <input
              id="name-field"
              type="text"
              className="form-control"
              placeholder="Nombre"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <p>Telefono</p>
            <input
              id="phone-field"
              type="text"
              className="form-control"
              placeholder="Numero"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <p>Estado</p>
            <select
              className="form-select"
              id="select-input"
              aria-label="Default select example"
            >
              <option selected>Selecciona un estado</option>
              <option value="1">Miranda</option>
              <option value="2">Aragua</option>
              <option value="3">Carabobo</option>
              <option value="4">Nueva Esparta</option>
            </select>
          </div>
          <div id="input-section-3" className="col">
            <p>Apellido</p>
            <input
              id="lastname-field"
              type="text"
              className="form-control"
              placeholder="Apellido"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <p>Edad</p>
            <input
              id="phone-field"
              type="text"
              className="form-control"
              placeholder="Edad"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <p>País</p>
            <select
              className="form-select"
              id="select-input"
              aria-label="Default select example"
            >
              <option selected>Selecciona un país</option>
              <option value="1">Venezuela</option>
              <option value="2">Estados Unidos</option>
              <option value="3">Colombia</option>
            </select>
          </div>
        </div>
        <div id="input-box-2" className="row">
          <h1 id="h1-registro">Sobre tu talento</h1>
          <div
            id="input2-box-1"
            className="col-4 d-flex justify-content-center"
          >
            <div id="img-talent"></div>
          </div>
          <div id="input2-box-2" className="col">
            <p>Cual es tu talento?</p>
            <select
              className="form-select mb-3"
              id="select-input"
              aria-label="Default select example"
            >
              <option selected>Selecciona un talento</option>
              <option value="1">Ajedrez</option>
              <option value="2">Karate</option>
              <option value="3">Programar</option>
            </select>
            <p>Desde hace cuanto lo practicas?</p>
            <input
              id="lastname-field"
              type="text"
              className="form-control"
              placeholder=""
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div id="input2-box-3" className="col">
            <p>Cual es tu talento?</p>
            <select
              className="form-select mb-3"
              id="select-input"
              aria-label="Default select example"
            >
              <option selected>Selecciona un talento</option>
              <option value="1">Ajedrez</option>
              <option value="2">Karate</option>
              <option value="3">Programar</option>
            </select>
            <p>Desde hace cuanto lo practicas?</p>
            <input
              id="lastname-field"
              type="text"
              className="form-control"
              placeholder=""
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <p>Cuentanos mas sobre ti</p>
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
              ></textarea>
              <label for="floatingTextarea">Comments</label>
            </div>
          </div>
        </div>
        <div id="input-box-3" className="row d-flex justify-content-around">
          <div className="col" id="add-photos-container">
            <div id="section3-box-talent"></div>
          </div>
          <div className="col" id="add-photos-container">
            <div id="section3-box-talent"></div>
          </div>
          <div className="col" id="add-photos-container">
            <div id="section3-box-talent"></div>
          </div>
        </div>
      </div>
      <div id="end-section-modal" className="text-center">
        <p>Tienes algun otro talento?</p>
        <button
          id="confirmation-button-registro"
          type="button"
          className="btn btn-success"
        >
          Si
        </button>
        <button type="denial-button-registro" className="btn btn-danger">
          No
        </button>
        {/* <div class="progress">
            <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div> agregar luego bien acomodado */}
      </div>
    </>
  );
};
