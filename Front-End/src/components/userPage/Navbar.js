import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { BiLogOut } from "react-icons/bi";
import { AdminLogut } from "src/Utils/store/action/adminLoginAction";
import { useSelector, useDispatch } from "react-redux";
import cookie from "react-cookies";
import "../../views/pages/login/login.css";
import { CurrentUserLogin } from "src/Utils/store/action/userAction";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const isLoggIn = useSelector((state) => state.adminLogin.currentAdmin);
  let isAdminRoot = cookie.load("ADMIN_DATA") || {};

  const dispatch = useDispatch();

  const dataUserLogin = useSelector((state) => state.user.currentUserlogin);

  useEffect(() => {
    dispatch(CurrentUserLogin());
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    dispatch(AdminLogut());
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light scrolled awake"
        id="ftco-navbar"
      >
        <div className="container">
          <span className="navbar-brand" href="/" >
            {isAdminRoot.hotelName}
            <span > Hotel</span>
          </span>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/rooms" className="nav-link">
                  Rooms
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/bookings" className="nav-link">
                  Bookings
                </Link>
              </li>
              
              <li className="pl-3">
              <Link className="nav-link" to="/">
                Hi!{"   "} 
                
                <span className="text-success">{dataUserLogin.fullName}</span>{"   "}{"   "}
                <span className="icon-heart">  </span>
              </Link>{" "}
            </li>
              <li className="nav-item">
              {isAdminRoot.Token ? (
                <Link className="nav-link" to="/login" onClick={handleLogout}>
                  <BiLogOut size="25" />
                </Link>
              ) : (
                <Link className="nav-link" to="/login">
                  <VscAccount size="27" />
                </Link>
              )}
            </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
