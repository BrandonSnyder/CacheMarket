import React from "react";
import "./ContactUs.css";
import brandonpic from "./profPics/brandon.jpg";
import carringtonpic from "./profPics/carrington.jpg";
import fisherpic from "./profPics/fisher.jpg";
import lamontpic from "./profPics/Lamont.jpg";
import {BsHeart, BsTrash, BsGithub,BsLinkedin} from "react-icons/bs";
import chalk from 'chalk';
// import { useQuery } from "@apollo/client";
// import { QUERY_ITEMS } from "../utils/queries";

const ContactUs = () => {
  console.log(chalk.blue('Hello world!'));
  return (
    <section className="contactUsContainer">
      <h1>Contact Us</h1>
      <div className="contactCardsContainer">
        <div className="contactCard Fisher">
        <h3>Fisher Davis</h3>
        <img src={fisherpic} alt="profile picture"/>
              <div className="LinkDiv">
              <a id="github" href="https://github.com/Fisher-Davis"><BsGithub/></a>
              <a href="https://www.linkedin.com/in/fisher-davis-562182180/"><BsLinkedin/></a>
              </div>
            
          <h5 className="contactUsDescription">My name is Fisher Davis and I am a newcomer in the field of web design and tech. I have a strong dedication for learning new web design trends and keeping up with the industry.</h5>
        </div>
        <div className="contactCard Brandon">
          <h3>Brandon Snyder</h3>
          <img src={brandonpic} alt="profile picture"/>
          <div className="LinkDiv">
          <a id="github" href="https://github.com/BrandonSnyder"><BsGithub/></a>
              <a href="https://www.linkedin.com/in/brandonlsnyder/"><BsLinkedin/></a>
              </div>
          <h5 className="contactUsDescription">
            I'm a former NAVSEA Chief Test Engineer currently living in Atlanta.
            I am currently enrolled in a Full Stack Web Development bootcamp
            pivoting my career path into the field of software development and
            software project management.
          </h5>
        </div>
        <div className="contactCard Lamont">
        <h3>Lamont Barnett</h3>
        <img src={lamontpic} alt="profile picture"/>
        <div className="LinkDiv">
              <a id="github"href="https://github.com/sirmojosodope"><BsGithub/></a>
              <a href="https://www.linkedin.com/in/lamontbarnett/"><BsLinkedin/></a>
              </div>
          
          <h5 className="contactUsDescription">If I need to define myself in one sentence that would be a creative thinker,
            family oriented person, dedicated, game enthusiast, and
            tech-obsessed!!!</h5>
            
        </div>
        <div className="contactCard Carrington">
            <h3>Carrington Edmondson</h3> 
            <img src={carringtonpic} alt="profile picture"/>
            <div className="LinkDiv">
            <a id="github" href="https://github.com/mcarringtone"><BsGithub/></a>
              <a href="https://www.linkedin.com/in/carrington-edmondson-281b7221b/"><BsLinkedin/></a>
              </div>
            <h5 className="contactUsDescription">My name is Carrington Edmondson. I’m an entry level web developer currently taking a full stack bootcamp course at Georgia Tech.</h5>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
