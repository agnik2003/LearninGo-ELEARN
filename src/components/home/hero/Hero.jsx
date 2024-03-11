import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO learninGo"
              title="Best Online Education Application"
            />
            <p>
            Discover the boundless opportunities at LearninGo, where cutting-edge e-learning meets personalized education. With a diverse array of courses, our platform is designed to empower and inspire learners on a global scale.
            </p>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
