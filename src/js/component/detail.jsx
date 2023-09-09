import React, { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/detail.css"

export const Detail = () =>{
const [detail, setDetail] = useState({})
let { type, id} = useParams()
const {action, store} = useContext(Context)
const [imagenUrl, setImagenUrl] = useState(
    `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
  );


const getpeopleinfo= async (type,id) => {
    let response = await fetch(`${store.URL_BASE}/${type}/${id}`);
    if (response.ok){
        const body = await response.json()
        setDetail(body)
    }
    
}

useEffect(() => {
//     let array = [...store[`${type}`]]
//     let element= array.filter((value,index)=>index==id);
//     setDetail(element[0])
    if(type&&id){
        getpeopleinfo(type,id)
    }
}, [type,id])



return(
    <>
        <div className="row flex-wrap" align='center'>
            <div className = "col-8" id="imagen_perfil"> 
                <img id="imagen" src={imagenUrl} className="img-fluid" alt="" />
            </div>
             <div className = "col-4">
                <p id= "nombre">{detail.name}</p>
                <p>aqui se encuentra de descripcion del elemento seleccionado
                aqui se encuentra de descripcion del elemento seleccionado
                aqui se encuentra de descripcion del elemento seleccionado
                aqui se encuentra de descripcion del elemento seleccionado
                aqui se encuentra de descripcion del elemento seleccionado
                aqui se encuentra de descripcion del elemento seleccionado
                aqui se encuentra de descripcion del elemento seleccionado
                aqui se encuentra de descripcion del elemento seleccionado
                aqui se encuentra de descripcion del elemento seleccionado
                aqui se encuentra de descripcion del elemento seleccionado
                </p>
            </div>
            <div className="linea"></div>
            {type ==="people" ? <div className="row" id="caracteristicas">
            <div className = "col-2">{"birth-year" + " " + detail.birth_year}</div>
            <div className = "col-2">{"Gender" + " " + detail.gender}</div>
            <div className = "col-2">{"Height" + " " + detail.height}</div>
            <div className = "col-2">{"Skin-color" + " " + detail.skin_color}</div>
            <div className = "col-2">{"Eye-color" + " " + detail.eye_color}</div>
            </div> : type === "planets" ? <div className="row" id="caracteristicas">
            <div className = "col-2">{"climate" + " " + detail.climate}</div>
            <div className = "col-2">{"Diameter" + " " + detail.diameter}</div>
            <div className = "col-2">{"Gravity" + " " + detail.gravity}</div>
            <div className = "col-2">{"Orbital-period" + " " + detail.orbital_period}</div>
            <div className = "col-2">{"Population" + " " + detail.population}</div></div>
            : <div className="row" id="caracteristicas">
            <div className = "col-2">{"Model" + " " + detail.model}</div>
            <div className = "col-2">{"Cargo capacity" + " " + detail.cargo_capacity}</div>
            <div className = "col-2">{"Crew" + " " + detail.crew}</div>
            <div className = "col-2">{"passengers" + " " + detail.passengers}</div>
            <div className = "col-2">{"populatiomax atmosphering speedn" + " " + detail.max_atmosphering_speed}</div></div>  }
            

        </div>
    </>
);
};