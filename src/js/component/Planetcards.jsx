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

            <div className="row" id="overflow">
                {store.planetas.map((planet, index)=>{
                    let id = planet.url.replace("https://swapi.dev/api/planets/","")
                    let id2 = id.replace("/","")
                    return <Card title={planet.name} id={id2} key={planet.name} index={id} type="planets" caracteristica1={"Population:"+ " " + planet.population} caracteristica2={"Terrain:"+ " " + planet.terrain} caracteristica3={"Climate:" + " " + planet.climate} itemUrl={planet.url} colSpacing="col-4" />;
                    })}
            </div>

    );
};
