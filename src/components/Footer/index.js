import React from "react";
import { FooterBase } from "./styles";
import Logo from "../../assets/Images/devflix.png";

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={Logo} alt="DevFlix Logo" />
      </a>
      <p>All rights reserved.</p>
    </FooterBase>
  );
}

export default Footer;
