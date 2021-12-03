import React from "react";

import ProductCard from "../../../components/ProductCard";

// props : products. paginationState
function ListProduct(props) {
  const { paginationState, products } = props;
  const { page, itemsPerPage } = paginationState;

  const renderProducts = () => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedProducts = products.slice(startIndex, endIndex);

    return slicedProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  };

  return <div className=" d-flex flex-wrap col-9 ">{renderProducts()}</div>;
}

export default ListProduct;

/*
      products : [ {}, {}, {}, {} ,{}, {}, {}, {}, {} ,{} ]
      
      itemsPerPage: 3
      page 1 : 0 - 2   products.slice(0, 3)
      page 2 : 3 - 5   products.slice(3, 6)
      page 3 : 6 - 8   products.slice(6, 9)
      page 4 : 9 - 10  products.slice(9, 12)

      startIndex : (page - 1) * itemsPerPage
      endIndex : startIndex + itemsPerPage
    
    */
