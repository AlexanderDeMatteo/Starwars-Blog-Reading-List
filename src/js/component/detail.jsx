import React, { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/detail.css"

export const Detail = () =>{
const [detail, setDetail] = useState({})
let { type, id } = useParams()
const {action, store} = useContext(Context)


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

        <div className = "col-6"> 
        <p>{detail.name}</p>

        </div>
    </>
);
};