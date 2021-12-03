import React from "react";

import ProductCard from "../../../components/ProductCard";

// props : products []
function ListProduct(props) {
  const renderProducts = () => {
    const startIndex = (props.paginationState.page - 1) * props.itemsPerPage;
    const endIndex = startIndex + props.itemsPerPage;
    const slicedTodos = props.products.slice(startIndex, endIndex);
    return slicedTodos.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  };

  return <div className=" d-flex flex-wrap col-9 ">{renderProducts()}</div>;
}

export default ListProduct;
