import React, { useContext } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  TransactionContext,
  TransactionProvider,
} from "./context/transContext";

function App() {
  let transactions = useContext(TransactionContext);
  console.log(transactions);

  return (
    <TransactionProvider>
      <div className="container mt-4">
        {/* Header component start */}
        <h1 className="text-center">Expense Tracker</h1>
        {/* Header component End */}

        {/* Balance component start */}
        <h3>
          your Balances <br /> $260
        </h3>
        {/* Balance component End */}

        {/* Income expense component start */}
        <div className="d-flex justify-content-around border bg-white">
          <h3>
            income <br /> $260
          </h3>
          <h3>
            expense <br /> $260
          </h3>
        </div>

        {/* Income expense component end*/}

        {/* History  component start*/}
        <h3>History</h3>
        <hr></hr>
        <ul className="list-group border">
          {transactions.map((transObj, ind) => {
            return (
              <li
                key={ind}
                className="list-group-item mb-2 d-flex justify-content-between align-items-center"
              >
                <span>{transObj.desc}</span>
                <span className="badge badge-primary badge-pill py-2 px-3">
                  {transObj.amount}
                </span>
              </li>
            );
          })}
        </ul>

        {/* History  component end*/}

        {/* Transaction  component start*/}
        <h3>Add new Transaction</h3>
        <hr></hr>

        <form>
          <div className="form-group">
            <label className="w-100">
              Text
              <input
                className="form-control"
                htmlFor="text"
                placeholder="Enter Text..."
                required
              ></input>
            </label>
          </div>

          <div className="form-group ">
            <label className="w-100">
              Amount
              <input
                className="form-control "
                htmlFor="amount"
                placeholder="Enter Amount..."
                required
              ></input>
            </label>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            {" "}
            Add Transaction{" "}
          </button>
        </form>

        {/* Transaction  component end*/}
      </div>
    </TransactionProvider>
  );
}

export default App;
