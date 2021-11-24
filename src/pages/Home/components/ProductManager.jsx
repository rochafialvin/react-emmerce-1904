import React, { useState } from "react";

// props : onSearchProducts
function ProductManager(props) {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const btnSearchHandler = () => {
    props.onSearchProducts(keyword);
  };

  return (
    <div className="col-3">
      <div className="card">
        <div className="card-header">
          <strong>Filter products</strong>
        </div>
        <div className="card-body">
          <label>Product Name</label>
          <input
            type="text"
            className="form-control mb-3"
            onChange={handleChange}
            value={keyword}
          />
          <label>Product Category</label>
          <select className="form-control">
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
    </div>
  );
}

export default ProductManager;
