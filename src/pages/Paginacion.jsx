import React from "react";

const Paginacion = ({ currentPage, totalPages, onPageChange }) => {
  const maxPagesToShow = 7;
  const pages = [];

  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = startPage + maxPagesToShow - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <nav className="mt-4">
      <ul className="pagination justify-content-center">

        {/* Botón Primera Página */}
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link border-0 bg-transparent text-dark fw-bold"
            onClick={() => onPageChange(1)}
          >
            Primera
          </button>
        </li>

        {/* Botón Anterior */}
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link border-0 bg-transparent text-dark fw-bold"
            onClick={() => onPageChange(currentPage - 1)}
          >
            Anterior
          </button>
        </li>

        {/* Números de Página */}
        {pages.map((page) => (
          <li
            key={page}
            className={`page-item ${currentPage === page ? "active" : ""}`}
          >
            <button
              className="page-link border-0 bg-transparent text-dark fw-bold"
              onClick={() => onPageChange(page)}
            >
              {currentPage === page ? `[${page}]` : page}
            </button>
          </li>
        ))}

        {/* Botón Siguiente */}
        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
          <button
            className="page-link border-0 bg-transparent text-dark fw-bold"
            onClick={() => onPageChange(currentPage + 1)}
          >
            Siguiente
          </button>
        </li>

        {/* Botón Última Página */}
        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
          <button
            className="page-link border-0 bg-transparent text-dark fw-bold"
            onClick={() => onPageChange(totalPages)}
          >
            Última
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Paginacion;
