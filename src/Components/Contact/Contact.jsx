import React from "react";

import "./Contact.css";

import msg_icon from "../../assets/msg-icon.png";
import { HiArrowLongRight } from "react-icons/hi2";
import { MdEmail, MdLocalPhone, MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact" name="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />{" "}
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>

        <div className="contact-cl">
          <div>
            <MdEmail className="icon" />
            <p>edusity@gmail.com</p>
          </div>
          <div>
            <MdLocalPhone className="icon" />
            <p>+91 8549305890</p>
          </div>

          <div>
            <MdLocationOn className="icon" />
            <p>Sector 15, Gurugram, Haryana</p>
          </div>
        </div>
      </div>

      <div className="contact-col">
        <form>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            autoComplete="off"
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
            autoComplete="off"
          />

          <label>Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="enter your message"
            required
            autoComplete="off"
          ></textarea>

          <botton type="submit" className="btn dark-btn">
            Submit now <HiArrowLongRight className="right-arrow" />
          </botton>
        </form>
      </div>
    </div>
  );
};

export default Contact;
