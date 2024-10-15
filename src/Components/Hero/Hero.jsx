import "./Hero.css";
import { HiArrowLongRight } from "react-icons/hi2";

import React from "react";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure Better Education</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <button className="btn">
          Explore more <HiArrowLongRight className="right-arrow" />{" "}
        </button>
      </div>
    </div>
  );
};

export default Hero;
