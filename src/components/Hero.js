import React from "react";
import tv from "./tv.png";
import "../css/Hero.css";
import mobile from "./mobile.jpg";
import kids from "./kids.png";
import tele from "./tele.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="div-one">
        <span>
          <h1>Enjoy on your TV.</h1>
          <p>
            Watch on smart TVs,PlayStation, Xbox,Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </span>
        <img src={tv} alt="" />
      </div>
      <div className="div-two">
        <img src={mobile} alt="" />
        <span>
          <h1>Download your shows to watch offline.</h1>
          <p>Save your favourites easily and always have something to watch.</p>
        </span>
      </div>
      <div className="div-three">
        <span>
          <h1>Watch everywhere.</h1>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </span>
        <img src={tele} alt="" />
      </div>
      <div className="div-four">
        <img src={kids} alt="" />
        <span>
          <h1>Create profiles for children.</h1>
          <p>
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </span>
      </div>
    </div>
  );
};

export default Hero;
