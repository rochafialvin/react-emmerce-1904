import React from "react";

function ProductList(props) {
  const { id, productName, productImage, price, description, category } =
    props.product;

  return (
    <tr>
      <td>{id}</td>
      <td>{productName}</td>
      <td>{price}</td>
      <td>
        <img className="admin-product-image" src={productImage} alt="" />
      </td>
      <td>{description}</td>
      <td>{category}</td>
      <td>
        <button className="btn btn-outline-secondary">Edit</button>
      </td>
      <td>
        <button className="btn btn-outline-danger">Delete</button>
      </td>
    </tr>
  );
}

export default ProductList;
