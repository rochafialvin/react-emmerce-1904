import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { useSelector } from "react-redux";
import "./style.css";

function HistoryTransaction() {
  const [transactions, setTransactions] = useState([]);
  const userId = useSelector((state) => state.auth.id);

  useEffect(async () => {
    const res = await axios.get("/transactions", { params: { userId } });
    setTransactions(res.data);
  }, []);

  const renderTransaction = () => {
    return transactions.map((trx) => {
      return (
        <div className="transaction-item">
          <div className="transaction-item-info1">
            <strong>Belanja</strong>{" "}
            {`${trx.date} ${trx.monthWord} ${trx.year}`}
            <span className="transaction-status">Selesai</span>{" "}
            {trx.invoiceNumber}
          </div>
          <div>
            <div className="d-flex justify-content-between">
              <div>
                {trx.transactionItems.map((item) => (
                  <div>
                    <p>Emmerce</p>

                    <div className="d-flex">
                      <img
                        className="transaction-img"
                        src={item.productImage}
                      />
                      <div className="ms-3 transaction-info2">
                        <p>
                          <strong>{item.productName}</strong>
                        </p>
                        <p className="support">
                          {item.quantity} barang x Rp. {item.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="transaction-total-price d-flex flex-column justify-content-center">
                <p>Total belanja</p>
                <p>
                  <strong> Rp. {trx.totalPayment} </strong>
                </p>
              </div>
            </div>

            <div className="transaction-detail-link">
              <span>Lihat detail transaksi</span>
            </div>
          </div>
        </div>
      );
    });
  };
  return <div className="transaction-container">{renderTransaction()}</div>;
}

export default HistoryTransaction;
