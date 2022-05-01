import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../../assets/images/react.jpg";
import PropTypes from "prop-types";

const Room = (props) => {
  // console.log(name);
  const { name } = props;
  return (
    <article className="room">
      <div className="img-container">
        <img src={defaultImg} alt="single room" />
        <div className="price-top">
          <h6>$5000</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/single-room`} className="btn-primary room-link">
          features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
};
Room.propTypes = {
  name: PropTypes.node,
};
export default Room;
