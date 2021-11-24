import React, { useState, useEffect } from "react";
import axios from "axios";

import ProductManager from "./components/ProductManager";
import ListProduct from "./components/ListProduct";

function Index() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // menggantikan componentDidMount
  useEffect(() => {
    axios
      .get("http://localhost:2021/products")
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
      })
      .catch((error) => {
        console.log(alert(error.message));
      });
  }, []);

  // const onSearchProducts = ({ keyword, category }) => { ... }
  const onSearchProducts = (obj) => {
    const { keyword, category } = obj;
    const filterResult = products.filter((product) => {
      const productLowerCase = product.productName.toLowerCase();
      const keywordLowerCase = keyword.toLowerCase();
      return (
        productLowerCase.includes(keywordLowerCase) &&
        product.category.includes(category)
      );
    });

    setFilteredProducts(filterResult);
  };

  return (
    <div className="row container mt-5">
      <ProductManager onSearchProducts={onSearchProducts} />
      <ListProduct products={filteredProducts} />
    </div>
  );
}

export default Index;
