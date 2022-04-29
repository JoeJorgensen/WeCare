import React from "react";

const Pagination = ({
  donationsPerPage,
  totalDonations,
  paginate,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDonations / donationsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers)


  const renderPag = ()=>{
    if ((currentPage == 1 && pageNumbers.length > [1])) {
      return (
        <nav className="pagination">
         <nav className="pagination">
          <li key={currentPage + 1} className="page-item">
            <a onClick={() => paginate(currentPage + 1)} className="page-link">
              Next
            </a>
          </li>
        </nav>
        </nav>
      );
    } else if ((currentPage == pageNumbers.length  )) {
      return (
        <nav className="pagination">
        <li key={currentPage - 1} className="page-item">
            <a onClick={() => paginate(currentPage - 1)} className="page-link">
              Prev
            </a>
          </li>
        </nav>
      );
    }
    else if (( pageNumbers.length <= 1 )) {
      return (
        <>
        </>
      );
    } else {
      return (
        <nav className="pagination">
          <li key={currentPage - 1} className="page-item">
            <a onClick={() => paginate(currentPage - 1)} className="page-link">
              Prev
            </a>
          </li>
          <nav className="pagination">
          <li key={currentPage + 1} className="page-item">
            <a onClick={() => paginate(currentPage + 1)} className="page-link">
              Next
            </a>
          </li>
        </nav>
        </nav>
      );
    }
    
  }
  console.log('Current Page :', currentPage)
  return(
    <>
    

    {renderPag()}
    </>
  )
  
};


export default Pagination;
