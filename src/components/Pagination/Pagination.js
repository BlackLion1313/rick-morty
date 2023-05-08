import React from "react";

const Pagination = ({ pageNumber, setPageNumber }) => {
  const handleNextClick = () => {
    setPageNumber(pageNumber + 1);
    console.log(pageNumber);
  };

  const handlePrevClick = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
    console.log(pageNumber);
  };

  return (
    <div className="container d-flex justify-content-center my-5">
      <button
        className="btn btn-primary me-2"
        onClick={handlePrevClick}
      >
        Prev
      </button>
      <button
        className="btn btn-primary"
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
