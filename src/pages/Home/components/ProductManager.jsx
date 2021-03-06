import React, { useState } from "react";

// props : filterProducts, sortProducts, paginationState, setPaginationState
function ProductManager(props) {
  const { paginationState, setPaginationState } = props;
  const { page, lastPage } = paginationState;

  const [formState, setFormState] = useState({
    keyword: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const btnSearchHandler = () => {
    props.filterProducts(formState);
  };

  const selectSortHandler = (e) => {
    props.sortProducts(e.target.value);
  };

  const btnPrevPageHandler = () => {
    setPaginationState({ ...paginationState, page: page - 1 });
  };
  const btnNextPageHandler = () => {
    setPaginationState({ ...paginationState, page: page + 1 });
  };

  return (
    <div className="col-3">
      {/* Filter */}
      <div className="card">
        <div className="card-header">
          <strong>Filter products</strong>
        </div>
        <div className="card-body">
          <label>Product Name</label>
          <input
            name="keyword"
            type="text"
            className="form-control mb-3"
            onChange={handleChange}
          />
          <label>Product Category</label>
          <select
            name="category"
            className="form-control"
            onChange={handleChange}
          >
            <option value="">All Items</option>
            <option value="kaos">Kaos</option>
            <option value="celana">Celana</option>
            <option value="aksesoris">Aksesoris</option>
          </select>
          <button
            onClick={btnSearchHandler}
            className="btn btn-outline-primary mt-3 d-block w-100"
          >
            Search
          </button>
        </div>
      </div>

      {/* Sort */}
      <div className="card mt-4">
        <div className="card-header">
          <strong>Sort Products</strong>
        </div>
        <div className="card-body">
          <label className="mb-2">Sort by</label>
          <select
            name="sortBy"
            className="form-control"
            onChange={selectSortHandler}
          >
            <option value="">Default</option>
            <option value="lowPrice">Lowest Price</option>
            <option value="highPrice">Highest Price</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-3">
        <div className="d-flex flex-row justify-content-between align-items-center">
          <button
            onClick={btnPrevPageHandler}
            className={`btn btn-dark ${page === 1 && "disabled"} `}
          >
            {"<"}
          </button>
          <div className="text-center">
            Page {page} of {lastPage}
          </div>
          <button
            onClick={btnNextPageHandler}
            className={`btn btn-dark ${page === lastPage && "disabled"} `}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductManager;
