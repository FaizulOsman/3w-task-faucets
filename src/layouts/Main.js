import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Home from "../Pages/Home/Home";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet>
        <Home />
      </Outlet>
      <Footer />
    </div>
  );
};

export default Main;
