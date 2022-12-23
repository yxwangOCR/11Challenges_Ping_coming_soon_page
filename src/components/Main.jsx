import React from "react";
import "./Main.css";
import Dashboard from "../images/illustration-dashboard.png";

const Main = () => {
  return (
    <div className='main'>
      <div className='input-wrapper'>
        <h1>
          <span>We are launching</span>
          soon!
        </h1>
        <p>Subscribe and get notified</p>
        <div className='input-block'>
          <div className='input-items'>
            <input type='email' required />
            <div className='error'>Please provide a valid email address</div>
          </div>
          <button>Notify Me</button>
        </div>
      </div>
      <img src={Dashboard} alt='Dashboard' />
    </div>
  );
};

export default Main;
