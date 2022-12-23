import React from "react";
import "./Head.css";
import Logo from "../images/logo.svg";

const Head = () => {
  return (
    <header className='head'>
      <img src={Logo} alt='Ping' />
    </header>
  );
};

export default Head;
