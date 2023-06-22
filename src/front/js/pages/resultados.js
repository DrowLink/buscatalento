import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/resultados.css";
import { CardPersonal } from "../component/cardPersonal.js";
import { Context } from "../store/appContext";


export const Resultados = () => {
  
  const { 
    store, actions 
  } = useContext(Context);

  useEffect(()=>{
    actions.retornarcategoria()
  }, [])

  return (
    <>
      <CardPersonal/>
      {
        store.categorias.length > 0 &&
        store.categorias.map((categoriaSeleccionada) => <CardPersonal item={categoriaSeleccionada} key={categoriaSeleccionada.id} />)
      }
    </>

    

  );
};
