import React, {useState, useContext, useEffect} from "react";
import { Card } from "./card.jsx"
import { Context } from "../store/appContext.js";
import { Planetcards } from "./Planetcards.jsx";

export const Vehiclecards = () => {
    const [addVehicleName, setAddPeopleName] = useState("");
    const [vehicleNames, setVehicleName] = useState([]);
    const {store,actions} = useContext(Context)

    // useEffect(()=>{actions.getPeople()},[])


    const handleVehicles = (e) =>{
        if(e.key === "Enter"){
            setVehicleName([...vehicleNames, addVehicleName]);
        }
    }
    return(

            <div className="row" id="overflow">
                {store.vehiculos.map((vehicle, index)=>{
                    let id = vehicle.url.replace("https://swapi.dev/api/vehicles/","")
                    let id2 = id.replace("/","")
                    return <Card key={vehicle.name} id={id2} title={vehicle.name} index={id} caracteristica1={"cargo-capacity:"+ " " + vehicle.cargo_capacity} caracteristica2={"models:"+ " " + vehicle.model} caracteristica3={"cost in credits:" + " " + vehicle.cost_in_credits} type="vehicles" itemUrl={vehicle.url} colSpacing="col-4" />;
                    })}
            </div>

    );
};

