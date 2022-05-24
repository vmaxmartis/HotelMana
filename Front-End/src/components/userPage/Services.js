import React, { useEffect } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
import { useSelector, useDispatch } from "react-redux";
import { FetchDataService } from "src/Utils/store/action/serviceAction";

import { MdRedeem } from "react-icons/md";

const Services = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.service.services);

  useEffect(() => {
    dispatch(FetchDataService());
  }, []);

  return (
    <>
      {" "}
      <section className="services">
        <div className="section-title">
          <h4>Services</h4>
        </div>
        <div className="services-center">
          {data.map((item) => {
            return (
              <article key={`item-${item.name}`} className="service">
                <span>
                  <MdRedeem />
                </span>
                <h6>{item.name}</h6>
                <p>{item.price} VND</p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="ftco-section ftco-menu bg-light">
			<div className="container-fluid px-md-4">
				<div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
          	<span className="subheading">Restaurant</span>
            <h2>Restaurant</h2>
          </div>
        </div>
				<div className="row">
        	<div className="col-lg-6 col-xl-4 d-flex">
        		<div className="pricing-entry rounded d-flex ftco-animate fadeInUp ftco-animated">
        			<div className="img" ></div>
        			<div className="desc p-4">
	        			<div className="d-md-flex text align-items-start">
	        				<h3><span>Grilled Crab with Onion</span></h3>
	        				<span className="price">$20.00</span>
	        			</div>
	        			<div className="d-block">
	        				<p>A small river named Duden flows by their place and supplies</p>
	        			</div>
        			</div>
        		</div>
        	</div>
        	<div className="col-lg-6 col-xl-4 d-flex">
        		<div className="pricing-entry rounded d-flex ftco-animate fadeInUp ftco-animated">
        			<div className="img" ></div>
        			<div className="desc p-4">
	        			<div className="d-md-flex text align-items-start">
	        				<h3><span>Grilled Crab with Onion</span></h3>
	        				<span className="price">$20.00</span>
	        			</div>
	        			<div className="d-block">
	        				<p>A small river named Duden flows by their place and supplies</p>
	        			</div>
        			</div>
        		</div>
        	</div>
        	<div className="col-lg-6 col-xl-4 d-flex">
        		<div className="pricing-entry rounded d-flex ftco-animate fadeInUp ftco-animated">
        			<div className="img" ></div>
        			<div className="desc p-4">
	        			<div className="d-md-flex text align-items-start">
	        				<h3><span>Grilled Crab with Onion</span></h3>
	        				<span className="price">$20.00</span>
	        			</div>
	        			<div className="d-block">
	        				<p>A small river named Duden flows by their place and supplies</p>
	        			</div>
        			</div>
        		</div>
        	</div>
        	<div className="col-lg-6 col-xl-4 d-flex">
        		<div className="pricing-entry rounded d-flex ftco-animate fadeInUp ftco-animated">
        			<div className="img" ></div>
        			<div className="desc p-4">
	        			<div className="d-md-flex text align-items-start">
	        				<h3><span>Grilled Crab with Onion</span></h3>
	        				<span className="price">$20.00</span>
	        			</div>
	        			<div className="d-block">
	        				<p>A small river named Duden flows by their place and supplies</p>
	        			</div>
        			</div>
        		</div>
        	</div>
        	<div className="col-lg-6 col-xl-4 d-flex">
        		<div className="pricing-entry rounded d-flex ftco-animate fadeInUp ftco-animated">
        			<div className="img" ></div>
        			<div className="desc p-4">
	        			<div className="d-md-flex text align-items-start">
	        				<h3><span>Grilled Crab with Onion</span></h3>
	        				<span className="price">$20.00</span>
	        			</div>
	        			<div className="d-block">
	        				<p>A small river named Duden flows by their place and supplies</p>
	        			</div>
        			</div>
        		</div>
        	</div>
        	<div className="col-lg-6 col-xl-4 d-flex">
        		<div className="pricing-entry rounded d-flex ftco-animate fadeInUp ftco-animated">
        			<div className="img" ></div>
        			<div className="desc p-4">
	        			<div className="d-md-flex text align-items-start">
	        				<h3><span>Grilled Crab with Onion</span></h3>
	        				<span className="price">$20.00</span>
	        			</div>
	        			<div className="d-block">
	        				<p>A small river named Duden flows by their place and supplies</p>
	        			</div>
        			</div>
        		</div>
        	</div>
        	<div className="col-md-12 text-center ftco-animate fadeInUp ftco-animated">
        		<p><a href="#" className="btn btn-primary rounded">View All Menu</a></p>
        	</div>
        </div>
			</div>
		</section>
    </>
  );
};
export default Services;
