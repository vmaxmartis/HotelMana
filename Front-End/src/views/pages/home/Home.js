import React from "react";
import Hero from "src/components/userPage/Hero";
import Footer from "src/components/userPage/Footer";
import Services from "src/components/userPage/Services";
import FeaturedRooms from "src/components/userPage/FeaturedRooms";
import { Link } from "react-router-dom";
import Navbar from "src/components/userPage/Navbar";
import cookie from "react-cookies";

const Home = () => {
  let isAdminRoot = cookie.load("ADMIN_DATA") || {};

  return (
    <>
      <Navbar />

      <Hero hero="roomsHero">
        <div className="hero-wrap">
          <div className="overlay"></div>
          <div className="container">
            <div className="row no-gutters slider-text d-flex align-itemd-center justify-content-center">
              <div className="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center fadeInUp ftco-animated">
                <div className="text">
                  <p className="breadcrumbs mb-2">
                    <span className="mr-9">
                      <Link to="/rooms">Our Rooms</Link>
                    </span>{" "}
                  </p>
                  <h1 className="mb-4 bread">{isAdminRoot.hotelName}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Hero>
      <div className="row justify-content-center mb-5 pb-3">
        <div className="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
          <span className="subheading">Welcome to {isAdminRoot.hotelName}</span>
          <h2 className="mb-4">You will Never Want To Leave</h2>
        </div>
      </div>
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
						<div className="img img-1 mr-md-2 ftco-animate fadeInUp ftco-animated" ></div>
						<div className="img img-2 ml-md-2 ftco-animate fadeInUp ftco-animated" ></div>
					</div>
					<div className="col-md-5 wrap-about pb-md-3 ftco-animate pr-md-5 pb-md-5 pt-md-4 fadeInUp ftco-animated">
	          <div className="heading-section mb-4 my-5 my-md-0">
	          	<span className="subheading">About Harbor Lights Hotel</span>
	            <h2 className="mb-4">Harbor Lights Hotel the Most Recommended Hotel All Over the World</h2>
	          </div>
	          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
	          <p><a href="#" className="btn btn-secondary rounded">Reserve Your Room Now</a></p>
					</div>
				</div>
			</div>
		</section>
      <Services/>
      <FeaturedRooms />
      <Footer />
    </>
  );
};

export default Home;
