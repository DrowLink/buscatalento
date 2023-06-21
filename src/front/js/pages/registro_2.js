import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/registro_2.css";
import { Context } from "../store/appContext";
import trophy from "../../img/trophy.png";
import { FormTalent } from "../component/formTalent";

export const Registro2 = () => {

  //creacion de variables de la tabla PERFIL
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [profileImgLink, setProfileImgLink] = useState(""); //LINK FOTO DE PERFIL

  //creacion variables tabla TALENTO
  const [categoryTalent, setCategoryTalent] = useState("") //Categoria del talento
  const [talentName, setTalentName] = useState("") //Describe tu talento
  const [dateSinceTalent, setDateSinceTalent] = useState("") // DESDE CUANDO LO PRACTICAS
  const [experienceTalent, setExperienceTalent] = useState("") //QUE TAN EXPERIMENTADO TE IDENTIFICAS
  const [imagenTalent, setImagenTalent] = useState("") //IMAGEN TALENTO
  const [moreAboutTalent, setMoreAboutTalent] = useState("") //Cuentanos mas sobre tu talento

  //logica
  const [modalShown, setModalShown] = useState(false);
  const [files, setFiles] = useState();
  const [previews, setPreviews] = useState();
  const [files2, setFiles2] = useState();
  const [previews2, setPreviews2] = useState();


  const imagenPreview = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles(e.target.files);
    }
  }

  //LISTENERS CREADOS  TALENTO TABLA
  const handlerCategoryTalent = (event) => {
    setCategoryTalent(event.target.value);
  };
  const handlerTalentName = (event) => {
    setTalentName(event.target.value);
  };
  const handlerDateSinceTalent = (event) => {
    setDateSinceTalent(event.target.value);
  };
  const handlerImagenTalent = (event) => {
    setImagenTalent(event.target.value);
  };
  const handlerExperienceTalent = (event) => {
    setExperienceTalent(event.target.value);
  };
  const handlerMoreAboutTalent = (event) => {
    setMoreAboutTalent(event.target.value);
  };


  //LISTENERS CREADOS PERFIL
  const handlerName = (event) => {
    setName(event.target.value);
  };
  const handlerLastname = (event) => {
    setLastname(event.target.value);
  };
  const handlerPhone = (event) => {
    setPhone(event.target.value);
  };
  const handlerCountry = (event) => {
    setCountry(event.target.value);
  };
  const handlerState = (event) => {
    setState(event.target.value);
  };
  const handlerAge = (event) => {
    setAge(event.target.value);
  };
  const handlerProfileImgLink = (event) => {
    setProfileImgLink(event.target.value);
  };

  //ENVIAR INFO
  const handleClickPerfil = () => {
    if (
      name &&
      lastname &&
      phone &&
      age &&
      state &&
      country &&
      profileImgLink
    ) { alert("bien") //hacer fetch con actions
        setModalShown(true)
    } else {
      alert("Faltan datos por rellenar");
    }
  };

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
              value={name}
              onChange={handlerName}
            />
            <p>Telefono</p>
            <input
              id="phone-field"
              type="text"
              className="form-control"
              placeholder="Numero"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={phone}
              onChange={handlerPhone}
            />
            <p>Estado</p>
            <input
              className="form-control"
              id="input-input"
              aria-label="Default input example"
              placeholder="Estado"
              value={state}
              onChange={handlerState}

            />
            <p>Sube una foto para tu perfil:</p>
            <input type="file" 
                    className="form-control mt-2" 
                    id="inputGroupFile03" 
                    accept="image/*"
                    value={profileImgLink}
                    onChange={handlerProfileImgLink}/>
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
              value={lastname}
              onChange={handlerLastname}
            />
            <p>Edad</p>
            <input
              id="phone-field"
              type="text"
              className="form-control"
              placeholder="Edad"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={age}
              onChange={handlerAge}
            />
            <p>País</p>
            <select
              className="form-select"
              id="select-input"
              aria-label="Default select example"
              value={country}
              onChange={handlerCountry}
            >
              <option selected>Selecciona un país</option>
              <option value="">Venezuela</option>
              <option value="">Estados Unidos</option>
              <option value="">Colombia</option>
            </select>
          </div>
        </div>
        <div id="h1-box-registro2">
            <h1 id="h1-registro-below">Sobre tu talento</h1>{" "}
          </div>
        <div id="input-box-2" className="row">
          
          <div
            id="input2-box-1"
            className="col-4 d-flex justify-content-center"
          >
            <div
              id="img-talent"
              className="d-flex justify-content-center align-items-center "
            >
              {previews &&
              previews.map((pic) => {
                return <img id="preview-img-registro2" src={pic} />; //PREVIEW SECCION 1 PERFIL
              })}
            </div>
          </div>
          <div id="input2-box-2" className="col">
            <p>Selecciona una categoria para tu talento:</p>
            <select
              className="form-select mb-3"
              id="select-input"
              aria-label="Default select example"
              value={categoryTalent}
              onChange={handlerCategoryTalent}
            >
              <option selected>Selecciona una categoría</option>
              <option value="1">Juegos de Mesa</option>
              <option value="2">Lenguajes de Programación</option>
              <option value="3">Deportes</option>
              <option value="4">Artes marciales</option>
            </select>
            <p>¿Desde hace cuanto lo practicas?</p>
            <input
              id="lastname-field"
              type="text"
              className="form-control"
              placeholder=""
              aria-label="Username"
              value={dateSinceTalent}
              onChange={handlerDateSinceTalent}
              aria-describedby="basic-addon1"
            />
            <form>
              <div className="form-group" id="input-img-box">
                <p>Sube alguna foto alusiva a tu talento: </p>                 
                  <input type="file" className="form-control" id="inputGroupFile02" value={imagenTalent} onChange={imagenPreview && handlerImagenTalent }/>
              </div>
            </form>
          </div>
          <div id="input2-box-3" className="col">
            <p>Descríbenos tu talento:</p>
            <input
              id="lastname-field"
              type="text"
              className="form-control"
              placeholder=""
              value={talentName}
              onChange={handlerTalentName}
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <p>¿Qué tan experimentado te identificas?</p>
            <input
              id="lastname-field"
              type="text"
              className="form-control"
              placeholder=""
              aria-label="Username"
              value={experienceTalent}
              onChange={handlerExperienceTalent}
              aria-describedby="basic-addon1"
            />
            <p>Cuéntanos mas sobre tu talento:</p>
            <div className="form-floating">
              <textarea
                className="form-control"
                value={moreAboutTalent}
                onChange={handlerMoreAboutTalent}
                placeholder="Dejanos un comentari"
                id="floatingTextarea"
              ></textarea>
              <label for="floatingTextarea"></label>
            </div>
          </div>
         </div>  
         <div id="end-section-modal" className="text-center">
        <h3>¿Listo para empezar?</h3>

        <div>
          <button
            id="confirmation-button-registro"
            type="button"
            className="btn btn"
            onClick={handleClickPerfil}
          >
           Continuar
          </button>
        </div>

          {/* MODAL BOX */}
          {
            modalShown != false ? <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
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
          </div> : "" 
          }
        
        
      </div> 




 {/* VERSION REPETIDA TALENTO BOX POR SEGUNDA VEZ */}




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

        {/* <div class="progress">
            <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div> agregar luego bien acomodado */}
      </div>
    </>
  );
};
