import React, { useEffect } from "react";
import {
  CAvatar,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import { cilLockLocked, cilSettings, cilUser } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { AdminLogut } from "src/Utils/store/action/adminLoginAction";
import { RiAdminFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "../../views/pages/login/login.css";
import { CurrentUserLogin } from "src/Utils/store/action/userAction";
import cookie from "react-cookies";

const AppHeaderDropdown = () => {
  const dispatch = useDispatch();
  const dataUserLogin = useSelector((state) => state.user.currentUserlogin);
  let isAdminRoot = cookie.load("ADMIN_DATA") || {};

  useEffect(() => {
    dispatch(CurrentUserLogin());
  }, []);

  const handleLogOutAd = () => {
    dispatch(AdminLogut());
  };
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        Hi!!{" "}
        {isAdminRoot.role === "Root" ? (
          <span
            style={{
              color: "#2eb85c",
            }}
          >
            Root Admin
          </span>
        ) : isAdminRoot.role === "Admin" ? (
          <span
            style={{
              color: "#2eb85c",
            }}
          >
            {dataUserLogin.fullName}
          </span>
        ) : (
          []
        )}{" "}
        <RiAdminFill size={20} />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <Link
          className="dropdown-item"
          style={{
            textDecoration: "none",
            color: "#4f5d73",
            paddingLeft: "1em",
          }}
          to="/admin/profile"
        >
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </Link>
        <CDropdownItem href="/admin/login" onClick={handleLogOutAd}>
          <CIcon icon={cilLockLocked} className="me-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default AppHeaderDropdown;
