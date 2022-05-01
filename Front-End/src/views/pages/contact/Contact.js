import React from "react";
import Hero from "src/components/userPage/Hero";
import Services from "src/components/userPage/Services";
import FeaturedRooms from "src/components/userPage/FeaturedRooms";
import Banner from "src/components/userPage/Banner";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <FeaturedRooms />
      <Services />
    </>
  );
};

export default Home;
