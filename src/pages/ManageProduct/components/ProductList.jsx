import React from "react";
import axios from "../../../utils/axios";

function ProductList(props) {
  const { id, productName, productImage, price, description, category } =
    props.product;

  const onBtnDeleteClick = () => {
    axios
      .delete(`/products/${id}`)
      .then((res) => {
        alert("Berhasil delete product");
        props.fetchProducts();
      })
      .catch((err) => alert("Gagal delete product"));
  };
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
        <button onClick={onBtnDeleteClick} className="btn btn-outline-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ProductList;
