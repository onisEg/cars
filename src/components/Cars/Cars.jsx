import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Cars.css";
import Product from "../Product/Product";
import axios from "axios";

export default function Cars() {
  const [cars, setCars] = useState([]);
  let getCars = async () => {
    try {
      const res = await axios.get("https://freetestapi.com/api/v1/cars");
      setCars(res.data);
      console.log(cars);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <>
      <div id="cars" className="container py-5 my-5">
        <div className="row breadcrmp">
          <p className="">
            <Link to="/">Home</Link> /<Link to="/cars">cars</Link>
          </p>
        </div>

        <div className="sec-title text-center mt-5">
          <span>POPULAR RENTAL DEALS</span>
          <h2>Most popular cars rental deals</h2>
        </div>
        <div className="row">
          {cars.map((car) => (
            <Product key={car.id} carInfo={car} />
          ))}
        </div>
      </div>
    </>
  );
}
