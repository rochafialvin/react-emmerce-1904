import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";

import ProductManager from "./components/ProductManager";
import ListProduct from "./components/ListProduct";

function Index() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("/products");
      const { data } = res;
      setProducts(data);
    } catch (error) {
      console.log(alert(error.message));
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <ProductManager />
        <ListProduct products={products} />
      </div>
    </div>
  );
}

export default Index;
