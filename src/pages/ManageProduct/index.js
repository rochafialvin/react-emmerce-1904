import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";

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
    return products.map((product) => <ProductList product={product} />);
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

    // AXIOS bersifat asynchronous, tanpa perlu menunggu proses ini selesai, javascript akan memproses kode berikutnya
    // JIKA ingin menjalankan kode setelah prosesnya selesai, maka tulis didalam .then() atau .catch()
    axios
      .post("/products", newProduct)
      .then((res) => {
        fetchProducts();
      })
      .catch((error) => console.log({ error }));
  };

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
            <th colSpan="2">Action</th>
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
            <button onClick={addNewProduct} className="btn btn-outline-info">
              Add Product
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default ManageProduct;
