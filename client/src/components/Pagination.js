import React from "react";

const Pagination = ({ donationsPerPage, totalDonations, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDonations / donationsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav >
      <ul className="pagination">
        {pageNumbers.map(number => (
          <nav>
            <li key={number} className="page-item">
            <a onClick={()=> paginate(number - 1)}  className="page-link">
              Prev
            </a>
          </li>
          <li key={number} className="page-item">
            <a onClick={()=> paginate(number)}  className="page-link">
              {number}
            </a>
          </li>

            <li key={number} className="page-item">
            <a onClick={()=> paginate(number + 1)}  className="page-link">
              Next
            </a>
          </li>
          </nav>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
