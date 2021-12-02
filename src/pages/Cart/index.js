import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "../../utils/axios";

function Cart() {
  const userId = useSelector((state) => state.auth.id);
  const [carts, setCarts] = useState([]);
  const [priceState, setPriceState] = useState({
    subTotal: 0,
    tax: 0,
    totalPrice: 0,
  });
  const [formState, setFormState] = useState({
    recipientName: "",
    address: "",
    payment: 0,
  });
  const [isShowSummary, setIsShowSummary] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const fetchCarts = async () => {
    try {
      const { data } = await axios.get("/carts", { params: { userId } });

      let subTotal = 0;
      data.forEach((cart) => (subTotal += cart.quantity * cart.price));
      const tax = subTotal * 0.05;
      const totalPrice = subTotal + tax;

      setPriceState({ subTotal, tax, totalPrice });
      setCarts(data);
    } catch (error) {
      alert("Gagal mengambil carts");
    }
  };

  useEffect(() => {
    fetchCarts();
  }, []);

  const onDeleteClick = async (id) => {
    const isDelete = window.confirm("Apakah yakin ingin menghapus cart ini ?");
    if (isDelete) {
      try {
        await axios.delete(`/carts/${id}`);
        alert("Delete product berhasil");
        fetchCarts();
      } catch (error) {
        alert("Delete product gagal");
      }
    }
  };

  const onPaymentClick = async () => {
    try {
      const d = new Date();
      const date = d.getDate();
      const month = d.getMonth(); // 11
      const year = d.getFullYear();
      const hours = d.getHours();
      const minutes = d.getMinutes();

      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const newTransaction = {
        id: d.getTime(),
        userId,
        address: formState.address,
        totalPayment: priceState.totalPrice,
        recipientName: formState.recipientName,
        transactionDate: {
          date,
          month,
          year,
          hours,
          minutes,
          monthWord: months[month],
        },
        transactionItems: carts,
        invoiceNumber: `INV/${year}${month}${date}`,
      };
      await axios.post("/transactions", newTransaction);
      alert("Transaksi berhasil");
    } catch (error) {
      alert("Transaksi gagal");
      console.log(error);
    }
  };

  const renderCarts = () => {
    return carts.map((cart) => {
      return (
        <tr key={cart.id}>
          <td className="align-middle">{cart.productName}</td>
          <td className="align-middle">{cart.price}</td>
          <td className="align-middle">
            <img src={cart.productImage} alt="" style={{ height: "125px" }} />
          </td>
          <td className="align-middle">{cart.quantity}</td>
          <td className="align-middle">{cart.quantity * cart.price}</td>
          <td className="align-middle">
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                onDeleteClick(cart.id);
              }}
            >
              Delete
            </button>
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
                  <button
                    onClick={() => {
                      setIsShowSummary(!isShowSummary);
                    }}
                    className="btn btn-outline-success"
                  >
                    Checkout
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        {isShowSummary && (
          <div className="col-3">
            <div className="card text-left">
              <div className="card-header">
                <strong>Order Summary</strong>
              </div>
              <div className="card-body">
                <div className="d-flex my-2 flex-row justify-content-between align-items-center">
                  <span className="font-weight-bold">Subtotal Price</span>
                  <span>Rp {priceState.subTotal}</span>
                </div>
                <div className="d-flex my-2 flex-row justify-content-between align-items-center">
                  <span className="font-weight-bold">Tax Fee (5%)</span>
                  <span>Rp {priceState.tax}</span>
                </div>
                <div className="d-flex my-2 flex-row justify-content-between align-items-center">
                  <span className="font-weight-bold">Total Price</span>
                  <span>Rp {priceState.totalPrice}</span>
                </div>
              </div>
              <div className="card-body border-top">
                <label htmlFor="recipientName">Recipient Name</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  name="recipientName"
                  onChange={handleChange}
                />
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  onChange={handleChange}
                />
              </div>
              <div className="card-footer">
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <input
                    name="payment"
                    className="form-control mx-1"
                    type="number"
                    onChange={handleChange}
                  />
                  <button
                    onClick={onPaymentClick}
                    className="btn btn-outline-success mx-1"
                  >
                    Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
