import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Cars.css";
import Product from "../Product/Product";
import axios from "axios";
import Pagination from "../pagination/Pagination";

export default function Cars() {
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 8;
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
  let handleSearchChange = (e) => {
    // console.log(searchTerm);
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredCars = cars.filter(
    (car) =>
      car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.model.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  const handlePagination = (pageNumber) => setCurrentPage(pageNumber);

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
            <img src="/location.svg" alt="" />
          </span>
          <input
            type="text"
            className=""
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search By Name"
          />
        </div>
        <div className="row">
          {currentCars.map((car) => (
            <Product key={car.id} carInfo={car} />
          ))}
        </div>
        <Pagination
          carsPerPage={carsPerPage}
          length={filteredCars.length}
          handlePagination={handlePagination}
          currentPage={currentPage}
        />
      </div>
    </>
  );
}
