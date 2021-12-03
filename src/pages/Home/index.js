import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";

import ProductManager from "./components/ProductManager";
import ListProduct from "./components/ListProduct";

function Index() {
  const [products, setProducts] = useState([]); // 19
  const [filteredProducts, setFilteredProducts] = useState([]); // sort : highPrice
  const [sortedProducts, setSortedProducts] = useState([]); // sort : highPrice

  const fetchProducts = async () => {
    try {
      const res = await axios.get("/products");
      const { data } = res;
      setProducts(data);
      setFilteredProducts(data);
      setSortedProducts(data);
    } catch (error) {
      console.log(alert(error.message));
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filterProducts = (formData) => {
    const resultFilter = products.filter((product) => {
      const productName = product.productName.toLowerCase();
      const keyword = formData.keyword.toLowerCase();
      return (
        productName.includes(keyword) &&
        product.category.includes(formData.category)
      );
    });

    setFilteredProducts(resultFilter);
  };

  const sortProducts = (sortValue) => {
    const rawData = [...filteredProducts];

    switch (sortValue) {
      case "lowPrice":
        rawData.sort((a, b) => a.price - b.price);
        break;
      case "highPrice":
        rawData.sort((a, b) => b.price - a.price);
        break;
      case "az":
        rawData.sort((a, b) => {
          if (a.productName < b.productName) {
            return -1;
          } else if (a.productName > b.productName) {
            return 1;
          } else {
            return 0;
          }
        });
        break;
      case "za":
        rawData.sort((a, b) => {
          if (a.productName < b.productName) {
            return 1;
          } else if (a.productName > b.productName) {
            return -1;
          } else {
            return 0;
          }
        });
        break;

      default:
        // ??
        break;
    }

    setSortedProducts(rawData);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <ProductManager
          filterProducts={filterProducts}
          sortProducts={sortProducts}
        />
        <ListProduct products={sortedProducts} />
      </div>
    </div>
  );
}

export default Index;
