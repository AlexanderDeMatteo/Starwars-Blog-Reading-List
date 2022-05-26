import React from "react";
import "../../styles/navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <ul id="box" className="nav nav-pills">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Star Wars
        </Link>
      </li>
      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          tyoe="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites <span className="dot">{store.favorites.length}</span>
        </button>
        <ul
          id="navDropDown"
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="dropdownMenuButton1"
        >
          {store.favorites &&
            store.favorites.map((favorite, index) => {
              return (
                <li className="d-flex align-item-center" key={index}>
                  <link to={favorite.url} className="dropdown-item">
                    {favorite.favname}
                  </link>
                  <i
                    className="far fa-trash-alt pe-2"
                    onClick={(e) => {
                      actions.removeFavorite(index);
                    }}
                  />
                </li>
              );
            })}
        </ul>
      </div>
    </ul>
  );
};
