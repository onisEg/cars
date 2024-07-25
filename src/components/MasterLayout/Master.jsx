import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import "./Master.css";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Master() {
  return (
    <div className=" hero-sec">
      <div>
        <Navbar />
        <div >
          <Outlet />
        </div>
        <Footer/>
      </div>
    </div>
  );
}
