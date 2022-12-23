import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='icons'>
        <li>
          <a href='https://fr-ca.facebook.com/' target='_blank'>
            <i className='fa-brands fa-facebook-f'></i>
            <span className='sr-only'>Follow us on Facebook</span>
          </a>
        </li>
        <li>
          <a href='https://twitter.com/' target='_blank'>
            <i className='fa-brands fa-twitter'></i>
            <span className='sr-only'>Follow us on Twitter</span>
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/?hl=fr' target='_blank'>
            <i className='fa-brands fa-instagram'></i>
            <span className='sr-only'>Follow us on Instagram</span>
          </a>
        </li>
      </ul>
      <p>&copy; Copyright Ping. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
