import React, { useEffect } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
import { useSelector, useDispatch } from "react-redux";
import { FetchDataService } from "src/Utils/store/action/serviceAction";

import { MdRedeem } from "react-icons/md";

const Services = () => {
  return (
    <>
      {" "}
      <section className="ftco-section ftco-menu bg-light">
        <div className="container-fluid px-md-4">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
              <span className="subheading">5-star hotel-class service</span>
              <h2>Service</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-xl-4 d-flex">
              <div className="pricing-entry rounded d-flex ftco-animate fadeInUp ftco-animated">
                <div className="img"></div>
                <div className="desc p-4">
                  <div className="d-md-flex text align-items-start">
                    <h3>
                      <span>Laundry</span>
                    </h3>
                    <span className="price">$20.00</span>
                  </div>
                  <div className="d-block">
                    <p>
                      A small river named Duden flows by their place and
                      supplies
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 d-flex">
              <div className="pricing-entry rounded d-flex ftco-animate fadeInUp ftco-animated">
                <div className="img"></div>
                <div className="desc p-4">
                  <div className="d-md-flex text align-items-start">
                    <h3>
                      <span>Car rental</span>
                    </h3>
                    <span className="price">$20.00</span>
                  </div>
                  <div className="d-block">
                    <p>
                      A small river named Duden flows by their place and
                      supplies
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 d-flex">
              <div className="pricing-entry rounded d-flex ftco-animate fadeInUp ftco-animated">
                <div className="img"></div>
                <div className="desc p-4">
                  <div className="d-md-flex text align-items-start">
                    <h3>
                      <span>Breakfast</span>
                    </h3>
                    <span className="price">$20.00</span>
                  </div>
                  <div className="d-block">
                    <p>
                      A small river named Duden flows by their place and
                      supplies
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 d-flex">
              <div className="pricing-entry rounded d-flex ftco-animate fadeInUp ftco-animated">
                <div className="img"></div>
                <div className="desc p-4">
                  <div className="d-md-flex text align-items-start">
                    <h3>
                      <span>Sky Bar</span>
                    </h3>
                    <span className="price">$20.00</span>
                  </div>
                  <div className="d-block">
                    <p>
                      A small river named Duden flows by their place and
                      supplies
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 d-flex">
              <div className="pricing-entry rounded d-flex ftco-animate fadeInUp ftco-animated">
                <div className="img"></div>
                <div className="desc p-4">
                  <div className="d-md-flex text align-items-start">
                    <h3>
                      <span>Heated swimming pool</span>
                    </h3>
                    <span className="price">$20.00</span>
                  </div>
                  <div className="d-block">
                    <p>
                      A small river named Duden flows by their place and
                      supplies
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 d-flex">
              <div className="pricing-entry rounded d-flex ftco-animate fadeInUp ftco-animated">
                <div className="img"></div>
                <div className="desc p-4">
                  <div className="d-md-flex text align-items-start">
                    <h3>
                      <span>International standard gym</span>
                    </h3>
                    <span className="price">$20.00</span>
                  </div>
                  <div className="d-block">
                    <p>
                      A small river named Duden flows by their place and
                      supplies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Services;
