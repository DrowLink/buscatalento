import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/categories.css"

export const CategoriesSelect = () =>{

    const [isSelected, setIsSelected]= useState(false);

    const toggleSelection = () =>{
        setIsSelected(!isSelected)
    }

    const imageClass = isSelected ? 'selected' : '';

    return(
        <>
            <div className="row d-flex justify-content-around mt-5">
                <div className="col-md-4 d-flex justify-content-center" onClick={toggleSelection}>
                    <img src="https://wellaggio.com/wp-content/uploads/2015/09/la-importancia-de-las-imagenes-en-el-dise%C3%B1o-web1.jpg" id="categories" className="rounded-circle" alt="..."  value={imageClass}/>
                </div>
                <div className="col-md-4 d-flex justify-content-center" onClick={toggleSelection}>
                    <img src="https://wellaggio.com/wp-content/uploads/2015/09/la-importancia-de-las-imagenes-en-el-dise%C3%B1o-web1.jpg" id="categories" className="rounded-circle" alt="..."  value={imageClass}/>
                </div>
                <div className="col-md-4 d-flex justify-content-center" onClick={toggleSelection}>
                    <img src="https://wellaggio.com/wp-content/uploads/2015/09/la-importancia-de-las-imagenes-en-el-dise%C3%B1o-web1.jpg" id="categories" className="rounded-circle" alt="..."  value={imageClass}/>
                </div>  
            </div>
        
        </>
    )
}