import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <>
      <div className="sec-1 d-flex justify-content-between align-items-center py-5 row">
        <article>
          <h1>
            Find, book and rent a car <span>Easily</span>
          </h1>
          <p>
            Get a car wherever and whenever you need it with your IOS and
            Android device.
          </p>
          <div className="d-flex ">
            <img className="img-fluid " src="/google_play.png" alt="" />
            <img className=" mx-3" src="/app_store.png" alt="" />
          </div>
        </article>
        <img className="" src="/carHome.png" alt="" />
      </div>
    </>
  );
}
