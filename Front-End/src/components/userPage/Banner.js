import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";

const Banner = ({ children, title, subtitle }) => {
  return (
    <>
      <div className="banner">
        <h1>{title}</h1>
        <div />
        <p>{subtitle}</p>
        {children}
      </div>
    </>
  );
};
Banner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.element,
};
export default Banner;
