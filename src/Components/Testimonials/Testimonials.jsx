import React from "react";

import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import user_5 from "../../assets/user-5.png";
import user_6 from "../../assets/user-6.png";

import "./Testimonials.css";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials" name="testimonials">
        <h3 className="tm-sub">Students response about Edusity</h3>
        <div className="tm-container">
          <div className="tm-slider">
            <div className="tm-slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <h3>Alina Helen</h3>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations
              </p>
            </div>
            <div className="tm-slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <h3>William Jackson</h3>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations
              </p>
            </div>
            <div className="tm-slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <h3>Olivia Stanley </h3>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations
              </p>
            </div>
            <div className="tm-slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <h3>Torent Smith</h3>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations
              </p>
            </div>
            <div className="tm-slide">
              <div className="user-info">
                <img src={user_5} alt="" />
                <h3>Hannah Dyle</h3>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations
              </p>
            </div>
            <div className="tm-slide">
              <div className="user-info">
                <img src={user_6} alt="" />
                <h3>Albert Hardy</h3>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
