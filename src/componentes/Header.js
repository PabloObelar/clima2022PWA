import React from "react";
import "../estilos/Header.css";
import { NavLink } from "react-router-dom";
import useFetch from "../useFetch";
import loguito from "../img/loguito.png";
import mundo from "../img/mundo.png";

const Header = () => {
  const cities = useFetch(
    "https://raw.githubusercontent.com/michaelx/climate/master/climate.json"
  ).sort((a, b) => a.country.localeCompare(b.country));

  return (
    <main>
      <header>
        <NavLink to={"/"} style={{ textDecoration: "none" }}>
          <img id="logo" src={loguito} alt="WEATHER_LOGO" width="100" />
        </NavLink>
        <div id="MAIN_TITLE">
          <h1>
            El tiempo en {cities.length} ciudades del
            <img id="mundo" src={mundo} alt="mundo" width="100" />
          </h1>
        </div>
      </header>
    </main>
  );
};

export default Header;
