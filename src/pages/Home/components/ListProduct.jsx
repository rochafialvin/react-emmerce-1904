import React from "react";

import ProductCard from "../../../components/ProductCard";

// props : products []
function ListProduct(props) {
  const renderProducts = () => {
    return props.products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  };

  return <div className=" d-flex flex-wrap col-9 ">{renderProducts()}</div>;
}

export default ListProduct;
