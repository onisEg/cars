import React from "react";
import './Pagination.css'

export default function Pagination(props) {
  let { carsPerPage, length, handlePagination, currentPage } = props;
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / carsPerPage); i++) {
    paginationNumbers.push(i);
  }

  return (
    <div className="pagination">
      {paginationNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handlePagination(pageNumber)}
          className={currentPage === pageNumber ? "active" : ""}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
}

