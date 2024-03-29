import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card.jsx"
import PropTypes from "prop-types";
import { Peoplecards } from "../component/Peoplecards.jsx";
import { Planetcards } from "../component/Planetcards.jsx";
import { Vehiclecards } from "../component/Vehiclecards.jsx";


export const Home = () => {
	return (
		<>
		<div className = "fondo">
		<h1 className="fondo_principal">personajes</h1>
	<div>
		<Peoplecards/>
	</div>
		<h1 className="fondo_2">planetas</h1>
	<div>
		<Planetcards/>
	</div>
		<h1 className="fondo_2">vehiculos</h1>
	<div>
		<Vehiclecards/>
	</div>
	</div>
		</>
	);
};

Card.propTypes = {
	colSpacing: PropTypes.string
};