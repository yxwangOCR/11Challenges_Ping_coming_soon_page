import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='icons'>
        <i className='fa-brands fa-facebook-f'></i>
        <i className='fa-brands fa-twitter'></i>
        <i className='fa-brands fa-instagram'></i>
      </div>
      <p>&copy; Copyright Ping. All rights reserved.</p>
    </div>
  );
};

export default Footer;
