import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/registro_2.css";
import { Context } from "../store/appContext";

const Registro3 = () => {
    const {actions, store} = useContext(Context)
    const navigate = useNavigate();
      //creacion variables tabla TALENTO
  const [categoryTalent, setCategoryTalent] = useState("") //Categoria del talento
  const [talentName, setTalentName] = useState("") //Describe tu talento
  const [dateSinceTalent, setDateSinceTalent] = useState("") // DESDE CUANDO LO PRACTICAS
  const [experienceTalent, setExperienceTalent] = useState("") //QUE TAN EXPERIMENTADO TE IDENTIFICAS
  const [imagenTalent, setImagenTalent] = useState("") //IMAGEN TALENTO
  const [moreAboutTalent, setMoreAboutTalent] = useState("") //Cuentanos mas sobre tu talento

  //logica
  // const [modalShown, setModalShown] = useState(true);
  // ESTOS STATES SON DE PREVIEW DE LA IMAGEN
  // const [files2, setFiles2] = useState();
  // const [previews2, setPreviews2] = useState();

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

      const handleClick = () => {
        if (categoryTalent.trim() != "" && talentName.trim() != "" && dateSinceTalent.trim() != "" && imagenTalent.trim() != "" && experienceTalent.trim() != "" && moreAboutTalent.trim() != "") {
            actions.newTalento({
                talent_name: talentName,
                practice_time: dateSinceTalent,
                about_you: moreAboutTalent,
                categories_talent: categoryTalent,
                range_talent: experienceTalent,
                imagetalent_url: imagenTalent
            })
              navigate("/resultados")
        }
        else {
            alert("Faltan datos por rellenar");
        }
      }

    return (
        <>
        <div id="talento" className="h1-box-registro2">
            <h1 className="h1-registro-below">Sobre tu talento</h1>{" "}
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
              {/* {previews2 &&
              previews2.map((pic) => {
                return <img id="preview-img-registro2" src={pic} />; //PREVIEW
              })}  ACA ES LOGICA DE PREVIEW DE LA IMAGEN SUBIDA AL INPUT*/}
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
                  <input type="file" className="form-control" id="inputGroupFile02" value={imagenTalent} onChange={handlerImagenTalent }/>
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
            onClick={handleClick}
          >
           Continuar 
          </button>
        </div>


          {/* {
            modalShown != false ? (<div class="modal" tabindex="-1">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Modal title</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>Modal body text goes here.</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>) : "" 
          }  */}
      </div>
        </>
    )
}

export default Registro3