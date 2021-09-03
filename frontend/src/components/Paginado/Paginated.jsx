import React from "react";

export default function Paginated({ PerPage, stateAllNFTs, paged }) {
  let pageCount = [];

  for (let i = 1; i <= Math.ceil(stateAllNFTs / PerPage); i++) {
    pageCount.push(i);
  }

  return (
    <nav className="navPag">
      <div className="center"></div>
      <ul className="pagination">
        {pageCount &&
          pageCount.map((number) => (
            <li key={number} className="page-item">
              <button className="page-link" onClick={() => paged(number)}>
                {number}
              </button>
              ;
            </li>
          ))}
      </ul>
    </nav>
  );
}
