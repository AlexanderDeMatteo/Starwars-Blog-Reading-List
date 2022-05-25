import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card.jsx"
import PropTypes from "prop-types";
import { Peoplecards } from "../component/Peoplecards.jsx";
import { Planetcards } from "../component/Planetcards.jsx";



export const Home = () => {
	return (
		<>
		<div className = "fondo">
		<h1>personajes</h1>
	<div>
		<Peoplecards	/>
	</div>
		<h1>planetas</h1>
	<div>
		<Planetcards/>
	</div>
	</div>
		</>
	);
};

Card.propTypes = {
	colSpacing: PropTypes.string
};