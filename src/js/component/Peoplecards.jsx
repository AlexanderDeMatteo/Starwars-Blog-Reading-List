import React, {useState, useContext, useEffect} from "react";
import { Card } from "../component/card.jsx"
import { Context } from "../store/appContext.js";

export const Peoplecards = () => {
    const [addPeopleName, setAddPeopleName] = useState("");
    const [peopleNames, setPeopleName] = useState([]);
    const {store,actions} = useContext(Context)

    // useEffect(()=>{actions.getPeople()},[])


    const handlePeoples = (e) =>{
        if(e.key === "Enter"){
            setPeopleName([...peopleNames, addPeopleName]);
        }
    }
    return(

        <div className="container-fluid">
            <input 
            onChange={(e)=>setAddPeopleName(e.target.value)} 
            onKeyDown={(e)=> handlePeoples(e)}
            type="text"
            placeholder="Add a new People"
            />
            <div className="row">
                {store.personas.map((people, index)=>{
                    return <Card title={people.name} index={index} type="personas" colSpacing="col-4" />;
                    })}
            </div>
        </div>

    );
};

