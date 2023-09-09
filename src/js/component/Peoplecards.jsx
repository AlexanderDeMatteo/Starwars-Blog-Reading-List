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

            <div className="row" id="overflow">
                {store.personas.map((people, index)=>{
                    let id = people.url.replace("https://swapi.dev/api/people/","")
                    let id2 = id.replace("/","")
                    return <Card key={people.name} title={people.name} index={id} id={id2} caracteristica1={"Gender:"+ " " + people.gender} caracteristica2={"Hair color:"+ " " + people.hair_color} caracteristica3={"Eye color:" + " " + people.eye_color} type="people" itemUrl={people.url} colSpacing="col-4" />;
                    })}
            </div>

    );
};

