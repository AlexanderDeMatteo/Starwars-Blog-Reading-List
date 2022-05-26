import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Card = ({title, type, index, itemUrl, caracteristica1, caracteristica2, caracteristica3, colSpacing = "col-3" } ) => {
	const { store, actions } = useContext(Context);
  console.log(title)
  let url = `/detail/${type}/${index}`;
  return (
    <div className={colSpacing}>
		<div className="card" style={{width: "18rem"}}>
  <img src="data:image/jpeg;base64,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" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
      <ul>
        <li>{caracteristica1}</li>
        <li>{caracteristica2}</li>
        <li>{caracteristica3}</li>
      </ul>
    <Link to={`/detail/${type}/${index}`} className="btn btn-primary">learn more!</Link> 
    <button
          type="button"
          onClick={event =>{
            
            if (
              store && store.favorites.find((favorite,index) => {
                return favorite.url === url;
              })
            ) {
              let index = store.favorites.indexOf(store.favorites.find((favorite, index) => {
                      return favorite.url === url;
                    })
              );
              actions.removeFavorite(index);
            } else {
              actions.addToFavorite(title,url);
            }
          }} 
          className="btn border border-warning">
          {store &&
              store.favorites.find((favorite, index) => {
                  return favorite.url === url;
              }) ?(
                <i className="fas fa-heart text-warning" />
              ) : (
                  <i className="far fa-heart text-warning" />
              )}
          </button>
  </div>
  </div>
  </div>

);
}

Card.propTypes = {
  title: PropTypes.string,
	colSpacing: PropTypes.string,
  index: PropTypes.number,
  type: PropTypes.string,
  caracteristica1: PropTypes.string,
  caracteristica2: PropTypes.string,
  caracteristica3: PropTypes.string,
  PlanetUrl: PropTypes.string,
};
