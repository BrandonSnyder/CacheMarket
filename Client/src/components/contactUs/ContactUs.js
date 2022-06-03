import React from "react";
import "./ContactUs.css";
import brandonpic from "./profPics/brandon.jpg";
import carringtonpic from "./profPics/carrington.jpg";
// import { useQuery } from "@apollo/client";
// import { QUERY_ITEMS } from "../utils/queries";

const ContactUs = () => {
  return (
    <section className="contactUsContainer">
      <h1>Contact Us</h1>
      <div className="contactCardsContainer">
        <div className="contactCard Fisher">
          <h1>Image</h1>
          <h3>Fisher Davis</h3>
          <h5 className="contactUsDescription">Description</h5>
        </div>
        <div className="contactCard Brandon">
          <h3>Brandon Snyder</h3>
          <img src={brandonpic} alt="profile picture" />
          
          <h5 className="contactUsDescription">
            I'm a former NAVSEA Chief Test Engineer currently living in Atlanta.
            I am currently enrolled in a Full Stack Web Development bootcamp
            pivoting my career path into the field of software development and
            software project management.
          </h5>
        </div>
        <div className="contactCard Lamont">
          <h1>Image</h1>
          <h3>Lamont Barnett</h3>
          <h5 className="contactUsDescription">Description</h5>
        </div>
        <div className="contactCard Carrington">
            <h3>Carrington Edmonson</h3> 
            <img src={carringtonpic} alt="profile picture" />
            <h5 className="contactUsDescription">My name is Carrington Edmondson. I’m an entry level web developer currently taking a full stack bootcamp course at Georgia Tech.</h5>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
