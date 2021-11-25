import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";

import "./style.css";

import ProductList from "./components/ProductList";

function ManageProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => {
        const { data } = res;
        setProducts(data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  const renderProducts = () => {
    return products.map((product) => <ProductList product={product} />);
  };

  return (
    <div className="container">
      <h1 className="text-center">Manage Products</h1>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Description</th>
            <th>Category</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>{renderProducts()}</tbody>
      </table>
    </div>
  );
}

export default ManageProduct;
