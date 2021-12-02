import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useSelector } from "react-redux";
import "./style.css";

function TransactionModal(props) {
  return (
    <Modal isOpen={props.isModalShow}>
      <ModalHeader>Modal title</ModalHeader>
      <ModalBody>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </ModalBody>
      <ModalFooter>
        <Button outline color="primary">
          Do Something
        </Button>
        <Button
          onClick={() => {
            props.setIsModalShow(false);
          }}
          outline
          color="danger"
        >
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

function HistoryTransaction() {
  const [transactions, setTransactions] = useState([]);
  const [isModalShow, setIsModalShow] = useState(false);
  const userId = useSelector((state) => state.auth.id);

  useEffect(async () => {
    const res = await axios.get("/transactions", { params: { userId } });
    setTransactions(res.data);
  }, []);

  const renderTransaction = () => {
    return transactions.map((trx) => {
      return (
        <div className="transaction-item">
          {/* merah - start */}
          <div className="transaction-item-info1">
            <strong>Belanja</strong>
            {`${trx.transactionDate.date} ${trx.transactionDate.monthWord} ${trx.transactionDate.year}`}
            <span className="transaction-status">Selesai</span>
            {trx.invoiceNumber}
          </div>
          {/* merah - end */}
          <div className="d-flex justify-content-between">
            {/* kuning - start */}
            <div>
              {trx.transactionItems.map((item) => {
                // ungu - start
                return (
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
                );
                // ungu - start
              })}
            </div>
            {/* kuning - end */}

            {/* hijau - start */}
            <div className="transaction-total-price d-flex flex-column justify-content-center ">
              <p>Total belanja</p>
              <p>
                <strong> Rp. {trx.totalPayment} </strong>
              </p>
            </div>
            {/* hijau - end */}
          </div>

          {/* hitam - start */}
          <div className="transaction-detail-link">
            <span
              onClick={() => {
                setIsModalShow(!isModalShow);
              }}
            >
              Lihat detail transaksi
            </span>
          </div>
          {/* hitam - end */}
        </div>
      );
    });
  };
  return (
    <>
      <div className="transaction-container">{renderTransaction()}</div>
      <TransactionModal
        isModalShow={isModalShow}
        setIsModalShow={setIsModalShow}
      />
    </>
  );
}

export default HistoryTransaction;
