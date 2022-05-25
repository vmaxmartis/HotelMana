import React from 'react'
import Bg from '../../assets/react.jpg'
import cookie from "react-cookies";


function Footer() {
  let isAdminRoot = cookie.load("ADMIN_DATA") || {};
  return (
    <>
    <footer className="ftco-footer ftco-section img" style={{backgroundImage: ('../../assets/angular.jpg') }}>
    	<div className="overlay"></div>
      <div className="container">
        <div className="row mb-6">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">{isAdminRoot.hotelName}</h2>
              <p>Website demo booking room</p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className="ftco-animate fadeInUp ftco-animated"><a><span className="icon-google"></span></a></li>
                <li className="ftco-animate fadeInUp ftco-animated"><a><span className="icon-facebook"></span></a></li>
                <li className="ftco-animate fadeInUp ftco-animated"><a><span className="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-5">
              <h2 className="ftco-heading-2">Useful Links</h2>
              <ul className="list-unstyled">
                <li><a className="py-2 d-block">Rooms</a></li>
                <li><a className="py-2 d-block">Gift Card</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
             <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Privacy</h2>
              <ul className="list-unstyled">
                <li><a className="py-2 d-block">Career</a></li>
                <li><a className="py-2 d-block">Services</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
            	<h2 className="ftco-heading-2">Have a Questions?</h2>
            	<div className="block-23 mb-3">
	              <ul>
	                <li><span className="icon icon-map-marker"></span>{" "}<span className="text"> 55 Ngo May Quy Nh0n</span></li>
	                <li><a><span className="icon icon-phone"></span>{" "}<span className="text"> +84387397253</span></a></li>
	                <li><a><span className="icon icon-envelope"></span>{" "}<span className="text"> vmaxmartis@gmai.com</span></a></li>
	              </ul>
	            </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">

            
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer