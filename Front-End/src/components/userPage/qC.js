import React from "react";
import cookie from "react-cookies";
import { Link } from "react-router-dom";

function QC() {
  let isAdminRoot = cookie.load("ADMIN_DATA") || {};
  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md pr-md-0 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
              <div className="media block-9 services py-4 d-block text-center">
                <div className="d-flex justify-content-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-reception-bell"></span>
                  </div>
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">Friendly Service</h3>
                </div>
              </div>
            </div>
            <div className="col-md px-md-1 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
              <div className="media block-6 services active py-4 d-block text-center">
                <div className="d-flex justify-content-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-serving-dish"></span>
                  </div>
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">Get Breakfast</h3>
                </div>
              </div>
            </div>
            <div className="col-md px-md-1 d-flex align-sel Searchf-stretch ftco-animate fadeInUp ftco-animated">
              <div className="media block-6 services py-4 d-block text-center">
                <div className="d-flex justify-content-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-car"></span>
                  </div>
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">Transfer Services</h3>
                </div>
              </div>
            </div>
            <div className="col-md px-md-1 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
              <div className="media block-6 services py-4 d-block text-center">
                <div className="d-flex justify-content-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-spa"></span>
                  </div>
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">Suits &amp; SPA</h3>
                </div>
              </div>
            </div>
            <div className="col-md pl-md-1 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
              <div className="media block-6 services py-4 d-block text-center">
                <div className="d-flex justify-content-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="ion-ios-bed"></span>
                  </div>
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">Cozy Rooms</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section ftco-wrap-about ftco-no-pt ftco-no-pb">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-7 order-md-last d-flex">
              <div className="img img-1 mr-md-2 ftco-animate fadeInUp ftco-animated"></div>
              <div className="img img-2 ml-md-2 ftco-animate fadeInUp ftco-animated"></div>
            </div>
            <div className="col-md-5 wrap-about pb-md-3 ftco-animate pr-md-5 pb-md-5 pt-md-4 fadeInUp ftco-animated">
              <div className="heading-section mb-4 my-5 my-md-0">
                <span className="subheading">
                  About {isAdminRoot.hotelName} Hotel
                </span>
                <h2 className="mb-4">
                  {isAdminRoot.hotelName} Hotel The most recommended hotel in
                  Quy Nhon city
                </h2>
              </div>
              <p>
                Set in Quy Nhon, 50 meters from Quy Nhon Beach, Fleur De Lys
                Hotel Quy Nhon offers accommodation with a restaurant, free
                private parking, an outdoor swimming pool and a fitness centre.
              </p>
              <p>
                <Link to="/rooms" className="btn btn-secondary rounded">
                  Reserve Your Room Now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default QC;
