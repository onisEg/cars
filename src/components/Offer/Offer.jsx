import React from "react";
import "./Offer.css";

export default function Offer() {
  return (
    <>
      <div id="offer-sec" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6  d-flex align-items-center">
              <div className="offer-img">
                <img className="img-fluid" src="/public/Audi 1.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="offer-content">
                <div className="sec-title ">
                  <span>HOW IT WORK</span>
                  <h2>Rent with following 3 working steps</h2>
                </div>
                <div className="offer-text my-4">
                  <div className="row offer-item">
                    <div className="col-2">
                      <div className="img">
                        <img
                          className="img-fluid"
                          src="/public/money icon.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-10">
                      <div className="">
                        <h3>Best price guaranteed</h3>
                        <p>
                          Find a lower price? We’ll refund you 100% of the
                          difference.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="offer-text my-4">
                  <div className="row offer-item">
                    <div className="col-2">
                      <div className="img">
                        <img
                          className="img-fluid"
                          src="/public/driver icon.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-10">
                      <div className="">
                        <h3>Experience driver</h3>
                        <p>
                          Don’t have driver? Don’t worry, we have many
                          experienced driver for you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="offer-text my-4">
                  <div className="row offer-item">
                    <div className="col-2">
                      <div className="img">
                        <img
                          className="img-fluid"
                          src="/public/24.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-10">
                      <div className="">
                        <h3>24 hour car delivery</h3>
                        <p>
                          Book your car anytime and we will deliver it directly
                          to you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="offer-text my-4">
                  <div className="row offer-item">
                    <div className="col-2">
                      <div className="img">
                        <img
                          className="img-fluid"
                          src="/public/chat icon.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-10">
                      <div className="">
                        <h3>24/7 technical support</h3>
                        <p>
                          Have a question? Contact Rentcars support any time
                          when you have problem.
                        </p>
                      </div>
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
