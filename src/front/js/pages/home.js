import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (

	<div>
		<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.pixabay.com/photo/2017/10/17/16/10/fantasy-2861107_1280.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
		<button type="button" className="btn btn-outline-info d-flex justify-content-start">Ver mas</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2017/10/17/16/10/fantasy-2861107_1280.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
		<button type="button" className="btn btn-outline-info d-flex justify-content-start">Ver mas</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2017/10/17/16/10/fantasy-2861107_1280.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
		<button type="button" className="btn btn-outline-info d-flex justify-content-start">Ver mas</button>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="container-fluid bg-white m-0">
    <div className="container py-4">
        <div  className="d-flex justify-content-start ">
            <div>
                <span className="fw-bold fs-1 d-flex justify-content-center">Los talentos mas buscados</span>
				<div className="row d-flex justify-content-between">
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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deleniti quis, autem harum corrupti numquam veniam eligendi eos pariatur laudantium? Ex molestiae quia dolores ut illum. Neque voluptatibus non adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum obcaecati fugit dicta ipsam eaque quaerat quas, tempore perferendis aut nulla! Vel soluta cupiditate quam praesentium qui voluptatem sequi natus voluptate.</p>
					</div>
					<div className="col-md-4 mt-2 p-1">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deleniti quis, autem harum corrupti numquam veniam eligendi eos pariatur laudantium? Ex molestiae quia dolores ut illum. Neque voluptatibus non adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum obcaecati fugit dicta ipsam eaque quaerat quas, tempore perferendis aut nulla! Vel soluta cupiditate quam praesentium qui voluptatem sequi natus voluptate.</p>
					</div>
					<div className="col-md-4 mt-2 p-1">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deleniti quis, autem harum corrupti numquam veniam eligendi eos pariatur laudantium? Ex molestiae quia dolores ut illum. Neque voluptatibus non adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum obcaecati fugit dicta ipsam eaque quaerat quas, tempore perferendis aut nulla! Vel soluta cupiditate quam praesentium qui voluptatem sequi natus voluptate.</p>
					</div>
				</div>
            </div>
		</div>
	</div>
</div>
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://start.4geeksacademy.com/starters/react-flask">
					Read documentation
				</a>
			</p>
			<Link to= "/login">
			<span className="btn btn-primary btn-lg" href="#" role="button">
					Go to login
				</span>
			</Link>
			<Link to= "/profile">
			<span className="btn btn-primary btn-lg m-3" href="#" role="button">
					Go to Profile
				</span>
			</Link>
		</div>
	</div>
	);
};
