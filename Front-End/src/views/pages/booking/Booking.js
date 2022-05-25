import React from "react";
import Navbar from "src/components/userPage/Navbar";
import Footer from "src/components/userPage/Footer";
import Hero from "src/components/userPage/Hero";
import { Link } from "react-router-dom";
import Bookings from "./listBookings";

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
		<div className="row no-gutters justify-content-center pb-5">
		<div className="col-lg-8">
            <form action="#" className="booking-form aside-stretch">
              <div className="row">
                <div className="col-md d-flex py-md-4">
                  <div className="form-group align-self-stretch d-flex align-items-end">
                    <div className="wrap align-self-stretch py-3 px-4">
                      <label>Check-in Date</label>
                      <input
                        type="date"
                        className="form-control checkin_date"
                        placeholder="Check-in date"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md d-flex py-md-4">
                  <div className="form-group align-self-stretch d-flex align-items-end">
                    <div className="wrap align-self-stretch py-3 px-4">
                      <label>Check-out Date</label>
                      <input
                        type="date"
                        className="form-control checkout_date"
                        placeholder="Check-out date"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md d-flex py-md-4">
                  <div className="form-group align-self-stretch d-flex align-items-end">
                    <div className="wrap align-self-stretch py-3 px-4">
                      <label>Room</label>
                      <div className="form-field">
                        <div className="select-wrap">
                          <div className="icon">
                            <span className="ion-ios-arrow-down"></span>
                          </div>
                          <select name="" id="" className="form-control">
                            <option value="">Suite</option>
                            <option value="">Family Room</option>
                            <option value="">Deluxe Room</option>
                            <option value="">Classic Room</option>
                            <option value="">Superior Room</option>
                            <option value="">Luxury Room</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md d-flex py-md-4">
                  <div className="form-group align-self-stretch d-flex align-items-end">
                    <div className="wrap align-self-stretch py-3 px-4">
                      <label>Guests</label>
                      <div className="form-field">
                        <div className="select-wrap">
                          <div className="icon">
                            <span className="ion-ios-arrow-down"></span>
                          </div>
                          <select name="" id="" className="form-control">
                            <option value="">1 Adult</option>
                            <option value="">2 Adult</option>
                            <option value="">3 Adult</option>
                            <option value="">4 Adult</option>
                            <option value="">5 Adult</option>
                            <option value="">6 Adult</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md d-flex">
                  <div className="form-group d-flex align-self-stretch">
                    <a
                      href="#"
                      className="btn btn-primary py-5 py-md-3 px-4 align-self-stretch d-block"
                    >
                      <span>
                        Check Availability <small>Best Price Guaranteed!</small>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
		</div>
        <div className="row no-gutters justify-content-center pb-5">
          
          <div className="col-md-7 text-center heading-section ftco-animate fadeInUp ftco-animated">
            <span className="subheading">Detail</span>
            <h2>
              <span>THE LIST OF BOOKING</span>
            </h2>
          </div>
        </div>
        <Bookings />
        <Footer />
      </>
    </>
  );
};

export default ListBookings;
