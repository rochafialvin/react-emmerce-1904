import React, { useState, useEffect } from "react";
import axios from "axios";

import ProductManager from "./components/ProductManager";
import ListProduct from "./components/ListProduct";

function Index() {
  const [products, setProducts] = useState([]);

  // menggantikan componentDidMount
  useEffect(() => {
    axios
      .get("http://localhost:2021/barang")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(alert(error.message));
      });
  }, []);

  return (
    <div className="row container mt-5">
      <ProductManager />
      <ListProduct products={products} />
    </div>
  );
}

export default Index;
