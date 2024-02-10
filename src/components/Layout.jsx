import React from "react";
import {  Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

function Layout() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
