import React from "react";

// jangan lupa buat parameter props untuk mengakses properties
function ListProduct(props) {
  console.log("props milik ListProduct");
  console.log(props);

  return (
    <div className="col-3">
      <h1>List Product</h1>
    </div>
  );
}

export default ListProduct;
