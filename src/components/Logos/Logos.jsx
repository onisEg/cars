import React from "react";
import "./Logos.css";

export default function Logos() {
  return (
    <>
      <div className="logos d-flex justify-content-evenly my-5 py-5">
        <div className="logo">
          <img src="/public/logos/audi.png" alt="" />
        </div>
        <div className="logo">
          <img src="/public/logos/Frame 24.svg" alt="" />
        </div>
        <div className="logo">
          <img src="/public/logos/Frame 25.svg" alt="" />
        </div>
        <div className="logo">
          <img src="/public/logos/Frame 26.svg" alt="" />
        </div>
        <div className="logo">
          <img src="/public/logos/honda.svg" alt="" />
        </div>
        <div className="logo">
          <img src="/public/logos/acur.svg" alt="" />
        </div>
      </div>
    </>
  );
}
