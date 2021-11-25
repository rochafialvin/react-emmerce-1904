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

  const compareStringAsc = (a, b) => {
    if (a.productName < b.productName) {
      return -1;
    } else if (a.productName > b.productName) {
      return 1;
    } else {
      return 0;
    }
  };

  const compareStringDesc = (a, b) => {
    if (b.productName < a.productName) {
      return -1;
    } else if (b.productName > a.productName) {
      return 1;
    } else {
      return 0;
    }
  };

  const onSortProducts = (sortBy) => {
    // sortBy : :lowPrice
    // rawData : [ {price : 11}, {price : 15}, {price : 13} ]
    const rawData = [...filteredProducts];

    switch (sortBy) {
      case "lowPrice":
        // rawData : [ {price : 11}, {price : 13}, {price : 15} ]
        rawData.sort((a, b) => a.price - b.price);
        break;
      case "highPrice":
        // rawData : [ {price : 15}, {price : 13}, {price : 11} ]
        rawData.sort((a, b) => b.price - a.price);
        break;
      case "az":
        rawData.sort(compareStringAsc);
        break;
      case "za":
        rawData.sort(compareStringDesc);
        break;
    }

    // [ {price : 11}, {price : 13}, {price : 15} ]
    setFilteredProducts(rawData);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <ProductManager
          onSearchProducts={onSearchProducts}
          onSortProducts={onSortProducts}
        />
        <ListProduct products={filteredProducts} />
      </div>
    </div>
  );
}

export default Index;
