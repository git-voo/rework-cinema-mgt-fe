import logo from "../assets/images/EVENTBUX.png";
import cardImg1 from "../assets/images/cardImg1.jpg";

import Navigation from "../components/Navigation";
import { BsSearch } from "react-icons/bs";
import CinemaCard from "../utils/CinemaCards";
import "../styles/homepage/homepage.css";
import Footer from "../components/Footer";
import Carousel from "react-bootstrap/Carousel";
import Cards from "../components/Cards";

import React, { useState, useEffect } from 'react'
import axios from 'axios';

const HomePage = () => {

  
  return (
    <div>
      <div className="banner-bg">
        <div className="nav_header_homepage">
          <nav className="main-nav">
            <div className="logo-section">
              <img className="logo-image" src={logo} alt="logo" />
            </div>
            <div className="links-section">
              <button>Help center</button>
              <button className="login">Login</button>
              <button className="signup">Sign up</button>
            </div>
          </nav>
        </div>
      </div>

      <div className="contain-homepage">

        <div className="banner-section-background">
          <div className="slider-container">
            <div className="left-side">
              <h1 className="slider-text1">Simple and Fast</h1>
              <h1 className="slider-text2">Online event booking</h1>

              <button className="see-Today">See whats on Today</button>
            </div>

            <div className="slider-section">
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src={cardImg1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h1>First slide label</h1>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src={cardImg1}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={cardImg1}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>

        </div>




        <div>
          <nav className="search-nav">
            <div className="item-section">
              <p>Looking for</p>
              <div className="input">
                <input type="text" placeholder="The Avengers" />
              </div>
            </div>

            <div className="item-section">
              <p>In</p>
              <div className="input">
                <select name="" id="">
                  <option value="">Event location</option>
                </select>{" "}
              </div>
            </div>

            <div className="item-section">
              <p>Where</p>
              <div className="input">
                <select name="" id="">
                  <option value="">Today</option>
                  <option value="">Any Date</option>
                  <option value="">Date 3</option>
                </select>
              </div>
            </div>

            <div className="item-section search">
              <BsSearch className="icon" />
            </div>
          </nav>
        </div>

        {/* card section */}
        <div>
          <nav className="other-nav">
            <div className="item">
              <h5>Upcoming Events</h5>
            </div>
            <div className="options">
              <select className="wea" name="" id="">
                <option value="">Weekdays</option>
              </select>
              <select className="wea" name="" id="">
                <option value="">Event Type</option>
              </select>
              <select className="wea" name="" id="">
                <option value="">Any Category</option>
              </select>
            </div>
          </nav>
        </div>




        {/* card section */}

        <Cards/>

        {/* down to footer */}

        <div className="lme-btn">
          <button className="lme">Load More Events</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
