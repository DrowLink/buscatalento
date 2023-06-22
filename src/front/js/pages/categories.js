import React from "react";
import "../../styles/categories.css"
import { Link } from "react-router-dom";
import { CategoriesSelect } from "../component/threecategories";

export const Categories = () => {
    return(
        <div>
            <div className="container-fluid bg-white bg-opacity-25 m-0">
    		    <div className="container py-4">
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-around">
                            <h1>Selecciona las categorias por las que te gustaria empezar</h1>
                        </div>
                    </div>
                    <CategoriesSelect/>
			    </div>
                <div className="d-flex justify-content-center">
                    <Link to="/resultados">
                    <button
                    id="confirmation-button-registro"
                    type="button"
                    className="btn btn"
                     >
                    Continuar
                    </button>
                    </Link>
                </div>
		    </div>
        </div>
    )
}