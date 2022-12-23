import React from "react";
import "./Main.css";
import Dashboard from "../images/illustration-dashboard.png";
import { useState } from "react";

const Main = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleEmail = (e) => {
    const rgExp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    e.preventDefault();
    if (email === "") {
      setError("Whoops! It looks like you forgot to add your email");
    } else if (!email.includes("@")) {
      setError("Please provide a valid email address");
    } else if (!rgExp.test(email)) {
      setError("Please provide a valid email address");
    } else {
      setError(false);
      setEmail("");
    }
  };

  return (
    <main className='main'>
      <div className='input-wrapper'>
        <h1>
          <span>We are launching</span>
          soon!
        </h1>
        <p>Subscribe and get notified</p>
        <form className='input-block' onSubmit={handleEmail}>
          <div className='input-items'>
            <input
              name={email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type={email}
              className={error ? "error-border" : "no-error-border"}
            />
            <label className={error ? "error" : "no-error"} for={email}>
              {error}
            </label>
          </div>
          <button>Notify Me</button>
        </form>
      </div>
      <img src={Dashboard} alt='Dashboard' />
    </main>
  );
};

export default Main;
