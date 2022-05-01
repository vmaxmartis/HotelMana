import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../../images/logo.svg";
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
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header ">
          <Link to="/" className="text-center">
            <h3>{isAdminRoot.hotelName}</h3>
          </Link>
          <button type="button" className="nav-btn" onClick={handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links" }>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
          <li>
            <a href="/bookings">Bookings</a>
          </li>
          <li className="pl-3">
            <Link to="/">
              Hi!!:{" "}
              <span className="text-success">{dataUserLogin.fullName}</span>
            </Link>{" "}
          </li>
          <li>
            {isAdminRoot.Token ? (
              <Link to="/login" onClick={handleLogout}>
                <BiLogOut size="25" />
              </Link>
            ) : (
              <Link to="/login">
                <VscAccount size="27" />
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
