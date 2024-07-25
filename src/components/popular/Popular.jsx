import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Popular.css";
import Product from "../Product/Product";
import axios from "axios";

export default function Popular() {
  const [cars, setCars] = useState([]);
  let getCars = async () => {
    try {
      const res = await axios.get(
        "https://freetestapi.com/api/v1/cars?limit=4"
      );
      setCars(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <>
      <div id="popular" className="container py-5">
        <div className="search  d-flex align-items-center form-control">
          <span>
            <img src="/public/location.svg" alt="" />
          </span>
          <input type="text" className="" placeholder="Search By Name" />
          <button className="btn btn-info ">
            <Link>Search</Link>
          </button>
        </div>
        <div className="sec-title text-center mt-5">
          <span>POPULAR RENTAL DEALS</span>
          <h2>Most popular cars rental deals</h2>
        </div>

        <div className="row">
          {cars.map((car) => (
            <Product carInfo={car} />
          ))}
        </div>
        <div className="d-flex justify-content-center my-2 ">
          <Link
            to="/cars"
            className="show-all btn btn-outline-light d-flex align-items-center"
          >
            Show all vehicles
            <i className="fa-solid fa-arrow-right-long mx-2"></i>
          </Link>
        </div>
      </div>
    </>
  );
}
