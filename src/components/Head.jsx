import React from "react";
import "./Head.css";
import Logo from "../images/logo.svg";

const Head = () => {
  return (
    <div className='head'>
      <img src={Logo} alt='Ping' />
    </div>
  );
};

export default Head;
