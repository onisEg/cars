import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav id="navbar" className="navbar navbar-expand-lg container pt-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="home">
            <img src="/public/rent cars logo.png" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Become a renter
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Rental deals
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  How it work
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Why choose us
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <div className="btn ">Sing in</div>
              <div className="btn btn-info">Sing up</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
