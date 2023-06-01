import React from "react";
import { Link } from "react-router-dom";

export const Login =() =>{
    return(
        <div className="text-center mt-5">
            <p>
            Hola soy el Login                
            </p>
            <Link to= "/">
                <span className="btn btn-primary btn-lg m-3" href="#" role="button">
                    Go to Home
                </span>
            </Link>
        </div>
        
    )
}