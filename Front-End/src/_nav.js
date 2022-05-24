import React from "react";
import CIcon from "@coreui/icons-react";

import { cilUser, cilRoom, cibStorybook } from "@coreui/icons";

import { CNavItem } from "@coreui/react";

import { MdOutlineHomeRepairService,MdClearAll } from "react-icons/md";

const _nav = [
  {
    component: CNavItem,
  },
  {
    component: CNavItem,
    name: "Rooms",
    to: "/admin/room",
    icon: <CIcon icon={cilRoom} customClassName="nav-icon" />,
    badge: {
      color: "info",
    },
  },
  {
    component: CNavItem,
    name: "User",
    to: "/admin/user",
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Bookings",
    to: "/admin/bookings",
    icon: <CIcon icon={cibStorybook} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Services",
    to: "/admin/services",
    icon: <MdOutlineHomeRepairService className="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Room Type",
    to: "/admin/roomtype",
    icon: <MdClearAll className="nav-icon" />,
  },
];

const _navRoot = [
  {
    component: CNavItem,
    name: "Hotels",
    to: "/admin",
    icon: <MdOutlineHomeRepairService className="nav-icon" />,
  },
];
export { _nav, _navRoot };
