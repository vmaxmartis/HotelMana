import React from "react";
import Navbar from "src/components/userPage/Navbar";
import Hero from "src/components/userPage/Hero";
import Banner from "src/components/userPage/Banner";
import { Link } from "react-router-dom";
import Bookings from "./listBookings";

import Title from "../../../components/userPage/Title"

const ListBookings = () => {
  return (
    <>
      <>
        {" "}
        <Navbar />
        <Hero hero="roomsHero">

          <Banner title="our room">
            <Link to="/" className="btn-primary">
              return home
            </Link>
          </Banner>
        </Hero>
        <Title title="THE LIST OF BOOKING "/>

        <Bookings />
      </>
    </>
  );
};

export default ListBookings;
