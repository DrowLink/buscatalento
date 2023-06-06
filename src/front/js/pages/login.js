import React from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";
import PeopleSharing from "../../img/people-sharing.jpg";

export const Login = () => {
  return (
    <div className="text-center mt-5">
      <h1 id="h1-profile">¡Regístrate con nosotros!</h1>
      <h2 id="h2-profile">Por favor llena los siguientes datos:</h2>
      <div className="container-fluid">
        <div id="section-one" className="row">
          <div className="col-5">
            <img id="img-profile" src={PeopleSharing} />
          </div>
          <div className="col-7">
            <p id="p-profile">Username:</p>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
            <p id="p-profile">Email Address:</p>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
            <p id="p-profile">Password:</p>
            <input
              type="password"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
            <p id="p-profile">Confirm your password:</p>
            <input
              type="password"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
            <div class="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                He leído los términos y condiciones.
              </label>
            </div>
            <Link to="/registro">
              <button type="button" id="btn-create" class="btn btn-primary">
                CREAR PERFIL
              </button>
            </Link>
          </div>
        </div>
      </div>
      <p id="p-profile" className="finaltext">
        in metus tempus hendrerit non et ex. In fermentum dictum mauris, nec
        rutrum augue gravida id. Nam massa nisi, aliquet elementum vulputate eu,
        tempor id diam. Suspendisse vitae pellentesque ante, at rutrum urna.
        Aliquam a neque elit. Suspendisse placerat a nulla ut tincidunt. Nam
        vitae nunc nec purus elementum consectetur. Vivamus eget dapibus risus.
      </p>
      <br></br>
      <br></br>
      {/* <Link to= "/">
                <span className="btn btn-primary btn-lg m-3" href="#" role="button">
                    Go to Home
                </span>
            </Link> */}
    </div>
  );
};
