import React from "react";
import Hero from "src/components/userPage/Hero";
import Footer from "src/components/userPage/Footer";
import Services from "src/components/userPage/Services";
import { Link } from "react-router-dom";
import Navbar from "src/components/userPage/Navbar";
import cookie from "react-cookies";
import QC from "src/components/userPage/qC"

const Home = () => {
  let isAdminRoot = cookie.load("ADMIN_DATA") || {};

  return (
    <>
      <Navbar />

      <Hero>
        <div className="hero-wrap">
          <div className="overlay"></div>
          <div className="container">
            <div className="row no-gutters slider-text d-flex align-itemd-center justify-content-center">
              <div className="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center fadeInUp ftco-animated">
                <div className="text">
                  <p className="breadcrumbs mb-2">
                    <span className="mr-9">
                      <Link to="/rooms">Our Rooms</Link>
                    </span>{" "}
                  </p>
                  <h1 className="mb-4 bread">{isAdminRoot.hotelName}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Hero>
      <div className="row justify-content-center mb-5 pb-3">
        <div className="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
          <span className="subheading">Welcome to {isAdminRoot.hotelName}</span>
          <h2 className="mb-4">You will Never Want To Leave</h2>
        </div>
      </div>
      <QC/>
      <Services/>
      
      <Footer />
    </>
  );
};

export default Home;
