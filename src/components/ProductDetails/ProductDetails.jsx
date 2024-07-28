import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();

  const [car, setCar] = useState(null);
  let getCarDetails = async () => {
    try {
      const res = await axios.get(`https://freetestapi.com/api/v1/cars/${id}`);
      console.log(res.data);
      setCar(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCarDetails();
  }, [id]);

  if (!car) {
    return (
      <div className="text-center py-5 my-5 ">
        <i class="fa-solid fa-spinner fa-spin fa-10x"></i>
        <h1 className="mt-5 pt-5">Loading</h1>
      </div>
    );
  }
  return (
    <>
      <div id="carDetails" className="py-5  bg-white">
        <div className="container">
          <div className="row breadcrmp">
            <p className="">
              <Link to="/">Home</Link> / <Link to="/cars">cars</Link>
            </p>
          </div>
          <div className="row">
            <div className="col-md-6  d-flex align-items-center">
              <div className="offer-img">
                <img className="rounded img-fluid" src="/Audi_1.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="offer-content">
                <div className="sec-title ">
                  <span>Car Details </span>

                  <h2>
                    {car.make} / {car.model}
                  </h2>
                </div>
                <div className="car-item">
                  <ul>
                    <li className="list-group-item">
                      <i class="bi bi-calendar-week"></i>
                      <span>Year :</span> {car.year}
                    </li>
                    <li className="list-group-item">
                      <i class="bi bi-palette"></i>
                      <span>Color :</span> {car.color}
                    </li>
                    <li className="list-group-item">
                      <i class="bi bi-signpost"></i>
                      <span>Mileage :</span> {car.mileage}
                    </li>
                    <li className="list-group-item">
                      <i class="bi bi-tag"></i>
                      <span>Price :</span> {car.price}
                    </li>
                    <li className="list-group-item">
                      <i class="bi bi-fuel-pump"></i>
                      <span>fuelType :</span> {car.fuelType}
                    </li>
                    <li className="list-group-item">
                      <i class="bi bi-fuel-pump"></i>
                      <span>transmission :</span> {car.transmission}
                    </li>
                    <li className="list-group-item">
                      <i class="bi bi-airplane-engines"></i>
                      <span>engine :</span> {car.engine}
                    </li>
                    <li className="list-group-item">
                      <i class="bi bi-symmetry-horizontal"></i>
                      <span>horsepower :</span> {car.horsepower}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
