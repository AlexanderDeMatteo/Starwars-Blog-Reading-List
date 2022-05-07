import React, { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Detail = () =>{
const [detail, setDetail] = useState({})
let { type, id } = useParams()
const {action, store} = useContext(Context)
useEffect(() => {
let array = [...store[`${type}`]]
console.log(array)
let element= array.filter((value,index)=>index==id);
setDetail(element[0])
 
}, [])


return(
    <>
    
    </>
);
};