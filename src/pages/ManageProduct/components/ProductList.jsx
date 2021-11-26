import React, { useState } from "react";
import axios from "../../../utils/axios";

function ProductList(props) {
  const { id, productName, productImage, price, description, category } =
    props.product;

  const [isEdit, setIsEdit] = useState(false);

  const onBtnDeleteClick = () => {
    axios
      .delete(`/products/${id}`)
      .then((res) => {
        alert("Berhasil delete product");
        props.fetchProducts();
      })
      .catch((err) => alert("Gagal delete product"));
  };

  const onBtnSaveClick = () => {};

  const onBtnEditClick = () => {
    setIsEdit(true);
  };
  const onBtnCancelClick = () => {
    setIsEdit(false);
  };

  if (isEdit) {
    return (
      <tr>
        <td>{id}</td>
        <td>
          <input type="text" name="productName" />
        </td>
        <td>
          <input type="text" name="price" />
        </td>
        <td>
          <input type="text" name="productImage" />
        </td>
        <td>
          <input type="text" name="description" />
        </td>
        <td>
          <select name="category" className="form-control">
            <option value="">All Items</option>
            <option value="kaos">Kaos</option>
            <option value="celana">Celana</option>
            <option value="aksesoris">Aksesoris</option>
          </select>
        </td>
        <td>
          <button onClick={onBtnCancelClick} className="btn btn-outline-danger">
            Cancel
          </button>
        </td>
        <td>
          <button onClick={onBtnSaveClick} className="btn btn-outline-success">
            Save
          </button>
        </td>
      </tr>
    );
  }

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
        <button onClick={onBtnEditClick} className="btn btn-outline-secondary">
          Edit
        </button>
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
