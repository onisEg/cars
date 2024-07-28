import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

export default function Product(props) {
  let { carInfo } = props;
  return (
    <>
      <div id="product" className="col-md-3  col-6 my-3">
        <div className="card">
          <div className="p-4">
            <img src={`/greenCar.png`} className="card-img-top" alt="blueCar" />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              {carInfo.make} <small>({carInfo.year})</small>
            </h5>
            <p className="small">{carInfo.model}</p>
            <p className="card-text ">
              <span>
                <img className="img-flui" src="/Star_1.svg" alt="" />
              </span>
              <span className="rating mx-1">4.8</span>
              <span className="reviews text-muted">(2436 reviews)</span>
            </p>
            <div className="features row">
              <div className="col-md-6">
                <span className="passagers">
                  <i className="fa fa-calendar-alt "></i>
                  <span className="mx-1">{carInfo.year}</span>
                  year
                </span>
              </div>
              <div className="col-md-6">
                <span className="passagers">
                  <i className="fa-solid fa-palette"></i>
                  <span className="mx-1">{carInfo.color}</span>
                </span>
              </div>
              <div className="col-md-6">
                <span className="passagers">
                  <i className="bi bi-fuel-pump"></i>
                  <span className="mx-1">{carInfo.fuelType}</span>
                </span>
              </div>
              <div className="col-md-6">
                <span className="passagers">
                  <i className="bi bi-airplane-engines"></i>
                  <span className="mx-1">{carInfo.engine}</span>
                </span>
              </div>
              <div className="col-md-6">
                <span className="passagers">
                  <i className="fa-solid fa-house-tsunami"></i>
                  <span className="mx-1">{carInfo.horsepower}</span>
                </span>
              </div>
              <div className="col-md-6">
                <span className="passagers">
                  <i className="fa-solid fa-person-military-pointing"></i>
                  <span className="mx-1">{carInfo.mileage}</span>
                </span>
              </div>
            </div>
            <hr className="bg-gray" />
            <div className="row ">
              <div className="col-md-6">Price</div>
              <div className="col-md-6 text-md-end">
                <span className="price">${carInfo.price}</span>
                <span className="per">/day</span>
              </div>
            </div>
            <button className="btn-rent py-2 btn w-100 d-flex justify-content-center align-items-center">
              <Link
                to={`/product/${carInfo.id}`}
                className="text-decoration-none"
              >
                Rent Now
                <i className="fa-solid fa-arrow-right-long mx-3"></i>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
