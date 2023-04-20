import React from "react";
import logo from "../components/netflix.png";
import "../components/Header.css";

const Header = () => {
  return (
    <div className="container"> <div className="content">
      <header className="head">
        <div className="logo">
          <img src={logo} alt="logo" width="175px" height="80px" />
        </div>
        <div className="header-right">
          <div className="select">
          <select >
         
            <option>
              English
            </option>
            <option>
              Hindi
            </option>
          </select>
          </div>

          <button className="sign-in">Sign In</button>
        </div>
      </header>

      <main className="main">
        <div className="main--des">
          <h1>Unlimited movies, TV shows and more. </h1>
          <p className="main-para">
          Watch anywhere. Cancel anytime.
          </p>
          <label>Ready to watch? Enter your email to create or restart your membership.</label>
          
          <div className="get-started" >
          <input type="text"  placeholder="Email Address"></input>
          <button>Get Started &gt;</button>
          </div>
          
        </div>
      </main>
      </div>
    </div>
  );
};

export default Header;
