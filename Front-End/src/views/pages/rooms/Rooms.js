import React from "react";
import Navbar from "src/components/userPage/Navbar";
import Hero from "src/components/userPage/Hero";
import RoomContainer from "src/components/userPage/RoomContainer";
import Banner from "src/components/userPage/Banner";
import { Link } from "react-router-dom";
import Title from "src/components/userPage/Title";
import "../../../scss/styleuser.scss";
import Footer from "src/components/userPage/Footer";
const Rooms = () => {
  return (
    <>
      <>
        {" "}
        <Navbar />
        <Hero hero="roomsHero">
          <div className="hero-wrap">
            <div className="overlay"></div>
            <div className="container">
              <div className="row no-gutters slider-text d-flex align-itemd-center justify-content-center">
                <div className="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center fadeInUp ftco-animated">
                  <div className="text">
                    <p className="breadcrumbs mb-2">
                      <span className="mr-2">
                      <Link to="/"  >Return Home</Link>
                      </span>{" "}
                      <span className="mr-2 active">
                      <Link to="/bookings"  >Return Home</Link>
                      </span>{" "}
                      
                    </p>
                    <h1 className="mb-4 bread">Rooms</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Hero>
        <RoomContainer />
        <Footer />
      </>
    </>
  );
};

export default Rooms;
