import React from "react";

import ProductManager from "./components/ProductManager";
import ListProduct from "./components/ListProduct";

function index() {
  return (
    <div className="row container mt-5">
      <ProductManager />
      <ListProduct />
    </div>
  );
}

export default index;
