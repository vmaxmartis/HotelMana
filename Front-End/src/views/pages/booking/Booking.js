import React from "react";
import Navbar from "src/components/userPage/Navbar";
import Footer from "src/components/userPage/Footer";
import Hero from "src/components/userPage/Hero";
import Banner from "src/components/userPage/Banner";
import { Link } from "react-router-dom";
import Bookings from "./listBookings";

import Title from "../../../components/userPage/Title";

const ListBookings = () => {
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
                        <Link to="/rooms"> Rooms</Link>
                      </span>{" "}
                      <span className="mr-2">
                        {" "}
                        <Link to="/">Return Home</Link>
                      </span>
                    </p>
                    <h1 className="mb-6 bread">List Booking</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Hero>
        <Bookings />
        <Footer/>
      </>
    </>
  );
};

export default ListBookings;
