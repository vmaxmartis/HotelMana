import React from "react";
import Hero from "src/components/userPage/Hero";
import Services from "src/components/userPage/Services";
import FeaturedRooms from "src/components/userPage/FeaturedRooms";
import Banner from "src/components/userPage/Banner";
import { Link } from "react-router-dom";
import Navbar from "src/components/userPage/Navbar";
import cookie from "react-cookies";

const Home = () => {
  let isAdminRoot = cookie.load("ADMIN_DATA") || {};

  return (
    <>
      <Navbar />
      <Hero>
        <Banner title={isAdminRoot.hotelName}>
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
