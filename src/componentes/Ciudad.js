import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import "../estilos/Ciudad.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSnowflake,
  faSun,
  faCloudRain,
  faSnowman,
  faTemperatureHigh,
} from "@fortawesome/free-solid-svg-icons";

const Ciudad = () => {
  const ciudad = useFetch(
    "https://raw.githubusercontent.com/michaelx/climate/master/climate.json"
  );
  let { id } = useParams();

  let months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  return (
    <main>
      {ciudad
        .filter((info) => info.city === id)
        .map((info, i) => (
          <div
            key={i}
            className="CONTENEDOR_TITLES"
            style={{ marginBottom: "50%" }}
          >
            <h1 id="CITY_TITLE" style={{ marginBottom: "55px" }}>
              {info.city}
            </h1>
            <h2 id="COUNTRY_TITLE">{info.country}</h2>
            <div id="MONTH_TITLE">
              {months.map((mes, j) => (
                <div key={j} className="BOXTWO" style={{ maxWidth: "20rem" }}>
                  <h2>{mes}</h2>
                  <br />
                  <h2>
                    <FontAwesomeIcon
                      icon={faSnowflake}
                      style={{ color: "#33FCFF " }}
                    />
                    {info.monthlyAvg[j].low}°
                    <FontAwesomeIcon
                      icon={faTemperatureHigh}
                      style={{ color: "red" }}
                    />
                    {info.monthlyAvg[j].high}°
                  </h2>

                  <h3>
                    Lluvia: {info.monthlyAvg[j].rainfall}{" "}
                    <FontAwesomeIcon
                      icon={faCloudRain}
                      style={{ color: "blue" }}
                    />
                  </h3>
                  <h3>
                    Nieve: {info.monthlyAvg[j].snowDays}{" "}
                    <FontAwesomeIcon
                      icon={faSnowman}
                      style={{ color: "cyan" }}
                    />
                  </h3>
                  <h3>
                    Dias secos: {info.monthlyAvg[j].dryDays}{" "}
                    <FontAwesomeIcon icon={faSun} style={{ color: "yellow" }} />
                  </h3>
                </div>
              ))}
            </div>
          </div>
        ))}
    </main>
  );
};
export default Ciudad;
