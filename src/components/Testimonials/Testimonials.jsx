import React from "react";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <>
      <div id="Testimonials" className=" py-5 my-5">
        <div className="sec-title text-center mx-5 py-4">
          <span>TESTIMONIALS</span>
          <h2>What peole say about us?</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="px-3">
                <div className="row testimonial-card bg-white ">
                  <div className="col-md-6 px-0">
                    <img className="img-fluid" src="/public/hero1.png" alt="" />
                  </div>
                  <div className="col-md-6 d-flex align-items-center ">
                    <div className="testimonial-content ">
                      <div className="rating">
                        5.0 <small>star</small>
                      </div>
                      <div className="stars">
                        <img src="/public/Star 1.svg" alt="" />
                        <img src="/public/Star 1.svg" alt="" />
                        <img src="/public/Star 1.svg" alt="" />
                        <img src="/public/Star 1.svg" alt="" />
                        <img src="/public/Star 1.svg" alt="" />
                      </div>
                      <p>
                        “I feel very secure when using caretall's services. Your
                        customer care team is very enthusiastic and the driver
                        is always on time.”
                      </p>
                      <h5>John Doe</h5>
                      <span className="location">From New York, US</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="px-3">
                <div className="row testimonial-card bg-white ">
                  <div className="col-md-6 px-0">
                    <img className="img-fluid" src="/public/hero2.png" alt="" />
                  </div>
                  <div className="col-md-6 d-flex align-items-center ">
                    <div className="testimonial-content ">
                      <div className="rating">
                        5.0 <small>star</small>
                      </div>
                      <div className="stars">
                        <img src="/public/Star 1.svg" alt="" />
                        <img src="/public/Star 1.svg" alt="" />
                        <img src="/public/Star 1.svg" alt="" />
                        <img src="/public/Star 1.svg" alt="" />
                        <img src="/public/Star 1.svg" alt="" />
                      </div>
                      <p>
                        “I feel very secure when using caretall's services. Your
                        customer care team is very enthusiastic and the driver
                        is always on time.”
                      </p>
                      <h5>John Doe</h5>
                      <span className="location">From New York, US</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
