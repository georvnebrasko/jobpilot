import React from 'react';
import './PaginationBlock.scss';

function PaginationBlock({ currentPage, goToPage, goPrev, goNext }) {
  return (
    <div className="paginationBlock">
      <button onClick={goPrev} className="paginationBlock__arrow">{'<'}</button>

      <button
        onClick={() => goToPage(1)}
        className={`paginationBlock__page ${
          currentPage === 1 ? 'paginationBlock__page--active' : ''
        }`}
      >
        01
      </button>
      <button
        onClick={() => goToPage(2)}
        className={`paginationBlock__page ${
          currentPage === 2 ? 'paginationBlock__page--active' : ''
        }`}
      >
        02
      </button>
      <button
        onClick={() => goToPage(3)}
        className={`paginationBlock__page ${
          currentPage === 3 ? 'paginationBlock__page--active' : ''
        }`}
      >
        03
      </button>

      <button onClick={goNext} className="paginationBlock__arrow">{'>'}</button>
    </div>
  );
}

export default PaginationBlock;