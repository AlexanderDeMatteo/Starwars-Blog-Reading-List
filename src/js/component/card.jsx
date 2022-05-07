import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


export const Card = ({title, type, index, colSpacing = "col-3" } ) => {
	return (
    <div className={colSpacing}>
		<div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to={`/detail/${type}/${index}`} className="btn btn-primary">learn more!</Link> <a id= "corazon" href="#" className="btn btn-primary">♥</a>
  </div>
  </div>
  </div>

);
}

Card.propTypes = {
  title: PropTypes.string,
	colSpacing: PropTypes.string,
  index: PropTypes.number,
  type: PropTypes.string
};
