import React, { useContext, useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { TransactionContext } from "./context/transContext";

import { Header } from "./components/Header";
import { Balance } from "./components/Balance";

function App() {
  let { transactions } = useContext(TransactionContext);
  let { addTransaction } = useContext(TransactionContext);
  let [newDesc, setDesc] = useState("");
  let [newAmount, setAmount] = useState(0);

  const handleAddition = (e) => {
    e.preventDefault();
    addTransaction({
      amount: Number(newAmount),
      desc: newDesc,
    });
    setDesc("");
    setAmount(0);
  };

  const getIncome = () => {
    let income = 0;
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0) income += transactions[i].amount;
    }
    return income;
  };

  const getExpense = () => {
    let expense = 0;
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0) expense += transactions[i].amount;
    }
    return expense;
  };

  return (
    <div className="container py-3 my-4">
      {/* Header component start */}
      <Header></Header>
      {/* Header component End */}

      {/* Balance component start */}
      <Balance getIncome={getIncome()} getExpense={getExpense()}></Balance>

      {/* Balance component End */}

      {/* Income expense component start */}
      <div className="d-flex justify-content-around rounded mybg">
        <h3>
          <span className="text-capitalize  myFont2">income</span>
          <br />
          <span className="text-primary myFont2">${getIncome()}</span>
        </h3>
        <h3>
          <span class="text-capitalize myFont2">expense</span> <br />
          <span className="text-danger myFont2">${getExpense()}</span>
        </h3>
      </div>

      {/* Income expense component end*/}

      {/* History  component start*/}
      <div class="mt-3">
        <h3 className="pb-2 border-secondary myFont border-bottom">History</h3>
        <ul className="list-group mt-3">
          {transactions.map((transObj, ind) => {
            return (
              <li
                key={ind}
                className="list-group-item mb-2 d-flex justify-content-between align-items-center py-1"
              >
                <span className="myFont font-size">{transObj.desc}</span>
                <span
                  className={`badge badge-${
                    transObj.amount > 0 ? "primary " : "danger "
                  } badge-pill py-1 px-3 my-1 myFont2 font-size`}
                >
                  ${transObj.amount}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* History  component end*/}

      {/* Transaction  component start*/}
      <h3>Add new Transaction</h3>
      <hr></hr>

      <form onSubmit={handleAddition}>
        <div className="form-group">
          <label className="w-100">
            Enter description
            <input
              value={newDesc}
              className="form-control"
              htmlFor="text"
              placeholder="Enter Text..."
              required
              onChange={(e) => setDesc(e.target.value)}
            ></input>
          </label>
        </div>

        <div className="form-group ">
          <label className="w-100">
            enter Amount
            <input
              value={newAmount}
              className="form-control "
              htmlFor="amount"
              placeholder="Enter Amount..."
              required
              onChange={(e) => setAmount(e.target.value)}
            ></input>
          </label>
        </div>
        <span className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-warning text-capitalize myFont font-size px-5 py-2 "
          >
            {" "}
            Add Transaction{" "}
          </button>
        </span>
      </form>

      {/* Transaction  component end*/}
    </div>
  );
}

export default App;
