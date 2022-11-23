import React from "react";
import { NavLink } from "react-router-dom";
import useFetch from "../useFetch";
import "../estilos/Ciudades.css";

const Ciudades = () => {
  const cities = useFetch(
    "https://raw.githubusercontent.com/michaelx/climate/master/climate.json"
  ).sort((a, b) => a.country.localeCompare(b.country));

  return (
    <main id="HOME">
      {cities.map((city, i) => (
        <div key={i} className="CARD">
          <NavLink to={"/ciudad/" + city.city} className="selected">
            <h1>{city.city}</h1>
            <h2>{city.country}</h2>
          </NavLink>
        </div>
      ))}
    </main>
  );
};
export default Ciudades;
