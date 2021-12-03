import React from "react";

import ProductCard from "../../../components/ProductCard";

// props : products []
function ListProduct(props) {
  const { paginationState, products } = props;
  const { page, itemsPerPage } = paginationState;
  console.log(props.paginationState);
  console.log(props.products);
  const renderProducts = () => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedTodos = props.products.slice(startIndex, endIndex);
    return slicedTodos.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  };

  return <div className=" d-flex flex-wrap col-9 ">{renderProducts()}</div>;
}

export default ListProduct;
