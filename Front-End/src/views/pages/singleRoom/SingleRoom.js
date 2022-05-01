import React from "react";
import img1 from "../../../images/room-8.jpeg";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import Banner from "src/components/userPage/Banner";
import Navbar from "src/components/userPage/Navbar";

const SingleRoom = ({ isAuth }) => {
  return (
    <>
      <Navbar />
      <hero className="roomsHero">
        <Banner title="Single-room">
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </hero>
      <section className="single-room">
        <div className="single-room-images">
          <img src={img1} alt="img1" />
          <img src={img1} alt="img1" />
          <img src={img1} alt="img1" />
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>
              Street art edison bulb gluten-free, tofu try-hard lumbersexual
              brooklyn tattooed pickled chambray. Actually humblebrag next
              level, deep v art party wolf tofu direct trade readymade
              sustainable hell of banjo. Organic authentic subway tile cliche
              palo santo, street art XOXO dreamcatcher retro sriracha portland
              air plant kitsch stumptown. Austin small batch squid gastropub.
              Pabst pug tumblr gochujang offal retro cloud bread bushwick
              semiotics before they sold out sartorial literally mlkshk.
              Vaporware hashtag vice, sartorial before they sold out pok pok
              health goth trust fund cray.
            </p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price: 10000$</h6>
            <h6>size: 5 SQFT</h6>
            <h6>max capacity :1</h6>
            <h6>pets: allowed</h6>
            <h6>free breakfast included</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras </h6>
        <ul className="extras">
          <li>- Plush pillows and breathable bed linens</li>
          <li>- Soft, oversized bath towels</li>
          <li>- Full-sized, pH-balanced toiletries</li>
          <li>- Complimentary refreshments</li>
          <li>- Adequate safety/security</li>
          <li>- Internet</li>
          <li>- Comfortable beds</li>
        </ul>
      </section>
      <section className="room-booking">
        {" "}
      </section>
    </>
  );
};
SingleRoom.propTypes = {
  isAuth: PropTypes.bool,
};
export default SingleRoom;
