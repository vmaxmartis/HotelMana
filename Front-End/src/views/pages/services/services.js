import React from "react";
import Navbar from "src/components/userPage/Navbar";
import Hero from "src/components/userPage/Hero";
import Services from "src/components/userPage/Services";
import ServicesSlide from "src/components/userPage/ServicesSlide";
import Banner from "src/components/userPage/Banner";
import { Link } from "react-router-dom";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="perfect service">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <Services/>
      <ServicesSlide/>
    </>
  );
};

export default Rooms;
