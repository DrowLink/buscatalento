import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/registro_2.css";
import { Context } from "../store/appContext";
import trophy from "../../img/trophy.png";
import { FormTalent } from "../component/formTalent";

export const Registro2 = () => {
  const [files, setFiles] = useState();
  const [previews, setPreviews] = useState();
  const [files2, setFiles2] = useState();
  const [previews2, setPreviews2] = useState();
  const [datosPerfil, setDatosPerfil]= useState("")


  const handleDatosPerfil= (event) =>{
    setDatosPerfil(event.target.value);
  }

  //rendering previews
  useEffect(() => {
    if (!files) return;

    let tmp = [];
    for (let i=0 ; i < files.length; i++) {
      tmp.push(URL.createObjectURL(files[i]));
    }
    const objectUrls = tmp;
    setPreviews(objectUrls);

    //free memory
    for (let i=0; i < objectUrls.length; i++) {
      return () => {
        URL.revokeObjectURL(objectUrls[i]);
      };
    };
  }, [files]);

  
 useEffect(() => { //state2
   if (!files2) return;

   let tmp = [];
   for (let i=0 ; i < files2.length; i++) {
     tmp.push(URL.createObjectURL(files2[i]));
   }
   const objectUrls = tmp;
   setPreviews2(objectUrls);

   //free memory
   for (let i=0; i < objectUrls.length; i++) {
     return () => {
       URL.revokeObjectURL(objectUrls[i]);
     };
   };
 }, [files2]);

 const handlerKeyPress = (event) =>{
  event.preventDefault()
  console.log(datosPerfil)
 }

  return (
    <>
      <div id="container-registro" className="">
        <div id="input-box-1" className="row">
          <div id="h1-box-registro2-1">
            <h1 id="h1-registro">Ayúdanos a terminar de completar tu perfil</h1>{" "}
          </div>
          <div
            id="input-section-1"
            className="col-4 d-flex justify-content-center"
          >
            <div id="circle-profile-img">
            {previews2 &&
              previews2.map((pic) => {
                return <img id="preview-img-registro2-perfil" src={pic} />;
              })}
            </div>
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
              value={datosPerfil}
              onChange={handleDatosPerfil}
            />
            <p>Telefono</p>
            <input
              id="phone-field"
              type="text"
              className="form-control"
              placeholder="Numero"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={datosPerfil}
              onChange={handleDatosPerfil}
            />
            <p>Estado</p>
            <select
              className="form-select"
              id="select-input"
              aria-label="Default select example"
              value={datosPerfil}
              onChange={handleDatosPerfil}
            >
              <option selected>Selecciona un estado</option>
              <option value="1">Miranda</option>
              <option value="2">Aragua</option>
              <option value="3">Carabobo</option>
              <option value="4">Nueva Esparta</option>
            </select>

            <p>Sube una foto para tu perfil:</p>

            <input type="file" class="form-control mt-2" id="inputGroupFile03" onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      setFiles2(e.target.files);
                    }
                  }}/>

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
              value={datosPerfil}
              onChange={handleDatosPerfil}
            />
            <p>Edad</p>
            <input
              id="phone-field"
              type="text"
              className="form-control"
              placeholder="Edad"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={datosPerfil}
              onChange={handleDatosPerfil}
            />
            <p>País</p>
            <select
              className="form-select"
              id="select-input"
              aria-label="Default select example"
              value={datosPerfil}
              onChange={handleDatosPerfil}
            >
              <option selected>Selecciona un país</option>
              <option value="1">Venezuela</option>
              <option value="2">Estados Unidos</option>
              <option value="3">Colombia</option>
            </select>

          </div>

         

        </div>
          <FormTalent/>

          {/* VERSION REPETIDA TALENTO BOX */}


            <FormTalent/>

 {/* VERSION REPETIDA TALENTO BOX POR SEGUNDA VEZ */}
            <FormTalent/>



        {/* <div id="input-box-3" className="row">
          <div className="col" id="add-photos-container">
            <div
              id="section3-box-talent"
              className="d-flex justify-content-center align-items-center"
            >
              DRAG AN DROP IMG INPUT
            </div>
          </div>
          {/* <div className="col" id="add-photos-container">
            <div id="section3-box-talent" className="d-flex justify-content-center align-items-center">DRAG AN DROP IMG INPUT</div>
          </div>
          <div className="col" id="add-photos-container">
            <div id="section3-box-talent"className="d-flex justify-content-center align-items-center">DRAG AN DROP IMG INPUT</div>
          </div> */}
        {/* </div> */}
      </div>
      <div id="end-section-modal" className="text-center">
        <h3>¿Tienes algún otro talento?</h3>

        <div>
          <button
            id="confirmation-button-registro"
            type="button"
            className="btn btn-success"
          >
            Si
          </button>



          <button
            id="denial-button-registro"
            type="button"
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            No
          </button>
        </div>

        {/* MODAL BOX */}
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              {/* <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                ></button>
              </div> */}
              <div class="modal-body">
                <img id="trophy-img-modal-registro2" src={trophy} />
                <div id="text-modal-registro2">
                  <h1>¡Ya está hecho!</h1>
                  <h6>Ve y comparte tu talento con toda la comunidad 💖</h6>
                </div>
              </div>
              <div class="justify-content-center mb-5">
                <Link to="/resultados">
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    ¡Llévame al buscador!
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* <div class="progress">
            <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div> agregar luego bien acomodado */}
      </div>
    </>
  );
};
