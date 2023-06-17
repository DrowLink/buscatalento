import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "../../styles/registro_2.css";

export const FormTalent=() =>{
    const [files, setFiles] = useState();
    const [previews, setPreviews] = useState();
    const [files2, setFiles2] = useState();
    const [previews2, setPreviews2] = useState();

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


    return(
        <>
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
              aria-describedby="basic-addon1"
            />
            <form>
              <div className="form-group" id="input-img-box">
                <p>Sube alguna foto alusiva a tu talento: </p>
                
                {/* 
                <label for="exampleFormControlFile1"></label>
                <input
                  type="file"
                  accept="image/jpg, image/jpeg, image/png"
                  multiple
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      setFiles(e.target.files);
                    }
                  }}
                /> */}
                 
                  <input type="file" className="form-control" id="inputGroupFile02" onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      setFiles(e.target.files);
                    }
                  }}/>
                
              </div>
            </form>
          </div>
          <div id="input2-box-3" className="col">
            <p>Descríbenos tu talento:</p>
            {/* <select
              className="form-select mb-3"
              id="select-input"
              aria-label="Default select example"
            >
              <option selected>Selecciona un talento</option>
              <option value="1">Ajedrez</option>
              <option value="2">Monopoly</option>
              <option value="3">Risk</option>
              <option value="4">Scrabble</option>
              <option value="5">Ludo</option>
            </select> */}

            <input
              id="lastname-field"
              type="text"
              className="form-control"
              placeholder=""
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <p>¿Desde hace cuanto lo practicas?</p>
            <input
              id="lastname-field"
              type="text"
              className="form-control"
              placeholder=""
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <p>Cuéntanos mas sobre ti:</p>
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Dejanos un comentari"
                id="floatingTextarea"
              ></textarea>
              <label for="floatingTextarea"></label>
            </div>
          </div>
        </div>
        </>
    )
}