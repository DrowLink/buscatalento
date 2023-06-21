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
              <option value="AF">Afganistán</option>
              <option value="AL">Albania</option>
              <option value="DE">Alemania</option>
              <option value="AD">Andorra</option>
              <option value="AO">Angola</option>
              <option value="AI">Anguilla</option>
              <option value="AQ">Antártida</option>
              <option value="AG">Antigua y Barbuda</option>
              <option value="AN">Antillas Holandesas</option>
              <option value="SA">Arabia Saudí</option>
              <option value="DZ">Argelia</option>
              <option value="AR">Argentina</option>
              <option value="AM">Armenia</option>
              <option value="AW">Aruba</option>
              <option value="AU">Australia</option>
              <option value="AT">Austria</option>
              <option value="AZ">Azerbaiyán</option>
              <option value="BS">Bahamas</option>
              <option value="BH">Bahrein</option>
              <option value="BD">Bangladesh</option>
              <option value="BB">Barbados</option>
              <option value="BE">Bélgica</option>
              <option value="BZ">Belice</option>
              <option value="BJ">Benin</option>
              <option value="BM">Bermudas</option>
              <option value="BY">Bielorrusia</option>
              <option value="MM">Birmania</option>
              <option value="BO">Bolivia</option>
              <option value="BA">Bosnia y Herzegovina</option>
              <option value="BW">Botswana</option>
              <option value="BR">Brasil</option>
              <option value="BN">Brunei</option>
              <option value="BG">Bulgaria</option>
              <option value="BF">Burkina Faso</option>
              <option value="BI">Burundi</option>
              <option value="BT">Bután</option>
              <option value="CV">Cabo Verde</option>
              <option value="KH">Camboya</option>
              <option value="CM">Camerún</option>
              <option value="CA">Canadá</option>
              <option value="TD">Chad</option>
              <option value="CL">Chile</option>
              <option value="CN">China</option>
              <option value="CY">Chipre</option>
              <option value="VA">Ciudad del Vaticano (Santa Sede)</option>
              <option value="CO">Colombia</option>
              <option value="KM">Comores</option>
              <option value="CG">Congo</option>
              <option value="CD">Congo, República Democrática del</option>
              <option value="KR">Corea</option>
              <option value="KP">Corea del Norte</option>
              <option value="CI">Costa de Marfíl</option>
              <option value="CR">Costa Rica</option>
              <option value="HR">Croacia (Hrvatska)</option>
              <option value="CU">Cuba</option>
              <option value="DK">Dinamarca</option>
              <option value="DJ">Djibouti</option>
              <option value="DM">Dominica</option>
              <option value="EC">Ecuador</option>
              <option value="EG">Egipto</option>
              <option value="SV">El Salvador</option>
              <option value="AE">Emiratos Árabes Unidos</option>
              <option value="ER">Eritrea</option>
              <option value="SI">Eslovenia</option>
              <option value="ES" selected>España</option>
              <option value="US">Estados Unidos</option>
              <option value="EE">Estonia</option>
              <option value="ET">Etiopía</option>
              <option value="FJ">Fiji</option>
              <option value="PH">Filipinas</option>
              <option value="FI">Finlandia</option>
              <option value="FR">Francia</option>
              <option value="GA">Gabón</option>
              <option value="GM">Gambia</option>
              <option value="GE">Georgia</option>
              <option value="GH">Ghana</option>
              <option value="GI">Gibraltar</option>
              <option value="GD">Granada</option>
              <option value="GR">Grecia</option>
              <option value="GL">Groenlandia</option>
              <option value="GP">Guadalupe</option>
              <option value="GU">Guam</option>
              <option value="GT">Guatemala</option>
              <option value="GY">Guayana</option>
              <option value="GF">Guayana Francesa</option>
              <option value="GN">Guinea</option>
              <option value="GQ">Guinea Ecuatorial</option>
              <option value="GW">Guinea-Bissau</option>
              <option value="HT">Haití</option>
              <option value="HN">Honduras</option>
              <option value="HU">Hungría</option>
              <option value="IN">India</option>
              <option value="ID">Indonesia</option>
              <option value="IQ">Irak</option>
              <option value="IR">Irán</option>
              <option value="IE">Irlanda</option>
              <option value="BV">Isla Bouvet</option>
              <option value="CX">Isla de Christmas</option>
              <option value="IS">Islandia</option>
              <option value="KY">Islas Caimán</option>
              <option value="CK">Islas Cook</option>
              <option value="CC">Islas de Cocos o Keeling</option>
              <option value="FO">Islas Faroe</option>
              <option value="HM">Islas Heard y McDonald</option>
              <option value="FK">Islas Malvinas</option>
              <option value="MP">Islas Marianas del Norte</option>
              <option value="MH">Islas Marshall</option>
              <option value="UM">Islas menores de Estados Unidos</option>
              <option value="PW">Islas Palau</option>
              <option value="SB">Islas Salomón</option>
              <option value="SJ">Islas Svalbard y Jan Mayen</option>
              <option value="TK">Islas Tokelau</option>
              <option value="TC">Islas Turks y Caicos</option>
              <option value="VI">Islas Vírgenes (EEUU)</option>
              <option value="VG">Islas Vírgenes (Reino Unido)</option>
              <option value="WF">Islas Wallis y Futuna</option>
              <option value="IL">Israel</option>
              <option value="IT">Italia</option>
              <option value="JM">Jamaica</option>
              <option value="JP">Japón</option>
              <option value="JO">Jordania</option>
              <option value="KZ">Kazajistán</option>
              <option value="KE">Kenia</option>
              <option value="KG">Kirguizistán</option>
              <option value="KI">Kiribati</option>
              <option value="KW">Kuwait</option>
              <option value="LA">Laos</option>
              <option value="LS">Lesotho</option>
              <option value="LV">Letonia</option>
              <option value="LB">Líbano</option>
              <option value="LR">Liberia</option>
              <option value="LY">Libia</option>
              <option value="LI">Liechtenstein</option>
              <option value="LT">Lituania</option>
              <option value="LU">Luxemburgo</option>
              <option value="MK">Macedonia, Ex-República Yugoslava de</option>
              <option value="MG">Madagascar</option>
              <option value="MY">Malasia</option>
              <option value="MW">Malawi</option>
              <option value="MV">Maldivas</option>
              <option value="ML">Malí</option>
              <option value="MT">Malta</option>
              <option value="MA">Marruecos</option>
              <option value="MQ">Martinica</option>
              <option value="MU">Mauricio</option>
              <option value="MR">Mauritania</option>
              <option value="YT">Mayotte</option>
              <option value="MX">México</option>
              <option value="FM">Micronesia</option>
              <option value="MD">Moldavia</option>
              <option value="MC">Mónaco</option>
              <option value="MN">Mongolia</option>
              <option value="MS">Montserrat</option>
              <option value="MZ">Mozambique</option>
              <option value="NA">Namibia</option>
              <option value="NR">Nauru</option>
              <option value="NP">Nepal</option>
              <option value="NI">Nicaragua</option>
              <option value="NE">Níger</option>
              <option value="NG">Nigeria</option>
              <option value="NU">Niue</option>
              <option value="NF">Norfolk</option>
              <option value="NO">Noruega</option>
              <option value="NC">Nueva Caledonia</option>
              <option value="NZ">Nueva Zelanda</option>
              <option value="OM">Omán</option>
              <option value="NL">Países Bajos</option>
              <option value="PA">Panamá</option>
              <option value="PG">Papúa Nueva Guinea</option>
              <option value="PK">Paquistán</option>
              <option value="PY">Paraguay</option>
              <option value="PE">Perú</option>
              <option value="PN">Pitcairn</option>
              <option value="PF">Polinesia Francesa</option>
              <option value="PL">Polonia</option>
              <option value="PT">Portugal</option>
              <option value="PR">Puerto Rico</option>
              <option value="QA">Qatar</option>
              <option value="UK">Reino Unido</option>
              <option value="CF">República Centroafricana</option>
              <option value="CZ">República Checa</option>
              <option value="ZA">República de Sudáfrica</option>
              <option value="DO">República Dominicana</option>
              <option value="SK">República Eslovaca</option>
              <option value="RE">Reunión</option>
              <option value="RW">Ruanda</option>
              <option value="RO">Rumania</option>
              <option value="RU">Rusia</option>
              <option value="EH">Sahara Occidental</option>
              <option value="KN">Saint Kitts y Nevis</option>
              <option value="WS">Samoa</option>
              <option value="AS">Samoa Americana</option>
              <option value="SM">San Marino</option>
              <option value="VC">San Vicente y Granadinas</option>
              <option value="SH">Santa Helena</option>
              <option value="LC">Santa Lucía</option>
              <option value="ST">Santo Tomé y Príncipe</option>
              <option value="SN">Senegal</option>
              <option value="SC">Seychelles</option>
              <option value="SL">Sierra Leona</option>
              <option value="SG">Singapur</option>
              <option value="SY">Siria</option>
              <option value="SO">Somalia</option>
              <option value="LK">Sri Lanka</option>
              <option value="PM">St Pierre y Miquelon</option>
              <option value="SZ">Suazilandia</option>
              <option value="SD">Sudán</option>
              <option value="SE">Suecia</option>
              <option value="CH">Suiza</option>
              <option value="SR">Surinam</option>
              <option value="TH">Tailandia</option>
              <option value="TW">Taiwán</option>
              <option value="TZ">Tanzania</option>
              <option value="TJ">Tayikistán</option>
              <option value="TF">Territorios franceses del Sur</option>
              <option value="TP">Timor Oriental</option>
              <option value="TG">Togo</option>
              <option value="TO">Tonga</option>
              <option value="TT">Trinidad y Tobago</option>
              <option value="TN">Túnez</option>
              <option value="TM">Turkmenistán</option>
              <option value="TR">Turquía</option>
              <option value="TV">Tuvalu</option>
              <option value="UA">Ucrania</option>
              <option value="UG">Uganda</option>
              <option value="UY">Uruguay</option>
              <option value="UZ">Uzbekistán</option>
              <option value="VU">Vanuatu</option>
              <option value="VE">Venezuela</option>
              <option value="VN">Vietnam</option>
              <option value="YE">Yemen</option>
              <option value="YU">Yugoslavia</option>
              <option value="ZM">Zambia</option>
              <option value="ZW">Zimbabue</option>
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
