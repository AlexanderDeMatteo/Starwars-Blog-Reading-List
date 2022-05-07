import React, {useState, useContext, useEffect} from "react";
import { Card } from "../component/card.jsx"
import { Context } from "../store/appContext.js";

export const Planetcards = () => {
    const [addPlanetsName, setAddPlanetsName] = useState("");
    const [planetNames, setPlanetName] = useState([]);
    const {store,actions} = useContext(Context)

    // useEffect(()=>{actions.getPlanets()},[])


    const handlePlanet = (e) =>{
        if(e.key === "Enter"){
            setPlanetName([...planetNames, addPlanetsName]);
        }
    }
    return(

        <div className="container-fluid">
            <input 
            onChange={(e)=>setAddPlanetsName(e.target.value)} 
            onKeyDown={(e)=> handlePlanet(e)}
            type="text"
            placeholder="Add a new Planet"
            />
            <div className="row">
                {store.planetas.map((planet, index)=>{
                    return <Card title={planet.name} index={index} type="planetas" colSpacing="col-4" />;
                    })}
            </div>
        </div>

    );
};
