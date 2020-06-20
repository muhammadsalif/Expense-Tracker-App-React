import React, { useContext, useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { TransactionContext } from "./context/transContext";

import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { AddTrasaction } from "./components/AddTrasaction";

function App() {
  let { transactions, addTransaction } = useContext(TransactionContext);
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
      <IncomeExpense
        getIncome={getIncome()}
        getExpense={getExpense()}
      ></IncomeExpense>

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
      <AddTrasaction
        handleAddition={handleAddition}
        newDesc={newDesc}
        setDesc={setDesc}
        newAmount={newAmount}
        setAmount={setAmount}
      ></AddTrasaction>
      {/* Transaction  component end*/}
    </div>
  );
}

export default App;
