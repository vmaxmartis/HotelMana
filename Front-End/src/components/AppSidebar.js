import React, { useState } from "react";

import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { AppSidebarNav } from "./AppSidebarNav";

import { logoNegative } from "src/assets/brand/logo-negative";
import { sygnet } from "src/assets/brand/sygnet";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

import cookie from "react-cookies";
import { useSelector, useDispatch } from "react-redux";
// sidebar nav config
import { _navRoot, _nav } from "../_nav";

const AppSidebar = () => {
  let isAdminRoot = cookie.load("ADMIN_DATA") || {};
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.change.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.change.sidebarShow);

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: "set", sidebarShow: visible });
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <h3 className="pt-3 sidebar-brand-full">Admin Manage</h3>

        {/* <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} /> */}
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          {isAdminRoot.role === "Root" ? (
            <AppSidebarNav items={_navRoot} />
          ) : isAdminRoot.role === "Admin" ? (
            <AppSidebarNav items={_nav} />
          ) : (
            []
          )}
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() =>
          dispatch({ type: "set", sidebarUnfoldable: !unfoldable })
        }
      />
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
