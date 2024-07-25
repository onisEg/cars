import React from "react";
import "./Logos.css";

export default function Logos() {
  return (
    <>
      <div className="logos d-flex justify-content-evenly my-5 py-5">
        <div className="logo">
          <img src="/logos/audi.png" alt="" />
        </div>
        <div className="logo">
          <img src="/logos/Frame 24.svg" alt="" />
        </div>
        <div className="logo">
          <img src="/logos/Frame 25.svg" alt="" />
        </div>
        <div className="logo">
          <img src="/logos/Frame 26.svg" alt="" />
        </div>
        <div className="logo">
          <img src="/logos/honda.svg" alt="" />
        </div>
        <div className="logo">
          <img src="/logos/acur.svg" alt="" />
        </div>
      </div>
    </>
  );
}
