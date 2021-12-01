import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "../../utils/axios";

function Cart() {
  const userId = useSelector((state) => state.auth.id);
  const [carts, setCarts] = useState([]);

  useEffect(async () => {
    try {
      const res = await axios.get("/carts", { params: { userId } });
      setCarts(res.data);
    } catch (error) {
      alert("Gagal mengambil carts");
    }
  }, []);

  const renderCarts = () => {
    return carts.map((cart) => {
      return (
        <tr>
          <td className="align-middle">{cart.productName}</td>
          <td className="align-middle">{cart.price}</td>
          <td className="align-middle">
            <img src={cart.productImage} alt="" style={{ height: "125px" }} />
          </td>
          <td className="align-middle">{cart.quantity}</td>
          <td className="align-middle">{cart.quantity * cart.price}</td>
          <td className="align-middle">
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="p-5 text-center">
      <h1>Cart</h1>
      <div className="row mt-5">
        <div className="col-9 text-center">
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{renderCarts()}</tbody>
            <tfoot className="bg-light">
              <tr>
                <td colSpan="6">
                  <button className="btn btn-success">Checkout</button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cart;
