import React from "react";
import {
  AppContent,
  AppSidebar,
  AppFooter,
  AppHeader,
} from "../components/index";
import cookie from "react-cookies";
import { Navigate } from "react-router-dom";
import { CContainer } from "@coreui/react";
import { Container } from "react-bootstrap";

const DefaultLayout = () => {
  let isAdmin = cookie.load("ADMIN_DATA") || {};

  return (
    <>
      {isAdmin.role === "Admin" || isAdmin.role === "Root" ? (
        <div>
          <AppSidebar />
          <div className="wrapper d-flex flex-column min-vh-100 bg-light">
            <AppHeader />
            <div className="body flex-grow-1 px-3">
              <AppContent />
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/admin/login" />
      )}
    </>
  );
};

export default DefaultLayout;
