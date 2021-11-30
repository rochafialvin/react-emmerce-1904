import React, { useState } from "react";
import axios from "../../../utils/axios";

function ProductList(props) {
  const { id, productName, productImage, price, description, category } =
    props.product;

  const [formState, setFormState] = useState({
    editProductName: productName,
    editProductImage: productImage,
    editPrice: price,
    editDescription: description,
    editCategory: category,
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const {
    editProductName,
    editProductImage,
    editPrice,
    editDescription,
    editCategory,
  } = formState;

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

  const onBtnSaveClick = () => {
    const newData = {
      productName: editProductName,
      productImage: editProductImage,
      price: editPrice,
      description: editDescription,
      category: editCategory,
    };

    axios
      .patch(`/products/${id}`, newData)
      .then((res) => {
        alert("Berhasil update product");
        setIsEdit(false);
        props.fetchProducts();
      })
      .catch((err) => alert("Gagal update product"));
  };

  const onBtnEditOrCancelClick = () => {
    setIsEdit(!isEdit);
  };

  if (isEdit) {
    return (
      <tr>
        <td>{id}</td>
        <td className="table-data">
          <input
            type="text"
            name="editProductName"
            value={editProductName}
            onChange={handleChange}
          />
        </td>
        <td className="table-data">
          <input
            type="text"
            name="editPrice"
            value={editPrice}
            onChange={handleChange}
          />
        </td>
        <td className="table-data">
          <input
            type="text"
            name="editProductImage"
            value={editProductImage}
            onChange={handleChange}
          />
        </td>
        <td className="table-data">
          <input
            type="text"
            name="editDescription"
            value={editDescription}
            onChange={handleChange}
          />
        </td>
        <td className="table-data">
          <select
            name="editCategory"
            className="form-control"
            value={editCategory}
            onChange={handleChange}
          >
            <option value="">All Items</option>
            <option value="kaos">Kaos</option>
            <option value="celana">Celana</option>
            <option value="aksesoris">Aksesoris</option>
          </select>
        </td>
        <td className="table-data">
          <button
            onClick={onBtnEditOrCancelClick}
            className="w-100 btn btn-outline-warning"
          >
            Cancel
          </button>

          <button
            onClick={onBtnSaveClick}
            className="w-100 btn btn-outline-success"
          >
            Save
          </button>
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{id}</td>
      <td className="table-data">{productName}</td>
      <td className="table-data">{price}</td>
      <td className="table-data">
        <img className="admin-product-image" src={productImage} alt="" />
      </td>
      <td className="table-data">{description}</td>
      <td className="table-data">{category}</td>
      <td className="table-data">
        <button
          onClick={onBtnEditOrCancelClick}
          className=" w-100 btn btn-outline-info"
        >
          Edit
        </button>

        <button
          onClick={onBtnDeleteClick}
          className=" w-100 btn btn-outline-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ProductList;
