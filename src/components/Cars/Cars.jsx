import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Cars.css";
import Product from "../Product/Product";
import axios from "axios";

export default function Cars() {
  const [cars, setCars] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredCars = cars.filter(
    (car) =>
      car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let getCars = async () => {
    try {
      const res = await axios.get("https://freetestapi.com/api/v1/cars");
      setCars(res.data);
      // console.log(cars);
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
        <div className="search  d-flex align-items-center form-control my-4">
          <span className="mx-2">
            <img  src="/location.svg" alt="" />
          </span>
          <input
            type="text"
            className=""
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            placeholder="Search By Name"
          />

        </div>
        <div className="row">
          {filteredCars.map((car) => (
            <Product key={car.id} carInfo={car} />
          ))}
        </div>
      </div>
    </>
  );
}
