import React, { useState, useEffect } from "react";
import axios from "axios";

import ProductManager from "./components/ProductManager";
import ListProduct from "./components/ListProduct";

function Index() {
  const [products, setProducts] = useState([]);
  const [finalProducts, setFinalProducts] = useState([]);
  const [filterState, setFilterState] = useState({
    keyword: "",
    category: "",
    sortBy: "",
  });
  const [paginationState, setPaginationState] = useState({
    page: 1,
    maxPage: 0,
    itemsPerPage: 5,
  });

  // menggantikan componentDidMount
  useEffect(() => {
    axios
      .get("http://localhost:2021/products")
      .then((res) => {
        const { data } = res;
        setProducts(data);
        setFinalProducts(data);
        setPaginationState({
          ...paginationState,
          maxPage: Math.ceil(data.length / paginationState.itemsPerPage),
        });
      })
      .catch((error) => {
        console.log(alert(error.message));
      });
  }, []);

  useEffect(() => {
    createFinalProducts();
  }, [filterState, paginationState.page]);

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

  const createFinalProducts = () => {
    const { keyword, category, sortBy } = filterState;

    const filterResult = products.filter((product) => {
      const productLowerCase = product.productName.toLowerCase();
      const keywordLowerCase = keyword.toLowerCase();
      return (
        productLowerCase.includes(keywordLowerCase) &&
        product.category.includes(category)
      );
    });

    const newMaxPage = filterResult.length
      ? Math.ceil(filterResult.length / paginationState.itemsPerPage)
      : 1;
    setPaginationState({
      ...paginationState,
      maxPage: newMaxPage,
    });

    switch (sortBy) {
      case "lowPrice":
        filterResult.sort((a, b) => a.price - b.price);
        break;
      case "highPrice":
        filterResult.sort((a, b) => b.price - a.price);
        break;
      case "az":
        filterResult.sort(compareStringAsc);
        break;
      case "za":
        filterResult.sort(compareStringDesc);
        break;
    }

    const { page, itemsPerPage } = paginationState;
    // Slicing
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedTodos = filterResult.slice(startIndex, endIndex);

    setFinalProducts(slicedTodos);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <ProductManager
          setFilterState={setFilterState}
          filterState={filterState}
          paginationState={paginationState}
          setPaginationState={setPaginationState}
        />
        <ListProduct products={finalProducts} />
      </div>
    </div>
  );
}

export default Index;
