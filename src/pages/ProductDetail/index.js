import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../utils/axios";

function ProductDetail() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios
      .get("/products", { params: { id: params.id } })
      .then((res) => {
        setProduct(res.data[0]);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  const { productImage, productName, price, description } = product;
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-6">
          <img style={{ width: "100%" }} src={productImage} alt="" />
        </div>
        <div className="col-6 d-flex flex-column justify-content-center">
          <h4>{productName}</h4>
          <h5>Rp {price}</h5>
          <p>{description}</p>
          <div className="d-flex flex-row align-items-center">
            <button className="btn btn-primary ">-</button>
            <strong className="text-center mx-4">{quantity}</strong>
            <button className="btn btn-primary ">+</button>
          </div>
          <button className="btn btn-success mt-3">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
