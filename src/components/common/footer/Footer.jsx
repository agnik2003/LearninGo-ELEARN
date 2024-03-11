import React from "react";
import { blog } from "../../../dummydata";
import "./footer.css";
import { colors } from "@mui/material";

const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Get updates straight in your inbox</h1>
            <span>
              We are here to provide you the most modified version of
              e-education
            </span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
          <div className="box logo yoyo">
            <h1>learninGo</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>
              {/* A small river named Duden flows by their place and supplies it
              with the necessary regelialia. */}
            </p>

            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-youtube icon"></i>
            <i className="fab fa-instagram icon"></i>
          </div>
          <div className="box link yoyo">
            <h3>Explore</h3>
            <ul>
              <a
                href="/about"
                style={{ color: "black" }}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-explore"
              >
                <li>About Us</li>
              </a>

              <a
                href="/contact"
                style={{ color: "black" }}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-explore"
              >
                <li>Contact Us</li>
              </a>

              <a
                href="https://gmeet-mkr9.onrender.com/"
                style={{ color: "black" }}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-explore"
              >
                <li>Online Class</li>
              </a>

              <a
                href=""
                style={{ color: "black" }}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-explore"
              >
                <li>Clear Doubts</li>
              </a>

              <a
                href=""
                style={{ color: "black" }}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-explore"
              >
                <li>Exam Portal</li>
              </a>
              {/* <a href="/about" style={{color:'black'}} className="footer-explore"><li>About Us</li></a> */}
            </ul>
          </div>
          {/* <div className="box link yoyo">
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div> */}
          {/* <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div> */}
          <div className="box last yoyo">
            {/* <h3>Have a Questions?</h3> */}
            <ul>
              <li>
                <i className="fa fa-map"></i>
                <a href="https://maps.app.goo.gl/4HHk7sLuMyxdULLJ7">
                  Ramchandrapur, Narendrapur, <br />
                  Kolkata, West Bengal 700103
                </a>
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                <a href="tel:+918282866698">+91 82828 66698</a>
              </li>

              <li>
                <i className="fa fa-paper-plane"></i>
                <a href="mailto:trexrobotix@gmail.com">trexrobotix@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="yoyo">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.5811195301185!2d88.38488223759443!3d22.4447865525592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271dbd4632a11%3A0x493e6b37fc536269!2sT-REX%20ROBOTIX!5e0!3m2!1sen!2sin!4v1709989455249!5m2!1sen!2sin"
              width="300"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>
          Copyright ©2024 All rights reserved
          <br />
          Powered by T-Rex
        </p>
      </div>
    </>
  );
};

export default Footer;
