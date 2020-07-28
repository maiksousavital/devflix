import React from "react";
import Logo from "../../assets/Images/devflix.png";
import Button from "../Button";

//import ButtonLink from "./components/ButtonLink";

import "./Menu.css";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="DevFlix Logo" />
      </a>
      <Button as="a" className="ButtonLink" href="/">
        New Video
      </Button>
    </nav>
  );
}

export default Menu;
