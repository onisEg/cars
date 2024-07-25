import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="pt-5 pb-1">
        <div className="container">
          <div className="row">
            <div className="col f-1">
              <h3>
                <img src="/public/logo white.png" alt="" />
              </h3>
              <ul className="list-unstyled">
                <li>
                  <img src="/public/locationn.svg" alt="" />
                  <span>25566 Hc 1, Glenallen, Alaska, 99588, USA</span>
                </li>
                <li>
                  <img src="/public/call.svg" alt="" />
                  <span>+603 4784 273 12</span>
                </li>
                <li>
                  <img src="/public/sms.png" alt="" />
                  <span>rentcars@gmail.com</span>
                </li>
              </ul>
            </div>
            <div className="col">
              <h3>Our Product</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Career</a>
                </li>
                <li>
                  <a href="#">Car</a>
                </li>
                <li>
                  <a href="#">Packages</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Priceline</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h3>Resources</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Download</a>
                </li>
                <li>
                  <a href="#">Help Centre</a>
                </li>
                <li>
                  <a href="#">Guides</a>
                </li>
                <li>
                  <a href="#">Partner Network</a>
                </li>
                <li>
                  <a href="#">Cruises</a>
                </li>
                <li>
                  <a href="#">Developer</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h3>About Rentcars</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Why choose us</a>
                </li>
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Investor Relations</a>
                </li>
                <li>
                  <a href="#">Press Center</a>
                </li>
                <li>
                  <a href="#">Advertise</a>
                </li>
              </ul>
            </div>
            <div className="col social">
              <h3>Follow Us</h3>
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-instagram "></i>
                </li>
                <li>
                  <i className="bi bi-gitlab "></i>
                </li>
                <li>
                  <i className="bi bi-dribbble "></i>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <p className="copyright">Copyright 2024 ・ Rentcars, All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}
