import React from "react";
import "./Steps.css";

export default function Steps() {
  return (
    <>
      <div id="steps" className="py-4 container">
        <div className="sec-title text-center mt-5">
          <span>HOW IT WORK</span>
          <h2>Rent with following 3 working steps</h2>
        </div>
        <div className="row">
          <div className="col-md-4 step">
            <div className="text-center">
              <img
                className="img-fluid my-3"
                src="/public/locationImg.svg"
                alt=""
              />
              <h3>Choose location</h3>
              <p>Choose your and find your best car</p>
            </div>
          </div>
          <div className="col-md-4 step">
            <div className="text-center">
              <img className="img-fluid my-3" src="/public/pickup.svg" alt="" />
              <h3>Pick-up date</h3>
              <p>Select your pick up date and time to book your car</p>
            </div>
          </div>
          <div className="col-md-4 step">
            <div className="text-center">
              <img className="img-fluid my-3" src="/public/book.svg" alt="" />
              <h3>Book your car</h3>
              <p>Book your car and we will deliver it directly to you</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
