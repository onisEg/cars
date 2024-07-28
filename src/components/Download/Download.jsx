import React from "react";
import { Link } from "react-router-dom";
import "./Download.css";

export default function Download() {
  return (
    <>
      <div
        id="download"
        className="sec-2 d-flex justify-content-between align-items-center pt-5 "
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center pb-3">
              <div className="">
                <article>
                  <h1>
                    Download Rentcars <br /> App for <span>FREE</span>
                  </h1>
                  <p>For faster, easier booking and exclusive deals.</p>
                  <div className="d-md-flex ">
                    <img className="img-fluid " src="/google_play.png" alt="" />
                    <img className=" mx-3" src="/app_store.png" alt="" />
                  </div>
                </article>
                <form className="form pt-5 ">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control rounded-pill "
                      id="exampleFormControlInput1"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control rounded-pill "
                      id="exampleFormControlInput1"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control rounded-pill "
                      id="exampleFormControlInput1"
                      placeholder="Email"
                    />
                  </div>
                  <button className="btn-send btn ">
                    <Link to="#" className="text-decoration-none">
                      Send
                    </Link>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className=" d-flex justify-content-end">
                <img className="" src="/iPhone14Mockup.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
