import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { Button } from "reactstrap";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./style.css";

import ProductList from "./components/ProductList";

function ManageProduct() {
  const [products, setProducts] = useState([]);
  const [formState, setFormState] = useState({
    productName: "",
    productImage: "",
    price: 0,
    description: "",
    category: "",
  });
  const role = useSelector((state) => state.auth.role);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const fetchProducts = () => {
    axios
      .get("/products")
      .then((res) => {
        const { data } = res;
        setProducts(data);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderProducts = () => {
    return products.map((product) => (
      <ProductList fetchProducts={fetchProducts} product={product} />
    ));
  };

  const addNewProduct = () => {
    const { productImage, price, productName, category, description } =
      formState;

    const newProduct = {
      id: new Date().getTime(),
      productImage,
      price,
      productName,
      category,
      description,
    };

    axios
      .post("/products", newProduct)
      .then((res) => {
        console.log({ res });
        fetchProducts();
      })
      .catch((error) => console.log({ error }));
  };

  if (role !== "admin") return <Navigate to="/" replace />;
  return (
    <div className="container">
      <h1 className="text-center">Manage Products</h1>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Description</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderProducts()}</tbody>
      </table>

      <table className="w-100 mb-5">
        <tr>
          <td>
            <input
              placeholder="Name"
              name="productName"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              placeholder="Price"
              name="price"
              type="number"
              className="form-control"
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              placeholder="Image"
              name="productImage"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              placeholder="Description"
              name="description"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </td>
          <td>
            <select
              name="category"
              className="form-control"
              onChange={handleChange}
            >
              <option value="">All Items</option>
              <option value="kaos">Kaos</option>
              <option value="celana">Celana</option>
              <option value="aksesoris">Aksesoris</option>
            </select>
          </td>
          <td colSpan="2">
            {/* btn btn-outline-primary */}
            <Button outline color="primary" onClick={addNewProduct}>
              Add
            </Button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default ManageProduct;
