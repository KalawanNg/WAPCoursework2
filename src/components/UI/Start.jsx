import React from "react";
import "../../styles/start.css";
import trainerImg from "../../assets/img/trainer.png";
import { Link } from 'react-router-dom';


const Start = () => {
  return <section id="classes">
        <div className="container">
          <div className="start_wrapper">
            <div className="start_img">
              <img src={trainerImg} alt="" />
            </div>

            <div className="start_content">
              <h2 className="section_title">
                Ready to make a <span className="highlights">change?</span>
              </h2>
              <p>Let's shape up!!</p>

              <Link to="/login" className="custom-register_btn">Get Started</Link>
            </div>
          </div>
        </div>
        </section>
};

export default Start;
