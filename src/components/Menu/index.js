import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/Images/devflix.png";
import Button from "../Button";

//import ButtonLink from "./components/ButtonLink";

import "./Menu.css";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="DevFlix Logo" />
      </Link>
      <Button as={Link} className="ButtonLink" to="/add/newvideo">
        New Video
      </Button>
    </nav>
  );
}

export default Menu;
