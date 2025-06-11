import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Pagination = () => {
  return (
    <div className="pagination">
      <button className="page-nav" disabled>
        <FaAngleLeft /> Prev
      </button>

      <button className="page-btn active">1</button>
      <button className="page-btn">2</button>
      <button className="page-btn">3</button>
      <span className="ellipsis">...</span>
      <button className="page-btn">8</button>

      <button className="page-nav">
        Next <FaAngleRight />
      </button>

      <div className="page-info">Showing 1-20 of 156 items</div>
    </div>
  );
};

export default Pagination;
