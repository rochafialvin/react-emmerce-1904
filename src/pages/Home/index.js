import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";

import ProductManager from "./components/ProductManager";
import ListProduct from "./components/ListProduct";

function Index() {
  const [products, setProducts] = useState([]); // 20
  const [filteredProducts, setFilteredProducts] = useState([]); // 20

  const fetchProducts = async () => {
    try {
      const res = await axios.get("/products");
      const { data } = res;
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.log(alert(error.message));
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filterProducts = (formData) => {
    // kaos hitam poloson ? poloson
    const resultFilter = products.filter((product) => {
      const productName = product.productName.toLowerCase();
      const keyword = formData.keyword.toLowerCase();
      return productName.includes(keyword);
    });

    setFilteredProducts(resultFilter);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <ProductManager filterProducts={filterProducts} />
        <ListProduct products={filteredProducts} />
      </div>
    </div>
  );
}

export default Index;
