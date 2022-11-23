import React from "react";
import "../estilos/Footer.css";
import logo from "../img/github.png";

function Footer() {
  return (
    <footer>
      <div className="git">
        <img
          className="loguito"
          src={logo}
          alt="github"
          width="25px"
          height="25px"
        />
      </div>
      <small>
        <a
          href="https://github.com/PabloObelar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web desarrollada por Pablo Obelar - Noviembre 2022
        </a>
      </small>
    </footer>
  );
}

export default Footer;
