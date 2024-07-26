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
      <div className="text-center py-5 my-5">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <>
      <div id="carDetails" className="py-5">
        <div className="container">
          <div className="row breadcrmp">
            <p className="">
              <Link to="/">Home</Link> /<Link to="/cars">cars</Link>
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
                <div className="offer-text my-4">
                  <div className="row offer-item">
                    <div className="col-2">
                      <div className="img">
                        <img
                          className="img-fluid"
                          src="/money_icon.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-10 ">
                      <div className=" ">
                        <span className="h4">year : </span>
                        <span className="h5"> {car.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="offer-text my-4">
                  <div className="row offer-item">
                    <div className="col-2">
                      <div className="img">
                        <img
                          className="img-fluid"
                          src="/driver icon.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-10 ">
                      <div className=" ">
                        <span className="h4">color : </span>
                        <span className="h5"> {car.color}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="offer-text my-4">
                  <div className="row offer-item">
                    <div className="col-2">
                      <div className="img">
                        <img className="img-fluid" src="/24.png" alt="" />
                      </div>
                    </div>
                    <div className="col-10 ">
                      <div className=" ">
                        <span className="h4">mileage : </span>
                        <span className="h5"> {car.mileage}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="offer-text my-4">
                  <div className="row offer-item">
                    <div className="col-2">
                      <div className="img">
                        <img
                          className="img-fluid"
                          src="/chat icon.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-10 ">
                      <div className=" ">
                        <span className="h4">price : </span>
                        <span className="h5"> {car.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="offer-text my-4">
                  <div className="row offer-item">
                    <div className="col-2">
                      <div className="img">
                        <img
                          className="img-fluid"
                          src="/chat icon.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-10 ">
                      <div className=" ">
                        <span className="h4">fuelType : </span>
                        <span className="h5"> {car.fuelType}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="offer-text my-4">
                  <div className="row offer-item">
                    <div className="col-2">
                      <div className="img">
                        <img
                          className="img-fluid"
                          src="/chat icon.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-10 ">
                      <div className=" ">
                        <span className="h4">transmission : </span>
                        <span className="h5"> {car.transmission}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="offer-text my-4">
                  <div className="row offer-item">
                    <div className="col-2">
                      <div className="img">
                        <img
                          className="img-fluid"
                          src="/chat icon.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-10 ">
                      <div className=" ">
                        <span className="h4">engine : </span>
                        <span className="h5"> {car.engine}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="offer-text my-4">
                  <div className="row offer-item">
                    <div className="col-2">
                      <div className="img">
                        <img
                          className="img-fluid"
                          src="/chat icon.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-10 ">
                      <div className=" ">
                        <span className="h4">horsepower : </span>
                        <span className="h5"> {car.horsepower}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
