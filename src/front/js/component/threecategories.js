import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/categories.css"
import { Context } from "../store/appContext"

export const CategoriesSelect = () =>{

    const{
        store, actions
    } = useContext(Context)

    const [selectedImages, setSelectedImages]= useState([]);

    const toggleSelection = (imageId) =>{
        if (selectedImages.includes(imageId)) {
            setSelectedImages(selectedImages.filter((id) => id !== imageId));
          } else {
            setSelectedImages([...selectedImages, imageId]);
          }
        };

    const isImageSelected = (imageId) => {
        return selectedImages.includes(imageId);
      };
    
    return(
        <>
            <div className="row d-flex justify-content-around mt-5">
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="d-flex flex-column">
                        <h3 className="align-self-center mb-4"> Deporte</h3>
                        <img 
                        src="https://wellaggio.com/wp-content/uploads/2015/09/la-importancia-de-las-imagenes-en-el-dise%C3%B1o-web1.jpg" 
                        id="categories" 
                        className={`rounded-circle ${isImageSelected(1) ? 'selected img-thumbnail' : 'img-thumbnail'}`} 
                        alt="..." 
                        onClick={() => {
                            toggleSelection(1)
                            actions.guardarcategoria("Deporte")
                        }}/>

                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="d-flex flex-column">
                        <h3 className="align-self-center mb-4"> Tecnologia </h3>
                    <img 
                    src="https://wellaggio.com/wp-content/uploads/2015/09/la-importancia-de-las-imagenes-en-el-dise%C3%B1o-web1.jpg" 
                    id="categories" 
                    className={`rounded-circle ${isImageSelected(2) ? 'selected img-thumbnail' : 'img-thumbnail'}`} 
                    alt="..." 
                    onClick={() => {
                        toggleSelection(2)
                        actions.guardarcategoria("Tecnologia")
                    }}/>
                </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="d-flex flex-column">
                        <h3 className="align-self-center mb-4"> Música </h3>
                        <img 
                        src="https://wellaggio.com/wp-content/uploads/2015/09/la-importancia-de-las-imagenes-en-el-dise%C3%B1o-web1.jpg" 
                        id="categories" 
                        className={`rounded-circle ${isImageSelected(3) ? 'selected img-thumbnail' : 'img-thumbnail'}`} 
                        alt="..." 
                        onClick={() => {
                            toggleSelection(3)
                            actions.guardarcategoria("Música")
                        }}/>
                    </div>
                </div>  
            </div>
        
        </>
    )
}