import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import carrusel1 from "../../img/carrusel1.jpg";
import carrusel2 from "../../img/carrusel2.jpg";
import carrusel3 from "../../img/carrusel3.jpg";
import karateteacher from "../../img/karateteacher.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    //Carrusel
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={carrusel1}
              id="carrusel1"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 id="texto-carrusel-home">¡Comparte tu talento!</h1>
              <h5 id="descripcion-carrusel-home">
              ¿Tienes un talento especial que te encantaría compartir con el mundo? ¡No busques más!
              </h5>
              <Link to="/categories">
                <button
                  type="button"
                  className="btn btn-primary d-flex justify-content-start"
                >
                  Ver mas
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={carrusel2}
              id="carrusel2"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              {/* <h2 id="texto-carrusel-home">Second slide label</h2> */}
              <h2 id="descripcion-carrusel-home-slice2">
              Nuestra aplicación no solo es un lugar para compartir tu talento, ¡sino también para aprender de otros!
              </h2>
              <Link to="/categories">
                <button
                  type="button"
                  className="btn btn-primary d-flex justify-content-start"
                >
                  Ver mas
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={carrusel3}
              id="carrusel3"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 id="texto-carrusel-home">¿Qué esperas para comenzar?</h2>
              <h5 id="descripcion-carrusel-home">
                ¡Regístrate con nosotros!
              </h5>
              <Link to="/categories">
                <button
                  type="button"
                  className="btn btn-primary d-flex justify-content-start"
                >
                  Ver mas
                </button>
              </Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Heading 1 */}
      <div className="container-fluid bg-white m-0">
        <div className="container py-4">
          <div className="d-flex justify-content-start ">
            <div>
              <span className="fw-bold fs-1 d-flex justify-content-center">
                Los talentos mas buscados
              </span>
              <div className="row d-flex justify-content-between m-5">
                <div className="col-md-4 d-flex justify-content-center">
                  <i className="fa-solid fa-guitar fa-5x"></i>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                  <i className="fa-solid fa-camera fa-5x"></i>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                  <i className="fa-brands fa-js fa-5x"></i>
                </div>
              </div>
              <div className="row d-flex justify-content-between">
                <div className="col-md-4 mt-2 p-1">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    deleniti quis, autem harum corrupti numquam veniam eligendi
                    eos pariatur laudantium? Ex molestiae quia dolores ut illum.
                    Neque voluptatibus non adipisci. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Ipsum obcaecati fugit dicta
                    ipsam eaque quaerat quas, tempore perferendis aut nulla! Vel
                    soluta cupiditate quam praesentium qui voluptatem sequi
                    natus voluptate.
                  </p>
                </div>
                <div className="col-md-4 mt-2 p-1">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    deleniti quis, autem harum corrupti numquam veniam eligendi
                    eos pariatur laudantium? Ex molestiae quia dolores ut illum.
                    Neque voluptatibus non adipisci. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Ipsum obcaecati fugit dicta
                    ipsam eaque quaerat quas, tempore perferendis aut nulla! Vel
                    soluta cupiditate quam praesentium qui voluptatem sequi
                    natus voluptate.
                  </p>
                </div>
                <div className="col-md-4 mt-2 p-1">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    deleniti quis, autem harum corrupti numquam veniam eligendi
                    eos pariatur laudantium? Ex molestiae quia dolores ut illum.
                    Neque voluptatibus non adipisci. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Ipsum obcaecati fugit dicta
                    ipsam eaque quaerat quas, tempore perferendis aut nulla! Vel
                    soluta cupiditate quam praesentium qui voluptatem sequi
                    natus voluptate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Heading 2 */}
      <div className="container-fluid bg-secondary bg-opacity-25 m-0">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              <i className="fas fa-comment fa-5x" id="iconcoment"></i>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center mt-3">
              <h1>"El momento de aprender es ahora"</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center mt-5">
              <img
                src={karateteacher}
                className="rounded-circle rounded-2"
                id="karateteacher"
                alt="..."
              />
            </div>
            <div className="col-md-12 d-flex justify-content-center mt-3">
              <i className="fas fa-star fa-2x" id="starteacher"></i>
              <i className="fas fa-star fa-2x" id="starteacher"></i>
              <i className="fas fa-star fa-2x" id="starteacher"></i>
              <i className="fas fa-star fa-2x" id="starteacher"></i>
              <i className="fas fa-star fa-2x" id="starteacher"></i>
            </div>
            <div className="col-md-12 d-flex flex-column mt-3">
              <div className="d-flex justify-content-center">
                <h2> Maria Morales</h2>
              </div>
              <div className="d-flex justify-content-center">
                <h5> Caracas, Venezuela</h5>
              </div>
              <div className="d-flex justify-content-center">
                <h3> Karate Teacher</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Heading3 */}
      <div className="container-fluid bg-white m-0">
        <div className="container py-4">
          <div className="d-flex justify-content-start ">
            <div>
              <span className="fw-bold fs-1 d-flex justify-content-center">
                Testimonios
              </span>
              <div className="row d-flex justify-content-between mt-5">
                <div className="col-md-4 d-flex justify-content-center">
                  <i className="fas fa-user-circle fa-5x"></i>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                  <i className="fas fa-user-circle fa-5x"></i>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                  <i className="fas fa-user-circle fa-5x"></i>
                </div>
              </div>
              <div className="row d-flex justify-content-between mt-2">
                <div className="col-md-4 mt-2 p-1">
                  <div className="d-flex justify-content-center">
                    <h2>Samuel Carmona</h2>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    deleniti quis, autem harum corrupti numquam veniam eligendi
                    eos pariatur laudantium? Ex molestiae quia dolores ut illum.
                    Neque voluptatibus non adipisci. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Ipsum obcaecati fugit dicta
                    ipsam eaque quaerat quas, tempore perferendis aut nulla! Vel
                    soluta cupiditate quam praesentium qui voluptatem sequi
                    natus voluptate.
                  </p>
                </div>
                <div className="col-md-4 mt-2 p-1">
                  <div className="d-flex justify-content-center">
                    <h2>Alexander De Matteo</h2>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    deleniti quis, autem harum corrupti numquam veniam eligendi
                    eos pariatur laudantium? Ex molestiae quia dolores ut illum.
                    Neque voluptatibus non adipisci. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Ipsum obcaecati fugit dicta
                    ipsam eaque quaerat quas, tempore perferendis aut nulla! Vel
                    soluta cupiditate quam praesentium qui voluptatem sequi
                    natus voluptate.
                  </p>
                </div>
                <div className="col-md-4 mt-2 p-1">
                  <div className="d-flex justify-content-center">
                    <h2>Samuel Carmona</h2>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    deleniti quis, autem harum corrupti numquam veniam eligendi
                    eos pariatur laudantium? Ex molestiae quia dolores ut illum.
                    Neque voluptatibus non adipisci. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Ipsum obcaecati fugit dicta
                    ipsam eaque quaerat quas, tempore perferendis aut nulla! Vel
                    soluta cupiditate quam praesentium qui voluptatem sequi
                    natus voluptate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Heading4 */}
      <div className="container-fluid bg-secondary bg-opacity-25 m-0">
        <div className="">
          <div className="row d-flex">
            <div className="col-md-6 d-flex justify-content-start m-0 p-0">
              <img
                src={karateteacher}
                id="knowthat"
                className="float-start"
                alt="..."
              />
            </div>
            <div className="col-md-6 p-2 d-flex flex-column">
              <div className="p-2 d-flex justify-content-center">
                <h1>Sabias que...?</h1>
              </div>
              <div className="p-2 d-flex justify-content-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  deleniti quis, autem harum corrupti numquam veniam eligendi
                  eos pariatur laudantium? Ex molestiae quia dolores ut illum.
                  Neque voluptatibus non adipisci. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Ipsum obcaecati fugit dicta
                  ipsam eaque quaerat quas, tempore perferendis aut nulla! Vel
                  soluta cupiditate quam praesentium qui voluptatem sequi natus
                  voluptateLorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Ad deleniti quis, autem harum corrupti numquam veniam
                  eligendi eos pariatur laudantium? Ex molestiae quia dolores ut
                  illum. Neque voluptatibus non adipisci. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Ipsum obcaecati fugit dicta
                  ipsam eaque quaerat quas, tempore perferendis aut nulla! Vel
                  soluta cupiditate quam praesentium qui voluptatem sequi natus
                  voluptate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Heading5 */}
      <div className="container-fluid bg-white m-0">
        <div className="container py-4 d-flex flex-column">
          <div className="d-flex justify-content-center">
            <h1>¿Estas listo/a para registrarte?</h1>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <Link to="/registro-1">
              <span className="btn btn-primary btn-lg" href="#" role="button">
                Vamos!
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <div className="alert alert-info">
          {store.message ||
            "Loading message from the backend (make sure your python backend is running)..."}
        </div>
      </div>
    </div>
  );
};
