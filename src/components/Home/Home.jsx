import React from "react";
import "./Home.css";
import Hero from "../HeroSection/Hero";
import Popular from "../popular/Popular";
import Steps from "../Steps/Steps";
import Logos from "../Logos/Logos";
import Offer from "../Offer/Offer";
import Testimonials from "../Testimonials/Testimonials";
import Download from "../Download/Download";

export default function Home() {
  return (
    <>
      <Hero />
      <Popular />
      <Steps />
      <Logos />
      <Offer />
      <Testimonials />
      <Download />
    </>
  );
}
